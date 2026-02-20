import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  { title: "OpenPay Launches Merchant POS for Pi Payments", date: "Feb 20, 2026", author: "OpenPay Team", category: "Product", desc: "Introducing the OpenPay Merchant POS — accept Pi payments in-store and online with a full dashboard, refund management, and transaction history." },
  { title: "How to Earn 4.50% APY on Your Pi with OpenPay Savings", date: "Feb 15, 2026", author: "OpenPay Team", category: "Guide", desc: "Learn how to move your Pi from your wallet to savings and start earning competitive yield with OpenPay's built-in savings feature." },
  { title: "Introducing OpenPay Virtual Cards", date: "Feb 10, 2026", author: "OpenPay Team", category: "Product", desc: "Your OpenPay virtual card is now live. Linked to your Pi balance, you can spend Pi anywhere that accepts digital payments." },
  { title: "OpenPay Now Supports 170+ Currencies", date: "Feb 5, 2026", author: "OpenPay Team", category: "Update", desc: "We've expanded our currency conversion to support over 170 global currencies, making Pi truly borderless for users worldwide." },
  { title: "Pi Network & OpenPay: The Future of Web3 Commerce", date: "Jan 28, 2026", author: "OpenPay Team", category: "Insight", desc: "A deep dive into how OpenPay is building the payment layer for Pi Network's ecosystem and what it means for the future of decentralized commerce." },
];

const categoryColor: Record<string, string> = {
  Product: "bg-accent/10 text-accent",
  Guide: "bg-green-100 text-green-700",
  Update: "bg-orange-100 text-orange-700",
  Insight: "bg-purple-100 text-purple-700",
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
              <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-card transition-all cursor-pointer group">
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
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
