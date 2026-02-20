import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl font-bold text-foreground mt-3 mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: February 20, 2026</p>
            <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
              {[
                { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, make a payment, or contact us for support. This includes your Pi Network username, transaction history, device information, and usage data." },
                { title: "2. How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services; process transactions; send you technical notices; respond to comments and questions; and monitor and analyze trends and usage." },
                { title: "3. Information Sharing", content: "We do not share, sell, or rent your personal information to third parties except as described in this policy. We may share information with vendors who assist us in providing our services, subject to confidentiality agreements." },
                { title: "4. Data Security", content: "We implement bank-grade security measures including MPIN protection, biometric authentication, SSL encryption, and Pi Network's native authentication to protect your data and funds." },
                { title: "5. Your Rights", content: "You have the right to access, update, or delete your personal information at any time through your account settings. You may also contact us directly to exercise these rights." },
                { title: "6. GDPR Compliance", content: "If you are in the European Economic Area, you have certain data protection rights under GDPR. OpenPay is committed to full GDPR compliance for all EU users." },
                { title: "7. Contact Us", content: "If you have questions about this Privacy Policy, please contact us at privacy@openpay.space or through the Help Center in the app." },
              ].map(s => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
