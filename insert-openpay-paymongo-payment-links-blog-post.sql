-- Insert the OpenPay PayMongo Payment Links blog post into Supabase
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
  'openpay-paymongo-payment-links',
  'OpenPay PayMongo Payment Links — Share PHP Checkout Like QR Pay',
  'Aug 10, 2026',
  'OpenPay Team',
  'Product',
  'Generate PayMongo Payment Links from OpenPay. Share a URL or QR, collect PHP via e-wallets and cards, and receive OUSD when the link is paid.',
  'Generate PayMongo Payment Links from OpenPay. Share a URL or QR, collect PHP via e-wallets and cards, and receive OUSD when the link is paid.',
  ARRAY['paymongo', 'payment-links', 'merchant', 'gcash', 'qr-ph', 'checkout', 'ousd', 'php'],
  'Create a link. Share it. Get paid in OUSD.',
  '# OpenPay PayMongo Payment Links — Full Feature Blog

Create a **shareable PayMongo checkout link** (`pm.link/…`) for any PHP amount — customers pay with cards, GCash, Maya, QR Ph, online banking, and more. When paid, OpenPay credits your **OUSD** wallet. Built for merchants who already love QR Pay.

**Open it:** [https://openpy.space/paymongo-links](https://openpy.space/paymongo-links)  
**Menu:** Services → Merchant → **PayMongo Links**  
**Sign in:** [https://openpy.space/auth](https://openpy.space/auth)

> Docs: [PayMongo Payment Links](https://docs.paymongo.com/reference/payment-links) · [Checkout Session](https://docs.paymongo.com/reference/checkout-session-resource)  
> Base URL: `https://openpy.space`

---

## Why PayMongo Payment Links?

QR Pay is OpenPay-hosted checkout. **PayMongo Payment Links** use PayMongo’s hosted page — perfect when you want:

1. **One URL** that already supports many PH methods.
2. **Chat / social selling** — paste into Messenger, Viber, IG DMs.
3. **No custom checkout UI** to maintain for that sale.
4. **Webhook settle** into OpenPay so your wallet and notifications stay in sync.

Optional: **one-time Checkout Session** for a single hosted cart with success/cancel return URLs.

---

## PayMongo Links vs QR Pay vs OpenPay Payment Link Creator

| | **PayMongo Links** | **QR Pay** | **Payment Link Creator** |
|--|-------------------|------------|---------------------------|
| Hosted by | PayMongo (`pm.link`) | OpenPay (`/qr-pay/:token`) | OpenPay merchant links |
| Best for | PHP multi-method share links | Branded OpenPay checkout + Pi/Wallet/Card/Pro | OpenPay catalog / widgets |
| Customer methods | Cards, e-wallets, QR Ph, banks, BNPL (PayMongo) | Pi, Wallet, Card, Pro, PayMongo methods when enabled | Wallet / Pi / Card (OpenPay) |
| Merchant credit | OUSD via OpenPay webhook | OUSD / ledger via OpenPay | OpenPay settle |

Use **all three** when it fits the channel.

---

## UI/UX mockup — Dashboard

```
┌─────────────────────────────────┐
│ ←  PayMongo Links        [+ New]│
├─────────────────────────────────┤
│  ┌───────────────────────────┐  │
│  │ 🔗 PayMongo Payment Links │  │
│  │ Shareable checkout · like │  │
│  │ QR Pay. Paid → OUSD.      │  │
│  └───────────────────────────┘  │
│                                 │
│  Your links                     │
│  ┌───────────────────────────┐  │
│  │ Order #1042     [active]  │  │
│  │ ₱1,500.00   Live          │  │
│  │ Paid 0/1 · ref aBcDe      │  │
│  │              📋 ↗ 🗄      │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

Actions per row: **Copy**, **Open**, **Archive** (active only).

---

## UI/UX mockup — Create sheet

```
┌─────────────────────────────────┐
│  Create payment link            │
│                                 │
│  Amount (PHP)                   │
│  ┌───────────────────────────┐  │
│  │ 500.00                    │  │
│  └───────────────────────────┘  │
│  Description                    │
│  ┌───────────────────────────┐  │
│  │ Custom cake deposit       │  │
│  └───────────────────────────┘  │
│  Internal remarks (optional)    │
│  Max successful payments [ 1 ]  │
│                                 │
│  ┌───────────────────────────┐  │
│  │  Create Payment Link      │  │
│  └───────────────────────────┘  │
│  One-time Checkout Session…     │
│  Cancel                         │
└─────────────────────────────────┘
```

---

## UI/UX mockup — Link ready (share)

```
┌─────────────────────────────────┐
│  ✓ Link ready                   │
│  https://pm.link/yourbiz/3VEi…  │
│  ┌───────────────────────────┐  │
│  │      ████ QR CODE ████    │  │
│  └───────────────────────────┘  │
│  [ Copy ]        [ Open ]       │
└─────────────────────────────────┘
```

Customer opens PayMongo Hosted Checkout → pays → OpenPay webhook `link.payment.paid` → merchant OUSD + in-app notification.

---

## Tutorial — Create & share a Payment Link

1. Sign in at [https://openpy.space/auth](https://openpy.space/auth).
2. Open [PayMongo Links](https://openpy.space/paymongo-links) (Menu → Merchant services → PayMongo Links).
3. Tap **New**.
4. Enter **PHP amount** (minimum ₱1.00) and a clear **description**.
5. Optional: remarks, max successful payments (1 = single-use).
6. Tap **Create Payment Link**.
7. **Copy** the URL or show the **QR** to your customer.
8. When they pay, check wallet balance / notification: *PayMongo Payment Link paid*.

---

## Tutorial — One-time Checkout Session

1. On the create sheet, enter amount + description.
2. Tap **One-time Checkout Session instead**.
3. You’re redirected to PayMongo Hosted Checkout.
4. After pay, return URL lands on `/paymongo-links?checkout=success`.

Use sessions when you want **success/cancel redirects**; use Payment Links when you want a **reusable shareable URL**.

---

## Tutorial — Archive a link

1. Find the link in **Your links**.
2. Tap the archive icon.
3. Status becomes **archived** — customers can no longer complete new pays on that link (PayMongo archive + local status).

---

## Who it’s for

- Sellers quoting in PHP over chat.
- Pop-ups that already trust PayMongo methods.
- OpenPay merchants who want OUSD books with PayMongo collection.

---

## FAQ

**Where does the money go first?**  
Customer pays **PayMongo**. OpenPay records the paid event and credits **OUSD** to your OpenPay wallet at the configured PHP/USD rate.

**Is this the same as Menu → Payment Link Creator?**  
No. That product is OpenPay-hosted. **PayMongo Links** call PayMongo’s [Payment Links API](https://docs.paymongo.com/reference/payment-links).

**Do I need my own PayMongo keys in the app?**  
Platform keys are configured on the server. Merchants use OpenPay UI — no secret keys in the browser.

---

## Related features

- QR Pay — [https://openpy.space/qr-pay](https://openpy.space/qr-pay)
- Payment Link Creator — [https://openpy.space/payment-links/create](https://openpy.space/payment-links/create)
- Cash In — [https://openpy.space/cash-in](https://openpy.space/cash-in)
- Bank Transfer — [https://openpy.space/bank-transfer](https://openpy.space/bank-transfer)

---

## Closing

**PHP checkout link. Share anywhere. OUSD when it clears.**

**Start here →** [https://openpy.space/paymongo-links](https://openpy.space/paymongo-links)
',
  'Open PayMongo Links',
  'https://openpy.space/paymongo-links'
);
