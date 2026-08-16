import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  AiChatMock,
  AuthCardMock,
  DashboardPhoneMock,
  DevKeysMock,
  MiningPhoneMock,
  NftGridMock,
  OpenPayBadge,
  PosPhoneMock,
  ReceivePhoneMock,
  SendPhoneMock,
  TopUpRailsRow,
  VirtualCardMock,
} from "@/components/landing/WalletMocks";
import {
  CheckoutPhoneMock,
  PayWithOpenPayButton,
  SharePhoneMock,
  SuccessPhoneMock,
} from "@/components/qrpay-landing/QrPayMocks";
import { OusdMark, OusdWalletMock } from "@/components/landing/OusdMocks";
import AppStorePreviewsGallery, {
  FeatureBulletsStrip,
  TrustMerchantEarnStrips,
} from "@/components/landing/AppStorePreviewsGallery";

const APP = "https://openpy.space";
const PRO = "https://openpaypro.space";
const AUTHPI = `${PRO}/authpi`;

const fade = (reduce: boolean | null, delay = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-50px" },
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
  caption: string;
  children: ReactNode;
  invert?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <section id={id} className={`py-16 sm:py-20 ${invert ? "bg-white" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div {...fade(reduce)} className="max-w-2xl mb-10">
          {eyebrow && (
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#8e8e93] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.045em] text-[#1d1d1f] leading-[1.1]">
            {title}
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-[#8e8e93] leading-relaxed">{caption}</p>
        </motion.div>
        <motion.div {...fade(reduce, 0.06)}>{children}</motion.div>
      </div>
    </section>
  );
}

function BlueCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#007AFF] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform hover:opacity-90"
    >
      {children}
    </a>
  );
}

function InkCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#1d1d1f] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform hover:opacity-90"
    >
      {children}
    </a>
  );
}

const HomeLanding = () => {
  const reduce = useReducedMotion();

  return (
    <div className="bg-[#F2F2F7] text-[#1d1d1f]">
      {/* 1. Hero */}
      <section id="hero" className="relative overflow-hidden min-h-[min(100vh,900px)]">
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 10% 15%, rgba(0,122,255,0.18), transparent 55%),
              radial-gradient(ellipse 45% 40% at 85% 85%, rgba(52,199,89,0.1), transparent 50%),
              linear-gradient(180deg, #ffffff 0%, #F2F2F7 55%, #EBEEF5 100%)
            `,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start mb-5">
                <OpenPayBadge />
              </div>
              <p className="text-[64px] sm:text-[80px] lg:text-[88px] font-extrabold tracking-[-0.055em] leading-[0.9] text-[#1d1d1f]">
                Open<span className="text-[#007AFF]">Pay</span>
              </p>
              <p className="mt-2 text-[15px] font-semibold text-[#8e8e93]">Stable payments for the Pi economy.</p>
              <h1 className="mt-4 text-[26px] sm:text-[32px] font-extrabold tracking-[-0.045em] leading-[1.15]">
                Every feature. One wallet.
              </h1>
              <p className="mt-4 text-[15px] sm:text-base text-[#8e8e93] leading-relaxed max-w-md mx-auto lg:mx-0">
                Hold OpenUSD, send with QR, mine rewards, spend with a Virtual Card, chat with OpenPay AI, and accept
                payments with QR Pay & Merchant POS — App Store–ready screens from the live product UI.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <BlueCta href={`${APP}/auth`}>
                  Sign in with Pi <ArrowRight size={16} />
                </BlueCta>
                <Link
                  to="/app-store-previews"
                  className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#007AFF]"
                >
                  Open App Store Previews
                </Link>
              </div>
              <p className="mt-5 text-[12px] text-[#8e8e93] max-w-lg mx-auto lg:mx-0">
                OUSD $1 peg · Live PI rates · KYC · Pi Browser · OpenPay Pro
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <DashboardPhoneMock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. How */}
      <Section
        id="how"
        eyebrow="How it works"
        title="Sign in → Pay → Sell → Grow"
        caption="One Pi identity unlocks wallet, merchant tools, Web3, and AI — with a receipt every time."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Sign in", d: "Authenticate with Pi" },
            { n: "02", t: "Pay", d: "One camera: wallet, Pro, bank" },
            { n: "03", t: "Sell", d: "POS & QR Pay checkouts" },
            { n: "04", t: "Grow", d: "Mine, stake, mint, build" },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              {...fade(reduce, i * 0.05)}
              className="rounded-[22px] bg-white border border-slate-200/80 p-5"
            >
              <p className="text-[11px] font-bold text-[#3B82F6]">{s.n}</p>
              <p className="mt-2 text-[17px] font-extrabold tracking-[-0.03em]">{s.t}</p>
              <p className="mt-1 text-[13px] text-slate-500">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* App Store feature previews */}
      <Section
        id="features"
        eyebrow="App Store previews"
        title="Every OpenPay feature — ready for the App Store"
        caption="Browse exact product screens: Wallet, Assets, Send, QR Pay, Mining, KYC, OpenPay AI, OpenNFT, Merchant POS, and more. Filter by group."
        invert
      >
        <AppStorePreviewsGallery limit={8} showMeta compact />
        <div className="mt-12">
          <FeatureBulletsStrip />
        </div>
        <div className="mt-10">
          <TrustMerchantEarnStrips />
        </div>
      </Section>

      {/* 3. Wallet */}
      <Section
        id="wallet"
        eyebrow="Wallet"
        title="One dashboard for personal & merchant balances"
        caption="Track OpenUSD, PI equivalent, Savings, Mining, and OpenPay Pro tokens. Send · Request · Top Up — one tap away."
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          <DashboardPhoneMock />
          <SendPhoneMock />
          <div className="hidden xl:block">
            <ReceivePhoneMock />
          </div>
        </div>
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <BlueCta href={`${APP}/auth/dashboard`}>
            Open dashboard <ArrowRight size={16} />
          </BlueCta>
          <a href={`${APP}/scan-qr`} className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
            Scan QR →
          </a>
        </div>
      </Section>

      {/* 4. Get paid */}
      <Section
        id="get-paid"
        eyebrow="Get paid"
        title="Your QR is your storefront"
        caption="@username, personal QR, payment links, requests, and invoices — same wallet settlement."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <ReceivePhoneMock />
          <div>
            <ul className="space-y-3">
              {[
                "Personal QR with name + @username",
                "Public pay page at openpy.space/@you",
                "Request money and send invoices with Tx ID",
                "Payment links for bio, Telegram, and email",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-slate-500">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BlueCta href={`${APP}/auth/receive`}>Receive</BlueCta>
              <a href={`${APP}/auth/payment-links/create`} className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                Create link →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Merchant */}
      <Section
        id="merchant"
        eyebrow="Merchant"
        title="Your phone is your terminal"
        caption="Ring a sale with Merchant POS, or create shareable QR Pay checkouts for DMs, events, and your website."
        invert
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <PosPhoneMock />
          <CheckoutPhoneMock />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <BlueCta href={`${APP}/auth/merchant-pos`}>Open POS</BlueCta>
          <Link
            to="/qr-pay"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#1d1d1f] text-white text-[15px] font-semibold"
          >
            Explore QR Pay
          </Link>
        </div>
      </Section>

      {/* 6. QR Pay deep */}
      <Section
        id="qr-pay"
        eyebrow="QR Pay"
        title="Create a checkout. Share it. Get paid."
        caption="In person? Show the QR. Online? Drop a Pay button — same checkout token. Set up → Share → Pay → Done."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SharePhoneMock />
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-400 mb-3">Website embed</p>
            <div className="max-w-xs mb-6">
              <PayWithOpenPayButton />
            </div>
            <ul className="space-y-2 text-[14px] text-slate-500 mb-8">
              <li>Purpose catalog · line items · Pi / Wallet / Card / Pro</li>
              <li>No fee on pay screen · sticky black Pay CTA</li>
              <li>Success receipt with Tx ID · Orders dashboard</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <InkCta href={`${APP}/qr-pay`}>
                Open QR Pay <ArrowRight size={16} />
              </InkCta>
              <Link to="/qr-pay" className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#007AFF]">
                UI showcase →
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center opacity-90">
          <SuccessPhoneMock />
        </div>
      </Section>

      {/* 7. Fund */}
      <Section
        id="fund"
        eyebrow="Fund & spend"
        title="One wallet. Every rail."
        caption="Top up with cards, wallets, and crypto — then spend online with a Virtual Card backed by your balance."
        invert
      >
        <TopUpRailsRow />
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
          <VirtualCardMock />
          <div className="text-center sm:text-left max-w-xs">
            <p className="text-[18px] font-extrabold tracking-[-0.03em]">A card that lives inside your Pi wallet</p>
            <p className="mt-2 text-[14px] text-slate-500">Provision · freeze · reveal · spend online</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
              <BlueCta href={`${APP}/auth/top-up`}>Top up</BlueCta>
              <a href={`${APP}/auth/virtual-card`} className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                Virtual card →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* OpenUSD */}
      <Section
        id="ousd"
        eyebrow="OpenUSD · OUSD"
        title="Meet OpenUSD — OpenPay’s dollar on the open network"
        caption="Hold, send, and settle in OUSD across OpenPay Pro. Top up with Pi at a live π price — swap majors, Spot, and Perpetuals against the same $1 rail."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <OusdWalletMock />
          <div>
            <div className="flex items-center gap-3 mb-4">
              <OusdMark size="lg" />
              <div>
                <p className="text-[15px] font-extrabold tracking-tight text-[#0F172A]">
                  Open<span className="text-[#3B82F6]">Pay</span> · OpenUSD
                </p>
                <p className="text-[13px] font-semibold text-slate-500">Beside Pi as a core Pro asset</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Spend and send like cash to @usernames and Pro addresses",
                "One Pro wallet for OUSD, Pi, majors, and OpenTokens",
                "Partners: TradingView · CoinGecko · MoonPay · Solana Pay · Circle",
                "Partner API and OpenLedger speak the same dollar unit",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-slate-500">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={AUTHPI}
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#3B82F6] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
              >
                Get OUSD in OpenPay Pro <ArrowRight size={16} />
              </a>
              <Link to="/openusd" className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                Full OpenUSD showcase →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Grow */}
      <Section
        id="grow"
        eyebrow="Grow"
        title="Idle Pi is lazy Pi"
        caption="Mine every 24 hours, stake for yield, earn with affiliates, and move money across borders with remittance."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <MiningPhoneMock />
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "Mining", d: "Ad-gated 24h cycle", href: `${APP}/auth/mining` },
              { t: "Staking", d: "Term · yield · lock-up", href: `${APP}/auth/staking` },
              { t: "Affiliate", d: "Earn on referrals", href: `${APP}/auth/affiliate` },
              { t: "Remittance", d: "Cross-border settle", href: `${APP}/auth/remittance-center` },
            ].map((x) => (
              <a
                key={x.t}
                href={x.href}
                className="rounded-[22px] bg-white border border-slate-200 p-5 hover:border-[#3B82F6]/40 transition-colors"
              >
                <p className="text-[15px] font-bold">{x.t}</p>
                <p className="mt-1 text-[13px] text-slate-500">{x.d}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. Web3 */}
      <Section
        id="web3"
        eyebrow="Web3"
        title="Creators get paid. Collectors get provenance."
        caption="Mint image, GIF, video, or audio. Fixed price or live auction. Pay with balance, card, or Pi."
        invert
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <NftGridMock />
          <div className="text-center lg:text-left">
            <BlueCta href={`${APP}/web3/nft`}>
              Open NFT marketplace <ArrowRight size={16} />
            </BlueCta>
            <a href={`${APP}/web3/nft/create`} className="mt-3 block text-[15px] font-semibold text-[#3B82F6]">
              Create an NFT →
            </a>
          </div>
        </div>
      </Section>

      {/* 10. AI */}
      <Section
        id="ai"
        eyebrow="OpenPay AI"
        title="Your money copilot"
        caption="Ask in plain language — check balances, send money, explore features, and get routed to the right screen."
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <AiChatMock />
          <div className="max-w-sm">
            <ul className="space-y-3 text-[14px] text-slate-500">
              <li>Claude-style chat with sidebar balance</li>
              <li>Send from chat with confirm / cancel</li>
              <li>Suggestion chips for KYC, mining, and more</li>
            </ul>
            <div className="mt-8">
              <BlueCta href={`${APP}/ai`}>
                Try OpenPay AI <ArrowRight size={16} />
              </BlueCta>
            </div>
          </div>
        </div>
      </Section>

      {/* 11. Build */}
      <Section
        id="build"
        eyebrow="Build"
        title="OpenPay as a building block"
        caption="Partner API, OAuth, QR Pay API, and app payments — keys, docs, and receipts for integrators."
        invert
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <DevKeysMock />
          <div className="space-y-3">
            {[
              { t: "Developer dashboard", href: `${APP}/auth/developer-dashboard` },
              { t: "QR Pay API", href: `${APP}/qr-pay/api` },
              { t: "App payments", href: `${APP}/auth/app-payments` },
              { t: "Partner Auth & Checkout", to: "/blog/openpay-third-party-integration" },
            ].map((l) =>
              l.to ? (
                <Link key={l.t} to={l.to} className="block text-[15px] font-semibold text-[#3B82F6]">
                  {l.t} →
                </Link>
              ) : (
                <a key={l.t} href={l.href} className="block text-[15px] font-semibold text-[#3B82F6]">
                  {l.t} →
                </a>
              )
            )}
          </div>
        </div>
      </Section>

      {/* 12. Trust */}
      <Section
        id="trust"
        eyebrow="Trust"
        title="Trust, but verify. Then publish."
        caption="Pi Auth, MPIN, optional 2FA, KYC, disputes, and OpenLedger — receipts with Tx ID everywhere money moves."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[28px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-8 sm:p-10">
            <AuthCardMock />
          </div>
          <div>
            <ul className="space-y-3">
              {[
                "Authenticate with Pi — one identity",
                "MPIN on pays · optional 2FA",
                "KYC unlocks higher limits & merchant",
                "OpenLedger public explorer · dispute by Tx ID",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-slate-500">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <BlueCta href={`${APP}/auth`}>Sign in</BlueCta>
              <a href={`${APP}/auth/ledger`} className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                OpenLedger →
              </a>
              <Link to="/security" className="h-12 px-5 inline-flex items-center text-[15px] font-semibold text-[#3B82F6]">
                Security →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. Closing CTA */}
      <section id="cta" className="py-16 sm:py-24 px-5">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            {...fade(reduce)}
            className="rounded-[28px] bg-white border border-slate-200 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.2)] p-8 sm:p-10"
          >
            <div className="flex justify-center">
              <OpenPayBadge />
            </div>
            <h2 className="mt-5 text-[26px] sm:text-[30px] font-extrabold tracking-[-0.045em] leading-tight">
              See every OpenPay feature
            </h2>
            <p className="mt-3 text-[15px] text-[#8e8e93] leading-relaxed">
              29 exact App Store preview screens — Wallet, Payments, Mining, KYC, AI, NFT, and Merchant POS.
            </p>
            <Link
              to="/app-store-previews"
              className="mt-7 flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#007AFF] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
            >
              Open feature previews <ArrowRight size={16} />
            </Link>
            <a
              href={`${APP}/auth`}
              className="mt-3 flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#1d1d1f] text-white text-[15px] font-semibold"
            >
              Authenticate with Pi
            </a>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] font-semibold text-[#007AFF]">
              <a href={`${APP}/qr-pay`}>QR Pay</a>
              <Link to="/openusd">OpenUSD</Link>
              <a href={`${APP}/web3/nft`}>OpenNFT</a>
              <a href={`${APP}/ai`}>OpenPay AI</a>
              <a href={`${PRO}/website`} target="_blank" rel="noopener noreferrer">
                OpenPay Pro
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeLanding;
