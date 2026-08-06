import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OusdMark, OusdSwapMock, OusdWalletMock, OpenPayWordmark } from "@/components/landing/OusdMocks";

const PRO = "https://openpaypro.space";
const AUTHPI = `${PRO}/authpi`;
const OUSD_LIVE = `${PRO}/openusd`;
const APP = "https://openpy.space";

const fade = (reduce: boolean | null, delay = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
      };

function Section({
  id,
  eyebrow,
  title,
  caption,
  children,
  invert = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  caption?: string;
  children: ReactNode;
  invert?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <section id={id} className={`py-16 sm:py-20 ${invert ? "bg-[#F7F8FB]" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div {...fade(reduce)} className="max-w-2xl mb-10">
          {eyebrow && (
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.045em] text-[#0F172A] leading-[1.1]">
            {title}
          </h2>
          {caption && <p className="mt-3 text-[15px] sm:text-base text-slate-500 leading-relaxed">{caption}</p>}
        </motion.div>
        <motion.div {...fade(reduce, 0.06)}>{children}</motion.div>
      </div>
    </section>
  );
}

const MAJORS = ["BTC", "ETH", "SOL", "PI", "ROBO", "USDT", "USDC"];
const PARTNERS = ["TradingView", "CoinGecko", "MoonPay", "Solana Pay", "Circle", "CoinMarketCap"];

const FAQ = [
  {
    q: "What is OpenUSD (OUSD)?",
    a: "OpenUSD (OUSD) is OpenPay’s ledger dollar used across OpenPay Pro and the OpenPay ecosystem. In OpenPay Pro it is the primary balance unit — $1.00 OUSD is designed to track one US dollar for spending, sending, and settling inside the network.",
  },
  {
    q: "What can I do with OUSD?",
    a: "Hold OUSD in OpenPay Pro, top up from OpenPay Balance / Pi / cards / crypto, send to people and merchants, swap into listed majors and OpenTokens, trade Spot and Perpetuals against dollar settlement, receive via QR, and build partner flows that settle in OUSD through Partner API and OpenLedger.",
  },
  {
    q: "Which tokens can I buy or swap with OUSD?",
    a: "OpenUSD settles buys and swaps across the OpenPay Pro Tokens catalog and Spot / Perpetual markets — including BTC, ETH, SOL, PI, majors like ROBO, and community OpenTokens — with live prices from CoinGecko, CoinMarketCap, and TradingView charts.",
  },
  {
    q: "How is OUSD different from bank cash?",
    a: "OUSD lives on OpenPay’s open network ledger — inspectable, API-friendly, and portable across OpenPay products — while still behaving like a stable dollar for everyday transfers inside the ecosystem.",
  },
  {
    q: "Where can I learn more or build on OpenPay?",
    a: "Read the OpenPay AI announcement, explore OpenLedger, review Partner API docs, visit the Partners showcase, or open the OpenPay whitepaper and pitch deck from the ecosystem links on this page.",
  },
];

const OpenUsdPage = () => {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#EEF1F6] text-[#0F172A]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 12% 18%, rgba(14,165,233,0.2), transparent 55%),
              radial-gradient(ellipse 50% 40% at 88% 12%, rgba(59,130,246,0.18), transparent 50%),
              radial-gradient(ellipse 45% 35% at 80% 88%, rgba(16,185,129,0.1), transparent 50%),
              linear-gradient(180deg, #f7f8fb 0%, #eef1f6 55%, #e8ecf3 100%)
            `,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <p className="text-center lg:text-left text-[12px] font-semibold text-slate-400 mb-6">
            <a href={PRO} className="hover:text-[#3B82F6]">
              OpenPay Pro
            </a>
            <span className="mx-2">›</span>
            <span className="text-[#0F172A]">OpenUSD</span>
            <span className="mx-2">·</span>
            <a href={AUTHPI} className="hover:text-[#3B82F6]">
              Swap & buy
            </a>
          </p>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <OusdMark size="lg" />
                <OpenPayWordmark />
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                OpenUSD · OUSD · Pi Network
              </p>
              <h1 className="mt-3 text-[48px] sm:text-[64px] lg:text-[72px] font-extrabold tracking-[-0.055em] leading-[0.92]">
                Meet OpenUSD
              </h1>
              <p className="mt-4 text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[#0F172A]">
                OpenPay’s dollar for the open network — beside Pi as a core Pro asset.
              </p>
              <p className="mt-3 text-[15px] text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Hold, send, and settle in OUSD across OpenPay Pro. Top up with Pi Network at a live π price — OpenUSD
                and Pi lead every wallet.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href={AUTHPI}
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#3B82F6] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
                >
                  Get OUSD in OpenPay Pro <ArrowRight size={16} />
                </a>
                <a href={`${APP}/partner-api`} className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                  Partner API
                </a>
              </div>
              <p className="mt-4 text-[12px] text-slate-400">
                Live product:{" "}
                <a href={OUSD_LIVE} className="text-[#3B82F6] font-semibold">
                  openpaypro.space/openusd
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <OusdWalletMock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* This is New Money */}
      <Section eyebrow="This is new money" title="Pi and OpenUSD — one Pro wallet">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              t: "Pi Network · core asset",
              d: "Hold Pi beside OpenUSD in one Pro wallet — and top up OUSD from Pi at a live π price.",
            },
            {
              t: "OpenUSD · primary dollar",
              d: "$1 OUSD thinking for everyday sends, receives, and merchant payouts across OpenPay.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-[22px] bg-white border border-slate-200 p-6">
              <p className="text-[17px] font-extrabold tracking-[-0.03em]">{x.t}</p>
              <p className="mt-2 text-[14px] text-slate-500 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section
        eyebrow="Features"
        title="Spend and send like cash"
        caption="OUSD sits beside Pi, majors, and OpenTokens in a single Pro balance — top up, swap, deposit, and pay without hopping apps."
        invert
      >
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              t: "Spend and send like cash",
              d: "Move OUSD to @usernames, wallet addresses, or OpenPay accounts — instant ledger settlement inside OpenPay Pro.",
            },
            {
              t: "One place for your money",
              d: "OUSD beside Pi, majors, and OpenTokens — top up, swap, deposit, and pay without hopping apps.",
            },
            {
              t: "Built for the open network",
              d: "Partner APIs, OpenLedger, OpenApp, and agents all speak OUSD — builders and users share the same dollar rail.",
            },
          ].map((f) => (
            <div key={f.t} className="rounded-[22px] bg-white border border-slate-200 p-5">
              <p className="text-[15px] font-bold tracking-[-0.02em]">{f.t}</p>
              <p className="mt-2 text-[13px] text-slate-500 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Everything you need */}
      <Section eyebrow="Network dollar" title="Everything you need from a network dollar">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { t: "View your balance in one place", d: "See OUSD with your other OpenPay Pro assets as one clear home-screen balance." },
            { t: "Move money fast", d: "Top up from OpenPay Balance, Pi, cards, or crypto — then send without the usual rails friction." },
            { t: "Frictionless transfers", d: "Pay friends by @username or Pro address. Scan receive QRs for any Pro token, including OUSD." },
            { t: "Trade and build on $1", d: "Swap majors and OpenTokens against OUSD, and integrate Partner API payments in the same dollar." },
          ].map((f) => (
            <div key={f.t} className="flex gap-3 rounded-[22px] bg-white border border-slate-200 p-5">
              <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
              <div>
                <p className="text-[15px] font-bold">{f.t}</p>
                <p className="mt-1 text-[13px] text-slate-500">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Swap · buy · settle */}
      <Section
        id="swap"
        eyebrow="Swap · buy · settle"
        title="Every token OpenUSD can buy & swap"
        caption="OpenUSD and Pi Network are the main Pro tokens — then majors, Spot, and Perpetuals settle against the same OUSD rail."
        invert
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <OusdSwapMock />
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-3">Listed majors</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {MAJORS.map((m) => (
                <span key={m} className="px-3.5 py-2 rounded-full bg-white border border-slate-200 text-[12px] font-bold">
                  {m}
                </span>
              ))}
            </div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-3">Partners & integrations</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {PARTNERS.map((p) => (
                <span key={p} className="px-3.5 py-2 rounded-full bg-slate-100 text-[12px] font-semibold text-slate-600">
                  {p}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={AUTHPI}
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#3B82F6] text-white text-[15px] font-semibold"
              >
                Buy with OUSD <ArrowRight size={16} />
              </a>
              <a href={`${PRO}/website#partners`} className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                Full partners showcase →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Powered by */}
      <Section eyebrow="Powered by OUSD" title="One clear dollar unit">
        <div className="rounded-[28px] bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] p-8 sm:p-12 text-white text-center">
          <div className="flex justify-center mb-4">
            <OusdMark size="lg" />
          </div>
          <p className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.045em]">OUSD</p>
          <p className="mt-3 text-[15px] text-white/70 max-w-lg mx-auto leading-relaxed">
            OpenUSD keeps OpenPay Pro, OpenLedger, and partner apps on one clear dollar unit.
          </p>
          <a
            href="https://openpyledger.space"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-sky-300"
          >
            Explore OpenLedger <ArrowRight size={16} />
          </a>
        </div>
      </Section>

      {/* News */}
      <Section eyebrow="New news" title="Meet OpenPay AI — read the announcement" invert>
        <a
          href="/blog/meet-openpay-ai"
          className="block rounded-[22px] bg-white border border-slate-200 p-6 sm:p-8 hover:border-[#3B82F6]/40 transition-colors"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3B82F6]">Announcement · OpenPay</p>
          <p className="mt-2 text-[18px] font-extrabold tracking-[-0.03em]">
            How OpenPay is opening the network for assistants, partners, and everyday money.
          </p>
          <p className="mt-3 text-[14px] font-semibold text-[#3B82F6]">Read on the blog →</p>
        </a>
      </Section>

      {/* Ecosystem */}
      <Section eyebrow="OpenPay ecosystem" title="Every door into the network">
        <div className="flex flex-wrap gap-2">
          {[
            { l: "Try OpenPay", href: APP },
            { l: "OpenLedger", href: "https://openpyledger.space" },
            { l: "OpenApp", href: "https://openappdev.space" },
            { l: "Partners", href: `${PRO}/website#partners` },
            { l: "Blogs", href: "/blog", to: "/blog" },
            { l: "Telegram", href: "https://t.me/openpayofficial" },
            { l: "Sign in", href: `${APP}/auth` },
            { l: "Follow OpenPay", href: "https://droplinkpi.space/@openpay" },
            { l: "Whitepaper", href: `${APP}/whitepaper` },
            { l: "Pitch Deck", href: `${APP}/pitch-deck` },
            { l: "OpenNFT", href: `${APP}/web3/nft` },
            { l: "Partner API", href: `${APP}/partner-api` },
            { l: "QR Pay", href: "/qr-pay", to: "/qr-pay" },
          ].map((x) =>
            x.to ? (
              <Link
                key={x.l}
                to={x.to}
                className="px-3.5 py-2 rounded-full bg-white border border-slate-200 text-[12px] font-semibold hover:border-[#3B82F6]/40 transition-colors"
              >
                {x.l}
              </Link>
            ) : (
              <a
                key={x.l}
                href={x.href}
                className="px-3.5 py-2 rounded-full bg-white border border-slate-200 text-[12px] font-semibold hover:border-[#3B82F6]/40 transition-colors"
              >
                {x.l}
              </a>
            )
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Questions about OUSD" invert>
        <div className="max-w-3xl space-y-3">
          {FAQ.map((item) => (
            <details key={item.q} className="group rounded-[22px] bg-white border border-slate-200 p-5 open:shadow-sm">
              <summary className="cursor-pointer list-none text-[15px] font-bold tracking-[-0.02em] flex justify-between gap-4">
                {item.q}
                <span className="text-slate-300 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-[14px] text-slate-500 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-5">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            {...fade(reduce)}
            className="rounded-[28px] bg-white border border-slate-200 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.2)] p-8 sm:p-10"
          >
            <div className="flex justify-center gap-3 mb-4">
              <OusdMark size="lg" />
              <OpenPayWordmark />
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-extrabold tracking-[-0.045em] leading-tight">
              Start with OpenUSD in OpenPay Pro
            </h2>
            <p className="mt-3 text-[15px] text-slate-500 leading-relaxed">
              Open your wallet, top up OUSD, and join the open network — or build on Partner API and OpenLedger today.
            </p>
            <a
              href={AUTHPI}
              className="mt-7 flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#3B82F6] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
            >
              Open OpenPay Pro <ArrowRight size={16} />
            </a>
            <a href={APP} className="mt-3 inline-block text-[15px] font-semibold text-[#3B82F6]">
              Try OpenPay
            </a>
            <p className="mt-6 text-[11px] text-slate-400 leading-relaxed">
              OUSD is OpenPay’s network dollar for use inside OpenPay products. Always review in-app disclosures for
              fees, availability, and settlement details.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenUsdPage;
