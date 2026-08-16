export type CmsBlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  desc: string;
  meta: string;
  tags: string[];
  hero: string;
  content: string;
  cta_text: string;
  cta_link: string;
  published?: boolean;
};

export function mapDbBlog(row: Record<string, unknown>): CmsBlogPost {
  const slug = String(row.slug || row.id || "");
  const tags = Array.isArray(row.tags) ? row.tags.map(String) : [];
  return {
    id: slug,
    slug,
    title: String(row.title || ""),
    date: String(row.display_date || row.date || ""),
    author: String(row.author || "OpenPay Team"),
    category: String(row.category || "Update"),
    desc: String(row.summary || row.desc || ""),
    meta: String(row.meta || ""),
    tags,
    hero: String(row.hero || ""),
    content: String(row.content || ""),
    cta_text: String(row.cta_text || ""),
    cta_link: String(row.cta_link || ""),
    published: row.published !== false,
  };
}

export type SiteField = { name: string; label: string; type: "text" | "textarea" | "url"; value: string };
export type SiteBlock = { id: string; title: string; fields: SiteField[] };
export type SitePage = { id: string; name: string; blocks: SiteBlock[] };

export type AccountStatus = "active" | "restricted" | "frozen" | "suspended";
export type KycStatus = "approved" | "pending" | "rejected" | "expired";
export type RiskLevel = "low" | "medium" | "high";

export type AccountTx = {
  id: string;
  when: string;
  type: string;
  method: string;
  counterparty: string;
  amount: number;
  status: string;
  note?: string;
};

export type AccountAudit = {
  id: string;
  when: string;
  actor: string;
  action: string;
  detail: string;
};

export type WalletAccount = {
  id: string;
  username: string;
  accountNo: string;
  email: string;
  name: string;
  status: AccountStatus;
  risk: RiskLevel;
  ousd: number;
  pi: number;
  flags: string[];
  lastActive: string;
  createdAt: string;
  restrictionReason?: string;
  kyc: {
    status: KycStatus;
    fullName: string;
    dob: string;
    nationality: string;
    idType: string;
    idNumber: string;
    address: string;
    verifiedAt?: string;
    notes?: string;
  };
  activity: AccountTx[];
  audit: AccountAudit[];
};

export type StaffUser = {
  id: string;
  email: string;
  role: "admin" | "user";
  created_at: string;
  last_active: string;
};

type BlogOverlay = {
  deletedIds: string[];
  unpublishedIds: string[];
  posts: Record<string, CmsBlogPost>;
};

const BLOG_KEY = "openpay_admin_blog_v1";
const SITE_KEY = "openpay_admin_site_v1";
const ACCOUNTS_KEY = "openpay_admin_accounts_v1";
const STAFF_KEY = "openpay_admin_staff_v1";
const AUDIT_KEY = "openpay_admin_audit_v1";

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function emptyBlogOverlay(): BlogOverlay {
  return { deletedIds: [], unpublishedIds: [], posts: {} };
}

export function loadBlogOverlay(): BlogOverlay {
  return readJson(BLOG_KEY, emptyBlogOverlay());
}

export function mergeBlogPosts(seed: CmsBlogPost[], forAdmin = false): CmsBlogPost[] {
  const overlay = loadBlogOverlay();
  const byId = new Map<string, CmsBlogPost>();
  seed.forEach((post) => byId.set(post.id, { ...post, published: true }));
  Object.values(overlay.posts).forEach((post) => {
    byId.set(post.id, { ...post, published: post.published !== false });
  });
  overlay.deletedIds.forEach((id) => byId.delete(id));
  overlay.unpublishedIds.forEach((id) => {
    const post = byId.get(id);
    if (post) post.published = false;
  });
  const list = Array.from(byId.values());
  const visible = forAdmin ? list : list.filter((p) => p.published !== false);
  return visible.sort((a, b) => Date.parse(b.date) - Date.parse(a.date) || b.id.localeCompare(a.id));
}

export function getBlogPost(seed: CmsBlogPost[], id: string, forAdmin = false) {
  return mergeBlogPosts(seed, forAdmin).find((p) => p.id === id || p.slug === id) || null;
}

export function saveBlogPost(post: CmsBlogPost) {
  const overlay = loadBlogOverlay();
  const id = post.id || post.slug || slugify(post.title);
  const next: CmsBlogPost = {
    ...post,
    id,
    slug: post.slug || id,
    published: post.published !== false,
  };
  overlay.posts[id] = next;
  overlay.deletedIds = overlay.deletedIds.filter((x) => x !== id);
  overlay.unpublishedIds = next.published ? overlay.unpublishedIds.filter((x) => x !== id) : Array.from(new Set([...overlay.unpublishedIds, id]));
  writeJson(BLOG_KEY, overlay);
  pushAudit("blog", `Saved “${next.title}”`);
  return next;
}

export function deleteBlogPost(id: string) {
  const overlay = loadBlogOverlay();
  delete overlay.posts[id];
  overlay.deletedIds = Array.from(new Set([...overlay.deletedIds, id]));
  writeJson(BLOG_KEY, overlay);
  pushAudit("blog", `Deleted post ${id}`);
}

export function setBlogPublished(id: string, published: boolean) {
  const overlay = loadBlogOverlay();
  overlay.unpublishedIds = published
    ? overlay.unpublishedIds.filter((x) => x !== id)
    : Array.from(new Set([...overlay.unpublishedIds, id]));
  if (overlay.posts[id]) overlay.posts[id].published = published;
  writeJson(BLOG_KEY, overlay);
  pushAudit("blog", `${published ? "Published" : "Unpublished"} ${id}`);
}

export const DEFAULT_SITE_PAGES: SitePage[] = [
  {
    id: "homepage",
    name: "Homepage",
    blocks: [
      {
        id: "hero",
        title: "Hero",
        fields: [
          { name: "headline", label: "Headline", type: "text", value: "Every feature. One wallet." },
          { name: "subheadline", label: "Subheadline", type: "textarea", value: "Hold OpenUSD, send with QR, mine rewards, and accept payments with QR Pay." },
          { name: "cta_text", label: "Primary CTA", type: "text", value: "Sign in with Pi" },
          { name: "cta_link", label: "Primary CTA link", type: "url", value: "https://openpy.space/auth" },
        ],
      },
      {
        id: "trust",
        title: "Trust strip",
        fields: [
          { name: "line", label: "Trust line", type: "text", value: "OUSD $1 peg · Live PI rates · KYC · Pi Browser · OpenPay Pro" },
        ],
      },
    ],
  },
  {
    id: "blog",
    name: "Blog",
    blocks: [
      {
        id: "hero",
        title: "Blog header",
        fields: [
          { name: "eyebrow", label: "Eyebrow", type: "text", value: "Learn" },
          { name: "title", label: "Title", type: "text", value: "OpenPay blog" },
          { name: "subtitle", label: "Subtitle", type: "textarea", value: "All the latest news, updates, and announcements from OpenPay." },
        ],
      },
    ],
  },
  {
    id: "about",
    name: "About",
    blocks: [
      {
        id: "about_content",
        title: "About OpenPay",
        fields: [
          { name: "title", label: "Page title", type: "text", value: "About OpenPay" },
          { name: "content", label: "Body", type: "textarea", value: "OpenPay is building stable payments for the Pi economy — wallet, merchant rails, and OpenUSD." },
        ],
      },
    ],
  },
  {
    id: "footer",
    name: "Footer",
    blocks: [
      {
        id: "footer",
        title: "Footer",
        fields: [
          { name: "tagline", label: "Tagline", type: "text", value: "Stable payments for the Pi economy." },
          { name: "support", label: "Support email", type: "text", value: "support@openpy.space" },
        ],
      },
    ],
  },
];

export function siteValue(pageId: string, blockId: string, name: string, fallback = "") {
  const page = loadSitePages().find((p) => p.id === pageId);
  const field = page?.blocks.find((b) => b.id === blockId)?.fields.find((f) => f.name === name);
  return field?.value || fallback;
}

export function loadSitePages(): SitePage[] {
  const saved = readJson<SitePage[] | null>(SITE_KEY, null);
  if (!saved?.length) return structuredClone(DEFAULT_SITE_PAGES);
  const byId = new Map(saved.map((p) => [p.id, p]));
  return DEFAULT_SITE_PAGES.map((page) => byId.get(page.id) || page);
}

export function saveSitePages(pages: SitePage[]) {
  writeJson(SITE_KEY, pages);
  pushAudit("pages", "Updated site content");
}

export const SEED_ACCOUNTS: WalletAccount[] = [
  {
    id: "acc-alice",
    username: "alice",
    accountNo: "OP-1842-5501",
    email: "alice@openpy.space",
    name: "Alice Reyes",
    status: "active",
    risk: "low",
    ousd: 248.5,
    pi: 120.4,
    flags: [],
    lastActive: "Aug 16, 2026 · 3:12 PM",
    createdAt: "Jan 18, 2026",
    kyc: {
      status: "approved",
      fullName: "Alice Marie Reyes",
      dob: "1994-03-12",
      nationality: "Philippines",
      idType: "Passport",
      idNumber: "P7•••4491",
      address: "Makati, Metro Manila",
      verifiedAt: "Feb 2, 2026",
    },
    activity: [
      { id: "t1", when: "Aug 16, 3:12 PM", type: "Receive", method: "QR Pay", counterparty: "@store", amount: 18, status: "Completed" },
      { id: "t2", when: "Aug 15, 9:40 AM", type: "Cash in", method: "Apple Pay", counterparty: "Apple Pay", amount: 50, status: "Completed" },
      { id: "t3", when: "Aug 14, 6:02 PM", type: "Send", method: "OpenPay", counterparty: "@juan", amount: -25, status: "Completed" },
    ],
    audit: [],
  },
  {
    id: "acc-juan",
    username: "juan",
    accountNo: "OP-2201-8834",
    email: "juan@example.com",
    name: "Juan Dela Cruz",
    status: "active",
    risk: "high",
    ousd: 12.08,
    pi: 4.2,
    flags: ["velocity", "abuse-review"],
    lastActive: "Aug 16, 2026 · 4:01 PM",
    createdAt: "Mar 4, 2026",
    kyc: {
      status: "approved",
      fullName: "Juan Dela Cruz",
      dob: "1990-11-02",
      nationality: "Philippines",
      idType: "National ID",
      idNumber: "PH•••7721",
      address: "Quezon City",
      verifiedAt: "Mar 9, 2026",
      notes: "Multiple failed bank sends in 24h.",
    },
    activity: [
      { id: "t1", when: "Aug 16, 4:01 PM", type: "Send", method: "Pi Wallet", counterparty: "GDSXE7…D4LJ", amount: -10, status: "Completed", note: "cashout" },
      { id: "t2", when: "Aug 16, 3:40 PM", type: "Send", method: "Bank", counterparty: "GCash", amount: -40, status: "Failed" },
      { id: "t3", when: "Aug 16, 2:11 PM", type: "Send", method: "Express Send", counterparty: "@alice", amount: -80, status: "Completed" },
      { id: "t4", when: "Aug 15, 11:22 PM", type: "Cash in", method: "Maya", counterparty: "Maya", amount: 20, status: "Completed" },
    ],
    audit: [],
  },
  {
    id: "acc-store",
    username: "openpaystore",
    accountNo: "OP-9011-0042",
    email: "merchant@openpy.space",
    name: "OpenPay Store",
    status: "active",
    risk: "low",
    ousd: 1840.0,
    pi: 0,
    flags: ["merchant"],
    lastActive: "Aug 16, 2026 · 1:55 PM",
    createdAt: "Dec 2, 2025",
    kyc: {
      status: "approved",
      fullName: "OpenPay Store Inc.",
      dob: "—",
      nationality: "Philippines",
      idType: "Business permit",
      idNumber: "BN•••1042",
      address: "BGC, Taguig",
      verifiedAt: "Dec 12, 2025",
    },
    activity: [
      { id: "t1", when: "Aug 16, 1:55 PM", type: "Receive", method: "QR Pay", counterparty: "Checkout qrp_8f", amount: 32.5, status: "Completed" },
      { id: "t2", when: "Aug 16, 11:02 AM", type: "Receive", method: "PayMongo Link", counterparty: "pm.link/…", amount: 85, status: "Completed" },
    ],
    audit: [],
  },
  {
    id: "acc-mira",
    username: "mira",
    accountNo: "OP-3310-1199",
    email: "mira@example.com",
    name: "Mira Santos",
    status: "active",
    risk: "medium",
    ousd: 4.0,
    pi: 18.7,
    flags: ["kyc-pending"],
    lastActive: "Aug 15, 2026 · 8:20 PM",
    createdAt: "Aug 12, 2026",
    kyc: {
      status: "pending",
      fullName: "Mira Santos",
      dob: "2001-07-19",
      nationality: "Philippines",
      idType: "Driver’s license",
      idNumber: "N0•••3310",
      address: "Cebu City",
      notes: "Selfie mismatch — waiting resubmit.",
    },
    activity: [
      { id: "t1", when: "Aug 15, 8:20 PM", type: "Mining", method: "Engage Mining", counterparty: "OpenPay", amount: 0.25, status: "Completed" },
      { id: "t2", when: "Aug 12, 4:10 PM", type: "Welcome", method: "KYC bonus", counterparty: "OpenPay", amount: 0, status: "Held" },
    ],
    audit: [],
  },
  {
    id: "acc-risk",
    username: "riskcase",
    accountNo: "OP-7744-2208",
    email: "risk@example.com",
    name: "Leo Navarro",
    status: "restricted",
    risk: "high",
    ousd: 610.22,
    pi: 2.0,
    flags: ["tos", "phishing-reports"],
    lastActive: "Aug 14, 2026 · 7:05 AM",
    createdAt: "May 1, 2026",
    restrictionReason: "Terms of service — reported phishing QR Pay links.",
    kyc: {
      status: "approved",
      fullName: "Leonardo Navarro",
      dob: "1988-01-30",
      nationality: "Philippines",
      idType: "Passport",
      idNumber: "P2•••2208",
      address: "Davao City",
      verifiedAt: "May 6, 2026",
    },
    activity: [
      { id: "t1", when: "Aug 14, 7:05 AM", type: "Send", method: "QR Pay", counterparty: "unknown checkout", amount: -95, status: "Blocked" },
      { id: "t2", when: "Aug 13, 9:18 PM", type: "Receive", method: "P2P", counterparty: "@newuser", amount: 400, status: "Completed" },
    ],
    audit: [{ id: "a1", when: "Aug 14, 2026 · 8:00 AM", actor: "admin@openpy.space", action: "Restrict", detail: "Phishing reports — send blocked" }],
  },
  {
    id: "acc-frozen",
    username: "northwind",
    accountNo: "OP-5566-0912",
    email: "northwind@example.com",
    name: "Northwind Labs",
    status: "frozen",
    risk: "high",
    ousd: 90.0,
    pi: 0,
    flags: ["fraud-review"],
    lastActive: "Aug 10, 2026 · 2:44 PM",
    createdAt: "Jul 22, 2026",
    restrictionReason: "Suspected fraud — funds frozen pending review.",
    kyc: {
      status: "rejected",
      fullName: "Northwind Labs",
      dob: "—",
      nationality: "Unknown",
      idType: "Utility bill",
      idNumber: "—",
      address: "Unverified",
      notes: "Document not authentic.",
    },
    activity: [
      { id: "t1", when: "Aug 10, 2:44 PM", type: "Cash in", method: "Card", counterparty: "Visa ••19", amount: 90, status: "Disputed" },
    ],
    audit: [{ id: "a1", when: "Aug 11, 2026 · 10:12 AM", actor: "admin@openpy.space", action: "Freeze", detail: "Chargeback risk" }],
  },
];

export function loadAccounts(): WalletAccount[] {
  return readJson(ACCOUNTS_KEY, structuredClone(SEED_ACCOUNTS));
}

export function saveAccounts(accounts: WalletAccount[]) {
  writeJson(ACCOUNTS_KEY, accounts);
}

export function upsertAccount(next: WalletAccount) {
  const accounts = loadAccounts();
  const idx = accounts.findIndex((a) => a.id === next.id);
  if (idx >= 0) accounts[idx] = next;
  else accounts.unshift(next);
  saveAccounts(accounts);
  return next;
}

export const SEED_STAFF: StaffUser[] = [
  { id: "1", email: "admin@openpy.space", role: "admin", created_at: "2026-01-15", last_active: "2026-08-16" },
  { id: "2", email: "ops@openpy.space", role: "admin", created_at: "2026-03-02", last_active: "2026-08-15" },
  { id: "3", email: "support@openpy.space", role: "user", created_at: "2026-04-11", last_active: "2026-08-16" },
];

export function loadStaff(): StaffUser[] {
  return readJson(STAFF_KEY, structuredClone(SEED_STAFF));
}

export function saveStaff(users: StaffUser[]) {
  writeJson(STAFF_KEY, users);
  pushAudit("staff", "Updated staff users");
}

export type AdminAudit = { id: string; when: string; area: string; detail: string };

export function loadAudit(): AdminAudit[] {
  return readJson(AUDIT_KEY, [] as AdminAudit[]);
}

export function pushAudit(area: string, detail: string) {
  const rows = loadAudit();
  rows.unshift({
    id: `au-${Date.now()}`,
    when: new Date().toLocaleString(),
    area,
    detail,
  });
  writeJson(AUDIT_KEY, rows.slice(0, 80));
}
