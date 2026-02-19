import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse" />
            <span className="text-xs font-medium text-blue-glow">Powered by Pi Network</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6">
            Pay easy,{" "}
            <span className="text-gradient">fast,</span>
            <br />
            and secure.
          </h1>

          <p className="text-lg md:text-xl text-blue-glow/70 max-w-lg mb-8 leading-relaxed">
            Web3 digital currency payment wallet with 170+ currency conversions. Send, receive, and manage Pi — anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://openpay-space.vercel.app/auth"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card rounded-xl hover:shadow-elevated transition-all duration-300"
            >
              Get Started Free
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground border border-primary-foreground/20 rounded-xl hover:bg-primary-foreground/5 transition-all duration-300"
            >
              Explore Features
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-cyan-accent" />
              <span className="text-sm text-blue-glow/60">Bank-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-cyan-accent" />
              <span className="text-sm text-blue-glow/60">Instant transfers</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Globe size={16} className="text-cyan-accent" />
              <span className="text-sm text-blue-glow/60">170+ currencies</span>
            </div>
          </div>
        </motion.div>

        {/* Right - phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative">
            <img
              src={phoneMockup}
              alt="OpenPay wallet showing Pi balance"
              className="w-64 md:w-72 rounded-[2.5rem] shadow-elevated animate-float"
            />
            <img
              src={phoneMockup2}
              alt="OpenPay QR code scanner"
              className="absolute -right-16 top-20 w-48 md:w-56 rounded-[2rem] shadow-elevated animate-float-delayed"
            />
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-8 bottom-20 bg-card rounded-2xl p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center">
                  <span className="text-primary-foreground text-lg">π</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Balance</p>
                  <p className="text-sm font-bold text-foreground">π204.99</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
