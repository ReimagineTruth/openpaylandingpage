import type { ReactNode } from "react";
import { Check, Copy, Link2, Monitor, Share2, Smartphone } from "lucide-react";

/** Outlined OpenPay wordmark badge (product-aligned) */
export function OpenPayBadge({ size = "md", light = false }: { size?: "sm" | "md"; light?: boolean }) {
  const pad = size === "sm" ? "px-2 py-1 gap-1.5" : "px-2.5 py-1.5 gap-2";
  const logo = size === "sm" ? "w-4 h-4 text-[8px]" : "w-5 h-5 text-[10px]";
  const text = size === "sm" ? "text-[11px]" : "text-[13px]";
  const border = light ? "border-white/90 text-white" : "border-[#1d1d1f] text-[#1d1d1f]";
  return (
    <span className={`inline-flex items-center ${pad} rounded-[14px] border-[1.5px] ${border} font-semibold tracking-tight`}>
      <span className={`${logo} rounded-full border-[1.5px] ${light ? "border-white" : "border-[#1d1d1f]"} flex items-center justify-center font-bold leading-none`}>
        O
      </span>
      <span className={`${text} tracking-[-0.03em]`}>
        Open<span className={light ? "text-white" : "text-accent"}>Pay</span>
      </span>
    </span>
  );
}

/** Apple Pay–style black Pay button */
export function PayWithOpenPayButton({ label = "Pay with", className = "" }: { label?: string; className?: string }) {
  return (
    <button
      type="button"
      className={`w-full h-[50px] rounded-full bg-[#1d1d1f] text-white flex items-center justify-center gap-2 active:scale-[0.98] transition-transform ${className}`}
    >
      <span className="text-[15px] font-semibold tracking-[-0.02em]">{label}</span>
      <OpenPayBadge size="sm" light />
    </button>
  );
}

function JourneyRail({ active }: { active: 0 | 1 | 2 | 3 }) {
  const steps = ["Set up", "Share", "Pay", "Done"];
  return (
    <div className="flex items-center gap-1.5 px-1">
      {steps.map((s, i) => {
        const done = i < active;
        const current = i === active;
        return (
          <div key={s} className="flex-1 flex flex-col gap-1 min-w-0">
            <div
              className={`h-[3px] rounded-full ${
                done || current ? "bg-[#1d1d1f]" : "bg-black/10"
              }`}
            />
            <span
              className={`text-[9px] font-semibold truncate ${
                current ? "text-[#1d1d1f]" : done ? "text-[#1d1d1f]/70" : "text-[#86868B]"
              }`}
            >
              {done ? "✓ " : ""}
              {s}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function PhoneShell({
  children,
  watermark,
  className = "",
}: {
  children: ReactNode;
  watermark?: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[260px] sm:w-[280px] ${className}`}>
      <div className="rounded-[2.6rem] bg-[#1d1d1f] p-[9px] shadow-[0_40px_80px_-24px_rgba(29,29,31,0.45)]">
        <div className="relative rounded-[2.1rem] overflow-hidden bg-[#EEF1F6] aspect-[390/780]">
          {watermark && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-[88px] font-extrabold tracking-[-0.06em] text-[#1d1d1f]/[0.04] select-none"
            >
              {watermark}
            </span>
          )}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#1d1d1f]/90 z-20" />
          <div className="relative z-10 h-full flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MiniQr({ className = "" }: { className?: string }) {
  const cells = [
    1,1,1,1,1,0,1,0,1,1,1,1,1,
    1,0,0,0,1,0,0,1,1,0,0,0,1,
    1,0,1,0,1,0,1,0,1,0,1,0,1,
    1,0,0,0,1,1,0,1,1,0,0,0,1,
    1,1,1,1,1,0,1,0,1,1,1,1,1,
    0,0,0,0,0,0,1,0,0,0,0,0,0,
    1,0,1,1,0,1,0,1,1,0,1,0,1,
    0,1,0,1,0,0,1,0,0,1,0,1,0,
    1,1,1,1,1,0,0,1,1,0,1,1,0,
    1,0,0,0,1,0,1,0,1,0,0,0,1,
    1,0,1,0,1,1,0,1,0,1,0,1,1,
    1,0,0,0,1,0,0,1,1,0,1,0,0,
    1,1,1,1,1,0,1,0,1,1,0,1,1,
  ];
  return (
    <div className={`grid grid-cols-13 gap-[2px] bg-white p-3 rounded-2xl ${className}`} style={{ gridTemplateColumns: "repeat(13, 1fr)" }}>
      {cells.map((c, i) => (
        <div key={i} className={`aspect-square rounded-[1px] ${c ? "bg-[#1d1d1f]" : "bg-transparent"}`} />
      ))}
    </div>
  );
}

export function CheckoutPhoneMock() {
  return (
    <PhoneShell watermark="PAY">
      <div className="pt-10 px-4 flex-1 flex flex-col">
        <JourneyRail active={2} />
        <div className="mt-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#007AFF]/15 flex items-center justify-center text-[11px] font-bold text-[#007AFF]">
            C
          </div>
          <div>
            <p className="text-[11px] font-semibold text-[#1d1d1f]">Café Nova</p>
            <p className="text-[9px] text-[#86868B]">@cafenova</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[12px] text-[#86868B] font-medium">USD</p>
          <p className="text-[42px] font-extrabold tracking-[-0.05em] text-[#1d1d1f] leading-none">24.00</p>
          <p className="mt-1.5 text-[11px] font-semibold text-[#34C759]">No fee</p>
        </div>
        <div className="mt-4 space-y-1.5 rounded-2xl bg-[#F2F2F7] p-1">
          {["OpenPay Balance", "Pi Network", "Virtual Card"].map((m, i) => (
            <div
              key={m}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-[14px] ${
                i === 0 ? "bg-white shadow-sm" : ""
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  i === 0 ? "border-[#007AFF]" : "border-black/20"
                }`}
              >
                {i === 0 && <span className="w-2 h-2 rounded-full bg-[#007AFF]" />}
              </span>
              <span className="text-[12px] font-medium text-[#1d1d1f]">{m}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pb-4 pt-3">
          <PayWithOpenPayButton />
        </div>
      </div>
    </PhoneShell>
  );
}

export function SuccessPhoneMock({ compact = false }: { compact?: boolean }) {
  return (
    <PhoneShell watermark="DONE" className={compact ? "opacity-95 scale-[0.92] origin-bottom" : ""}>
      <div className="pt-10 px-4 flex-1 flex flex-col items-center">
        <JourneyRail active={3} />
        <div className="relative mt-8">
          <span className="qrp-success-ring absolute inset-0 rounded-full" />
          <span className="qrp-success-ring qrp-success-ring-delay absolute inset-0 rounded-full" />
          <div className="relative w-16 h-16 rounded-full bg-[#34C759] flex items-center justify-center shadow-lg">
            <Check className="text-white w-8 h-8" strokeWidth={2.5} />
          </div>
        </div>
        <p className="mt-5 text-[17px] font-bold tracking-[-0.03em] text-[#1d1d1f]">Payment Successful</p>
        <p className="mt-1 text-[28px] font-extrabold tracking-[-0.05em] text-[#1d1d1f]">
          <span className="text-[#86868B] text-[14px] font-semibold align-top mr-1">USD</span>
          24.00
        </p>
        <div className="mt-5 w-full rounded-[22px] bg-white p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#86868B]">Receipt</p>
          <p className="mt-2 text-[11px] text-[#6E6E73]">Tx ID</p>
          <p className="text-[12px] font-semibold text-[#1d1d1f] font-mono truncate">qrp_8f3a…c291</p>
          <div className="mt-3 flex gap-2">
            {["Download", "Print", "Email"].map((a) => (
              <span key={a} className="flex-1 text-center text-[10px] font-semibold text-[#007AFF] py-2 rounded-full bg-[#007AFF]/8">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}

export function SharePhoneMock() {
  return (
    <PhoneShell watermark="SHARE">
      <div className="pt-10 px-4 flex-1 flex flex-col">
        <JourneyRail active={1} />
        <div className="mt-4 flex justify-center">
          <OpenPayBadge />
        </div>
        <p className="mt-3 text-center text-[16px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
          Now Accepting OpenPay
        </p>
        <div className="mt-3 mx-auto w-full max-w-[220px] rounded-full bg-[#F2F2F7] p-1 flex">
          <span className="flex-1 flex items-center justify-center gap-1 py-2 rounded-full bg-white text-[11px] font-semibold text-[#1d1d1f] shadow-sm">
            <Smartphone size={12} /> Share link
          </span>
          <span className="flex-1 flex items-center justify-center gap-1 py-2 text-[11px] font-medium text-[#86868B]">
            <Monitor size={12} /> Website
          </span>
        </div>
        <div className="mt-4 mx-auto w-[140px]">
          <MiniQr />
        </div>
        <div className="mt-4 flex gap-2">
          <span className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white text-[11px] font-semibold text-[#1d1d1f] border border-black/8">
            <Copy size={12} /> Copy
          </span>
          <span className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#1d1d1f] text-[11px] font-semibold text-white">
            <Share2 size={12} /> Share
          </span>
        </div>
        <p className="mt-3 text-center text-[10px] text-[#86868B] flex items-center justify-center gap-1">
          <Link2 size={10} /> openpy.space/qr-pay/…
        </p>
      </div>
    </PhoneShell>
  );
}

export function PurposePickerMock() {
  const cats = ["Commerce", "Digital", "Donations", "Booking", "Bills", "Finance", "Business", "Personal", "Crypto"];
  return (
    <PhoneShell>
      <div className="pt-10 px-4 flex-1 flex flex-col">
        <JourneyRail active={0} />
        <p className="mt-4 text-[15px] font-bold tracking-[-0.03em] text-[#1d1d1f]">Payment purpose</p>
        <div className="mt-2 rounded-xl bg-white border border-black/8 px-3 py-2 text-[12px] text-[#86868B]">
          Search purposes…
        </div>
        <div className="mt-3 rounded-2xl bg-[#F2F2F7] overflow-hidden">
          {cats.map((c, i) => (
            <div
              key={c}
              className={`flex items-center justify-between px-3.5 py-2.5 bg-white ${
                i < cats.length - 1 ? "border-b border-black/[0.06]" : ""
              } ${i === 0 ? "bg-[#007AFF]/8" : ""}`}
            >
              <span className={`text-[12px] font-medium ${i === 0 ? "text-[#007AFF]" : "text-[#1d1d1f]"}`}>{c}</span>
              <span className="text-[#C7C7CC] text-[14px]">›</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

export function GuideModalMock() {
  return (
    <div className="qrp-sheet w-full max-w-[340px] mx-auto p-7 text-center">
      <div className="flex justify-center">
        <OpenPayBadge />
      </div>
      <h3 className="mt-4 text-[22px] font-extrabold tracking-[-0.04em] text-[#1d1d1f]">
        Now Accepting OpenPay
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-[#6E6E73]">
        Create a checkout, share it with customers, and collect instantly — no forms required.
      </p>
      <span className="mt-4 inline-flex px-3 py-1.5 rounded-full bg-[#F2F2F7] text-[11px] font-semibold text-[#1d1d1f]">
        QR · Link · Website button
      </span>
      <button
        type="button"
        className="mt-5 w-full h-12 rounded-full bg-[#1d1d1f] text-white font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
      >
        Set Up <OpenPayBadge size="sm" light />
      </button>
      <button type="button" className="mt-3 text-[15px] font-semibold text-[#007AFF]">
        Maybe Later
      </button>
    </div>
  );
}

export function PiHandoffMock() {
  return (
    <div className="qrp-sheet w-full max-w-[340px] mx-auto p-6">
      <p className="text-[17px] font-bold tracking-[-0.03em] text-[#1d1d1f]">Open in Pi Browser</p>
      <div className="mt-3 rounded-2xl bg-[#007AFF]/10 px-3.5 py-3 flex items-center gap-2.5">
        <span className="w-4 h-4 rounded-full border-2 border-[#007AFF] border-t-transparent animate-spin" />
        <span className="text-[13px] font-semibold text-[#007AFF]">Waiting for Pi payment…</span>
      </div>
      <ol className="mt-4 space-y-2 text-[13px] text-[#6E6E73] list-decimal list-inside">
        <li>Copy the checkout link</li>
        <li>Open it in Pi Browser</li>
        <li>Confirm with Pi Auth</li>
      </ol>
      <div className="mt-4 flex gap-2">
        <div className="flex-1 rounded-xl bg-[#F2F2F7] px-3 py-2.5 text-[11px] text-[#86868B] truncate font-mono">
          openpy.space/qr-pay/…
        </div>
        <button type="button" className="px-4 rounded-full bg-white border border-black/10 text-[12px] font-semibold text-[#1d1d1f]">
          Copy
        </button>
      </div>
      <button type="button" className="mt-4 w-full h-11 rounded-full bg-[#1d1d1f] text-white text-[14px] font-semibold">
        Continue
      </button>
      <button type="button" className="mt-2 w-full text-[14px] font-semibold text-[#007AFF]">
        Get Pi Browser
      </button>
    </div>
  );
}

export function DashboardCropMock() {
  return (
    <div className="qrp-sheet overflow-hidden max-w-lg mx-auto">
      <div className="px-5 pt-5 pb-4 bg-white/70 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="flex items-center justify-between">
          <OpenPayBadge size="sm" />
          <span className="text-[11px] font-semibold text-[#007AFF]">Create</span>
        </div>
        <div className="mt-4 flex gap-4 text-[12px] font-semibold">
          <span className="text-[#1d1d1f] border-b-2 border-[#1d1d1f] pb-1">Overview</span>
          <span className="text-[#86868B] pb-1">Payment links</span>
          <span className="text-[#86868B] pb-1">Orders</span>
        </div>
      </div>
      <div className="p-5 bg-[#EEF1F6]/80">
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { l: "Available", v: "1,240.50" },
            { l: "Revenue", v: "8,412.00" },
            { l: "Today", v: "186.00" },
            { l: "This week", v: "940.20" },
          ].map((k) => (
            <div key={k.l} className="rounded-2xl bg-white p-3.5 border border-black/[0.04]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#86868B]">{k.l}</p>
              <p className="mt-1 text-[18px] font-extrabold tracking-[-0.04em] text-[#1d1d1f]">{k.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl bg-white p-3.5 border border-black/[0.04]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#86868B] mb-2">By method</p>
          <div className="flex gap-2">
            {["Pi", "Wallet", "Card"].map((m) => (
              <span key={m} className="flex-1 text-center py-2 rounded-xl bg-[#F2F2F7] text-[11px] font-semibold text-[#1d1d1f]">
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3 rounded-2xl bg-white p-3.5 border border-black/[0.04]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#007AFF]/15 text-[#007AFF] text-[12px] font-bold flex items-center justify-center">
              AL
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#1d1d1f]">Alex Lee</p>
              <p className="text-[11px] text-[#86868B] truncate">alex@email.com · Latte × 2</p>
            </div>
            <span className="text-[11px] font-bold text-[#34C759]">Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
}
