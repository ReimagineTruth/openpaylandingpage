import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Home, Save, Settings, Type } from "lucide-react";
import { loadSitePages, saveSitePages, type SitePage } from "@/lib/adminStore";
import { toast } from "sonner";

const icons = { homepage: Home, blog: Type, about: FileText, footer: Settings };

const AdminContent = () => {
  const [pages, setPages] = useState<SitePage[]>(() => loadSitePages());
  const [active, setActive] = useState(pages[0]?.id || "homepage");
  const [saving, setSaving] = useState(false);

  const page = pages.find((p) => p.id === active) || pages[0];

  const updateField = (blockId: string, name: string, value: string) => {
    setPages((prev) =>
      prev.map((p) =>
        p.id !== active
          ? p
          : {
              ...p,
              blocks: p.blocks.map((b) =>
                b.id !== blockId
                  ? b
                  : { ...b, fields: b.fields.map((f) => (f.name === name ? { ...f, value } : f)) },
              ),
            },
      ),
    );
  };

  const save = () => {
    setSaving(true);
    saveSitePages(pages);
    toast.success("Page copy saved");
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Pages</h1>
        <p className="text-muted-foreground">Edit landing copy. Saves on this admin browser.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 px-2 text-sm font-semibold">Site</h3>
          <div className="space-y-1">
            {pages.map((item) => {
              const Icon = icons[item.id as keyof typeof icons] || FileText;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left ${
                    active === item.id ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-5 lg:col-span-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{page?.name}</h2>
            <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white disabled:opacity-50">
              <Save size={16} /> {saving ? "Saving…" : "Save"}
            </button>
          </div>
          {page?.blocks.map((block, i) => (
            <motion.div key={block.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold">{block.title}</h3>
              <div className="space-y-4">
                {block.fields.map((field) => (
                  <div key={field.name}>
                    <label className="mb-1 block text-sm font-medium">{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea value={field.value} onChange={(e) => updateField(block.id, field.name, e.target.value)} rows={4} className="w-full rounded-lg border border-border bg-background px-4 py-3" />
                    ) : (
                      <input value={field.value} onChange={(e) => updateField(block.id, field.name, e.target.value)} className="w-full rounded-lg border border-border bg-background px-4 py-3" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
