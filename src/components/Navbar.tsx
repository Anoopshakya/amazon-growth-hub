import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.svg";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#metrics" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoDark} alt="NextAI Commerce" className="h-9" />
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <button
                //onClick={() => handleClick("#contact")}
                onClick={() =>
                          window.open("https://calendly.com/barry-guze-next/30min?", "_blank")
                        }
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
              >
                Book a Call
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 w-full md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleClick(item.href)}
                      className="w-full text-left py-3 text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() =>
                      window.open("https://calendly.com/barry-guze-next/30min?", "_blank")
                    }
                    className="w-full px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
                  >
                    Book a Call
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
