import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Trash2, Download, Lock, Bell } from "lucide-react";

const GDPRPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Data Protection</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              GDPR <span className="text-gradient">Compliance</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              OpenPay is fully committed to protecting your personal data under the General Data Protection Regulation (GDPR) and global data privacy laws.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {[
              { icon: Eye, title: "Right to Access", desc: "Request a copy of all personal data we hold about you at any time through your account settings." },
              { icon: Trash2, title: "Right to Erasure", desc: "Request deletion of your personal data. We will remove your data within 30 days, subject to legal obligations." },
              { icon: Download, title: "Data Portability", desc: "Export your data in a machine-readable format. Download transaction history, account info, and more." },
              { icon: Lock, title: "Data Minimization", desc: "We only collect data that is strictly necessary for providing our services. No unnecessary tracking." },
              { icon: Shield, title: "Encryption", desc: "All personal data is encrypted at rest and in transit using AES-256 and TLS 1.3 protocols." },
              { icon: Bell, title: "Breach Notification", desc: "In the unlikely event of a data breach, we will notify affected users and authorities within 72 hours." },
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
                { title: "Data Controller", content: "OpenPay acts as the data controller for all personal data processed through our platform. Our Data Protection Officer (DPO) can be contacted at dpo@openpay.space." },
                { title: "Legal Basis for Processing", content: "We process your data based on: (a) contractual necessity for providing our services, (b) your explicit consent for marketing communications, (c) legitimate interests for fraud prevention and platform security, and (d) legal obligations for financial regulatory compliance." },
                { title: "Data Retention", content: "We retain your personal data only for as long as necessary to provide our services or as required by applicable laws. Financial transaction records are retained for 7 years as required by financial regulations. You can request early deletion of non-regulatory data at any time." },
                { title: "International Transfers", content: "When we transfer personal data outside the EEA, we ensure adequate protection through Standard Contractual Clauses (SCCs), adequacy decisions, or other approved mechanisms under GDPR Article 46." },
                { title: "Cookies & Tracking", content: "OpenPay uses essential cookies for platform functionality and optional analytics cookies with your explicit consent. You can manage your cookie preferences at any time through our cookie settings panel." },
                { title: "Children's Data", content: "OpenPay does not knowingly collect personal data from children under 16. If we become aware of such collection, we will delete the data immediately." },
                { title: "Your Rights", content: "Under GDPR, you have the right to: access, rectify, erase, restrict processing, object to processing, and port your data. To exercise any of these rights, contact privacy@openpay.space or use the Privacy Center in your account settings." },
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

export default GDPRPage;
