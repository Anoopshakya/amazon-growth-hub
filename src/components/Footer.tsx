import logo from "@/assets/logo.png";

const footerLinks = {
  Services: ["Account Management", "Advertising + SEO", "Recovery", "Logistics"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Case Studies", "Knowledge Base", "FAQ", "Partners"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="NextAI Commerce" className="h-10 mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Scale faster on Amazon with human expertise and AI automation. Optimize listings, profits, ads, and inventory.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NextAI Commerce. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
