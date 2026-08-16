import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronRight, LayoutGrid, ScanLine, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function IosHeader({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="px-4 pb-2 pt-12">
      <div className="flex items-center justify-between">
        <span className="text-[22px] leading-none text-[#007AFF]">‹</span>
        {right ?? <span className="w-6" />}
      </div>
      <h1 className="mt-1 text-[28px] font-bold leading-tight tracking-tight text-[#1C1C1E]">{title}</h1>
      {subtitle ? <p className="mt-0.5 text-[13px] text-[#8E8E93]">{subtitle}</p> : null}
    </div>
  );
}

export function Group({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[18px] bg-white text-[#1C1C1E]", className)}>{children}</div>
  );
}

export function Row({
  icon: Icon,
  title,
  subtitle,
  last = false,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  last?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3 px-3.5 py-3", !last && "border-b border-black/[0.08]")}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#007AFF]/12">
        <Icon className="h-4 w-4 text-[#007AFF]" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[16px] font-semibold leading-tight">{title}</p>
        {subtitle ? <p className="text-[12px] text-[#8E8E93]">{subtitle}</p> : null}
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-[#C7C7CC]" />
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1.5 mt-4 px-1 text-[12px] font-semibold uppercase tracking-wide text-[#8E8E93]">{children}</p>
  );
}

export function Chip({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={
        active
          ? "rounded-full bg-[#007AFF] px-3 py-1 text-[12px] font-semibold text-white"
          : "rounded-full bg-[#E5E5EA] px-3 py-1 text-[12px] font-semibold text-[#1C1C1E]"
      }
    >
      {children}
    </span>
  );
}

export function BlueBtn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-12 items-center justify-center rounded-[14px] bg-[#007AFF] text-[17px] font-semibold text-white",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BottomNavMock() {
  return (
    <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-around rounded-[22px] bg-white/95 py-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col items-center gap-0.5">
        <LayoutGrid className="h-5 w-5 text-[#007AFF]" />
        <span className="text-[10px] font-semibold text-[#007AFF]">Home</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <ScanLine className="h-5 w-5 text-[#8E8E93]" />
        <span className="text-[10px] font-semibold text-[#8E8E93]">Scan</span>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <Sparkles className="h-5 w-5 text-[#8E8E93]" />
        <span className="text-[10px] font-semibold text-[#8E8E93]">Menu</span>
      </div>
    </div>
  );
}

export function LogoMark({ src, label }: { src: string; label?: string }) {
  const [ok, setOk] = useState(true);
  const fallback = (label || "OP").slice(0, 2).toUpperCase();
  if (!ok) {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#007AFF]/12 text-[11px] font-bold text-[#007AFF]">
        {fallback}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt=""
      onError={() => setOk(false)}
      className="h-9 w-9 rounded-[10px] bg-white object-contain"
    />
  );
}
