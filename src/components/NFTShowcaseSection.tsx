import { motion } from "framer-motion";
import { Gem, Wallet, ArrowRight, Sparkles, Shield, TrendingUp, Link2, Image as ImageIcon } from "lucide-react";

const NFTShowcaseSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">OpenNFT</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Create, Trade & Collect NFTs with Pi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The first NFT marketplace powered by Pi Network. Mint, buy, sell, and showcase your digital assets seamlessly.
          </p>
        </motion.div>

        {/* NFT Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: "Pi Pioneer Badge",
              creator: "@openpay",
              price: "π50.00",
              image: "🎖️",
              category: "Badge",
              likes: 234,
            },
            {
              title: "Digital Art Collection",
              creator: "@artist_pi",
              price: "π150.00",
              image: "🎨",
              category: "Art",
              likes: 567,
            },
            {
              title: "Membership Pass",
              creator: "@openpay",
              price: "π100.00",
              image: "🎫",
              category: "Utility",
              likes: 892,
            },
            {
              title: "Rare Gem",
              creator: "@collector",
              price: "π500.00",
              image: "💎",
              category: "Collectible",
              likes: 1203,
            },
          ].map((nft, index) => (
            <motion.div
              key={nft.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-6xl relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-8xl"
                >
                  {nft.image}
                </motion.div>
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-white text-xs font-medium">{nft.category}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-foreground font-semibold text-sm mb-1 truncate">{nft.title}</h3>
                <p className="text-muted-foreground text-xs mb-3">by {nft.creator}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-[10px]">Current Price</p>
                    <p className="text-accent font-bold text-sm">{nft.price}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Sparkles size={12} />
                    <span>{nft.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Gem className="w-6 h-6" />,
              title: "Easy Minting",
              description: "Create NFTs in minutes with our intuitive minting interface. No technical skills required.",
            },
            {
              icon: <Wallet className="w-6 h-6" />,
              title: "Pi-Powered Wallet",
              description: "Seamlessly connect your OpenPay wallet to manage all your NFTs in one place.",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Secure & Verified",
              description: "All NFTs are verified and secured on the blockchain with full transparency.",
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Market Analytics",
              description: "Track prices, trends, and market movements with real-time analytics.",
            },
            {
              icon: <Link2 className="w-6 h-6" />,
              title: "Cross-Platform",
              description: "Trade NFTs across multiple platforms with our interoperable system.",
            },
            {
              icon: <ImageIcon className="w-6 h-6" />,
              title: "Multi-Format Support",
              description: "Support for images, videos, audio, and 3D assets as NFTs.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border p-8 md:p-12 mb-16 shadow-card"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Connect Wallet",
                description: "Link your OpenPay wallet to get started",
              },
              {
                step: "02",
                title: "Create or Browse",
                description: "Mint your NFT or explore the marketplace",
              },
              {
                step: "03",
                title: "List for Sale",
                description: "Set your price and list your NFT",
              },
              {
                step: "04",
                title: "Trade & Earn",
                description: "Buy, sell, and grow your collection",
              },
            ].map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-foreground font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your NFT Journey Today
          </h3>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Join thousands of creators and collectors in the Pi Network NFT ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://openpy.space/web3/nft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-accent bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-elevated"
            >
              <Gem size={18} />
              Explore Marketplace
              <ArrowRight size={18} />
            </a>
            <a
              href="https://openpy.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Create NFT
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTShowcaseSection;
