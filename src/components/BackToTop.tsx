import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SHOW_AFTER = 400;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          onClick={goTop}
          aria-label="Go to top"
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-[60] w-12 h-12 rounded-full bg-[#3B82F6] text-white shadow-[0_12px_32px_-8px_rgba(59,130,246,0.55)] flex items-center justify-center hover:opacity-90 active:scale-[0.98] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
        >
          <ArrowUp size={20} strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
