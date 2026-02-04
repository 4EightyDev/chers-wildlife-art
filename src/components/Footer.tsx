"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t hairline mt-20">
      <div className="max-w-[1800px] mx-auto px-6 py-16 lg:px-12">
        {/* TOP SECTION: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="serif-brand text-3xl tracking-widest uppercase mb-4">
              Cher&apos;s Wildlife Art
            </h2>
            <p className="font-sans text-sm text-foreground/60 max-w-sm leading-relaxed">
              Capturing the soul of the wild to inspire global conservation.
              Original works and hand-signed archival editions for the private
              collector.
            </p>
          </div>

          <div className="flex flex-col lg:items-end">
            <span className="font-sans text-[10px] uppercase tracking-luxury text-accent mb-4">
              The Private Ledger
            </span>
            <p className="font-serif text-xl mb-6 lg:text-right">
              Early access to new collections.
            </p>
            <form className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b hairline border-foreground/20 py-4 pl-0 pr-12 text-xs tracking-luxury focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/50"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors">
                <ArrowRight size={18} strokeWidth={1} />
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION: Navigation */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16 border-b hairline border-foreground/5 pb-12">
          <Link
            href="/collections"
            className="text-[11px] uppercase tracking-luxury hover:text-accent transition-colors"
          >
            Collections
          </Link>
          <Link
            href="/archive"
            className="text-[11px] uppercase tracking-luxury hover:text-accent transition-colors"
          >
            The Catalog
          </Link>
          <Link
            href="/mission"
            className="text-[11px] uppercase tracking-luxury hover:text-accent transition-colors"
          >
            Mission
          </Link>
          <Link
            href="/about"
            className="text-[11px] uppercase tracking-luxury hover:text-accent transition-colors"
          >
            The Artist
          </Link>
          <Link
            href="/concierge"
            className="text-[11px] uppercase tracking-luxury hover:text-accent transition-colors"
          >
            Concierge
          </Link>
        </div>

        {/* BOTTOM SECTION: Legal & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com"
              className="text-foreground/40 hover:text-accent transition-colors"
            >
              <Instagram size={18} strokeWidth={1} />
            </a>
            <a
              href="mailto:studio@cherswildlifeart.com"
              className="text-foreground/40 hover:text-accent transition-colors"
            >
              <Mail size={18} strokeWidth={1} />
            </a>
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-foreground/40">
            <span>© 2025 Cher&apos;s Wildlife Art</span>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
