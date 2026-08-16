import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Save, X, Eye, Tag as TagIcon, Calendar, User } from "lucide-react";
import { getBlogPost, saveBlogPost, slugify, type CmsBlogPost } from "@/lib/adminStore";
import { FALLBACK_BLOG_POSTS } from "@/data/fallbackBlogPosts";
import { toast } from "sonner";

const categories = ["Product", "Guide", "Update", "Insight", "Security"];

const emptyPost = (): CmsBlogPost => ({
  id: "",
  slug: "",
  title: "",
  date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  author: "OpenPay Team",
  category: "Product",
  desc: "",
  meta: "",
  tags: [],
  hero: "",
  content: "",
  cta_text: "",
  cta_link: "https://openpy.space/",
  published: true,
});

const AdminBlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  const [form, setForm] = useState<CmsBlogPost>(emptyPost());
  const [tagInput, setTagInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!isEditing || !id) return;
    const existing = getBlogPost(FALLBACK_BLOG_POSTS, id, true);
    if (existing) setForm({ ...existing, published: existing.published !== false });
  }, [id, isEditing]);

  const set = (field: keyof CmsBlogPost, value: CmsBlogPost[keyof CmsBlogPost]) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title" && !isEditing) {
        next.slug = slugify(String(value));
        next.id = next.slug;
      }
      return next;
    });
  };

  const addTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (!tag || form.tags.includes(tag)) return;
    setForm((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    setTagInput("");
  };

  const save = () => {
    if (!form.title.trim() || !form.content.trim()) {
      toast.error("Title and content are required");
      return;
    }
    setSaving(true);
    const saved = saveBlogPost({
      ...form,
      id: form.id || form.slug || slugify(form.title),
      slug: form.slug || slugify(form.title),
      meta: form.meta || form.desc,
    });
    toast.success(isEditing ? "Post updated — live on /blog" : "Post published");
    setSaving(false);
    navigate("/admin/blog");
    return saved;
  };

  if (preview) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={() => setPreview(false)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <X size={18} /> Back to editor
          </button>
          <button onClick={save} className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white">
            <Save size={18} /> Save
          </button>
        </div>
        <div className="rounded-xl border border-border bg-card p-8">
          <span className="rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">{form.category}</span>
          <h1 className="mt-4 text-4xl font-bold text-foreground">{form.title || "Untitled"}</h1>
          <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><User size={14} /> {form.author}</span>
            <span className="inline-flex items-center gap-1"><Calendar size={14} /> {form.date}</span>
          </div>
          <p className="mt-6 rounded-xl bg-accent/10 p-5 text-xl font-semibold italic">{form.hero}</p>
          <pre className="mt-6 whitespace-pre-wrap font-sans text-base leading-relaxed">{form.content}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{isEditing ? "Edit post" : "New post"}</h1>
          <p className="text-muted-foreground">{isEditing ? "Changes go live on the public blog." : "Write markdown. Publish when ready."}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setPreview(true)} className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-semibold">
            <Eye size={18} /> Preview
          </button>
          <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white disabled:opacity-50">
            <Save size={18} /> {saving ? "Saving…" : "Save & publish"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <label className="mb-2 block text-sm font-medium">Title</label>
            <input
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="OpenPay — …"
            />
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <label className="mb-2 block text-sm font-medium">Content (Markdown)</label>
            <textarea
              value={form.content}
              onChange={(e) => set("content", e.target.value)}
              rows={22}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="# Heading"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold">Details</h3>
            <div>
              <label className="mb-1 block text-sm">Slug</label>
              <input value={form.slug} onChange={(e) => set("slug", slugify(e.target.value))} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Category</label>
              <select value={form.category} onChange={(e) => set("category", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm">Date</label>
              <input value={form.date} onChange={(e) => set("date", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Author</label>
              <input value={form.author} onChange={(e) => set("author", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={form.published !== false} onChange={(e) => set("published", e.target.checked)} />
              Published on /blog
            </label>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 font-semibold">Listing</h3>
            <textarea value={form.desc} onChange={(e) => set("desc", e.target.value)} rows={3} className="mb-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Short description" />
            <input value={form.hero} onChange={(e) => set("hero", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Hero line" />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 font-semibold">SEO meta</h3>
            <textarea value={form.meta} onChange={(e) => set("meta", e.target.value)} rows={2} maxLength={160} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            <p className="mt-1 text-xs text-muted-foreground">{form.meta.length}/160</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 font-semibold">Tags</h3>
            <div className="mb-3 flex gap-2">
              <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
              <button onClick={addTag} className="rounded-lg bg-secondary px-3"><TagIcon size={16} /></button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                  #{tag}
                  <button onClick={() => setForm((p) => ({ ...p, tags: p.tags.filter((t) => t !== tag) }))}><X size={12} /></button>
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h3 className="font-semibold">CTA</h3>
            <input value={form.cta_text} onChange={(e) => set("cta_text", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Button text" />
            <input value={form.cta_link} onChange={(e) => set("cta_link", e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="https://openpy.space/…" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
