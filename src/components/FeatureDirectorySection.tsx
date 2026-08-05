import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet, PlusCircle, Store, MousePointerClick, QrCode, Image,
  Sparkles, ScrollText, Code2, ShieldCheck, LifeBuoy, Boxes, BookOpen, ArrowUpRight
} from "lucide-react";

const APP = "https://openpy.space";

type Item = { name: string; path: string };
type Category = { id: string; title: string; icon: typeof Wallet; items: Item[] };

const categories: Category[] = [
  {
    id: "wallet", title: "Core Wallet", icon: Wallet, items: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Send Money", path: "/send" },
      { name: "Send Pro", path: "/send/pro" },
      { name: "Transfer to OpenPay Pro", path: "/transfer-pro" },
      { name: "Receive", path: "/receive" },
      { name: "Request Payment", path: "/request-payment" },
      { name: "Scan QR", path: "/scan-qr" },
      { name: "Activity", path: "/activity" },
      { name: "Contacts", path: "/contacts" },
      { name: "Currency Converter", path: "/currency-converter" },
      { name: "Virtual Card", path: "/virtual-card" },
      { name: "Notifications", path: "/notifications" },
      { name: "Profile", path: "/profile" },
      { name: "Settings", path: "/settings" },
      { name: "Menu", path: "/menu" },
    ],
  },
  {
    id: "topup", title: "Top Up & Funding", icon: PlusCircle, items: [
      { name: "Top Up Hub", path: "/topup" },
      { name: "Top Up History", path: "/topup-history" },
      { name: "Credit Card", path: "/topup-credit" },
      { name: "Debit Card", path: "/topup-debit" },
      { name: "Stripe", path: "/topup-stripe" },
      { name: "PayPal", path: "/topup-paypal" },
      { name: "Venmo", path: "/topup-venmo" },
      { name: "Apple Pay", path: "/topup-apple-pay" },
      { name: "Google Pay", path: "/topup-google-pay" },
      { name: "E-Wallet / QRPH", path: "/topup-ewallet-qrph" },
      { name: "Solana Pay", path: "/topup-solana-pay" },
      { name: "USDT", path: "/topup-usdt" },
      { name: "USDC", path: "/topup-usdc" },
      { name: "OUSD", path: "/topup-ousd" },
      { name: "OUSD on Solana", path: "/topup-ousd-sol" },
      { name: "MRWN", path: "/topup-mrwn" },
      { name: "Master Top Up", path: "/master-topup" },
    ],
  },
  {
    id: "merchant", title: "Merchant & Business", icon: Store, items: [
      { name: "Merchant Onboarding", path: "/merchant-onboarding" },
      { name: "Merchant POS", path: "/merchant-pos" },
      { name: "Merchant Products", path: "/merchant-products" },
      { name: "Create Product", path: "/merchant-products/create" },
      { name: "Merchant Checkout", path: "/merchant-checkout" },
      { name: "Payment Links", path: "/payment-links/create" },
      { name: "Public Wallet Pay", path: "/public-payment" },
      { name: "Send Invoice", path: "/send-invoice" },
      { name: "Remittance Center", path: "/remittance-center" },
      { name: "Remittance Merchant", path: "/remittance-merchant" },
    ],
  },
  {
    id: "buttons", title: "Pay Buttons", icon: MousePointerClick, items: [
      { name: "Buttons Overview", path: "/buttons" },
      { name: "Payment Links Button", path: "/buttons/payment-links" },
      { name: "Cart Button", path: "/buttons/cart" },
      { name: "Donate Button", path: "/buttons/donate" },
      { name: "Subscribe Button", path: "/buttons/subscribe" },
      { name: "Embeds", path: "/buttons/embeds" },
    ],
  },
  {
    id: "qrpay", title: "QR Pay", icon: QrCode, items: [
      { name: "QR Pay Dashboard", path: "/qr-pay" },
      { name: "Create QR Payment", path: "/qr-pay/new" },
      { name: "QR Pay API", path: "/qr-pay/api" },
    ],
  },
  {
    id: "nft", title: "Web3 & OpenNFT", icon: Image, items: [
      { name: "NFT Home", path: "/web3/nft" },
      { name: "Create NFT", path: "/web3/nft/create" },
      { name: "My NFTs", path: "/web3/nft/my-nfts" },
      { name: "NFT Dashboard", path: "/web3/nft/dashboard" },
      { name: "Auctions", path: "/web3/nft/auctions" },
      { name: "Store Directory", path: "/web3/nft/stores" },
      { name: "My Store", path: "/web3/nft/store" },
      { name: "Store Settings", path: "/web3/nft/store/settings" },
      { name: "Leaderboard", path: "/web3/nft/leaderboard" },
      { name: "Stats", path: "/web3/nft/stats" },
      { name: "Gifts", path: "/web3/nft/gifts" },
      { name: "Following", path: "/web3/nft/following" },
      { name: "NFT Chat", path: "/web3/nft/chat" },
      { name: "How To", path: "/web3/nft/how-to" },
      { name: "NFT API", path: "/web3/nft/api" },
      { name: "Collectibles API", path: "/web3/nft/api/collectibles" },
    ],
  },
  {
    id: "earn", title: "Earn & Rewards", icon: Sparkles, items: [
      { name: "Mining", path: "/mining" },
      { name: "Pi Ads", path: "/pi-ads" },
      { name: "Staking", path: "/staking" },
      { name: "Swap Withdrawal", path: "/swap-withdrawal" },
      { name: "Affiliate Program", path: "/affiliate" },
      { name: "Feature Quest", path: "/feature-quest" },
    ],
  },
  {
    id: "ledger", title: "Transparency & Ledger", icon: ScrollText, items: [
      { name: "OpenLedger", path: "/openledger" },
      { name: "Ledger", path: "/ledger" },
      { name: "Ledger API Docs", path: "/developers/ledger" },
    ],
  },
  {
    id: "developers", title: "Developers & APIs", icon: Code2, items: [
      { name: "Developer Dashboard", path: "/developer-dashboard" },
      { name: "App Developer Dashboard", path: "/app-developer-dashboard" },
      { name: "OpenPay API Docs", path: "/openpay-api-docs" },
      { name: "Smart Contract API", path: "/smart-contract-api" },
      { name: "Partner API", path: "/partner-api" },
      { name: "Open Partner", path: "/open-partner" },
      { name: "OpenPay Auth (OAuth)", path: "/openpay-auth" },
      { name: "Auth Docs", path: "/auth/docs" },
      { name: "Connect", path: "/connect" },
    ],
  },
  {
    id: "identity", title: "Identity, Auth & Security", icon: ShieldCheck, items: [
      { name: "Auth Home", path: "/auth" },
      { name: "Sign In", path: "/sign-in" },
      { name: "Sign Up", path: "/signup" },
      { name: "OpenPay Sign In", path: "/signin/openpay" },
      { name: "Pi Login", path: "/auth/pi/login" },
      { name: "Onboarding", path: "/onboarding" },
      { name: "Setup Profile", path: "/setup-profile" },
      { name: "Confirm PIN", path: "/confirm-pin" },
      { name: "Forgot MPIN", path: "/forgot-mpin" },
      { name: "Forgot Password", path: "/forgot-password" },
      { name: "Two-Factor Auth", path: "/two-factor" },
      { name: "KYC", path: "/kyc" },
      { name: "KYC Status", path: "/kyc-status" },
      { name: "PiVerify KYC", path: "/kyc/piverify" },
    ],
  },
  {
    id: "support", title: "Support & Community", icon: LifeBuoy, items: [
      { name: "Help", path: "/help" },
      { name: "Help Center", path: "/help-center" },
      { name: "Support", path: "/support" },
      { name: "Live Customer Service", path: "/live-customer-service" },
      { name: "Disputes", path: "/disputes" },
      { name: "Feedback", path: "/feedback" },
      { name: "Announcements", path: "/announcements" },
      { name: "Socials", path: "/socials" },
      { name: "Blog", path: "/blog" },
      { name: "OpenPay AI Assistant", path: "/ai" },
    ],
  },
  {
    id: "apps", title: "Apps & Ecosystem", icon: Boxes, items: [
      { name: "OpenApp Utility Apps", path: "/openapp" },
      { name: "OpenPay Official", path: "/openpay-official" },
      { name: "OpenPay Desktop", path: "/openpay-desktop" },
      { name: "Download App", path: "/download" },
    ],
  },
  {
    id: "docs", title: "Documentation & Legal", icon: BookOpen, items: [
      { name: "About OpenPay", path: "/about-openpay" },
      { name: "User Guide", path: "/openpay-guide" },
      { name: "Documentation Hub", path: "/openpay-documentation" },
      { name: "POS Docs", path: "/openpay-pos-docs" },
      { name: "Merchant Portal Docs", path: "/openpay-merchant-portal-docs" },
      { name: "Whitepaper", path: "/whitepaper" },
      { name: "Pi Whitepaper", path: "/pi-whitepaper" },
      { name: "Pi MiCA Whitepaper", path: "/pi-mica-whitepaper" },
      { name: "Pitch Deck", path: "/pitch-deck" },
      { name: "Regulatory Status", path: "/regulatory-status" },
      { name: "Terms", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Legal", path: "/legal" },
      { name: "GDPR", path: "/gdpr" },
    ],
  },
];

const FeatureDirectorySection = () => {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="directory" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card shadow-card text-xs font-semibold text-foreground mb-6">
            Full directory
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground leading-[0.95]">
            Every feature,<br />
            <span className="text-accent">one directory.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl">
            Browse every public route in the OpenPay app, grouped by category. Each link opens the live product.
          </p>
        </motion.div>

        <div className="rounded-5xl bg-card shadow-card p-4 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  active === c.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <c.icon className="w-4 h-4" />
                {c.title}
              </button>
            ))}
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {current.items.map((it) => (
              <a
                key={it.path}
                href={`${APP}${it.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-3xl bg-secondary/60 hover:bg-primary hover:text-primary-foreground px-5 py-4 transition-colors"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground group-hover:text-primary-foreground truncate">{it.name}</span>
                  <span className="block text-xs text-muted-foreground group-hover:text-primary-foreground/70 truncate">{it.path}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDirectorySection;
