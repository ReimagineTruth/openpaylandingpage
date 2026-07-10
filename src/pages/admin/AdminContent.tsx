import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  FileText, 
  Settings, 
  Edit,
  Save,
  ChevronRight
} from 'lucide-react';

const AdminContent = () => {
  const [activeSection, setActiveSection] = useState('homepage');
  const [saving, setSaving] = useState(false);

  const sections = [
    { id: 'homepage', name: 'Homepage', icon: Home },
    { id: 'about', name: 'About Page', icon: FileText },
    { id: 'features', name: 'Features', icon: Settings },
    { id: 'pricing', name: 'Pricing', icon: Settings },
  ];

  const contentSections = {
    homepage: [
      {
        id: 'hero',
        title: 'Hero Section',
        fields: [
          { name: 'headline', label: 'Headline', type: 'text', value: 'The Future of Pi Payments' },
          { name: 'subheadline', label: 'Subheadline', type: 'text', value: 'Send, receive, and manage Pi with ease' },
          { name: 'cta_text', label: 'CTA Button Text', type: 'text', value: 'Get Started' },
          { name: 'cta_link', label: 'CTA Button Link', type: 'text', value: '/auth' },
        ]
      },
      {
        id: 'features',
        title: 'Features Section',
        fields: [
          { name: 'title', label: 'Section Title', type: 'text', value: 'Why Choose OpenPay?' },
          { name: 'description', label: 'Section Description', type: 'textarea', value: 'Experience the next generation of digital payments' },
        ]
      }
    ],
    about: [
      {
        id: 'about_content',
        title: 'About Content',
        fields: [
          { name: 'title', label: 'Page Title', type: 'text', value: 'About OpenPay' },
          { name: 'content', label: 'About Content', type: 'textarea', value: 'OpenPay is building the future of digital payments...' },
        ]
      }
    ],
    features: [
      {
        id: 'features_list',
        title: 'Features List',
        fields: [
          { name: 'title', label: 'Section Title', type: 'text', value: 'Our Features' },
        ]
      }
    ],
    pricing: [
      {
        id: 'pricing_plans',
        title: 'Pricing Plans',
        fields: [
          { name: 'title', label: 'Section Title', type: 'text', value: 'Pricing' },
        ]
      }
    ]
  };

  const handleSave = async () => {
    setSaving(true);
    // Simulate save - will be replaced with Supabase call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Site Content</h1>
        <p className="text-muted-foreground">Manage your website content and pages</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Pages</h3>
            <div className="space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-accent/10 text-accent'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <section.icon size={18} />
                  <span className="font-medium">{section.name}</span>
                  {activeSection === section.id && <ChevronRight size={16} className="ml-auto" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground capitalize">
              {activeSection} Content
            </h2>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Save size={18} />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          {contentSections[activeSection as keyof typeof contentSections]?.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.fields.map(field => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        defaultValue={field.value as string}
                        rows={4}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      />
                    ) : (
                      <input
                        type={field.type}
                        defaultValue={field.value as string}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      />
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
