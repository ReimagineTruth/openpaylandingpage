import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import openPayLogo from "@/assets/openpay-logo.jpg";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Wallet", href: "/#wallet" },
  { label: "Merchant", href: "/#merchant" },
];

const routes = [
  { label: "QR Pay", to: "/qr-pay" },
  { label: "Blog", to: "/blog" },
  { label: "Business", to: "/merchant" },
  { label: "Security", to: "/security" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={openPayLogo} alt="OpenPay" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Open<span className="text-accent">Pay</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 bg-card/90 backdrop-blur-xl rounded-full px-3 py-2 shadow-card">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          {routes.map((r) => (
            <Link
              key={r.label}
              to={r.to}
              className="px-4 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
            >
              {r.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://openpy.space/auth"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-foreground bg-card/90 backdrop-blur-xl shadow-card hover:bg-card transition-colors"
          >
            Log In
          </a>
          <a
            href="https://openpy.space/auth"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-accent-foreground bg-accent hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Authenticate with Pi
          </a>
        </div>

        <button
          className="lg:hidden w-11 h-11 rounded-full bg-card shadow-card flex items-center justify-center text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto bg-card rounded-4xl shadow-elevated overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm font-semibold text-foreground/80" onClick={() => setIsOpen(false)}>
                  {l.label}
                </a>
              ))}
              {routes.map((r) => (
                <Link key={r.label} to={r.to} className="text-sm font-semibold text-foreground/80" onClick={() => setIsOpen(false)}>
                  {r.label}
                </Link>
              ))}
              <a href="https://openpaypro.space/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent" onClick={() => setIsOpen(false)}>
                Launch OpenPay Pro
              </a>
              <a href="https://openpy.space/auth" className="mt-1 px-4 py-3 text-sm font-semibold text-center text-accent-foreground bg-accent rounded-full" onClick={() => setIsOpen(false)}>
                Authenticate with Pi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
