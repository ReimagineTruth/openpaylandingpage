import { motion } from "framer-motion";
import { Activity, Shield, Link2, Search, Database, Clock, ArrowRight, ExternalLink, Hash, TrendingUp } from "lucide-react";

const OpenLedgerShowcaseSection = () => {
  const metrics = [
    { label: "Total Blocks", value: "1,284,932", icon: Database },
    { label: "Transactions", value: "8.4M+", icon: Activity },
    { label: "Avg Block Time", value: "2.3s", icon: Clock },
    { label: "Network Uptime", value: "99.99%", icon: TrendingUp },
  ];

  const recentBlocks = [
    { height: "#1284932", hash: "0x9f3a…c2b1", txs: 42, age: "2s ago" },
    { height: "#1284931", hash: "0x7d1e…8a44", txs: 31, age: "5s ago" },
    { height: "#1284930", hash: "0x2c58…f019", txs: 58, age: "7s ago" },
    { height: "#1284929", hash: "0xb0a7…3e6d", txs: 24, age: "10s ago" },
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "SHA-256 Hash Chain", description: "Every block is sealed on an immutable SHA-256 chain for full auditability." },
    { icon: <Activity className="w-6 h-6" />, title: "Real-Time Feed", description: "Watch transactions, blocks, and network metrics update live as they happen." },
    { icon: <Search className="w-6 h-6" />, title: "Public Explorer", description: "Search any address, transaction, or block with instant, transparent results." },
    { icon: <Hash className="w-6 h-6" />, title: "Verifiable Proofs", description: "Cryptographic proofs for every entry — anyone can independently verify." },
    { icon: <Link2 className="w-6 h-6" />, title: "OpenPay Native", description: "The canonical ledger for OpenPay and OpenPay Pro activity across the ecosystem." },
    { icon: <Database className="w-6 h-6" />, title: "Complete History", description: "Full historical record from genesis — nothing hidden, nothing revised." },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">OpenLedger</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            The public <span className="text-gradient">blockchain explorer</span> for OpenPay
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A live, transparent ledger for the entire OpenPay ecosystem — sealed on a SHA-256 hash chain and updated in near real time.
          </p>
        </motion.div>

        {/* Live metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border p-5 shadow-card">
              <div className="flex items-center gap-2 text-accent mb-2">
                <m.icon size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{m.label}</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground">{m.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Explorer mockup + Live feed */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl border border-border overflow-hidden shadow-elevated">
            <div className="bg-hero px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">Mainnet · Live</span>
              </div>
              <span className="text-white/60 text-xs font-mono">openpyledger.space</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 bg-secondary rounded-xl p-3 mb-5">
                <Search size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-mono truncate">Search block, tx, or address…</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Latest Blocks</p>
              <div className="space-y-2">
                {recentBlocks.map((b, i) => (
                  <motion.div key={b.height} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl border border-border/50">
                    <div>
                      <p className="text-sm font-bold text-foreground">{b.height}</p>
                      <p className="text-xs text-muted-foreground font-mono">{b.hash}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-accent">{b.txs} txs</p>
                      <p className="text-xs text-muted-foreground">{b.age}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card-gradient rounded-3xl p-8 md:p-10 text-white shadow-elevated flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-5">
                <Shield size={12} />
                <span className="text-xs font-semibold uppercase tracking-wider">Immutable Audit</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                One composition. Live metrics. Real-time feed.
              </h3>
              <p className="text-white/80 text-base mb-6">
                OpenLedger is the canonical, public record for every transaction on OpenPay and OpenPay Pro. Every entry is hash-linked to the next, making the whole chain tamper-evident and independently verifiable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "SHA-256 sealed blocks with cryptographic proofs",
                  "Live transaction feed with sub-second updates",
                  "Full historical archive from genesis block",
                  "Open API for developers and auditors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://www.openpyledger.space/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-full font-semibold hover:bg-white/90 transition-all self-start">
              Open Explorer <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border p-6 shadow-card hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-accent to-accent/80 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Explore every block. Verify every transaction.</h3>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Dive into the public ledger powering OpenPay's transparent Pi economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.openpyledger.space/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-accent bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-elevated">
              <Activity size={18} /> Launch OpenLedger <ArrowRight size={18} />
            </a>
            <a href="/blog/openledger-public-explorer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
              Read the guide
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenLedgerShowcaseSection;
