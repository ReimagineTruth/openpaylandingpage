import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Zap, Globe } from "lucide-react";
import ListenButton from "@/components/ListenButton";

const PAGE_SCRIPT = `Welcome to OpenPay. Send, spend and save. One wallet for Pi and over 170 currencies — Web3 payments made simple, fast and secure.
OpenPay lets you move Pi in an instant, anywhere in the world. Send and receive Pi in seconds, pay by QR code, accept payments in store with Merchant POS, share payment links and buttons, and spend your balance online with a virtual card.
Earn with savings at four point five zero percent APY, track daily mining and rewards, explore the OpenNFT marketplace, and build with the OpenPay developer APIs.
Every transaction is sealed on OpenLedger, our public explorer secured by a SHA-256 hash chain, so anyone can verify network activity in real time.
Your security comes first: Pi authentication, transaction PIN, dispute protection and full compliance. Get started free at openpy dot space.`;


const HeroSection = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-8 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Big centered statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center py-10 sm:py-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-foreground">Powered by Pi Network</span>
          </div>

          <h1 className="text-[2.75rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold text-foreground">
            Send, Spend, <span className="text-accent">&amp;</span> Save
          </h1>

          <p className="mt-8 text-base sm:text-xl text-muted-foreground max-w-xl mx-auto">
            One wallet for Pi and 170+ currencies. Web3 payments made simple, fast and secure.
          </p>

          <div className="mt-6 flex justify-center">
            <ListenButton label="Listen to this page" getText={() => PAGE_SCRIPT} />
          </div>


          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://openpy.space/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-accent-foreground bg-accent rounded-full hover:opacity-90 transition-opacity"
            >
              Get Started Free
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card shadow-card rounded-full hover:bg-secondary transition-colors"
            >
              See more
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Feature card row — Phantom style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Card 1 — dashboard mockup */}
          <div className="surface-tint rounded-5xl p-7 sm:p-9 lg:col-span-2 relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground max-w-md leading-[1.05]">
              Move Pi in an instant, anywhere in the world.
            </h2>
            <div className="mt-8 bg-card rounded-4xl shadow-elevated overflow-hidden max-w-[420px]">
              <div className="surface-ink px-6 py-7 text-primary-foreground">
                <p className="text-xs opacity-60 mb-1">Good afternoon!</p>
                <p className="text-sm font-semibold">@openpay</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">π204.99</span>
                  <span className="text-xs opacity-50">Balance · PI</span>
                </div>
              </div>
              <div className="px-5 py-4 flex gap-2.5">
                {["Pay", "Receive", "Top Up"].map((action, i) => (
                  <div
                    key={action}
                    className={`flex-1 py-2.5 rounded-full text-center text-xs font-semibold ${
                      i === 0 ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                    }`}
                  >
                    {action}
                  </div>
                ))}
              </div>
              <div className="px-5 pb-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-xs font-semibold text-foreground">Recent activity</p>
                  <span className="text-xs text-accent font-semibold">See more →</span>
                </div>
                {[
                  { name: "OpenPay", amount: "+π100.00", date: "Feb 19, 2026" },
                  { name: "Express Send", amount: "-π25.50", date: "Feb 18, 2026" },
                ].map((tx) => (
                  <div key={tx.amount} className="flex items-center justify-between py-3 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-tint flex items-center justify-center">
                        <span className="text-xs font-bold text-accent">{tx.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{tx.name}</p>
                        <p className="text-[10px] text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-foreground">{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — download stack */}
          <div className="surface-ink rounded-5xl p-7 sm:p-9 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-foreground leading-[1.05]">
              Take OpenPay everywhere you go.
            </h2>
            <div className="mt-8 flex flex-col gap-2.5">
              <a
                href="https://median.co/share/rdzamax#apk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 rounded-full bg-primary-foreground text-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Download for Android <ArrowUpRight size={16} />
              </a>
              <span className="flex items-center justify-between px-5 py-4 rounded-full bg-primary-foreground/10 text-primary-foreground/60 text-sm font-semibold">
                iOS · Coming soon
              </span>
              <a
                href="https://t.me/openpayofficialbot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                Telegram Mini App <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust strip */}
        <div className="mt-6 bg-card rounded-full px-6 sm:px-10 py-5 shadow-card flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {[
            { icon: Shield, label: "Bank-grade security" },
            { icon: Zap, label: "Instant transfers" },
            { icon: Globe, label: "170+ currencies" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              <t.icon size={16} className="text-accent shrink-0" />
              <span className="text-sm font-medium text-muted-foreground">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
