import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl font-bold text-foreground mt-3 mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: February 20, 2026</p>
            <div className="bg-card rounded-2xl border border-border p-8 space-y-6">
              {[
                { title: "1. Acceptance of Terms", content: "By accessing and using OpenPay, you accept and agree to be bound by the terms and provisions of this agreement. These Terms of Service constitute a legally binding agreement between you and OpenPay." },
                { title: "2. Description of Service", content: "OpenPay is a Web3 digital currency payment platform powered by Pi Network. We provide wallet services, payment processing, virtual cards, savings, and merchant tools for Pi Network users." },
                { title: "3. Pi Network Integration", content: "OpenPay is built on Pi Network's infrastructure. Your use of OpenPay is subject to Pi Network's terms and conditions. All Pi transactions are processed through the Pi Network blockchain." },
                { title: "4. User Responsibilities", content: "You are responsible for maintaining the confidentiality of your MPIN and security credentials. You agree not to share your MPIN, password, or OTP with anyone. You are responsible for all activities under your account." },
                { title: "5. Prohibited Activities", content: "You may not use OpenPay for any illegal activities, money laundering, fraud, or to circumvent Pi Network policies. Any suspected violations will result in immediate account suspension." },
                { title: "6. Service Availability", content: "While we strive for 99.9% uptime, we cannot guarantee uninterrupted access to OpenPay. We reserve the right to perform maintenance that may temporarily affect service availability." },
                { title: "7. Limitation of Liability", content: "OpenPay shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use our services." },
                { title: "8. Contact", content: "For questions about these terms, contact us at legal@openpay.space or through the Help Center in the app." },
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

export default TermsPage;
