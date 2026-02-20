import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CreditCard, Eye, Lock, Settings, BookOpen, Shield, FileText } from "lucide-react";

const CardsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Virtual Cards</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Spend Pi <span className="text-gradient">everywhere</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your OpenPay virtual card is linked to your Pi balance. Use it online globally.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground">←</button>
                  <h2 className="font-bold text-foreground">OpenPay Virtual Card</h2>
                </div>
              </div>

              <div className="p-5">
                {/* Balance info */}
                <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-muted-foreground">Your virtual card is linked to your OpenPay balance:</p>
                  <p className="text-xl font-bold text-foreground mt-1">π346.59</p>
                </div>

                {/* Virtual Card */}
                <div className="bg-accent rounded-2xl p-5 mb-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-white" />
                          </div>
                          <span className="text-white/80 text-xs font-semibold tracking-widest">OPENPAY</span>
                        </div>
                        <p className="text-white text-sm font-bold">Virtual Credit Card</p>
                      </div>
                      <CreditCard size={20} className="text-white/60" />
                    </div>
                    <div className="w-12 h-8 rounded bg-white/20 mb-4" />
                    <p className="text-white tracking-[0.3em] font-mono text-sm mb-4">* * * *  * * * *  * * * *  * * * *</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/50 text-[9px] uppercase tracking-wider">Cardholder</p>
                        <p className="text-white font-bold text-sm">OPENPAY USER</p>
                        <p className="text-white/60 text-[10px]">@hidden</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/50 text-[9px] uppercase tracking-wider">Valid Thru</p>
                        <p className="text-white font-bold text-sm">02/30</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card actions */}
                <button className="w-full py-3 rounded-xl border border-border text-sm font-medium text-foreground mb-4 flex items-center justify-center gap-2">
                  <span>↺</span> Show Back of Card
                </button>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[{ icon: BookOpen, label: "Guide" }, { icon: Shield, label: "Safety Agreement" }, { icon: FileText, label: "API docs" }].map(a => (
                    <button key={a.label} className="py-2.5 rounded-xl border border-border text-[10px] text-muted-foreground flex flex-col items-center gap-1">
                      <a.icon size={14} />
                      {a.label}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[{ icon: Eye, label: "Show Details" }, { icon: Lock, label: "Unlock Card" }, { icon: Settings, label: "Settings" }].map(a => (
                    <button key={a.label} className="py-2.5 rounded-xl border border-border text-[10px] text-muted-foreground flex flex-col items-center gap-1">
                      <a.icon size={14} />
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 text-center">
              <a href="https://openpay-space.vercel.app/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Get Your Virtual Card <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CardsPage;
