import { motion } from "framer-motion";
import { Shield, Lock, Fingerprint, Eye, KeyRound, Server } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "MPIN Protection", desc: "Transaction-level security with your personal PIN" },
  { icon: Fingerprint, title: "Biometric Login", desc: "Face ID & fingerprint for instant secure access" },
  { icon: KeyRound, title: "Pi Auth", desc: "Native Pi Network authentication integration" },
  { icon: Eye, title: "Hidden Balance", desc: "Toggle balance visibility for public privacy" },
  { icon: Shield, title: "SSL Encryption", desc: "End-to-end encrypted data and transactions" },
  { icon: Server, title: "Stable & Reliable", desc: "99.9% uptime with distributed infrastructure" },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-hero p-8 md:p-16 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-accent/5 rounded-full blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <span className="text-sm font-semibold text-cyan-accent uppercase tracking-wider">Security</span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
              Bank-grade protection<br />for your digital assets.
            </h2>
            <p className="text-blue-glow/60 text-lg max-w-xl mb-12">
              Multiple layers of security ensure your Pi and funds are always protected.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-cyan-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary-foreground mb-1">{f.title}</h3>
                    <p className="text-xs text-blue-glow/50 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
