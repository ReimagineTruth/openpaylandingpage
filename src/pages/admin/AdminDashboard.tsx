import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  TrendingUp, 
  Activity,
  Plus,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    {
      name: 'Total Blog Posts',
      value: '16',
      change: '+2 this week',
      icon: FileText,
      color: 'bg-blue-500',
      link: '/admin/blog'
    },
    {
      name: 'Active Users',
      value: '1,234',
      change: '+12% this month',
      icon: Users,
      color: 'bg-green-500',
      link: '/admin/users'
    },
    {
      name: 'Page Views',
      value: '45.2K',
      change: '+8% this week',
      icon: TrendingUp,
      color: 'bg-purple-500',
      link: '#'
    },
    {
      name: 'Recent Activity',
      value: '23',
      change: 'Last 24 hours',
      icon: Activity,
      color: 'bg-orange-500',
      link: '#'
    }
  ];

  const recentActivity = [
    {
      action: 'Blog post created',
      details: 'OpenPay NFT — Complete Feature Blog',
      time: '2 hours ago',
      type: 'blog'
    },
    {
      action: 'Content updated',
      details: 'Homepage hero section',
      time: '5 hours ago',
      type: 'content'
    },
    {
      action: 'User registered',
      details: 'New user: john@example.com',
      time: '1 day ago',
      type: 'user'
    },
    {
      action: 'Blog post updated',
      details: 'Complete Guide to OpenPay Core Wallet Features',
      time: '2 days ago',
      type: 'blog'
    }
  ];

  const quickActions = [
    {
      name: 'Create Blog Post',
      description: 'Write and publish a new blog post',
      icon: FileText,
      link: '/admin/blog/new',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Manage Content',
      description: 'Update website content and pages',
      icon: Activity,
      link: '/admin/content',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Manage Users',
      description: 'View and manage user accounts',
      icon: Users,
      link: '/admin/users',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Admin</h1>
        <p className="text-muted-foreground">Here's what's happening with your OpenPay site today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}/10`}>
                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-xs text-green-600 font-medium">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={action.name}
              to={action.link}
              className="group relative overflow-hidden bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color} mb-4 w-fit`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{action.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-accent">
                  Get started <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg"
            >
              <div className={`p-2 rounded-lg ${
                activity.type === 'blog' ? 'bg-blue-500/10 text-blue-600' :
                activity.type === 'content' ? 'bg-purple-500/10 text-purple-600' :
                'bg-green-500/10 text-green-600'
              }`}>
                {activity.type === 'blog' && <FileText size={16} />}
                {activity.type === 'content' && <Activity size={16} />}
                {activity.type === 'user' && <Users size={16} />}
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.details}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
