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
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Everything you need,<br />
            <span className="text-gradient">in one wallet.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From instant payments to virtual cards, OpenPay gives you the complete fintech experience — powered by Pi Network.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-card hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient group-hover:text-primary-foreground transition-all duration-300">
                <f.icon size={22} className="text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
