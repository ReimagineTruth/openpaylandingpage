import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListenButton from "@/components/ListenButton";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { supabase } from "@/utils/supabase";
import { getBlogPost, mergeBlogPosts, mapDbBlog } from "@/lib/adminStore";
import { FALLBACK_BLOG_POSTS } from "@/data/fallbackBlogPosts";
import { PhoneChrome } from "@/components/app-store-previews/PhoneChrome";
import {
  DARK_FRAMES,
  frameIdForMockup,
  renderPreviewFrame,
  type PreviewFrameId,
} from "@/components/app-store-previews/featureFrames";

interface BlogPost {
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
}

function BlogUiMock({ id }: { id: PreviewFrameId }) {
  return (
    <div className="my-8 flex justify-center">
      <div className="relative w-[min(100%,280px)] overflow-hidden rounded-[34px] bg-transparent" style={{ aspectRatio: "390 / 844" }}>
        <div className="absolute left-0 top-0 origin-top-left scale-[0.7179]">
          <PhoneChrome statusLight={DARK_FRAMES.has(id)}>
            {renderPreviewFrame(id)}
          </PhoneChrome>
        </div>
      </div>
    </div>
  );
}

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Try to fetch from Supabase first (timeout so hung DNS doesn't block fallback)
        const query = supabase
          .from('blog_posts')
          .select('*')
          .or(`slug.eq.${id},id.eq.${id}`)
          .eq('published', true)
          .single();
        const timeout = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Supabase timeout')), 4000)
        );
        const { data, error } = await Promise.race([query, timeout]);

        if (error) {
          console.error('Error fetching post:', error);
          setPost(getBlogPost(FALLBACK_BLOG_POSTS, id || ""));
        } else if (data) {
          setPost(getBlogPost(FALLBACK_BLOG_POSTS, id || "") || mapDbBlog(data as Record<string, unknown>));
        }
      } catch (err) {
        console.error('Error:', err);
        setPost(getBlogPost(FALLBACK_BLOG_POSTS, id || ""));
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  // Function to clean markdown formatting for better display
  const cleanMarkdown = (text: string) => {
    return text
      // Remove inline markdown symbols but keep the text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers
      .replace(/\*(.*?)\*/g, '$1') // Remove italic markers
      .replace(/`([^`]+)`/g, '$1') // Remove code markers
      .replace(/~~(.*?)~~/g, '$1') // Remove strikethrough markers
      // Clean up extra whitespace
      .replace(/\s+/g, ' ')
      .trim();
  };

  const isListLine = (line: string) => /^([-*]|\d+\.)\s+/.test(line.trim()) && !line.trim().startsWith('**');
  const isHr = (text: string) => /^(-{3,}|\*{3,}|_{3,})\s*$/.test(text.trim());
  const isTableSep = (row: string) => /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(row.trim());

  const renderInline = (text: string, keyPrefix = 'i') => {
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g).filter(Boolean);
    return parts.map((part, i) => {
      const key = `${keyPrefix}-${i}`;
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={key} className="px-1.5 py-0.5 rounded bg-secondary text-[0.85em] font-mono break-all">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={key} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      }
      const mdLink = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (mdLink) {
        const [, label, href] = mdLink;
        const isUrlLabel = /^https?:\/\//i.test(label) || label.length > 40;
        const isCta =
          !isUrlLabel &&
          (href.includes('t.me') ||
            href.includes('openpy.space') ||
            label.toLowerCase().includes('launch') ||
            label.toLowerCase().includes('get started') ||
            label.toLowerCase().includes('try '));
        if (isCta) {
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-1.5 px-3 py-1.5 my-1 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-md text-sm break-words"
            >
              <span className="truncate">{cleanMarkdown(label)}</span>
              <ArrowRight size={14} className="shrink-0" />
            </a>
          );
        }
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-accent hover:text-accent/80 font-semibold underline decoration-accent/30 hover:decoration-accent/60 underline-offset-4 break-all"
          >
            {cleanMarkdown(label)}
          </a>
        );
      }
      if (/^https?:\/\//i.test(part)) {
        return (
          <a
            key={key}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-accent hover:text-accent/80 font-semibold underline decoration-accent/30 underline-offset-4 break-all"
          >
            {part.replace(/^https?:\/\//, '')}
          </a>
        );
      }
      return <span key={key}>{part.replace(/\*(.*?)\*/g, '$1')}</span>;
    });
  };



  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Blog post not found</h1>
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:opacity-80">
              <ArrowLeft size={16} /> Back to blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }




  const categoryDot: Record<string, string> = {
    Product: "bg-accent",
    Guide: "bg-emerald-500",
    Update: "bg-orange-500",
    Insight: "bg-purple-500",
    Security: "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Article header */}
      <section className="pt-32 md:pt-40 pb-8 px-5 sm:px-6">
        <div className="max-w-[46rem] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
            >
              <ArrowLeft size={15} /> Blog
            </Link>

            <h1 className="mt-8 text-[2.25rem] sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.08] tracking-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="text-base sm:text-lg text-muted-foreground">
                <span className="italic">{post.author}</span> · {post.date}
              </p>
              <ListenButton
                label="Listen to article"
                getText={() => `${post.title}. ${post.hero}. ${post.meta}. ${post.content}`}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-foreground/70">
                <span className={`h-2 w-2 rounded-full ${categoryDot[post.category] || "bg-muted-foreground"}`} />
                {post.category}
              </span>
              {post.tags.slice(0, 5).map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero band */}
      <section className="px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-4xl bg-gradient-to-br from-accent/15 to-accent/5 px-6 py-14 sm:px-12 sm:py-20 text-center">
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
              {post.hero}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="px-5 sm:px-6 pt-12 pb-16">
        <div className="max-w-[46rem] mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <p className="text-xl sm:text-2xl text-foreground/80 leading-[1.6] mb-10">{post.meta}</p>

            <div className="text-foreground text-lg leading-[1.75] space-y-6 break-words">
              {(() => {
                let lastHeading = "";
                return post.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                if (isHr(trimmed)) {
                  return <hr key={index} className="my-10 border-border" />;
                }

                if (trimmed.startsWith('```')) {
                  const code = trimmed.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
                  const isPhoneArt = code.includes('┌') || code.includes('│');
                  if (isPhoneArt) {
                    return <BlogUiMock key={index} id={frameIdForMockup(lastHeading, code, post.slug)} />;
                  }
                  return (
                    <pre key={index} className="my-6 overflow-x-auto rounded-2xl bg-secondary p-4 sm:p-5 text-sm font-mono leading-relaxed">
                      <code className="whitespace-pre">{code}</code>
                    </pre>
                  );
                }

                if (trimmed.startsWith('#')) {
                  const lines = trimmed.split('\n');
                  const headingLine = lines[0];
                  const rest = lines.slice(1).join('\n').trim();
                  const level = headingLine.match(/^#+/)?.[0].length || 1;
                  const text = cleanMarkdown(headingLine.replace(/^#+\s*/, ''));
                  lastHeading = text;
                  const HeadingTag = `h${Math.min(level, 3)}` as keyof JSX.IntrinsicElements;
                  return (
                    <div key={index}>
                      <HeadingTag
                        className={`font-bold text-foreground tracking-tight ${
                          level === 1
                            ? 'text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] mt-14 mb-5'
                            : level === 2
                            ? 'text-2xl sm:text-3xl md:text-4xl leading-[1.2] mt-12 mb-4'
                            : 'text-xl sm:text-2xl leading-snug mt-10 mb-3'
                        }`}
                      >
                        {text}
                      </HeadingTag>
                      {rest ? (
                        <p className="text-lg text-foreground/80 leading-[1.75]">
                          {renderInline(rest, `hrest-${index}`)}
                        </p>
                      ) : null}
                    </div>
                  );
                }

                // Bullet / numbered lists — require space after marker so **bold** is not a list
                if (isListLine(trimmed.split('\n')[0])) {
                  const listItems = trimmed.split('\n').filter((line) => isListLine(line));
                  return (
                    <ul key={index} className="space-y-3 my-6">
                      {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-lg text-foreground/80 leading-[1.7]">
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span className="flex-1 min-w-0">{renderInline(item.replace(/^([-*]|\d+\.)\s+/, ''), `li-${index}-${itemIndex}`)}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (trimmed.includes('|') && trimmed.split('\n').some((row) => row.includes('|'))) {
                  const rows = trimmed
                    .split('\n')
                    .filter((row) => row.includes('|') && !isTableSep(row));
                  if (rows.length === 0) return null;
                  return (
                    <div key={index} className="-mx-1 sm:mx-0 overflow-x-auto my-8 rounded-2xl border border-border">
                      <table className="w-full min-w-[480px] border-collapse text-left">
                        <tbody>
                          {rows.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={`border-b border-border last:border-b-0 ${rowIndex === 0 ? 'bg-secondary' : ''}`}
                            >
                              {row.split('|').filter((cell) => cell.trim()).map((cell, cellIndex) => {
                                const Cell = rowIndex === 0 ? 'th' : 'td';
                                return (
                                  <Cell
                                    key={cellIndex}
                                    className="border-r border-border last:border-r-0 px-4 py-3 text-sm text-foreground/80 font-medium whitespace-nowrap"
                                  >
                                    {cleanMarkdown(cell.trim())}
                                  </Cell>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                return (
                  <p key={index} className="text-lg text-foreground/80 leading-[1.75]">
                    {renderInline(trimmed, `p-${index}`)}
                  </p>
                );
              });
              })()}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-4xl surface-ink px-6 py-12 sm:px-12 sm:py-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-background leading-tight tracking-tight">
              Ready to try it yourself?
            </h2>
            <p className="mt-4 text-lg text-background/70 leading-relaxed max-w-xl mx-auto">{post.meta}</p>
            <a
              href={post.cta_link}
              className="mt-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <span className="truncate">{post.cta_text}</span> <ArrowRight size={18} className="shrink-0" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related posts */}
      <section className="px-5 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-8">Keep reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mergeBlogPosts(FALLBACK_BLOG_POSTS)
              .filter((p) => p.id !== post.id && p.slug !== post.id)
              .sort((a) => (a.category === post.category ? -1 : 1))
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id || relatedPost.slug}`}
                  className="group flex flex-col rounded-4xl bg-card border border-border p-5 hover:shadow-elevated transition-shadow"
                >
                  <div className="rounded-3xl bg-gradient-to-br from-accent/15 to-accent/5 aspect-[16/10] flex items-center justify-center p-6">
                    <p className="text-lg font-bold text-foreground/75 text-center leading-snug tracking-tight">
                      "{relatedPost.hero}"
                    </p>
                  </div>
                  <h3 className="mt-5 px-1 text-xl font-bold text-foreground leading-[1.2] tracking-tight group-hover:text-accent transition-colors">
                    {relatedPost.title}
                  </h3>
                  <div className="mt-4 px-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={13} />
                    {relatedPost.date}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostDetail;
