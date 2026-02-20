import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, PiggyBank, TrendingUp, Shield, Clock } from "lucide-react";

const SavingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">OpenPay Savings</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Grow your Pi <span className="text-gradient">automatically</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Earn up to 4.50% APY on your Pi savings. Move funds from wallet to savings instantly.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
              {/* Savings balance card */}
              <div className="bg-accent p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <PiggyBank size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs">Savings balance</p>
                    <p className="text-white text-3xl font-bold">π1,155,859.20</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-white/60 text-[10px] font-semibold tracking-wider">WALLET BALANCE</p>
                    <p className="text-white font-bold">π346.59</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-white/60 text-[10px] font-semibold tracking-wider">SAVINGS BALANCE</p>
                    <p className="text-white font-bold">π1,155,859.20</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-white/60 text-[10px] font-semibold tracking-wider">ESTIMATED APY</p>
                    <p className="text-white font-bold text-green-300">4.50%</p>
                  </div>
                </div>
              </div>

              {/* Move to savings */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-4">Move wallet to savings</h3>
                <div className="p-3 rounded-xl border border-border mb-3">
                  <p className="text-muted-foreground text-sm">Amount (PI)</p>
                </div>
                <a href="https://openpay-space.vercel.app/auth" className="block w-full py-3.5 bg-accent text-white text-center rounded-xl font-semibold">
                  Move to Savings
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 text-center">
              <a href="https://openpay-space.vercel.app/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Start Saving <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, title: "4.50% APY", desc: "Competitive yield on your Pi savings balance, updated in real-time." },
              { icon: Clock, title: "Instant Access", desc: "Move funds between wallet and savings at any time with no lock-up." },
              { icon: Shield, title: "Fully Protected", desc: "Your savings are protected by OpenPay's bank-grade security layer." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><f.icon size={18} className="text-accent" /></div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SavingsPage;
