import { Headphones, Loader2, Pause, Play, Square } from "lucide-react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

interface ListenButtonProps {
  /** Text (markdown is fine) that should be read aloud. */
  getText: () => string;
  label?: string;
  variant?: "light" | "ink";
  className?: string;
}

const ListenButton = ({ getText, label = "Listen", variant = "light", className = "" }: ListenButtonProps) => {
  const { status, toggle, stop } = useTextToSpeech();

  const base =
    variant === "ink"
      ? "bg-card/10 text-primary-foreground hover:bg-card/20"
      : "bg-secondary text-foreground/80 hover:text-foreground hover:bg-secondary/70";

  const isActive = status === "playing" || status === "paused";

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={() => toggle(getText())}
        aria-label={status === "playing" ? "Pause audio" : label}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${base}`}
      >
        {status === "loading" ? (
          <Loader2 size={15} className="animate-spin" />
        ) : status === "playing" ? (
          <Pause size={15} />
        ) : status === "paused" ? (
          <Play size={15} />
        ) : (
          <Headphones size={15} />
        )}
        {status === "playing" ? "Pause" : status === "paused" ? "Resume" : label}
      </button>

      {isActive && (
        <button
          type="button"
          onClick={stop}
          aria-label="Stop audio"
          className={`inline-flex items-center justify-center rounded-full p-2 transition-colors ${base}`}
        >
          <Square size={13} />
        </button>
      )}
    </div>
  );
};

export default ListenButton;
