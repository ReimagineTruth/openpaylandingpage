-- Insert the OpenPay Cash In blog post into Supabase
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
  'openpay-cash-in',
  'OpenPay Cash In — QR Ph, E-Wallets & Global Cards',
  'Aug 10, 2026',
  'OpenPay Team',
  'Product',
  'Top up OUSD via local bank QR Ph, GCash, Maya, GrabPay, ShopeePay, or cards and Apple Pay. One Cash In hub — pick a rail and go.',
  'Top up OUSD via local bank QR Ph, GCash, Maya, GrabPay, ShopeePay, or cards and Apple Pay. One Cash In hub — pick a rail and go.',
  ARRAY['cash-in', 'top-up', 'qr-ph', 'gcash', 'maya', 'apple-pay', 'paymongo', 'ousd'],
  'Add money. Any rail. Instant OUSD.',
  '# OpenPay Cash In — Full Feature Blog

Fund your OpenPay wallet the way Filipinos already pay — **QR Ph banks**, **GCash / Maya / GrabPay / ShopeePay**, or **cards & global partners** (PayPal, Apple Pay, Google Pay, Stripe).

**Open it:** [https://openpy.space/cash-in](https://openpy.space/cash-in)  
**Local banks QR Ph:** [https://openpy.space/cash-in/local-banks](https://openpy.space/cash-in/local-banks)  
**E-wallets & QR Ph:** [https://openpy.space/topup-ewallet-qrph](https://openpy.space/topup-ewallet-qrph)  
**Sign in:** [https://openpy.space/auth](https://openpy.space/auth)

> Brand voice: GCash-clear hub, OpenPay blue trust.  
> Base URL: `https://openpy.space`

---

## Why Cash In?

Users don’t want a maze of top-up pages. Cash In is one **hub**:

1. **Local Banks** — scan a QR Ph deposit with your bank / e-wallet app.
2. **QR Ph & e-wallets** — GCash, Maya, GrabPay, ShopeePay, QR Ph via PayMongo.
3. **Cards & global** — PayPal, Stripe cards, Apple Pay, Google Pay, and more.

Recent shortcuts put **Apple Pay**, PayPal, GCash, BDO, and QR Ph one tap away.

---

## UI/UX mockup — Cash In hub

```
┌─────────────────────────────────┐
│ ←  Cash In                      │
├─────────────────────────────────┤
│  🔍 Search methods…             │
│                                 │
│  Recent                         │
│  (Pay) (PayPal) (GCash) (BDO)  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 🏦🏦 Local Banks          ›│  │
│  │ Deposit via QR Ph — scan  │  │
│  │ with any bank / e-wallet  │  │
│  ├───────────────────────────┤  │
│  │ 💚 QR Ph & e-wallets      ›│  │
│  │ GCash, Maya, GrabPay…     │  │
│  ├───────────────────────────┤  │
│  │ 💳 Cards & global         ›│  │
│  │ PayPal, cards, Apple Pay  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Design notes:** Logo stacks (BDO/BPI/UB/Landbank) on Local; e-wallet marks on row 2; search filters titles/descriptions. Maintenance-aware — disabled rails hide or block cleanly.

---

## UI/UX mockup — Local Banks (QR Ph deposit)

```
┌─────────────────────────────────┐
│ ←  Local Banks                  │
├─────────────────────────────────┤
│  Choose how you’ll pay          │
│                                 │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐    │
│  │BDO │ │BPI*│ │ UB*│ │LBP │    │  * tiles may be
│  └────┘ └────┘ └────┘ └────┘    │    admin-controlled
│                                 │
│  Amount → Generate QR Ph        │
│  ┌───────────────────────────┐  │
│  │      ████ QR CODE ████    │  │
│  │   Scan with your bank app │  │
│  └───────────────────────────┘  │
│  Waiting for payment…           │
└─────────────────────────────────┘
```

Admin can tune which QR Ph bank tiles appear (e.g. emphasize true QR Ph providers).

---

## Tutorial — Cash In with QR Ph (local bank)

1. Open [Cash In](https://openpy.space/cash-in).
2. Tap **Local Banks**.
3. Pick your bank / flow and enter the **OUSD / PHP amount** as prompted.
4. Generate the **QR Ph** code.
5. Open your bank or e-wallet app → Scan QR → Confirm.
6. Wait for OpenPay to credit **OUSD** (webhook settle).
7. Check wallet balance / top-up history.

---

## Tutorial — Cash In with GCash / Maya / GrabPay / ShopeePay

1. From Cash In, tap **QR Ph & e-wallets** (or go to `/topup-ewallet-qrph`).
2. Enter amount.
3. Choose **GCash**, **Maya**, **GrabPay**, **ShopeePay**, or **QR Ph**.
4. Authorize in the provider app / page.
5. Return to OpenPay — balance updates when PayMongo confirms paid.

---

## Tutorial — Cash In with Apple Pay / cards

1. From Cash In **Recent**, tap **Apple Pay**, or open **Cards & global partners** → `/topup` / `/topup-apple-pay`.
2. Enter USD amount (1 OUSD = 1 USD).
3. Continue into Stripe checkout.
4. On Safari / iOS with a card in Wallet, **Apple Pay** appears — confirm with Face ID / Touch ID.
5. Return screen confirms credit.

---

## Who it’s for

- New users funding their first OUSD.
- Merchants topping up before payouts / transfers.
- Pi and web users who prefer PHP e-wallets or cards.

---

## FAQ

**How fast is credit?**  
Most PayMongo and Stripe paths credit after the `paid` / checkout webhook — usually seconds.

**Why don’t I see Apple Pay?**  
Use Safari or iOS with a card in Wallet, and ensure the domain is Apple Pay–verified in Stripe.

**Is Cash In the same as QR Pay?**  
No. **Cash In** funds *your* wallet. **QR Pay** lets customers pay *you* as a merchant.

---

## Related features

- Bank Transfer — [https://openpy.space/bank-transfer](https://openpy.space/bank-transfer)
- Apple Pay — [https://openpy.space/topup-apple-pay](https://openpy.space/topup-apple-pay)
- Top-up history — [https://openpy.space/topup-history](https://openpy.space/topup-history)
- QR Pay — [https://openpy.space/qr-pay](https://openpy.space/qr-pay)

---

## Closing

**One hub. Local QR Ph, e-wallets, or global cards. OUSD when payment clears.**

**Start here →** [https://openpy.space/cash-in](https://openpy.space/cash-in)
',
  'Open Cash In',
  'https://openpy.space/cash-in'
);
