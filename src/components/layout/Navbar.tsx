"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Ethos", path: "/ethos" },
  { label: "Contact Us", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "h-20 glass" : "h-20 bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-full px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="PsyAIde" className="h-16 md:h-20 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[15px] font-medium transition-colors hover:text-accent relative group ${pathname === link.path
                ? "text-primary"
                : "text-muted-foreground"
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${pathname === link.path ? "w-full" : ""
                }`} />
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Join the Pilot
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden glass absolute top-full left-0 right-0 overflow-hidden m-4 rounded-2xl border shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-4 py-2 rounded-xl transition-colors ${pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-secondary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-accent text-accent-foreground font-bold shadow-lg shadow-accent/20"
              >
                Join the Pilot
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
