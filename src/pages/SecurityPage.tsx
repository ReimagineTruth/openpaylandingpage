import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Lock, Fingerprint, Eye, KeyRound, Server } from "lucide-react";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Security</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Bank-grade <span className="text-gradient">protection</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple layers of security ensure your Pi and funds are always protected.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto mb-16">
            {/* MPIN mockup */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
              <div className="bg-accent px-6 py-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white/50 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <span className="text-white text-2xl font-bold">OpenPay</span>
                </div>
                <p className="text-white text-2xl font-bold mb-2">Good morning</p>
                <div className="inline-block bg-accent-dark/40 rounded-full px-6 py-2">
                  <p className="text-white font-semibold">@openpay</p>
                </div>
              </div>
              <div className="p-6">
                <div className="w-12 h-1 bg-accent rounded-full mb-4" />
                <h3 className="text-lg font-bold text-foreground text-center mb-4">Enter your MPIN</h3>
                <div className="rounded-xl border-2 border-accent/50 p-3 mb-2 text-center">
                  <p className="text-muted-foreground text-sm">Enter PIN</p>
                </div>
                <div className="flex justify-center gap-3 mb-4">
                  {[0,1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full border-2 border-accent" />)}
                </div>
                <button className="w-full py-3 bg-secondary rounded-xl text-sm font-semibold text-foreground mb-3">Unlock with MPIN</button>
                <p className="text-xs text-muted-foreground mb-2">Security Password</p>
                <div className="rounded-xl border border-border p-3 mb-2">
                  <p className="text-muted-foreground text-sm">Enter security password</p>
                </div>
                <button className="w-full py-3 bg-secondary rounded-xl text-sm font-semibold text-foreground mb-2">Unlock with Password</button>
                <button className="w-full py-3 rounded-xl border border-border text-sm font-semibold text-foreground">Log Out</button>
                <p className="text-center text-[10px] text-muted-foreground mt-4">Never share your MPIN, password, or OTP with anyone.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Lock, title: "MPIN Protection", desc: "Transaction-level security with your personal 4–6 digit PIN that only you know." },
              { icon: Fingerprint, title: "Biometric Login", desc: "Face ID & fingerprint recognition for instant, secure access to your wallet." },
              { icon: KeyRound, title: "Pi Auth", desc: "Native Pi Network authentication for seamless and secure account creation." },
              { icon: Eye, title: "Hidden Balance", desc: "Toggle balance visibility in public places for complete privacy protection." },
              { icon: Shield, title: "SSL Encryption", desc: "End-to-end encrypted data transmission and transaction security." },
              { icon: Server, title: "99.9% Uptime", desc: "Reliable distributed infrastructure with automatic failover and backups." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><f.icon size={18} className="text-accent" /></div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
            <a href="https://openpy.space/" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
              Create Secure Account <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SecurityPage;
