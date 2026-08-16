import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Edit, Trash2, Eye, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteBlogPost, mergeBlogPosts, setBlogPublished, type CmsBlogPost } from "@/lib/adminStore";
import { FALLBACK_BLOG_POSTS } from "@/data/fallbackBlogPosts";
import { toast } from "sonner";

const AdminBlog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tick, setTick] = useState(0);

  const posts = useMemo(() => mergeBlogPosts(FALLBACK_BLOG_POSTS, true), [tick]);
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const visible = posts.filter((post) => {
    const q = query.toLowerCase();
    const matches =
      post.title.toLowerCase().includes(q) ||
      post.desc.toLowerCase().includes(q) ||
      post.slug.toLowerCase().includes(q);
    return matches && (category === "All" || post.category === category);
  });

  const remove = (post: CmsBlogPost) => {
    if (!confirm(`Delete “${post.title}”? It will disappear from the public blog.`)) return;
    deleteBlogPost(post.id);
    setTick((n) => n + 1);
    toast.success("Post deleted");
  };

  const toggle = (post: CmsBlogPost) => {
    const next = post.published === false;
    setBlogPublished(post.id, next);
    setTick((n) => n + 1);
    toast.success(next ? "Published" : "Unpublished");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground">Write, edit, and publish posts that appear on /blog.</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-semibold text-white hover:opacity-90"
        >
          <Plus size={18} />
          New post
        </Link>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, slug, or description…"
            className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                category === cat ? "bg-accent text-white" : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {visible.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i, 8) * 0.03 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">{post.category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      post.published === false ? "bg-orange-100 text-orange-700" : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {post.published === false ? "Draft" : "Live"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{post.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{post.desc}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={12} /> {post.date} · /blog/{post.slug || post.id}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Link to={`/blog/${post.slug || post.id}`} className="rounded-lg p-2 text-muted-foreground hover:bg-secondary" title="View">
                  <Eye size={18} />
                </Link>
                <Link to={`/admin/blog/edit/${post.id}`} className="rounded-lg p-2 text-muted-foreground hover:bg-secondary" title="Edit">
                  <Edit size={18} />
                </Link>
                <button onClick={() => toggle(post)} className="rounded-lg px-3 py-2 text-xs font-semibold hover:bg-secondary">
                  {post.published === false ? "Publish" : "Unpublish"}
                </button>
                <button onClick={() => remove(post)} className="rounded-lg p-2 text-muted-foreground hover:bg-red-50 hover:text-red-600" title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="py-16 text-center">
          <FileText className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="font-semibold text-foreground">No posts match</p>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
