import type { ReactElement, ReactNode } from "react";
import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowUpRight,
  Bell,
  CreditCard,
  LayoutGrid,
  QrCode,
  ScanLine,
  Send,
  Sparkles,
  User,
} from "lucide-react";

const BLUE = "#007AFF";
const GRAY = "#F2F2F7";
const INK = "#1d1d1f";
const MUTED = "#8e8e93";
const GREEN = "#34C759";

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
          className={`relative rounded-[1.85rem] overflow-hidden aspect-[390/760] ${
            canvas === "blue"
              ? "bg-gradient-to-b from-[#007AFF] to-[#0056CC]"
              : canvas === "dark"
                ? "bg-[#0B0B0F]"
                : "bg-[#F2F2F7]"
          }`}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[72px] h-[18px] rounded-full bg-[#1d1d1f]/95 z-20" />
          <div className="relative z-10 h-full flex flex-col text-[10px] leading-tight">{children}</div>
        </div>
      </div>
    </div>
  );
}

function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex justify-between px-4 pt-7 text-[9px] font-semibold ${light ? "text-white/90" : "text-[#1d1d1f]"}`}>
      <span>9:41</span>
      <span className="opacity-70">●●●</span>
    </div>
  );
}

function BottomNav({ active = "home" }: { active?: string }) {
  const tabs = [
    { id: "home", icon: LayoutGrid, label: "Home" },
    { id: "scan", icon: ScanLine, label: "Scan" },
    { id: "menu", icon: Sparkles, label: "Menu" },
  ];
  return (
    <div className="mt-auto mx-2.5 mb-2.5 rounded-2xl bg-white/95 border border-black/[0.05] shadow-md flex items-center justify-around py-2 px-1">
      {tabs.map((t) => (
        <div key={t.id} className="flex flex-col items-center gap-0.5 min-w-[44px]">
          <t.icon size={13} style={{ color: active === t.id ? BLUE : MUTED }} />
          <span className="text-[8px] font-semibold" style={{ color: active === t.id ? BLUE : MUTED }}>
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function Sheet({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[18px] bg-white p-3 ${className}`}>{children}</div>;
}

function PrimaryBtn({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-9 rounded-xl text-white text-[11px] font-semibold flex items-center justify-center" style={{ background: BLUE }}>
      {children}
    </div>
  );
}

function QrGrid({ size = 9 }: { size?: number }) {
  const cells = Array.from({ length: size * size }, (_, i) => {
    const r = Math.floor(i / size);
    const c = i % size;
    const edge = r < 2 || r > size - 3 || c < 2 || c > size - 3;
    return (r + c) % 2 === 0 || edge ? 1 : 0;
  });
  return (
    <div className="grid gap-[1.5px]" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
      {cells.map((v, i) => (
        <div key={i} className={`aspect-square ${v ? "bg-[#1d1d1f]" : "bg-transparent"}`} />
      ))}
    </div>
  );
}

function AuthScreen() {
  return (
    <PreviewPhoneShell canvas="blue">
      <StatusBar light />
      <div className="flex-1 flex flex-col items-center px-4 pt-6">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[16px] font-extrabold text-[#007AFF]">
          O
        </div>
        <p className="mt-3 text-[18px] font-extrabold tracking-[-0.04em] text-white">
          Open<span className="opacity-90">Pay</span>
        </p>
        <p className="mt-1 text-[10px] text-white/75 text-center">Stable payments for the Pi economy</p>
        <div className="mt-auto mb-4 w-full space-y-2">
          <div className="h-10 rounded-xl bg-white text-[#007AFF] text-[12px] font-semibold flex items-center justify-center">
            Authenticate with Pi
          </div>
          <div className="h-9 rounded-xl bg-white/15 text-white text-[11px] font-semibold flex items-center justify-center border border-white/25">
            OpenPay Pro
          </div>
          <div className="h-9 rounded-xl bg-transparent text-white/90 text-[11px] font-semibold flex items-center justify-center">
            Sign In with Email
          </div>
          <div className="flex justify-center gap-3 pt-1 text-[8px] text-white/70">
            <span>Pi Browser</span>
            <span>Socials</span>
            <span>Website</span>
          </div>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function KycScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Secure KYC
        </p>
        <p className="text-[9px] mt-0.5" style={{ color: MUTED }}>
          Banking standard · 4 steps
        </p>
        <div className="mt-3 space-y-2">
          {["1 · Personal", "2 · Financial", "3 · ID docs", "4 · Face"].map((s, i) => (
            <Sheet key={s} className="flex items-center justify-between !py-2.5">
              <span className="text-[11px] font-semibold" style={{ color: INK }}>
                {s}
              </span>
              <span className="text-[8px] font-semibold px-2 py-0.5 rounded-full" style={{ background: i === 0 ? "#E8F1FF" : GRAY, color: i === 0 ? BLUE : MUTED }}>
                {i === 0 ? "Current" : "Next"}
              </span>
            </Sheet>
          ))}
        </div>
        <div className="mt-auto mb-3 space-y-2">
          <PrimaryBtn>Continue</PrimaryBtn>
          <div className="text-center text-[10px] font-semibold" style={{ color: BLUE }}>
            Quick Verification with PiVerify
          </div>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function WalletScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px]" style={{ color: MUTED }}>
              Available balance
            </p>
            <p className="text-[12px] font-bold" style={{ color: INK }}>
              @openpay
            </p>
          </div>
          <div className="flex gap-1">
            <span className="text-[8px] font-semibold px-2 py-1 rounded-full bg-white" style={{ color: BLUE }}>
              Personal
            </span>
            <span className="text-[8px] font-semibold px-2 py-1 rounded-full" style={{ color: MUTED }}>
              Merchant
            </span>
          </div>
        </div>
        <div className="mt-3 rounded-[18px] bg-white p-3.5">
          <div className="rounded-[16px] p-3 text-white" style={{ background: `linear-gradient(135deg, ${BLUE}, #0056CC)` }}>
            <p className="text-[9px] text-white/70">OpenUSD · OUSD</p>
            <p className="text-[26px] font-extrabold tracking-[-0.045em] leading-none mt-1">1,240.00</p>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[9px] text-white/65">≈ π 392.40</p>
              <span className="text-[8px] font-semibold px-2 py-0.5 rounded-full bg-white/20">PI live</span>
            </div>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[
            { icon: Send, l: "Send" },
            { icon: ArrowDownLeft, l: "Request" },
            { icon: ArrowUpRight, l: "Top Up" },
          ].map((a) => (
            <div key={a.l} className="rounded-xl bg-white py-2.5 flex flex-col items-center gap-1">
              <a.icon size={13} style={{ color: BLUE }} />
              <span className="text-[8px] font-semibold" style={{ color: INK }}>
                {a.l}
              </span>
            </div>
          ))}
        </div>
        <Sheet className="mt-2.5 !py-2.5">
          <p className="text-[9px] font-semibold mb-1.5" style={{ color: MUTED }}>
            Quick modules
          </p>
          <div className="flex flex-wrap gap-1">
            {["Assets", "Savings", "Mining", "AI"].map((m) => (
              <span key={m} className="px-2 py-1 rounded-full text-[8px] font-semibold" style={{ background: GRAY, color: INK }}>
                {m}
              </span>
            ))}
          </div>
        </Sheet>
        <BottomNav />
      </div>
    </PreviewPhoneShell>
  );
}

function AssetsScreen() {
  const rows = [
    { t: "Wallet OUSD", v: "1,240.00" },
    { t: "PI equiv", v: "π 392.40" },
    { t: "Savings", v: "320.00" },
    { t: "Mining", v: "12.48" },
    { t: "Pro Wallet", v: "88.10" },
    { t: "OpenNFT", v: "4 items" },
  ];
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Assets
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          Live OpenPay token balances
        </p>
        <div className="mt-3 space-y-1.5">
          {rows.map((r) => (
            <Sheet key={r.t} className="!py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold" style={{ color: INK }}>
                {r.t}
              </span>
              <span className="text-[10px] font-bold" style={{ color: INK }}>
                {r.v}
              </span>
            </Sheet>
          ))}
        </div>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Send to Pro</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function SavingsScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Savings
        </p>
        <Sheet className="mt-3 text-center !py-5">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Savings balance
          </p>
          <p className="text-[28px] font-extrabold tracking-[-0.05em]" style={{ color: INK }}>
            320.00
          </p>
          <p className="text-[10px] font-semibold mt-1" style={{ color: GREEN }}>
            4.2% APY
          </p>
        </Sheet>
        <div className="mt-auto mb-3 space-y-2">
          <PrimaryBtn>Move to Savings</PrimaryBtn>
          <div className="h-9 rounded-xl bg-white text-[11px] font-semibold flex items-center justify-center" style={{ color: INK }}>
            Move to Wallet
          </div>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function SendScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Express Send
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          Pay to @username in OUSD
        </p>
        <Sheet className="mt-3">
          <p className="text-[9px]" style={{ color: MUTED }}>
            To
          </p>
          <p className="text-[13px] font-semibold" style={{ color: BLUE }}>
            @pioneer
          </p>
        </Sheet>
        <Sheet className="mt-2">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Amount · OUSD
          </p>
          <p className="text-[30px] font-extrabold tracking-[-0.05em]" style={{ color: INK }}>
            25.00
          </p>
        </Sheet>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"].map((k) => (
            <div key={k} className="h-8 rounded-lg bg-white text-[12px] font-semibold flex items-center justify-center" style={{ color: INK }}>
              {k}
            </div>
          ))}
        </div>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Pay</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function ReceiveScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col items-center">
        <p className="text-[13px] font-bold self-start" style={{ color: INK }}>
          Receive
        </p>
        <p className="text-[9px] self-start" style={{ color: MUTED }}>
          Personal QR · Open Express Send
        </p>
        <div className="mt-4 w-[132px] rounded-2xl bg-white p-3 shadow-sm">
          <QrGrid />
        </div>
        <p className="mt-3 text-[12px] font-bold" style={{ color: INK }}>
          @openpay
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          OpenPay · OpenUSD
        </p>
        <div className="mt-auto mb-3 w-full">
          <PrimaryBtn>Open Express Send</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function RequestScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Request
        </p>
        <Sheet className="mt-3">
          <p className="text-[9px]" style={{ color: MUTED }}>
            From
          </p>
          <p className="text-[13px] font-semibold" style={{ color: BLUE }}>
            @friend
          </p>
        </Sheet>
        <Sheet className="mt-2">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Amount
          </p>
          <p className="text-[28px] font-extrabold" style={{ color: INK }}>
            18.00
          </p>
        </Sheet>
        <Sheet className="mt-2">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Note
          </p>
          <p className="text-[11px]" style={{ color: INK }}>
            Dinner split
          </p>
        </Sheet>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Request payment</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function InvoiceScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Invoice
        </p>
        <Sheet className="mt-3 space-y-2">
          {[
            ["Design package", "80.00"],
            ["Revisions", "20.00"],
          ].map(([a, b]) => (
            <div key={a} className="flex justify-between text-[10px]">
              <span style={{ color: INK }}>{a}</span>
              <span className="font-semibold">{b}</span>
            </div>
          ))}
          <div className="border-t border-black/[0.06] pt-2 flex justify-between text-[11px] font-bold">
            <span>Total</span>
            <span>100.00 OUSD</span>
          </div>
        </Sheet>
        <p className="mt-2 text-[9px]" style={{ color: MUTED }}>
          Due · Mar 21
        </p>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Send invoice</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function ScanScreen() {
  return (
    <PreviewPhoneShell canvas="dark">
      <StatusBar light />
      <div className="flex-1 flex flex-col items-center px-4">
        <p className="text-[13px] font-bold text-white mt-2">Scan QR</p>
        <p className="text-[9px] text-white/60">Align code · or enter manually</p>
        <div className="mt-8 w-[160px] h-[160px] rounded-2xl border-2 border-white/80 relative">
          <div className="absolute inset-4 border border-dashed border-white/30 rounded-xl" />
          <div className="absolute left-3 right-3 top-1/2 h-[2px] bg-[#007AFF]" />
        </div>
        <div className="mt-auto mb-4 w-full h-9 rounded-xl bg-white/15 text-white text-[11px] font-semibold flex items-center justify-center border border-white/20">
          Enter code manually
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function QrPayScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          QR Pay
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          Overview · New payment
        </p>
        <Sheet className="mt-3 !py-4 text-center">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Today
          </p>
          <p className="text-[24px] font-extrabold" style={{ color: INK }}>
            482.00
          </p>
          <p className="text-[9px]" style={{ color: MUTED }}>
            OUSD · 14 orders
          </p>
        </Sheet>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          {["Links", "Orders", "API"].map((t) => (
            <div key={t} className="rounded-xl bg-white py-2.5 text-center text-[9px] font-semibold" style={{ color: INK }}>
              {t}
            </div>
          ))}
        </div>
        <div className="mt-auto mb-3">
          <PrimaryBtn>New payment</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function BuyScreen() {
  const rails = ["Pi Network", "Card / Apple Pay", "E-Wallet / QRPh", "USDT / USDC"];
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Buy OUSD
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          Top up OpenUSD
        </p>
        <div className="mt-3 space-y-1.5">
          {rails.map((r) => (
            <Sheet key={r} className="!py-2.5 text-[11px] font-semibold text-[#1d1d1f]">
              {r}
            </Sheet>
          ))}
        </div>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Continue</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function WithdrawScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Withdraw
        </p>
        <Sheet className="mt-3 text-center !py-5">
          <p className="text-[9px]" style={{ color: MUTED }}>
            OpenUSD → OUSD payout
          </p>
          <p className="text-[28px] font-extrabold" style={{ color: INK }}>
            100.00
          </p>
          <p className="text-[10px] font-semibold mt-1" style={{ color: GREEN }}>
            1:1 rate
          </p>
        </Sheet>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Withdraw</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function SendProScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Send to Pro
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          OpenPay → Pro · Partner inbound
        </p>
        <Sheet className="mt-3">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Destination
          </p>
          <p className="text-[11px] font-semibold" style={{ color: BLUE }}>
            @username or 0x…
          </p>
        </Sheet>
        <Sheet className="mt-2">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Amount
          </p>
          <p className="text-[28px] font-extrabold" style={{ color: INK }}>
            50.00
          </p>
        </Sheet>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Bridge to Pro</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function ConverterScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Converter
        </p>
        <Sheet className="mt-3">
          <p className="text-[9px]" style={{ color: MUTED }}>
            PI
          </p>
          <p className="text-[22px] font-extrabold" style={{ color: INK }}>
            100.00
          </p>
        </Sheet>
        <div className="my-2 flex justify-center">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ArrowLeftRight size={14} style={{ color: BLUE }} />
          </div>
        </div>
        <Sheet>
          <p className="text-[9px]" style={{ color: MUTED }}>
            OUSD
          </p>
          <p className="text-[22px] font-extrabold" style={{ color: INK }}>
            316.00
          </p>
          <p className="text-[9px] mt-1" style={{ color: MUTED }}>
            Live CoinGecko rate
          </p>
        </Sheet>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Convert</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function MiningScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col items-center">
        <p className="text-[13px] font-bold self-start" style={{ color: INK }}>
          Mining
        </p>
        <p className="text-[9px] self-start" style={{ color: MUTED }}>
          Engage Mining + ads
        </p>
        <div className="mt-5 relative w-32 h-32 rounded-full border-[5px] border-[#E5E5EA] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[5px] border-[#007AFF] border-t-transparent rotate-45" />
          <div className="text-center">
            <p className="text-[10px] font-semibold" style={{ color: GREEN }}>
              Active
            </p>
            <p className="text-[18px] font-extrabold" style={{ color: INK }}>
              18:42
            </p>
          </div>
        </div>
        <p className="mt-3 text-[9px] text-center" style={{ color: MUTED }}>
          Requires KYC + Pi Browser · Watch 2 ads
        </p>
        <div className="mt-auto mb-3 w-full">
          <PrimaryBtn>Engage Mining</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function StakingScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Staking
        </p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["7d", "30d", "90d"].map((d, i) => (
            <div
              key={d}
              className="rounded-xl py-3 text-center text-[11px] font-bold"
              style={{ background: i === 1 ? BLUE : "white", color: i === 1 ? "white" : INK }}
            >
              {d}
            </div>
          ))}
        </div>
        <Sheet className="mt-3 text-center !py-4">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Stake OUSD
          </p>
          <p className="text-[26px] font-extrabold" style={{ color: INK }}>
            200.00
          </p>
        </Sheet>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Stake now</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function AffiliateScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Affiliate
        </p>
        <Sheet className="mt-3">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Your link
          </p>
          <p className="text-[10px] font-semibold mt-1" style={{ color: BLUE }}>
            openpy.space/r/openpay
          </p>
        </Sheet>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <Sheet className="text-center !py-3">
            <p className="text-[18px] font-extrabold" style={{ color: INK }}>
              24
            </p>
            <p className="text-[8px]" style={{ color: MUTED }}>
              Invites
            </p>
          </Sheet>
          <Sheet className="text-center !py-3">
            <p className="text-[18px] font-extrabold" style={{ color: INK }}>
              36.50
            </p>
            <p className="text-[8px]" style={{ color: MUTED }}>
              Earned OUSD
            </p>
          </Sheet>
        </div>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Share invite</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function CreditScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col items-center">
        <p className="text-[13px] font-bold self-start" style={{ color: INK }}>
          Credit
        </p>
        <div className="mt-6 w-28 h-28 rounded-full border-[6px] border-[#E5E5EA] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border-[6px] border-[#007AFF] border-b-transparent border-l-transparent rotate-12" />
          <div className="text-center">
            <p className="text-[22px] font-extrabold" style={{ color: INK }}>
              86
            </p>
            <p className="text-[8px]" style={{ color: MUTED }}>
              / 120
            </p>
          </div>
        </div>
        <p className="mt-3 text-[10px] font-semibold" style={{ color: GREEN }}>
          Good standing
        </p>
        <div className="mt-auto mb-3 w-full">
          <PrimaryBtn>Build credit</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function LoansScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Loans
        </p>
        <Sheet className="mt-3 text-center !py-5">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Available to borrow
          </p>
          <p className="text-[28px] font-extrabold" style={{ color: INK }}>
            500.00
          </p>
          <p className="text-[10px] mt-1" style={{ color: MUTED }}>
            APR 8.9%
          </p>
        </Sheet>
        <div className="mt-auto mb-3">
          <PrimaryBtn>Apply now</PrimaryBtn>
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function CardScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Virtual Card
        </p>
        <div className="mt-4 rounded-2xl p-3.5 text-white aspect-[1.58/1] flex flex-col justify-between shadow-lg" style={{ background: "linear-gradient(145deg,#1d1d1f,#0A4A9E)" }}>
          <div className="flex justify-between">
            <span className="text-[10px] font-bold">OpenPay</span>
            <CreditCard size={14} className="opacity-70" />
          </div>
          <p className="text-[13px] font-mono tracking-[0.14em]">•••• •••• •••• 4242</p>
          <div className="flex justify-between text-[9px] opacity-80">
            <span>OPENPAY</span>
            <span>12/28</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["Flip", "Lock", "Hide"].map((a) => (
            <div key={a} className="rounded-xl bg-white py-2.5 text-center text-[9px] font-semibold" style={{ color: INK }}>
              {a}
            </div>
          ))}
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function RatesScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Live Rates
        </p>
        <Sheet className="mt-3 !py-4">
          <p className="text-[9px]" style={{ color: MUTED }}>
            1 PI → OUSD
          </p>
          <p className="text-[24px] font-extrabold" style={{ color: INK }}>
            3.16
          </p>
          <p className="text-[9px] mt-1" style={{ color: GREEN }}>
            Live · CoinGecko
          </p>
        </Sheet>
        <Sheet className="mt-2 !py-4">
          <p className="text-[9px]" style={{ color: MUTED }}>
            1 OUSD
          </p>
          <p className="text-[24px] font-extrabold" style={{ color: INK }}>
            $1.00
          </p>
          <p className="text-[9px] mt-1" style={{ color: MUTED }}>
            USD peg
          </p>
        </Sheet>
      </div>
    </PreviewPhoneShell>
  );
}

function MenuScreen() {
  const groups = [
    { h: "Transactions", i: ["Send", "Receive", "Activity"] },
    { h: "Secure banking", i: ["Credit", "Loans", "Card"] },
    { h: "Merchant", i: ["POS", "QR Pay"] },
    { h: "Earn", i: ["Mining", "Staking"] },
  ];
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3 flex-1 flex flex-col overflow-hidden">
        <p className="text-[13px] font-bold px-0.5" style={{ color: INK }}>
          Services
        </p>
        <div className="mt-2 space-y-2 overflow-hidden">
          {groups.map((g) => (
            <Sheet key={g.h} className="!py-2.5">
              <p className="text-[9px] font-semibold mb-1" style={{ color: MUTED }}>
                {g.h}
              </p>
              <div className="flex flex-wrap gap-1">
                {g.i.map((x) => (
                  <span key={x} className="px-2 py-1 rounded-full text-[8px] font-semibold" style={{ background: GRAY, color: INK }}>
                    {x}
                  </span>
                ))}
              </div>
            </Sheet>
          ))}
        </div>
        <BottomNav active="menu" />
      </div>
    </PreviewPhoneShell>
  );
}

function AiScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3 flex-1 flex flex-col">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: BLUE }}>
            AI
          </div>
          <div>
            <p className="text-[11px] font-bold" style={{ color: INK }}>
              OpenPay AI
            </p>
            <p className="text-[8px]" style={{ color: MUTED }}>
              Financial assistant
            </p>
          </div>
        </div>
        <div className="mt-3 flex-1 space-y-2">
          <div className="rounded-2xl rounded-tl-sm bg-white px-2.5 py-2 text-[10px] max-w-[88%]" style={{ color: INK }}>
            What’s my OUSD balance?
          </div>
          <div className="rounded-2xl rounded-tr-sm text-white px-2.5 py-2 text-[10px] ml-auto max-w-[88%]" style={{ background: BLUE }}>
            You have 1,240.00 OUSD. Want to send, check KYC, or start mining?
          </div>
          <div className="flex flex-wrap gap-1 pt-1">
            {["Send money", "Check KYC", "Start mining", "Live rates"].map((c) => (
              <span key={c} className="px-2 py-1 rounded-full text-[8px] font-semibold bg-white" style={{ color: INK }}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-3 rounded-full bg-white px-3 py-2 text-[10px]" style={{ color: MUTED }}>
          Ask OpenPay AI…
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function NftScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          OpenNFT
        </p>
        <div className="mt-2 rounded-xl bg-white px-2.5 py-2 text-[10px]" style={{ color: MUTED }}>
          Search Open NFT
        </div>
        <div className="mt-2 flex gap-1 overflow-hidden">
          {["All", "Art", "Music", "Collect"].map((c, i) => (
            <span
              key={c}
              className="px-2 py-1 rounded-full text-[8px] font-semibold whitespace-nowrap"
              style={{ background: i === 0 ? BLUE : "white", color: i === 0 ? "white" : INK }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {["Orbital", "Pioneer", "Wave", "Pulse"].map((n, i) => (
            <div key={n} className="rounded-xl bg-white overflow-hidden">
              <div
                className={`aspect-square ${
                  ["bg-gradient-to-br from-sky-400 to-blue-700", "bg-gradient-to-br from-emerald-400 to-teal-700", "bg-gradient-to-br from-amber-300 to-orange-500", "bg-gradient-to-br from-slate-400 to-slate-700"][i]
                }`}
              />
              <div className="p-1.5">
                <p className="text-[9px] font-bold" style={{ color: INK }}>
                  {n}
                </p>
                <p className="text-[8px]" style={{ color: MUTED }}>
                  Mint · Collect
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function PosScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold" style={{ color: INK }}>
            Merchant POS
          </p>
          <span className="text-[8px] font-semibold" style={{ color: GREEN }}>
            Live
          </span>
        </div>
        <Sheet className="mt-3 text-center !py-4">
          <p className="text-[9px]" style={{ color: MUTED }}>
            Charge amount
          </p>
          <p className="text-[32px] font-extrabold tracking-[-0.05em]" style={{ color: INK }}>
            12.50
          </p>
          <p className="text-[9px]" style={{ color: MUTED }}>
            OUSD
          </p>
        </Sheet>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="h-9 rounded-xl text-white text-[11px] font-semibold flex items-center justify-center" style={{ background: BLUE }}>
            Charge
          </div>
          <div className="h-9 rounded-xl bg-white text-[11px] font-semibold flex items-center justify-center gap-1" style={{ color: INK }}>
            <QrCode size={12} /> Show QR
          </div>
        </div>
        <Sheet className="mt-3 !py-2.5 flex justify-between">
          <div>
            <p className="text-[8px]" style={{ color: MUTED }}>
              Today’s volume
            </p>
            <p className="text-[12px] font-bold" style={{ color: INK }}>
              286.00
            </p>
          </div>
          <div className="text-right">
            <p className="text-[8px]" style={{ color: MUTED }}>
              Payments
            </p>
            <p className="text-[12px] font-bold" style={{ color: INK }}>
              19
            </p>
          </div>
        </Sheet>
      </div>
    </PreviewPhoneShell>
  );
}

function ActivityScreen() {
  const rows = [
    { t: "Sent @pioneer", a: "−25.00", c: "#FF3B30" },
    { t: "Received QR Pay", a: "+40.00", c: GREEN },
    { t: "Mining reward", a: "+0.24", c: GREEN },
    { t: "Top up · Card", a: "+100.00", c: GREEN },
  ];
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <p className="text-[13px] font-bold" style={{ color: INK }}>
          Activity
        </p>
        <div className="mt-3 space-y-1.5">
          {rows.map((r) => (
            <Sheet key={r.t} className="!py-2.5 flex justify-between items-center">
              <span className="text-[10px] font-semibold" style={{ color: INK }}>
                {r.t}
              </span>
              <span className="text-[10px] font-bold" style={{ color: r.c }}>
                {r.a}
              </span>
            </Sheet>
          ))}
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function NotificationsScreen() {
  const notes = [
    { t: "Payment received", d: "+40.00 OUSD from QR Pay" },
    { t: "Mining ready", d: "Engage Mining is available" },
    { t: "KYC update", d: "ID step approved" },
  ];
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col">
        <div className="flex items-center gap-2">
          <Bell size={14} style={{ color: BLUE }} />
          <p className="text-[13px] font-bold" style={{ color: INK }}>
            Alerts
          </p>
        </div>
        <div className="mt-3 space-y-1.5">
          {notes.map((n) => (
            <Sheet key={n.t} className="!py-2.5">
              <p className="text-[10px] font-semibold" style={{ color: INK }}>
                {n.t}
              </p>
              <p className="text-[9px] mt-0.5" style={{ color: MUTED }}>
                {n.d}
              </p>
            </Sheet>
          ))}
        </div>
      </div>
    </PreviewPhoneShell>
  );
}

function ProfileScreen() {
  return (
    <PreviewPhoneShell>
      <StatusBar />
      <div className="px-3.5 flex-1 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mt-2 shadow-sm">
          <User size={22} style={{ color: BLUE }} />
        </div>
        <p className="mt-2 text-[14px] font-bold" style={{ color: INK }}>
          @openpay
        </p>
        <p className="text-[9px]" style={{ color: MUTED }}>
          Account & KYC
        </p>
        <Sheet className="mt-4 w-full !py-2.5 flex justify-between">
          <span className="text-[10px] font-semibold" style={{ color: INK }}>
            KYC status
          </span>
          <span className="text-[9px] font-semibold" style={{ color: GREEN }}>
            Verified
          </span>
        </Sheet>
        <Sheet className="mt-1.5 w-full !py-2.5 flex justify-between">
          <span className="text-[10px] font-semibold" style={{ color: INK }}>
            OpenPay Pro
          </span>
          <span className="text-[9px] font-semibold" style={{ color: BLUE }}>
            Linked
          </span>
        </Sheet>
        <Sheet className="mt-1.5 w-full !py-2.5 flex justify-between">
          <span className="text-[10px] font-semibold" style={{ color: INK }}>
            App version
          </span>
          <span className="text-[9px] font-semibold" style={{ color: MUTED }}>
            v1.0.0
          </span>
        </Sheet>
      </div>
    </PreviewPhoneShell>
  );
}

const SCREEN_MAP: Record<string, () => ReactElement> = {
  auth: AuthScreen,
  kyc: KycScreen,
  wallet: WalletScreen,
  assets: AssetsScreen,
  savings: SavingsScreen,
  send: SendScreen,
  receive: ReceiveScreen,
  request: RequestScreen,
  invoice: InvoiceScreen,
  scan: ScanScreen,
  qrpay: QrPayScreen,
  buy: BuyScreen,
  withdraw: WithdrawScreen,
  "send-pro": SendProScreen,
  converter: ConverterScreen,
  mining: MiningScreen,
  staking: StakingScreen,
  affiliate: AffiliateScreen,
  credit: CreditScreen,
  loans: LoansScreen,
  card: CardScreen,
  rates: RatesScreen,
  menu: MenuScreen,
  ai: AiScreen,
  nft: NftScreen,
  pos: PosScreen,
  activity: ActivityScreen,
  notifications: NotificationsScreen,
  profile: ProfileScreen,
};

export function PreviewScreenById({ id }: { id: string }) {
  const Comp = SCREEN_MAP[id] ?? WalletScreen;
  return <Comp />;
}

/** Landing-page aliases matching previous WalletMocks export names */
export function DashboardPhoneMock() {
  return <WalletScreen />;
}
export function SendPhoneMock() {
  return <SendScreen />;
}
export function ReceivePhoneMock() {
  return <ReceiveScreen />;
}
export function PosPhoneMock() {
  return <PosScreen />;
}
export function VirtualCardMock() {
  return <CardScreen />;
}
export function MiningPhoneMock() {
  return <MiningScreen />;
}
export function AiChatMock() {
  return <AiScreen />;
}
export function NftGridMock() {
  return <NftScreen />;
}
