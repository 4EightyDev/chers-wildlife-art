"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Collections", href: "/collections" },
  { name: "The Catalog", href: "/archive" },
  { name: "Exhibitions", href: "/exhibitions" }, // NEW
  { name: "Mission", href: "/mission" },
  { name: "The Artist", href: "/about" },
  { name: "Concierge", href: "/concierge" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md h-20 border-b hairline"
          : "bg-transparent h-24"
      }`}
    >
      <div className="max-w-[1800px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
        {/* BRANDING */}
        <Link
          href="/"
          className="serif-brand text-lg lg:text-xl tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
        >
          Cher&apos;s Wildlife Art
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] lg:text-[11px] uppercase tracking-luxury text-foreground/60 hover:text-accent transition-colors duration-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-[0.5px] bg-foreground transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-[0.5px] bg-foreground transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-[0.5px] bg-foreground transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 z-[60]"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-[10px] uppercase tracking-widest"
            >
              Close
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="serif-brand text-3xl tracking-widest hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
