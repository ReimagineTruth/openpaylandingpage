import { motion } from "framer-motion";
import {
  ArrowUpRight, Bell, Eye, Send, QrCode, Store, Pickaxe, Wallet,
  Layers, Code2, ShieldCheck, Check, Search, Delete, MousePointerClick,
  CreditCard, Image as ImageIcon, Copy,
} from "lucide-react";

const APP = "https://openpy.space";

type Screen = {
  id: string;
  step: string;
  label: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  icon: typeof Send;
  mock: JSX.Element;
};

const Pill = ({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "ink" | "accent" }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold ${
      tone === "ink"
        ? "bg-primary-foreground/10 text-primary-foreground"
        : tone === "accent"
        ? "bg-accent text-accent-foreground"
        : "bg-secondary text-foreground"
    }`}
  >
    {children}
  </span>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{children}</p>
);

/* 2.1 Dashboard */
const dashboardMock = (
  <div className="surface-ink rounded-4xl p-6 text-primary-foreground">
    <div className="flex items-center justify-between">
      <Pill tone="ink">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        PI/USD $0.42 ▲
      </Pill>
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-destructive" />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary-foreground/20" />
      </div>
    </div>
    <div className="mt-7">
      <p className="text-[10px] uppercase tracking-[0.18em] opacity-50">Total balance</p>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-4xl font-black tabular-nums">π 1,284.50</span>
        <Eye className="w-4 h-4 opacity-50" />
      </div>
      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-[10px] font-semibold">≈ ₱ 30,842</span>
    </div>
    <div className="mt-6 grid grid-cols-4 gap-2">
      {["Send", "Request", "Scan", "Top Up"].map((a) => (
        <div key={a} className="rounded-2xl bg-primary-foreground/10 py-3 text-center text-[10px] font-semibold active:scale-95 transition-transform">
          {a}
        </div>
      ))}
    </div>
    <div className="mt-5 rounded-3xl bg-primary-foreground/5 p-4 space-y-3">
      {[
        { n: "@maria", s: "Received · 2m ago", a: "+π25.00", up: true },
        { n: "Kape Manila", s: "POS · Today 09:12", a: "-π7.20", up: false },
      ].map((r) => (
        <div key={r.n} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/10" />
            <div>
              <p className="text-xs font-semibold">{r.n}</p>
              <p className="text-[10px] opacity-50">{r.s}</p>
            </div>
          </div>
          <span className={`text-xs font-bold tabular-nums ${r.up ? "text-accent" : ""}`}>{r.a}</span>
        </div>
      ))}
    </div>
    <div className="mt-5 rounded-full bg-primary-foreground/10 px-5 py-3 flex justify-between text-[10px] font-semibold opacity-70">
      {["Home", "Activity", "Scan", "Cards", "Menu"].map((n) => <span key={n}>{n}</span>)}
    </div>
  </div>
);

/* 2.2 Send */
const sendMock = (
  <div className="grid gap-4">
    <div className="rounded-4xl bg-card shadow-elevated p-6">
      <div className="flex items-center justify-between">
        <Pill>@maria</Pill>
        <span className="inline-flex rounded-full bg-secondary p-1 text-[10px] font-semibold">
          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground">π</span>
          <span className="px-3 py-1 text-muted-foreground">USD</span>
        </span>
      </div>
      <div className="text-center py-7">
        <p className="text-6xl font-black text-foreground tabular-nums tracking-tight">25<span className="text-muted-foreground">.00</span></p>
        <p className="text-xs text-muted-foreground mt-2">Fee π0.00 · arrives instantly</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"].map((k) => (
          <div key={k} className="py-3 rounded-2xl bg-secondary text-center text-sm font-bold text-foreground flex items-center justify-center active:scale-95 transition-transform">
            {k === "del" ? <Delete className="w-4 h-4" /> : k}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-full bg-accent text-accent-foreground py-3.5 text-center text-sm font-semibold">Continue</div>
    </div>
    <div className="rounded-4xl bg-card shadow-card p-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
        <Check className="w-6 h-6 text-accent-foreground" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-foreground">Sent 25 π to @maria</p>
        <div className="flex gap-2 mt-2">
          <Pill>Receipt</Pill>
          <Pill>Share</Pill>
        </div>
      </div>
    </div>
  </div>
);

/* 2.3 QR Pay */
const qrMock = (
  <div className="rounded-4xl bg-card shadow-elevated overflow-hidden">
    <div className="surface-ink px-6 py-6 text-primary-foreground grid grid-cols-3 gap-3 text-center">
      {[{ l: "Scans", v: "1,204" }, { l: "Conversion", v: "68%" }, { l: "Revenue", v: "4,310 π" }].map((s) => (
        <div key={s.l}>
          <p className="text-lg font-black tabular-nums">{s.v}</p>
          <p className="text-[10px] uppercase tracking-[0.18em] opacity-50">{s.l}</p>
        </div>
      ))}
    </div>
    <div className="p-6">
      <div className="mx-auto w-40 h-40 rounded-3xl bg-secondary grid grid-cols-6 grid-rows-6 gap-1 p-3 relative">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className={`rounded-[3px] ${i % 3 === 0 || i % 7 === 0 ? "bg-foreground" : "bg-transparent"}`} />
        ))}
        <span className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-accent text-accent-foreground text-lg font-black flex items-center justify-center">O</span>
      </div>
      <p className="mt-4 text-center text-[10px] font-mono text-muted-foreground">qr_pay_8f3a…</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Copy", "Share", "Download"].map((b) => (
          <div key={b} className="rounded-full bg-secondary py-2.5 text-center text-[11px] font-semibold text-foreground">{b}</div>
        ))}
      </div>
    </div>
  </div>
);

/* 2.4 POS */
const posMock = (
  <div className="rounded-4xl bg-card shadow-elevated overflow-hidden">
    <div className="surface-ink px-6 py-5 text-primary-foreground flex items-center justify-between">
      <div>
        <p className="text-sm font-bold">Kape Manila</p>
        <p className="text-[10px] opacity-50">Cashier · @maya</p>
      </div>
      <Pill tone="ink">Session #4821</Pill>
    </div>
    <div className="grid sm:grid-cols-2">
      <div className="p-5 grid grid-cols-3 gap-2 sm:border-r border-border">
        {["Latte", "Mocha", "Bagel", "Cold Brew", "Matcha", "Donut"].map((p) => (
          <div key={p} className="rounded-2xl bg-secondary p-2">
            <div className="h-8 rounded-xl bg-card mb-2" />
            <p className="text-[10px] font-semibold text-foreground truncate">{p}</p>
            <p className="text-[10px] text-muted-foreground tabular-nums">π7.00</p>
          </div>
        ))}
      </div>
      <div className="p-5">
        <Label>Cart total</Label>
        <p className="text-3xl font-black text-foreground tabular-nums mt-1">π 42.00</p>
        <div className="mt-4 rounded-2xl bg-tint p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Check className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs font-bold text-foreground inline-flex items-center gap-1">Paid <Check size={11} /></p>
            <p className="text-[10px] text-muted-foreground">Waiting… → settled</p>
          </div>
        </div>
        <div className="mt-4 rounded-full bg-accent text-accent-foreground py-3 text-center text-xs font-semibold">Charge</div>
      </div>
    </div>
  </div>
);

/* 2.5 Payment links & buttons */
const buttonsMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6 grid sm:grid-cols-2 gap-5">
    <div className="space-y-3">
      {[{ l: "Amount", v: "π 15.00" }, { l: "Description", v: "Monthly support" }, { l: "Style", v: "Pill · Accent" }].map((f) => (
        <div key={f.l}>
          <Label>{f.l}</Label>
          <div className="mt-1 rounded-2xl bg-secondary px-4 py-3 text-xs font-semibold text-foreground">{f.v}</div>
        </div>
      ))}
    </div>
    <div>
      <Label>Live preview</Label>
      <div className="mt-2 rounded-3xl bg-tint p-6 flex items-center justify-center">
        <span className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-xs font-semibold">Pay π15.00 with OpenPay</span>
      </div>
      <div className="mt-3 surface-ink rounded-2xl p-4 relative">
        <Copy className="w-3.5 h-3.5 text-primary-foreground/50 absolute top-3 right-3" />
        <pre className="text-[10px] font-mono text-primary-foreground/80 overflow-x-auto">{`<script src="openpy.space/btn.js"
  data-amount="15" data-cur="PI">`}</pre>
      </div>
    </div>
  </div>
);

/* 2.6 Virtual card */
const cardMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="surface-ink rounded-3xl p-6 text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-10 -right-8 w-40 h-40 rounded-full bg-accent/30 blur-2xl" />
      <p className="text-[10px] uppercase tracking-[0.18em] opacity-50">OpenPay Virtual</p>
      <p className="mt-8 text-xl font-black tabular-nums tracking-widest">•••• •••• •••• 4821</p>
      <div className="mt-5 flex items-center justify-between text-[10px]">
        <span className="opacity-60">EXP 09/29</span>
        <span className="rounded-full bg-primary-foreground/15 px-3 py-1 font-semibold">Tap to reveal CVV</span>
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between rounded-2xl bg-secondary px-4 py-3">
      <span className="text-xs font-semibold text-foreground">Freeze card</span>
      <span className="w-10 h-6 rounded-full bg-accent flex items-center justify-end p-1">
        <span className="w-4 h-4 rounded-full bg-accent-foreground" />
      </span>
    </div>
    <div className="mt-3 space-y-2">
      {[{ n: "Spotify", a: "-π2.10" }, { n: "Steam", a: "-π11.40" }, { n: "Cloudflare", a: "-π5.00" }].map((r) => (
        <div key={r.n} className="flex items-center justify-between rounded-2xl bg-secondary/60 px-4 py-2.5">
          <span className="text-xs font-semibold text-foreground">{r.n}</span>
          <span className="text-xs font-bold text-foreground tabular-nums">{r.a}</span>
        </div>
      ))}
    </div>
  </div>
);

/* 2.7 Mining */
const miningMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="surface-ink rounded-[2.5rem] p-8 text-primary-foreground text-center">
      <div className="mx-auto w-24 h-24 rounded-full border-2 border-dashed border-primary-foreground/30 flex items-center justify-center animate-[spin_12s_linear_infinite]">
        <Pickaxe className="w-9 h-9 text-accent animate-pulse" />
      </div>
      <div className="mt-5 inline-flex"><Pill tone="ink">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Mining Active
      </Pill></div>
      <p className="mt-4 text-4xl font-black tabular-nums">05:12:44</p>
      <div className="mt-4 h-1.5 rounded-full bg-primary-foreground/15 overflow-hidden">
        <div className="h-full w-[72%] bg-accent rounded-full" />
      </div>
      <p className="text-[10px] opacity-50 mt-2">72% of this 24-hour cycle</p>
    </div>
    <div className="mt-4 rounded-full bg-accent text-accent-foreground py-3.5 text-center text-sm font-semibold">Boost with a rewarded ad</div>
  </div>
);

/* 2.8 OpenLedger */
const ledgerMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
      <Search className="w-3.5 h-3.5 text-muted-foreground" />
      <span className="text-xs text-muted-foreground">Search hash, username or amount</span>
    </div>
    <div className="mt-4 space-y-2">
      {[
        { f: "@openpay", t: "@maria", a: "π25.00", h: "9f2a…c41d", w: "2m ago" },
        { f: "@kape", t: "@maya", a: "π7.20", h: "3ec7…88ba", w: "11m ago" },
        { f: "@mina", t: "@store.ph", a: "π24.90", h: "b105…7f29", w: "24m ago" },
        { f: "@juno.pi", t: "@openpay", a: "π100.00", h: "77de…21ab", w: "1h ago" },
      ].map((r, i) => (
        <div key={r.h} className={`flex items-center justify-between rounded-2xl px-4 py-3 ${i === 0 ? "bg-tint animate-fade-in" : "bg-secondary/60"}`}>
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-full bg-card shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-foreground truncate">{r.f} → {r.t}</p>
              <p className="text-[10px] font-mono text-muted-foreground truncate">{r.h} · {r.w}</p>
            </div>
          </div>
          <span className="text-xs font-bold text-foreground tabular-nums shrink-0">{r.a}</span>
        </div>
      ))}
    </div>
    <p className="mt-4 text-[10px] text-muted-foreground text-center">Public · no login · SHA-256 verified</p>
  </div>
);

/* 2.9 Top Up */
const topupMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="grid grid-cols-4 gap-2">
      {["Stripe", "Card", "PayPal", "Venmo", "Apple", "Google", "QRPH", "Solana", "USDT", "USDC", "OUSD", "MRWN"].map((m) => (
        <div key={m} className="rounded-2xl bg-secondary py-4 text-center text-[10px] font-semibold text-foreground hover:-translate-y-0.5 transition-transform">
          {m}
        </div>
      ))}
    </div>
    <div className="mt-4 rounded-3xl bg-tint p-5">
      <Label>Quote</Label>
      <p className="mt-1 text-2xl font-black text-foreground tabular-nums">$50.00 → 118.4 π</p>
      <p className="text-xs text-muted-foreground mt-1">Fee $0.75 · CoinGecko live rate</p>
    </div>
  </div>
);

/* 2.10 Developer */
const devMock = (
  <div className="surface-ink rounded-4xl p-6 text-primary-foreground">
    <div className="flex gap-1.5 mb-4">
      {["bg-destructive", "bg-accent", "bg-primary-foreground/30"].map((c) => (
        <span key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
      ))}
    </div>
    <pre className="text-[11px] font-mono leading-relaxed overflow-x-auto">
{`POST /v1/payments
Authorization: Bearer op_live_••••7f2a

{ "amount": 25.00, "currency": "PI",
  "to": "@maria" }

→ 200 OK
{ "id": "pay_4f9c", "status": "settled" }`}
    </pre>
    <div className="mt-5 flex items-center justify-between rounded-2xl bg-primary-foreground/10 px-4 py-3">
      <span className="text-[11px] font-mono">op_live_••••7f2a</span>
      <span className="flex gap-2">
        <Pill tone="ink">Reveal</Pill>
        <Pill tone="ink">Rotate</Pill>
      </span>
    </div>
  </div>
);

/* 2.11 Security */
const securityMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6 space-y-3">
    <div className="rounded-3xl bg-secondary p-5">
      <Label>MPIN</Label>
      <div className="flex justify-center gap-3 py-4">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`w-3.5 h-3.5 rounded-full ${i < 4 ? "bg-accent" : "bg-card"}`} />
        ))}
      </div>
    </div>
    <div className="rounded-3xl bg-secondary p-5 flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-card grid grid-cols-3 grid-rows-3 gap-0.5 p-1.5 shrink-0">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className={`rounded-[2px] ${i % 2 === 0 ? "bg-foreground" : ""}`} />
        ))}
      </div>
      <div>
        <Label>Two-factor</Label>
        <div className="flex gap-1.5 mt-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className="w-6 h-8 rounded-lg bg-card" />
          ))}
        </div>
      </div>
    </div>
    <div className="rounded-3xl bg-secondary p-5">
      <Label>KYC status</Label>
      <div className="flex items-center gap-2 mt-3 text-[10px] font-semibold">
        <span className="px-3 py-1.5 rounded-full bg-card text-muted-foreground">Pending</span>
        <span className="text-muted-foreground">→</span>
        <span className="px-3 py-1.5 rounded-full bg-card text-muted-foreground">In Review</span>
        <span className="text-muted-foreground">→</span>
        <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground inline-flex items-center gap-1">Verified <Check size={11} /></span>
      </div>
    </div>
  </div>
);

/* 2.12 NFT */
const nftMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6 grid grid-cols-3 gap-3">
    {[
      { n: "Pi Genesis", r: "Legendary", b: "π120", tall: true },
      { n: "Ledger Ape", r: "Rare", b: "π42" },
      { n: "Node #77", r: "Common", b: "π8" },
      { n: "Miner Cap", r: "Epic", b: "π64" },
      { n: "Openaut", r: "Rare", b: "π31", live: true },
    ].map((c) => (
      <div key={c.n} className={`rounded-2xl bg-secondary p-2 ${c.tall ? "row-span-2" : ""}`}>
        <div className={`rounded-xl bg-tint ${c.tall ? "h-32" : "h-16"} mb-2`} />
        <p className="text-[10px] font-semibold text-foreground truncate">{c.n}</p>
        <p className="text-[9px] text-muted-foreground">{c.r}</p>
        <span className={`mt-1.5 inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold ${c.live ? "bg-accent text-accent-foreground" : "bg-card text-foreground"}`}>
          {c.live ? "02:14:09" : c.b}
        </span>
      </div>
    ))}
  </div>
);

const screens: Screen[] = [
  { id: "dashboard", step: "01", label: "Dashboard", title: "Everything in one glance", desc: "One home screen for balance, mining, activity, and shortcuts. Hide your balance with a tap, switch currency instantly.", href: `${APP}/dashboard`, cta: "Open your wallet", icon: Layers, mock: dashboardMock },
  { id: "send", step: "02", label: "Send Money", title: "Send Pi in two taps", desc: "A full-screen keypad, π/fiat toggle, recipient search by @username, and a confirm sheet that shows fee and arrival before you commit.", href: `${APP}/send`, cta: "Send Pi", icon: Send, mock: sendMock },
  { id: "qr-pay", step: "03", label: "QR Pay", title: "One code, any customer", desc: "Generate a QR with line items, share the link, get paid by anyone — no account needed for the payer.", href: `${APP}/qr-pay`, cta: "Create a QR", icon: QrCode, mock: qrMock },
  { id: "pos", step: "04", label: "Merchant POS", title: "Take payments in person", desc: "Turn any tablet into a checkout. Product grid, live cart, QR charge, and a status card that flips to Paid the moment funds land.", href: `${APP}/merchant-pos`, cta: "Open POS", icon: Store, mock: posMock },
  { id: "buttons", step: "05", label: "Payment Links & Buttons", title: "Get paid from anywhere", desc: "Build a payment link, donate button, or subscribe button, then paste one snippet into any site.", href: `${APP}/buttons`, cta: "Build a button", icon: MousePointerClick, mock: buttonsMock },
  { id: "virtual-card", step: "06", label: "Virtual Card", title: "Spend your balance", desc: "Issue a virtual card in seconds. Reveal details with a tap, freeze it just as fast.", href: `${APP}/virtual-card`, cta: "Issue a card", icon: CreditCard, mock: cardMock },
  { id: "mining", step: "07", label: "Mining & Rewards", title: "Earn every 24 hours", desc: "Watch a rewarded ad, start a 24-hour cycle, keep your streak alive.", href: `${APP}/mining`, cta: "Start mining", icon: Pickaxe, mock: miningMock },
  { id: "openledger", step: "08", label: "OpenLedger", title: "Every transaction, in the open", desc: "A public, no-login ledger. Real sender and receiver profiles, amounts, timestamps, and hashes.", href: "https://www.openpyledger.space/", cta: "Explore the ledger", icon: Layers, mock: ledgerMock },
  { id: "topup", step: "09", label: "Top Up", title: "Fund it your way", desc: "Cards, wallets, and crypto — Stripe, PayPal, Venmo, Apple Pay, Google Pay, QRPH, Solana Pay, USDT, USDC, OUSD, MRWN.", href: `${APP}/topup`, cta: "Add funds", icon: Wallet, mock: topupMock },
  { id: "developer", step: "10", label: "Developer Platform", title: "Build on OpenPay", desc: "REST APIs, OAuth 2.0, webhooks, and API keys for payments, ledger, KYC, and NFTs.", href: `${APP}/openpay-api-docs`, cta: "Read the API docs", icon: Code2, mock: devMock },
  { id: "security", step: "11", label: "Security & KYC", title: "Verified, protected, compliant", desc: "MPIN, optional 2FA, document KYC with a live status timeline, and row-level protected data.", href: `${APP}/kyc`, cta: "Verify your account", icon: ShieldCheck, mock: securityMock },
  { id: "nft", step: "12", label: "Web3 & NFT", title: "Collect, trade, and gift", desc: "Mint, auction, and gift collectibles with stores, leaderboards, and a public API.", href: `${APP}/web3/nft`, cta: "Explore OpenNFT", icon: ImageIcon, mock: nftMock },
];

const stats = [
  { v: "170+", l: "currencies" },
  { v: "24h", l: "mining cycles" },
  { v: "<2s", l: "average transfer" },
  { v: "100%", l: "public ledger" },
];

const StatsBand = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="surface-ink rounded-5xl px-6 sm:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground"
  >
    {stats.map((s) => (
      <div key={s.l} className="text-center">
        <p className="text-4xl font-black tabular-nums">{s.v}</p>
        <p className="text-[10px] uppercase tracking-[0.18em] opacity-50 mt-2">{s.l}</p>
      </div>
    ))}
  </motion.div>
);

const ScreenTourSection = () => {
  return (
    <section id="showcase" className="py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card shadow-card text-[10px] uppercase tracking-[0.18em] font-semibold text-foreground mb-6">
            Built for the Pi ecosystem
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[0.95]">
            Your money,<br />
            <span className="text-accent">beautifully organized.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl">
            Send, receive, and accept Pi in seconds — with a merchant POS, QR checkout, virtual cards, and a public ledger anyone can verify.
          </p>
        </motion.header>

        <div className="space-y-5">
          {screens.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={s.id}>
                <motion.article
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`grid lg:grid-cols-2 gap-8 items-center rounded-5xl p-6 sm:p-10 ${
                    flip ? "surface-tint" : "bg-card shadow-card"
                  }`}
                >
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
                        <s.icon className="w-5 h-5 text-primary" />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground tabular-nums">
                        {s.step} · {s.label}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.02]">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-5 max-w-md">{s.desc}</p>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 active:scale-95 transition-all"
                    >
                      {s.cta}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>{s.mock}</div>
                </motion.article>
                {i === 5 && <div className="py-5"><StatsBand /></div>}
              </div>
            );
          })}
        </div>

        {/* Auth strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-5 bg-card shadow-card rounded-5xl p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-black tracking-tight text-foreground">In Pi Browser? One tap.</h3>
            <p className="text-muted-foreground mt-2">Elsewhere, sign in with email or Apple.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`${APP}/signin`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Continue with Pi <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={`${APP}/signin`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-foreground text-sm font-semibold hover:bg-tint transition-colors">
              Email or Apple sign-in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenTourSection;
