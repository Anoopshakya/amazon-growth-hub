import logoDark from "@/assets/logo-dark.svg";

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
            <img src={logoDark} alt="NextAI Commerce" className="h-18 mb-4" />
            <p className="text-sm text-secondary-foreground max-w-xs leading-relaxed mb-4">
              Scale faster on Amazon with battle-tested operator expertise and intelligent automation.
            </p>
            {/* Pedigree badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-xs text-primary font-semibold">
                Founded by former Eva Founder · 10+ Years Active Selling
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">
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
              <a key={s} href="https://www.linkedin.com/in/barryguze/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
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
