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

          <div className="flex flex-col gap-3 mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Download OpenPay</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://median.co/share/rdzamax#apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-foreground bg-card border border-border rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414C17.523 15.3414 17.561 15.3414 17.561 15.3034L17.523 15.3414ZM3.00024 2.99976H21.0002V19.9998H3.00024V2.99976Z"/>
                </svg>
                Android
              </a>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-muted-foreground bg-muted border border-border rounded-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                iOS (Coming Soon)
              </span>
              <a
                href="https://t.me/openpayofficialbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-foreground bg-card border border-border rounded-lg hover:bg-secondary transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram Bot
              </a>
            </div>
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
