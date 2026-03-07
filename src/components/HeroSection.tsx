import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/15 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent">Powered by Pi Network</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            The smarter way{" "}
            <br />
            to <span className="text-gradient">pay with Pi.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Send, receive, and manage Pi across 170+ currencies. Web3 payments made simple, fast, and secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://openpy.space/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-accent-foreground bg-accent rounded-full hover:opacity-90 transition-all duration-300 shadow-elevated"
            >
              Get Started Free
              <ArrowRight size={18} />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-300"
            >
              See How It Works
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Bank-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">Instant transfers</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Globe size={16} className="text-accent" />
              <span className="text-sm text-muted-foreground">170+ currencies</span>
            </div>
          </div>
        </motion.div>

        {/* Right - App UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* Dashboard mockup */}
          <div className="w-full max-w-[420px] bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-hero px-5 py-6 text-primary-foreground">
              <p className="text-xs opacity-70 mb-1">Good afternoon!</p>
              <p className="text-sm font-semibold">@openpay</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold">π204.99</span>
                <span className="text-xs opacity-60">Balance · PI</span>
              </div>
            </div>
            {/* Action buttons */}
            <div className="px-5 py-4 flex gap-3">
              {["Pay", "Receive", "Top Up"].map((action, i) => (
                <div
                  key={action}
                  className={`flex-1 py-2.5 rounded-full text-center text-xs font-semibold ${
                    i === 0
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-foreground"
                  }`}
                >
                  {action}
                </div>
              ))}
            </div>
            {/* Recent Activity */}
            <div className="px-5 pb-5">
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-semibold text-foreground">Recent activity</p>
                <span className="text-xs text-accent font-medium">See more →</span>
              </div>
              {[
                { name: "OpenPay", user: "@openpay", amount: "+π100.00", date: "Feb 19, 2026" },
                { name: "Express Send", user: "@john", amount: "-π25.50", date: "Feb 18, 2026" },
              ].map((tx) => (
                <div key={tx.user + tx.amount} className="flex items-center justify-between py-2.5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-accent">{tx.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{tx.name}</p>
                      <p className="text-[10px] text-muted-foreground">{tx.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-foreground'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
