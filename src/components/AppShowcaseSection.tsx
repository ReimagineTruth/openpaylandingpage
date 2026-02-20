import { motion } from "framer-motion";
import { Send, QrCode, CreditCard, Link2, FileText, ArrowRightLeft, Star, Store, PiggyBank, HandCoins, BarChart3, History } from "lucide-react";

const AppShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">App Preview</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Explore what you can do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete fintech experience — from payments to invoicing, all inside one app.
          </p>
        </motion.div>

        {/* Row 1: Dashboard + Express Send */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Dashboard / Wallet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <BarChart3 size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Dashboard & Wallet</h3>
                <p className="text-xs text-muted-foreground">Your complete Pi financial overview</p>
              </div>
            </div>
            <div className="bg-accent rounded-2xl p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-white/70 text-xs mb-0.5">Good morning, OpenPay! 👋</p>
                  <p className="text-white/60 text-[10px]">@piuser</p>
                </div>
                <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                  <span className="text-white text-[10px] font-semibold">π PI</span>
                </div>
              </div>
              {/* Wallet tabs */}
              <div className="flex gap-1 bg-white/10 rounded-lg p-0.5 mb-4">
                {["Wallet", "Savings", "Credit", "Loans", "Cards"].map((t, i) => (
                  <span key={t} className={`flex-1 text-center text-[9px] py-1 rounded-md font-semibold ${i === 0 ? "bg-white text-accent" : "text-white/60"}`}>{t}</span>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-4 mb-3">
                <div className="flex gap-2 mb-2">
                  <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-full">Personal wallet</span>
                  <span className="text-[9px] text-white/50 px-2 py-0.5 rounded-full">Merchant wallet</span>
                </div>
                <p className="text-white text-2xl font-bold">π346.59</p>
                <p className="text-white/60 text-[10px]">Balance - PI</p>
              </div>
              <div className="flex gap-2">
                {["Pay", "Receive", "Top Up"].map((a, i) => (
                  <div key={a} className={`flex-1 py-2 rounded-full text-center text-[10px] font-semibold ${i === 0 ? "bg-white text-accent" : "bg-white/10 text-white"}`}>{a}</div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Express Send */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Send size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Express Send</h3>
                <p className="text-xs text-muted-foreground">Send Pi instantly to anyone</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">S</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">sarah_pi</p>
                  <p className="text-[10px] text-muted-foreground">@sarah_pi · Pi Mainnet</p>
                </div>
                <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">Selected</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border">
                <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                <p className="text-xl font-bold text-foreground">π50.00</p>
                <p className="text-[10px] text-muted-foreground">≈ $157.50 USD</p>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border">
                <p className="text-[10px] text-muted-foreground mb-1">Currency</p>
                <div className="flex gap-2">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">π PI</span>
                  <span className="text-xs text-muted-foreground">USD · EUR · GBP · +170 more</span>
                </div>
              </div>
              <div className="w-full py-3 rounded-full bg-accent text-white text-sm font-semibold text-center">
                Send π50.00
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Savings + Merchant POS */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <PiggyBank size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Savings</h3>
                <p className="text-xs text-muted-foreground">Earn 4.50% APY on your Pi</p>
              </div>
            </div>
            <div className="bg-accent rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <PiggyBank size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-2xl font-bold">π1,155,859.20</p>
                  <p className="text-white/60 text-xs">Savings balance</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-white/60 text-[10px] font-semibold tracking-wider">WALLET BALANCE</p>
                <p className="text-white font-bold text-sm">π346.59</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-white/60 text-[10px] font-semibold tracking-wider">SAVINGS BALANCE</p>
                <p className="text-white font-bold text-sm">π1,155,859.20</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-white/60 text-[10px] font-semibold tracking-wider">ESTIMATED APY</p>
                <p className="text-green-300 font-bold text-sm">4.50%</p>
              </div>
            </div>
          </motion.div>

          {/* Merchant POS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Store size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Merchant POS</h3>
                <p className="text-xs text-muted-foreground">Accept Pi payments in-store</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
              {/* POS header */}
              <div className="bg-accent rounded-lg px-3 py-2 flex justify-between items-center">
                <div>
                  <p className="text-white font-bold text-xs">OpenPay Merchant POS</p>
                  <p className="text-white/70 text-[10px]">@piuser</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-[9px]">Balance</p>
                  <p className="text-white font-bold text-xs">346.59 PI</p>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background rounded-lg p-2.5 border border-border">
                  <p className="text-[9px] text-muted-foreground">Today total</p>
                  <p className="text-sm font-bold text-foreground">π200.00</p>
                </div>
                <div className="bg-background rounded-lg p-2.5 border border-border">
                  <p className="text-[9px] text-muted-foreground">Transactions</p>
                  <p className="text-sm font-bold text-foreground">2</p>
                </div>
              </div>
              {/* Action buttons */}
              <div className="space-y-1.5">
                <div className="w-full py-2 rounded-lg bg-green-500 text-white text-xs font-semibold text-center">💳 Receive Payment</div>
                <div className="w-full py-2 rounded-lg bg-accent text-white text-xs font-semibold text-center">🕐 Transaction History</div>
                <div className="w-full py-2 rounded-lg bg-orange-500 text-white text-xs font-semibold text-center">↩ Refund / Cancel</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Checkout Link + Virtual Card */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Checkout Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Link2 size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Checkout & Payment Links</h3>
                <p className="text-xs text-muted-foreground">Accept payments with shareable links</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="flex gap-2 mb-4">
                <div className="flex-1 py-2 rounded-lg bg-accent text-white border-2 border-accent text-center text-xs font-semibold">OpenPay Wallet</div>
                <div className="flex-1 py-2 rounded-lg bg-background border border-border text-center text-xs font-medium text-foreground">Card</div>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Pay currency (170+ OpenPay currencies)</p>
                  <p className="text-sm font-medium text-foreground">PI - Pi ▾</p>
                </div>
                <div className="p-3 rounded-lg bg-background border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                  <p className="text-xl font-bold text-foreground">π25.00</p>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <span className="text-sm font-semibold text-foreground">Due today</span>
                  <span className="text-sm font-bold text-accent">π25.00 PI</span>
                </div>
                <div className="w-full py-3 rounded-full bg-accent text-white text-sm font-semibold text-center">
                  Pay with OpenPay
                </div>
              </div>
            </div>
          </motion.div>

          {/* Virtual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <CreditCard size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Virtual Card</h3>
                <p className="text-xs text-muted-foreground">Spend Pi anywhere online</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 flex justify-center">
              <div className="w-[280px] h-[170px] rounded-2xl bg-accent p-5 relative overflow-hidden shadow-elevated">
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white/60" />
                      </div>
                      <div>
                        <p className="text-[8px] opacity-60 tracking-[0.2em] uppercase">OpenPay</p>
                        <p className="text-[10px] font-semibold">Virtual Credit Card</p>
                      </div>
                    </div>
                    <CreditCard size={16} className="opacity-60" />
                  </div>
                  <div className="w-10 h-7 rounded bg-white/20" />
                  <p className="text-sm tracking-[0.25em] font-mono">* * * *  * * * *  * * * *  * * * *</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] opacity-50 uppercase tracking-wider">Cardholder</p>
                      <p className="text-[10px] font-semibold">OPENPAY USER</p>
                      <p className="text-[9px] opacity-50">@hidden</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] opacity-50 uppercase tracking-wider">Valid Thru</p>
                      <p className="text-[10px] font-semibold">02/30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 4: QR / Request + Invoice */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Request Payment QR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <QrCode size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Request Payment / QR</h3>
                <p className="text-xs text-muted-foreground">Printable store QR code</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 text-center">
              <div className="w-48 h-48 mx-auto mb-3 rounded-2xl border-2 border-accent p-3 bg-white flex items-center justify-center relative">
                <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-[1.5px]">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`rounded-[1px] ${[0,1,2,3,4,5,6,7,8,14,15,21,22,28,29,35,36,42,43,49,50,56,57,58,59,60,61,62,63].includes(i) ? 'bg-accent' : Math.random() > 0.45 ? 'bg-foreground' : 'bg-transparent'}`} />
                  ))}
                </div>
                <div className="absolute w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">π</span>
                </div>
              </div>
              <p className="text-sm font-bold text-accent mb-0.5">OpenPay</p>
              <p className="text-xs font-semibold text-foreground mb-1">OpenPay Store</p>
              <p className="text-[10px] text-muted-foreground mb-3">SCAN TO PAY · Manual payment available in OpenPay app<br/>Powered by OpenPay</p>
              <div className="flex gap-2">
                <div className="flex-1 py-2 rounded-full border border-border text-xs font-medium text-foreground">Download Printable QR</div>
                <div className="flex-1 py-2 rounded-full border border-border text-xs font-medium text-foreground">Print Store QR</div>
              </div>
            </div>
          </motion.div>

          {/* Invoicing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <FileText size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Invoicing</h3>
                <p className="text-xs text-muted-foreground">Professional invoices in seconds</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-border">
                <div>
                  <p className="text-base font-bold text-foreground">Invoice #0042</p>
                  <p className="text-xs text-muted-foreground">From: @piuser</p>
                  <p className="text-[10px] text-muted-foreground">Feb 20, 2026</p>
                </div>
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">Paid ✓</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs py-2 border-b border-border">
                  <span className="text-muted-foreground">Web Design Services</span>
                  <span className="font-semibold text-foreground">π100.00</span>
                </div>
                <div className="flex justify-between text-xs py-2 border-b border-border">
                  <span className="text-muted-foreground">Logo Design</span>
                  <span className="font-semibold text-foreground">π50.00</span>
                </div>
                <div className="flex justify-between text-xs py-2">
                  <span className="text-muted-foreground">Consultation (2hrs)</span>
                  <span className="font-semibold text-foreground">π20.00</span>
                </div>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-accent/5 border border-accent/20">
                <span className="text-sm font-bold text-foreground">Total</span>
                <span className="text-sm font-bold text-accent">π170.00</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 5: Loans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Loans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <HandCoins size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Loans</h3>
                <p className="text-xs text-muted-foreground">Pi-backed instant loans</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
              <div className="bg-accent rounded-xl p-4">
                <p className="text-white/70 text-xs">Available to borrow</p>
                <p className="text-white text-xl font-bold">π850.00</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border">
                <span className="text-xs text-muted-foreground">Loan amount</span>
                <span className="text-xs font-bold text-foreground">π500.00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border">
                <span className="text-xs text-muted-foreground">Interest rate</span>
                <span className="text-xs font-bold text-green-600">3.5% APR</span>
              </div>
              <div className="flex justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                <span className="text-xs font-semibold text-foreground">Repayment</span>
                <span className="text-xs font-bold text-accent">π504.79</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] text-accent font-semibold">Coming Soon</span>
              </div>
            </div>
          </motion.div>

          {/* Currency Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <ArrowRightLeft size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">170+ Currencies</h3>
                <p className="text-xs text-muted-foreground">Global currency conversion</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
              {[
                { code: "PI", name: "Pi", flag: "π", rate: "1.00", selected: true },
                { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: "3.15" },
                { code: "EUR", name: "Euro", flag: "🇪🇺", rate: "2.89" },
                { code: "GBP", name: "British Pound", flag: "🇬🇧", rate: "2.47" },
                { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", rate: "473.2" },
              ].map((c) => (
                <div key={c.code} className={`flex items-center justify-between p-3 rounded-lg ${c.selected ? "bg-accent/10 border border-accent/30" : "bg-background border border-border"}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{c.flag}</span>
                    <div>
                      <p className="text-xs font-bold text-foreground">{c.code}</p>
                      <p className="text-[10px] text-muted-foreground">{c.name}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold ${c.selected ? "text-accent" : "text-muted-foreground"}`}>{c.rate}</span>
                </div>
              ))}
              <p className="text-[10px] text-muted-foreground text-center pt-1">+ 165 more currencies supported</p>
            </div>
          </motion.div>

          {/* Security MPIN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Star size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">MPIN Security</h3>
                <p className="text-xs text-muted-foreground">Bank-grade protection</p>
              </div>
            </div>
            <div className="bg-accent rounded-xl overflow-hidden">
              <div className="px-4 py-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white/60" />
                  </div>
                  <span className="text-white font-bold text-sm">OpenPay</span>
                </div>
                <p className="text-white text-sm font-bold mb-1">Good morning</p>
                <div className="bg-white/10 rounded-full px-4 py-1 inline-block mb-3">
                  <p className="text-white text-xs">@piuser</p>
                </div>
              </div>
              <div className="bg-background mx-3 mb-3 rounded-xl p-4">
                <p className="text-xs font-bold text-foreground text-center mb-3">Enter your MPIN</p>
                <div className="border-2 border-accent/50 rounded-xl p-2 text-center mb-2">
                  <p className="text-muted-foreground text-xs">Enter PIN</p>
                </div>
                <div className="flex justify-center gap-2 mb-3">
                  {[0,1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full border-2 border-accent" />)}
                </div>
                <button className="w-full py-2 bg-secondary rounded-lg text-xs font-semibold text-foreground mb-1">Unlock with MPIN</button>
                <p className="text-[10px] text-muted-foreground text-center">or use Biometric / Password</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recommended Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <div className="flex items-center gap-2 mb-6">
            <Star size={18} className="text-accent" />
            <h3 className="text-xl font-bold text-foreground">Recommended for you</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Store, title: "Set Up Merchant POS", desc: "Accept Pi payments for your business with a full merchant dashboard, real-time analytics, and easy refunds.", cta: "Get Merchant Access", href: "https://openpay-space.vercel.app/auth", badge: "Popular" },
              { icon: PiggyBank, title: "Activate Savings", desc: "Move your Pi to savings and start earning 4.50% APY instantly. No minimum, no lock-up period.", cta: "Start Saving", href: "https://openpay-space.vercel.app/auth", badge: "Earn Yield" },
              { icon: CreditCard, title: "Get Your Virtual Card", desc: "Link your Pi balance to a virtual card and spend Pi online globally without any conversion hassle.", cta: "Activate Card", href: "https://openpay-space.vercel.app/auth", badge: "New" },
            ].map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 shadow-card hover:border-accent/40 hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <r.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded-full font-semibold">{r.badge}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{r.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.desc}</p>
                <a href={r.href} className="block w-full py-2.5 rounded-full bg-accent text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity">
                  {r.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
