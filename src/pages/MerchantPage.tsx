import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Store, BarChart3, RefreshCw, History, Settings, CreditCard } from "lucide-react";

const MerchantPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Merchant POS</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Accept Pi <span className="text-gradient">payments anywhere</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full merchant dashboard with POS, transaction history, refunds, and analytics — all in one place.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
              {/* POS Header */}
              <div className="bg-accent px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">OpenPay Merchant POS</p>
                    <p className="text-white/70 text-xs">@piuser</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-[10px]">Balance</p>
                  <p className="text-white font-bold text-sm">346.59 PI</p>
                </div>
              </div>

              <div className="p-5">
                {/* Dashboard stats */}
                <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                  <p className="text-xs font-bold text-foreground mb-3">Dashboard</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background rounded-xl p-3">
                      <p className="text-[10px] text-muted-foreground mb-1">Today total</p>
                      <p className="text-base font-bold text-foreground">π200.00 PI</p>
                    </div>
                    <div className="bg-background rounded-xl p-3">
                      <p className="text-[10px] text-muted-foreground mb-1">Transactions</p>
                      <p className="text-base font-bold text-foreground">2</p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-2 mb-4">
                  <button className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold text-sm flex items-center justify-center gap-2">
                    <CreditCard size={16} /> Receive Payment
                  </button>
                  <button className="w-full py-3 rounded-xl bg-accent text-white font-semibold text-sm flex items-center justify-center gap-2">
                    <History size={16} /> Transaction History
                  </button>
                  <button className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm flex items-center justify-center gap-2">
                    <RefreshCw size={16} /> Refund / Cancel
                  </button>
                  <button className="w-full py-3 rounded-xl bg-secondary border border-border font-semibold text-sm flex items-center justify-center gap-2 text-foreground">
                    <Settings size={16} /> Settings
                  </button>
                </div>

                {/* Receive payment section */}
                <div className="bg-secondary/50 rounded-2xl p-4">
                  <p className="text-sm font-bold text-foreground mb-3">Receive Payment</p>
                  <div className="flex gap-2 mb-3">
                    <button className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground">❓ POS Instructions</button>
                    <button className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground">Setup API Key</button>
                  </div>
                  <div className="flex justify-end mb-2">
                    <span className="text-xs bg-background border border-border rounded-lg px-2 py-1 text-foreground">Live ⌄</span>
                  </div>
                  <div className="bg-background rounded-lg px-3 py-2 mb-3 text-xs text-muted-foreground border border-border">PI PI - Pi ⌄</div>
                  <div className="bg-background border border-border rounded-xl p-3 mb-3">
                    <p className="text-[10px] text-muted-foreground">Enter amount</p>
                    <p className="text-2xl font-bold text-foreground">0.00</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6,7,8,9].map(n => (
                      <button key={n} className="bg-background border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground">{n}</button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 text-center">
              <a href="https://openpay-space.vercel.app/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Start Accepting Pi <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BarChart3, title: "Real-time Analytics", desc: "Track daily revenue, transaction counts, and payment trends instantly." },
              { icon: RefreshCw, title: "Easy Refunds", desc: "Process refunds and cancellations with one tap from the POS dashboard." },
              { icon: Store, title: "Multi-location", desc: "Manage multiple store locations and merchant wallets from one account." },
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

export default MerchantPage;
