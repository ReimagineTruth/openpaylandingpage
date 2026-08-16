import { motion } from "framer-motion";
import {
  Send, QrCode, Store, MousePointerClick,
  CreditCard, Pickaxe, Image, Code2, ArrowUpRight
} from "lucide-react";

const APP = "https://openpy.space";

const highlights = [
  { icon: Send, title: "Send & Receive Pi", desc: "Instant transfers to any OpenPay username, plus QR receive.", links: [{ label: "Send", href: `${APP}/send` }, { label: "Scan QR", href: `${APP}/scan-qr` }, { label: "Receive", href: `${APP}/receive` }] },
  { icon: QrCode, title: "QR Pay", desc: "Create QR payments with inline items and guest-friendly checkout. Scan OpenPay, Pro, and QR Ph with the same camera.", links: [{ label: "QR Pay", href: `${APP}/qr-pay` }, { label: "Scan QR", href: `${APP}/scan-qr` }] },
  { icon: Store, title: "Merchant POS", desc: "In-person checkout with QR sessions and instant receipts.", links: [{ label: "Open POS", href: `${APP}/merchant-pos` }] },
  { icon: MousePointerClick, title: "Payment Links & Buttons", desc: "Cart, donate, subscribe and embeddable pay buttons.", links: [{ label: "Buttons", href: `${APP}/buttons` }] },
  { icon: CreditCard, title: "Virtual Card", desc: "Issue and manage an OpenPay virtual card linked to your balance.", links: [{ label: "Virtual Card", href: `${APP}/virtual-card` }] },
  { icon: Pickaxe, title: "Mining & Rewards", desc: "24-hour ad-gated mining cycle, Pi Ads, staking and quests.", links: [{ label: "Mining", href: `${APP}/mining` }] },
  { icon: Image, title: "OpenNFT Marketplace", desc: "Mint, trade, auction and run your own NFT store.", links: [{ label: "Explore NFTs", href: `${APP}/web3/nft` }] },
  { icon: Code2, title: "Developer APIs", desc: "OpenPay Auth, Checkout, Ledger and Partner APIs.", links: [{ label: "API Docs", href: `${APP}/openpay-api-docs` }] },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const FeatureHighlightsSection = () => {
  return (
    <section id="highlights" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card shadow-card text-xs font-semibold text-foreground mb-6">
            Product highlights
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            Eight ways to<br />
            <span className="text-accent">move money.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl">
            Jump straight into the OpenPay app — every highlight below opens the live product.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {highlights.map((h, i) => {
            const dark = i % 5 === 2;
            return (
              <motion.div
                key={h.title}
                variants={item}
                className={`group rounded-4xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  dark ? "surface-ink" : "bg-card shadow-card"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${dark ? "bg-primary-foreground/10" : "bg-secondary"}`}>
                  <h.icon className={`w-6 h-6 ${dark ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${dark ? "text-primary-foreground" : "text-foreground"}`}>{h.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{h.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {h.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                        dark
                          ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                          : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {l.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlightsSection;
