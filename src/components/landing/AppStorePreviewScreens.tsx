import type { ReactNode } from "react";
import { PhoneChrome } from "@/components/app-store-previews/PhoneChrome";
import {
  DARK_FRAMES,
  renderPreviewFrame,
  type PreviewFrameId,
} from "@/components/app-store-previews/featureFrames";

export function PreviewPhoneShell({
  children,
  className = "",
  canvas = "light",
}: {
  children: ReactNode;
  className?: string;
  canvas?: "light" | "blue" | "dark";
}) {
  return (
    <div className={`relative mx-auto w-[220px] sm:w-[240px] ${className}`}>
      <div className="rounded-[2.35rem] bg-[#1d1d1f] p-[8px] shadow-[0_36px_70px_-22px_rgba(29,29,31,0.45)]">
        <div
          className={`relative overflow-hidden rounded-[1.85rem] aspect-[390/760] ${
            canvas === "blue"
              ? "bg-gradient-to-b from-[#007AFF] to-[#0056CC]"
              : canvas === "dark"
                ? "bg-[#0B0B0F]"
                : "bg-[#F2F2F7]"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ScaledLatestFrame({ id }: { id: string }) {
  const dark = DARK_FRAMES.has(id as PreviewFrameId);
  return (
    <div
      className="relative mx-auto w-[220px] overflow-hidden sm:w-[240px]"
      style={{ aspectRatio: "390 / 844" }}
    >
      <div className="absolute left-0 top-0 origin-top-left scale-[0.5641] sm:scale-[0.6154]">
        <PhoneChrome statusLight={dark} previewId={id}>
          {renderPreviewFrame(id)}
        </PhoneChrome>
      </div>
    </div>
  );
}

export function PreviewScreenById({ id }: { id: string }) {
  return <ScaledLatestFrame id={id} />;
}

export function DashboardPhoneMock() {
  return <ScaledLatestFrame id="wallet" />;
}
export function SendPhoneMock() {
  return <ScaledLatestFrame id="send" />;
}
export function ReceivePhoneMock() {
  return <ScaledLatestFrame id="request" />;
}
export function PosPhoneMock() {
  return <ScaledLatestFrame id="pos" />;
}
export function VirtualCardMock() {
  return <ScaledLatestFrame id="card" />;
}
export function MiningPhoneMock() {
  return <ScaledLatestFrame id="mining" />;
}
export function AiChatMock() {
  return <ScaledLatestFrame id="ai" />;
}
export function NftGridMock() {
  return <ScaledLatestFrame id="nft" />;
}
