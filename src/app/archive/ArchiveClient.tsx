"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Avian", "Apex", "Coastal", "Legacy"];

export default function ArchiveClient({
  initialArtworks,
}: {
  initialArtworks: any[];
}) {
  const [filter, setFilter] = useState("All");

  const filteredArt =
    filter === "All"
      ? initialArtworks
      : initialArtworks.filter(
          (art) => art.collectionId?.toLowerCase() === filter.toLowerCase(),
        );

  return (
    <main className="pt-20">
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <SectionHeading
            eyebrow="The Complete Archive"
            title={
              <>
                Catalog <span className="italic">Raisonné</span>
              </>
            }
            description="A comprehensive and systematic record of Cher’s studio works, providing a definitive history of her artistic evolution."
            className="mb-0"
          />

          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b hairline border-border/40 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-widest transition-all duration-500 ${
                  filter === cat
                    ? "text-accent"
                    : "text-foreground/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredArt.map((art) => (
              <motion.div
                key={art._id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col"
              >
                <Link
                  href={`/artwork/${art.slug || art._id}`}
                  className="relative aspect-[4/5] overflow-hidden bg-surface-muted hairline mb-6"
                >
                  {art.image ? (
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[8px] text-foreground/20">
                      IMAGE PENDING
                    </div>
                  )}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] uppercase tracking-[0.2em] bg-background/90 px-3 py-1 hairline">
                      {art.status}
                    </span>
                  </div>
                </Link>

                <div className="px-1">
                  <h3 className="font-serif text-lg mb-1">{art.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[9px] uppercase tracking-widest text-foreground/40">
                      {art.subject}
                    </p>
                    <span className="text-[9px] text-accent tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      View →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      <div className="pb-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/20">
          Showing {filteredArt.length} Masterworks
        </p>
      </div>
    </main>
  );
}
