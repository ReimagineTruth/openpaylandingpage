import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  EARN_STRIP,
  FEATURE_BULLETS,
  MERCHANT_STRIP,
  PREVIEW_GROUPS,
  PREVIEW_SCREENS,
  TRUST_STRIP,
  type PreviewGroup,
} from "@/data/appStorePreviews";
import { PreviewScreenById } from "@/components/landing/AppStorePreviewScreens";

const fade = (reduce: boolean | null, delay = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] as const },
      };

type Props = {
  /** Limit cards on homepage; omit for full gallery */
  limit?: number;
  showMeta?: boolean;
  compact?: boolean;
};

export default function AppStorePreviewsGallery({ limit, showMeta = true, compact = false }: Props) {
  const reduce = useReducedMotion();
  const [group, setGroup] = useState<PreviewGroup | "All">("All");

  const screens = useMemo(() => {
    const filtered = group === "All" ? PREVIEW_SCREENS : PREVIEW_SCREENS.filter((s) => s.group === group);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [group, limit]);

  return (
    <div>
      {showMeta && (
        <motion.div {...fade(reduce)} className="flex flex-wrap items-center gap-2 mb-6 text-[12px] font-semibold text-[#8e8e93]">
          <span className="px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[#1d1d1f]">v1.0.0</span>
          <span>29 screens</span>
          <span>·</span>
          <span>iPhone portrait · 9:16</span>
          <span>·</span>
          <span style={{ color: "#007AFF" }}>#007AFF</span>
        </motion.div>
      )}

      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none -mx-1 px-1">
        {(["All", ...PREVIEW_GROUPS] as const).map((g) => {
          const active = group === g;
          return (
            <button
              key={g}
              type="button"
              onClick={() => setGroup(g)}
              className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-colors ${
                active
                  ? "bg-[#007AFF] text-white"
                  : "bg-white border border-black/[0.06] text-[#1d1d1f] hover:border-[#007AFF]/40"
              }`}
            >
              {g}
            </button>
          );
        })}
      </div>

      <div className={`grid gap-6 sm:gap-8 ${compact ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}`}>
        {screens.map((s, i) => (
          <motion.article
            key={s.id}
            {...fade(reduce, Math.min(i * 0.03, 0.24))}
            className="flex flex-col items-center text-center"
          >
            <PreviewScreenById id={s.id} />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8e8e93]">
              {s.n} · {s.group}
            </p>
            <h3 className="mt-1 text-[15px] font-extrabold tracking-[-0.03em] text-[#1d1d1f]">{s.title}</h3>
            <p className="mt-0.5 text-[12px] text-[#8e8e93]">{s.feature}</p>
            <a
              href={s.href}
              className="mt-2 text-[12px] font-semibold text-[#007AFF] inline-flex items-center gap-1"
            >
              View <ArrowRight size={12} />
            </a>
          </motion.article>
        ))}
      </div>

      {typeof limit === "number" && (
        <div className="mt-10 text-center">
          <Link
            to="/app-store-previews"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#007AFF] text-white text-[15px] font-semibold hover:opacity-90 active:scale-[0.98] transition-transform"
          >
            Open all 29 feature previews <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}

export function FeatureBulletsStrip() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {FEATURE_BULLETS.map((b) => (
        <div key={b.label} className="rounded-[18px] bg-white border border-black/[0.05] px-4 py-3.5">
          <p className="text-[14px] font-bold text-[#1d1d1f]">{b.label}</p>
          <p className="mt-0.5 text-[12px] text-[#8e8e93]">{b.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function TrustMerchantEarnStrips() {
  return (
    <div className="space-y-4">
      {[
        { label: "Trust", items: TRUST_STRIP },
        { label: "Merchant", items: MERCHANT_STRIP },
        { label: "Earn", items: EARN_STRIP },
      ].map((row) => (
        <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8e8e93] sm:w-20 shrink-0">
            {row.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {row.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full bg-white border border-black/[0.06] text-[12px] font-semibold text-[#1d1d1f]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
