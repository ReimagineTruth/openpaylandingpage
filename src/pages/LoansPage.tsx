import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, HandCoins, Clock, ShieldCheck, Percent } from "lucide-react";

const LoansPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">OpenPay Loans</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Pi-backed <span className="text-gradient">instant loans</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Borrow against your Pi balance with competitive rates. Fast approval, no credit check.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated p-6">
              <div className="bg-accent rounded-2xl p-5 mb-5">
                <p className="text-white/70 text-xs mb-1">Available to borrow</p>
                <p className="text-white text-3xl font-bold">π850.00</p>
                <p className="text-white/60 text-xs mt-1">Based on your wallet & savings balance</p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-xl">
                  <span className="text-sm text-muted-foreground">Loan amount</span>
                  <span className="text-sm font-bold text-foreground">π500.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-xl">
                  <span className="text-sm text-muted-foreground">Interest rate</span>
                  <span className="text-sm font-bold text-green-600">3.5% APR</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-xl">
                  <span className="text-sm text-muted-foreground">Term</span>
                  <span className="text-sm font-bold text-foreground">30 days</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <span className="text-sm font-semibold text-foreground">Total repayment</span>
                  <span className="text-sm font-bold text-accent">π504.79</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="p-3 rounded-xl border border-border mb-3">
                  <p className="text-muted-foreground text-sm">Enter loan amount (PI)</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-accent font-semibold">Coming Soon</span>
              </div>

              <a href="https://openpy.space/" className="block w-full py-3.5 bg-accent text-white text-center rounded-xl font-semibold opacity-60 cursor-not-allowed">
                Apply for Loan
              </a>
            </motion.div>
          </div>

          <div className="mt-20 grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: HandCoins, title: "Pi-Backed", desc: "Use your Pi balance as collateral for instant loans." },
              { icon: Clock, title: "Instant Approval", desc: "Get approved in seconds, no paperwork required." },
              { icon: Percent, title: "Low Rates", desc: "Competitive APR starting from 3.5% on Pi loans." },
              { icon: ShieldCheck, title: "Secure", desc: "All loan transactions secured and verified on Pi Network." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-5 border border-border">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3"><f.icon size={18} className="text-accent" /></div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoansPage;
