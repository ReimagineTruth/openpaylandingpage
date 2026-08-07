import { Link } from "react-router-dom";
import openPayLogo from "@/assets/openpay-logo.jpg";

type FooterLink = {
  label: string;
  to?: string;
  href?: string;
};

const Footer = () => {
  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: "Product",
      links: [
        { label: "Wallet", to: "/wallet" },
        { label: "OpenPay Pro", href: "https://openpaypro.space/" },
        { label: "OpenUSD", to: "/openusd" },
        { label: "Savings", to: "/savings" },
        { label: "Virtual Cards", to: "/cards" },
        { label: "Loans", to: "/loans" },
        { label: "Merchant POS", to: "/merchant" },
        { label: "QR Pay", to: "/qr-pay" },
        { label: "App Store Previews", to: "/app-store-previews" },
        { label: "Payments", to: "/payments" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Blog", to: "/blog" },
        { label: "Careers", to: "/careers" },
        { label: "Security", to: "/security" },
        { label: "Feedback", to: "/feedback" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms of Service", to: "/terms" },
        { label: "Compliance", to: "/compliance" },
        { label: "GDPR", to: "/gdpr" },
      ],
    },
  ];

  return (
    <footer className="bg-accent px-3 sm:px-6 pt-16 pb-6">
      <div className="max-w-7xl mx-auto bg-card rounded-5xl p-8 sm:p-14">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={openPayLogo} alt="OpenPay" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                Open<span className="text-accent">Pay</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Web3 digital currency payment platform powered by Pi Network. Send, receive, and manage Pi across 170+ currencies.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-foreground">Operational</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-muted-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to!} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-primary-foreground/70">© 2026 OpenPay. All rights reserved. Powered by Pi Network.</p>
        <div className="flex items-center gap-5">
          <a href="https://openpaypro.space/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            OpenPay Pro →
          </a>
          <a href="https://openpy.space/" className="text-xs font-semibold text-primary-foreground hover:opacity-80 transition-opacity">
            Launch App →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

