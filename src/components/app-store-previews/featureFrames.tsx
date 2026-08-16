import type { ReactNode } from "react";
import {
  AboutLatestFrame,
  ActivityLatestFrame,
  AffiliateLatestFrame,
  AiLatestFrame,
  AnalyticsLatestFrame,
  AnnouncementsLatestFrame,
  AppMarketplaceLatestFrame,
  AssetsLatestFrame,
  AuthLatestFrame,
  BanksListLatestFrame,
  ButtonsLatestFrame,
  CardLatestFrame,
  ContactsLatestFrame,
  ConverterLatestFrame,
  CreditLatestFrame,
  DevelopersLatestFrame,
  DisputesLatestFrame,
  FeatureQuestLatestFrame,
  GooglePayLatestFrame,
  GuideLatestFrame,
  HelpCenterLatestFrame,
  InvoiceLatestFrame,
  KycLatestFrame,
  LedgerLatestFrame,
  LoansLatestFrame,
  MerchantHubLatestFrame,
  MiningLatestFrame,
  NftLatestFrame,
  NotificationsLatestFrame,
  OpenUsdLatestFrame,
  PartnerApiLatestFrame,
  PaymentLinksLatestFrame,
  PaypalLatestFrame,
  PiActivityLatestFrame,
  PiAdsLatestFrame,
  PiNotificationsLatestFrame,
  PiReceiptLatestFrame,
  PiSetupLatestFrame,
  PiThankYouLatestFrame,
  PiTopUpLatestFrame,
  PosLatestFrame,
  ProductsLatestFrame,
  ProfileLatestFrame,
  ProTopUpLatestFrame,
  QrPayLatestFrame,
  RatesLatestFrame,
  RemittanceLatestFrame,
  RequestLatestFrame,
  SavingsLatestFrame,
  ScanHelpLatestFrame,
  ScanLatestFrame,
  ScanPiLatestFrame,
  SendLatestFrame,
  SendPiFormLatestFrame,
  SendPiHubLatestFrame,
  SettingsLatestFrame,
  StakingLatestFrame,
  StripeLatestFrame,
  SupportChannelsLatestFrame,
  SupportChatLatestFrame,
  TopUpHistoryLatestFrame,
  TwoFactorLatestFrame,
  UsdcLatestFrame,
  UsdtLatestFrame,
  WalletLatestFrame,
  WebhooksLatestFrame,
  WithdrawLatestFrame,
} from "./latestFrames";

export type PreviewFrameId =
  | "auth"
  | "kyc"
  | "wallet"
  | "assets"
  | "savings"
  | "openusd"
  | "send"
  | "send-pi-hub"
  | "send-pi"
  | "receive"
  | "request"
  | "invoice"
  | "scan"
  | "scan-help"
  | "scan-pi"
  | "qrpay"
  | "contacts"
  | "buy"
  | "pi-topup"
  | "paypal"
  | "google-pay"
  | "stripe"
  | "usdt"
  | "usdc"
  | "pro-topup"
  | "withdraw"
  | "converter"
  | "topup-history"
  | "mining"
  | "staking"
  | "affiliate"
  | "pi-ads"
  | "quest"
  | "credit"
  | "loans"
  | "card"
  | "banks"
  | "remittance"
  | "rates"
  | "analytics"
  | "menu"
  | "ai"
  | "nft"
  | "developers"
  | "partner-api"
  | "webhooks"
  | "ledger"
  | "pos"
  | "merchant-hub"
  | "payment-links"
  | "products"
  | "buttons"
  | "activity"
  | "notifications"
  | "profile"
  | "settings"
  | "two-factor"
  | "support-chat"
  | "help"
  | "announcements"
  | "about"
  | "disputes"
  | "app-marketplace"
  | "guide"
  | "support-channels"
  | "send-pro"
  | "pi-thankyou"
  | "pi-activity"
  | "pi-receipt"
  | "pi-notifications"
  | "pi-setup";

export type PreviewFrameMeta = {
  id: PreviewFrameId;
  title: string;
  feature: string;
  file: string;
  group: string;
};

export const PREVIEW_FRAMES: PreviewFrameMeta[] = [
  { id: "auth", title: "Auth", feature: "Pi · Pro · Email", file: "01-auth.png", group: "Onboarding" },
  { id: "kyc", title: "KYC", feature: "Identity verification", file: "02-kyc.png", group: "Onboarding" },
  { id: "two-factor", title: "2FA", feature: "Authenticator QR", file: "03-2fa.png", group: "Onboarding" },
  { id: "wallet", title: "Wallet", feature: "Dashboard balance", file: "04-wallet.png", group: "Wallet" },
  { id: "assets", title: "Assets", feature: "Token balances", file: "05-assets.png", group: "Wallet" },
  { id: "savings", title: "Savings", feature: "3.75% p.a.", file: "06-savings.png", group: "Wallet" },
  { id: "openusd", title: "OpenUSD", feature: "OUSD $1 peg", file: "07-openusd.png", group: "Wallet" },
  { id: "send", title: "Send", feature: "Express Send / Pro", file: "08-send.png", group: "Payments" },
  { id: "send-pi-hub", title: "Send hub", feature: "OpenPay · Pro · Pi Wallet", file: "08b-send-pi-hub.png", group: "Payments" },
  { id: "send-pi", title: "Send to Pi Wallet", feature: "Debit OUSD · credit OpenUSD", file: "08c-send-pi.png", group: "Payments" },
  { id: "request", title: "Request", feature: "QR receive money", file: "09-request.png", group: "Payments" },
  { id: "invoice", title: "Invoice", feature: "Bill a customer", file: "10-invoice.png", group: "Payments" },
  { id: "scan", title: "Scan QR", feature: "One camera for every QR", file: "11-scan.png", group: "Payments" },
  { id: "scan-help", title: "Scan safely", feature: "How to scan tutorial", file: "12-scan-help.png", group: "Payments" },
  { id: "scan-pi", title: "Scan Pi Wallet", feature: "Pi G-address is first-class", file: "12b-scan-pi.png", group: "Payments" },
  { id: "pi-thankyou", title: "Pi Thank You", feature: "Explorer + OpenLedger", file: "12c-pi-thankyou.png", group: "Payments" },
  { id: "pi-activity", title: "Pi Activity", feature: "Chain + ledger details", file: "12d-pi-activity.png", group: "Payments" },
  { id: "pi-receipt", title: "Pi Receipt", feature: "Full OpenPay → Pi receipt", file: "12e-pi-receipt.png", group: "Payments" },
  { id: "pi-notifications", title: "Pi Alerts", feature: "Sent to Pi Wallet", file: "12f-pi-notifications.png", group: "Payments" },
  { id: "pi-setup", title: "Enable OpenUSD", feature: "Recipient Pi Wallet setup", file: "12g-pi-setup.png", group: "Payments" },
  { id: "qrpay", title: "QR Pay", feature: "Create QR payments", file: "13-qrpay.png", group: "Payments" },
  { id: "contacts", title: "Contacts", feature: "People you send to", file: "14-contacts.png", group: "Payments" },
  { id: "pi-topup", title: "Cash in with Pi", feature: "Automatic Pi credit", file: "15-pi-topup.png", group: "Money" },
  { id: "paypal", title: "PayPal", feature: "Wallet · Venmo · cards", file: "16-paypal.png", group: "Money" },
  { id: "google-pay", title: "Google Pay", feature: "Google Wallet cards", file: "17-google-pay.png", group: "Money" },
  { id: "stripe", title: "Cards / Apple Pay", feature: "Stripe Checkout", file: "18-stripe.png", group: "Money" },
  { id: "usdt", title: "USDT", feature: "Tether deposit", file: "19-usdt.png", group: "Money" },
  { id: "usdc", title: "USDC", feature: "Circle USDC", file: "20-usdc.png", group: "Money" },
  { id: "pro-topup", title: "Pro Top-up", feature: "Pay from OpenPay Pro", file: "21-pro-topup.png", group: "Money" },
  { id: "withdraw", title: "Withdraw", feature: "OUSD payout", file: "22-withdraw.png", group: "Money" },
  { id: "converter", title: "Converter", feature: "Live PI · OUSD peg", file: "23-converter.png", group: "Money" },
  { id: "topup-history", title: "Top-up History", feature: "Track cash-ins", file: "24-topup-history.png", group: "Money" },
  { id: "mining", title: "Mining", feature: "Engage Mining + ads", file: "25-mining.png", group: "Earn" },
  { id: "staking", title: "Staking", feature: "Lock & earn", file: "26-staking.png", group: "Earn" },
  { id: "affiliate", title: "Affiliate", feature: "Invite & earn", file: "27-affiliate.png", group: "Earn" },
  { id: "pi-ads", title: "Pi Ads", feature: "Rewarded ads", file: "28-pi-ads.png", group: "Earn" },
  { id: "quest", title: "OpenPay Quest", feature: "Feature checklist", file: "29-quest.png", group: "Earn" },
  { id: "credit", title: "Credit", feature: "Score 742 / 900", file: "30-credit.png", group: "Banking" },
  { id: "loans", title: "Loans", feature: "Borrow & repay", file: "31-loans.png", group: "Banking" },
  { id: "card", title: "Virtual Card", feature: "OpenPay card", file: "32-card.png", group: "Banking" },
  { id: "banks", title: "List of Banks", feature: "InstaPay & PESONet", file: "33-banks.png", group: "Banking" },
  { id: "remittance", title: "Remittance", feature: "Send abroad", file: "34-remittance.png", group: "Banking" },
  { id: "rates", title: "Live Rates", feature: "PI + OUSD rates", file: "35-rates.png", group: "Market" },
  { id: "analytics", title: "Analytics", feature: "In / out this week", file: "36-analytics.png", group: "Market" },
  { id: "ai", title: "OpenPay AI", feature: "Financial assistant", file: "37-ai.png", group: "Tools" },
  { id: "nft", title: "OpenNFT", feature: "NFT marketplace", file: "38-nft.png", group: "Tools" },
  { id: "developers", title: "Developers", feature: "APIs & webhooks", file: "39-developers.png", group: "Tools" },
  { id: "partner-api", title: "Partner API", feature: "Keys & OAuth", file: "40-partner-api.png", group: "Tools" },
  { id: "webhooks", title: "Webhooks", feature: "Payment events", file: "41-webhooks.png", group: "Tools" },
  { id: "ledger", title: "OpenLedger", feature: "Public explorer", file: "42-ledger.png", group: "Tools" },
  { id: "pos", title: "Merchant POS", feature: "In-person charges", file: "43-pos.png", group: "Merchant" },
  { id: "merchant-hub", title: "Merchant Hub", feature: "Apply & integrate", file: "44-merchant-hub.png", group: "Merchant" },
  { id: "payment-links", title: "Checkout Links", feature: "Shareable checkout", file: "45-payment-links.png", group: "Merchant" },
  { id: "products", title: "Products", feature: "SKU catalog", file: "46-products.png", group: "Merchant" },
  { id: "buttons", title: "PayButton", feature: "Embed on your site", file: "47-buttons.png", group: "Merchant" },
  { id: "activity", title: "Activity", feature: "Recent transactions", file: "48-activity.png", group: "Account" },
  { id: "notifications", title: "Alerts", feature: "Notifications", file: "49-notifications.png", group: "Account" },
  { id: "profile", title: "Profile", feature: "Account & KYC", file: "50-profile.png", group: "Account" },
  { id: "settings", title: "Settings", feature: "Security & prefs", file: "51-settings.png", group: "Account" },
  { id: "support-chat", title: "Live Support", feature: "AI + live agents", file: "52-support.png", group: "Account" },
  { id: "help", title: "Help Center", feature: "FAQs & tickets", file: "53-help.png", group: "Account" },
  { id: "announcements", title: "Announcements", feature: "What’s new", file: "54-announcements.png", group: "Account" },
  { id: "about", title: "About", feature: "Company", file: "55-about.png", group: "Account" },
  { id: "disputes", title: "Disputes", feature: "Chargebacks", file: "56-disputes.png", group: "Account" },
  { id: "app-marketplace", title: "App Store", feature: "Integrated apps", file: "57-apps.png", group: "Account" },
  { id: "guide", title: "User Guide", feature: "Step-by-step", file: "58-guide.png", group: "Account" },
  { id: "support-channels", title: "Support", feature: "Chat · email · Telegram", file: "59-channels.png", group: "Account" },
];

export const DARK_FRAMES = new Set<PreviewFrameId>([
  "auth",
  "send",
  "receive",
  "request",
  "invoice",
  "scan",
  "scan-pi",
  "pi-thankyou",
  "withdraw",
  "mining",
  "affiliate",
  "card",
  "nft",
  "two-factor",
]);

const FRAME_MAP: Record<PreviewFrameId, () => ReactNode> = {
  auth: AuthLatestFrame,
  kyc: KycLatestFrame,
  wallet: WalletLatestFrame,
  assets: AssetsLatestFrame,
  savings: SavingsLatestFrame,
  openusd: OpenUsdLatestFrame,
  send: SendLatestFrame,
  "send-pi-hub": SendPiHubLatestFrame,
  "send-pi": SendPiFormLatestFrame,
  receive: RequestLatestFrame,
  request: RequestLatestFrame,
  invoice: InvoiceLatestFrame,
  scan: ScanLatestFrame,
  "scan-help": ScanHelpLatestFrame,
  "scan-pi": ScanPiLatestFrame,
  qrpay: QrPayLatestFrame,
  contacts: ContactsLatestFrame,
  buy: PiTopUpLatestFrame,
  "pi-topup": PiTopUpLatestFrame,
  paypal: PaypalLatestFrame,
  "google-pay": GooglePayLatestFrame,
  stripe: StripeLatestFrame,
  usdt: UsdtLatestFrame,
  usdc: UsdcLatestFrame,
  "pro-topup": ProTopUpLatestFrame,
  withdraw: WithdrawLatestFrame,
  converter: ConverterLatestFrame,
  "topup-history": TopUpHistoryLatestFrame,
  mining: MiningLatestFrame,
  staking: StakingLatestFrame,
  affiliate: AffiliateLatestFrame,
  "pi-ads": PiAdsLatestFrame,
  quest: FeatureQuestLatestFrame,
  credit: CreditLatestFrame,
  loans: LoansLatestFrame,
  card: CardLatestFrame,
  banks: BanksListLatestFrame,
  remittance: RemittanceLatestFrame,
  rates: RatesLatestFrame,
  analytics: AnalyticsLatestFrame,
  menu: GuideLatestFrame,
  ai: AiLatestFrame,
  nft: NftLatestFrame,
  developers: DevelopersLatestFrame,
  "partner-api": PartnerApiLatestFrame,
  webhooks: WebhooksLatestFrame,
  ledger: LedgerLatestFrame,
  pos: PosLatestFrame,
  "merchant-hub": MerchantHubLatestFrame,
  "payment-links": PaymentLinksLatestFrame,
  products: ProductsLatestFrame,
  buttons: ButtonsLatestFrame,
  activity: ActivityLatestFrame,
  notifications: NotificationsLatestFrame,
  profile: ProfileLatestFrame,
  settings: SettingsLatestFrame,
  "two-factor": TwoFactorLatestFrame,
  "support-chat": SupportChatLatestFrame,
  help: HelpCenterLatestFrame,
  announcements: AnnouncementsLatestFrame,
  about: AboutLatestFrame,
  disputes: DisputesLatestFrame,
  "app-marketplace": AppMarketplaceLatestFrame,
  guide: GuideLatestFrame,
  "support-channels": SupportChannelsLatestFrame,
  "send-pro": SendLatestFrame,
  "pi-thankyou": PiThankYouLatestFrame,
  "pi-activity": PiActivityLatestFrame,
  "pi-receipt": PiReceiptLatestFrame,
  "pi-notifications": PiNotificationsLatestFrame,
  "pi-setup": PiSetupLatestFrame,
};

export function renderPreviewFrame(id: PreviewFrameId | string) {
  const Comp = FRAME_MAP[id as PreviewFrameId];
  return Comp ? <Comp /> : <WalletLatestFrame />;
}

export function frameIdForMockup(heading: string, code = "", slug = ""): PreviewFrameId {
  const t = `${heading} ${code} ${slug}`.toLowerCase();
  const h = heading.toLowerCase();
  if (slug.includes("openpay-to-pi-wallet") || t.includes("openpay-to-pi-wallet")) {
    if (h.includes("scan")) return "scan-pi";
    if (h.includes("thank")) return "pi-thankyou";
    if (h.includes("activity") || h.includes("blockchain")) return "pi-activity";
    if (h.includes("receipt") || h.includes("transaction details")) return "pi-receipt";
    if (h.includes("notification")) return "pi-notifications";
    if (h.includes("enable") || h.includes("recipient") || h.includes("setup") || h.includes("callout")) return "pi-setup";
    if (h.includes("form") || h.includes("send to pi wallet")) return "send-pi";
    return "send-pi-hub";
  }
  if (t.includes("scan safely") || t.includes("how to scan")) return "scan-help";
  if (t.includes("scan qr") || t.includes("viewfinder") || (t.includes("camera") && t.includes("paste"))) return "scan";
  if (t.includes("send to pi") || t.includes("pi wallet")) return "send-pi";
  if (t.includes("apple pay") || t.includes("face id") || t.includes("top up screen")) return "stripe";
  if (t.includes("paypal")) return "paypal";
  if (t.includes("google pay")) return "google-pay";
  if (t.includes("cash in")) return "pi-topup";
  if (t.includes("list of banks") || t.includes("local bank") || t.includes("instapay") || t.includes("pesonet")) return "banks";
  if (t.includes("bank-transfer") || t.includes("bank transfer")) return "banks";
  if (t.includes("send form") || t.includes("express send") || t.includes("soft cta")) return "send";
  if (t.includes("create sheet") || t.includes("link ready") || t.includes("payment link") || t.includes("paymongo")) return "payment-links";
  if (t.includes("qr-pay") || t.includes("qr pay") || (t.includes("revenue") && t.includes("method"))) return "qrpay";
  if (t.includes("services")) return "guide";
  if (t.includes("mining")) return "mining";
  if (t.includes("merchant pos") || t.includes("generate qr")) return "pos";
  if (t.includes("virtual card") || t.includes("cardholder")) return "card";
  if (t.includes("nft") || t.includes("opennft")) return "nft";
  if (t.includes("openpay ai") || t.includes("assistant")) return "ai";
  if (t.includes("savings")) return "savings";
  if (t.includes("loan")) return "loans";
  if (t.includes("credit")) return "credit";
  if (t.includes("withdraw")) return "withdraw";
  if (t.includes("auth") || t.includes("sign in")) return "auth";
  if (t.includes("kyc")) return "kyc";
  if (t.includes("profile")) return "profile";
  if (t.includes("activity")) return "activity";
  if (t.includes("wallet") || t.includes("available balance")) return "wallet";
  return "wallet";
}
