import { PREVIEW_FRAMES } from "@/components/app-store-previews/featureFrames";
import { OPENLEDGER_TX_URL } from "@/lib/explorerLinks";

export type PreviewGroup =
  | "Onboarding"
  | "Wallet"
  | "Payments"
  | "Money"
  | "Earn"
  | "Banking"
  | "Market"
  | "Tools"
  | "Merchant"
  | "Account";

export type PreviewScreen = {
  id: string;
  n: string;
  title: string;
  feature: string;
  file: string;
  group: PreviewGroup;
  href: string;
};

export const PREVIEW_GROUPS: PreviewGroup[] = [
  "Onboarding",
  "Wallet",
  "Payments",
  "Money",
  "Earn",
  "Banking",
  "Market",
  "Tools",
  "Merchant",
  "Account",
];

const APP = "https://openpy.space";

const HREF: Record<string, string> = {
  auth: `${APP}/auth`,
  kyc: `${APP}/auth/kyc`,
  "two-factor": `${APP}/auth/settings`,
  wallet: `${APP}/auth/dashboard`,
  assets: `${APP}/auth/assets`,
  savings: `${APP}/auth/savings`,
  openusd: `${APP}/openusd`,
  send: `${APP}/auth/send`,
  request: `${APP}/auth/request-payment`,
  invoice: `${APP}/auth/send-invoice`,
  scan: `${APP}/scan-qr`,
  "scan-help": `${APP}/scan-qr`,
  qrpay: `${APP}/qr-pay`,
  contacts: `${APP}/auth/contacts`,
  "pi-topup": `${APP}/auth/top-up`,
  paypal: `${APP}/auth/topup-paypal`,
  "google-pay": `${APP}/auth/topup-google-pay`,
  stripe: `${APP}/topup-apple-pay`,
  usdt: `${APP}/auth/topup-usdt`,
  usdc: `${APP}/auth/topup-usdc`,
  "pro-topup": `${APP}/auth/send/pro`,
  withdraw: `${APP}/auth/swap-withdrawal`,
  "pi-tx": OPENLEDGER_TX_URL,
  converter: `${APP}/auth/currency-converter`,
  "topup-history": `${APP}/auth/topup-history`,
  mining: `${APP}/auth/mining`,
  staking: `${APP}/auth/staking`,
  affiliate: `${APP}/auth/affiliate`,
  "pi-ads": `${APP}/auth/mining`,
  quest: `${APP}/auth/dashboard`,
  credit: `${APP}/auth/credit`,
  loans: `${APP}/auth/loans`,
  card: `${APP}/auth/virtual-card`,
  banks: `${APP}/bank-transfer`,
  remittance: `${APP}/auth/remittance-center`,
  rates: `${APP}/auth/currency-converter`,
  analytics: `${APP}/auth/dashboard`,
  ai: `${APP}/ai`,
  nft: `${APP}/web3/nft`,
  developers: `${APP}/auth/developer-dashboard`,
  "partner-api": `${APP}/openpay-api-docs`,
  webhooks: `${APP}/openpay-api-docs`,
  ledger: `${APP}/openledger`,
  pos: `${APP}/auth/merchant-pos`,
  "merchant-hub": `${APP}/auth/merchant-onboarding`,
  "payment-links": `${APP}/auth/payment-links/create`,
  products: `${APP}/auth/merchant-products`,
  buttons: `${APP}/buttons`,
  activity: `${APP}/auth/activity`,
  notifications: `${APP}/auth/notifications`,
  profile: `${APP}/auth/profile`,
  settings: `${APP}/auth/settings`,
  "support-chat": `${APP}/auth/support`,
  help: `${APP}/auth/help`,
  announcements: `${APP}/blog`,
  about: `${APP}/auth/about`,
  disputes: `${APP}/auth/disputes`,
  "app-marketplace": `${APP}/auth/app-payments`,
  guide: `${APP}/blog`,
  "support-channels": `${APP}/auth/support`,
};

export const PREVIEW_SCREENS: PreviewScreen[] = PREVIEW_FRAMES.map((f, i) => ({
  id: f.id,
  n: String(i + 1).padStart(2, "0"),
  title: f.title,
  feature: f.feature,
  file: f.file,
  group: f.group as PreviewGroup,
  href: HREF[f.id] ?? `${APP}/auth`,
}));

export const FEATURE_BULLETS = [
  { label: "Pi Auth", detail: "Sign in with Pi, Pro, or email" },
  { label: "OUSD Wallet", detail: "Dollar-pegged OpenUSD balances" },
  { label: "One-camera Scan", detail: "OpenPay, Pro, QR Pay, QR Ph" },
  { label: "Send & Receive", detail: "Express Pay + QR" },
  { label: "QR Pay", detail: "Merchant checkout links" },
  { label: "Buy & Withdraw", detail: "Pi, cards, Apple Pay, crypto, Pro" },
  { label: "Mining", detail: "Daily rewards with KYC + ads" },
  { label: "Credit & Loans", detail: "Score, borrow, repay" },
  { label: "Virtual Card", detail: "Spend from your wallet" },
  { label: "OpenPay AI", detail: "Financial assistant" },
  { label: "OpenNFT", detail: "Mint & collect" },
  { label: "Merchant POS", detail: "In-person OUSD charges" },
];

export const TRUST_STRIP = ["OUSD $1 peg", "Live PI rates", "KYC", "Pi Browser", "OpenPay Pro"];
export const MERCHANT_STRIP = ["QR Pay", "POS", "Payment links", "Invoices"];
export const EARN_STRIP = ["Mining", "Staking", "Affiliate"];
