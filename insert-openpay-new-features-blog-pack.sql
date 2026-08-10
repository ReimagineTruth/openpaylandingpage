-- Insert the OpenPay New Features Blog Pack post into Supabase
-- Run this in your Supabase SQL Editor

INSERT INTO blog_posts (
  slug,
  title,
  date,
  author,
  category,
  desc,
  meta,
  tags,
  hero,
  content,
  cta_text,
  cta_link
) VALUES (
  'openpay-new-features-blog-pack',
  'OpenPay — New Features Blog Pack (after QR Pay)',
  'Aug 10, 2026',
  'OpenPay Team',
  'Update',
  'After QR Pay: Cash In, Bank Transfer, Apple Pay, PayMongo Links, and a redesigned Services Menu — the full fund → earn → send → get paid loop.',
  'After QR Pay: Cash In, Bank Transfer, Apple Pay, PayMongo Links, and a redesigned Services Menu — the complete fund → earn → send → get paid loop on OpenPay.',
  ARRAY['cash-in', 'bank-transfer', 'apple-pay', 'paymongo', 'services', 'qr-pay', 'ousd'],
  'Fund. Earn. Send. Get paid.',
  '# OpenPay — New Features Blog Pack (after QR Pay)

Use this index when exploring what’s new on [openpy.space/blog](https://www.openpy.space/blog). Each post is a **standalone guide** with tutorials and UI/UX mockups — same style as the QR Pay flagship story.

**Previous flagship:** [OpenPay QR Pay](/blog/openpay-qr-pay) · Live: [https://openpy.space/qr-pay](https://openpy.space/qr-pay)

---

## Publish order (recommended)

| # | Post | Slug | One-line pitch |
|---|------|------|----------------|
| 1 | Cash In | `openpay-cash-in` | Fund OUSD via QR Ph, e-wallets, cards & Apple Pay |
| 2 | Bank Transfer | `openpay-bank-transfer` | InstaPay / PESONet from wallet to PH banks |
| 3 | Apple Pay | `openpay-apple-pay` | Face ID top-ups + shortfall CTAs |
| 4 | [PayMongo Payment Links](/blog/openpay-paymongo-payment-links) | `openpay-paymongo-payment-links` | Shareable PayMongo `pm.link` → OUSD |
| 5 | [Services Menu](/blog/openpay-services-menu) | `openpay-services-menu` | Redesigned Services / Transactions grid |

**Open the products:** [Cash In](https://openpy.space/cash-in) · [Bank Transfer](https://openpy.space/bank-transfer) · [Apple Pay](https://openpy.space/topup-apple-pay) · [PayMongo Links](https://openpy.space/paymongo-links) · [Services Menu](https://openpy.space/menu)

---

## How to read this series

For each post:

1. Start with the **hero** and meta — the one-line promise.
2. Skim the **why** section, then the **tutorials**.
3. Use ASCII mockups as a map until screenshots land — same section headings.
4. Follow **Open it** links to the live product.
5. Cross-link **Related features** between posts + [QR Pay](/blog/openpay-qr-pay).

---

## Suggested cover / OG lines

| Post | OG description |
|------|----------------|
| Cash In | Add money with QR Ph, GCash, Maya, or Apple Pay. |
| Bank Transfer | Send to any PH bank with InstaPay or PESONet. |
| Apple Pay | Top up OUSD with Face ID — never stuck mid-send. |
| PayMongo Links | Share a PHP checkout link. Get paid in OUSD. |
| Services Menu | Every OpenPay action — finally readable on mobile. |

---

## Product journey diagram

```mermaid
flowchart TD
  Menu[Services Menu]
  CashIn[Cash In / Apple Pay]
  Wallet[OUSD Wallet]
  Send[Express Send]
  Bank[Bank Transfer]
  QrPay[QR Pay]
  PmLinks[PayMongo Links]
  Menu --> CashIn
  CashIn --> Wallet
  Menu --> Send
  Menu --> Bank
  Menu --> QrPay
  Menu --> PmLinks
  Wallet --> Send
  Wallet --> Bank
  PmLinks -->|"link.payment.paid"| Wallet
  QrPay --> Wallet
```

**In plain words:** Services Menu → fund with Cash In / Apple Pay → OUSD wallet → Express Send or Bank Transfer. Merchants get paid via QR Pay or PayMongo Links, and webhooks credit the same wallet.

---

## Related stories already live

- [OpenPay QR Pay — Accept Payments with QR Codes & Links](/blog/openpay-qr-pay)
- [OpenPay PayMongo Payment Links — Share PHP Checkout Like QR Pay](/blog/openpay-paymongo-payment-links)
- [OpenPay Services Menu — Redesigned Transaction Grid](/blog/openpay-services-menu)
- [Meet OpenPay AI](/blog/meet-openpay-ai)
- [OpenPay NFT — Complete Feature Blog](/blog/openpay-nft-marketplace)

---

## Closing

Ship **Cash In → Bank Transfer → Apple Pay → PayMongo Links → Services Menu** after the QR Pay story so readers see a complete **fund → earn → send → get paid** loop on OpenPay.

**Explore the blog →** [https://www.openpy.space/blog](https://www.openpy.space/blog)
',
  'Read the OpenPay blog',
  'https://www.openpy.space/blog'
);
