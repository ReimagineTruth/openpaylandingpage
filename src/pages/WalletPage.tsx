import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Wallet, PiggyBank, CreditCard, HandCoins, Send, QrCode, TrendingUp, Eye, EyeOff, RefreshCw } from "lucide-react";
import { useState } from "react";

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState("wallet");
  const [showBalance, setShowBalance] = useState(true);
  const tabs = ["Wallet", "Savings", "Credit", "Loans", "Cards"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">OpenPay Wallet</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Your complete <span className="text-gradient">Pi wallet</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Manage your Pi, savings, loans, and cards from one powerful dashboard.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            {/* App mockup */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
              {/* Header */}
              <div className="bg-accent px-5 pt-6 pb-8">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">π</span>
                    </div>
                    <span className="text-white/80 text-sm font-medium">PI ▾</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><RefreshCw size={14} className="text-white" /></div>
                  </div>
                </div>
                <p className="text-white font-bold text-xl mb-0.5">Good morning, OpenPay! 👋</p>
                <p className="text-white/70 text-sm">@openpay</p>
              </div>

              {/* Tabs */}
              <div className="px-4 -mt-4">
                <div className="bg-background rounded-xl p-1 flex gap-1 shadow-card">
                  {tabs.map(t => (
                    <button key={t} onClick={() => setActiveTab(t.toLowerCase())} className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === t.toLowerCase() ? "bg-accent text-white" : "text-muted-foreground"}`}>{t}</button>
                  ))}
                </div>
              </div>

              <div className="p-5">
                {/* Wallet card */}
                <div className="bg-accent rounded-2xl p-5 mb-4">
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold">Personal wallet</span>
                    <span className="text-xs text-white/60 px-3 py-1 rounded-full">Merchant wallet</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-xs">π</span>
                    </div>
                    <span className="text-white text-3xl font-bold">{showBalance ? "π346.59" : "π••••••"}</span>
                  </div>
                  <p className="text-white/60 text-xs mb-4">Balance - PI</p>
                  <button onClick={() => setShowBalance(!showBalance)} className="flex items-center gap-2 bg-white/10 text-white text-xs px-4 py-2 rounded-full ml-auto">
                    {showBalance ? <Eye size={12} /> : <EyeOff size={12} />}
                    {showBalance ? "Hide balance" : "Show balance"}
                  </button>
                </div>

                {/* Account info */}
                <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                  <p className="text-[10px] text-muted-foreground font-semibold tracking-wider mb-2">OPENPAY ACCOUNT</p>
                  <p className="text-sm font-bold text-foreground">OpenPay</p>
                  <p className="text-xs text-muted-foreground mb-2">@piuser</p>
                  <p className="text-[10px] text-muted-foreground font-mono break-all">0PEA68BB7A9F964994A199A15786D680FA</p>
                  <button className="w-full mt-3 py-2 rounded-lg border border-border text-xs font-medium text-foreground">📋 Copy</button>
                  <button className="w-full mt-2 py-2.5 rounded-xl bg-accent text-white text-sm font-semibold">Open Virtual Card</button>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {[{ label: "Pay", primary: true }, { label: "Receive", primary: false }, { label: "Top Up", primary: false }].map(btn => (
                    <a key={btn.label} href="https://openpay-space.vercel.app/auth" className={`flex-1 py-3 rounded-full text-center text-xs font-semibold transition-all ${btn.primary ? "bg-accent text-white" : "border border-border text-foreground hover:bg-secondary"}`}>{btn.label}</a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 text-center">
              <a href="https://openpay-space.vercel.app/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Open Your Wallet <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Features grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Wallet, title: "Personal & Merchant Wallet", desc: "Switch between personal and merchant wallets seamlessly." },
              { icon: PiggyBank, title: "Savings with APY", desc: "Earn 4.50% APY on your Pi savings balance automatically." },
              { icon: TrendingUp, title: "Real-time Balance", desc: "Always see up-to-date balances across all your accounts." },
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

export default WalletPage;
