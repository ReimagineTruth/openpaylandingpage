const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-card-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">O</span>
            </div>
            <span className="text-lg font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OpenPay</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Web3 digital currency payment platform powered by Pi Network.
          </p>
        </div>

        {[
          { title: "Product", links: ["Wallet", "Virtual Cards", "Payments", "Invoicing"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
          { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Compliance"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2025 OpenPay. All rights reserved. Powered by Pi Network.</p>
      </div>
    </footer>
  );
};

export default Footer;
