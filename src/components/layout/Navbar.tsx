"use client";

import { useState } from "react";
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
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="PsyAIde" className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium font-body transition-colors hover:text-primary ${pathname === link.path
                ? "text-primary"
                : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium font-body transition-all hover:opacity-90"
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
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium font-body py-2 transition-colors ${pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center h-9 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium font-body mt-2"
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
