import {
  Activity,
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  Coins,
  CreditCard,
  FileText,
  Fingerprint,
  Gift,
  Globe,
  HelpCircle,
  History,
  KeyRound,
  Landmark,
  Layers,
  Link2,
  Lock,
  Mail,
  Megaphone,
  MessageSquare,
  MessagesSquare,
  MousePointerClick,
  Package,
  Pickaxe,
  PiggyBank,
  Plug,
  QrCode,
  Rocket,
  ScanLine,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Store,
  Trophy,
  Users,
  Wallet,
  WalletCards,
  Webhook,
  Zap,
} from "lucide-react";
import AuthMark from "@/components/AuthMark";
import BrandLogo from "@/components/BrandLogo";
import { APP_VERSION_LABEL } from "@/lib/appVersion";
import { APPLE_PAY_LOGO } from "@/lib/applePayLogo";
import { OUSD_TOKEN } from "@/lib/ousdPrice";
import { BluePage, LightPage } from "./PhoneChrome";
import { BlueBtn, BottomNavMock, Chip, Group, IosHeader, LogoMark, Row, SectionLabel } from "./previewKit";

const PI = "/payment-providers/pi.svg";
const PAYPAL = "/payment-providers/paypal.svg";
const VISA = "/payment-providers/visa.svg";
const MC = "/payment-providers/mastercard.svg";
const PRO = "/openpay-o.svg";

export function AuthLatestFrame() {
  return (
    <div className="h-full overflow-hidden bg-[#062468] px-5 pb-8 pt-14 text-white">
      <div className="mb-5 text-center">
        <AuthMark className="mx-auto mb-3 h-14 w-14" />
        <h1 className="text-[28px] font-bold">OpenPay</h1>
        <p className="mt-1 text-[14px] text-white/70">Sign in with Pi, OpenPay Pro, or email</p>
        <p className="mt-1 text-[11px] text-white/50">{APP_VERSION_LABEL}</p>
      </div>
      <div className="rounded-[28px] bg-white p-5 text-[#1C1C1E] shadow-[0_28px_80px_-24px_rgba(0,0,0,0.4)]">
        <div className="flex h-12 items-center justify-center rounded-[16px] bg-[#7D2AE8] text-[17px] font-semibold text-white">
          <img src={PI} alt="" className="mr-2 h-6 w-6 rounded-full bg-white" />
          Authenticate with Pi
        </div>
        <p className="my-3 text-center text-[12px] font-medium uppercase tracking-wide text-[#8E8E93]">or continue with</p>
        <p className="mb-2 text-[13px] font-semibold">OpenPay Pro Auth</p>
        <div className="flex h-12 items-center justify-center rounded-[16px] bg-black text-[16px] font-semibold text-white">
          <BrandLogo variant="white" animate={false} className="mr-2 h-5 w-5" />
          Sign in with OpenPay Pro
        </div>
        <p className="mt-2 text-[12px] leading-snug text-[#8E8E93]">Secure OAuth via Pro Connect · profile, balance & payments</p>
        <div className="mt-4 flex h-12 items-center justify-center rounded-[16px] bg-[#007AFF] text-[16px] font-semibold text-white">
          <Mail className="mr-2 h-4 w-4" /> Sign In with Email
        </div>
        <p className="mt-4 px-1 text-[12px] uppercase tracking-wide text-[#8E8E93]">Resources</p>
        <div className="mt-1 overflow-hidden rounded-[12px] bg-[#F2F2F7]">
          {["Download Pi Browser", "OpenPay Socials", "OpenPay Website"].map((l, i) => (
            <div key={l} className={`flex items-center justify-between px-3.5 py-2.5 ${i ? "border-t border-black/[0.06]" : ""}`}>
              <span className="text-[15px]">{l}</span>
              <ChevronRight className="h-4 w-4 text-[#C7C7CC]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WalletLatestFrame() {
  return (
    <LightPage className="relative">
      <div className="flex items-center justify-between px-4 pt-12">
        <div className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#007AFF]/12">
            <BrandLogo animate={false} className="h-7 w-7" />
          </span>
          <div>
            <p className="text-[16px] font-bold leading-tight">Maria Santos</p>
            <p className="text-[12px] text-[#8E8E93]">@openpay</p>
            <p className="text-[11px] text-[#8E8E93]">Account no.: OP-1842-5501</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold">OUSD</span>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <Bell className="h-4 w-4" />
            <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-[#FF3B30]" />
          </span>
        </div>
      </div>
      <div className="mx-4 mt-3 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#007AFF] via-[#0A84FF] to-[#0051D4] p-5 text-white">
        <div className="inline-flex rounded-full bg-black/15 p-1">
          <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#007AFF]">Personal</span>
          <span className="px-3 py-1 text-[11px] font-semibold text-white/80">Merchant</span>
        </div>
        <div className="mt-2 flex gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold">Developers</span>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold">Contacts</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">Available balance</p>
            <p className="mt-1.5 text-[40px] font-bold leading-none tracking-tight">1,284.50</p>
            <p className="mt-2 text-[13px] text-white/70">OpenUSD</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#007AFF]">+ Mining</span>
            <span className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#007AFF]">+ Cash In</span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-1">
          {[
            ["Pay", Send],
            ["Transfer", ArrowLeftRight],
            ["Receive", ArrowDownToLine],
            ["Scan", QrCode],
          ].map(([label, Icon]) => (
            <div key={String(label)} className="flex flex-col items-center gap-1">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/18">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-semibold">{label as string}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-3 flex gap-1 overflow-hidden rounded-full bg-white p-1">
        {["Wallet", "Savings", "Assets", "QR Pay"].map((t, i) => (
          <span key={t} className={`flex-1 py-1.5 text-center text-[11px] font-semibold ${i === 0 ? "rounded-full bg-[#007AFF] text-white" : "text-[#8E8E93]"}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="mx-4 mt-3 rounded-[20px] bg-white p-4">
        <p className="text-[12px] font-semibold text-[#34C759]">Pi cashback</p>
        <p className="mt-0.5 text-[17px] font-bold">+2.50 OUSD ready</p>
        <div className="mt-2 flex h-10 items-center justify-center rounded-full bg-[#34C759] text-[14px] font-semibold text-white">
          Claim cashback
        </div>
      </div>
      <BottomNavMock />
    </LightPage>
  );
}

export function AssetsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Assets" subtitle="Track OpenPay wallet and OpenPay Pro tokens" />
      <div className="mx-4 mt-2 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70">Token balances</p>
        <p className="mt-1 text-[11px] text-white/70">Total assets (USD)</p>
        <p className="text-[34px] font-bold leading-none">2,041.80</p>
        <p className="mt-2 text-[12px] text-white/70">Wallet · Savings · Mining · Merchant</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            ["Wallet", "1,284.50"],
            ["Savings", "420.00"],
            ["Mining", "87.30"],
            ["Merchant", "250.00"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-white/12 p-2.5">
              <p className="text-[10px] font-semibold uppercase text-white/60">{l}</p>
              <p className="text-[15px] font-bold">{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-3">
        <SectionLabel>Your tokens</SectionLabel>
        <Group>
          <Row icon={Wallet} title="OpenPay" subtitle="Wallet · 1,284.50 OUSD" />
          <Row icon={Coins} title="Pi Network" subtitle="Equiv. · 4,120 π" />
          <Row icon={PiggyBank} title="Savings" subtitle="Earn · 420.00 OUSD" />
          <Row icon={Pickaxe} title="Mining rewards" subtitle="Mine · 87.30 OUSD" last />
        </Group>
        <SectionLabel>OpenPay Pro assets</SectionLabel>
        <Group>
          {["OUSD", "USDT", "USDC", "SOL"].map((t, i, a) => (
            <Row key={t} icon={Layers} title={t} subtitle="View balance" last={i === a.length - 1} />
          ))}
        </Group>
      </div>
    </LightPage>
  );
}

export function SavingsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Savings" subtitle="Earn 3.75% p.a. and move funds anytime" />
      <div className="mx-4 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
        <p className="text-[11px] font-semibold uppercase text-white/70">Savings wallet</p>
        <p className="mt-1 text-[34px] font-bold leading-none">420.00</p>
        <p className="mt-1 text-[13px] text-white/70">OpenUSD · 3.75% p.a.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#007AFF]">+ Move funds</span>
          <span className="rounded-full bg-white/18 px-3 py-1.5 text-[12px] font-semibold">Stake</span>
          <span className="rounded-full bg-white/18 px-3 py-1.5 text-[12px] font-semibold">Claim interest</span>
        </div>
      </div>
      <div className="mx-4 mt-3 space-y-3">
        <Group>
          <div className="px-4 py-3">
            <p className="text-[15px] font-semibold">3.75% p.a. interest</p>
            <p className="text-[12px] text-[#8E8E93]">Paid daily into savings</p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div><p className="text-[11px] text-[#8E8E93]">Earned</p><p className="font-bold">12.40</p></div>
              <div><p className="text-[11px] text-[#8E8E93]">Daily</p><p className="font-bold">0.04</p></div>
              <div><p className="text-[11px] text-[#8E8E93]">Yearly</p><p className="font-bold">15.75</p></div>
            </div>
          </div>
        </Group>
        <Group>
          <Row icon={ArrowDownToLine} title="Wallet to savings" subtitle="Move to Savings" />
          <Row icon={ArrowUpRight} title="Savings to wallet" subtitle="Move to Wallet" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function SendLatestFrame() {
  return (
    <BluePage>
      <div className="px-4 pt-12">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl">‹</span>
          <HelpCircle className="h-5 w-5 text-white/80" />
        </div>
        <div className="h-11 rounded-[14px] bg-white/18 px-4 text-[16px] leading-[44px] text-white/70">Name, username</div>
        <div className="mt-3 inline-flex rounded-full bg-black/15 p-1">
          <span className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-[#007AFF]">OpenPay</span>
          <span className="px-4 py-1.5 text-[13px] font-semibold text-white/80">OpenPay Pro</span>
        </div>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <div className="overflow-hidden rounded-[18px] bg-white text-[#1C1C1E]">
          <Row icon={Zap} title="Express Send" subtitle="PayMongo InstaPay / PESONet" />
          <Row icon={Landmark} title="List of Banks" subtitle="152 InstaPay & PESONet receivers" last />
        </div>
        <p className="px-1 text-[12px] font-semibold uppercase tracking-wide text-white/70">Recent</p>
        <div className="overflow-hidden rounded-[18px] bg-white text-[#1C1C1E]">
          {[
            ["Alice Reyes", "@alice"],
            ["Juan Dela Cruz", "@juan"],
            ["OpenPay Store", "@openpay"],
          ].map(([n, u], i) => (
            <div key={u} className={`flex items-center gap-3 px-3.5 py-3 ${i ? "border-t border-black/[0.08]" : ""}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007AFF]/12 text-[13px] font-bold text-[#007AFF]">
                {n.slice(0, 1)}
              </span>
              <div className="flex-1">
                <p className="text-[16px] font-semibold">{n}</p>
                <p className="text-[12px] text-[#8E8E93]">{u}</p>
              </div>
              <span className="text-[14px] font-semibold text-[#007AFF]">Send</span>
            </div>
          ))}
        </div>
      </div>
    </BluePage>
  );
}

export function RequestLatestFrame() {
  return (
    <BluePage>
      <div className="px-4 pt-12">
        <div className="flex items-center justify-between">
          <span className="text-white/90">‹</span>
          <h1 className="text-[17px] font-semibold">Request</h1>
          <HelpCircle className="h-5 w-5 text-white/80" />
        </div>
        <div className="mt-3 flex rounded-full bg-white/18 p-1">
          {["New", "Incoming", "Sent"].map((t, i) => (
            <span key={t} className={`flex-1 py-1.5 text-center text-[13px] font-semibold ${i === 0 ? "rounded-full bg-white text-[#007AFF]" : "text-white/75"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <div className="rounded-[22px] bg-white p-4 text-center text-[#1C1C1E]">
          <p className="text-[13px] font-semibold text-[#8E8E93]">Receive via QR</p>
          <div className="mx-auto mt-3 flex h-36 w-36 items-center justify-center rounded-2xl bg-[#F2F2F7]">
            <QrCode className="h-24 w-24" />
          </div>
          <p className="mt-2 text-[12px] text-[#8E8E93]">Tap to view full QR</p>
        </div>
        <div className="rounded-[18px] bg-white p-4 text-[#1C1C1E]">
          <p className="text-[16px] font-semibold">Request from someone</p>
          <p className="mt-1 text-[13px] text-[#8E8E93]">Ask @friend for an amount + note</p>
          <div className="mt-3 flex h-11 items-center justify-center rounded-[14px] bg-[#007AFF] text-[15px] font-semibold text-white">
            Slide to confirm & request
          </div>
        </div>
      </div>
    </BluePage>
  );
}

export function InvoiceLatestFrame() {
  return (
    <BluePage>
      <div className="px-4 pt-12">
        <div className="flex items-center justify-between">
          <span>‹</span>
          <h1 className="text-[17px] font-semibold">Invoice</h1>
          <HelpCircle className="h-5 w-5" />
        </div>
        <div className="mt-3 flex rounded-full bg-white/18 p-1">
          {["New", "Received", "Sent"].map((t, i) => (
            <span key={t} className={`flex-1 py-1.5 text-center text-[13px] font-semibold ${i === 0 ? "rounded-full bg-white text-[#007AFF]" : "text-white/75"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <div className="rounded-[18px] bg-white p-4 text-[#1C1C1E]">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-semibold">Bill a customer</p>
            <span className="rounded-full bg-[#007AFF] px-3 py-1 text-[12px] font-semibold text-white">New invoice</span>
          </div>
          <p className="mt-3 text-[12px] font-semibold uppercase text-[#8E8E93]">Choose customer</p>
          <p className="mt-1 text-[16px]">@alice · Alice Reyes</p>
          <div className="mt-3 flex justify-between text-[15px]">
            <span className="text-[#8E8E93]">Design services</span>
            <span className="font-semibold">85.00 OUSD</span>
          </div>
          <div className="mt-4 flex h-11 items-center justify-center rounded-[14px] bg-[#007AFF] text-[15px] font-semibold text-white">
            Slide to confirm & invoice
          </div>
        </div>
      </div>
    </BluePage>
  );
}

export function ScanLatestFrame() {
  return (
    <div className="relative h-full overflow-hidden bg-[#0B0B0F] text-white">
      <div className="flex items-center justify-between px-4 pt-12">
        <span className="text-[22px] leading-none">‹</span>
        <h1 className="text-[17px] font-semibold">Scan QR Code</h1>
        <div className="flex items-center gap-3 text-white/80">
          <span className="text-[15px]">↻</span>
          <HelpCircle className="h-5 w-5" />
        </div>
      </div>
      <div className="mx-4 mt-3 flex rounded-full bg-white/12 p-1">
        {["Camera", "Photo", "Paste"].map((t, i) => (
          <span
            key={t}
            className={`flex-1 py-1.5 text-center text-[13px] font-semibold ${i === 0 ? "rounded-full bg-white text-[#007AFF]" : "text-white/70"}`}
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 px-4 text-center text-[12px] font-semibold text-white/75">
        OpenPay · OpenPay Pro · QR Pay · QR Ph / InstaPay
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-1.5 px-4">
        {["OpenPay", "Pro", "maya", "GCash", "QR Ph"].map((t) => (
          <span key={t} className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#1C1C1E]">
            {t}
          </span>
        ))}
      </div>
      <p className="mt-3 px-8 text-center text-[12px] leading-snug text-white/65">
        OpenPay to OpenPay, OpenPay to OpenPay Pro, QR Ph, bank, and international — one scan.
      </p>
      <div className="mx-auto mt-5 flex h-[210px] w-[210px] items-center justify-center rounded-[28px] border-2 border-white/45">
        <QrCode className="h-16 w-16 text-white/35" />
      </div>
      <p className="mt-4 text-center text-[13px] font-semibold text-white/70">Position the code inside the frame</p>
    </div>
  );
}

export function ScanHelpLatestFrame() {
  return (
    <LightPage>
      <div className="px-4 pt-12 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#007AFF]/12">
          <QrCode className="h-7 w-7 text-[#007AFF]" />
        </span>
        <h1 className="mt-3 text-[22px] font-bold">How to scan safely</h1>
        <p className="mt-1 text-[13px] text-[#8E8E93]">OpenPay, OpenPay Pro, QR Pay, and QR Ph / InstaPay codes are supported.</p>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <Group>
          <div className="flex flex-wrap gap-1.5 px-4 py-3">
            {["OpenPay", "Pro", "Maya", "GCash", "QR Ph", "InstaPay"].map((t) => (
              <Chip key={t} active={t === "OpenPay"}>
                {t}
              </Chip>
            ))}
          </div>
        </Group>
        <Group>
          <Row icon={Send} title="OpenPay to OpenPay" subtitle="Wallet, checkout, merchant QR" />
          <Row icon={ArrowLeftRight} title="OpenPay to OpenPay Pro" subtitle="@username or 0x wallet" />
          <Row icon={Landmark} title="OpenPay to bank" subtitle="QR Ph auto-fill" />
          <Row icon={Globe} title="International" subtitle="OpenPay rails beyond local payouts" />
          <Row icon={ShieldCheck} title="Verify before you pay" subtitle="Name, handle, or bank details" last />
        </Group>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex h-11 items-center justify-center rounded-[14px] bg-white text-[15px] font-semibold">Close</div>
          <BlueBtn className="h-11">I Understand</BlueBtn>
        </div>
      </div>
    </LightPage>
  );
}

export function QrPayLatestFrame() {
  return (
    <LightPage bg="bg-[#EEF1F6]">
      <div className="flex items-center justify-between px-4 pt-12">
        <div className="flex items-center gap-2">
          <BrandLogo animate={false} className="h-7 w-7" />
          <div>
            <p className="text-[11px] font-semibold uppercase text-[#8E8E93]">OpenPay</p>
            <p className="text-[17px] font-bold">QR Pay</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold">API</span>
          <span className="rounded-full bg-[#007AFF] px-3 py-1.5 text-[12px] font-semibold text-white">New</span>
        </div>
      </div>
      <p className="px-4 text-[13px] text-[#8E8E93]">Accept payments with QR codes and links.</p>
      <div className="mx-4 mt-3 flex rounded-full bg-white p-1">
        {["Overview", "Links", "Orders"].map((t, i) => (
          <span key={t} className={`flex-1 py-1.5 text-center text-[12px] font-semibold ${i === 0 ? "rounded-full bg-[#1C1C1E] text-white" : "text-[#8E8E93]"}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="mx-4 mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-[18px] bg-white p-3">
          <p className="text-[11px] text-[#8E8E93]">Available balance</p>
          <p className="text-[22px] font-bold">250.00</p>
        </div>
        <div className="rounded-[18px] bg-white p-3">
          <p className="text-[11px] text-[#8E8E93]">Total revenue</p>
          <p className="text-[22px] font-bold">1,920.40</p>
        </div>
      </div>
      <div className="mx-4 mt-3 rounded-[18px] bg-white p-4">
        <p className="text-[13px] font-semibold">Revenue by method</p>
        {[
          ["Pi Network", "42%"],
          ["Wallet", "31%"],
          ["Apple Pay", "18%"],
        ].map(([m, p]) => (
          <div key={m} className="mt-2 flex items-center justify-between text-[13px]">
            <span>{m}</span>
            <span className="font-semibold">{p}</span>
          </div>
        ))}
      </div>
    </LightPage>
  );
}

export function KycLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Secure KYC" subtitle="Banking standard · 4 steps" />
      <div className="mx-4 space-y-3">
        <Group>
          <Row icon={BadgeCheck} title="Personal details" subtitle="Done" />
          <Row icon={FileText} title="ID document" subtitle="In progress" />
          <Row icon={Fingerprint} title="Liveness check" subtitle="Next" last />
        </Group>
        <BlueBtn>Continue verification</BlueBtn>
      </div>
    </LightPage>
  );
}

export function PiTopUpLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Cash in with Pi" subtitle="Automatic credit in Pi Browser" right={<HelpCircle className="h-5 w-5 text-[#007AFF]" />} />
      <div className="mx-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#7D2AE8]/12 px-2.5 py-1 text-[11px] font-semibold text-[#7D2AE8]">Pi Network</span>
          <span className="rounded-full bg-[#34C759]/12 px-2.5 py-1 text-[11px] font-semibold text-[#34C759]">Automatic</span>
        </div>
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] font-semibold text-[#8E8E93]">You will receive</p>
            <p className="text-[32px] font-bold">25.00 OUSD</p>
            <p className="text-[13px] text-[#8E8E93]">Learn about OpenUSD</p>
          </div>
        </Group>
        <Group>
          <div className="px-4 py-3">
            <div className="flex items-center gap-2">
              <img src={PI} alt="" className="h-6 w-6 rounded-full" />
              <p className="text-[16px] font-semibold">Pi Payment</p>
            </div>
            <p className="mt-3 text-[12px] font-semibold text-[#8E8E93]">You spend</p>
            <p className="text-[22px] font-bold">π 80.12</p>
            <div className="mt-2 flex gap-2">
              {[1, 5, 10, 25].map((n, i) => (
                <Chip key={n} active={i === 3}>${n}</Chip>
              ))}
            </div>
          </div>
        </Group>
        <BlueBtn>Pay with Pi</BlueBtn>
      </div>
    </LightPage>
  );
}

export function PaypalLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="PayPal" subtitle="Wallet · Venmo · Pay Later · cards" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="flex items-center gap-3 px-4 py-4">
            <img src={PAYPAL} alt="" className="h-7 w-auto max-w-[88px] object-contain" />
            <div>
              <p className="text-[16px] font-semibold">PayPal checkout</p>
              <p className="text-[12px] text-[#8E8E93]">Instant OUSD credit after capture</p>
            </div>
          </div>
        </Group>
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">Amount</p>
            <p className="text-[32px] font-bold">50.00 OUSD</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <img src={PAYPAL} alt="" className="h-5 w-auto max-w-[54px] object-contain" />
              <img src={VISA} alt="" className="h-5 w-auto max-w-[40px] object-contain" />
              <img src={MC} alt="" className="h-5 w-auto max-w-[40px] object-contain" />
              <img src={APPLE_PAY_LOGO} alt="" className="h-5 w-auto max-w-[48px] object-contain" />
            </div>
          </div>
        </Group>
        <BlueBtn>Continue with PayPal</BlueBtn>
      </div>
    </LightPage>
  );
}

export function GooglePayLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Google Pay" subtitle="Cards saved in Google Wallet" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">You get</p>
            <p className="text-[32px] font-bold">40.00 OUSD</p>
            <p className="mt-1 text-[13px] text-[#8E8E93]">Stripe · Google Pay sheet</p>
          </div>
        </Group>
        <Group>
          <Row icon={ShieldCheck} title="Tokenized on-device" subtitle="OpenPay never sees the card number" last />
        </Group>
        <div className="flex h-[52px] items-center justify-center rounded-[14px] bg-black text-[17px] font-semibold text-white">
          G Pay
        </div>
      </div>
    </LightPage>
  );
}

export function StripeLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Cards" subtitle="Visa · Mastercard · Amex · Link" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">Top up amount</p>
            <p className="text-[32px] font-bold">75.00 OUSD</p>
            <div className="mt-3 flex gap-2">
              <img src={VISA} alt="" className="h-6 w-auto max-w-[44px] object-contain" />
              <img src={MC} alt="" className="h-6 w-auto max-w-[44px] object-contain" />
              <img src={APPLE_PAY_LOGO} alt="" className="h-6 w-auto max-w-[52px] object-contain" />
            </div>
          </div>
        </Group>
        <Group>
          <Row icon={CreditCard} title="Stripe Checkout" subtitle="One session for every card rail" last />
        </Group>
        <BlueBtn>Pay with card</BlueBtn>
      </div>
    </LightPage>
  );
}

export function UsdtLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="USDT" subtitle="Deposit Tether · credit OUSD 1:1" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-4 text-center">
            <p className="text-[12px] text-[#8E8E93]">Deposit address</p>
            <div className="mx-auto mt-3 flex h-36 w-36 items-center justify-center rounded-2xl bg-[#F2F2F7]">
              <QrCode className="h-24 w-24" />
            </div>
            <p className="mt-3 font-mono text-[12px] text-[#8E8E93]">0x7f…a91c</p>
          </div>
        </Group>
        <BlueBtn>Copy address</BlueBtn>
      </div>
    </LightPage>
  );
}

export function UsdcLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="USDC" subtitle="Circle USDC · instant OUSD credit" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">Network</p>
            <p className="text-[16px] font-semibold">Solana / Ethereum</p>
            <p className="mt-3 text-[12px] text-[#8E8E93]">You receive</p>
            <p className="text-[28px] font-bold">100.00 OUSD</p>
          </div>
        </Group>
        <Group>
          <Row icon={Wallet} title="Copy USDC address" subtitle="Only send USDC on the selected chain" last />
        </Group>
        <BlueBtn>Copy address</BlueBtn>
      </div>
    </LightPage>
  );
}

export function ProTopUpLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Pro Top-up" subtitle="Pay from OpenPay Pro · credit OUSD" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="flex items-center gap-3 px-4 py-4">
            <img src={PRO} alt="" className="h-9 w-9 rounded-[8px]" />
            <div>
              <p className="text-[16px] font-semibold">OpenPay Pro</p>
              <p className="text-[12px] text-[#8E8E93]">Partner inbound · instant wallet credit</p>
            </div>
          </div>
        </Group>
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">Amount</p>
            <p className="text-[32px] font-bold">20.00 OUSD</p>
          </div>
        </Group>
        <BlueBtn>Pay with OpenPay Pro</BlueBtn>
      </div>
    </LightPage>
  );
}

export function WithdrawLatestFrame() {
  return (
    <BluePage>
      <div className="px-4 pt-12">
        <span className="text-white/80">‹ Back</span>
        <h1 className="mt-2 text-[28px] font-bold">Withdraw OUSD</h1>
        <p className="mt-1 text-[13px] text-white/70">OpenUSD → OUSD payout · 1:1</p>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <div className="rounded-[18px] bg-white/15 p-4">
          <p className="text-[12px] font-semibold uppercase text-white/70">How this works</p>
          <p className="mt-1 text-[13px] leading-snug text-white/85">Submit 10+ OUSD. 2% processing fee. Funds settle to Pro or external wallet.</p>
        </div>
        <div className="rounded-[18px] bg-white p-4 text-[#1C1C1E]">
          <p className="text-[12px] text-[#8E8E93]">OpenUSD amount</p>
          <p className="text-[28px] font-bold">100.00</p>
          <div className="mt-3 flex rounded-full bg-[#F2F2F7] p-1">
            <span className="flex-1 rounded-full bg-white py-1.5 text-center text-[12px] font-semibold shadow">OpenPay Pro</span>
            <span className="flex-1 py-1.5 text-center text-[12px] font-medium text-[#8E8E93]">External</span>
          </div>
          <div className="mt-3 space-y-1 text-[13px]">
            <div className="flex justify-between"><span className="text-[#8E8E93]">Fee (2%)</span><span>2.00</span></div>
            <div className="flex justify-between font-semibold"><span>You will receive</span><span>98.00 OUSD</span></div>
          </div>
        </div>
        <div className="flex h-12 items-center justify-center rounded-[14px] bg-white text-[17px] font-semibold text-[#007AFF]">
          Submit Withdrawal
        </div>
      </div>
    </BluePage>
  );
}

export function ConverterLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Currency Converter" subtitle="Live CoinGecko PI · OUSD $1 peg" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-3 text-[13px] text-[#8E8E93]">Live rate: 1 PI = $0.3124 (CoinGecko)</div>
        </Group>
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">Amount</p>
            <p className="text-[32px] font-bold">100.00</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full bg-[#F2F2F7] px-3 py-1.5 text-[13px] font-semibold">PI</span>
              <ArrowLeftRight className="h-4 w-4 text-[#007AFF]" />
              <span className="rounded-full bg-[#1C1C1E] px-3 py-1.5 text-[13px] font-semibold text-white">OPEN USD</span>
            </div>
            <p className="mt-4 text-[12px] text-[#8E8E93]">Converted</p>
            <p className="text-[24px] font-bold">31.24 OUSD</p>
          </div>
        </Group>
      </div>
    </LightPage>
  );
}

export function MiningLatestFrame() {
  return (
    <LightPage bg="bg-[#F8FBFF]">
      <div className="bg-gradient-to-br from-[#003087] via-[#007AFF] to-[#0070ba] px-4 pb-6 pt-12 text-white">
        <div className="flex items-center justify-between">
          <span className="text-white/80">‹</span>
          <BrandLogo variant="white" animate={false} className="h-7 w-7" />
        </div>
        <h1 className="mt-3 text-[28px] font-bold">Mining</h1>
        <p className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-emerald-200">SYSTEM ACTIVE</p>
        <p className="mt-1 text-[34px] font-bold leading-none">0.25 OPEN / DAY</p>
        <p className="mt-2 text-[13px] text-white/75">Mining requires KYC + Pi Browser. Watch 2 rewarded ads to engage.</p>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <BlueBtn>Engage Mining</BlueBtn>
        <div className="grid grid-cols-2 gap-2">
          <Group className="p-3">
            <p className="text-[11px] text-[#8E8E93]">Network</p>
            <p className="text-[18px] font-bold">12,480</p>
          </Group>
          <Group className="p-3">
            <p className="text-[11px] text-[#8E8E93]">Earnings</p>
            <p className="text-[18px] font-bold">87.30</p>
          </Group>
        </div>
        <Group>
          <Row icon={Gift} title="Claim Earnings" subtitle="Claim All · Keep Mining" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function StakingLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Staking" subtitle="Earn yield on OpenUSD" />
      <div className="mx-4 space-y-3">
        <div className="overflow-hidden rounded-[22px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
          <p className="text-[11px] uppercase text-white/70">Available to stake</p>
          <p className="text-[32px] font-bold">1,284.50</p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-[12px]">
            <div><p className="text-white/60">Staked</p><p className="font-bold">200.00</p></div>
            <div><p className="text-white/60">Pending</p><p className="font-bold">0.00</p></div>
            <div><p className="text-white/60">Earned</p><p className="font-bold">4.80</p></div>
          </div>
        </div>
        <Group>
          <div className="px-4 py-3">
            <p className="text-[15px] font-semibold">Lock duration</p>
            <div className="mt-2 flex gap-2">
              {["7d", "14d", "30d", "90d"].map((d, i) => (
                <Chip key={d} active={i === 2}>{d}</Chip>
              ))}
            </div>
            <p className="mt-3 text-[13px] text-[#8E8E93]">Estimated reward · 6.40 OUSD</p>
          </div>
        </Group>
        <BlueBtn>Stake now</BlueBtn>
      </div>
    </LightPage>
  );
}

export function AffiliateLatestFrame() {
  return (
    <BluePage>
      <div className="px-4 pt-12">
        <span>‹</span>
        <h1 className="mt-2 text-[28px] font-bold">Affiliate</h1>
        <div className="mt-3 flex rounded-full bg-white/18 p-1">
          {["Invite", "Tasks", "Socials"].map((t, i) => (
            <span key={t} className={`flex-1 py-1.5 text-center text-[13px] font-semibold ${i === 0 ? "rounded-full bg-white text-[#007AFF]" : "text-white/75"}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        <div className="rounded-[18px] bg-white p-4 text-[#1C1C1E]">
          <p className="text-[12px] text-[#8E8E93]">Referral code</p>
          <p className="font-mono text-[20px] font-bold">OPENPAY-MS18</p>
          <div className="mt-3 flex h-11 items-center justify-center rounded-[14px] bg-[#007AFF] text-[15px] font-semibold text-white">
            Copy Invite Link
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Invites", "14"],
            ["Active miners", "8"],
            ["Claimed", "22.00"],
            ["Bonus", "4.50"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-[16px] bg-white/15 p-3">
              <p className="text-[11px] text-white/70">{l}</p>
              <p className="text-[18px] font-bold">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </BluePage>
  );
}

export function CreditLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Credit Profile" subtitle="Build your score to unlock loans" />
      <div className="mx-4 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
        <p className="text-[11px] uppercase text-white/70">Credit score</p>
        <p className="text-[40px] font-bold leading-none">742</p>
        <p className="mt-1 text-[13px] text-white/75">Loan-ready profile · 742 / 900</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[82%] rounded-full bg-[#34C759]" />
        </div>
        <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#007AFF]">+ Build credit</span>
      </div>
      <div className="mx-4 mt-3">
        <SectionLabel>Credit score activity</SectionLabel>
        <Group>
          <Row icon={ArrowUpRight} title="Send" subtitle="+8 pts" />
          <Row icon={ArrowDownToLine} title="Buy OUSD" subtitle="+12 pts" />
          <Row icon={Store} title="Checkout" subtitle="+15 pts" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function LoansLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Loans" subtitle="Borrow against your OpenPay profile" />
      <div className="mx-4 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
        <p className="text-[11px] uppercase text-white/70">Available to borrow</p>
        <p className="text-[34px] font-bold">500.00</p>
        <p className="text-[13px] text-white/75">3.50% p.a.</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#007AFF]">+ Apply now</span>
          <span className="rounded-full bg-white/18 px-3 py-1.5 text-[12px] font-semibold">Preview</span>
        </div>
      </div>
      <div className="mx-4 mt-3">
        <Group>
          <div className="space-y-1.5 px-4 py-3 text-[14px]">
            {[
              ["Loan amount", "200.00 OUSD"],
              ["Term", "90 days"],
              ["Interest", "3.50% p.a."],
              ["Monthly due", "67.40"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-[#8E8E93]">{k}</span>
                <span className="font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </Group>
        <BlueBtn className="mt-3">Submit for admin review</BlueBtn>
      </div>
    </LightPage>
  );
}

export function CardLatestFrame() {
  return (
    <div className="h-full overflow-hidden bg-gradient-to-b from-[#007AFF] to-[#072a7a] px-4 pt-12 text-white">
      <p className="text-white/80">‹ Back</p>
      <h1 className="mt-2 text-[26px] font-bold">OpenPay Virtual Card</h1>
      <p className="mt-1 text-[13px] text-white/70">Linked · 1,284.50 OUSD</p>
      <div className="mt-5 rounded-[22px] bg-gradient-to-br from-[#1C1C1E] to-[#3A3A3C] p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <BrandLogo variant="white" animate={false} className="h-8 w-8" />
          <p className="text-[12px] font-semibold tracking-widest">VIRTUAL</p>
        </div>
        <p className="mt-8 font-mono text-[18px] tracking-[0.18em]">•••• •••• •••• 4412</p>
        <div className="mt-6 flex justify-between text-[12px]">
          <div><p className="text-white/50">Cardholder</p><p className="font-semibold">MARIA SANTOS</p></div>
          <div><p className="text-white/50">Valid thru</p><p className="font-semibold">08/29</p></div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[12px] font-semibold">
        {["Show Details", "Lock Card", "Settings"].map((t) => (
          <span key={t} className="rounded-[14px] bg-white/15 py-3">{t}</span>
        ))}
      </div>
    </div>
  );
}

export function RatesLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Live Rates" subtitle="CoinGecko PI · OUSD $1 peg" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#34C759]" />
            <p className="text-[13px] font-semibold">Live</p>
          </div>
        </Group>
        <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
          <p className="text-[12px] text-white/70">Pi Network</p>
          <p className="text-[32px] font-bold">$0.3124</p>
          <p className="text-[13px] text-white/75">1 PI → 0.3124 OUSD</p>
        </div>
        <Group>
          <div className="px-4 py-4">
            <div className="flex items-center gap-2">
              <img src={OUSD_TOKEN.logoUrl} alt="" className="h-7 w-7 rounded-full" />
              <div>
                <p className="text-[16px] font-semibold">OpenUSD</p>
                <p className="text-[12px] text-[#8E8E93]">Pegged · 1 OUSD = $1.00 USD</p>
              </div>
            </div>
          </div>
        </Group>
      </div>
    </LightPage>
  );
}

export function AiLatestFrame() {
  return (
    <LightPage bg="bg-[#F4F1EA]" className="relative">
      <div className="flex items-center justify-between px-4 pt-12">
        <span className="text-[#007AFF]">‹</span>
        <div className="text-center">
          <p className="text-[17px] font-semibold">OpenPay AI</p>
          <p className="text-[12px] text-[#8E8E93]">Financial assistant</p>
        </div>
        <Sparkles className="h-5 w-5 text-[#007AFF]" />
      </div>
      <div className="mx-4 mt-4 flex flex-wrap gap-2">
        {["Check my balance", "Send money", "Top up wallet", "Complete KYC"].map((s) => (
          <span key={s} className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold shadow-sm">{s}</span>
        ))}
      </div>
      <div className="mx-4 mt-4 rounded-[18px] bg-white p-3 text-[14px] leading-relaxed">
        <p className="text-[11px] font-semibold text-[#8E8E93]">OpenPay AI</p>
        Your wallet holds 1,284.50 OUSD. Savings is earning 3.75% p.a. Want me to move 50 OUSD to savings?
      </div>
      <div className="mx-4 mt-3 ml-12 rounded-[18px] bg-[#007AFF] p-3 text-[14px] text-white">Check my balance</div>
      <div className="absolute inset-x-4 bottom-6 flex h-12 items-center rounded-full bg-white px-4 text-[15px] text-[#8E8E93] shadow">
        Message OpenPay AI...
        <Send className="ml-auto h-4 w-4 text-[#007AFF]" />
      </div>
    </LightPage>
  );
}

export function NftLatestFrame() {
  return (
    <div className="h-full overflow-hidden bg-[#08080a] px-4 pt-12 text-white">
      <div className="flex items-center justify-between">
        <p className="text-[22px] font-bold">OpenNFT</p>
        <span className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-black">Mint NFT</span>
      </div>
      <div className="mt-3 h-10 rounded-full bg-white/10 px-4 text-[14px] leading-10 text-white/50">Search Open NFT</div>
      <div className="mt-3 flex gap-2">
        <span className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-black">NFTs</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold">Tokens</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {["Aurora #12", "Pi City #4", "OpenDrop", "Founder"].map((t) => (
          <div key={t} className="overflow-hidden rounded-2xl bg-white/8">
            <div className="h-24 bg-gradient-to-br from-[#007AFF] to-[#7D2AE8]" />
            <div className="p-2.5">
              <p className="text-[13px] font-semibold">{t}</p>
              <p className="text-[11px] text-white/50">12.00 OUSD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PosLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Merchant POS" subtitle="@openpaystore · Live" />
      <div className="mx-4 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Group className="p-3"><p className="text-[11px] text-[#8E8E93]">Today</p><p className="text-[22px] font-bold">1,240</p></Group>
          <Group className="p-3"><p className="text-[11px] text-[#8E8E93]">Txns</p><p className="text-[22px] font-bold">18</p></Group>
        </div>
        <Group>
          <div className="px-4 py-4 text-center">
            <p className="text-[12px] text-[#8E8E93]">Charge amount</p>
            <p className="text-[40px] font-bold">25.00</p>
          </div>
        </Group>
        <div className="grid grid-cols-3 gap-1.5 text-center text-[18px] font-semibold">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "DEL"].map((k) => (
            <span key={k} className="rounded-[12px] bg-white py-3">{k}</span>
          ))}
        </div>
        <div className="flex h-11 items-center justify-center rounded-[14px] bg-[#34C759] text-[16px] font-semibold text-white">
          Generate QR Code
        </div>
      </div>
    </LightPage>
  );
}

export function ActivityLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Activity" subtitle="Newest first" />
      <div className="mx-4 flex gap-2">
        {["All", "Transfers", "Merchant", "NFT"].map((t, i) => (
          <Chip key={t} active={i === 0}>{t}</Chip>
        ))}
      </div>
      <div className="mx-4 mt-3">
        <Group>
          {[
            ["Sent to @alice", "−25.00", "Today"],
            ["Cash In · Apple Pay", "+50.00", "Today"],
            ["QR Pay · Store", "+18.00", "Yesterday"],
            ["Mining claim", "+0.25", "Yesterday"],
          ].map(([t, a, d], i, arr) => (
            <div key={t} className={`flex items-center gap-3 px-3.5 py-3 ${i < arr.length - 1 ? "border-b border-black/[0.08]" : ""}`}>
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${String(a).startsWith("+") ? "bg-[#34C759]/12 text-[#34C759]" : "bg-[#FF3B30]/10 text-[#FF3B30]"}`}>
                {String(a).startsWith("+") ? <ArrowDownToLine className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
              </span>
              <div className="flex-1">
                <p className="text-[15px] font-semibold">{t}</p>
                <p className="text-[12px] text-[#8E8E93]">{d}</p>
              </div>
              <p className="text-[15px] font-bold">{a}</p>
            </div>
          ))}
        </Group>
      </div>
    </LightPage>
  );
}

export function NotificationsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Notifications" subtitle="3 recent updates" />
      <div className="mx-4">
        <SectionLabel>Recent</SectionLabel>
        <Group>
          <Row icon={Gift} title="Pi cashback ready" subtitle="Claim +2.50 OUSD" />
          <Row icon={BadgeCheck} title="KYC approved" subtitle="1 OUSD welcome credited" />
          <Row icon={Bell} title="Apple Pay complete" subtitle="50.00 OUSD topped up" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function ProfileLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Profile" subtitle="@openpay" right={<span className="text-[17px] font-semibold text-[#007AFF]">Save</span>} />
      <div className="mx-4 space-y-3">
        <div className="flex flex-col items-center py-2">
          <span className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#007AFF]/12">
            <BrandLogo animate={false} className="h-12 w-12" />
          </span>
          <p className="mt-2 text-[14px] font-semibold text-[#007AFF]">Edit Photo</p>
        </div>
        <SectionLabel>Your identity</SectionLabel>
        <Group>
          <Row icon={Users} title="Maria Santos" subtitle="Name" />
          <Row icon={WalletCards} title="@openpay" subtitle="Username" />
          <Row icon={FileText} title="OP-1842-5501" subtitle="Account no." last />
        </Group>
        <SectionLabel>Security</SectionLabel>
        <Group>
          <Row icon={ShieldCheck} title="Identity verification" subtitle="Approved" />
          <Row icon={Fingerprint} title="Face ID / Fingerprint" subtitle="Enable" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function SettingsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Settings" right={<span className="text-[17px] font-semibold text-[#007AFF]">Save</span>} />
      <div className="mx-4">
        <SectionLabel>Account</SectionLabel>
        <Group>
          <Row icon={Users} title="Profile" />
          <Row icon={ShieldCheck} title="Two-Factor Authentication" />
          <Row icon={Bell} title="Notifications" last />
        </Group>
        <SectionLabel>Preferences</SectionLabel>
        <Group>
          <Row icon={Globe} title="Language" subtitle="English" />
          <Row icon={Sparkles} title="Appearance" subtitle="Automatic" last />
        </Group>
        <SectionLabel>App Security</SectionLabel>
        <Group>
          <Row icon={Lock} title="PIN" subtitle="Enable" />
          <Row icon={KeyRound} title="Security Password" last />
        </Group>
        <div className="mt-4 flex w-full items-center justify-center rounded-[12px] bg-white py-3.5 text-[17px] font-semibold text-[#ff3b30]">
          Log Out
        </div>
      </div>
    </LightPage>
  );
}

export function TwoFactorLatestFrame() {
  return (
    <div className="h-full overflow-hidden bg-gradient-to-b from-[#007AFF] to-[#072a7a] px-4 pt-12 text-white">
      <p className="text-white/80">‹ Back</p>
      <div className="mt-6 rounded-[24px] bg-white p-5 text-[#1C1C1E]">
        <AuthMark className="mx-auto h-12 w-12" />
        <h1 className="mt-3 text-center text-[22px] font-bold">Two-Factor Authentication</h1>
        <p className="mt-1 text-center text-[13px] text-[#8E8E93]">Google Authenticator · scan QR or enter the key</p>
        <div className="mx-auto mt-4 flex h-36 w-36 items-center justify-center rounded-2xl bg-[#F2F2F7]">
          <QrCode className="h-24 w-24" />
        </div>
        <p className="mt-3 text-center font-mono text-[12px] text-[#8E8E93]">JBSW Y3DP EHPK 3PXP</p>
        <div className="mt-4 flex h-12 items-center justify-center rounded-[14px] bg-[#007AFF] text-[16px] font-semibold text-white">
          Enable 2FA
        </div>
      </div>
    </div>
  );
}

export function ContactsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Contacts" subtitle="People you send to" right={<span className="text-[22px] font-light text-[#007AFF]">+</span>} />
      <div className="mx-4">
        <div className="mb-3 rounded-[12px] bg-white px-4 py-2.5 text-[16px] text-[#8E8E93]">Search</div>
        <Group>
          {[
            ["Alice Reyes", "@alice"],
            ["Juan Dela Cruz", "@juan"],
            ["Maya Shop", "@mayashop"],
          ].map(([n, u], i, a) => (
            <div key={u} className={`flex items-center gap-3 px-3.5 py-3 ${i < a.length - 1 ? "border-b border-black/[0.08]" : ""}`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007AFF]/12 font-bold text-[#007AFF]">{n[0]}</span>
              <div>
                <p className="text-[16px] font-semibold">{n}</p>
                <p className="text-[12px] text-[#8E8E93]">{u}</p>
              </div>
            </div>
          ))}
        </Group>
      </div>
    </LightPage>
  );
}

export function FeatureQuestLatestFrame() {
  return (
    <LightPage bg="bg-gradient-to-b from-blue-50 to-[#F2F2F7]">
      <IosHeader title="OpenPay Quest" subtitle="Master every OpenPay feature" />
      <div className="mx-4 space-y-3">
        <div className="rounded-[20px] bg-gradient-to-br from-[#007AFF] to-[#0051D4] p-4 text-white">
          <p className="text-[13px] text-white/75">Progress</p>
          <p className="text-[22px] font-bold">18 of 32</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[56%] rounded-full bg-white" />
          </div>
        </div>
        <Group>
          <Row icon={Trophy} title="Essentials" subtitle="Wallet · Send · KYC" />
          <Row icon={Send} title="Payments" subtitle="Scan · QR Pay · Invoice" />
          <Row icon={Pickaxe} title="Earn" subtitle="Mining · Staking · Affiliate" last />
        </Group>
        <BlueBtn>Claim your Founder badge</BlueBtn>
      </div>
    </LightPage>
  );
}

export function MerchantHubLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Become a Merchant" subtitle="Apply, integrate, and accept payments" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-3 text-[14px] leading-snug text-[#3A3A3C]">
            Open your store on OpenPay: portal, POS, checkout links, products, and API.
          </div>
        </Group>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Portal", Store],
            ["In-person POS", ScanLine],
            ["Checkout", Link2],
            ["Developer API", KeyRound],
          ].map(([t, Icon]) => (
            <div key={String(t)} className="rounded-[16px] bg-white p-3">
              <Icon className="h-5 w-5 text-[#007AFF]" />
              <p className="mt-2 text-[13px] font-semibold">{t as string}</p>
            </div>
          ))}
        </div>
        <Group>
          <Row icon={Store} title="Open Merchant Portal" subtitle="Apply · keys · products" />
          <Row icon={Package} title="Product catalog" subtitle="SKUs and prices" />
          <Row icon={QrCode} title="QR Pay" subtitle="Generate QR payments" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function PaymentLinksLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Checkout Links" subtitle="Shareable hosted checkout" right={<span className="rounded-full bg-[#007AFF] px-3 py-1 text-[12px] font-semibold text-white">Create</span>} />
      <div className="mx-4 space-y-3">
        <Group>
          <Row icon={Link2} title="Design invoice" subtitle="85.00 OUSD · Active" />
          <Row icon={Link2} title="Coffee drop" subtitle="4.50 OUSD · Active" last />
        </Group>
        <Group>
          <div className="px-4 py-4 text-center">
            <p className="text-[12px] text-[#8E8E93]">Preview</p>
            <p className="text-[22px] font-bold">Pay 85.00 OUSD</p>
            <div className="mt-3 flex h-11 items-center justify-center rounded-[14px] bg-black text-white">Pay</div>
          </div>
        </Group>
      </div>
    </LightPage>
  );
}

export function BanksListLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="List of Banks" subtitle="PayMongo InstaPay & PESONet" />
      <div className="mx-4">
        <div className="rounded-[12px] bg-white px-4 py-2.5 text-[16px] text-[#8E8E93]">Search banks & e-wallets</div>
        <div className="mt-3 flex gap-2">
          {["All", "InstaPay", "PESONet"].map((t, i) => (
            <Chip key={t} active={i === 0}>{t}</Chip>
          ))}
        </div>
        <p className="mt-3 px-1 text-[12px] text-[#8E8E93]">152 banks · tap a bank to send via Express Send.</p>
        <Group className="mt-2">
          {[
            ["BDO", "/payment-providers/bdo.svg"],
            ["BPI", "/payment-providers/bpi.svg"],
            ["GCash", "/payment-providers/gcash.svg"],
            ["Maya", "/payment-providers/maya.svg"],
          ].map(([n, src], i) => (
            <div key={n} className={`flex items-center gap-3 px-3.5 py-3 ${i ? "border-t border-black/[0.08]" : ""}`}>
              <LogoMark src={src} label={n} />
              <div className="flex-1">
                <p className="text-[16px] font-semibold">{n}</p>
                <p className="text-[11px] font-semibold text-[#007AFF]">InstaPay</p>
              </div>
              <ChevronRight className="h-4 w-4 text-[#C7C7CC]" />
            </div>
          ))}
        </Group>
      </div>
    </LightPage>
  );
}

export function SupportChatLatestFrame() {
  return (
    <LightPage bg="bg-[#F4F1EA]" className="relative">
      <div className="flex items-center justify-between px-4 pt-12">
        <span className="text-[#007AFF]">‹</span>
        <div className="text-center">
          <p className="text-[17px] font-semibold">Live Support</p>
          <span className="rounded-full bg-[#34C759]/15 px-2 py-0.5 text-[10px] font-bold text-[#34C759]">LIVE</span>
        </div>
        <span className="text-[13px] font-semibold text-[#007AFF]">Go live</span>
      </div>
      <p className="mt-6 text-center text-[22px] font-bold">How can we help?</p>
      <div className="mx-4 mt-3 flex flex-wrap justify-center gap-2">
        {["Top-up issue", "QR Pay", "Transfer", "KYC"].map((s) => (
          <span key={s} className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold shadow-sm">{s}</span>
        ))}
      </div>
      <div className="mx-4 mt-6 rounded-[18px] bg-white p-3 text-[14px]">
        <p className="text-[11px] font-semibold text-[#8E8E93]">OpenPay Support</p>
        Apple Pay credits OUSD the moment the sheet confirms. Check Top-up History if it is still pending.
      </div>
      <div className="absolute inset-x-4 bottom-6 flex h-12 items-center rounded-full bg-white px-4 text-[15px] text-[#8E8E93] shadow">
        Message support...
        <MessageSquare className="ml-auto h-4 w-4 text-[#007AFF]" />
      </div>
    </LightPage>
  );
}

export function TopUpHistoryLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Top-Up History" subtitle="Track your top-up requests" />
      <div className="mx-4 grid grid-cols-3 gap-2">
        {[
          ["Total", "24"],
          ["Pending", "1"],
          ["Approved", "23"],
        ].map(([l, v]) => (
          <Group key={l} className="p-3 text-center">
            <p className="text-[11px] text-[#8E8E93]">{l}</p>
            <p className="text-[18px] font-bold">{v}</p>
          </Group>
        ))}
      </div>
      <div className="mx-4 mt-3">
        <Group>
          <Row icon={CheckCircle2} title="Apple Pay" subtitle="50.00 · Approved" />
          <Row icon={History} title="Pi Payment" subtitle="25.00 · Approved" />
          <Row icon={Landmark} title="QR Ph · GCash" subtitle="18.18 · Pending" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function PiAdsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Pi Ad Network" subtitle="Rewarded ads · mining engagement" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-5 text-center">
            <p className="text-[13px] font-semibold text-[#34C759]">Ready to watch</p>
            <p className="mt-2 text-[15px] font-bold">Watch Rewarded Ad</p>
            <p className="mt-1 text-[13px] text-[#8E8E93]">One rewarded ad every 5 minutes</p>
          </div>
        </Group>
        <BlueBtn>Watch rewarded ad</BlueBtn>
      </div>
    </LightPage>
  );
}

export function OpenUsdLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="OpenUSD" subtitle="Dollar-referenced stable unit" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="flex items-center gap-3 px-4 py-4">
            <img src={OUSD_TOKEN.logoUrl} alt="" className="h-12 w-12 rounded-full" />
            <div>
              <p className="text-[18px] font-bold">OpenUSD / OUSD</p>
              <p className="text-[13px] text-[#8E8E93]">Live peg · 1 OUSD = $1.00 USD</p>
            </div>
          </div>
        </Group>
        <Group>
          <Row icon={Wallet} title="Get OpenUSD" subtitle="Cash In from Pi, cards, QR Ph" />
          <Row icon={Store} title="Accept OpenUSD" subtitle="QR Pay · POS · payment links" last />
        </Group>
        <BlueBtn>Top up OUSD</BlueBtn>
      </div>
    </LightPage>
  );
}

export function HelpCenterLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Help Center" subtitle="FAQs, recovery, and tickets" />
      <div className="mx-4">
        <Group>
          <Row icon={Fingerprint} title="Forgot MPIN / Biometric Recovery" />
          <Row icon={Lock} title="Remove MPIN" />
          <Row icon={HelpCircle} title="Payment failed" subtitle="What to do next" last />
        </Group>
        <SectionLabel>Contact support</SectionLabel>
        <Group>
          <div className="px-4 py-3">
            <p className="text-[13px] text-[#8E8E93]">Subject</p>
            <p className="text-[16px] font-semibold">Top-up delay</p>
            <p className="mt-2 text-[13px] text-[#8E8E93]">Describe your issue</p>
          </div>
        </Group>
        <BlueBtn className="mt-3">Submit Ticket</BlueBtn>
      </div>
    </LightPage>
  );
}

export function DevelopersLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Developers" subtitle="APIs, keys, webhooks, and app payments" />
      <div className="mx-4 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {[
            ["Partner API", KeyRound],
            ["Webhooks", Webhook],
            ["App payments", MousePointerClick],
            ["Integration", Plug],
          ].map(([t, Icon]) => (
            <div key={String(t)} className="rounded-[16px] bg-white p-3">
              <Icon className="h-5 w-5 text-[#007AFF]" />
              <p className="mt-2 text-[13px] font-semibold">{t as string}</p>
            </div>
          ))}
        </div>
        <Group>
          <Row icon={BookOpen} title="API Documentation" />
          <Row icon={Banknote} title="Top-up Docs" />
          <Row icon={ScanLine} title="POS Docs" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function LedgerLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="OpenLedger" subtitle="Amounts in OUSD · user IDs hidden" />
      <div className="mx-4">
        <div className="rounded-[12px] bg-white px-4 py-2.5 text-[16px] text-[#8E8E93]">Search ledger</div>
        <Group className="mt-3">
          {[
            ["+50.00", "Apple Pay"],
            ["−25.00", "P2P send"],
            ["+18.00", "QR Pay"],
            ["+0.25", "Mining"],
          ].map(([a, m], i) => (
            <div key={m} className={`flex items-center justify-between px-3.5 py-3 ${i ? "border-t border-black/[0.08]" : ""}`}>
              <div>
                <p className="text-[15px] font-semibold">{m}</p>
                <p className="text-[11px] text-[#8E8E93]">2 min ago</p>
              </div>
              <p className="font-bold">{a}</p>
            </div>
          ))}
        </Group>
      </div>
    </LightPage>
  );
}

export function AnnouncementsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Announcements" subtitle="Product updates and important notices" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="flex items-start gap-3 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
              <Megaphone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[16px] font-semibold">Stay in the loop</p>
              <p className="text-[13px] text-[#8E8E93]">What’s New · changelog</p>
            </div>
          </div>
        </Group>
        <Group>
          <Row icon={Sparkles} title="Apple Pay on the Web" subtitle="Aug 13 · Face ID top-up" />
          <Row icon={QrCode} title="Scanner reads Pro + QR Ph" subtitle="Aug 12 · One camera" />
          <Row icon={Rocket} title="OpenPay Pro Connect" subtitle="Aug 8 · OAuth sign-in" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function AboutLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="About OpenPay" subtitle="Company · OpenPay" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="flex items-start gap-3 px-4 py-4">
            <BrandLogo animate={false} className="h-10 w-10" />
            <div>
              <p className="text-[16px] font-bold">Payments for the open internet of value</p>
              <p className="mt-1 text-[13px] leading-snug text-[#8E8E93]">Wallet and merchant rails powered by OpenUSD (OUSD).</p>
            </div>
          </div>
        </Group>
        <div className="flex flex-wrap items-center gap-3 rounded-[16px] bg-white px-3 py-3">
          <img src="/payment-providers/gcash.svg" alt="" className="h-5 w-auto max-w-[40px] object-contain" />
          <img src="/payment-providers/maya.svg" alt="" className="h-5 w-auto max-w-[40px] object-contain" />
          <img src={APPLE_PAY_LOGO} alt="" className="h-5 w-auto max-w-[48px] object-contain" />
          <img src={PAYPAL} alt="" className="h-5 w-auto max-w-[54px] object-contain" />
        </div>
      </div>
    </LightPage>
  );
}

export function DisputesLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Disputes" subtitle="Chargebacks and payment issues" />
      <div className="mx-4">
        <Group>
          <Row icon={Shield} title="QR Pay #1842" subtitle="Under review · 18.00 OUSD" />
          <Row icon={CheckCircle2} title="P2P send" subtitle="Resolved · refunded" last />
        </Group>
        <BlueBtn className="mt-3">Open a dispute</BlueBtn>
      </div>
    </LightPage>
  );
}

export function PartnerApiLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Partner API" subtitle="Keys, transfers & OAuth apps" />
      <div className="mx-4">
        <Group>
          <Row icon={KeyRound} title="Live secret key" subtitle="sk_live_••••4412" />
          <Row icon={KeyRound} title="Sandbox key" subtitle="sk_test_••••91c" />
          <Row icon={Users} title="OAuth apps" subtitle="2 connected apps" last />
        </Group>
        <BlueBtn className="mt-3">Create API key</BlueBtn>
      </div>
    </LightPage>
  );
}

export function WebhooksLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Webhooks" subtitle="Payment & KYC events" />
      <div className="mx-4">
        <Group>
          <Row icon={Webhook} title="https://api.store.ph/hooks" subtitle="payment.succeeded" />
          <Row icon={Activity} title="Last delivery" subtitle="2 min ago · 200 OK" last />
        </Group>
        <BlueBtn className="mt-3">Add endpoint</BlueBtn>
      </div>
    </LightPage>
  );
}

export function AppMarketplaceLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="App Store" subtitle="Integrated third-party apps" />
      <div className="mx-4">
        <Group>
          <Row icon={Store} title="OpenPay POS" subtitle="In-person checkout" />
          <Row icon={Bot} title="OpenPay AI" subtitle="Assistant for merchants" />
          <Row icon={Layers} title="OpenNFT" subtitle="Collectibles marketplace" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function ButtonsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="PayButton" subtitle="Embed OpenPay on your website" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-5 text-center">
            <p className="text-[12px] text-[#8E8E93]">Preview</p>
            <div className="mx-auto mt-3 flex h-12 w-full items-center justify-center rounded-[14px] bg-black text-white">
              <BrandLogo variant="white" animate={false} className="mr-2 h-5 w-5" />
              Pay with OpenPay
            </div>
          </div>
        </Group>
        <Group>
          <Row icon={MousePointerClick} title="Black · logo + name" subtitle="Apple Pay–style mark" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function RemittanceLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Remittance Center" subtitle="Send abroad · FX shown first" />
      <div className="mx-4 space-y-3">
        <Group>
          <div className="px-4 py-4">
            <p className="text-[12px] text-[#8E8E93]">You send</p>
            <p className="text-[28px] font-bold">100.00 OUSD</p>
            <p className="mt-2 text-[12px] text-[#8E8E93]">Recipient gets</p>
            <p className="text-[22px] font-bold">₱5,580.00</p>
          </div>
        </Group>
        <Group>
          <Row icon={Globe} title="Philippines" subtitle="GCash · Maya · banks" last />
        </Group>
        <BlueBtn>Continue</BlueBtn>
      </div>
    </LightPage>
  );
}

export function ProductsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Product Catalog" subtitle="SKUs for checkout and POS" />
      <div className="mx-4">
        <Group>
          <Row icon={Package} title="OpenPay Hoodie" subtitle="45.00 OUSD · In stock" />
          <Row icon={Package} title="Sticker pack" subtitle="4.00 OUSD · In stock" />
          <Row icon={Package} title="Gift card 25" subtitle="25.00 OUSD" last />
        </Group>
        <BlueBtn className="mt-3">Add product</BlueBtn>
      </div>
    </LightPage>
  );
}

export function AnalyticsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Analytics" subtitle="Wallet activity this week" />
      <div className="mx-4 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Group className="p-3"><p className="text-[11px] text-[#8E8E93]">In</p><p className="text-[22px] font-bold">+312</p></Group>
          <Group className="p-3"><p className="text-[11px] text-[#8E8E93]">Out</p><p className="text-[22px] font-bold">−148</p></Group>
        </div>
        <Group>
          <Row icon={BarChart3} title="Spending" subtitle="Food · Transfers · Shopping" />
          <Row icon={Activity} title="Top rail" subtitle="Apple Pay · 40%" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function GuideLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="User Guide" subtitle="Step-by-step for every feature" />
      <div className="mx-4">
        <Group>
          <Row icon={BookOpen} title="Get started" subtitle="Auth · KYC · first top-up" />
          <Row icon={Send} title="Send & receive" subtitle="Express Send · Scan QR" />
          <Row icon={Store} title="Merchant tools" subtitle="QR Pay · POS · links" last />
        </Group>
      </div>
    </LightPage>
  );
}

export function SupportChannelsLatestFrame() {
  return (
    <LightPage>
      <IosHeader title="Support channels" subtitle="support@openpy.space" />
      <div className="mx-4">
        <Group>
          <Row icon={MessagesSquare} title="Support Chat" subtitle="AI + live agents" />
          <Row icon={Mail} title="Email" subtitle="support@openpy.space" />
          <Row icon={Send} title="Telegram" subtitle="@openpayofficial" last />
        </Group>
      </div>
    </LightPage>
  );
}
