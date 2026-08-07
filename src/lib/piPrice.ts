/**
 * Realtime PI/USD pricing for OpenPay.
 *
 * Source of truth: CoinGecko (`pi-network`), proxied by the `pi-price` edge
 * function so the browser never hits CoinGecko directly (CORS + rate limits).
 *
 * Rule: 1 OUSD = $1 USD. Never hard-code PI/USD for settlement — the server
 * always re-fetches the live price before crediting a Pi top-up.
 *
 * Fallback policy (documented, consistent everywhere):
 *   live price -> last cached price (localStorage) -> FALLBACK_PI_USD.
 * A fallback price is always flagged so the UI can label it as an estimate.
 */
import { useEffect, useState } from "react";

/** Last-resort PI/USD if CoinGecko and the cache are both unavailable. */
export const FALLBACK_PI_USD = 0.079;

const CACHE_KEY = "openpay_pi_usd_price";
const CACHE_TTL_MS = 30_000;

export type PiUsdPrice = {
  /** PI price in USD (1 OUSD = 1 USD). */
  price: number;
  /** Epoch ms of when the price was fetched. */
  fetchedAt: number;
  /** True when the value is not a fresh CoinGecko read. */
  isFallback: boolean;
  source: "coingecko" | "cache" | "fallback";
};

let cachedPiUsd: PiUsdPrice | null = null;
let inflight: Promise<PiUsdPrice> | null = null;

const readPersistedCache = (): PiUsdPrice | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { price?: unknown; fetchedAt?: unknown };
    const price = Number(parsed?.price);
    const fetchedAt = Number(parsed?.fetchedAt);
    if (!Number.isFinite(price) || price <= 0) return null;
    return {
      price,
      fetchedAt: Number.isFinite(fetchedAt) ? fetchedAt : 0,
      isFallback: true,
      source: "cache",
    };
  } catch {
    return null;
  }
};

export const setCachedPiUsdPrice = (price: number, source: PiUsdPrice["source"] = "coingecko") => {
  if (!Number.isFinite(price) || price <= 0) return;
  cachedPiUsd = { price, fetchedAt: Date.now(), isFallback: source !== "coingecko", source };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CACHE_KEY, JSON.stringify({ price, fetchedAt: cachedPiUsd.fetchedAt }));
    } catch {
      // storage unavailable — memory cache still works
    }
  }
};

/** Last known price without triggering a network request. */
export const getCachedPiUsdPrice = (): PiUsdPrice => {
  if (cachedPiUsd) return cachedPiUsd;
  const persisted = readPersistedCache();
  if (persisted) {
    cachedPiUsd = persisted;
    return persisted;
  }
  return { price: FALLBACK_PI_USD, fetchedAt: 0, isFallback: true, source: "fallback" };
};

/** Fetch the live PI/USD price (30s in-memory cache unless `force`). */
export const fetchPiUsdPrice = async (options?: { force?: boolean }): Promise<PiUsdPrice> => {
  const force = options?.force === true;
  if (!force && cachedPiUsd && Date.now() - cachedPiUsd.fetchedAt < CACHE_TTL_MS && !cachedPiUsd.isFallback) {
    return cachedPiUsd;
  }
  if (inflight && !force) return inflight;

  inflight = (async (): Promise<PiUsdPrice> => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=pi-network&vs_currencies=usd",
      );
      if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
      const data = (await res.json()) as { "pi-network"?: { usd?: number } };
      const price = Number(data?.["pi-network"]?.usd);
      if (!Number.isFinite(price) || price <= 0) throw new Error("Invalid PI price");
      setCachedPiUsdPrice(price, "coingecko");
      return cachedPiUsd!;
    } catch {
      return getCachedPiUsdPrice();
    } finally {
      inflight = null;
    }
  })();

  return inflight;
};

/** $ / OUSD amount -> π needed (rounded to 6 decimals, matching OpenPay Pro). */
export const piAmountForOusd = (ousd: number, piUsd: number): number => {
  const amount = Number(ousd);
  const price = Number(piUsd);
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  if (!Number.isFinite(price) || price <= 0) return 0;
  return Math.round((amount / price) * 1e6) / 1e6;
};

/** π paid -> OUSD credited (rounded to 8 decimals). */
export const ousdFromPiAmount = (pi: number, piUsd: number): number => {
  const amount = Number(pi);
  const price = Number(piUsd);
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  if (!Number.isFinite(price) || price <= 0) return 0;
  return Math.round(amount * price * 1e8) / 1e8;
};

/** Memo shown in the Pi wallet — must be identical in UI and in createPayment. */
export const buildPiTopupMemo = (ousdAmount: number, piAmount: number, piUsdPrice: number): string => {
  const ousd = Number(Number(ousdAmount).toFixed(2));
  const pi = piAmount >= 1 ? piAmount.toFixed(4) : Number(piAmount || 0).toPrecision(6);
  const price = piUsdPrice >= 0.01 ? piUsdPrice.toFixed(4) : Number(piUsdPrice || 0).toPrecision(4);
  return `OpenPay: ${ousd} OUSD (~${pi} π @ $${price})`;
};

export type PiTopupQuote = {
  /** What the user typed (USD / OUSD, 1 OUSD = $1). */
  ousdAmount: number;
  /** π to charge in Pi.createPayment. */
  piAmount: number;
  /** Live $/π used for the quote. */
  piUsdPrice: number;
  /** True when the price is a cached/fallback estimate. */
  isFallback: boolean;
  priceSource: PiUsdPrice["source"];
  /** Memo shown in the Pi wallet. */
  memo: string;
};

/** Build a quote from a known price (sync, for rendering). */
export const buildPiTopupQuote = (ousdAmount: number, price: PiUsdPrice): PiTopupQuote => {
  const piAmount = piAmountForOusd(ousdAmount, price.price);
  return {
    ousdAmount: Number(ousdAmount) || 0,
    piAmount,
    piUsdPrice: price.price,
    isFallback: price.isFallback,
    priceSource: price.source,
    memo: buildPiTopupMemo(Number(ousdAmount) || 0, piAmount, price.price),
  };
};

/** Fetch a fresh live price and build the quote used for Pi.createPayment. */
export const quotePiTopup = async (ousdAmount: number): Promise<PiTopupQuote> => {
  const price = await fetchPiUsdPrice({ force: true });
  return buildPiTopupQuote(ousdAmount, price);
};


/** Live PI/USD price with polling, for wallet / top-up / quote screens. */
export const usePiUsdPrice = (pollMs = 30_000): PiUsdPrice => {
  const [price, setPrice] = useState<PiUsdPrice>(() => getCachedPiUsdPrice());

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const next = await fetchPiUsdPrice();
      if (mounted) setPrice(next);
    };
    void load();
    if (!pollMs) return () => { mounted = false; };
    const interval = window.setInterval(() => void load(), pollMs);
    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, [pollMs]);

  return price;
};

/* ---------------------------------------------------------------------------
 * Pi token details (CoinGecko `pi-network`) — price + 24h + mcap + volume + 7d
 * ------------------------------------------------------------------------ */

/** Canonical Pi Network token identity (same source OpenPay Pro uses). */
export const PI_TOKEN = {
  name: "Pi Network",
  symbol: "PI",
  coingeckoId: "pi-network",
  logo: "https://coin-images.coingecko.com/coins/images/54342/large/pi_network.jpg",
  website: "https://minepi.com/",
} as const;

export type PiMarket = {
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  totalSupply: number;
  ath: number;
  atl: number;
  sparkline: number[];
  logo: string;
  fetchedAt: number;
  isFallback: boolean;
};

const emptyMarket = (price: number, isFallback: boolean): PiMarket => ({
  price,
  change24h: 0,
  marketCap: 0,
  volume24h: 0,
  circulatingSupply: 0,
  totalSupply: 0,
  ath: 0,
  atl: 0,
  sparkline: [],
  logo: PI_TOKEN.logo,
  fetchedAt: Date.now(),
  isFallback,
});

/** Fetch the full Pi market card via CoinGecko. */
export const fetchPiMarket = async (): Promise<PiMarket> => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/pi-network?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true",
    );
    if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
    const payload = (await res.json()) as {
      image?: { large?: string };
      market_data?: Record<string, unknown>;
    };
    const md = payload.market_data ?? {};
    const n = (v: unknown) => (Number.isFinite(Number(v)) ? Number(v) : 0);
    const price = n((md["current_price"] as { usd?: number } | undefined)?.usd);
    if (price <= 0) throw new Error("Invalid PI market price");
    setCachedPiUsdPrice(price, "coingecko");
    const spark = (md["sparkline_7d"] as { price?: number[] } | undefined)?.price;
    return {
      price,
      change24h: n((md["price_change_percentage_24h"] as number | undefined)),
      marketCap: n((md["market_cap"] as { usd?: number } | undefined)?.usd),
      volume24h: n((md["total_volume"] as { usd?: number } | undefined)?.usd),
      circulatingSupply: n(md["circulating_supply"]),
      totalSupply: n(md["total_supply"]),
      ath: n((md["ath"] as { usd?: number } | undefined)?.usd),
      atl: n((md["atl"] as { usd?: number } | undefined)?.usd),
      sparkline: Array.isArray(spark) ? spark.map(n) : [],
      logo: typeof payload.image?.large === "string" ? payload.image.large : PI_TOKEN.logo,
      fetchedAt: Date.now(),
      isFallback: false,
    };
  } catch {
    const cached = getCachedPiUsdPrice();
    return emptyMarket(cached.price, true);
  }
};

/** Pi token details with polling (default 45s, plus refresh on window focus). */
export const usePiMarket = (pollMs = 45_000): PiMarket => {
  const [market, setMarket] = useState<PiMarket>(() => emptyMarket(getCachedPiUsdPrice().price, true));

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      const next = await fetchPiMarket();
      if (mounted) setMarket(next);
    };
    void load();
    const onFocus = () => void load();
    window.addEventListener("focus", onFocus);
    const interval = pollMs ? window.setInterval(() => void load(), pollMs) : 0;
    return () => {
      mounted = false;
      window.removeEventListener("focus", onFocus);
      if (interval) window.clearInterval(interval);
    };
  }, [pollMs]);

  return market;
};
