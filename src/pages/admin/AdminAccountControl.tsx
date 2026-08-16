import { useMemo, useState } from "react";
import {
  Search,
  ShieldAlert,
  User,
  Ban,
  Snowflake,
  Unlock,
  Wallet,
  FileCheck,
  History,
} from "lucide-react";
import {
  loadAccounts,
  pushAudit,
  upsertAccount,
  type AccountStatus,
  type WalletAccount,
} from "@/lib/adminStore";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { toast } from "sonner";

const statusStyle: Record<AccountStatus, string> = {
  active: "bg-emerald-100 text-emerald-700",
  restricted: "bg-orange-100 text-orange-700",
  frozen: "bg-sky-100 text-sky-800",
  suspended: "bg-red-100 text-red-700",
};

const reasons = [
  "Terms of service violation",
  "Abusive behavior",
  "Suspected fraud",
  "AML / compliance review",
  "Chargeback / dispute",
  "Phishing / spam",
  "Other",
];

const AdminAccountControl = () => {
  const { admin } = useAdminAuth();
  const [accounts, setAccounts] = useState<WalletAccount[]>(() => loadAccounts());
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"All" | AccountStatus>("All");
  const [selectedId, setSelectedId] = useState<string | null>(accounts[1]?.id || accounts[0]?.id || null);
  const [tab, setTab] = useState<"overview" | "kyc" | "activity" | "controls">("overview");
  const [reason, setReason] = useState(reasons[0]);
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("10.00");
  const [balanceNote, setBalanceNote] = useState("");

  const selected = accounts.find((a) => a.id === selectedId) || null;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^@/, "");
    return accounts.filter((a) => {
      const hay = `${a.username} ${a.accountNo} ${a.email} ${a.name}`.toLowerCase();
      const match = !q || hay.includes(q) || a.accountNo.replace(/-/g, "").includes(q.replace(/-/g, ""));
      return match && (status === "All" || a.status === status);
    });
  }, [accounts, query, status]);

  const persist = (next: WalletAccount, message: string) => {
    const updated = upsertAccount(next);
    setAccounts((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
    pushAudit("account", `${message} · @${next.username} · ${next.accountNo}`);
    toast.success(message);
  };

  const stamp = (account: WalletAccount, action: string, detail: string): WalletAccount => ({
    ...account,
    audit: [
      {
        id: `a-${Date.now()}`,
        when: new Date().toLocaleString(),
        actor: admin?.email || "admin",
        action,
        detail,
      },
      ...account.audit,
    ],
  });

  const setStatusOn = (next: AccountStatus) => {
    if (!selected) return;
    if (!notes.trim() && next !== "active") {
      toast.error("Add an investigation note");
      return;
    }
    persist(
      stamp(
        {
          ...selected,
          status: next,
          restrictionReason: next === "active" ? undefined : `${reason}${notes ? ` — ${notes}` : ""}`,
          flags: next === "active" ? selected.flags.filter((f) => f !== "abuse-review") : Array.from(new Set([...selected.flags, "abuse-review"])),
        },
        next === "active" ? "Restore" : next[0].toUpperCase() + next.slice(1),
        notes || reason,
      ),
      next === "active" ? "Account restored" : `Account ${next}`,
    );
    setNotes("");
  };

  const adjust = (dir: 1 | -1) => {
    if (!selected) return;
    const n = Number(amount);
    if (!Number.isFinite(n) || n <= 0) {
      toast.error("Enter a valid OUSD amount");
      return;
    }
    if (!balanceNote.trim()) {
      toast.error("Balance changes need a reason");
      return;
    }
    const delta = dir * n;
    persist(
      stamp(
        {
          ...selected,
          ousd: Math.max(0, Math.round((selected.ousd + delta) * 100) / 100),
          activity: [
            {
              id: `t-${Date.now()}`,
              when: new Date().toLocaleString(),
              type: dir > 0 ? "Admin credit" : "Admin debit",
              method: "Control portal",
              counterparty: admin?.email || "admin",
              amount: delta,
              status: "Completed",
              note: balanceNote,
            },
            ...selected.activity,
          ],
        },
        dir > 0 ? "Credit" : "Debit",
        `${dir > 0 ? "+" : "−"}${n.toFixed(2)} OUSD · ${balanceNote}`,
      ),
      dir > 0 ? `Credited ${n.toFixed(2)} OUSD` : `Debited ${n.toFixed(2)} OUSD`,
    );
    setBalanceNote("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Account control</h1>
        <p className="text-muted-foreground">
          Search by username or account number. Review KYC, activity, restrict abuse, and adjust OUSD.
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Username, OP account no., email, or name…"
            className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", "active", "restricted", "frozen", "suspended"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`rounded-lg px-3 py-2 text-sm font-medium capitalize ${
                status === s ? "bg-accent text-white" : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,22rem)_1fr]">
        <div className="space-y-2">
          {results.map((account) => (
            <button
              key={account.id}
              onClick={() => {
                setSelectedId(account.id);
                setTab("overview");
              }}
              className={`w-full rounded-xl border p-4 text-left ${
                selectedId === account.id ? "border-accent bg-accent/5" : "border-border bg-card hover:bg-secondary/40"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-foreground">@{account.username}</p>
                  <p className="font-mono text-xs text-muted-foreground">{account.accountNo}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${statusStyle[account.status]}`}>
                  {account.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{account.name}</p>
              <p className="mt-1 text-sm font-semibold">{account.ousd.toFixed(2)} OUSD</p>
            </button>
          ))}
          {results.length === 0 && (
            <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No accounts match that search.
            </div>
          )}
        </div>

        {selected ? (
          <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">@{selected.username}</h2>
                  <p className="font-mono text-sm text-muted-foreground">{selected.accountNo}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${statusStyle[selected.status]}`}>
                  {selected.status}
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  selected.risk === "high" ? "bg-red-100 text-red-700" : selected.risk === "medium" ? "bg-orange-100 text-orange-700" : "bg-emerald-100 text-emerald-700"
                }`}>
                  {selected.risk} risk
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-b border-border pb-3">
              {[
                ["overview", "Overview", Wallet],
                ["kyc", "KYC", FileCheck],
                ["activity", "Activity", History],
                ["controls", "Controls", ShieldAlert],
              ].map(([id, label, Icon]) => (
                <button
                  key={id}
                  onClick={() => setTab(id as typeof tab)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium ${
                    tab === id ? "bg-accent text-white" : "bg-secondary text-foreground"
                  }`}
                >
                  <Icon size={14} /> {label}
                </button>
              ))}
            </div>

            {tab === "overview" && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Info label="Name" value={selected.name} />
                <Info label="Email" value={selected.email} />
                <Info label="OUSD" value={selected.ousd.toFixed(2)} />
                <Info label="PI" value={selected.pi.toFixed(2)} />
                <Info label="Created" value={selected.createdAt} />
                <Info label="Last active" value={selected.lastActive} />
                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Flags</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {selected.flags.length ? selected.flags.map((f) => (
                      <span key={f} className="rounded-full bg-secondary px-2 py-1 text-xs font-medium">{f}</span>
                    )) : <span className="text-sm text-muted-foreground">None</span>}
                  </div>
                </div>
                {selected.restrictionReason && (
                  <div className="sm:col-span-2 rounded-lg bg-orange-50 p-3 text-sm text-orange-900">{selected.restrictionReason}</div>
                )}
              </div>
            )}

            {tab === "kyc" && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Info label="KYC status" value={selected.kyc.status} />
                <Info label="Verified" value={selected.kyc.verifiedAt || "—"} />
                <Info label="Legal name" value={selected.kyc.fullName} />
                <Info label="Date of birth" value={selected.kyc.dob} />
                <Info label="Nationality" value={selected.kyc.nationality} />
                <Info label="ID type" value={selected.kyc.idType} />
                <Info label="ID number" value={selected.kyc.idNumber} />
                <Info label="Address" value={selected.kyc.address} />
                {selected.kyc.notes && <div className="sm:col-span-2 rounded-lg bg-secondary p-3 text-sm">{selected.kyc.notes}</div>}
              </div>
            )}

            {tab === "activity" && (
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="pb-2 pr-3">When</th>
                      <th className="pb-2 pr-3">Type</th>
                      <th className="pb-2 pr-3">Method</th>
                      <th className="pb-2 pr-3">Counterparty</th>
                      <th className="pb-2 pr-3">Amount</th>
                      <th className="pb-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {selected.activity.map((tx) => (
                      <tr key={tx.id}>
                        <td className="py-2.5 pr-3 text-muted-foreground">{tx.when}</td>
                        <td className="pr-3">{tx.type}</td>
                        <td className="pr-3">{tx.method}</td>
                        <td className="pr-3">{tx.counterparty}</td>
                        <td className={`pr-3 font-semibold ${tx.amount < 0 ? "text-red-600" : "text-emerald-600"}`}>
                          {tx.amount > 0 ? "+" : ""}{tx.amount.toFixed(2)}
                        </td>
                        <td>{tx.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === "controls" && (
              <div className="mt-5 space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold">Restrict / restore</h3>
                  <select value={reason} onChange={(e) => setReason(e.target.value)} className="mb-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
                    {reasons.map((r) => <option key={r}>{r}</option>)}
                  </select>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} placeholder="Investigation notes (required to restrict)" className="mb-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setStatusOn("restricted")} className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white"><Ban size={14} /> Restrict send</button>
                    <button onClick={() => setStatusOn("frozen")} className="inline-flex items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white"><Snowflake size={14} /> Freeze funds</button>
                    <button onClick={() => setStatusOn("suspended")} className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white"><ShieldAlert size={14} /> Suspend</button>
                    <button onClick={() => setStatusOn("active")} className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white"><Unlock size={14} /> Restore</button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Balance control</h3>
                  <p className="mb-2 text-sm text-muted-foreground">Current wallet: <strong>{selected.ousd.toFixed(2)} OUSD</strong></p>
                  <div className="mb-2 flex gap-2">
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-32 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                    <input value={balanceNote} onChange={(e) => setBalanceNote(e.target.value)} placeholder="Reason for ledger adjustment" className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => adjust(1)} className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white">Credit OUSD</button>
                    <button onClick={() => adjust(-1)} className="rounded-lg bg-secondary px-3 py-2 text-sm font-semibold">Debit OUSD</button>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Admin audit</h3>
                  {selected.audit.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No control actions on this account yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {selected.audit.map((row) => (
                        <div key={row.id} className="rounded-lg bg-secondary/60 px-3 py-2 text-sm">
                          <p className="font-medium">{row.action} · {row.actor}</p>
                          <p className="text-muted-foreground">{row.detail}</p>
                          <p className="text-xs text-muted-foreground">{row.when}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">Select an account to investigate.</div>
        )}
      </div>
    </div>
  );
};

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-medium text-foreground">{value}</p>
    </div>
  );
}

export default AdminAccountControl;
