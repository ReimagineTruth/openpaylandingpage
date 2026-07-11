import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";
import { supabase } from "@/utils/supabase";

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('date', { ascending: false });

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

  const categoryColor: Record<string, string> = {
    Product: "bg-gradient-to-r from-accent/20 to-accent/10 text-accent border border-accent/30",
    Guide: "bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-600 border border-green-500/30",
    Update: "bg-gradient-to-r from-orange-500/20 to-orange-500/10 text-orange-600 border border-orange-500/30",
    Insight: "bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-600 border border-purple-500/30",
    Security: "bg-gradient-to-r from-red-500/20 to-red-500/10 text-red-600 border border-red-500/30",
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Blog</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              News & <span className="text-gradient">updates</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Stay up to date with the latest OpenPay product updates, guides, and Web3 insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {posts.map((post, i) => (
              <Link key={post.id || post.slug} to={`/blog/${post.id || post.slug}`}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-card to-background rounded-xl border border-border p-5 hover:border-accent/50 hover:shadow-lg transition-all cursor-pointer group h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColor[post.category] || "bg-secondary text-foreground border border-border"} uppercase tracking-wider`}>{post.category}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3">{post.desc}</p>
                  <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-lg p-3 mb-3 border border-accent/20">
                    <p className="text-xs font-semibold text-foreground italic">"{post.hero}"</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-foreground/60">
                    <div className="flex items-center gap-1"><Calendar size={12} className="text-accent" />{post.date}</div>
                    <div className="flex items-center gap-1"><User size={12} className="text-accent" />{post.author}</div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
