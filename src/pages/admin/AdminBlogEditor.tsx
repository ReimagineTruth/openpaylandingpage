import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Save, 
  X, 
  Eye,
  Upload,
  Tag as TagIcon,
  Link as LinkIcon,
  Calendar,
  User,
  FileText
} from 'lucide-react';

interface BlogPostForm {
  id?: string;
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

const categories = ['Product', 'Guide', 'Update', 'Insight', 'Security'];

const AdminBlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [form, setForm] = useState<BlogPostForm>({
    slug: '',
    title: '',
    date: new Date().toISOString().split('T')[0],
    author: 'OpenPay Team',
    category: 'Product',
    desc: '',
    meta: '',
    tags: [],
    hero: '',
    content: '',
    cta_text: '',
    cta_link: ''
  });

  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (isEditing) {
      // Load existing post data (will be replaced with Supabase call)
      // For now, just use mock data
      setForm({
        id: id,
        slug: 'openpay-nft-marketplace',
        title: 'OpenPay NFT — Complete Feature Blog',
        date: '2026-07-10',
        author: 'OpenPay Team',
        category: 'Product',
        desc: 'A creator-first NFT marketplace built into OpenPay.',
        meta: 'Mint, sell, auction, gift, chat, and run your own NFT store.',
        tags: ['nft', 'marketplace', 'web3', 'creators'],
        hero: 'Your NFT studio. Your global stage.',
        content: '# OpenPay NFT — Complete Feature Blog\n\nA creator-first NFT marketplace built into OpenPay...',
        cta_text: 'Enter NFT Marketplace',
        cta_link: 'https://openpy.space/web3'
      });
    }
  }, [id, isEditing]);

  const handleChange = (field: keyof BlogPostForm, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim().toLowerCase()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    // Simulate save - will be replaced with Supabase call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    navigate('/admin/blog');
  };

  if (previewMode) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setPreviewMode(false)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
            Back to Editor
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Save size={20} />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-8">
          <div className="mb-6">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent/10 text-accent">
              {form.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{form.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User size={14} />
              {form.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {form.date}
            </div>
          </div>
          <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-xl p-6 mb-6 border border-border">
            <p className="text-xl font-semibold text-foreground italic">"{form.hero}"</p>
          </div>
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap">{form.content}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
          <p className="text-muted-foreground">
            {isEditing ? 'Update your blog post content' : 'Write and publish a new blog post'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPreviewMode(true)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
          >
            <Eye size={20} />
            Preview
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Save size={20} />
            {saving ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-card rounded-xl border border-border p-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              placeholder="Enter post title..."
            />
          </div>

          {/* Content */}
          <div className="bg-card rounded-xl border border-border p-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Content (Markdown supported)
            </label>
            <textarea
              value={form.content}
              onChange={(e) => handleChange('content', e.target.value)}
              rows={20}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-mono text-sm"
              placeholder="Write your blog post content here... You can use Markdown formatting."
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Basic Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => handleChange('slug', e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                  placeholder="url-friendly-slug"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => handleChange('author', e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Description</h3>
            <textarea
              value={form.desc}
              onChange={(e) => handleChange('desc', e.target.value)}
              rows={3}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
              placeholder="Short description for blog listing..."
            />
          </div>

          {/* Meta Description */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Meta Description</h3>
            <textarea
              value={form.meta}
              onChange={(e) => handleChange('meta', e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
              placeholder="SEO meta description (under 160 characters)..."
              maxLength={160}
            />
            <p className="text-xs text-muted-foreground mt-1">{form.meta.length}/160</p>
          </div>

          {/* Hero Copy */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Hero Copy</h3>
            <input
              type="text"
              value={form.hero}
              onChange={(e) => handleChange('hero', e.target.value)}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
              placeholder="Catchy hero phrase..."
            />
          </div>

          {/* Tags */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                placeholder="Add tag..."
              />
              <button
                onClick={handleAddTag}
                className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <TagIcon size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                >
                  #{tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-accent/70"
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground mb-4">Call to Action</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  CTA Text
                </label>
                <input
                  type="text"
                  value={form.cta_text}
                  onChange={(e) => handleChange('cta_text', e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                  placeholder="e.g., Get Started"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  CTA Link
                </label>
                <input
                  type="url"
                  value={form.cta_link}
                  onChange={(e) => handleChange('cta_link', e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm"
                  placeholder="https://openpy.space/..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEditor;
