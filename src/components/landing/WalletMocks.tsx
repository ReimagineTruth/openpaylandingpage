import { OpenPayBadge, PayWithOpenPayButton } from "@/components/qrpay-landing/QrPayMocks";

export {
  DashboardPhoneMock,
  SendPhoneMock,
  ReceivePhoneMock,
  PosPhoneMock,
  VirtualCardMock,
  MiningPhoneMock,
  AiChatMock,
  NftGridMock,
} from "@/components/landing/AppStorePreviewScreens";

export function AuthCardMock() {
  return (
    <div className="w-full max-w-[360px] mx-auto rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] p-7 text-center">
      <div className="flex justify-center mb-3">
        <OpenPayBadge />
      </div>
      <p className="text-[22px] font-extrabold tracking-[-0.04em] text-[#1d1d1f]">
        Open<span className="text-[#007AFF]">Pay</span>
      </p>
      <p className="mt-1 text-[13px] text-[#8e8e93]">Stable payments for the Pi economy</p>
      <a
        href="https://openpy.space/auth"
        className="mt-6 flex items-center justify-center h-12 rounded-2xl bg-[#007AFF] text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
      >
        Authenticate with Pi
      </a>
      <button
        type="button"
        className="mt-3 w-full h-11 rounded-2xl border border-slate-200 text-[14px] font-semibold text-[#1d1d1f]"
      >
        OpenPay Pro
      </button>
      <button type="button" className="mt-2 w-full h-11 rounded-2xl text-[14px] font-semibold text-[#1d1d1f]">
        Sign In with Email
      </button>
      <p className="mt-5 text-[11px] text-[#8e8e93] leading-relaxed">
        Pi Browser · Socials · Website · Blog
      </p>
    </div>
  );
}

export function TopUpRailsRow() {
  const rails = ["Pi Network", "Card / Apple Pay", "E-Wallet / QRPh", "USDT / USDC", "OUSD", "Stripe"];
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {rails.map((r) => (
        <span
          key={r}
          className="px-3.5 py-2 rounded-full bg-white border border-slate-200 text-[12px] font-semibold text-[#1d1d1f] shadow-sm"
        >
          {r}
        </span>
      ))}
    </div>
  );
}

export function DevKeysMock() {
  return (
    <div className="w-full max-w-md mx-auto rounded-[28px] bg-white border border-slate-200 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8e8e93]">Developer</p>
      <p className="mt-1 text-[20px] font-extrabold tracking-[-0.04em] text-[#1d1d1f]">API keys</p>
      <div className="mt-4 space-y-2">
        {[
          { name: "Production", key: "op_live_••••9f2a" },
          { name: "QR Pay", key: "qrp_••••c291" },
        ].map((k) => (
          <div key={k.name} className="rounded-2xl bg-[#F2F2F7] px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold text-[#1d1d1f]">{k.name}</p>
              <p className="text-[11px] font-mono text-[#8e8e93]">{k.key}</p>
            </div>
            <span className="text-[11px] font-semibold text-[#007AFF]">Copy</span>
          </div>
        ))}
      </div>
      <a
        href="https://openpy.space/auth/developer-dashboard"
        className="mt-5 flex items-center justify-center h-11 rounded-2xl bg-[#007AFF] text-white text-[14px] font-semibold"
      >
        Open developer dashboard
      </a>
    </div>
  );
}

export { OpenPayBadge, PayWithOpenPayButton };
