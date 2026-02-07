import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+250780000000" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+250 780 000 000</span>
            </a>
            <a href="mailto:info@gsmukura.rw" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>info@gsmukura.rw</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="WhatsApp" className="hover:text-secondary transition-colors"><MessageCircle className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Welcome marquee */}
      <div className="bg-secondary text-secondary-foreground py-1.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-heading text-sm font-semibold tracking-wide">
          🎓 YOU ARE WELCOME TO GS MUKURA HY OFFICIAL WEBSITE — EXCELLENCE • DISCIPLINE • UNITY 🎓
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          🎓 YOU ARE WELCOME TO GS MUKURA HY OFFICIAL WEBSITE — EXCELLENCE • DISCIPLINE • UNITY 🎓
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-[var(--shadow-md)]"
            : "bg-card"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
              M
            </div>
            <span className="font-heading font-bold text-lg text-primary group-hover:text-navy-light transition-colors">
              GS MUKURA HY
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-md font-body font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <ul className="flex flex-col p-4 gap-1 bg-card">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-md font-body font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Navbar;
