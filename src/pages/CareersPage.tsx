import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Briefcase, Globe, Zap, Heart } from "lucide-react";

const CareersPage = () => {
  const roles = [
    { title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Pi Network Integration Specialist", dept: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Product Designer (Fintech)", dept: "Design", location: "Remote", type: "Full-time" },
    { title: "Community Growth Manager", dept: "Marketing", location: "Remote", type: "Full-time" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Careers</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Build the future of <span className="text-gradient">Web3 finance</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the OpenPay team and help shape the future of digital currency payments powered by Pi Network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
            {[
              { icon: Globe, title: "100% Remote", desc: "Work from anywhere in the world" },
              { icon: Zap, title: "Move Fast", desc: "Ship features that impact millions" },
              { icon: Heart, title: "Great Culture", desc: "Inclusive, diverse, and mission-driven" },
              { icon: Briefcase, title: "Competitive Pay", desc: "Salary + Pi token compensation" },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-5 border border-border text-center">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3 mx-auto"><f.icon size={18} className="text-accent" /></div>
                <h3 className="font-bold text-foreground mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Open Roles</h2>
            <div className="space-y-4">
              {roles.map((role, i) => (
                <motion.div key={role.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-5 border border-border flex items-center justify-between hover:border-accent/50 transition-colors cursor-pointer group">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{role.title}</h3>
                    <div className="flex gap-3">
                      <span className="text-xs text-muted-foreground">{role.dept}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{role.location}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{role.type}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Don't see your role? We're always looking for talented people.</p>
              <a href="mailto:careers@openpay.space" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Send Open Application <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareersPage;
