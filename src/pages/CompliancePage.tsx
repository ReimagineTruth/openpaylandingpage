import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Globe, FileText, Lock, Server } from "lucide-react";

const CompliancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Compliance & <span className="text-gradient">Regulations</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              OpenPay adheres to the highest regulatory standards to ensure safe, transparent, and compliant digital currency operations worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { icon: Shield, title: "KYC/AML", desc: "Full Know Your Customer and Anti-Money Laundering compliance through Pi Network's native identity verification." },
              { icon: Globe, title: "Multi-Jurisdiction", desc: "Compliant with financial regulations across 170+ supported countries and jurisdictions." },
              { icon: Lock, title: "Data Protection", desc: "GDPR, CCPA, and global data protection standards enforced across all user data." },
              { icon: FileText, title: "Transparent Reporting", desc: "Regular compliance audits and transparent reporting of our operational standards." },
              { icon: Server, title: "Secure Infrastructure", desc: "SOC 2 Type II compliant infrastructure with 99.9% uptime guarantee." },
              { icon: CheckCircle, title: "Consumer Protection", desc: "Dispute resolution, refund policies, and merchant accountability built into every transaction." },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><f.icon size={18} className="text-accent" /></div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border p-8 space-y-6">
              {[
                { title: "Regulatory Framework", content: "OpenPay operates in compliance with applicable financial services regulations in all jurisdictions where we offer services. We work closely with Pi Network's governance to ensure alignment with decentralized finance standards and traditional regulatory requirements." },
                { title: "Anti-Money Laundering (AML)", content: "All OpenPay transactions are monitored for suspicious activity using advanced AI-powered detection systems. We maintain comprehensive transaction records and cooperate with law enforcement agencies when required by applicable laws." },
                { title: "Know Your Customer (KYC)", content: "OpenPay leverages Pi Network's KYC verification to ensure all users are properly identified. Additional verification may be required for high-value transactions or merchant accounts." },
                { title: "Sanctions Compliance", content: "OpenPay screens all transactions against global sanctions lists including OFAC, EU, and UN sanctions. Transactions involving sanctioned entities or jurisdictions are automatically blocked." },
                { title: "Consumer Protection", content: "We provide clear, transparent fee structures, dispute resolution mechanisms, and refund capabilities for all transactions processed through our platform. Merchant accountability is enforced through our Terms of Service." },
                { title: "Audit & Reporting", content: "OpenPay undergoes regular third-party security and compliance audits. We publish annual transparency reports detailing our compliance efforts, enforcement actions, and platform statistics." },
              ].map(s => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CompliancePage;
