import { 
  Globe, 
  Rocket, 
  Layers, 
  Smartphone, 
  Newspaper, 
  Bot, 
  ExternalLink, 
  Users, 
  BookOpen, 
  BarChart3, 
  Image as ImageIcon,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

type EcoLink = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  url: string;
  badge?: string;
  category: "app" | "explore" | "docs" | "social";
};

const links: EcoLink[] = [
  {
    icon: Rocket,
    title: "OpenPay App",
    description: "Try it today in the Pi Browser — the full OpenPay experience.",
    url: "https://openpy.space",
    badge: "Pi Browser",
    category: "app",
  },
  {
    icon: Sparkles,
    title: "OpenPay Pro",
    description: "Premium Web3 wallet for OUSD, tokens, and NFTs — sign in with Pi or OpenPay.",
    url: "https://openpaypro.space/",
    badge: "Pro",
    category: "app",
  },
  {
    icon: Layers,
    title: "OpenLedger",
    description: "Public blockchain explorer for every OpenPay transaction.",
    url: "https://openpyledger.space",
    badge: "Live",
    category: "app",
  },
  {
    icon: Smartphone,
    title: "OpenApp",
    description: "Developer hub for building on the OpenPay ecosystem.",
    url: "https://openappdev.space",
    category: "app",
  },
  {
    icon: Bot,
    title: "Telegram Mini App",
    description: "OpenPay directly inside Telegram — fast, native, social.",
    url: "https://t.me/openpayofficial",
    badge: "Mini App",
    category: "app",
  },
  {
    icon: ExternalLink,
    title: "External Browser Sign In",
    description: "Access OpenPay from any browser outside of Pi.",
    url: "https://openpy.space/signin",
    category: "app",
  },
  {
    icon: ImageIcon,
    title: "OpenNFT Marketplace",
    description: "Discover, mint, and trade NFTs on the OpenPay Web3 layer.",
    url: "https://openpy.space/web3/nft",
    category: "app",
  },
  {
    icon: Newspaper,
    title: "OpenPay Blog",
    description: "Product updates, guides, and deep dives from the team.",
    url: "https://www.openpy.space/blog",
    category: "explore",
  },
  {
    icon: BookOpen,
    title: "Whitepaper",
    description: "The full technical and economic design of OpenPay.",
    url: "https://openpy.space/whitepaper",
    category: "docs",
  },
  {
    icon: BarChart3,
    title: "Pitch Deck",
    description: "Vision, market, and roadmap in one concise deck.",
    url: "https://openpy.space/pitch-deck",
    category: "docs",
  },
  {
    icon: Users,
    title: "Follow Us",
    description: "Stay in the loop across all OpenPay social channels.",
    url: "https://droplinkpi.space/@openpay",
    category: "social",
  },
];

const categoryLabel: Record<EcoLink["category"], string> = {
  app: "Product",
  explore: "Read",
  docs: "Docs",
  social: "Community",
};

const EcosystemLinksSection = () => {
  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            OpenPay Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            One ecosystem. Every entry point.
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore every OpenPay product, tool, and resource — from the live app and public ledger to docs and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {link.badge}
                      </span>
                    )}
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {categoryLabel[link.category]}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {link.title}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {link.description}
                </p>
                <div className="text-xs text-primary/80 font-mono truncate">
                  {link.url.replace(/^https?:\/\//, "")}
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://openpy.space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Rocket className="w-4 h-4" />
            Launch OpenPay
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemLinksSection;
