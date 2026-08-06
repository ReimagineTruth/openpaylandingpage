import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckoutPhoneMock,
  DashboardCropMock,
  GuideModalMock,
  OpenPayBadge,
  PayWithOpenPayButton,
  PiHandoffMock,
  PurposePickerMock,
  SharePhoneMock,
  SuccessPhoneMock,
} from "@/components/qrpay-landing/QrPayMocks";

const APP = "https://openpy.space";

const fadeUp = (reduce: boolean | null) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      };

const Section = ({
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
}) => {
  const reduce = useReducedMotion();
  return (
    <section id={id} className={`qrp-section ${invert ? "qrp-section-invert" : ""}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div {...fadeUp(reduce)} className="max-w-2xl mb-10 sm:mb-12">
          {eyebrow && (
            <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.12em] text-[#86868B] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-[-0.045em] text-[#1d1d1f] leading-[1.1]">
            {title}
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#6E6E73] leading-relaxed">{caption}</p>
        </motion.div>
        <motion.div
          {...fadeUp(reduce)}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

const QrPayPage = () => {
  const reduce = useReducedMotion();

  return (
    <div className="qrp-page min-h-screen">
      <Navbar />

      {/* 1. Hero — brand + one headline + CTA + phone */}
      <section className="qrp-hero relative overflow-hidden">
        <div className="qrp-mesh absolute inset-0" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left"
            >
              <div className="flex justify-center lg:justify-start mb-5">
                <OpenPayBadge />
              </div>
              <p className="text-[72px] sm:text-[88px] lg:text-[96px] font-extrabold tracking-[-0.055em] text-[#1d1d1f] leading-[0.9]">
                Open<span className="text-accent">Pay</span>
              </p>
              <h1 className="mt-4 text-[28px] sm:text-[34px] font-extrabold tracking-[-0.045em] text-[#1d1d1f] leading-[1.15]">
                Create a checkout.
                <br />
                Share it. Get paid.
              </h1>
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#6E6E73] leading-relaxed max-w-md mx-auto lg:mx-0">
                Turn any phone into a branded payment page — QR, link, or website Pay button. Collect with Pi,
                Wallet, Virtual Card, or OpenPay Pro.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href={`${APP}/qr-pay`}
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#1d1d1f] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform hover:opacity-90"
                >
                  Start accepting OpenPay <ArrowRight size={16} />
                </a>
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center h-12 px-5 text-[15px] font-semibold text-[#007AFF]"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-[12px] sm:text-[13px] text-[#86868B]">
                No cart required · No fee on pay screen · Receipt every time
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative z-10">
                <CheckoutPhoneMock />
              </div>
              <div className="hidden sm:block absolute -right-2 top-10 -z-0 translate-x-6 opacity-80">
                <SuccessPhoneMock compact />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Journey */}
      <Section
        id="journey"
        eyebrow="Product journey"
        title="Set up → Share → Pay → Done"
        caption="Every QR Pay screen shares this progress language — create once, share anywhere, get a receipt every time."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "Set up", desc: "Purpose, amount, and methods", mock: <PurposePickerMock /> },
            { step: "Share", desc: "QR, link, or website button", mock: <SharePhoneMock /> },
            { step: "Pay", desc: "Customer checkout", mock: <CheckoutPhoneMock /> },
            { step: "Done", desc: "Receipt + Tx ID", mock: <SuccessPhoneMock /> },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-center"
            >
              <div className="scale-[0.88] origin-top">{item.mock}</div>
              <p className="mt-2 text-[13px] font-bold text-[#1d1d1f]">{item.step}</p>
              <p className="text-[12px] text-[#86868B]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Create / purpose */}
      <Section
        eyebrow="Create"
        title="From product invoice to tip jar"
        caption="Pick a purpose, not a template maze — Commerce, Digital, Donations, Booking, Bills, Finance, Business, Personal, Crypto."
        invert
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <PurposePickerMock />
          <div>
            <ul className="space-y-3">
              {[
                "Searchable iOS Settings–style purpose catalog",
                "Line items or flexible amounts for donations & tips",
                "Pi, Wallet, Virtual Card, and optional guest Pi",
                "Reusable links, expiry, Pro settlement, delivery fields",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[15px] text-[#6E6E73]">
                  <Check className="w-5 h-5 text-[#34C759] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={`${APP}/qr-pay/new`}
              className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#1d1d1f] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
            >
              Create a QR payment <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>

      {/* 4. Share */}
      <Section
        eyebrow="Share"
        title="In person or online — same checkout"
        caption="In person? Show the QR. Online? Drop a Pay button — same checkout token."
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SharePhoneMock />
          <div className="space-y-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#86868B] mb-2">Mobile</p>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed">
                Branded QR, copy link, native Share, and checkout preview — built for markets, cafés, services, and DMs.
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#86868B] mb-2">Website</p>
              <p className="text-[15px] text-[#6E6E73] leading-relaxed mb-4">
                Live Pay with OpenPay button, iframe, widget, or HTML snippet — Black or White themes.
              </p>
              <div className="max-w-xs">
                <PayWithOpenPayButton />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Checkout */}
      <Section
        eyebrow="Checkout"
        title="Brand, amount, pay"
        caption="Checkout that feels familiar the first time — no fee callout, clear methods, sticky pay bar on mobile."
        invert
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <CheckoutPhoneMock />
          <div className="max-w-sm">
            <GuideModalMock />
            <p className="mt-4 text-center text-[13px] text-[#86868B]">
              The same “accept payments” moment merchants see in-app.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. Pi-native */}
      <Section
        eyebrow="Pi-native"
        title="Pay in Pi Browser. Receipt where you started."
        caption="Outside Pi Browser, OpenPay guides the handoff — wait, copy, or switch method. Your original tab polls until paid."
      >
        <div className="flex justify-center">
          <PiHandoffMock />
        </div>
      </Section>

      {/* 7. Success */}
      <Section
        eyebrow="Done"
        title="A receipt you can keep"
        caption="Tx ID for disputes, share via email or print — animated success that respects reduced motion."
        invert
      >
        <div className="flex justify-center">
          <SuccessPhoneMock />
        </div>
      </Section>

      {/* 8. Merchant OS */}
      <Section
        eyebrow="Merchant OS"
        title="Links, revenue, and every order"
        caption="One place to create links, watch revenue, and open every customer order — Overview, Payment links, and Shopify-style Orders."
      >
        <DashboardCropMock />
      </Section>

      {/* 9. Methods */}
      <Section
        eyebrow="How customers pay"
        title="Pi · Wallet · Card · OpenPay Pro"
        caption="One checkout. Four paths. Settlement to Pro when you’re ready."
        invert
      >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            { name: "Pi Network", hint: "Best in Pi Browser" },
            { name: "OpenPay Wallet", hint: "Balance pay" },
            { name: "Virtual Card", hint: "Card rails" },
            { name: "OpenPay Pro", hint: "OUSD · USDT · SOL" },
          ].map((m) => (
            <div
              key={m.name}
              className="min-w-[140px] flex-1 sm:flex-none px-5 py-4 rounded-[22px] bg-white border border-black/[0.06] text-center"
            >
              <p className="text-[14px] font-bold text-[#1d1d1f] tracking-[-0.02em]">{m.name}</p>
              <p className="mt-1 text-[12px] text-[#86868B]">{m.hint}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-md mx-auto">
          <div className="rounded-[22px] bg-[#F2F2F7] p-1 flex text-[13px] font-semibold">
            <span className="flex-1 text-center py-2.5 rounded-full bg-white shadow-sm text-[#1d1d1f]">Share link</span>
            <span className="flex-1 text-center py-2.5 text-[#86868B]">Website</span>
          </div>
        </div>
      </Section>

      {/* 10. Closing CTA */}
      <section className="qrp-section pb-24">
        <div className="max-w-xl mx-auto px-5 text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="qrp-sheet p-8 sm:p-10"
          >
            <div className="flex justify-center">
              <OpenPayBadge />
            </div>
            <h2 className="mt-5 text-[28px] sm:text-[32px] font-extrabold tracking-[-0.045em] text-[#1d1d1f]">
              Now Accepting OpenPay
            </h2>
            <p className="mt-3 text-[15px] text-[#6E6E73] leading-relaxed">
              Create a branded QR checkout in minutes. Share a link, show a QR, or embed Pay with OpenPay on your
              site.
            </p>
            <a
              href={`${APP}/qr-pay`}
              className="mt-7 inline-flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#1d1d1f] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
            >
              Set Up OpenPay <ArrowRight size={16} />
            </a>
            <a href={`${APP}/auth`} className="mt-3 inline-block text-[15px] font-semibold text-[#007AFF]">
              Sign in with Pi
            </a>
          </motion.div>
          <p className="mt-8 text-[13px] text-[#86868B]">
            Read the full guide on{" "}
            <a href="/blog/openpay-qr-pay" className="text-[#007AFF] font-semibold">
              the OpenPay blog
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QrPayPage;
