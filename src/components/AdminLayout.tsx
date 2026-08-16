import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  ShieldAlert,
  LogOut,
  Home,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

const groups = [
  {
    label: "Overview",
    items: [{ name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Content",
    items: [
      { name: "Blog", href: "/admin/blog", icon: FileText },
      { name: "Pages", href: "/admin/content", icon: Settings },
    ],
  },
  {
    label: "Trust & safety",
    items: [{ name: "Account control", href: "/admin/control", icon: ShieldAlert }],
  },
  {
    label: "Team",
    items: [{ name: "Staff", href: "/admin/users", icon: Users }],
  },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, admin } = useAdminAuth();
  const location = useLocation();

  const flat = groups.flatMap((g) => g.items);
  const current =
    flat.find((item) => location.pathname === item.href || (item.href !== "/admin/dashboard" && location.pathname.startsWith(item.href))) ||
    flat[0];

  if (location.pathname === "/admin" || location.pathname === "/admin/") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-border bg-card transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007AFF] text-white">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-bold text-foreground">OpenPay Admin</h1>
                <p className="text-xs text-muted-foreground">Control portal</p>
              </div>
            </div>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X size={18} />
            </button>
          </div>
        </div>

        <nav className="flex-1 space-y-5 overflow-y-auto p-4">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const active =
                    location.pathname === item.href ||
                    (item.href !== "/admin/dashboard" && location.pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                        active ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <item.icon size={18} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="mb-3 px-3">
            <p className="text-sm font-medium text-foreground">{admin?.email}</p>
            <p className="text-xs capitalize text-muted-foreground">{admin?.role}</p>
          </div>
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-red-600 hover:bg-red-50"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button className="rounded-lg p-2 hover:bg-secondary lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-semibold text-foreground">{current?.name || "Dashboard"}</h2>
            </div>
            <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Home size={16} />
              View site
            </Link>
          </div>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
