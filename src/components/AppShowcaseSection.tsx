import { motion } from "framer-motion";
import { Send, QrCode, CreditCard, Link2, FileText, ArrowRightLeft } from "lucide-react";

const AppShowcaseSection = () => {
  return (
    <section id="showcase" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">App Preview</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Explore what you can do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete fintech experience — from payments to invoicing, all inside one app.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Express Send */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Send size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Express Send</h3>
                <p className="text-xs text-muted-foreground">Send Pi instantly to anyone</p>
              </div>
            </div>
            {/* Mockup UI */}
            <div className="bg-secondary/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">J</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">john</p>
                  <p className="text-[10px] text-muted-foreground">@john</p>
                </div>
                <span className="text-xs text-accent font-medium">Selected</span>
              </div>
              <div className="p-3 rounded-lg bg-background border border-border">
                <p className="text-[10px] text-muted-foreground mb-1">Amount</p>
                <p className="text-xl font-bold text-foreground">π50.00</p>
              </div>
              <div className="w-full py-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold text-center">
                Send π50.00
              </div>
            </div>
          </motion.div>

          {/* Checkout Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Link2 size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Checkout & Payment</h3>
                <p className="text-xs text-muted-foreground">Accept payments with checkout links</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5">
              <div className="flex gap-3 mb-4">
                <div className="flex-1 py-2 rounded-lg bg-background border-2 border-accent text-center text-xs font-semibold text-accent">Card</div>
                <div className="flex-1 py-2 rounded-lg bg-background border border-border text-center text-xs font-medium text-foreground">OpenPay Wallet</div>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-background border border-border">
                  <p className="text-[10px] text-muted-foreground mb-1">Pay currency (170+ OpenPay currencies)</p>
                  <p className="text-sm font-medium text-foreground">PI - Pi</p>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <span className="text-sm font-semibold text-foreground">Due today</span>
                  <span className="text-sm font-bold text-accent">π1.00 PI</span>
                </div>
                <div className="w-full py-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold text-center">
                  Pay
                </div>
              </div>
            </div>
          </motion.div>

          {/* Request Payment / QR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <QrCode size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Request Payment</h3>
                <p className="text-xs text-muted-foreground">Receive via QR or payment link</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl bg-background border border-border flex items-center justify-center">
                <div className="w-24 h-24 grid grid-cols-6 grid-rows-6 gap-[2px]">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className={`rounded-[1px] ${Math.random() > 0.4 ? 'bg-foreground' : 'bg-transparent'}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Scan to pay with OpenPay</p>
              <div className="w-full py-2.5 rounded-full border border-border text-xs font-medium text-foreground">
                Copy payment link
              </div>
            </div>
          </motion.div>

          {/* Virtual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <CreditCard size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Virtual Card</h3>
                <p className="text-xs text-muted-foreground">Spend Pi anywhere online</p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 flex justify-center">
              <div className="w-[300px] h-[180px] rounded-xl bg-card-gradient p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10 h-full flex flex-col justify-between text-primary-foreground">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[9px] opacity-60 tracking-[0.2em] uppercase">OpenPay</p>
                      <p className="text-[10px] font-semibold">Virtual Card</p>
                    </div>
                    <div className="w-7 h-5 rounded bg-primary-foreground/20" />
                  </div>
                  <p className="text-sm tracking-[0.25em] font-mono">•••• •••• •••• 4592</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] opacity-50 uppercase">Cardholder</p>
                      <p className="text-[10px] font-semibold">OPENPAY USER</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] opacity-50 uppercase">Exp</p>
                      <p className="text-[10px] font-semibold">02/30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional features row */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {[
            { icon: FileText, title: "Invoicing", desc: "Create professional invoices and track payments in real time" },
            { icon: ArrowRightLeft, title: "170+ Currencies", desc: "Convert between Pi and global currencies at competitive rates" },
            { icon: CreditCard, title: "Merchant Portal", desc: "Full dashboard with analytics, products, and checkout management" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <f.icon size={18} className="text-accent" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
