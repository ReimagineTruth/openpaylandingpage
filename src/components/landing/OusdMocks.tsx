import type { ReactNode } from "react";
import { ArrowDownLeft, ArrowLeftRight, Send } from "lucide-react";
import openPayLogo from "@/assets/openpay-logo.jpg";

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[250px] sm:w-[270px]">
      <div className="rounded-[2.5rem] bg-[#0F172A] p-[9px] shadow-[0_40px_80px_-24px_rgba(15,23,42,0.45)]">
        <div className="relative rounded-[2rem] overflow-hidden bg-[#F8FAFC] aspect-[390/760]">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#0F172A]/90 z-20" />
          <div className="relative z-10 h-full flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function OusdMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const box =
    size === "lg" ? "w-16 h-16 rounded-[18px]" : size === "sm" ? "w-8 h-8 rounded-xl" : "w-11 h-11 rounded-2xl";
  return (
    <img
      src={openPayLogo}
      alt="OpenPay"
      className={`${box} object-cover shadow-md ring-1 ring-black/5`}
    />
  );
}

export function OpenPayWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const img = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const text = size === "sm" ? "text-[14px]" : "text-[17px]";
  return (
    <span className="inline-flex items-center gap-2">
      <img src={openPayLogo} alt="" className={`${img} rounded-full object-cover ring-1 ring-black/5`} />
      <span className={`${text} font-extrabold tracking-tight text-[#0F172A]`}>
        Open<span className="text-[#3B82F6]">Pay</span>
      </span>
    </span>
  );
}

export function OusdWalletMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-3.5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={openPayLogo} alt="" className="w-7 h-7 rounded-full object-cover" />
            <div>
              <p className="text-[10px] text-slate-500">OpenPay Pro</p>
              <p className="text-[13px] font-bold text-[#0F172A]">@pioneer</p>
            </div>
          </div>
          <OusdMark size="sm" />
        </div>
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <img src={openPayLogo} alt="" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/30" />
            <p className="text-[10px] text-white/60">Primary balance · OpenUSD</p>
          </div>
          <p className="mt-1 text-[28px] font-extrabold tracking-[-0.04em] leading-none">
            2,480.00 <span className="text-[14px] font-semibold text-white/70">OUSD</span>
          </p>
          <p className="mt-1.5 text-[10px] text-white/55">$1.00 · OpenPay network dollar</p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            { icon: Send, l: "Send" },
            { icon: ArrowDownLeft, l: "Receive" },
            { icon: ArrowLeftRight, l: "Swap" },
          ].map((a) => (
            <div key={a.l} className="rounded-xl bg-white border border-slate-100 py-2.5 flex flex-col items-center gap-1">
              <a.icon size={14} className="text-[#3B82F6]" />
              <span className="text-[9px] font-semibold text-[#0F172A]">{a.l}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl bg-white border border-slate-100 overflow-hidden">
          <p className="px-3 pt-2.5 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.08em]">Assets</p>
          {[
            { t: "OUSD", s: "OpenUSD", a: "1,250.00", logo: true },
            { t: "PI", s: "Pi Network", a: "346.59", logo: false },
            { t: "SOL", s: "Solana", a: "2.40", logo: false },
          ].map((row) => (
            <div key={row.t} className="flex items-center justify-between px-3 py-2.5 border-t border-slate-50">
              <div className="flex items-center gap-2">
                {row.logo ? (
                  <img src={openPayLogo} alt="" className="w-7 h-7 rounded-full object-cover" />
                ) : (
                  <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 text-[9px] font-bold flex items-center justify-center">
                    {row.t[0]}
                  </span>
                )}
                <div>
                  <p className="text-[11px] font-bold text-[#0F172A]">{row.t}</p>
                  <p className="text-[9px] text-slate-400">{row.s}</p>
                </div>
              </div>
              <p className="text-[11px] font-bold text-[#0F172A]">{row.a}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

export function OusdSwapMock() {
  return (
    <div className="w-full max-w-sm mx-auto rounded-[28px] bg-white border border-slate-200 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.2)] p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">Swap</p>
      <p className="mt-1 text-[18px] font-extrabold tracking-[-0.03em] text-[#0F172A]">Buy with OUSD</p>
      <div className="mt-4 rounded-2xl bg-slate-50 p-3.5">
        <p className="text-[10px] text-slate-500">You pay</p>
        <div className="flex items-baseline justify-between mt-1">
          <p className="text-[28px] font-extrabold tracking-[-0.04em]">100.00</p>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[12px] font-bold">
            <img src={openPayLogo} alt="" className="w-4 h-4 rounded-full object-cover" />
            OUSD
          </span>
        </div>
      </div>
      <div className="my-2 flex justify-center">
        <span className="w-8 h-8 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center">
          <ArrowLeftRight size={14} />
        </span>
      </div>
      <div className="rounded-2xl bg-slate-50 p-3.5">
        <p className="text-[10px] text-slate-500">You get</p>
        <div className="flex items-baseline justify-between mt-1">
          <p className="text-[28px] font-extrabold tracking-[-0.04em]">0.0014</p>
          <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[12px] font-bold">BTC</span>
        </div>
      </div>
      <button
        type="button"
        className="mt-4 w-full h-11 rounded-2xl bg-[#3B82F6] text-white text-[14px] font-semibold active:scale-[0.98] transition-transform"
      >
        Swap now
      </button>
    </div>
  );
}
