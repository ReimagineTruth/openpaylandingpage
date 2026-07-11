-- Simple Supabase Database Setup for OpenPay Admin System
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/oiraqjxgipvdmffljbae/sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'OpenPay Team',
  category TEXT NOT NULL,
  desc TEXT NOT NULL,
  meta TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  hero TEXT NOT NULL,
  content TEXT NOT NULL,
  cta_text TEXT NOT NULL,
  cta_link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create site_content table
CREATE TABLE IF NOT EXISTS site_content (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page, section)
);

-- Create users table (for admin management)
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_content_updated_at BEFORE UPDATE ON site_content
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default admin user
INSERT INTO users (email, role)
VALUES ('admin@openpy.space', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts (public read for now, will restrict later)
CREATE POLICY "Public read access for blog_posts" ON blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for blog_posts" ON blog_posts
  FOR ALL USING (true);

-- Create policies for site_content (public read for now, will restrict later)
CREATE POLICY "Public read access for site_content" ON site_content
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for site_content" ON site_content
  FOR ALL USING (true);

-- Create policies for users (public read for now, will restrict later)
CREATE POLICY "Public read access for users" ON users
  FOR SELECT USING (true);

CREATE POLICY "Admin write access for users" ON users
  FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_date ON blog_posts(date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_site_content_page ON site_content(page);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Insert sample blog post
INSERT INTO blog_posts (slug, title, date, author, category, desc, meta, tags, hero, content, cta_text, cta_link)
VALUES (
  'openpay-nft-marketplace',
  'OpenPay NFT — Complete Feature Blog',
  'Jul 10, 2026',
  'OpenPay Team',
  'Product',
  'A creator-first NFT marketplace built into OpenPay. Mint, sell, auction, gift, chat, and run your own store — all from one app, on web and inside Pi Browser.',
  'Mint, sell, auction, gift, chat, and run your own NFT store — all from one app.',
  ARRAY['nft', 'marketplace', 'web3', 'creators'],
  'Your NFT studio. Your global stage.',
  '# OpenPay NFT — Complete Feature Blog

A creator-first NFT marketplace built into OpenPay. Mint, sell, auction, gift, chat, and run your own store — all from one app, on web and inside Pi Browser.

## Mint Your First NFT

**Where:** `/web3/nft/create`

Upload image, GIF, video, or audio. Set name, unique code, description, category, and royalty %. Choose supply (1 = 1/1, more = limited edition). Pick currency: OUSD, USD, or Pi.

**Sale Type picker:** Fixed Price (instant buy) or 🔥 **Live Auction** (real-time bidding war that launches the moment you mint).

**Why creators love it:** zero gas fees, fully on-platform escrow, your buyers pay with their OpenPay balance, virtual card, or Pi.

## Live Realtime Auctions

**Where:** any NFT detail page

- ⏱️ Countdown updates every second (turns red and pulses in the last hour)
- 📈 Current bid jumps in realtime with a green glow animation each time someone bids
- 👑 Leader nameplate switches live
- 📜 Recent bids feed shows the last 5 bids and bidders
- 🏆 Winner banner appears the second the auction ends — no refresh needed
- 💸 Funds are escrowed safely; outbid users are refunded automatically

## Global Live Chat

**Where:** marketplace header → 💬 icon, or `/web3/nft/chat`

Real-time global chat for every signed-in OpenPay user. **Share NFT button:** pick from NFTs you own or created → it renders as a clickable preview card in the chat. Live indicator, message timestamps, delete-your-own. Built on Supabase realtime — messages stream in instantly.

Use it to: hype your drop, find collectors, run giveaways, build a fandom.

## Status Badges

Every NFT card shows live availability:
- 🟢 **Available**
- 🟠 **Limited** (≤ 3 left or ≤ 10% of supply)
- 🔴 **Sold Out**
- 🔵 **Live Auction**

Visible on the marketplace grid, detail page, dashboard, and store pages.

## Buy & Resale Listings

Buy with **OpenPay balance**, **Virtual Card**, or **Pi** (in Pi Browser). Virtual card details are masked behind an 👁️ eye toggle — screenshot/screen-record protection. Owners can **list for resale** at any price, edit the price anytime, or cancel. Auto-receipt with reference, method, masked card, Pi TxID.

## Gifting NFTs

Send any NFT you own to another OpenPay user by **@username**. Add a personal message — recipient sees a celebratory burst on delivery.

## Creator Store Profile

**Where:** `/web3/nft/store/settings`

Build a Stripe/PayPal-grade storefront for your collection:
- Custom **handle** (your URL: `/web3/nft/store/<handle>`)
- Display name, bio, banner image, avatar
- Category (collectibles, art, music, gaming, photography, etc.)
- Social links: **Website · Twitter/X · Instagram · Facebook · YouTube · Telegram · Discord · Public email**
- Verified badge for trusted creators
- "Feature my NFTs" toggle for marketing showcase

## Followers & Following

**Follow / Unfollow** any store with one tap. Stats grid shows **Followers** and **Following** counts. Tap either count to open a list of users — see their avatar, name, bio, verified badge, and jump directly to their store.

## Storefront Page

Every store page shows:
- Store value, NFTs collected, NFTs created, followers, following
- Tabs: **Collected · Created · Activity · Offers**
- Grid or list view
- All linked socials with icon shortcuts
- One-tap share / copy store ID

## Smooth, Always-Fresh Marketplace

Pull-to-refresh + auto-refresh when you scroll to the bottom. Skeleton loaders — never a long blank screen. Search across NFTs, stores, and creators.

## Transparent History (OpenLedger)

Each NFT detail page shows the full chain of mints, sales, gifts, and resales — with timestamps and amounts. Public, immutable, audit-friendly.

## Pi Network Integration

- **Pi Ad Network rewarded ads** play before Pi authentication on `/auth`
- Mining activation via rewarded ads
- Pi payments inside the marketplace for any NFT priced in Pi
- Optimized UX when running inside Pi Browser (email sign-in is hidden there; outside Pi Browser email + Apple sign-in are available)

## Security & Trust

Row-level security on every NFT table. Auction escrow + automatic outbid refunds. Virtual card masking on detail/buy modals. No client-side admin checks — all role enforcement server-side. 2FA, MPIN, and account locking carry over from OpenPay core.

## Mobile-First, PWA-Ready

Floating bottom nav on the dashboard. Smooth bottom-sheet modals (buy, gift, list, auction, bid, follow list). Works in Pi Browser, mobile Safari, Chrome, and as an installed PWA.

## Roadmap

- Bundled drops
- Creator analytics dashboard upgrades
- NFT-gated content
- Cross-store collabs
- Open marketplace API for third-party apps

**Try it now:** open OpenPay → menu → **NFT Marketplace** → 🔥 Mint or browse.',
  'Enter NFT Marketplace',
  'https://openpy.space/web3'
)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample site content
INSERT INTO site_content (page, section, content)
VALUES 
  ('homepage', 'hero', '{"headline": "The Future of Pi Payments", "subheadline": "Send, receive, and manage Pi with ease", "cta_text": "Get Started", "cta_link": "/auth"}'),
  ('homepage', 'features', '{"title": "Why Choose OpenPay?", "description": "Experience the next generation of digital payments"}')
ON CONFLICT (page, section) DO NOTHING;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Database setup completed successfully!';
  RAISE NOTICE 'Tables created: blog_posts, site_content, users';
  RAISE NOTICE 'Default admin user: admin@openpy.space';
  RAISE NOTICE 'Sample data inserted';
END $$;
