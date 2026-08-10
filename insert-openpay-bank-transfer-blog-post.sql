-- Insert the OpenPay Bank Transfer blog post into Supabase
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
  'openpay-bank-transfer',
  'OpenPay Bank Transfer — InstaPay & PESONet from Your Wallet',
  'Aug 10, 2026',
  'OpenPay Team',
  'Product',
  'Transfer OUSD to any Philippine bank via InstaPay or PESONet. Pick a bank, enter account details, confirm — track processing, success, or failure in clear modals.',
  'Transfer OUSD to any Philippine bank via InstaPay or PESONet. Pick a bank, enter account details, confirm — track processing, success, or failure in clear modals.',
  ARRAY['bank-transfer', 'instapay', 'pesonet', 'unionbank', 'paymongo', 'philippines', 'ousd'],
  'Wallet to bank. Local rails. Clear status.',
  '# OpenPay Bank Transfer — Full Feature Blog

Send money from your OpenPay balance to Philippine bank accounts in minutes — **InstaPay** for near-instant payouts, **PESONet** for larger same-day transfers. Powered by UnionBank Partner rails (with PayMongo fallback).

**Open it:** [https://openpy.space/bank-transfer](https://openpy.space/bank-transfer)  
**Local send:** [https://openpy.space/bank-transfer/local](https://openpy.space/bank-transfer/local)  
**Sign in:** [https://openpy.space/auth](https://openpy.space/auth)

> Brand voice: modern fintech, Pi-native, Apple Pay–clean. Signature PayPal blue.  
> Base URL: `https://openpy.space`

---

## Why Bank Transfer?

Filipino users expect money to land in BPI, BDO, UnionBank, GCash-linked banks, and more. OpenPay Bank Transfer bridges **OUSD balance → PHP bank payout**:

1. **Choose Local** — InstaPay or PESONet.
2. **Pick a bank** — searchable institution list with logos.
3. **Enter details** — amount, account name, account number.
4. **Confirm** — OpenPay debits OUSD; partner rail pays out PHP.
5. **See the result** — processing animation → success, pending, or failed.

No spreadsheet. No “email us a screenshot.” Status lives in the app.

---

## UI/UX mockup — Hub

```
┌─────────────────────────────────┐
│ ←     Bank Transfer             │  ← paypal-blue header
├─────────────────────────────────┤
│                                 │
│  Bank transfer locally and      │
│  internationally                │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 🏛 Local                  ›│  │
│  │ Transfer via InstaPay or  │  │
│  │ PESONet.                  │  │
│  ├───────────────────────────┤  │
│  │ 🌐 International          ›│  │
│  │ International banks &     │  │
│  │ e-wallets.                │  │
│  └───────────────────────────┘  │
│                                 │
│  Local uses UnionBank Partner   │
│  when configured, else PayMongo │
└─────────────────────────────────┘
```

**Design notes:** White cards on `#f2f2f7`, bold `#0a2a6b` titles, ₱ badge on Local, globe badge on International. One job per row — tap to continue.

---

## UI/UX mockup — Local bank list + rail toggle

```
┌─────────────────────────────────┐
│ ←  Local Bank Transfer          │
├─────────────────────────────────┤
│  [ InstaPay ]  [ PESONet ]      │  ← pill toggle
│                                 │
│  🔍 Search bank…                │
│                                 │
│  ┌───────────────────────────┐  │
│  │ [BDO] Banco de Oro      › │  │
│  │ [BPI] BPI               › │  │
│  │ [UB]  UnionBank         › │  │
│  │ [LBP] Land Bank         › │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

| Rail | Typical use | Cap (product) |
|------|-------------|----------------|
| **InstaPay** | Fast retail payouts | Up to ₱50,000 |
| **PESONet** | Larger transfers | Up to ₱1,000,000 |

---

## UI/UX mockup — Send form

```
┌─────────────────────────────────┐
│ ←  Send to BDO · InstaPay       │
├─────────────────────────────────┤
│  Amount (PHP)                   │
│  ┌───────────────────────────┐  │
│  │ ₱  1,500.00               │  │
│  └───────────────────────────┘  │
│  Available: 42.50 OUSD ≈ ₱…     │
│  Debit ≈ 26.49 OUSD (+ ₱10 fee) │
│                                 │
│  Account Name                   │
│  ┌───────────────────────────┐  │
│  │ Juan Dela Cruz            │  │
│  └───────────────────────────┘  │
│  Account Number                 │
│  ┌───────────────────────────┐  │
│  │ 1234567890                │  │
│  └───────────────────────────┘  │
│  Receipt email (optional)       │
│                                 │
│  A PHP 10.00 fee per transfer.  │
│                                 │
│  ┌───────────────────────────┐  │
│  │      Send Money           │  │  ← full-width blue pill
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Insufficient balance CTA:** red callout + **Top up with Apple Pay** deep-link to `/topup-apple-pay?openUsdAmount=…`.

---

## UI/UX mockup — Processing & result

```
     PROCESSING                      SUCCESS
┌──────────────────┐           ┌──────────────────┐
│   ○ → ○ → ○      │           │       ✓          │
│  Debit · Rail ·  │           │  Transfer sent   │
│  Confirm         │           │  ₱1,500.00       │
│  Workflow anim   │           │  Ref: BT-…       │
└──────────────────┘           │  [Done] [Share]  │
                               └──────────────────┘

     PENDING                       FAILED
┌──────────────────┐           ┌──────────────────┐
│       ⏳         │           │       ✕          │
│  Still processing│           │  Couldn’t send   │
│  We’ll update…   │           │  Friendly reason │
│  [Got it]        │           │  [Try again]     │
└──────────────────┘           └──────────────────┘
```

Friendly errors include empty partner PHP float (“source wallet insufficient”) so users know it’s a platform funding issue — not “your OUSD vanished.”

---

## Tutorial — How to send (Local)

1. Sign in at [https://openpy.space/auth](https://openpy.space/auth).
2. Open **Menu → Bank Transfer** or go to `/bank-transfer`.
3. Tap **Local**.
4. Choose **InstaPay** or **PESONet**.
5. Select the destination bank (search if needed).
6. Enter **PHP amount**, **account name**, **account number** (10–16 digits).
7. Optional: receipt email.
8. Confirm available OUSD covers amount + fee.
9. Tap **Send Money** — watch the processing modal.
10. Save the reference from the success (or pending) result.

**Tip:** Top up first via Cash In or Apple Pay if balance is short.

---

## Tutorial — International

1. From `/bank-transfer`, tap **International**.
2. Follow the on-screen path for cross-border / e-wallet destinations (where enabled).
3. Confirm amounts and fees before send.

---

## Who it’s for

- Freelancers paying PH suppliers.
- Families moving wallet balance to a bank account.
- Merchants sweeping OUSD to operating accounts.
- Anyone who needs InstaPay speed or PESONet size.

---

## FAQ

**What currency leaves my wallet?**  
OpenPay debits **OUSD**; the rail pays out **PHP**.

**Why did I see “insufficient” but I have OUSD?**  
Your OpenPay balance can be fine while the **partner PHP float** (PayMongo/UnionBank source wallet) is empty. Contact support / ops to fund the rail.

**Is there a fee?**  
A flat **₱10** product fee per local transfer (shown on the form).

**Can I pay a bank directly with Apple Pay?**  
No — Apple Pay tops up OUSD first; then Bank Transfer sends from balance.

---

## Related features

- Cash In — [https://openpy.space/cash-in](https://openpy.space/cash-in)
- Apple Pay top-up — [https://openpy.space/topup-apple-pay](https://openpy.space/topup-apple-pay)
- QR Pay — [https://openpy.space/qr-pay](https://openpy.space/qr-pay)
- Express Send — [https://openpy.space/send](https://openpy.space/send)

---

## Closing

**Pick a bank. Enter the account. Send with InstaPay or PESONet. Know if it worked.**

**Start here →** [https://openpy.space/bank-transfer](https://openpy.space/bank-transfer)
',
  'Open Bank Transfer',
  'https://openpy.space/bank-transfer'
);
