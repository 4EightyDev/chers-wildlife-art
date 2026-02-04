"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Landmark, BookCopy, ShieldCheck } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { RECOGNITION_CONTENT } from "@/data/site-data";

export default function ExhibitionsPage() {
  const { distinctions, exhibitions, publications, pressLogos } =
    RECOGNITION_CONTENT;

  // We double the array to create a seamless infinite loop for the marquee
  const marqueeLogos = [...pressLogos, ...pressLogos];

  return (
    <main className="pt-20">
      {/* 1. HERO: THE RECORD */}
      <Section className="pb-12 lg:pb-20">
        <SectionHeading
          eyebrow={RECOGNITION_CONTENT.eyebrow}
          title={
            <>
              Awards <span className="italic">& Recognition</span>
            </>
          }
          description={RECOGNITION_CONTENT.description}
        />
      </Section>

      {/* 2. THE MARQUEE AUTHORITY STRIP */}
      <Section className="py-16 border-y hairline border-border/30 overflow-hidden max-w-full">
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-24 lg:gap-40 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40, // Adjust speed here (higher is slower)
              repeat: Infinity,
            }}
            // Pauses the animation on hover
            whileHover={{ transition: { duration: 0 } }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="h-8 lg:h-12 relative w-36 lg:w-52 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-700"
                  style={{ mixBlendMode: "multiply" }} // Removes white backgrounds
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* 3. TOP DISTINCTIONS (THE ELITE HONORS) */}
      <Section className="bg-surface-muted max-w-full">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {distinctions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 hairline flex flex-col items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <Trophy size={16} strokeWidth={1} className="text-accent mb-8" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-3">
                {item.org}
              </p>
              <h3 className="text-lg lg:text-xl font-serif mb-6 leading-tight">
                {item.title}
              </h3>
              <div className="mt-auto flex items-center gap-3">
                <span className="w-4 h-[0.5px] bg-accent/40" />
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. INTERNATIONAL EXHIBITION TIMELINE */}
      <Section className="py-32 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-40">
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-4 mb-6">
              <Landmark size={20} strokeWidth={1} className="text-accent" />
              <h2 className="text-3xl lg:text-5xl font-serif italic">
                Gallery History
              </h2>
            </div>
            <p className="text-sm text-foreground/60 leading-luxury max-w-xs">
              A comprehensive history of live and juried exhibitions spanning
              London, China, Canada, and the United States.
            </p>
          </div>

          <div className="divide-y hairline divide-border/20">
            {exhibitions.map((ex, i) => (
              <div
                key={i}
                className="grid grid-cols-[100px_1fr] gap-12 py-12 hover:bg-surface-muted/30 transition-colors px-6 group"
              >
                <span className="font-serif italic text-2xl text-accent/60 group-hover:text-accent transition-colors">
                  {ex.year}
                </span>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl uppercase tracking-widest text-foreground/90 font-light">
                    {ex.event}
                  </h4>
                  <div className="flex items-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                      {ex.venue}
                    </p>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                      {ex.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. THE BIBLIOGRAPHY (BOOKS & JOURNALS) */}
      <Section className="bg-foreground text-background max-w-full">
        <div className="max-w-[1800px] mx-auto py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="flex items-center gap-6">
              <BookCopy size={28} strokeWidth={1} className="text-accent" />
              <h2 className="text-4xl lg:text-6xl font-serif italic text-background">
                Bibliography
              </h2>
            </div>
            <p className="text-background/30 text-[9px] uppercase tracking-[0.6em]">
              Selected Archive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-20">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="flex flex-col border-l-2 border-accent/20 pl-10 py-1 group"
              >
                <span className="text-accent text-[10px] uppercase tracking-[0.4em] mb-4 font-sans">
                  {pub.source}
                </span>
                <h3 className="text-2xl lg:text-3xl font-serif text-background/90 leading-snug mb-8 group-hover:text-background transition-colors italic">
                  &ldquo;{pub.title}&rdquo;
                </h3>
                <div className="flex items-center justify-between mt-auto border-t border-background/5 pt-4">
                  <span className="text-[10px] uppercase tracking-widest text-background/20 font-sans">
                    {pub.year}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-accent font-sans">
                    {pub.note}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. THE REGISTRY NOTE */}
      <Section className="text-center py-40 border-t hairline border-border/20">
        <div className="max-w-2xl mx-auto">
          <ShieldCheck
            size={32}
            strokeWidth={0.5}
            className="text-accent/40 mx-auto mb-8"
          />
          <p className="text-[9px] uppercase tracking-[0.5em] text-foreground/30 mb-8 font-sans">
            Official Studio Registry
          </p>
          <p className="font-serif italic text-2xl lg:text-3xl mb-12 text-foreground/80 leading-relaxed px-6">
            For institutional curators or private registrars requiring a full CV
            or verified work provenance for acquisition.
          </p>
          <a
            href="/concierge"
            className="text-[10px] uppercase tracking-[0.4em] border hairline border-foreground/20 px-10 py-5 hover:bg-foreground hover:text-background transition-all duration-700 inline-block font-sans"
          >
            Request Full Studio Dossier
          </a>
        </div>
      </Section>
    </main>
  );
}
