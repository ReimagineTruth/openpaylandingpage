import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  Tag,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

// This will be replaced with Supabase data later
const mockBlogPosts = [
  {
    id: 'openpay-nft-marketplace',
    title: 'OpenPay NFT — Complete Feature Blog',
    date: 'Jul 10, 2026',
    category: 'Product',
    author: 'OpenPay Team',
    desc: 'A creator-first NFT marketplace built into OpenPay.'
  },
  {
    id: 'core-wallet-features-guide',
    title: 'Complete Guide to OpenPay Core Wallet Features',
    date: 'Jul 10, 2026',
    category: 'Guide',
    author: 'OpenPay Team',
    desc: 'Master OpenPay core wallet features.'
  },
  {
    id: 'openpay-launches-merchant-pos',
    title: 'OpenPay Launches Merchant POS for Pi Payments',
    date: 'Jul 9, 2026',
    category: 'Product',
    author: 'OpenPay Team',
    desc: 'Introducing the OpenPay Merchant POS.'
  }
];

const AdminBlog = () => {
  const [posts, setPosts] = useState(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Product', 'Guide', 'Update', 'Insight', 'Security'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          <Plus size={20} />
          New Post
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-4">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent/10 text-accent">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Tag size={12} />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/blog/${post.id}`}
                  target="_blank"
                  className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                  title="View post"
                >
                  <Eye size={20} />
                </Link>
                <Link
                  to={`/admin/blog/edit/${post.id}`}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                  title="Edit post"
                >
                  <Edit size={20} />
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors text-muted-foreground hover:text-red-600"
                  title="Delete post"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            {searchTerm || selectedCategory !== 'All'
              ? 'Try adjusting your search or filters'
              : 'Get started by creating your first blog post'}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
