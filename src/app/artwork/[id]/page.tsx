"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Award, Camera } from "lucide-react";
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
  const [selectedFormat, setSelectedFormat] = useState<"original" | "edition">(
    "original",
  );
  const [showInSitu, setShowInSitu] = useState(false);

  if (!artwork) return null;

  return (
    <Section className="pt-32 pb-24">
      <nav className="mb-12 flex items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/40">
        <Link href="/collections" className="hover:text-accent">
          Collections
        </Link>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span className="text-foreground/80">{artwork.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 xl:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="relative aspect-[3/4] w-full hairline shadow-sm overflow-hidden bg-surface-muted">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              className="object-cover"
              priority
            />
            <button
              onClick={() => setShowInSitu(true)}
              className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-accent hover:text-white transition-all"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-12">
            <span className="font-sans text-[11px] uppercase tracking-widest text-accent mb-4 block">
              {artwork.subject}
            </span>
            <h1 className="text-5xl lg:text-7xl mb-6">{artwork.title}</h1>
            <p className="text-foreground/70 leading-luxury font-sans italic">
              &ldquo;{artwork.description}&rdquo;
            </p>
          </div>

          <div className="mb-12">
            <div className="flex gap-8 border-b hairline border-border/50 pb-4">
              <button
                onClick={() => setSelectedFormat("original")}
                className={`text-[11px] uppercase tracking-widest ${selectedFormat === "original" ? "text-foreground" : "text-foreground/30"}`}
              >
                The Original
              </button>
              <button
                onClick={() => setSelectedFormat("edition")}
                className={`text-[11px] uppercase tracking-widest ${selectedFormat === "edition" ? "text-foreground" : "text-foreground/30"}`}
              >
                Limited Edition
              </button>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex justify-between border-b hairline border-border/20 py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest">
                Medium
              </span>
              <span>
                {selectedFormat === "original"
                  ? artwork.original.medium
                  : artwork.editions.medium}
              </span>
            </div>
            <div className="flex justify-between border-b hairline border-border/20 py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest">
                Dimensions
              </span>
              <span>
                {selectedFormat === "original"
                  ? artwork.original.dimensions
                  : artwork.editions.dimensions}
              </span>
            </div>
          </div>

          <Button
            label="Inquire for Acquisition"
            href="/concierge"
            variant="boxed"
            className="w-full text-center py-6"
          />

          {/* THE ENCOUNTER REFACTOR */}
          <div className="mt-16 pt-12 border-t hairline border-border/30">
            <div className="flex items-center gap-3 mb-6">
              <Camera size={14} strokeWidth={1} className="text-accent" />
              <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-medium tracking-luxury">
                The Primary Witness Encounter
              </span>
            </div>
            <p className="font-serif italic text-xl text-foreground/80 leading-relaxed mb-4">
              &ldquo;{artwork.fieldNotes}&rdquo;
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
              Field Documented • Authentic Source
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showInSitu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-24"
          >
            <button
              onClick={() => setShowInSitu(false)}
              className="absolute top-12 right-12"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={artwork.inSituImage || artwork.image}
                alt="In Situ"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
