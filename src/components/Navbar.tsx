import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-card-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">O</span>
          </div>
          <span className="text-xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            OpenPay
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#security" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Security</a>
          <a href="#currencies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Currencies</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Business</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://openpay-space.vercel.app/auth"
            className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
          >
            Log In
          </a>
          <a
            href="https://openpay-space.vercel.app/auth"
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign Up Free
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-muted-foreground">Features</a>
              <a href="#security" className="text-sm font-medium text-muted-foreground">Security</a>
              <a href="#currencies" className="text-sm font-medium text-muted-foreground">Currencies</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground">Business</a>
              <a href="https://openpay-space.vercel.app/auth" className="px-4 py-2 text-sm font-medium text-center text-primary-foreground bg-primary rounded-lg">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
