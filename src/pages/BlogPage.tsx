import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import { supabase } from "@/utils/supabase";

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = supabase
          .from('blog_posts')
          .select('*')
          .order('date', { ascending: false });
        const timeout = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Supabase timeout')), 4000)
        );
        const { data, error } = await Promise.race([query, timeout]);

        if (error) {
          console.error('Error fetching posts:', error);
          // Fallback to hardcoded data if Supabase fails
          setPosts(getFallbackPosts());
        } else if (data) {
          setPosts(data);
        }
      } catch (err) {
        console.error('Error:', err);
        setPosts(getFallbackPosts());
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const getFallbackPosts = () => [
    { id: "openpay-apple-pay", title: "OpenPay Apple Pay — Face ID Top-Ups for OUSD", date: "Aug 10, 2026", author: "OpenPay Team", category: "Product", desc: "Add OUSD with Apple Pay on Safari and iOS. Short on balance? OpenPay deep-links you to Apple Pay top-up from Send, Bank Transfer, and QR Pay — then you finish with wallet.", hero: "Confirm with Face ID. Credit OUSD. Keep moving." },
    { id: "openpay-bank-transfer", title: "OpenPay Bank Transfer — InstaPay & PESONet from Your Wallet", date: "Aug 10, 2026", author: "OpenPay Team", category: "Product", desc: "Transfer OUSD to any Philippine bank via InstaPay or PESONet. Pick a bank, enter account details, confirm — track processing, success, or failure in clear modals.", hero: "Wallet to bank. Local rails. Clear status." },
    { id: "openpay-cash-in", title: "OpenPay Cash In — QR Ph, E-Wallets & Global Cards", date: "Aug 10, 2026", author: "OpenPay Team", category: "Product", desc: "Top up OUSD via local bank QR Ph, GCash, Maya, GrabPay, ShopeePay, or cards and Apple Pay. One Cash In hub — pick a rail and go.", hero: "Add money. Any rail. Instant OUSD." },
    { id: "openpay-new-features-blog-pack", title: "OpenPay — New Features Blog Pack (after QR Pay)", date: "Aug 10, 2026", author: "OpenPay Team", category: "Update", desc: "After QR Pay: Cash In, Bank Transfer, Apple Pay, PayMongo Links, and a redesigned Services Menu — the full fund → earn → send → get paid loop.", hero: "Fund. Earn. Send. Get paid." },
    { id: "openpay-paymongo-payment-links", title: "OpenPay PayMongo Payment Links — Share PHP Checkout Like QR Pay", date: "Aug 10, 2026", author: "OpenPay Team", category: "Product", desc: "Generate PayMongo Payment Links from OpenPay. Share a URL or QR, collect PHP via e-wallets and cards, and receive OUSD when the link is paid.", hero: "Create a link. Share it. Get paid in OUSD." },
    { id: "openpay-services-menu", title: "OpenPay Services Menu — Redesigned Transaction Grid", date: "Aug 10, 2026", author: "OpenPay Team", category: "Update", desc: "Browse every OpenPay action from one Services screen. Transactions now use a white 4-column card — Express Send, Bank Transfer, Cash In, PayMongo Links, and more — with no overlapping labels.", hero: "Every service. One screen. Labels you can actually read." },
    { id: "openpay-qr-pay", title: "OpenPay QR Pay — Accept Payments with QR Codes & Links", date: "Aug 6, 2026", author: "OpenPay Team", category: "Product", desc: "QR Pay turns any phone into a checkout. Create a branded payment page, share a QR or link, and get paid with Pi, OpenPay Wallet, Virtual Card, or OpenPay Pro — no forms required.", hero: "Create a checkout. Share it. Get paid." },
    { id: "meet-openpay-ai", title: "Meet OpenPay AI — Your Conversational Money Assistant", date: "Jul 27, 2026", author: "OpenPay Team", category: "Product", desc: "Check balances, send money, explore features, and get financial guidance in plain language — built into the OpenPay wallet.", hero: "Ask. Act. Keep the conversation going." },
    { id: "openpay-third-party-integration", title: "OpenPay Launches Third-Party Integration with OpenPay Auth & OpenPay Checkout", date: "Jul 27, 2026", author: "OpenPay Team", category: "Product", desc: "One Integration. Secure Authentication. Seamless Payments. OpenPay now supports third-party app integration via OAuth 2.0 and Checkout APIs.", hero: "One Account. One Checkout. Unlimited Possibilities." },
    { id: "openpay-home-dashboard-ui-refresh", title: "OpenPay Home Dashboard: New UI/UX for Every Money Moment", date: "Jul 25, 2026", author: "OpenPay Team", category: "Update", desc: "A guided look at the refreshed home experience — Wallet, Savings, Credit, Loans, Cards, Buy, Swap, Mining, Analytics, and OpenNFT — in one place.", hero: "Your balance is the center. Your next action is one tap away." },
    { id: "openledger-dashboard-ui-refresh", title: "OpenLedger Dashboard: A Fresh UI/UX for the Live Ledger", date: "Jul 24, 2026", author: "OpenPay Team", category: "Update", desc: "How the new home experience makes network activity clearer, faster, and easier to explore — on desktop and mobile.", hero: "One composition. Live metrics. Real-time feed." },
    { id: "openledger-public-explorer", title: "OpenLedger: The Public Explorer for the OpenPay Ecosystem", date: "Jul 23, 2026", author: "OpenPay Team", category: "Product", desc: "A complete guide to every feature on the live, transparent ledger for OpenPay and OpenPay Pro — sealed on a SHA-256 hash chain and updated in near real time.", hero: "Live ledger. SHA-256 hash chain. Immutable audit." },
    { id: "openpay-telegram-mini-app", title: "OpenPay Now Available as a Telegram Mini App", date: "Jul 11, 2026", author: "OpenPay Team", category: "Product", desc: "Access OpenPay directly inside Telegram via our Mini App for seamless, fast, and secure payments right where conversations happen.", hero: "The Future of Payments is Here" },
    { id: "openpay-nft-marketplace", title: "OpenPay NFT — Complete Feature Blog", date: "Jul 10, 2026", author: "OpenPay Team", category: "Product", desc: "A creator-first NFT marketplace built into OpenPay. Mint, sell, auction, gift, chat, and run your own store — all from one app, on web and inside Pi Browser.", hero: "Your NFT studio. Your global stage." },
    { id: "core-wallet-features-guide", title: "Complete Guide to OpenPay Core Wallet Features", date: "Jul 10, 2026", author: "OpenPay Team", category: "Guide", desc: "Master OpenPay's core wallet features: Express Send, QR payments, invoices, activity tracking, currency conversion, and security tools.", hero: "One screen. Every action a Pioneer needs." },
    { id: "openpay-launches-merchant-pos", title: "OpenPay Launches Merchant POS for Pi Payments", date: "Jul 9, 2026", author: "OpenPay Team", category: "Product", desc: "Introducing the OpenPay Merchant POS — accept Pi payments in-store and online with a full dashboard, refund management, and transaction history.", hero: "Your phone is your terminal." },
    { id: "utility-apps-ecommerce-guide", title: "OpenPay Utility Apps: Complete E-commerce Solution", date: "Jul 8, 2026", author: "OpenPay Team", category: "Product", desc: "Explore OpenPay's utility apps: Merchant POS, Payment Links, Virtual Cards, and more for complete payment solutions.", hero: "Your complete payment toolkit." },
    { id: "merchant-portal-complete-guide", title: "OpenPay Merchant Portal: Complete Business Management", date: "Jul 7, 2026", author: "OpenPay Team", category: "Guide", desc: "Master the OpenPay Merchant Portal: product management, analytics, checkout flows, and business operations.", hero: "Your business command center." },
    { id: "security-trust-comprehensive-guide", title: "Security & Trust: OpenPay's Complete Protection Framework", date: "Jul 6, 2026", author: "OpenPay Team", category: "Security", desc: "Learn about OpenPay's comprehensive security features: Pi-auth, transaction PIN, disputes, compliance, and trust mechanisms.", hero: "Built on trust. Secured by design." },
    { id: "notifications-growth-complete-guide", title: "Notifications & Growth: OpenPay's Engagement Ecosystem", date: "Jul 5, 2026", author: "OpenPay Team", category: "Update", desc: "Explore OpenPay's notification system, announcements, affiliate program, and Pi Ad Network for user engagement and business growth.", hero: "Never miss a beat. Always grow." },
    { id: "wallet-profile-settings-guide", title: "Wallet, Profile, and Settings: Complete User Management", date: "Jul 4, 2026", author: "OpenPay Team", category: "Guide", desc: "Master OpenPay's dashboard, profile management, settings configuration, contacts, and QR scanner for complete user control.", hero: "Your wallet. Your way." },
    { id: "topup-funding-complete-guide", title: "Top Up & Funding: Complete Guide to Adding Funds", date: "Jul 3, 2026", author: "OpenPay Team", category: "Guide", desc: "Learn all ways to fund your OpenPay wallet: Apple Pay, Google Pay, Stripe, PayPal, credit/debit cards, USDC/USDT, Venmo, and regional options.", hero: "Add funds. Any way you want." },
    { id: "virtual-card-checkout-guide", title: "Virtual Card & Checkout: Complete Payment Solution", date: "Jul 2, 2026", author: "OpenPay Team", category: "Product", desc: "Master OpenPay's virtual cards, hosted checkout, public payments, and thank-you pages for complete e-commerce integration.", hero: "Spend Pi anywhere online." },
    { id: "developer-api-complete-guide", title: "Developer & API: Complete Integration Guide", date: "Jul 1, 2026", author: "OpenPay Team", category: "Guide", desc: "Master OpenPay's API documentation, POS integration, merchant portal APIs, and developer tools for seamless application integration.", hero: "Build with Pi. Ship with confidence." },
    { id: "ecosystem-whitepapers-guide", title: "Ecosystem & Whitepapers: OpenPay's Strategic Vision", date: "Jun 30, 2026", author: "OpenPay Team", category: "Insight", desc: "Explore OpenPay's whitepapers, Pi Network integration, regulatory compliance, and strategic vision for the future of digital payments.", hero: "The future of Pi payments, documented." },
    { id: "earn-4.50-apy-pi-savings", title: "How to Earn 4.50% APY on Your Pi with OpenPay Savings", date: "Jun 29, 2026", author: "OpenPay Team", category: "Guide", desc: "Learn how to move your Pi from your wallet to savings and start earning competitive yield with OpenPay's built-in savings feature.", hero: "Let your Pi work for you." },
    { id: "introducing-virtual-cards", title: "Introducing OpenPay Virtual Cards", date: "Jun 25, 2026", author: "OpenPay Team", category: "Product", desc: "Your OpenPay virtual card is now live. Linked to your Pi balance, you can spend Pi anywhere that accepts digital payments.", hero: "Your Pi, now spendable anywhere." },
    { id: "170-currencies-support", title: "OpenPay Now Supports 170+ Currencies", date: "Jun 20, 2026", author: "OpenPay Team", category: "Update", desc: "We've expanded our currency conversion to support over 170 global currencies, making Pi truly borderless for users worldwide.", hero: "Pi without borders." },
    { id: "pi-network-openpay-future", title: "Pi Network & OpenPay: The Future of Web3 Commerce", date: "Jun 15, 2026", author: "OpenPay Team", category: "Insight", desc: "A deep dive into how OpenPay is building the payment layer for Pi Network's ecosystem and what it means for the future of decentralized commerce.", hero: "The future of money is here." },
  ];

  const categoryDot: Record<string, string> = {
    Product: "bg-accent",
    Guide: "bg-emerald-500",
    Update: "bg-orange-500",
    Insight: "bg-purple-500",
    Security: "bg-red-500",
  };

  const cardTint: Record<string, string> = {
    Product: "from-accent/15 to-accent/5",
    Guide: "from-emerald-500/15 to-emerald-500/5",
    Update: "from-orange-500/15 to-orange-500/5",
    Insight: "from-purple-500/15 to-purple-500/5",
    Security: "from-red-500/15 to-red-500/5",
  };

  const categories = useMemo(() => {
    const set = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));
    return ["All", ...set];
  }, [posts]);

  const visiblePosts = useMemo(
    () => (activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory)),
    [posts, activeCategory]
  );

  const featured = visiblePosts[0];
  const rest = visiblePosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-44 md:pb-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-semibold text-foreground/70">
              Learn
            </span>
            <h1 className="mt-7 text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight">
              OpenPay <span className="text-gradient">blog</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              All the latest news, updates, and announcements from OpenPay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 sm:px-6 pb-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat !== "All" && (
                <span className={`h-2 w-2 rounded-full ${categoryDot[cat] || "bg-muted-foreground"}`} />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="px-5 sm:px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <Link to={`/blog/${featured.id || featured.slug}`} className="group block">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-4xl bg-card border border-border p-5 sm:p-8 md:p-10 hover:shadow-elevated transition-shadow"
              >
                <div
                  className={`rounded-3xl bg-gradient-to-br ${cardTint[featured.category] || "from-secondary to-background"} aspect-[16/10] flex items-center justify-center p-8`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-foreground/80 leading-snug text-center tracking-tight">
                    "{featured.hero}"
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground/60">
                    <span className={`h-2 w-2 rounded-full ${categoryDot[featured.category] || "bg-muted-foreground"}`} />
                    {featured.category}
                  </div>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground leading-[1.15] tracking-tight group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{featured.desc}</p>
                  <p className="mt-6 text-sm text-muted-foreground">
                    <span className="italic">{featured.author}</span> · {featured.date}
                  </p>
                </div>
              </motion.article>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="px-5 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rest.map((post, i) => (
            <Link key={post.id || post.slug} to={`/blog/${post.id || post.slug}`} className="group block h-full">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i, 5) * 0.05 }}
                className="h-full flex flex-col rounded-4xl bg-card border border-border p-4 sm:p-5 hover:shadow-elevated transition-shadow"
              >
                <div
                  className={`rounded-3xl bg-gradient-to-br ${cardTint[post.category] || "from-secondary to-background"} aspect-[16/10] flex items-center justify-center p-6`}
                >
                  <p className="text-lg sm:text-xl font-bold text-foreground/75 text-center leading-snug tracking-tight">
                    "{post.hero}"
                  </p>
                </div>
                <div className="flex-1 flex flex-col px-1.5 pt-5 pb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-[1.2] tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed line-clamp-3">{post.desc}</p>
                  <div className="mt-auto pt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground/70">
                      <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[post.category] || "bg-muted-foreground"}`} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
