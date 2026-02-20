import { Link } from "react-router-dom";
import openPayLogo from "@/assets/openpay-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={openPayLogo} alt="OpenPay" className="w-7 h-7 rounded-lg object-cover" />
            <span className="text-lg font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Open<span className="text-accent">Pay</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Web3 digital currency payment platform powered by Pi Network. Send, receive, and manage Pi across 170+ currencies.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>

        {[
          {
            title: "Product",
            links: [
              { label: "Wallet", to: "/wallet" },
              { label: "Savings", to: "/savings" },
              { label: "Virtual Cards", to: "/cards" },
              { label: "Loans", to: "/loans" },
              { label: "Merchant POS", to: "/merchant" },
              { label: "Payments", to: "/payments" },
            ]
          },
          {
            title: "Company",
            links: [
              { label: "About", to: "/about" },
              { label: "Blog", to: "/blog" },
              { label: "Careers", to: "/careers" },
              { label: "Security", to: "/security" },
            ]
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Compliance", to: "/terms" },
              { label: "GDPR", to: "/privacy" },
            ]
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 OpenPay. All rights reserved. Powered by Pi Network.</p>
        <div className="flex items-center gap-4">
          <a href="https://openpay-space.vercel.app/auth" className="text-xs text-accent font-semibold hover:opacity-80 transition-opacity">
            Launch App →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
