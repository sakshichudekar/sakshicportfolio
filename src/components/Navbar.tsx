import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "01. About", href: "#about" },
  { label: "02. Skills", href: "#skills" },
  { label: "03. Experience", href: "#experience" },
  { label: "04. Projects", href: "#projects" },
  { label: "05. Certifications", href: "#certifications" },
  { label: "06. Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-card border-b border-border/60 py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:border-primary/70 group-hover:bg-primary/20 transition-all">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors">
              sakshi<span className="text-primary">.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Sakshi_D_Chudekar_Resume.pdf"
              className="btn-outline text-sm py-2 px-5 font-mono"
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 glass-card border-l border-border md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-mono text-lg text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download="Sakshi_D_Chudekar_Resume.pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-primary text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume ↓
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
