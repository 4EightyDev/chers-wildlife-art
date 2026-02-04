"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Camera, MapPin, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getArtworkById } from "@/data/site-data";

export default function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const artwork = getArtworkById(id);

  // State for the Format Selector and the In-Situ Modal
  const [selectedFormat, setSelectedFormat] = useState<"original" | "giclee">(
    "original",
  );
  const [showInSitu, setShowInSitu] = useState(false);

  if (!artwork) return null;

  return (
    <Section className="pt-32 pb-24">
      {/* 1. BREADCRUMBS: THE GALLERY PATH */}
      <nav className="mb-12 flex items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/40">
        <Link
          href="/collections"
          className="hover:text-accent transition-colors"
        >
          Collections
        </Link>
        <span className="w-1 h-1 rounded-full bg-border" />
        <Link
          href={`/collections/${artwork.collectionId}`}
          className="hover:text-accent transition-colors uppercase"
        >
          {artwork.collectionId} Series
        </Link>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span className="text-foreground/80">{artwork.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 xl:gap-24 items-start">
        {/* 2. LEFT COLUMN: THE VISUAL EXPERIENCE */}
        <div className="lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[3/4] w-full hairline shadow-sm overflow-hidden bg-surface-muted"
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />

            {/* IN-SITU TRIGGER */}
            <button
              onClick={() => setShowInSitu(true)}
              className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-accent hover:text-white transition-all group"
            >
              <Maximize2
                size={20}
                strokeWidth={1.5}
                className="group-hover:scale-110 transition-transform"
              />
            </button>
          </motion.div>

          {/* WITNESS BADGE */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-1">
              <div className="w-8 h-8 rounded-full border border-background bg-surface-muted flex items-center justify-center">
                <Camera size={12} className="text-accent" />
              </div>
              <div className="w-8 h-8 rounded-full border border-background bg-surface-muted flex items-center justify-center">
                <ShieldCheck size={12} className="text-accent" />
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-foreground/40">
              Authenticated {artwork.witnessBadge}
            </p>
          </div>
        </div>

        {/* 3. RIGHT COLUMN: THE ACQUISITION PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          {/* Header */}
          <div className="mb-12">
            <span className="font-sans text-[11px] uppercase tracking-widest text-accent mb-4 block">
              {artwork.subject}
            </span>
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              {artwork.title}
            </h1>
            <p className="text-foreground/70 leading-luxury font-sans text-sm lg:text-base italic">
              &ldquo;{artwork.description}&rdquo;
            </p>
          </div>

          {/* ACQUISITION FORMAT SELECTOR */}
          <div className="mb-12">
            <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 mb-6 block">
              Select Acquisition Format
            </span>
            <div className="flex justify-center gap-12 border hairline border-border/20 py-6 w-full">
              <button
                onClick={() => setSelectedFormat("original")}
                className={`text-[11px] uppercase tracking-widest transition-all ${
                  selectedFormat === "original"
                    ? "text-foreground"
                    : "text-foreground/30 hover:text-foreground/60"
                }`}
              >
                The Original
              </button>
              <button
                onClick={() => setSelectedFormat("giclee")}
                className={`text-[11px] uppercase tracking-widest transition-all ${
                  selectedFormat === "giclee"
                    ? "text-foreground"
                    : "text-foreground/30 hover:text-foreground/60"
                }`}
              >
                Limited Edition Giclée
              </button>
            </div>
          </div>

          {/* DYNAMIC SPECS TABLE */}
          <div className="space-y-6 mb-12">
            <div className="flex justify-between border-b hairline border-border/20 py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest font-medium">
                Medium
              </span>
              <span>
                {selectedFormat === "original"
                  ? artwork.original.medium
                  : artwork.editions.medium}
              </span>
            </div>
            <div className="flex justify-between border-b hairline border-border/20 py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest font-medium">
                Dimensions
              </span>
              <span>
                {selectedFormat === "original"
                  ? artwork.original.dimensions
                  : artwork.editions.dimensions}
              </span>
            </div>

            {/* GICLÉE SPECIFIC NOTE */}
            <AnimatePresence mode="wait">
              {selectedFormat === "giclee" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="py-6 px-8 bg-surface-muted/50 hairline border-l-2 border-accent"
                >
                  <h4 className="text-[10px] uppercase tracking-widest text-accent mb-2">
                    Giclée Specifications
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed italic">
                    Cher&apos;s Giclées are museum-quality archival pigment
                    prints, meticulously hand-signed and numbered by the artist
                    to ensure long-term provenance and investment value.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest font-medium">
                Status
              </span>
              <span className="text-accent">{artwork.status}</span>
            </div>
          </div>

          {/* CALL TO ACTION */}
          <div className="mb-16">
            <Button
              label="Inquire for Acquisition"
              href="/concierge"
              variant="boxed"
              className="w-full text-center py-6"
            />
            <p className="text-[10px] text-center text-foreground/30 mt-4 uppercase tracking-[0.2em]">
              Complimentary Global Shipping & Bespoke Insurance Included
            </p>
          </div>

          {/* THE PRIMARY WITNESS NARRATIVE (ENCOUNTER) */}
          <div className="mt-8 pt-12 border-t hairline border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <Camera size={14} strokeWidth={1} className="text-accent" />
              <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-medium">
                The Primary Witness Encounter
              </span>
            </div>
            <p className="font-serif italic text-xl text-foreground/80 leading-relaxed mb-6">
              &ldquo;{artwork.fieldNotes}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-accent/40" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                Authentic Field Reference — 100% Original Source
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. IN-SITU MODAL ROOM */}
      <AnimatePresence>
        {showInSitu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-24"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowInSitu(false)}
              className="absolute top-12 right-12 text-foreground/60 hover:text-foreground hover:rotate-90 transition-all duration-500"
            >
              <X size={32} strokeWidth={1} />
            </button>

            {/* Modal Image Container */}
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={artwork.inSituImage || artwork.image}
                alt="Exhibition View"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full text-center pb-8">
                <p className="text-[10px] uppercase tracking-[0.5em] text-foreground/30">
                  Private Viewing Room &mdash; Curated Scale
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
