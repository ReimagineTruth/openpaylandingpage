import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  { id: "core-wallet-features-guide", title: "Complete Guide to OpenPay Core Wallet Features", date: "Feb 22, 2026", author: "OpenPay Team", category: "Guide", desc: "Master OpenPay's core wallet features: Express Send, QR payments, invoices, activity tracking, currency conversion, and security tools." },
  { id: "utility-apps-ecommerce-guide", title: "OpenPay Utility Apps: Complete E-commerce Solution", date: "Feb 21, 2026", author: "OpenPay Team", category: "Product", desc: "Explore OpenPay's utility apps: Merchant POS, Payment Links, Virtual Cards, and more for complete payment solutions." },
  { id: "openpay-launches-merchant-pos", title: "OpenPay Launches Merchant POS for Pi Payments", date: "Feb 20, 2026", author: "OpenPay Team", category: "Product", desc: "Introducing the OpenPay Merchant POS — accept Pi payments in-store and online with a full dashboard, refund management, and transaction history." },
  { id: "merchant-portal-complete-guide", title: "OpenPay Merchant Portal: Complete Business Management", date: "Feb 19, 2026", author: "OpenPay Team", category: "Guide", desc: "Master the OpenPay Merchant Portal: product management, analytics, checkout flows, and business operations." },
  { id: "security-trust-comprehensive-guide", title: "Security & Trust: OpenPay's Complete Protection Framework", date: "Feb 18, 2026", author: "OpenPay Team", category: "Security", desc: "Learn about OpenPay's comprehensive security features: Pi-auth, transaction PIN, disputes, compliance, and trust mechanisms." },
  { id: "notifications-growth-complete-guide", title: "Notifications & Growth: OpenPay's Engagement Ecosystem", date: "Feb 17, 2026", author: "OpenPay Team", category: "Update", desc: "Explore OpenPay's notification system, announcements, affiliate program, and Pi Ad Network for user engagement and business growth." },
  { id: "wallet-profile-settings-guide", title: "Wallet, Profile, and Settings: Complete User Management", date: "Feb 16, 2026", author: "OpenPay Team", category: "Guide", desc: "Master OpenPay's dashboard, profile management, settings configuration, contacts, and QR scanner for complete user control." },
  { id: "topup-funding-complete-guide", title: "Top Up & Funding: Complete Guide to Adding Funds", date: "Feb 14, 2026", author: "OpenPay Team", category: "Guide", desc: "Learn all ways to fund your OpenPay wallet: Apple Pay, Google Pay, Stripe, PayPal, credit/debit cards, USDC/USDT, Venmo, and regional options." },
  { id: "virtual-card-checkout-guide", title: "Virtual Card & Checkout: Complete Payment Solution", date: "Feb 13, 2026", author: "OpenPay Team", category: "Product", desc: "Master OpenPay's virtual cards, hosted checkout, public payments, and thank-you pages for complete e-commerce integration." },
  { id: "developer-api-complete-guide", title: "Developer & API: Complete Integration Guide", date: "Feb 12, 2026", author: "OpenPay Team", category: "Guide", desc: "Master OpenPay's API documentation, POS integration, merchant portal APIs, and developer tools for seamless application integration." },
  { id: "ecosystem-whitepapers-guide", title: "Ecosystem & Whitepapers: OpenPay's Strategic Vision", date: "Feb 11, 2026", author: "OpenPay Team", category: "Insight", desc: "Explore OpenPay's whitepapers, Pi Network integration, regulatory compliance, and strategic vision for the future of digital payments." },
  { id: "earn-4.50-apy-pi-savings", title: "How to Earn 4.50% APY on Your Pi with OpenPay Savings", date: "Feb 15, 2026", author: "OpenPay Team", category: "Guide", desc: "Learn how to move your Pi from your wallet to savings and start earning competitive yield with OpenPay's built-in savings feature." },
  { id: "introducing-virtual-cards", title: "Introducing OpenPay Virtual Cards", date: "Feb 10, 2026", author: "OpenPay Team", category: "Product", desc: "Your OpenPay virtual card is now live. Linked to your Pi balance, you can spend Pi anywhere that accepts digital payments." },
  { id: "170-currencies-support", title: "OpenPay Now Supports 170+ Currencies", date: "Feb 5, 2026", author: "OpenPay Team", category: "Update", desc: "We've expanded our currency conversion to support over 170 global currencies, making Pi truly borderless for users worldwide." },
  { id: "pi-network-openpay-future", title: "Pi Network & OpenPay: The Future of Web3 Commerce", date: "Jan 28, 2026", author: "OpenPay Team", category: "Insight", desc: "A deep dive into how OpenPay is building the payment layer for Pi Network's ecosystem and what it means for the future of decentralized commerce." },
];

const categoryColor: Record<string, string> = {
  Product: "bg-accent/10 text-accent",
  Guide: "bg-green-100 text-green-700",
  Update: "bg-orange-100 text-orange-700",
  Insight: "bg-purple-100 text-purple-700",
  Security: "bg-red-100 text-red-700",
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              News & <span className="text-gradient">updates</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay up to date with the latest OpenPay product updates, guides, and Web3 insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post, i) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-card transition-all cursor-pointer group h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${categoryColor[post.category] || "bg-secondary text-foreground"}`}>{post.category}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.desc}</p>
                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1"><Calendar size={11} />{post.date}</div>
                    <div className="flex items-center gap-1"><User size={11} />{post.author}</div>
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
