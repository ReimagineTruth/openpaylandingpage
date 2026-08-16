import { useState } from "react";
import { Search, Shield, User, Calendar, Crown } from "lucide-react";
import { loadStaff, saveStaff, type StaffUser } from "@/lib/adminStore";
import { toast } from "sonner";

const AdminUsers = () => {
  const [users, setUsers] = useState<StaffUser[]>(() => loadStaff());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const persist = (next: StaffUser[]) => {
    setUsers(next);
    saveStaff(next);
  };

  const filtered = users.filter((user) => {
    const matchesSearch = user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch && (selectedRole === "All" || user.role === selectedRole);
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Staff</h1>
        <p className="text-muted-foreground">Portal operators — not wallet customers. Use Account control for OpenPay users.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search staff email…"
            className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div className="flex gap-2">
          {["All", "admin", "user"].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`rounded-lg px-4 py-2 font-medium capitalize ${
                selectedRole === role ? "bg-accent text-white" : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full">
          <thead className="bg-secondary/50 text-left text-xs font-semibold uppercase text-foreground">
            <tr>
              <th className="px-6 py-4">Staff</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4">Last active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                      <User className="h-5 w-5 text-accent" />
                    </div>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={(e) => {
                      persist(users.map((u) => (u.id === user.id ? { ...u, role: e.target.value as StaffUser["role"] } : u)));
                      toast.success("Role updated");
                    }}
                    className="rounded-lg border border-border bg-background px-3 py-1 text-sm"
                  >
                    <option value="user">Support</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><Calendar size={14} /> {user.created_at}</span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{user.last_active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Stat icon={User} value={users.length} label="Staff" />
        <Stat icon={Crown} value={users.filter((u) => u.role === "admin").length} label="Admins" />
        <Stat icon={Shield} value={users.filter((u) => u.role === "user").length} label="Support" />
      </div>
    </div>
  );
};

function Stat({ icon: Icon, value, label }: { icon: typeof User; value: number; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-accent/10 p-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
