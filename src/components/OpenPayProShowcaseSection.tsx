import { motion } from "framer-motion";
import {
  Sparkles,
  Wallet,
  Coins,
  Image as ImageIcon,
  Shield,
  ArrowRight,
  ExternalLink,
  KeyRound,
  Layers,
} from "lucide-react";

const OpenPayProShowcaseSection = () => {
  const features = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Premium Web3 Wallet",
      description: "A focused Pro experience for managing OUSD, tokens, and NFTs in one place.",
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "OUSD & Tokens",
      description: "Hold and move OpenUSD alongside ecosystem tokens with a clean, wallet-first UI.",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "NFT Ready",
      description: "Access NFT activity from the same Pro wallet you use for balances and transfers.",
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      title: "Sign in with Pi or OpenPay",
      description: "Continue with Pi Network or your OpenPay account — no separate password maze.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Ecosystem Native",
      description: "Built for the OpenPay stack — activity stays visible on OpenLedger alongside OpenPay.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure by Design",
      description: "Session-based access with the same trust model as the broader OpenPay ecosystem.",
    },
  ];

  return (
    <section id="openpay-pro" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">OpenPay Pro</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Introducing the <span className="text-gradient">premium Web3 wallet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            OpenPay Pro is built for OUSD, tokens, and NFTs — sign in with Pi Network or OpenPay and manage your Web3 assets in one focused wallet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border overflow-hidden shadow-elevated"
          >
            <div className="bg-hero px-5 sm:px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-white/90" />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                  Premium Web3 wallet
                </span>
              </div>
              <span className="text-white/60 text-xs font-mono">openpaypro.space</span>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Welcome back</p>
                <p className="text-sm font-semibold text-foreground">@pioneer</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">1,250.00</span>
                  <span className="text-xs text-muted-foreground">OUSD</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Send", "Receive", "NFTs"].map((action, i) => (
                  <div
                    key={action}
                    className={`py-2.5 rounded-full text-center text-xs font-semibold ${
                      i === 0
                        ? "bg-accent text-accent-foreground"
                        : "border border-border text-foreground"
                    }`}
                  >
                    {action}
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Assets
                </p>
                {[
                  { name: "OUSD", detail: "OpenUSD", amount: "1,250.00" },
                  { name: "PI", detail: "Pi Network", amount: "π 84.20" },
                  { name: "OpenNFT", detail: "3 collectibles", amount: "View" },
                ].map((asset) => (
                  <div
                    key={asset.name}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl border border-border/50"
                  >
                    <div>
                      <p className="text-sm font-bold text-foreground">{asset.name}</p>
                      <p className="text-xs text-muted-foreground">{asset.detail}</p>
                    </div>
                    <span className="text-sm font-semibold text-accent">{asset.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-gradient rounded-3xl p-8 md:p-10 text-white shadow-elevated flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-5">
                <Sparkles size={12} />
                <span className="text-xs font-semibold uppercase tracking-wider">OpenPay Pro</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                OUSD. Tokens. NFTs. One Pro wallet.
              </h3>
              <p className="text-white/80 text-base mb-6">
                OpenPay Pro is the premium wallet layer of the OpenPay ecosystem — sign in with Pi Network or OpenPay and access balances, tokens, and NFTs without juggling separate apps.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Premium Web3 wallet experience at openpaypro.space",
                  "Sign in with Pi Network or OpenPay",
                  "Manage OUSD, tokens, and NFT activity",
                  "Activity stays transparent on OpenLedger",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://openpaypro.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-full font-semibold hover:bg-white/90 transition-all self-start"
            >
              Open OpenPay Pro <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for OpenPay Pro?</h3>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Launch the premium Web3 wallet — sign in with Pi Network or OpenPay and start with OUSD, tokens, and NFTs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://openpaypro.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-accent bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-elevated"
            >
              <Sparkles size={18} /> Launch OpenPay Pro <ArrowRight size={18} />
            </a>
            <a
              href="https://openpy.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Open OpenPay
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPayProShowcaseSection;
