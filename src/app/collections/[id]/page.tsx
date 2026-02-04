"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const artworks = getArtworksByCollection(id);

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
          <div className="flex items-center gap-8 border-b hairline border-border/40 pb-2">
            <button
              onClick={() => setFilter("all")}
              className={`text-[10px] uppercase tracking-widest ${filter === "all" ? "text-foreground" : "text-foreground/30"}`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter("available")}
              className={`text-[10px] uppercase tracking-widest ${filter === "available" ? "text-foreground" : "text-foreground/30"}`}
            >
              Available
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredArt.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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

                {/* WITNESS BADGE REFACTOR */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[8px] uppercase tracking-widest text-background bg-foreground/60 px-2 py-1 backdrop-blur-sm">
                    Field Documented Reference
                  </p>
                </div>

                <div className="absolute top-4 right-4 shadow-xl">
                  <span
                    className={`text-[9px] uppercase tracking-widest px-3 py-1.5 backdrop-blur-md hairline ${art.status === "Available" ? "bg-background/80 text-accent border-accent/20" : "bg-background/40 text-foreground/40"}`}
                  >
                    {art.status}
                  </span>
                </div>
              </Link>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif">
                    {art.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40">
                    {art.original.dimensions} • Original & Editions
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
