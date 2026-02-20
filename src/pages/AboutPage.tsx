import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Users, Zap, Shield } from "lucide-react";
import openPayLogo from "@/assets/openpay-logo.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src={openPayLogo} alt="OpenPay" className="w-16 h-16 rounded-2xl object-cover" />
            </div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About OpenPay</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              The future of <span className="text-gradient">Web3 payments</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              OpenPay is a Web3 digital currency payment platform powered by Pi Network. We're building the infrastructure for the next generation of global, borderless digital payments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To make Pi Network's digital currency accessible to everyone through a stable, secure, and user-friendly payment platform — bridging Web3 with everyday commerce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We support 170+ currencies, giving users around the world the ability to send, receive, and convert Pi with ease.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-hero rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <h2 className="text-2xl font-bold text-primary-foreground mb-4 relative z-10">Powered by Pi Network</h2>
              <p className="text-primary-foreground/70 leading-relaxed relative z-10">
                Built on Pi Network's decentralized infrastructure, OpenPay leverages the world's most accessible cryptocurrency to power real-world payments, invoices, and merchant solutions.
              </p>
              <a href="https://openpay-space.vercel.app/auth" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-accent rounded-full font-semibold text-sm hover:opacity-90 transition-opacity relative z-10">
                Join OpenPay <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: "170+ Currencies", desc: "Global currency support for Pi and fiat" },
              { icon: Users, title: "Growing Community", desc: "Thousands of Pioneers using OpenPay daily" },
              { icon: Zap, title: "Instant Payments", desc: "Sub-second transaction confirmation" },
              { icon: Shield, title: "Bank-Grade Security", desc: "MPIN, biometric & Pi Auth protection" },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-5 border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto"><f.icon size={20} className="text-accent" /></div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
