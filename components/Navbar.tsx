"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Update URL hash
      window.history.pushState(null, "", href);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : "bg-transparent border-b border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold font-display text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              D
            </span>
            <span className="font-display font-semibold text-xl tracking-tight text-text-main group-hover:text-accent transition-colors duration-300">
              Dhana <span className="text-accent">Studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-text-main/80 hover:text-accent transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-highlight text-text-main font-medium text-sm hover:bg-highlight/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-highlight/25"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-main/90 hover:text-accent transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-[calc(100%-2rem)] mx-auto mt-2 glass rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-lg font-medium text-text-main/80 hover:text-accent transition-colors duration-300 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 w-full mt-2 px-6 py-3 rounded-xl bg-highlight text-text-main font-medium text-base hover:bg-highlight/90 transition-colors shadow-lg shadow-highlight/20"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
