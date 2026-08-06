import type { ReactNode } from "react";
import { ArrowDownLeft, ArrowUpRight, LayoutGrid, QrCode, ScanLine, Send, Sparkles } from "lucide-react";
import { OpenPayBadge, PayWithOpenPayButton } from "@/components/qrpay-landing/QrPayMocks";

function PhoneShell({
  children,
  className = "",
  canvas = "wallet",
}: {
  children: ReactNode;
  className?: string;
  canvas?: "wallet" | "auth" | "mesh";
}) {
  const bg =
    canvas === "auth"
      ? "bg-gradient-to-b from-[#2563EB] to-[#1D4ED8]"
      : canvas === "mesh"
        ? "bg-[#EEF1F6]"
        : "bg-[#F8FAFC]";
  return (
    <div className={`relative mx-auto w-[250px] sm:w-[270px] ${className}`}>
      <div className="rounded-[2.5rem] bg-[#0F172A] p-[9px] shadow-[0_40px_80px_-24px_rgba(15,23,42,0.45)]">
        <div className={`relative rounded-[2rem] overflow-hidden ${bg} aspect-[390/760]`}>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-[#0F172A]/90 z-20" />
          <div className="relative z-10 h-full flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}

function BottomNav({ active = "home" }: { active?: "home" | "scan" | "menu" }) {
  return (
    <div className="mt-auto mx-3 mb-3 rounded-2xl bg-white/95 border border-black/[0.06] shadow-lg flex items-center justify-around py-2.5 px-2">
      {[
        { id: "home", icon: LayoutGrid, label: "Home" },
        { id: "scan", icon: ScanLine, label: "Scan" },
        { id: "menu", icon: Sparkles, label: "Menu" },
      ].map((t) => (
        <div key={t.id} className="flex flex-col items-center gap-0.5 min-w-[52px]">
          <t.icon size={16} className={active === t.id ? "text-[#3B82F6]" : "text-slate-400"} />
          <span className={`text-[9px] font-semibold ${active === t.id ? "text-[#3B82F6]" : "text-slate-400"}`}>
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AuthCardMock() {
  return (
    <div className="w-full max-w-[360px] mx-auto rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] p-7 text-center">
      <div className="flex justify-center mb-3">
        <OpenPayBadge />
      </div>
      <p className="text-[22px] font-extrabold tracking-[-0.04em] text-[#0F172A]">OpenPay</p>
      <p className="mt-1 text-[13px] text-slate-500">Sign in to your wallet</p>
      <a
        href="https://openpy.space/auth"
        className="mt-6 flex items-center justify-center h-12 rounded-2xl bg-[#3B82F6] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
      >
        Authenticate with Pi
      </a>
      <button type="button" className="mt-3 w-full h-11 rounded-2xl border border-slate-200 text-[14px] font-semibold text-[#0F172A]">
        Sign In with Email
      </button>
      <p className="mt-5 text-[11px] text-slate-400 leading-relaxed">
        By continuing, you agree to our Terms and Privacy Policy
      </p>
    </div>
  );
}

export function DashboardPhoneMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-3.5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-500">Good afternoon</p>
            <p className="text-[13px] font-bold text-[#0F172A]">@openpay</p>
          </div>
          <span className="text-[9px] font-semibold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">KYC</span>
        </div>
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] p-4 text-white">
          <p className="text-[10px] text-white/70">Balance · PI</p>
          <p className="text-[28px] font-extrabold tracking-[-0.04em] leading-none mt-1">π346.59</p>
          <p className="text-[10px] text-white/60 mt-1.5">≈ $1,091.76 USD</p>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {[
            { icon: Send, l: "Send" },
            { icon: ArrowDownLeft, l: "Receive" },
            { icon: ArrowUpRight, l: "Top-Up" },
            { icon: QrCode, l: "Scan" },
          ].map((a) => (
            <div key={a.l} className="rounded-xl bg-white border border-slate-100 py-2.5 flex flex-col items-center gap-1">
              <a.icon size={14} className="text-[#3B82F6]" />
              <span className="text-[9px] font-semibold text-[#0F172A]">{a.l}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-2xl bg-white border border-slate-100 p-3">
          <p className="text-[10px] font-semibold text-slate-500 mb-2">Modules</p>
          <div className="flex flex-wrap gap-1.5">
            {["Wallet", "Savings", "Cards", "Mining", "NFT", "AI"].map((m) => (
              <span key={m} className="px-2 py-1 rounded-full bg-slate-50 text-[9px] font-semibold text-slate-600">
                {m}
              </span>
            ))}
          </div>
        </div>
        <BottomNav />
      </div>
    </PhoneShell>
  );
}

export function SendPhoneMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-4 flex-1 flex flex-col">
        <p className="text-[15px] font-bold tracking-[-0.03em] text-[#0F172A]">Express Send</p>
        <p className="text-[11px] text-slate-500 mt-0.5">Type a username. Confirm. Done.</p>
        <div className="mt-4 rounded-2xl bg-white border border-slate-100 p-3">
          <p className="text-[10px] text-slate-500">To</p>
          <p className="text-[14px] font-semibold text-[#3B82F6]">@pioneer</p>
        </div>
        <div className="mt-2 rounded-2xl bg-white border border-slate-100 p-3">
          <p className="text-[10px] text-slate-500">Amount · USD</p>
          <p className="text-[32px] font-extrabold tracking-[-0.05em] text-[#0F172A]">25.00</p>
          <p className="text-[11px] text-slate-500">≈ π7.94</p>
        </div>
        <button
          type="button"
          className="mt-auto mb-4 w-full h-11 rounded-2xl bg-[#3B82F6] text-white text-[14px] font-semibold"
        >
          Confirm with MPIN
        </button>
      </div>
    </PhoneShell>
  );
}

export function ReceivePhoneMock() {
  const cells = Array.from({ length: 81 }, (_, i) => {
    const r = Math.floor(i / 9);
    const c = i % 9;
    const edge = r < 3 || r > 5 || c < 3 || c > 5;
    return (r + c) % 2 === 0 || edge ? 1 : 0;
  });
  return (
    <PhoneShell>
      <div className="pt-9 px-4 flex-1 flex flex-col items-center">
        <p className="text-[15px] font-bold text-[#0F172A]">Receive</p>
        <p className="text-[11px] text-slate-500">Your QR is your storefront</p>
        <div className="mt-4 w-[150px] rounded-2xl bg-white p-3 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-9 gap-[2px]">
            {cells.map((v, i) => (
              <div key={i} className={`aspect-square ${v ? "bg-[#0F172A]" : "bg-transparent"}`} />
            ))}
          </div>
        </div>
        <p className="mt-3 text-[13px] font-bold text-[#0F172A]">@openpay</p>
        <p className="text-[11px] text-slate-500">OpenPay · Pi Network</p>
        <div className="mt-4 w-full flex gap-2">
          <span className="flex-1 text-center py-2.5 rounded-full bg-slate-100 text-[11px] font-semibold text-[#0F172A]">
            Copy link
          </span>
          <span className="flex-1 text-center py-2.5 rounded-full bg-[#3B82F6] text-[11px] font-semibold text-white">
            Share
          </span>
        </div>
      </div>
    </PhoneShell>
  );
}

export function PosPhoneMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-bold text-[#0F172A]">Merchant POS</p>
          <span className="text-[9px] font-semibold text-emerald-600">Live</span>
        </div>
        <div className="mt-4 rounded-2xl bg-white border border-slate-100 p-4 text-center">
          <p className="text-[10px] text-slate-500">Session total</p>
          <p className="text-[36px] font-extrabold tracking-[-0.05em] text-[#0F172A]">12.50</p>
          <p className="text-[11px] text-slate-500">π · Café Nova</p>
        </div>
        <div className="mt-3 mx-auto w-[120px] rounded-xl bg-white border border-slate-100 p-2">
          <div className="aspect-square bg-[repeating-linear-gradient(0deg,#0F172A_0_2px,transparent_2px_4px),repeating-linear-gradient(90deg,#0F172A_0_2px,transparent_2px_4px)] opacity-80 rounded" />
        </div>
        <p className="mt-2 text-center text-[10px] text-slate-500">Customer scans to pay</p>
        <button type="button" className="mt-auto mb-4 w-full h-11 rounded-2xl bg-emerald-500 text-white text-[14px] font-semibold">
          Ring next sale
        </button>
      </div>
    </PhoneShell>
  );
}

export function VirtualCardMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-4 flex-1 flex flex-col">
        <p className="text-[15px] font-bold text-[#0F172A]">Virtual Card</p>
        <p className="text-[11px] text-slate-500">A card inside your Pi wallet</p>
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-4 text-white aspect-[1.6/1] flex flex-col justify-between shadow-lg">
          <div className="flex justify-between items-start">
            <OpenPayBadge size="sm" light />
            <span className="text-[9px] font-semibold text-white/70">VIRTUAL</span>
          </div>
          <p className="text-[15px] font-mono tracking-[0.12em]">•••• •••• •••• 4242</p>
          <div className="flex justify-between text-[10px]">
            <span>OPENPAY</span>
            <span>12/28</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="flex-1 text-center py-2.5 rounded-xl bg-white border border-slate-100 text-[11px] font-semibold">
            Freeze
          </span>
          <span className="flex-1 text-center py-2.5 rounded-xl bg-[#3B82F6] text-white text-[11px] font-semibold">
            Reveal
          </span>
        </div>
      </div>
    </PhoneShell>
  );
}

export function MiningPhoneMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-4 flex-1 flex flex-col items-center">
        <p className="text-[15px] font-bold text-[#0F172A]">Mining</p>
        <p className="text-[11px] text-slate-500">Watch. Mine. Repeat every 24h.</p>
        <div className="mt-6 relative w-36 h-36 rounded-full border-[6px] border-slate-100 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[6px] border-[#3B82F6] border-t-transparent rotate-45" />
          <div className="text-center">
            <p className="text-[22px] font-extrabold tracking-[-0.04em] text-[#0F172A]">18:42</p>
            <p className="text-[9px] text-slate-500 font-semibold">HOURS LEFT</p>
          </div>
        </div>
        <p className="mt-4 text-[12px] font-semibold text-emerald-600">+π0.24 last cycle</p>
        <button type="button" className="mt-auto mb-4 w-full h-11 rounded-2xl bg-[#3B82F6] text-white text-[14px] font-semibold">
          Watch ad to mine
        </button>
      </div>
    </PhoneShell>
  );
}

export function AiChatMock() {
  return (
    <PhoneShell>
      <div className="pt-9 px-3 flex-1 flex flex-col">
        <div className="flex items-center gap-2 px-1">
          <div className="w-7 h-7 rounded-full bg-[#3B82F6]/15 text-[#3B82F6] text-[10px] font-bold flex items-center justify-center">
            AI
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#0F172A]">OpenPay AI</p>
            <p className="text-[9px] text-slate-500">Your money copilot</p>
          </div>
        </div>
        <div className="mt-4 flex-1 space-y-2">
          <div className="rounded-2xl rounded-tl-sm bg-white border border-slate-100 px-3 py-2 text-[11px] text-slate-600 max-w-[90%]">
            What’s my balance?
          </div>
          <div className="rounded-2xl rounded-tr-sm bg-[#3B82F6] text-white px-3 py-2 text-[11px] ml-auto max-w-[90%]">
            You have π346.59 available. Want to send, check spending, or open mining?
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {["Send money", "KYC help", "Mining"].map((c) => (
              <span key={c} className="px-2 py-1 rounded-full bg-slate-100 text-[9px] font-semibold text-slate-600">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-3 rounded-full bg-white border border-slate-200 px-3 py-2 text-[11px] text-slate-400">
          Ask OpenPay AI…
        </div>
      </div>
    </PhoneShell>
  );
}

export function NftGridMock() {
  return (
    <PhoneShell canvas="mesh">
      <div className="pt-9 px-3 flex-1 flex flex-col">
        <p className="text-[14px] font-bold text-[#1d1d1f] px-1">OpenNFT</p>
        <p className="text-[10px] text-[#86868B] px-1">Creators get paid. Collectors get provenance.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { t: "Orbital", p: "π12" },
            { t: "Pioneer", p: "π8" },
            { t: "Wave", p: "π25" },
            { t: "Pulse", p: "π4" },
          ].map((n, i) => (
            <div key={n.t} className="rounded-xl bg-white overflow-hidden border border-black/[0.04]">
              <div
                className={`aspect-square ${
                  ["bg-gradient-to-br from-blue-400 to-indigo-600", "bg-gradient-to-br from-emerald-400 to-teal-600", "bg-gradient-to-br from-orange-300 to-rose-500", "bg-gradient-to-br from-violet-400 to-fuchsia-600"][i]
                }`}
              />
              <div className="p-2">
                <p className="text-[10px] font-bold text-[#1d1d1f]">{n.t}</p>
                <p className="text-[9px] text-[#86868B]">{n.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

export function TopUpRailsRow() {
  const rails = ["Stripe", "PayPal", "Apple Pay", "Cards", "USDC", "USDT", "OUSD", "Solana"];
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {rails.map((r) => (
        <span
          key={r}
          className="px-3.5 py-2 rounded-full bg-white border border-slate-200 text-[12px] font-semibold text-[#0F172A] shadow-sm"
        >
          {r}
        </span>
      ))}
    </div>
  );
}

export function DevKeysMock() {
  return (
    <div className="w-full max-w-md mx-auto rounded-[28px] bg-white border border-slate-200 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">Developer</p>
      <p className="mt-1 text-[20px] font-extrabold tracking-[-0.04em] text-[#0F172A]">API keys</p>
      <div className="mt-4 space-y-2">
        {[
          { name: "Production", key: "op_live_••••9f2a" },
          { name: "QR Pay", key: "qrp_••••c291" },
        ].map((k) => (
          <div key={k.name} className="rounded-2xl bg-slate-50 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold text-[#0F172A]">{k.name}</p>
              <p className="text-[11px] font-mono text-slate-500">{k.key}</p>
            </div>
            <span className="text-[11px] font-semibold text-[#3B82F6]">Copy</span>
          </div>
        ))}
      </div>
      <a
        href="https://openpy.space/auth/developer-dashboard"
        className="mt-5 flex items-center justify-center h-11 rounded-2xl bg-[#3B82F6] text-white text-[14px] font-semibold"
      >
        Open developer dashboard
      </a>
    </div>
  );
}

export { OpenPayBadge, PayWithOpenPayButton };
