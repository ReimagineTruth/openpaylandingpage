import { motion } from "framer-motion";
import { FileText, Users, ShieldAlert, Settings, Plus, ArrowRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { mergeBlogPosts, loadAccounts, loadAudit, loadStaff } from "@/lib/adminStore";
import { FALLBACK_BLOG_POSTS } from "@/data/fallbackBlogPosts";

const AdminDashboard = () => {
  const posts = mergeBlogPosts(FALLBACK_BLOG_POSTS, true);
  const accounts = loadAccounts();
  const staff = loadStaff();
  const audit = loadAudit();
  const flagged = accounts.filter((a) => a.status !== "active" || a.risk === "high").length;

  const stats = [
    { name: "Blog posts", value: String(posts.length), hint: `${posts.filter((p) => p.published !== false).length} live`, icon: FileText, href: "/admin/blog" },
    { name: "Wallet accounts", value: String(accounts.length), hint: `${flagged} need review`, icon: ShieldAlert, href: "/admin/control" },
    { name: "Staff", value: String(staff.length), hint: `${staff.filter((s) => s.role === "admin").length} admins`, icon: Users, href: "/admin/users" },
    { name: "Audit events", value: String(audit.length), hint: "Last 80 actions", icon: Activity, href: "/admin/control" },
  ];

  const actions = [
    { name: "Write a blog post", desc: "Create, edit, publish, or unpublish articles on the live blog.", href: "/admin/blog/new", icon: Plus, color: "from-[#007AFF] to-[#0056CC]" },
    { name: "Edit site pages", desc: "Homepage, blog header, about, and footer copy.", href: "/admin/content", icon: Settings, color: "from-violet-500 to-violet-600" },
    { name: "Investigate an account", desc: "Search by username or account number. Restrict abuse. Adjust OUSD.", href: "/admin/control", icon: ShieldAlert, color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Overview</p>
        <h1 className="mt-1 text-3xl font-bold text-foreground">Control portal</h1>
        <p className="mt-2 text-muted-foreground">Write blogs, edit pages, and manage wallet accounts from one place.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Link key={stat.name} to={stat.href}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 hover:shadow-card"
            >
              <stat.icon className="mb-4 h-5 w-5 text-accent" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground">{stat.name}</p>
              <p className="text-xs text-muted-foreground">{stat.hint}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Quick actions</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {actions.map((action) => (
            <Link key={action.name} to={action.href} className="group rounded-xl border border-border bg-card p-5 hover:shadow-card">
              <div className={`mb-4 w-fit rounded-lg bg-gradient-to-br ${action.color} p-2.5 text-white`}>
                <action.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{action.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{action.desc}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                Open <ArrowRight size={14} />
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Recent admin activity</h2>
        {audit.length === 0 ? (
          <p className="text-sm text-muted-foreground">No admin actions yet. Publish a post or restrict an account to start the log.</p>
        ) : (
          <div className="space-y-3">
            {audit.slice(0, 8).map((row) => (
              <div key={row.id} className="flex items-start justify-between gap-4 rounded-lg bg-secondary/50 p-3">
                <div>
                  <p className="text-sm font-medium capitalize text-foreground">{row.area}</p>
                  <p className="text-sm text-muted-foreground">{row.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{row.when}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
