-- Insert the OpenPay Apple Pay blog post into Supabase
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
  'openpay-apple-pay',
  'OpenPay Apple Pay — Face ID Top-Ups for OUSD',
  'Aug 10, 2026',
  'OpenPay Team',
  'Product',
  'Add OUSD with Apple Pay on Safari and iOS. Short on balance? OpenPay deep-links you to Apple Pay top-up from Send, Bank Transfer, and QR Pay — then you finish with wallet.',
  'Add OUSD with Apple Pay on Safari and iOS. Short on balance? OpenPay deep-links you to Apple Pay top-up from Send, Bank Transfer, and QR Pay — then you finish with wallet.',
  ARRAY['apple-pay', 'stripe', 'top-up', 'ousd', 'face-id', 'safari', 'wallet'],
  'Confirm with Face ID. Credit OUSD. Keep moving.',
  '# OpenPay Apple Pay — Full Feature Blog

Top up OpenPay with **Apple Pay** via Stripe — Face ID / Touch ID, no card typing. Soft CTAs appear when you’re short on balance during Express Send, Bank Transfer, or QR Pay checkout.

**Open it:** [https://openpy.space/topup-apple-pay](https://openpy.space/topup-apple-pay)  
**Cash In shortcut:** [https://openpy.space/cash-in](https://openpy.space/cash-in)  
**Sign in:** [https://openpy.space/auth](https://openpy.space/auth)

> Brand voice: Apple Pay–clean, Stripe-secured, OpenPay blue.  
> Base URL: `https://openpy.space`  
> Docs reference: [Apple PassKit / Apple Pay](https://developer.apple.com/documentation/passkit/apple-pay) (web via Stripe Checkout — not a native iOS SDK app)

---

## Why Apple Pay on OpenPay?

Typing card numbers kills conversion. Apple Pay gives:

1. **Wallet cards** already on the phone.
2. **Biometric confirm** — Face ID / Touch ID.
3. **Instant OUSD credit** after Stripe Checkout succeeds.
4. **Fund-first loops** — if Send / Bank / QR Pay needs more balance, one tap opens Apple Pay with the shortfall prefilled.

OpenPay is a **web app**: Apple Pay surfaces through **Stripe Embedded Checkout** when the domain is verified — same security model merchants trust worldwide.

---

## UI/UX mockup — Top up screen

```
┌─────────────────────────────────┐
│ ←  Top up with Apple Pay        │
│     Face ID / Touch ID checkout │
├─────────────────────────────────┤
│  [  Apple Pay logo  ]           │
│                                 │
│  Confirm with Face ID or Touch  │
│  ID. Appears on Safari / iOS    │
│  with a card in Wallet.         │
│                                 │
│  You pay (USD)                  │
│  ┌───────────────────────────┐  │
│  │  $  25.00                 │  │
│  └───────────────────────────┘  │
│  1 OUSD = 1 USD                 │
│                                 │
│  [Face ID] [No typing] [Instant]│
│                                 │
│  ┌───────────────────────────┐  │
│  │  Continue · $25.00        │  │
│  └───────────────────────────┘  │
│  🔒 Secured by Stripe           │
└─────────────────────────────────┘
```

After Continue → embedded Stripe sheet (Apple Pay / cards / Link where available).

---

## UI/UX mockup — Soft CTA on Bank Transfer / Send

```
┌─────────────────────────────────┐
│  Available: 5.00 OUSD           │
│  Need: 26.49 OUSD               │
│  ┌───────────────────────────┐  │
│  │ ⚠ Insufficient balance    │  │
│  │ Need 21.49 more OUSD      │  │
│  │ ┌───────────────────────┐ │  │
│  │ │ Top up with Apple Pay │ │  │
│  │ └───────────────────────┘ │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

Express Send toast also offers an **Apple Pay** action when amount exceeds balance.

---

## UI/UX mockup — QR Pay → Apple Pay → Wallet

```
  QR Checkout                Apple Pay top-up           Back to QR
┌──────────────┐           ┌──────────────┐           ┌──────────────┐
│ Method:      │  tap Pay  │ Stripe sheet │  return   │ Method:      │
│  Apple Pay  │ ───────►  │ Face ID      │ ───────►  │ Wallet       │
│              │           │ +$ OUSD      │           │ Pay merchant │
└──────────────┘           └──────────────┘           └──────────────┘
```

QR Pay does **not** fake a PayMongo `apple_pay` charge. Flow: Stripe top-up → resume checkout → pay with **OpenPay Wallet**.

---

## Tutorial — Top up with Apple Pay

1. Sign in at [https://openpy.space/auth](https://openpy.space/auth).
2. Open [Top up with Apple Pay](https://openpy.space/topup-apple-pay) (or Cash In → Apple Pay).
3. Enter USD amount (min $1).
4. Tap **Continue**.
5. In Stripe checkout, choose **Apple Pay** (Safari / iOS + Wallet card).
6. Confirm with Face ID / Touch ID.
7. Wait for **Top-up successful** — OUSD is in your wallet.
8. If you came from Send / Bank / QR Pay, tap **Continue payment** on the return screen.

---

## Tutorial — Fix “insufficient balance” mid-transfer

1. On Bank Transfer or Express Send, enter an amount larger than your balance.
2. Tap **Top up with Apple Pay** (or the toast action).
3. Complete Stripe Apple Pay for the suggested shortfall.
4. Use **Continue payment** / back navigation to finish the original send.

---

## Device & domain checklist

| Requirement | Why |
|-------------|-----|
| Safari or iOS Chrome/WebKit paths that support Apple Pay | Wallet sheet availability |
| Card in Apple Wallet | Something to pay with |
| Stripe Apple Pay domain verified for `openpy.space` | Button appears in Checkout |
| Signed-in OpenPay user | Credit lands on your wallet |

---

## Who it’s for

- iPhone users who hate typing PANs.
- Anyone stuck mid-send without enough OUSD.
- QR Pay payers who want Apple Pay convenience then wallet settle.

---

## FAQ

**Is this native PassKit in an App Store app?**  
OpenPay ships as **web**. Apple Pay runs through **Stripe Checkout** on supported browsers — aligned with Apple’s web Apple Pay model.

**Can Apple Pay pay InstaPay directly?**  
No. Apple Pay → OUSD top-up → Bank Transfer / Send / QR wallet pay.

**Google Pay?**  
Separate path: Stripe for USD top-up pages; PayMongo Google Pay on QR Pay checkout.

---

## Related features

- Cash In — [https://openpy.space/cash-in](https://openpy.space/cash-in)
- Bank Transfer — [https://openpy.space/bank-transfer](https://openpy.space/bank-transfer)
- Express Send — [https://openpy.space/send](https://openpy.space/send)
- QR Pay — [https://openpy.space/qr-pay](https://openpy.space/qr-pay)

---

## Closing

**Face ID. Instant OUSD. Never stranded mid-payment.**

**Start here →** [https://openpy.space/topup-apple-pay](https://openpy.space/topup-apple-pay)
',
  'Open Apple Pay Top-up',
  'https://openpy.space/topup-apple-pay'
);
