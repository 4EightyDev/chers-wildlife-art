"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCollectionById, getArtworksByCollection } from "@/data/site-data";

export default function CollectionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [filter, setFilter] = useState<"all" | "available">("all");

  const collection = getCollectionById(id);
  // Robust matching: handle potential casing issues
  const artworks = getArtworksByCollection(id.toLowerCase());

  if (!collection) return null;

  const filteredArt = artworks.filter((art) =>
    filter === "all" ? true : art.status === "Available",
  );

  return (
    <main className="pt-20">
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow={collection.eyebrow}
            title={collection.title}
            description={collection.description}
            className="mb-0 max-w-2xl"
          />

          {/* LUXURY FILTER TOGGLE */}
          <div className="flex items-center gap-8 border-b hairline border-border/40 pb-2">
            <button
              onClick={() => setFilter("all")}
              className={`text-[10px] uppercase tracking-widest transition-colors duration-500 ${
                filter === "all"
                  ? "text-foreground"
                  : "text-foreground/30 hover:text-foreground/60"
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter("available")}
              className={`text-[10px] uppercase tracking-widest transition-colors duration-500 ${
                filter === "available"
                  ? "text-foreground"
                  : "text-foreground/30 hover:text-foreground/60"
              }`}
            >
              Available
            </button>
          </div>
        </div>

        {/* ASYMMETRICAL GRID WITH ANIMATED TRANSITIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredArt.length > 0 ? (
              filteredArt.map((art, index) => (
                <motion.div
                  key={art.id}
                  layout // Makes items slide smoothly when others are filtered out
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group flex flex-col ${art.span}`}
                >
                  <Link
                    href={`/artwork/${art.id}`}
                    className="relative aspect-[4/5] overflow-hidden bg-surface-muted hairline mb-6 block"
                  >
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* PRIMARY WITNESS HOVER BADGE */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-[8px] uppercase tracking-widest text-background bg-foreground/60 px-2 py-1 backdrop-blur-sm font-sans">
                        Field Documented Reference
                      </p>
                    </div>

                    {/* STATUS BADGE */}
                    <div className="absolute top-4 right-4 shadow-xl">
                      <span
                        className={`text-[9px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-md hairline ${
                          art.status === "Available"
                            ? "bg-background/80 text-accent border-accent/20"
                            : "bg-background/40 text-foreground/40 border-border/20"
                        }`}
                      >
                        {art.status}
                      </span>
                    </div>
                  </Link>

                  <div className="flex justify-between items-baseline px-1">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-serif">
                        {art.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40">
                        {art.original?.dimensions || "Dimensions Upon Request"}{" "}
                        • Original & Giclées
                      </p>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details —
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              /* EMPTY STATE */
              <div className="col-span-full py-20 text-center">
                <p className="font-serif italic text-xl text-foreground/40">
                  No works currently available in this series.
                </p>
                <Link
                  href="/concierge"
                  className="text-[10px] uppercase tracking-widest text-accent mt-4 inline-block border-b border-accent/30 pb-1"
                >
                  Inquire for Commissions
                </Link>
              </div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </main>
  );
}
