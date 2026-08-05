import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-ink rounded-5xl px-6 py-20 md:py-28 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-16 w-[420px] h-[420px] bg-accent/25 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-10 w-[380px] h-[380px] bg-cyan-accent/20 rounded-full blur-[120px]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary-foreground/60 mb-5">The money app powered by Pi</p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-primary-foreground leading-[0.95] mb-8">
              Ready to pay<br />with Pi?
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/60 max-w-lg mx-auto mb-10">
              Join thousands who trust OpenPay for fast, secure digital payments across 170+ currencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://openpy.space/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-primary-foreground rounded-full hover:opacity-90 transition-opacity"
              >
                Create Free Account
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
