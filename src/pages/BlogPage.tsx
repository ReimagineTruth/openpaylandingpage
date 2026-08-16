import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import { supabase } from "@/utils/supabase";
import { mergeBlogPosts, mapDbBlog, siteValue } from "@/lib/adminStore";
import { FALLBACK_BLOG_POSTS } from "@/data/fallbackBlogPosts";

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('published_at', { ascending: false, nullsFirst: false });
        const timeout = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Supabase timeout')), 4000)
        );
        const { data, error } = await Promise.race([query, timeout]);

        if (error) {
          console.error('Error fetching posts:', error);
          setPosts(mergeBlogPosts(FALLBACK_BLOG_POSTS));
        } else if (data?.length) {
          setPosts(mergeBlogPosts([...FALLBACK_BLOG_POSTS, ...data.map((row) => mapDbBlog(row as Record<string, unknown>))]));
        } else {
          setPosts(mergeBlogPosts(FALLBACK_BLOG_POSTS));
        }
      } catch (err) {
        console.error('Error:', err);
        setPosts(mergeBlogPosts(FALLBACK_BLOG_POSTS));
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const categoryDot: Record<string, string> = {
    Product: "bg-accent",
    Guide: "bg-emerald-500",
    Update: "bg-orange-500",
    Insight: "bg-purple-500",
    Security: "bg-red-500",
  };

  const cardTint: Record<string, string> = {
    Product: "from-accent/15 to-accent/5",
    Guide: "from-emerald-500/15 to-emerald-500/5",
    Update: "from-orange-500/15 to-orange-500/5",
    Insight: "from-purple-500/15 to-purple-500/5",
    Security: "from-red-500/15 to-red-500/5",
  };

  const categories = useMemo(() => {
    const set = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));
    return ["All", ...set];
  }, [posts]);

  const visiblePosts = useMemo(
    () => (activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory)),
    [posts, activeCategory]
  );

  const featured = visiblePosts[0];
  const rest = visiblePosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent" />
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-44 md:pb-16 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-semibold text-foreground/70">
              {siteValue("blog", "hero", "eyebrow", "Learn")}
            </span>
            <h1 className="mt-7 text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight">
              {siteValue("blog", "hero", "title", "OpenPay blog")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {siteValue("blog", "hero", "subtitle", "All the latest news, updates, and announcements from OpenPay.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 sm:px-6 pb-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat !== "All" && (
                <span className={`h-2 w-2 rounded-full ${categoryDot[cat] || "bg-muted-foreground"}`} />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="px-5 sm:px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <Link to={`/blog/${featured.id || featured.slug}`} className="group block">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-6 md:gap-10 items-center rounded-4xl bg-card border border-border p-5 sm:p-8 md:p-10 hover:shadow-elevated transition-shadow"
              >
                <div
                  className={`rounded-3xl bg-gradient-to-br ${cardTint[featured.category] || "from-secondary to-background"} aspect-[16/10] flex items-center justify-center p-8`}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-foreground/80 leading-snug text-center tracking-tight">
                    "{featured.hero}"
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground/60">
                    <span className={`h-2 w-2 rounded-full ${categoryDot[featured.category] || "bg-muted-foreground"}`} />
                    {featured.category}
                  </div>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground leading-[1.15] tracking-tight group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{featured.desc}</p>
                  <p className="mt-6 text-sm text-muted-foreground">
                    <span className="italic">{featured.author}</span> · {featured.date}
                  </p>
                </div>
              </motion.article>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="px-5 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rest.map((post, i) => (
            <Link key={post.id || post.slug} to={`/blog/${post.id || post.slug}`} className="group block h-full">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i, 5) * 0.05 }}
                className="h-full flex flex-col rounded-4xl bg-card border border-border p-4 sm:p-5 hover:shadow-elevated transition-shadow"
              >
                <div
                  className={`rounded-3xl bg-gradient-to-br ${cardTint[post.category] || "from-secondary to-background"} aspect-[16/10] flex items-center justify-center p-6`}
                >
                  <p className="text-lg sm:text-xl font-bold text-foreground/75 text-center leading-snug tracking-tight">
                    "{post.hero}"
                  </p>
                </div>
                <div className="flex-1 flex flex-col px-1.5 pt-5 pb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-[1.2] tracking-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground leading-relaxed line-clamp-3">{post.desc}</p>
                  <div className="mt-auto pt-5 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground/70">
                      <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[post.category] || "bg-muted-foreground"}`} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
