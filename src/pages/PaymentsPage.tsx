import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Link2, QrCode, Send, FileText, ExternalLink } from "lucide-react";

const PaymentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Payments</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-3 mb-4">
              Pay & receive Pi <span className="text-gradient">your way</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Express Send, QR codes, checkout links, payment links — every payment method in one app.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Express Send mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-3xl border border-border shadow-elevated p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Send size={18} className="text-accent" /></div>
                <div>
                  <h3 className="font-bold text-foreground">Express Send</h3>
                  <p className="text-xs text-muted-foreground">Send Pi instantly to anyone</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/20">
                  <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">S</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">sarah_pi</p>
                    <p className="text-[10px] text-muted-foreground">@sarah_pi · Pi Mainnet</p>
                  </div>
                  <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">Selected</span>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                  <p className="text-2xl font-bold text-foreground">π50.00</p>
                  <p className="text-[10px] text-muted-foreground mt-1">≈ $157.50 USD</p>
                </div>
                <div className="p-3 rounded-xl bg-secondary/50 border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Note (optional)</p>
                  <p className="text-sm text-muted-foreground">For coffee ☕</p>
                </div>
                <a href="https://openpay-space.vercel.app/auth" className="block w-full py-3 rounded-full bg-accent text-white text-center text-sm font-semibold">
                  Send π50.00
                </a>
              </div>
            </motion.div>

            {/* QR Code / Receive */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-3xl border border-border shadow-elevated p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><QrCode size={18} className="text-accent" /></div>
                <div>
                  <h3 className="font-bold text-foreground">Scan QR / Request</h3>
                  <p className="text-xs text-muted-foreground">Receive via QR or payment link</p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-44 h-44 mx-auto mb-4 rounded-2xl border-2 border-accent p-3 bg-white">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="grid grid-cols-7 grid-rows-7 gap-[1.5px] w-full h-full">
                      {Array.from({ length: 49 }).map((_, i) => (
                        <div key={i} className={`rounded-[1px] ${[0,1,2,3,4,5,6,7,13,14,20,21,27,28,29,30,31,32,33,34,42,48,47,46,45,44,43].includes(i) ? 'bg-accent' : Math.random() > 0.5 ? 'bg-foreground' : 'bg-transparent'}`} />
                      ))}
                    </div>
                    <div className="absolute w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">π</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-bold text-accent mb-1">OpenPay Store</p>
                <p className="text-[10px] text-muted-foreground mb-3">SCAN TO PAY · Manual payment available in OpenPay app</p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-full border border-border text-xs font-medium text-foreground">Download QR</button>
                  <button className="flex-1 py-2 rounded-full border border-border text-xs font-medium text-foreground">Print Store QR</button>
                </div>
              </div>
            </motion.div>

            {/* Checkout Link */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-3xl border border-border shadow-elevated p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Link2 size={18} className="text-accent" /></div>
                <div>
                  <h3 className="font-bold text-foreground">Checkout Link</h3>
                  <p className="text-xs text-muted-foreground">Create shareable payment pages</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-accent text-white text-xs font-semibold border-2 border-accent">OpenPay Wallet</button>
                  <button className="flex-1 py-2 rounded-lg border border-border text-xs font-medium text-foreground">Card</button>
                </div>
                <div className="p-3 rounded-xl border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Pay currency (170+ OpenPay currencies)</p>
                  <p className="text-sm font-semibold text-foreground">PI - Pi ▾</p>
                </div>
                <div className="p-3 rounded-xl border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                  <p className="text-xl font-bold text-foreground">π25.00</p>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-accent/5 border border-accent/20">
                  <span className="text-sm font-semibold text-foreground">Due today</span>
                  <span className="text-sm font-bold text-accent">π25.00 PI</span>
                </div>
                <a href="https://openpay-space.vercel.app/auth" className="block w-full py-3 rounded-full bg-accent text-white text-center text-sm font-semibold">Pay with OpenPay</a>
              </div>
            </motion.div>

            {/* Invoicing */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-card rounded-3xl border border-border shadow-elevated p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><FileText size={18} className="text-accent" /></div>
                <div>
                  <h3 className="font-bold text-foreground">Invoicing</h3>
                  <p className="text-xs text-muted-foreground">Professional invoices in seconds</p>
                </div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <div>
                    <p className="text-xs font-bold text-foreground">Invoice #0042</p>
                    <p className="text-[10px] text-muted-foreground">Feb 20, 2026</p>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Paid</span>
                </div>
                <div className="flex justify-between text-xs"><span className="text-muted-foreground">Web Design Services</span><span className="text-foreground font-medium">π100.00</span></div>
                <div className="flex justify-between text-xs"><span className="text-muted-foreground">Logo Design</span><span className="text-foreground font-medium">π50.00</span></div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-sm font-bold text-foreground">Total</span>
                  <span className="text-sm font-bold text-accent">π150.00</span>
                </div>
                <a href="https://openpay-space.vercel.app/auth" className="block w-full py-2.5 rounded-full bg-accent text-white text-center text-xs font-semibold">Create Invoice</a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 text-center">
            <a href="https://openpay-space.vercel.app/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started Free <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentsPage;
