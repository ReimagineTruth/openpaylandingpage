import { motion } from "framer-motion";
import {
  Send, QrCode, Link2, FileText, Wallet, PiggyBank,
  CreditCard, ArrowRightLeft, ShieldCheck, Fingerprint, Lock, Globe
} from "lucide-react";

const features = [
  { icon: Send, title: "Express Send", desc: "Send Pi instantly to anyone, anywhere in the world with just a username." },
  { icon: QrCode, title: "Scan QR Code", desc: "Pay merchants or friends by scanning a QR code — no typing needed." },
  { icon: Link2, title: "Payment Links", desc: "Create checkout links and share them to collect payments effortlessly." },
  { icon: FileText, title: "Invoicing", desc: "Generate professional invoices and track payments in real time." },
  { icon: Wallet, title: "Wallet", desc: "Multi-currency wallet supporting Pi and 170+ global currencies." },
  { icon: PiggyBank, title: "Savings", desc: "Earn yield on your Pi with built-in savings and staking features." },
  { icon: CreditCard, title: "Virtual Cards", desc: "Get an OpenPay virtual debit card linked to your Pi balance." },
  { icon: ArrowRightLeft, title: "Currency Conversion", desc: "Convert between Pi and 170+ currencies at competitive FX rates." },
  { icon: ShieldCheck, title: "MPIN Security", desc: "Set a personal MPIN for transaction authorization and safety." },
  { icon: Fingerprint, title: "Biometric Auth", desc: "Unlock with fingerprint or face recognition for fast, secure access." },
  { icon: Lock, title: "Pi Auth Sign-In", desc: "Authenticate with Pi Network for seamless account creation." },
  { icon: Globe, title: "Global Coverage", desc: "Available across 170+ countries with localized currency support." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card shadow-card text-xs font-semibold text-foreground mb-6">
            Features
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            Everything you need,<br />
            <span className="text-accent">in one wallet.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl">
            From instant payments to virtual cards, OpenPay gives you the complete fintech experience — powered by Pi Network.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {features.map((f, i) => {
            const dark = i % 7 === 3;
            return (
              <motion.div
                key={f.title}
                variants={item}
                className={`group rounded-4xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  dark ? "surface-ink" : "bg-card shadow-card"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                    dark ? "bg-primary-foreground/10" : "surface-tint"
                  }`}
                >
                  <f.icon size={20} className={dark ? "text-primary-foreground" : "text-accent"} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
