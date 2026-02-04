"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Camera, MapPin, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ArtworkDetailClient({ artwork }: { artwork: any }) {
  const [selectedFormat, setSelectedFormat] = useState<"original" | "giclee">(
    "original",
  );
  const [showInSitu, setShowInSitu] = useState(false);

  return (
    <Section className="pt-32 pb-24">
      <nav className="mb-12 flex items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/40">
        <Link href="/archive" className="hover:text-accent transition-colors">
          Archive
        </Link>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span className="text-foreground/80">{artwork.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 xl:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="relative aspect-[3/4] w-full hairline shadow-sm overflow-hidden bg-surface-muted">
            {artwork.image && (
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
            )}
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
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-12">
            <span className="font-sans text-[11px] uppercase tracking-widest text-accent mb-4 block">
              {artwork.subject}
            </span>
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              {artwork.title}
            </h1>
            <p className="text-foreground/70 leading-luxury font-sans text-sm lg:text-base italic">
              "{artwork.description}"
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex justify-between border-b hairline border-border/20 py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest font-medium">
                Medium
              </span>
              <span>
                {selectedFormat === "original"
                  ? artwork.originalMedium
                  : artwork.editionsMedium}
              </span>
            </div>
            <div className="flex justify-between border-b hairline border-border/20 py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest font-medium">
                Dimensions
              </span>
              <span>
                {selectedFormat === "original"
                  ? artwork.originalDimensions
                  : artwork.editionsDimensions}
              </span>
            </div>
            <div className="flex justify-between py-3 font-sans text-sm">
              <span className="text-[11px] uppercase text-foreground/40 tracking-widest font-medium">
                Status
              </span>
              <span className="text-accent">{artwork.status}</span>
            </div>
          </div>

          <Button
            label="Inquire for Acquisition"
            href="/concierge"
            variant="boxed"
            className="w-full text-center py-6"
          />

          {artwork.fieldNotes && (
            <div className="mt-8 pt-12 border-t hairline border-border/30">
              <p className="font-serif italic text-xl text-foreground/80 leading-relaxed mb-6">
                "{artwork.fieldNotes}"
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {showInSitu && (
          <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-24">
            <button
              onClick={() => setShowInSitu(false)}
              className="absolute top-12 right-12 text-foreground/60 hover:text-foreground hover:rotate-90 transition-all duration-500"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={artwork.inSituImage || artwork.image}
                alt="Exhibition View"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
