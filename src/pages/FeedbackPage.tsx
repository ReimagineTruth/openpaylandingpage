import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, MessageSquare, ThumbsUp, Send, CheckCircle } from "lucide-react";

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("general");

  const testimonials = [
    { name: "Alex K.", handle: "@alex_pi", rating: 5, text: "OpenPay made sending Pi so easy. The express send feature is incredibly fast and the 170+ currency support is a game changer!", avatar: "A" },
    { name: "Maria S.", handle: "@maria_pioneer", rating: 5, text: "The merchant POS dashboard is exactly what my business needed. Accepting Pi payments has never been simpler.", avatar: "M" },
    { name: "James L.", handle: "@james_web3", rating: 5, text: "Virtual cards linked to my Pi wallet? Amazing! I can now spend Pi anywhere online. The security with MPIN is top notch.", avatar: "J" },
    { name: "Sophie R.", handle: "@sophie_fintech", rating: 4, text: "Love the savings feature with 4.50% APY. Moving funds between wallet and savings is seamless. Great UI design too!", avatar: "S" },
    { name: "David C.", handle: "@david_crypto", rating: 5, text: "The checkout link feature is perfect for my freelance work. Clients can pay me in Pi with just a link. Invoicing is beautiful.", avatar: "D" },
    { name: "Priya M.", handle: "@priya_global", rating: 5, text: "Supporting 170+ currencies means I can receive Pi from clients worldwide. OpenPay truly makes Pi borderless.", avatar: "P" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">User Feedback</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              What Pioneers <span className="text-gradient">are saying</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from real OpenPay users around the world.
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-card transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.handle}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={14} className={s <= t.rating ? "text-yellow-400 fill-yellow-400" : "text-border"} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* Feedback Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg mx-auto">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-elevated">
              {submitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">Your feedback helps us improve OpenPay for everyone.</p>
                  <button onClick={() => { setSubmitted(false); setRating(0); }} className="mt-4 text-accent text-sm font-semibold">Submit another</button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MessageSquare size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Share Your Feedback</h3>
                      <p className="text-xs text-muted-foreground">Help us make OpenPay better</p>
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-sm font-semibold text-foreground mb-2">Rate your experience</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => (
                        <button key={s} onMouseEnter={() => setHoverRating(s)} onMouseLeave={() => setHoverRating(0)} onClick={() => setRating(s)} className="transition-transform hover:scale-110">
                          <Star size={28} className={`transition-colors ${s <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-border"}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {["general", "wallet", "payments", "merchant", "cards", "savings"].map(c => (
                        <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${category === c ? "bg-accent text-white" : "bg-secondary text-muted-foreground hover:text-foreground"}`}>
                          {c.charAt(0).toUpperCase() + c.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Your feedback</p>
                    <textarea className="w-full h-24 rounded-xl border border-border bg-background p-3 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Tell us what you love or what we can improve..." />
                  </div>

                  <button onClick={() => setSubmitted(true)} className="w-full py-3 rounded-full bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <Send size={16} /> Submit Feedback
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
