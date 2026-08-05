import { useCallback, useEffect, useRef, useState } from "react";

export type SpeechStatus = "idle" | "loading" | "playing" | "paused";
export type SpeechEngine = "ai" | "browser" | null;

// Optional server route that proxies Lovable AI text-to-speech.
// When it is unavailable, out of credits (402) or rate limited (429),
// we automatically fall back to the built-in browser voice.
const AI_TTS_ENDPOINT =
  (import.meta.env.VITE_TTS_ENDPOINT as string | undefined) || "/api/tts";

/** Strip markdown so the voice reads clean prose. */
export function toSpeakableText(raw: string): string {
  return raw
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/^\s*[#>-]+\s*/gm, "")
    .replace(/[*_~|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function useTextToSpeech() {
  const [status, setStatus] = useState<SpeechStatus>("idle");
  const [engine, setEngine] = useState<SpeechEngine>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const cleanupAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    cleanupAudio();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setStatus("idle");
    setEngine(null);
  }, [cleanupAudio]);

  useEffect(() => stop, [stop]);

  const speakWithBrowser = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setStatus("idle");
      return false;
    }
    const synth = window.speechSynthesis;
    synth.cancel();

    // Chunk to avoid the ~200 char cutoff bug in some browsers.
    const chunks = text.match(/[^.!?]+[.!?]*\s*/g)?.reduce<string[]>((acc, sentence) => {
      const last = acc[acc.length - 1];
      if (last && (last + sentence).length < 220) acc[acc.length - 1] = last + sentence;
      else acc.push(sentence);
      return acc;
    }, []) ?? [text];

    const voice =
      synth.getVoices().find((v) => /en-(US|GB)/i.test(v.lang) && /natural|google|samantha/i.test(v.name)) ||
      synth.getVoices().find((v) => /^en/i.test(v.lang));

    chunks.forEach((chunk, i) => {
      const utterance = new SpeechSynthesisUtterance(chunk);
      if (voice) utterance.voice = voice;
      utterance.rate = 1;
      utterance.pitch = 1;
      if (i === chunks.length - 1) {
        utterance.onend = () => {
          setStatus("idle");
          setEngine(null);
        };
      }
      utterance.onerror = () => {
        setStatus("idle");
        setEngine(null);
      };
      synth.speak(utterance);
    });

    setEngine("browser");
    setStatus("playing");
    return true;
  }, []);

  const speak = useCallback(
    async (rawText: string) => {
      const text = toSpeakableText(rawText);
      if (!text) return;

      stop();
      setStatus("loading");

      // 1) Try the premium Lovable AI voice.
      try {
        const response = await fetch(AI_TTS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text.slice(0, 4000), voice: "alloy" }),
        });

        if (response.ok && (response.headers.get("content-type") || "").startsWith("audio")) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          objectUrlRef.current = url;
          const audio = new Audio(url);
          audioRef.current = audio;
          audio.onended = () => {
            setStatus("idle");
            setEngine(null);
          };
          audio.onerror = () => speakWithBrowser(text);
          await audio.play();
          setEngine("ai");
          setStatus("playing");
          return;
        }
        // 402 = out of credits, 429 = rate limited, 404 = no route deployed.
      } catch {
        // network / route missing — fall through
      }

      // 2) Auto-switch to the free built-in browser voice.
      speakWithBrowser(text);
    },
    [speakWithBrowser, stop],
  );

  const pause = useCallback(() => {
    if (engine === "ai" && audioRef.current) audioRef.current.pause();
    else if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.pause();
    setStatus("paused");
  }, [engine]);

  const resume = useCallback(() => {
    if (engine === "ai" && audioRef.current) void audioRef.current.play();
    else if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.resume();
    setStatus("playing");
  }, [engine]);

  const toggle = useCallback(
    (text: string) => {
      if (status === "playing") pause();
      else if (status === "paused") resume();
      else void speak(text);
    },
    [pause, resume, speak, status],
  );

  return { status, engine, speak, pause, resume, stop, toggle };
}
