import { motion } from "framer-motion";

const VirtualCardSection = () => {
  return (
    <section id="currencies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Card mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-[360px] h-[220px] rounded-2xl bg-card-gradient p-6 shadow-elevated relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] text-primary-foreground/60 tracking-[0.2em] uppercase">OpenPay</p>
                    <p className="text-xs font-semibold text-primary-foreground">Virtual Credit Card</p>
                  </div>
                  <div className="w-8 h-6 rounded bg-primary-foreground/20" />
                </div>

                <p className="text-lg tracking-[0.25em] text-primary-foreground font-mono">
                  •••• •••• •••• 4592
                </p>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[9px] text-primary-foreground/50 uppercase">Cardholder</p>
                    <p className="text-xs font-semibold text-primary-foreground">OPENPAY USER</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-primary-foreground/50 uppercase">Valid Thru</p>
                    <p className="text-xs font-semibold text-primary-foreground">02/30</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 bg-accent/20 rounded-2xl blur-2xl scale-90" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Virtual Cards</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Spend your Pi,<br />anywhere online.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Get a virtual debit card linked to your OpenPay balance. Shop online, pay subscriptions, and manage spending — all with Pi at competitive FX rates across 170+ currencies.
          </p>

          <div className="space-y-4">
            {["Instant card generation", "Linked to Pi balance with auto-conversion", "Works with any online merchant worldwide", "Freeze or unfreeze anytime"].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-sm text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualCardSection;
