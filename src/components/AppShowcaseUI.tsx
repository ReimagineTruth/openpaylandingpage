import { motion } from "framer-motion";
import { Smartphone, Download, Star, Shield, Zap, ArrowRight } from "lucide-react";

const AppShowcaseUI = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Mobile App</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            OpenPay in your pocket
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience seamless Pi payments with our beautifully designed mobile app. Available on Android now, iOS coming soon.
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone 1 - Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl" />
              
              {/* Screen content */}
              <div className="w-full h-full bg-gradient-to-b from-accent to-accent/80 rounded-[2.5rem] overflow-hidden p-4">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-white/70 text-xs">Good morning!</p>
                    <p className="text-white font-semibold text-sm">@openpay</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xs">👤</span>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-4 mb-4">
                  <p className="text-white/60 text-xs mb-1">Total Balance</p>
                  <p className="text-white text-3xl font-bold">π346.59</p>
                  <p className="text-white/60 text-xs mt-1">≈ $1,091.76 USD</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: "💸", label: "Send" },
                    { icon: "📥", label: "Receive" },
                    { icon: "💳", label: "Cards" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-white text-xs mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-white font-semibold text-xs mb-3">Recent Transactions</p>
                  {[
                    { name: "Sarah Pi", amount: "+π50.00", time: "2h ago" },
                    { name: "Coffee Shop", amount: "-π5.50", time: "5h ago" },
                  ].map((tx) => (
                    <div key={tx.name} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <div>
                        <p className="text-white text-xs font-medium">{tx.name}</p>
                        <p className="text-white/50 text-[10px]">{tx.time}</p>
                      </div>
                      <span className={`text-xs font-bold ${tx.amount.startsWith('+') ? 'text-green-300' : 'text-white'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-sm font-semibold text-foreground">Dashboard</p>
          </motion.div>

          {/* Phone 2 - Send Payment */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl" />
              
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">←</div>
                  <p className="text-foreground font-semibold text-sm">Send Pi</p>
                </div>

                <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                  <p className="text-muted-foreground text-xs mb-2">Send to</p>
                  <div className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg">👤</div>
                    <div className="flex-1">
                      <p className="text-foreground text-sm font-medium">sarah_pi</p>
                      <p className="text-muted-foreground text-xs">@sarah_pi</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                  <p className="text-muted-foreground text-xs mb-2">Amount</p>
                  <div className="text-center">
                    <p className="text-foreground text-4xl font-bold">π50.00</p>
                    <p className="text-muted-foreground text-xs">≈ $157.50 USD</p>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                  <p className="text-muted-foreground text-xs mb-2">Currency</p>
                  <div className="flex items-center justify-between bg-background rounded-xl p-3 border border-border">
                    <span className="text-foreground text-sm font-medium">π PI</span>
                    <span className="text-muted-foreground text-xs">▼</span>
                  </div>
                </div>

                <button className="w-full py-4 rounded-full bg-accent text-white font-semibold text-sm">
                  Send π50.00
                </button>
              </div>
            </div>
            <p className="text-center mt-4 text-sm font-semibold text-foreground">Send Payment</p>
          </motion.div>

          {/* Phone 3 - QR Code */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl" />
              
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">←</div>
                  <p className="text-foreground font-semibold text-sm">Receive</p>
                </div>

                <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                  <p className="text-muted-foreground text-xs mb-3 text-center">Scan to pay</p>
                  <div className="w-40 h-40 mx-auto bg-white rounded-xl p-3 flex items-center justify-center">
                    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-5 gap-1">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-sm ${
                              Math.random() > 0.5 ? 'bg-gray-800' : 'bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-foreground text-sm font-semibold mt-3">π100.00</p>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 rounded-xl bg-accent/10 text-accent font-semibold text-sm border border-accent/20">
                    Share Link
                  </button>
                  <button className="w-full py-3 rounded-xl bg-secondary text-foreground font-semibold text-sm">
                    Copy Address
                  </button>
                </div>

                <div className="mt-4 p-3 bg-accent/5 rounded-xl border border-accent/10">
                  <p className="text-accent text-xs text-center font-medium">
                    🔒 Secure payment powered by OpenPay
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-sm font-semibold text-foreground">Receive Payment</p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Bank-grade Security",
              description: "Your funds are protected with advanced encryption and multi-factor authentication",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Instant Transfers",
              description: "Send and receive Pi instantly across 170+ currencies worldwide",
            },
            {
              icon: <Star className="w-6 h-6" />,
              title: "User-friendly",
              description: "Intuitive interface designed for both beginners and experienced users",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center shadow-card"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Download OpenPay Today
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Start sending and receiving Pi with ease. Available on Android now, iOS coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://median.co/share/rdzamax#apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent rounded-full hover:opacity-90 transition-all duration-300 shadow-elevated"
            >
              <Download size={18} />
              Download for Android
            </a>
            <a
              href="https://t.me/openpayofficialbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-border rounded-full hover:bg-secondary transition-all duration-300"
            >
              <Smartphone size={18} />
              Try Telegram Bot
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            iOS version coming soon · Join our waitlist
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcaseUI;
