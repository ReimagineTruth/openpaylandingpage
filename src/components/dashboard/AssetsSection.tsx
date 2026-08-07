import { useMemo } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Pickaxe,
  PiggyBank,
  RefreshCw,
  Store,
  Wallet,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import { usePiUsdPrice, PI_TOKEN } from "@/lib/piPrice";
import { OUSD_TOKEN } from "@/lib/ousdPrice";
import { cn } from "@/lib/utils";

export type AssetsBalances = {
  walletOusd: number;
  savingsOusd: number;
  miningOusd: number;
  merchantOusd?: number;
};

type AssetsSectionProps = {
  username?: string | null;
  balances: AssetsBalances;
  balanceHidden?: boolean;
};

const OPENPAY_PRO_WALLET_URL = "https://openpaypro.space/";

const PRO_ASSETS = [
  { key: "ousd", label: "OpenUSD", hint: "Pro self-custody OUSD", logo: OUSD_TOKEN.logoUrl },
  { key: "pi", label: "Pi", hint: "Pro Pi balance", logo: PI_TOKEN.logo },
];

const formatAmt = (n: number, hidden?: boolean, digits = 2) => {
  if (hidden) return "••••";
  if (!Number.isFinite(n)) return "0.00";
  return n.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

const AssetsSection = ({
  username,
  balances,
  balanceHidden = false,
}: AssetsSectionProps) => {
  const piPrice = usePiUsdPrice(30_000);
  const piUsd = piPrice.price > 0 ? piPrice.price : 0;
  const walletOusd = Number(balances.walletOusd) || 0;
  const savingsOusd = Number(balances.savingsOusd) || 0;
  const miningOusd = Number(balances.miningOusd) || 0;
  const merchantOusd = Number(balances.merchantOusd) || 0;
  const walletPi = piUsd > 0 ? walletOusd / piUsd : 0;

  const tokens = useMemo(() => {
    const rows = [
      {
        id: "ousd-wallet",
        symbol: "OUSD",
        name: "OpenUSD",
        balance: walletOusd,
        usdValue: walletOusd,
        logoUrl: OUSD_TOKEN.logoUrl,
        badge: "Wallet",
        badgeClass: "bg-[#007AFF]/12 text-[#007AFF]",
        hint: "Available balance",
      },
      {
        id: "pi-equiv",
        symbol: "PI",
        name: "Pi Network",
        balance: walletPi,
        usdValue: walletOusd,
        logoUrl: PI_TOKEN.logo,
        badge: "Equiv.",
        badgeClass: "bg-[#5856D6]/12 text-[#5856D6]",
        hint: piUsd > 0
          ? `1 PI = $${piUsd.toFixed(4)}${piPrice.isFallback ? " (est.)" : ""}`
          : "Live PI rate unavailable",
      },
      {
        id: "ousd-savings",
        symbol: "OUSD",
        name: "Savings",
        balance: savingsOusd,
        usdValue: savingsOusd,
        logoUrl: OUSD_TOKEN.logoUrl,
        badge: "Earn",
        badgeClass: "bg-[#34C759]/15 text-[#248A3D]",
        hint: "Savings balance",
      },
      {
        id: "ousd-mining",
        symbol: "OUSD",
        name: "Mining rewards",
        balance: miningOusd,
        usdValue: miningOusd,
        logoUrl: OUSD_TOKEN.logoUrl,
        badge: "Mine",
        badgeClass: "bg-[#FF9500]/15 text-[#C93400]",
        hint: "Claimable mining balance",
      },
    ];
    if (merchantOusd > 0) {
      rows.push({
        id: "ousd-merchant",
        symbol: "OUSD",
        name: "Merchant",
        balance: merchantOusd,
        usdValue: merchantOusd,
        logoUrl: OUSD_TOKEN.logoUrl,
        badge: "Biz",
        badgeClass: "bg-[#1d1d1f] text-white",
        hint: "Merchant available balance",
      });
    }
    return rows;
  }, [walletOusd, walletPi, savingsOusd, miningOusd, merchantOusd, piUsd, piPrice.isFallback]);

  const totalUsd = walletOusd + savingsOusd + miningOusd + merchantOusd;

  return (
    <div className="mx-4 mt-4 space-y-4">
      <div className="rounded-[24px] bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Token balances
            </p>
            <p className="mt-1 text-3xl font-bold tracking-[-0.03em] text-foreground">
              {balanceHidden ? "••••••" : `$${formatAmt(totalUsd, false)}`}
            </p>
            <p className="mt-1 text-[12px] text-muted-foreground">
              {tokens.length} balances
              {username ? ` · @${username}` : ""}
              {piUsd > 0 ? ` · PI $${piUsd.toFixed(4)}` : ""}
            </p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f2f7] text-[#007AFF]">
            <RefreshCw className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button
            className="h-11 rounded-2xl bg-[#007AFF] text-[15px] font-semibold text-white hover:bg-[#0066d6]"
            onClick={() => window.open(OPENPAY_PRO_WALLET_URL, "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="mr-1.5 h-4 w-4" />
            Pro Wallet
          </Button>
          <Button variant="secondary" className="h-11 rounded-2xl text-[15px] font-semibold">
            <ArrowUpRight className="mr-1.5 h-4 w-4" />
            Send to Pro
          </Button>
        </div>
      </div>

      <div className="rounded-[24px] bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#007AFF]/10">
            <Wallet className="h-4 w-4 text-[#007AFF]" />
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-foreground">Your tokens</h3>
            <p className="text-[11px] text-muted-foreground">Live OpenPay balances</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#f2f2f7]">
          {tokens.map((token, i) => (
            <div
              key={token.id}
              className={cn(
                "flex w-full items-center gap-3 px-3.5 py-3.5 text-left",
                i > 0 && "border-t border-black/[0.04]",
              )}
            >
              <img
                src={token.logoUrl}
                alt=""
                className="h-11 w-11 rounded-full object-cover ring-1 ring-black/5"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-[15px] font-semibold text-[#1d1d1f]">{token.name}</p>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide",
                      token.badgeClass,
                    )}
                  >
                    {token.badge}
                  </span>
                </div>
                <p className="truncate text-[12px] text-[#8e8e93]">{token.hint}</p>
              </div>
              <div className="text-right">
                <p className="text-[16px] font-bold tabular-nums text-[#1d1d1f]">
                  {formatAmt(token.balance, balanceHidden, token.symbol === "PI" ? 4 : 2)}{" "}
                  <span className="text-[12px] font-semibold text-[#8e8e93]">{token.symbol}</span>
                </p>
                <p className="text-[12px] tabular-nums text-[#8e8e93]">
                  {balanceHidden ? "••••" : `$${formatAmt(token.usdValue, false)}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-[#f2f2f7] px-3 py-2.5 text-center">
            <PiggyBank className="mx-auto h-4 w-4 text-[#34C759]" />
            <p className="mt-1 text-[10px] font-semibold text-[#8e8e93]">Savings</p>
            <p className="text-[13px] font-bold tabular-nums text-[#1d1d1f]">
              {formatAmt(savingsOusd, balanceHidden)}
            </p>
          </div>
          <div className="rounded-2xl bg-[#f2f2f7] px-3 py-2.5 text-center">
            <Pickaxe className="mx-auto h-4 w-4 text-[#FF9500]" />
            <p className="mt-1 text-[10px] font-semibold text-[#8e8e93]">Mining</p>
            <p className="text-[13px] font-bold tabular-nums text-[#1d1d1f]">
              {formatAmt(miningOusd, balanceHidden)}
            </p>
          </div>
          <div className="rounded-2xl bg-[#f2f2f7] px-3 py-2.5 text-center">
            <Store className="mx-auto h-4 w-4 text-[#007AFF]" />
            <p className="mt-1 text-[10px] font-semibold text-[#8e8e93]">Merchant</p>
            <p className="text-[13px] font-bold tabular-nums text-[#1d1d1f]">
              {formatAmt(merchantOusd, balanceHidden)}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[24px] bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1d1d1f]">
            <BrandLogo variant="white" animate={false} className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-foreground">OpenPay Pro assets</h3>
            <p className="text-[11px] text-muted-foreground">Self-custody balances live in Pro wallet</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[#f2f2f7]">
          {PRO_ASSETS.map((a, i) => (
            <div
              key={a.key}
              className={cn(
                "flex w-full items-center gap-3 px-3.5 py-3 text-left",
                i > 0 && "border-t border-black/[0.04]",
              )}
            >
              <img src={a.logo} alt="" className="h-10 w-10 rounded-full object-cover ring-1 ring-black/5" />
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold text-[#1d1d1f]">{a.label}</p>
                <p className="truncate text-[11px] text-[#8e8e93]">{a.hint}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#1d1d1f] px-2.5 py-1 text-[11px] font-semibold text-white">
                View balance
                <ExternalLink className="h-3 w-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetsSection;
