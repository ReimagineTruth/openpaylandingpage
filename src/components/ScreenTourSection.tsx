import { motion } from "framer-motion";
import {
  ArrowUpRight, Bell, Eye, Send, QrCode, Store, Pickaxe,
  Layers, Code2, ShieldCheck, Check, Search, Delete,
} from "lucide-react";

const APP = "https://openpy.space";

type Screen = {
  id: string;
  step: string;
  title: string;
  tagline: string;
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

const dashboardMock = (
  <div className="surface-ink rounded-4xl p-6 text-primary-foreground">
    <div className="flex items-center justify-between">
      <Pill tone="ink">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        PI/USD $3.15
      </Pill>
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center">
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent" />
        </div>
        <div className="w-8 h-8 rounded-full bg-primary-foreground/20" />
      </div>
    </div>
    <div className="mt-7">
      <p className="text-[10px] uppercase tracking-widest opacity-50">Total balance</p>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-4xl font-extrabold tabular-nums">π346.59</span>
        <Eye className="w-4 h-4 opacity-50" />
      </div>
      <p className="text-xs opacity-50 mt-1">≈ $1,091.76 USD</p>
    </div>
    <div className="mt-6 grid grid-cols-4 gap-2">
      {["Send", "Request", "Scan", "Top Up"].map((a) => (
        <div key={a} className="rounded-2xl bg-primary-foreground/10 py-3 text-center text-[10px] font-semibold">
          {a}
        </div>
      ))}
    </div>
    <div className="mt-5 rounded-3xl bg-primary-foreground/5 p-4 space-y-3">
      {[
        { n: "Mining active", s: "18h 04m left", a: "+π0.42" },
        { n: "Express Send", s: "Today · 09:12", a: "-π25.50" },
      ].map((r) => (
        <div key={r.n} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-foreground/10" />
            <div>
              <p className="text-xs font-semibold">{r.n}</p>
              <p className="text-[10px] opacity-50">{r.s}</p>
            </div>
          </div>
          <span className="text-xs font-bold tabular-nums">{r.a}</span>
        </div>
      ))}
    </div>
  </div>
);

const sendMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="flex items-center justify-between">
      <Pill>@juno.pi</Pill>
      <Pill tone="accent">π · PI</Pill>
    </div>
    <div className="text-center py-8">
      <p className="text-6xl font-extrabold text-foreground tabular-nums tracking-tight">π48<span className="text-muted-foreground">.00</span></p>
      <p className="text-xs text-muted-foreground mt-2">≈ $151.20 · fee π0.00 · arrives instantly</p>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"].map((k) => (
        <div
          key={k}
          className="py-3 rounded-2xl bg-secondary text-center text-sm font-bold text-foreground flex items-center justify-center"
        >
          {k === "del" ? <Delete className="w-4 h-4" /> : k}
        </div>
      ))}
    </div>
    <div className="mt-4 rounded-full bg-accent text-accent-foreground py-3.5 text-center text-sm font-semibold">
      Confirm & Send
    </div>
  </div>
);

const posMock = (
  <div className="rounded-4xl bg-card shadow-elevated overflow-hidden">
    <div className="surface-ink px-6 py-5 text-primary-foreground flex items-center justify-between">
      <div>
        <p className="text-sm font-bold">Kape Manila</p>
        <p className="text-[10px] opacity-50">Cashier · @maya</p>
      </div>
      <Pill tone="ink">Session #4821</Pill>
    </div>
    <div className="grid grid-cols-2">
      <div className="p-5 grid grid-cols-2 gap-2 border-r border-border">
        {["Latte", "Mocha", "Bagel", "Cold Brew"].map((p) => (
          <div key={p} className="rounded-2xl bg-secondary p-3">
            <div className="h-8 rounded-xl bg-card mb-2" />
            <p className="text-[10px] font-semibold text-foreground">{p}</p>
            <p className="text-[10px] text-muted-foreground">π2.40</p>
          </div>
        ))}
      </div>
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Cart total</p>
        <p className="text-3xl font-extrabold text-foreground tabular-nums mt-1">π7.20</p>
        <div className="mt-4 rounded-2xl bg-tint p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Check className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Paid</p>
            <p className="text-[10px] text-muted-foreground">Receipt sent</p>
          </div>
        </div>
        <div className="mt-4 rounded-full bg-foreground text-background py-3 text-center text-xs font-semibold">
          Print receipt
        </div>
      </div>
    </div>
  </div>
);

const qrMock = (
  <div className="rounded-4xl bg-card shadow-elevated overflow-hidden">
    <div className="surface-ink px-6 py-7 text-primary-foreground">
      <p className="text-[10px] uppercase tracking-widest opacity-50">Charge amount</p>
      <p className="text-4xl font-extrabold tabular-nums mt-1">π12.50</p>
    </div>
    <div className="p-6">
      <div className="mx-auto w-40 h-40 rounded-3xl bg-secondary grid grid-cols-6 grid-rows-6 gap-1 p-3">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className={`rounded-[3px] ${i % 3 === 0 || i % 7 === 0 ? "bg-foreground" : "bg-transparent"}`} />
        ))}
      </div>
      <p className="mt-4 text-center text-[10px] font-mono text-muted-foreground break-all">
        openpay:qr/4f9c-21ab-77de
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Copy", "Share", "Download"].map((b) => (
          <div key={b} className="rounded-full bg-secondary py-2.5 text-center text-[11px] font-semibold text-foreground">
            {b}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const miningMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="surface-ink rounded-[2rem] p-8 text-primary-foreground text-center relative overflow-hidden">
      <div className="mx-auto w-24 h-24 rounded-full border-2 border-dashed border-primary-foreground/30 flex items-center justify-center animate-[spin_12s_linear_infinite]">
        <Pickaxe className="w-9 h-9 text-accent animate-pulse" />
      </div>
      <div className="mt-5 inline-flex"><Pill tone="ink">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Mining active
      </Pill></div>
      <p className="mt-4 text-4xl font-extrabold tabular-nums">17:42:09</p>
      <p className="text-[10px] opacity-50 mt-1">Until next cycle</p>
    </div>
    <div className="mt-4 rounded-full bg-accent text-accent-foreground py-3.5 text-center text-sm font-semibold">
      Watch ad to boost +25%
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2">
      {[{ l: "Streak", v: "14 days" }, { l: "Session", v: "+π0.42" }].map((s) => (
        <div key={s.l} className="rounded-2xl bg-secondary p-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</p>
          <p className="text-lg font-extrabold text-foreground tabular-nums">{s.v}</p>
        </div>
      ))}
    </div>
  </div>
);

const ledgerMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
      <Search className="w-3.5 h-3.5 text-muted-foreground" />
      <span className="text-xs text-muted-foreground">Search hash, username or amount</span>
    </div>
    <div className="mt-4 space-y-2">
      {[
        { f: "@openpay", t: "@juno.pi", a: "π100.00", h: "9f2a…c41d" },
        { f: "@kape", t: "@maya", a: "π7.20", h: "3ec7…88ba" },
        { f: "@mina", t: "@store.ph", a: "π24.90", h: "b105…7f29" },
      ].map((r, i) => (
        <div
          key={r.h}
          className={`flex items-center justify-between rounded-2xl px-4 py-3 ${i === 0 ? "bg-tint" : "bg-secondary/60"}`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-full bg-card shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-foreground truncate">{r.f} → {r.t}</p>
              <p className="text-[10px] font-mono text-muted-foreground truncate">{r.h}</p>
            </div>
          </div>
          <span className="text-xs font-bold text-foreground tabular-nums shrink-0">{r.a}</span>
        </div>
      ))}
    </div>
    <p className="mt-4 text-[10px] text-muted-foreground text-center">Public · no login · SHA-256 verified</p>
  </div>
);

const devMock = (
  <div className="surface-ink rounded-4xl p-6 text-primary-foreground font-mono">
    <div className="flex gap-1.5 mb-4">
      {["bg-destructive", "bg-accent", "bg-primary-foreground/30"].map((c) => (
        <span key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
      ))}
    </div>
    <pre className="text-[11px] leading-relaxed overflow-x-auto">
{`POST /v1/checkout/sessions
Authorization: Bearer op_live_••••7f2a

{
  "amount": 12.50,
  "currency": "PI",
  "success_url": "https://shop/ok"
}

→ 200 OK
{ "id": "cs_4f9c", "url": "…/pay/cs_4f9c" }`}
    </pre>
    <div className="mt-5 flex gap-2 font-sans">
      <Pill tone="ink">OAuth 2.0</Pill>
      <Pill tone="ink">Webhooks</Pill>
      <Pill tone="ink">Ledger API</Pill>
    </div>
  </div>
);

const securityMock = (
  <div className="rounded-4xl bg-card shadow-elevated p-6">
    <div className="flex justify-center gap-3 py-6">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`w-3.5 h-3.5 rounded-full ${i < 4 ? "bg-accent" : "bg-secondary"}`} />
      ))}
    </div>
    <p className="text-center text-xs text-muted-foreground">Enter your 6-digit MPIN</p>
    <div className="mt-6 space-y-2">
      {[
        { l: "Pi Network auth", s: "Verified" },
        { l: "Two-factor (2FA)", s: "Enabled" },
        { l: "KYC document", s: "In review" },
      ].map((r, i) => (
        <div key={r.l} className="flex items-center justify-between rounded-2xl bg-secondary px-4 py-3">
          <span className="text-xs font-semibold text-foreground">{r.l}</span>
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${i === 2 ? "bg-card text-muted-foreground" : "bg-accent text-accent-foreground"}`}>
            {r.s}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const screens: Screen[] = [
  {
    id: "dashboard", step: "01", title: "Dashboard", tagline: "Your money, beautifully organized.",
    desc: "Deep blue full-bleed home with a live Pi price pill, animated balance and hide/show eye, a four-icon quick-action row, then stacked cards for mining, activity and shortcuts — all above a floating bottom nav.",
    href: `${APP}/dashboard`, cta: "Open dashboard", icon: Layers, mock: dashboardMock,
  },
  {
    id: "send", step: "02", title: "Send Money", tagline: "Send Pi in two taps.",
    desc: "An immersive keypad screen: 8xl amount, π/fiat toggle, recipients as avatar chips with username search. Confirm shows fee, arrival and note — then a branded splash and animated success with receipt and share.",
    href: `${APP}/send`, cta: "Send Pi", icon: Send, mock: sendMock,
  },
  {
    id: "pos", step: "03", title: "Merchant POS", tagline: "Take payments in person.",
    desc: "Gradient blue top bar with store and cashier, product grid or numeric pad on the left, running cart on the right. Charging spins up a QR session that flips from Waiting to a green Paid state and a printable receipt.",
    href: `${APP}/merchant-pos`, cta: "Open POS", icon: Store, mock: posMock,
  },
  {
    id: "qr", step: "04", title: "QR Pay", tagline: "One code, any customer.",
    desc: "A white QR tile inside a rounded card under a blue hero, with the payload in monospace and Copy, Share and Download pills. Dashboards track scans, conversion and revenue; the API view exposes keys, webhooks and logs.",
    href: `${APP}/qr-pay`, cta: "Create a QR", icon: QrCode, mock: qrMock,
  },
  {
    id: "mining", step: "05", title: "Mining & Rewards", tagline: "Earn every 24 hours.",
    desc: "A dramatic rounded blue hero: glowing pickaxe inside a dashed spinning ring, Mining Active badge and a 5xl countdown in tabular numerals. Below sit the ad-gated boost button, session history and streak cards.",
    href: `${APP}/mining`, cta: "Start mining", icon: Pickaxe, mock: miningMock,
  },
  {
    id: "ledger", step: "06", title: "OpenLedger", tagline: "Every transaction, in the open.",
    desc: "A public, no-login feed of transactions with sender and receiver profile chips, amount, timestamp and hash. Search and filters sit on top; new rows arrive live with a subtle highlight animation.",
    href: "https://www.openpyledger.space/", cta: "Explore the ledger", icon: Layers, mock: ledgerMock,
  },
  {
    id: "developer", step: "07", title: "Developer Platform", tagline: "Build on OpenPay.",
    desc: "A dark-code aesthetic with sidebar nav, syntax-highlighted request and response panes, copy buttons, an API key table with reveal and rotate, an OAuth 2.0 consent preview, usage charts and webhook logs.",
    href: `${APP}/openpay-api-docs`, cta: "Read the API docs", icon: Code2, mock: devMock,
  },
  {
    id: "security", step: "08", title: "Security & KYC", tagline: "Verified, protected, compliant.",
    desc: "One-tap Continue with Pi in the Pi Browser, email and Apple sign-in elsewhere. Onboarding takes a unique username with live availability, then MPIN setup, optional 2FA and KYC with a document status timeline.",
    href: `${APP}/signin`, cta: "Secure your account", icon: ShieldCheck, mock: securityMock,
  },
];

const ScreenTourSection = () => {
  return (
    <section id="tour" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card shadow-card text-xs font-semibold text-foreground mb-6">
            Screen by screen
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            See how it<br />
            <span className="text-accent">actually looks.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl">
            A guided tour through the eight screens that define OpenPay — from the dashboard to the public ledger.
          </p>
        </motion.div>

        <div className="space-y-5">
          {screens.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-6 items-center rounded-5xl p-6 sm:p-10 ${
                  flip ? "surface-tint" : "bg-card shadow-card"
                }`}
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                      {s.step} · {s.title}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-[1.02]">
                    {s.tagline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-5 max-w-md">{s.desc}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    {s.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className={flip ? "lg:order-1" : ""}>{s.mock}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScreenTourSection;
