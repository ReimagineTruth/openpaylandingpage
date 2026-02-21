import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, QrCode, CreditCard, Link2, FileText, ArrowRightLeft, Star, Store, PiggyBank, HandCoins, BarChart3, History, Globe, Monitor, Smartphone, Languages, ShoppingBag, Wallet, Eye, EyeOff, ChevronDown } from "lucide-react";
import openPayQR from "@/assets/openpay-qr.png";

const AppShowcaseSection = () => {
  const [activeWalletTab, setActiveWalletTab] = useState("Wallet");
  const [showBalance, setShowBalance] = useState(true);
  const [checkoutTab, setCheckoutTab] = useState("wallet");
  const [posAmount, setPosAmount] = useState("0.00");
  const [selectedCurrency, setSelectedCurrency] = useState("PI");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [savingsAction, setSavingsAction] = useState<"deposit" | "withdraw">("deposit");
  const [merchantTab, setMerchantTab] = useState("dashboard");
  const [activeLanguage, setActiveLanguage] = useState("English");

  const handlePosKey = (key: string) => {
    if (key === "DEL") {
      setPosAmount(prev => prev.length > 1 ? prev.slice(0, -1) : "0.00");
    } else if (key === "C") {
      setPosAmount("0.00");
    } else if (key === ".") {
      if (!posAmount.includes(".")) setPosAmount(prev => prev + ".");
    } else {
      setPosAmount(prev => prev === "0.00" ? key : prev + key);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const currencies = [
    { code: "PI", name: "Pi", flag: "π", rate: "1.00" },
    { code: "USD", name: "US Dollar", flag: "🇺🇸", rate: "3.15" },
    { code: "EUR", name: "Euro", flag: "🇪🇺", rate: "2.89" },
    { code: "GBP", name: "British Pound", flag: "🇬🇧", rate: "2.47" },
    { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", rate: "473.2" },
    { code: "KRW", name: "Korean Won", flag: "🇰🇷", rate: "4,215" },
    { code: "INR", name: "Indian Rupee", flag: "🇮🇳", rate: "263.5" },
    { code: "BRL", name: "Brazilian Real", flag: "🇧🇷", rate: "15.8" },
    { code: "AED", name: "UAE Dirham", flag: "🇦🇪", rate: "11.57" },
    { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", rate: "4,950" },
    { code: "PHP", name: "Philippine Peso", flag: "🇵🇭", rate: "178.5" },
    { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩", rate: "49,800" },
  ];

  const languages = ["English", "Español", "Français", "Deutsch", "中文", "日本語", "한국어", "العربية", "हिन्दी", "Português", "Русский", "Bahasa"];

  return (
    <section id="showcase" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">App Preview</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">Explore what you can do</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A complete fintech experience — from payments to invoicing, all inside one app.</p>
        </motion.div>

        {/* Row 1: Dashboard + Express Send */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Interactive Dashboard / Wallet */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><BarChart3 size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Dashboard & Wallet</h3>
                <p className="text-xs text-muted-foreground">Your complete Pi financial overview</p>
              </div>
            </div>
            <div className="bg-accent rounded-2xl p-5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-white/70 text-xs mb-0.5">Good morning, OpenPay! 👋</p>
                  <p className="text-white/60 text-[10px]">@openpay</p>
                </div>
                <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
                  <span className="text-white text-[10px] font-semibold">π PI</span>
                </div>
              </div>
              {/* Interactive Wallet tabs */}
              <div className="flex gap-1 bg-white/10 rounded-lg p-0.5 mb-4">
                {["Wallet", "Savings", "Credit", "Loans", "Cards"].map((t) => (
                  <button key={t} onClick={() => setActiveWalletTab(t)} className={`flex-1 text-center text-[9px] py-1.5 rounded-md font-semibold transition-all duration-300 ${activeWalletTab === t ? "bg-white text-accent shadow-sm" : "text-white/60 hover:text-white/80"}`}>{t}</button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={activeWalletTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="bg-white/10 rounded-xl p-4 mb-3">
                  {activeWalletTab === "Wallet" && (
                    <>
                      <div className="flex gap-2 mb-2">
                        <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded-full">Personal wallet</span>
                        <span className="text-[9px] text-white/50 px-2 py-0.5 rounded-full cursor-pointer hover:text-white/70">Merchant wallet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-white text-2xl font-bold">{showBalance ? "π346.59" : "π••••••"}</p>
                        <button onClick={() => setShowBalance(!showBalance)} className="text-white/60 hover:text-white transition-colors">
                          {showBalance ? <Eye size={14} /> : <EyeOff size={14} />}
                        </button>
                      </div>
                      <p className="text-white/60 text-[10px]">Balance - PI</p>
                    </>
                  )}
                  {activeWalletTab === "Savings" && (
                    <>
                      <p className="text-white text-2xl font-bold">π1,000.00</p>
                      <p className="text-white/60 text-[10px]">Savings balance</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-green-300 text-xs font-bold">↑ 4.50% APY</span>
                        <span className="text-white/40 text-[10px]">Earning daily</span>
                      </div>
                    </>
                  )}
                  {activeWalletTab === "Credit" && (
                    <>
                      <p className="text-white text-2xl font-bold">π500.00</p>
                      <p className="text-white/60 text-[10px]">Available credit</p>
                      <div className="mt-2 w-full bg-white/10 rounded-full h-1.5"><div className="bg-green-400 h-1.5 rounded-full w-1/3" /></div>
                    </>
                  )}
                  {activeWalletTab === "Loans" && (
                    <>
                      <p className="text-white text-2xl font-bold">π850.00</p>
                      <p className="text-white/60 text-[10px]">Available to borrow</p>
                      <span className="text-green-300 text-xs font-bold mt-1 inline-block">3.5% APR</span>
                    </>
                  )}
                  {activeWalletTab === "Cards" && (
                    <>
                      <p className="text-white/60 text-[10px] mb-1">Virtual Card</p>
                      <p className="text-white text-sm font-mono tracking-wider">**** **** **** 4242</p>
                      <p className="text-white/60 text-[10px] mt-1">Linked to wallet · Active</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="flex gap-2">
                {["Pay", "Receive", "Top Up"].map((a, i) => (
                  <motion.a key={a} href="https://openpay-space.vercel.app/auth" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex-1 py-2 rounded-full text-center text-[10px] font-semibold cursor-pointer transition-all ${i === 0 ? "bg-white text-accent" : "bg-white/10 text-white hover:bg-white/20"}`}>{a}</motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Express Send */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Send size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Express Send</h3>
                <p className="text-xs text-muted-foreground">Send Pi instantly to anyone</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 space-y-3">
              <motion.div whileHover={{ scale: 1.01 }} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-accent/30 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">S</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">sarah_pi</p>
                  <p className="text-[10px] text-muted-foreground">@sarah_pi · Pi Mainnet</p>
                </div>
                <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">Selected</span>
              </motion.div>
              <div className="p-3 rounded-lg bg-background border border-border">
                <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                <p className="text-xl font-bold text-foreground">π50.00</p>
                <p className="text-[10px] text-muted-foreground">≈ $157.50 USD</p>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border">
                <p className="text-[10px] text-muted-foreground mb-1">Currency</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">π PI</span>
                  <span className="text-xs text-muted-foreground">USD · EUR · GBP · +170 more</span>
                </div>
              </div>
              <motion.a href="https://openpay-space.vercel.app/auth" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block w-full py-3 rounded-full bg-accent text-white text-sm font-semibold text-center cursor-pointer">Send π50.00</motion.a>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Checkout Link (like uploaded screenshots) + Merchant Portal Desktop */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Checkout Link - Detailed */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Link2 size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Checkout Link</h3>
                <p className="text-xs text-muted-foreground">Accept payments with shareable links</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl overflow-hidden">
              {/* Checkout header */}
              <div className="px-5 py-4 border-b border-border">
                <p className="text-xs text-muted-foreground">🛒 Checkout</p>
                <p className="text-sm font-bold text-foreground mt-1">OpenPay Organization</p>
                <p className="text-2xl font-bold text-foreground mt-1">π100.00 PI</p>
                <p className="text-xs text-accent mt-1">OpenPay Payment</p>
              </div>
              {/* Confirm and pay */}
              <div className="p-5">
                <p className="text-sm font-bold text-foreground mb-3">Confirm and pay</p>
                <div className="flex gap-2 mb-4">
                  <button onClick={() => setCheckoutTab("card")} className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${checkoutTab === "card" ? "bg-accent text-white border-2 border-accent" : "border border-border text-foreground hover:bg-secondary"}`}>
                    <CreditCard size={12} /> Virtual Card
                  </button>
                  <button onClick={() => setCheckoutTab("wallet")} className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${checkoutTab === "wallet" ? "bg-accent text-white border-2 border-accent" : "border border-border text-foreground hover:bg-secondary"}`}>
                    <Wallet size={12} /> OpenPay Wallet
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  {checkoutTab === "card" ? (
                    <motion.div key="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                      <div>
                        <p className="text-[10px] text-muted-foreground mb-1">Virtual card number</p>
                        <div className="p-2.5 rounded-lg border border-border bg-background text-sm text-muted-foreground">1234 1234 1234 1234</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div><p className="text-[10px] text-muted-foreground mb-1">Expiration</p><div className="p-2.5 rounded-lg border border-border bg-background text-sm text-muted-foreground">MM / YY</div></div>
                        <div><p className="text-[10px] text-muted-foreground mb-1">CVC</p><div className="p-2.5 rounded-lg border border-border bg-background text-sm text-muted-foreground">CVC</div></div>
                      </div>
                      <p className="text-[10px] text-accent">Use only OpenPay Virtual Card for this payment method.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="wallet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                      <div className="border border-border rounded-xl p-3">
                        <p className="text-xs font-semibold text-foreground mb-2">🔲 Scan with OpenPay wallet app</p>
                        <div className="flex justify-center">
                          <img src={openPayQR} alt="OpenPay QR Code" className="w-32 h-32 object-contain" />
                        </div>
                        <p className="text-[10px] text-muted-foreground text-center mt-2">Amount: π100.00 PI</p>
                      </div>
                      <motion.a href="https://openpay-space.vercel.app/auth" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block w-full py-2.5 rounded-full bg-accent text-white text-xs font-semibold text-center">Open / send in OpenPay</motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-3 space-y-2">
                  <div className="p-2.5 rounded-lg border border-border bg-background">
                    <p className="text-[10px] text-muted-foreground mb-1">Pay currency (170+ OpenPay currencies)</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground flex items-center gap-1">π PI PI - Pi</span>
                      <ChevronDown size={14} className="text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                    <span className="text-xs font-semibold text-foreground">Due today</span>
                    <span className="text-xs font-bold text-accent">π100.00 PI</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">🔒 SSL Secure Payment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Merchant Portal Desktop View */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Monitor size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Merchant Portal</h3>
                <p className="text-xs text-muted-foreground">Desktop dashboard for businesses</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl overflow-hidden">
              {/* Top bar */}
              <div className="bg-accent px-3 py-1.5 flex items-center justify-between">
                <span className="text-white/70 text-[9px]">You are testing in sandbox. Switch to live when ready.</span>
                <div className="flex gap-1">
                  <span className="text-[8px] bg-white/20 text-white px-2 py-0.5 rounded-full">Sandbox</span>
                  <span className="text-[8px] text-white/60 px-2 py-0.5">Live</span>
                </div>
              </div>
              <div className="flex">
                {/* Sidebar */}
                <div className="w-28 bg-background border-r border-border p-2 space-y-1">
                  <p className="text-[8px] font-bold text-muted-foreground mb-2 px-1">OPENPAY</p>
                  <p className="text-[8px] font-bold text-foreground px-1">Merchant Portal</p>
                  {["Home", "Balances", "Transactions", "Customers", "Products", "API keys", "Checkout links", "Analytics", "POS"].map((item, i) => (
                    <button key={item} onClick={() => setMerchantTab(item.toLowerCase())} className={`w-full text-left text-[8px] px-1.5 py-1 rounded transition-colors ${i === 0 ? "bg-accent/10 text-accent font-semibold" : "text-muted-foreground hover:text-foreground"}`}>{item}</button>
                  ))}
                </div>
                {/* Main content */}
                <div className="flex-1 p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="text-xs font-bold text-foreground">Home</p>
                      <p className="text-[8px] text-muted-foreground">OpenPay Organization @openpay</p>
                    </div>
                  </div>
                  <p className="text-[8px] text-muted-foreground mb-1">Today</p>
                  <p className="text-xs font-bold text-foreground mb-2">Sandbox overview</p>
                  <div className="grid grid-cols-4 gap-1.5 mb-3">
                    {[
                      { label: "Gross volume", value: "PI USD 0.00" },
                      { label: "Available", value: "PI USD 0.00" },
                      { label: "Payments", value: "0" },
                      { label: "Wallet balance", value: "PI USD 899.00" },
                    ].map(s => (
                      <div key={s.label} className="bg-background rounded-lg p-1.5 border border-border">
                        <p className="text-[7px] text-muted-foreground">{s.label}</p>
                        <p className="text-[9px] font-bold text-foreground">{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[8px] font-bold text-foreground mb-1.5">Quick setup</p>
                  <div className="grid grid-cols-2 gap-1">
                    {["1. Create API key", "2. Add products", "3. Create checkout link", "4. Payment link builder", "5. Track payments"].map(s => (
                      <div key={s} className={`text-[7px] py-1.5 px-2 rounded-lg text-center font-semibold ${s.includes("1.") ? "bg-accent text-white" : "border border-border text-foreground"}`}>{s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Savings + POS Interactive */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Savings Interactive */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><PiggyBank size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Savings</h3>
                <p className="text-xs text-muted-foreground">Earn 4.50% APY on your Pi</p>
              </div>
            </div>
            <div className="bg-accent rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center"><PiggyBank size={16} className="text-white" /></div>
                <div>
                  <p className="text-white text-2xl font-bold">π1,000.00</p>
                  <p className="text-white/60 text-xs">Savings balance</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-white/60 text-[10px] font-semibold tracking-wider">WALLET BALANCE</p>
                <p className="text-white font-bold text-sm">π346.59</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-white/60 text-[10px] font-semibold tracking-wider">SAVINGS BALANCE</p>
                <p className="text-white font-bold text-sm">π1,000.00</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-white/60 text-[10px] font-semibold tracking-wider">ESTIMATED APY</p>
                <p className="text-green-300 font-bold text-sm">4.50%</p>
              </div>
              <div className="flex gap-2 mt-2">
                <button onClick={() => setSavingsAction("deposit")} className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${savingsAction === "deposit" ? "bg-white text-accent" : "bg-white/10 text-white"}`}>Deposit</button>
                <button onClick={() => setSavingsAction("withdraw")} className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${savingsAction === "withdraw" ? "bg-white text-accent" : "bg-white/10 text-white"}`}>Withdraw</button>
              </div>
            </div>
          </motion.div>

          {/* Merchant POS Interactive */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Store size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Merchant POS</h3>
                <p className="text-xs text-muted-foreground">Accept Pi payments in-store</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
              <div className="bg-accent rounded-lg px-3 py-2 flex justify-between items-center">
                <div>
                  <p className="text-white font-bold text-xs">OpenPay Merchant POS</p>
                  <p className="text-white/70 text-[10px]">@openpay</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-[9px]">Balance</p>
                  <p className="text-white font-bold text-xs">899.00 PI</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-background rounded-lg p-2.5 border border-border">
                  <p className="text-[9px] text-muted-foreground">Today total</p>
                  <p className="text-sm font-bold text-foreground">π{posAmount}</p>
                </div>
                <div className="bg-background rounded-lg p-2.5 border border-border">
                  <p className="text-[9px] text-muted-foreground">Transactions</p>
                  <p className="text-sm font-bold text-foreground">0</p>
                </div>
              </div>
              {/* Interactive numpad */}
              <div className="bg-background rounded-lg p-3 border border-border">
                <p className="text-[10px] text-muted-foreground mb-1">Enter amount</p>
                <p className="text-xl font-bold text-foreground mb-2">{posAmount}</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {["1","2","3","4","5","6","7","8","9",".","0","DEL"].map(k => (
                    <motion.button key={k} whileTap={{ scale: 0.9 }} onClick={() => handlePosKey(k)} className="bg-secondary rounded-lg py-2 text-xs font-semibold text-foreground hover:bg-accent/10 transition-colors">{k}</motion.button>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => setPosAmount("0.00")} className="flex-1 py-2 rounded-lg border border-border text-xs font-semibold text-foreground">Clear</button>
                  <motion.a href="https://openpay-space.vercel.app/auth" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 py-2 rounded-lg bg-green-500 text-white text-xs font-semibold text-center">Generate QR</motion.a>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={openPayQR} alt="OpenPay QR" className="w-20 h-20 object-contain" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 4: Virtual Card + QR / Request */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Virtual Card */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><CreditCard size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Virtual Card</h3>
                <p className="text-xs text-muted-foreground">Spend Pi anywhere online</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 flex justify-center">
              <motion.div whileHover={{ rotateY: 5, scale: 1.02 }} transition={{ duration: 0.3 }} className="w-[280px] h-[170px] rounded-2xl bg-accent p-5 relative overflow-hidden shadow-elevated cursor-pointer">
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-white/60" /></div>
                      <div>
                        <p className="text-[8px] opacity-60 tracking-[0.2em] uppercase">OpenPay</p>
                        <p className="text-[10px] font-semibold">Virtual Credit Card</p>
                      </div>
                    </div>
                    <CreditCard size={16} className="opacity-60" />
                  </div>
                  <div className="w-10 h-7 rounded bg-white/20" />
                  <p className="text-sm tracking-[0.25em] font-mono">* * * *  * * * *  * * * *  4242</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] opacity-50 uppercase tracking-wider">Cardholder</p>
                      <p className="text-[10px] font-semibold">OPENPAY USER</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] opacity-50 uppercase tracking-wider">Valid Thru</p>
                      <p className="text-[10px] font-semibold">02/30</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Request Payment QR with Real QR */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><QrCode size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Request Payment / QR</h3>
                <p className="text-xs text-muted-foreground">Printable store QR code</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 text-center">
              <div className="w-48 h-48 mx-auto mb-3 rounded-2xl border-2 border-accent p-3 bg-white flex items-center justify-center">
                <img src={openPayQR} alt="OpenPay QR Code" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm font-bold text-accent mb-0.5">OpenPay</p>
              <p className="text-xs font-semibold text-foreground mb-1">OpenPay Store</p>
              <p className="text-[10px] text-muted-foreground mb-3">SCAN TO PAY · Manual payment available in OpenPay app<br/>Powered by OpenPay</p>
              <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1 py-2 rounded-full border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors">Download QR</motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1 py-2 rounded-full border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors">Print Store QR</motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 5: Invoicing + 170+ Currency Selection */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Invoicing */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><FileText size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Invoicing</h3>
                <p className="text-xs text-muted-foreground">Professional invoices in seconds</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-border">
                <div>
                  <p className="text-base font-bold text-foreground">Invoice #0042</p>
                  <p className="text-xs text-muted-foreground">From: @openpay</p>
                  <p className="text-[10px] text-muted-foreground">Feb 20, 2026</p>
                </div>
                <motion.span animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">Paid ✓</motion.span>
              </div>
              <div className="space-y-2 mb-4">
                {[{ item: "Web Design Services", amount: "π100.00" }, { item: "Logo Design", amount: "π50.00" }, { item: "Consultation (2hrs)", amount: "π20.00" }].map(l => (
                  <div key={l.item} className="flex justify-between text-xs py-2 border-b border-border">
                    <span className="text-muted-foreground">{l.item}</span>
                    <span className="font-semibold text-foreground">{l.amount}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-accent/5 border border-accent/20">
                <span className="text-sm font-bold text-foreground">Total</span>
                <span className="text-sm font-bold text-accent">π170.00</span>
              </div>
            </div>
          </motion.div>

          {/* 170+ Currency Selection */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><ArrowRightLeft size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">170+ Currencies</h3>
                <p className="text-xs text-muted-foreground">Global currency conversion</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-1.5 max-h-[340px] overflow-y-auto">
              {currencies.map((c) => (
                <motion.button key={c.code} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} onClick={() => setSelectedCurrency(c.code)} className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${selectedCurrency === c.code ? "bg-accent/10 border border-accent/30" : "bg-background border border-border hover:border-accent/20"}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{c.flag}</span>
                    <div className="text-left">
                      <p className="text-xs font-bold text-foreground">{c.code}</p>
                      <p className="text-[10px] text-muted-foreground">{c.name}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold ${selectedCurrency === c.code ? "text-accent" : "text-muted-foreground"}`}>{c.rate}</span>
                </motion.button>
              ))}
              <p className="text-[10px] text-muted-foreground text-center pt-2">+ 158 more currencies supported</p>
            </div>
          </motion.div>
        </div>

        {/* Row 6: Language + Loans + OpenApp Integration */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Language Translation */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Languages size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Multi-Language</h3>
                <p className="text-xs text-muted-foreground">Available in 12+ languages</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-1.5 max-h-[280px] overflow-y-auto">
              {languages.map(lang => (
                <motion.button key={lang} whileTap={{ scale: 0.97 }} onClick={() => setActiveLanguage(lang)} className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeLanguage === lang ? "bg-accent text-white" : "bg-background border border-border text-foreground hover:border-accent/30"}`}>{lang}</motion.button>
              ))}
            </div>
          </motion.div>

          {/* Loans */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><HandCoins size={18} className="text-accent" /></div>
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
              {[{ l: "Loan amount", v: "π500.00" }, { l: "Interest rate", v: "3.5% APR", green: true }, { l: "Repayment", v: "π504.79", accent: true }].map(item => (
                <div key={item.l} className={`flex justify-between items-center p-3 rounded-lg ${item.accent ? "bg-accent/10 border border-accent/20" : "bg-background border border-border"}`}>
                  <span className="text-xs text-muted-foreground">{item.l}</span>
                  <span className={`text-xs font-bold ${item.green ? "text-green-600" : item.accent ? "text-accent" : "text-foreground"}`}>{item.v}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] text-accent font-semibold">Coming Soon</span>
              </div>
            </div>
          </motion.div>

          {/* OpenApp Integration */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><ShoppingBag size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">OpenApp Integration</h3>
                <p className="text-xs text-muted-foreground">Pay for any utility via OpenPay</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
              {[
                { name: "Electricity Bill", icon: "⚡", amount: "π45.00", status: "Pay Now" },
                { name: "Mobile Recharge", icon: "📱", amount: "π15.00", status: "Pay Now" },
                { name: "Internet Plan", icon: "🌐", amount: "π30.00", status: "Pay Now" },
                { name: "Water Bill", icon: "💧", amount: "π22.00", status: "Pay Now" },
                { name: "Gas Bill", icon: "🔥", amount: "π18.50", status: "Pay Now" },
              ].map(app => (
                <motion.div key={app.name} whileHover={{ scale: 1.01 }} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border cursor-pointer hover:border-accent/30 transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{app.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-foreground">{app.name}</p>
                      <p className="text-[10px] text-muted-foreground">{app.amount}</p>
                    </div>
                  </div>
                  <motion.span whileHover={{ scale: 1.05 }} className="text-[10px] bg-accent text-white px-3 py-1 rounded-full font-semibold cursor-pointer">{app.status}</motion.span>
                </motion.div>
              ))}
              <p className="text-[10px] text-muted-foreground text-center pt-1">Use OpenPay as wallet for all OpenApp payments</p>
            </div>
          </motion.div>
        </div>

        {/* Row 7: MPIN Security + Desktop & Mobile Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Security MPIN */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Star size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">MPIN Security</h3>
                <p className="text-xs text-muted-foreground">Bank-grade protection</p>
              </div>
            </div>
            <div className="bg-accent rounded-xl overflow-hidden">
              <div className="px-4 py-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-white/60" /></div>
                  <span className="text-white font-bold text-sm">OpenPay</span>
                </div>
                <p className="text-white text-sm font-bold mb-1">Good morning</p>
                <div className="bg-white/10 rounded-full px-4 py-1 inline-block mb-3"><p className="text-white text-xs">@openpay</p></div>
              </div>
              <div className="bg-background mx-3 mb-3 rounded-xl p-4">
                <p className="text-xs font-bold text-foreground text-center mb-3">Enter your MPIN</p>
                <div className="border-2 border-accent/50 rounded-xl p-2 text-center mb-2"><p className="text-muted-foreground text-xs">Enter PIN</p></div>
                <div className="flex justify-center gap-2 mb-3">
                  {[0,1,2,3].map(i => <motion.div key={i} animate={{ scale: [1, 1.2, 1] }} transition={{ delay: i * 0.2, repeat: Infinity, duration: 2 }} className="w-2.5 h-2.5 rounded-full border-2 border-accent" />)}
                </div>
                <button className="w-full py-2 bg-secondary rounded-lg text-xs font-semibold text-foreground mb-1">Unlock with MPIN</button>
                <p className="text-[10px] text-muted-foreground text-center">or use Biometric / Password</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop & Mobile Showcase */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Monitor size={18} className="text-accent" /></div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Desktop & Mobile</h3>
                <p className="text-xs text-muted-foreground">Use OpenPay on any device</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="flex gap-4 items-end justify-center">
                {/* Desktop */}
                <div className="flex-1">
                  <div className="bg-background rounded-lg border border-border overflow-hidden shadow-sm">
                    <div className="bg-accent h-1.5" />
                    <div className="p-2">
                      <div className="flex items-center gap-1 mb-2">
                        <Monitor size={10} className="text-accent" />
                        <span className="text-[7px] font-bold text-foreground">openpay-space.vercel.app</span>
                      </div>
                      <div className="bg-accent/5 rounded p-1.5">
                        <p className="text-[7px] font-bold text-foreground">Dashboard</p>
                        <p className="text-[6px] text-muted-foreground">@openpay</p>
                        <p className="text-[9px] font-bold text-accent mt-1">π346.59</p>
                        <div className="flex gap-1 mt-1">
                          {["Pay", "Send", "Top Up"].map(a => (
                            <span key={a} className="text-[5px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full">{a}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[9px] text-muted-foreground text-center mt-2">Desktop App</p>
                </div>
                {/* Mobile */}
                <div className="w-24">
                  <div className="bg-background rounded-xl border-2 border-border overflow-hidden shadow-sm">
                    <div className="bg-accent h-1.5 flex justify-center"><div className="w-8 h-0.5 bg-white/30 rounded-full mt-0.5" /></div>
                    <div className="p-1.5">
                      <div className="bg-accent rounded-lg p-1.5 mb-1">
                        <p className="text-[6px] text-white/70">@openpay</p>
                        <p className="text-[8px] font-bold text-white">π346.59</p>
                      </div>
                      <div className="flex gap-0.5">
                        {["Pay", "Recv"].map(a => (
                          <span key={a} className="flex-1 text-[5px] bg-accent/10 text-accent py-0.5 rounded text-center">{a}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[9px] text-muted-foreground text-center mt-2">Mobile App</p>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-4">Access OpenPay from any browser — fully responsive on all devices</p>
            </div>
          </motion.div>
        </div>

        {/* Recommended Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4">
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
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="bg-card rounded-2xl border border-border p-6 shadow-card hover:border-accent/40 hover:shadow-elevated transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><r.icon size={18} className="text-accent" /></div>
                  <span className="text-[10px] bg-accent/10 text-accent px-2 py-1 rounded-full font-semibold">{r.badge}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{r.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.desc}</p>
                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={r.href} className="block w-full py-2.5 rounded-full bg-accent text-white text-sm font-semibold text-center hover:opacity-90 transition-opacity">{r.cta}</motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
