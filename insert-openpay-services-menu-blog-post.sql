-- Insert the OpenPay Services Menu blog post into Supabase
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
  'openpay-services-menu',
  'OpenPay Services Menu — Redesigned Transaction Grid',
  'Aug 10, 2026',
  'OpenPay Team',
  'Update',
  'Browse every OpenPay action from one Services screen. Transactions now use a white 4-column card — Express Send, Bank Transfer, Cash In, PayMongo Links, and more — with no overlapping labels.',
  'Browse every OpenPay action from one Services screen. Transactions now use a white 4-column card — Express Send, Bank Transfer, Cash In, PayMongo Links, and more — with no overlapping labels.',
  ARRAY['menu', 'services', 'ux', 'navigation', 'mobile', 'transactions'],
  'Every service. One screen. Labels you can actually read.',
  '# OpenPay Services Menu — Full Feature Blog

The **Services** menu is your OpenPay control center — Live Rates, Transactions, Secure banking, Merchant tools, and more. The Transactions row is redesigned as a **readable 4-column card** so every action label stays clear on mobile.

**Open it:** [https://openpy.space/menu](https://openpy.space/menu)  
**Sign in:** [https://openpy.space/auth](https://openpy.space/auth)

> Brand voice: signature blue canvas, white service cards, bold icons.  
> Base URL: `https://openpy.space`

---

## Why redesign Transactions?

The old top row squeezed **12 icons into one flex line**. On phones, labels collided:

> “Express… Pro Pro… Top- Up istor…”

The new layout matches **Secure banking**:

- Titled white card
- **4 columns × N rows**
- `line-clamp-2` labels
- Distinct icons (Send, Bank, Cash In, History…)

Same power — clearer thumbs.

---

## UI/UX mockup — Services (first viewport)

```
┌─────────────────────────────────┐
│  Services                       │  ← white on paypal-blue
│                                 │
│  ┌───────────────────────────┐  │
│  │ Live Rates                │  │
│  │ PI $0.08…   OUSD $1.00    │  │
│  │ 1 PI = … OUSD             │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ Transactions              │  │  sky header bar
│  │ ┌────┐┌────┐┌────┐┌────┐  │  │
│  │ │✈   ││↗   ││$   ││⇄   │  │  │
│  │ │Send││To  ││Pro ││Pro │  │  │
│  │ │    ││Pro ││Top ││Swap│  │  │
│  │ └────┘└────┘└────┘└────┘  │  │
│  │ ┌────┐┌────┐┌────┐┌────┐  │  │
│  │ │Cash││Bank││Xfer││Swap│  │  │
│  │ │In  ││Xfer││    ││    │  │  │
│  │ └────┘└────┘└────┘└────┘  │  │
│  │ … Request · Invoice · Hist│  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ Secure banking            │  │  green header
│  │ Wallet · KYC · AI · Card  │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │ Merchant services         │  │
│  │ QR Pay · PayMongo Links · │  │
│  │ Payment Link Creator · POS│  │
│  └───────────────────────────┘  │
│                                 │
│      [ Home ] [ Scan ] [ Menu ] │
└─────────────────────────────────┘
```

**Motion:** section stagger enter, icon hover lift (desktop), ios-active press on tap.

---

## Transactions map (what each tile does)

| Tile | Opens |
|------|--------|
| Express Send | `/send` |
| To Pro | `/send/pro` |
| Pro Top-up | OpenPay Pro money rail |
| Pro Swap / Withdraw | openpaypro.space |
| Cash In | `/cash-in` |
| Bank Transfer | `/bank-transfer` |
| Transfer | `/topup` |
| Swap | `/swap-withdrawal` |
| Request | `/request-payment` |
| Invoice | `/send-invoice` |
| History | `/topup-history` |

---

## Merchant services highlights (post–QR Pay)

| Tile | Why it matters |
|------|----------------|
| **QR Pay** | Branded OpenPay checkout |
| **PayMongo Links** | Shareable `pm.link` PHP checkout |
| **Payment Link Creator** | OpenPay-hosted links / embeds |
| **Merchant POS** | Counter sessions |
| **Buttons** | Pay buttons for sites |

---

## Tutorial — Find any feature in 10 seconds

1. Open [Services / Menu](https://openpy.space/menu).
2. Glance **Live Rates** for PI / OUSD.
3. In **Transactions**, tap the action (4-column grid — scroll the card if needed).
4. For selling: scroll to **Merchant services** → QR Pay or PayMongo Links.
5. For security: **Secure banking** → KYC, 2FA, Virtual Card.
6. Bottom nav: **Home · Scan QR · Menu**.

---

## Tutorial — Suggested journeys from Menu

**Fund → Send to bank**  
Cash In → (optional Apple Pay) → Bank Transfer.

**Get paid in PHP chat**  
PayMongo Links → Create → Share URL/QR.

**Get paid with OpenPay branding**  
QR Pay → Create → Share QR / link / button.

**Pay a friend**  
Express Send → amount → Pay.

---

## Design language

| Token | Use |
|-------|-----|
| `paypal-blue` canvas | Page background |
| White `rounded-[2.5rem]` cards | Section containers |
| Blue filled `1.25rem` icon tiles | Actions |
| Sky / green / blue / orange headers | Section identity |
| 10px bold labels, 2-line clamp | Mobile legibility |

---

## FAQ

**Where did “Top-Up History” go?**  
Same place — label shortened to **History** under Transactions.

**Where is PayMongo Links?**  
**Merchant services** card — subtitle *Shareable PHP checkout*.

**Why not keep the single icon row?**  
It looked “busy” on marketing screenshots and failed basic readability on small phones.

---

## Related features

- Bank Transfer — [https://openpy.space/bank-transfer](https://openpy.space/bank-transfer)
- Cash In — [https://openpy.space/cash-in](https://openpy.space/cash-in)
- PayMongo Links — [https://openpy.space/paymongo-links](https://openpy.space/paymongo-links)
- QR Pay — [https://openpy.space/qr-pay](https://openpy.space/qr-pay)
- Apple Pay — [https://openpy.space/topup-apple-pay](https://openpy.space/topup-apple-pay)

---

## Closing

**Services should feel powerful — not crowded. The new Transactions card makes every destination obvious.**

**Open Services →** [https://openpy.space/menu](https://openpy.space/menu)
',
  'Open Services',
  'https://openpy.space/menu'
);
