import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ready to pay with Pi?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of users who trust OpenPay for fast, secure digital payments powered by Pi Network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://openpay-space.vercel.app/auth"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-xl hover:opacity-90 transition-opacity"
            >
              Create Free Account
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-border rounded-xl hover:bg-secondary transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
