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

export const PREVIEW_SCREENS: PreviewScreen[] = [
  { id: "auth", n: "01", title: "Auth", feature: "Authenticate with Pi", file: "01-auth.png", group: "Onboarding", href: `${APP}/auth` },
  { id: "kyc", n: "02", title: "KYC", feature: "Identity verification", file: "02-kyc.png", group: "Onboarding", href: `${APP}/auth/kyc` },
  { id: "wallet", n: "03", title: "Wallet", feature: "Dashboard balance", file: "03-wallet.png", group: "Wallet", href: `${APP}/auth/dashboard` },
  { id: "assets", n: "04", title: "Assets", feature: "Token balances", file: "04-assets.png", group: "Wallet", href: `${APP}/auth/assets` },
  { id: "savings", n: "05", title: "Savings", feature: "Grow & move funds", file: "05-savings.png", group: "Wallet", href: `${APP}/auth/savings` },
  { id: "send", n: "06", title: "Send", feature: "Express Send / Pay", file: "06-send.png", group: "Payments", href: `${APP}/auth/send` },
  { id: "receive", n: "07", title: "Receive", feature: "QR receive money", file: "07-receive.png", group: "Payments", href: `${APP}/auth/receive` },
  { id: "request", n: "08", title: "Request", feature: "Request payment", file: "08-request.png", group: "Payments", href: `${APP}/auth/request-payment` },
  { id: "invoice", n: "09", title: "Invoice", feature: "Send invoice", file: "09-invoice.png", group: "Payments", href: `${APP}/auth/send-invoice` },
  { id: "scan", n: "10", title: "Scan QR", feature: "Scan to pay", file: "10-scan.png", group: "Payments", href: `${APP}/auth/scan-qr` },
  { id: "qrpay", n: "11", title: "QR Pay", feature: "Create QR payments", file: "11-qrpay.png", group: "Payments", href: `${APP}/qr-pay` },
  { id: "buy", n: "12", title: "Buy OUSD", feature: "Top up OpenUSD", file: "12-buy.png", group: "Money", href: `${APP}/auth/top-up` },
  { id: "withdraw", n: "13", title: "Withdraw", feature: "OUSD payout", file: "13-withdraw.png", group: "Money", href: `${APP}/auth/swap-withdrawal` },
  { id: "send-pro", n: "14", title: "Send to Pro", feature: "OpenPay → Pro", file: "14-send-pro.png", group: "Money", href: `${APP}/auth/send/pro` },
  { id: "converter", n: "15", title: "Converter", feature: "Currency converter", file: "15-converter.png", group: "Money", href: `${APP}/auth/currency-converter` },
  { id: "mining", n: "16", title: "Mining", feature: "Engage Mining + ads", file: "16-mining.png", group: "Earn", href: `${APP}/auth/mining` },
  { id: "staking", n: "17", title: "Staking", feature: "Stake & earn", file: "17-staking.png", group: "Earn", href: `${APP}/auth/staking` },
  { id: "affiliate", n: "18", title: "Affiliate", feature: "Invite & earn", file: "18-affiliate.png", group: "Earn", href: `${APP}/auth/affiliate` },
  { id: "credit", n: "19", title: "Credit", feature: "Credit score", file: "19-credit.png", group: "Banking", href: `${APP}/auth/credit` },
  { id: "loans", n: "20", title: "Loans", feature: "Borrow & repay", file: "20-loans.png", group: "Banking", href: `${APP}/auth/loans` },
  { id: "card", n: "21", title: "Virtual Card", feature: "OpenPay card", file: "21-card.png", group: "Banking", href: `${APP}/auth/virtual-card` },
  { id: "rates", n: "22", title: "Live Rates", feature: "PI + OUSD rates", file: "22-rates.png", group: "Market", href: `${APP}/auth/currency-converter` },
  { id: "menu", n: "23", title: "Menu", feature: "Services hub", file: "23-menu.png", group: "Market", href: `${APP}/auth/menu` },
  { id: "ai", n: "24", title: "OpenPay AI", feature: "Financial assistant", file: "24-ai.png", group: "Tools", href: `${APP}/ai` },
  { id: "nft", n: "25", title: "OpenNFT", feature: "NFT marketplace", file: "25-nft.png", group: "Tools", href: `${APP}/web3/nft` },
  { id: "pos", n: "26", title: "Merchant POS", feature: "In-person payments", file: "26-pos.png", group: "Merchant", href: `${APP}/auth/merchant-pos` },
  { id: "activity", n: "27", title: "Activity", feature: "Recent transactions", file: "27-activity.png", group: "Account", href: `${APP}/auth/activity` },
  { id: "notifications", n: "28", title: "Alerts", feature: "Notifications", file: "28-notifications.png", group: "Account", href: `${APP}/auth/notifications` },
  { id: "profile", n: "29", title: "Profile", feature: "Account & KYC", file: "29-profile.png", group: "Account", href: `${APP}/auth/profile` },
];

export const FEATURE_BULLETS = [
  { label: "Pi Auth", detail: "Sign in with Pi, Pro, or email" },
  { label: "OUSD Wallet", detail: "Dollar-pegged OpenUSD balances" },
  { label: "Assets", detail: "Wallet, Savings, Mining, Pro tokens" },
  { label: "Send & Receive", detail: "Express Pay + QR" },
  { label: "QR Pay", detail: "Merchant checkout links" },
  { label: "Buy & Withdraw", detail: "Pi, cards, crypto, Pro bridge" },
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
