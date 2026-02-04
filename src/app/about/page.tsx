"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ARTIST_CONTENT } from "@/data/site-data";
import { Award, ShieldCheck, Wind, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* 1. HERO: THE ESSENCE */}
      <Section className="pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          <SectionHeading
            eyebrow="The Artist"
            title={
              <>
                A Life Defined <br />{" "}
                <span className="italic text-foreground/80">by the</span> Wild
              </>
            }
            description="Based in the Pacific Northwest, Cher translates a lifelong reverence for nature into masterworks of hyper-realism. Her work is a testament to the profound connection between the observer and the observed."
            className="mb-0"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative aspect-square lg:aspect-[4/5] w-full hairline shadow-sm overflow-hidden"
          >
            <Image
              src={ARTIST_CONTENT.studioPortrait}
              alt="Cher in her studio"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </Section>

      {/* 2. THE PHILOSOPHY: WINDOWS TO THE SOUL */}
      <Section className="bg-surface-muted max-w-full mt-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/3] w-full hairline overflow-hidden">
            <Image
              src={ARTIST_CONTENT.eyeDetail}
              alt="Technical detail"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <Eye className="text-accent mb-8" size={32} strokeWidth={1} />
            <h2 className="text-3xl lg:text-5xl font-serif mb-8 italic italic text-balance leading-tight">
              &ldquo;To capture the eyes is to glimpse the soul of the
              subject.&rdquo;
            </h2>
            <p className="font-sans text-sm lg:text-base text-foreground/70 leading-luxury mb-8">
              Cher’s signature is found in the gaze. By prioritizing the
              intensity and depth of the eyes, she invites the collector into a
              silent dialogue with the animal. This focus transforms a portrait
              into an encounter, fostering an empathy that is the foundation of
              her conservation mission.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. THE PROCESS: FEATHER BY FEATHER */}
      <Section className="py-32 lg:py-48">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-luxury text-accent mb-8">
            The Craftsmanship
          </span>
          <h2 className="text-4xl lg:text-6xl mb-12">The Meticulous Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-12">
            <div className="flex flex-col gap-4">
              <span className="text-xl font-serif italic text-accent">
                01. Observation
              </span>
              <p className="text-xs text-foreground/60 leading-relaxed font-sans uppercase tracking-widest">
                Countless hours spent in the field, documenting the subtle
                shifts in light and movement.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xl font-serif italic text-accent">
                02. Precision
              </span>
              <p className="text-xs text-foreground/60 leading-relaxed font-sans uppercase tracking-widest">
                A feather-by-feather technique rendered on archival board to
                ensure structural permanence.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xl font-serif italic text-accent">
                03. Permanence
              </span>
              <p className="text-xs text-foreground/60 leading-relaxed font-sans uppercase tracking-widest">
                Every masterpiece is finished with museum-grade UV protection to
                safeguard the legacy of the work.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. CONSERVATION: ARTISTS FOR CONSERVATION */}
      <Section className="bg-foreground text-background max-w-full">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center py-20 lg:py-32">
          <ShieldCheck className="text-accent mb-8" size={40} strokeWidth={1} />
          <h2 className="text-3xl lg:text-5xl font-serif mb-8 text-white">
            The Conservation Legacy
          </h2>
          <p className="font-sans text-sm lg:text-lg text-white/70 leading-luxury max-w-2xl mb-12">
            As a Signature Member of{" "}
            <span className="text-accent italic">Artists for Conservation</span>
            , Cher joins an elite group of international artists using their
            work as a catalyst for change. A portion of every acquisition is
            dedicated to global initiatives that protect the habitats and
            species featured in her catalog.
          </p>
          <div className="flex gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Replace with AFC Logo asset if available */}
            <span className="text-[10px] uppercase tracking-[0.5em] border border-white/20 px-8 py-4">
              AFC Signature Member
            </span>
          </div>
        </div>
      </Section>

      {/* 5. THE PERSONAL NOTE: FIRST PERSON TOUCH */}
      <Section className="py-32">
        <div className="max-w-2xl mx-auto border-l hairline border-accent/30 pl-12 lg:pl-20">
          <p className="font-serif italic text-2xl lg:text-3xl text-foreground/90 leading-relaxed mb-8">
            &ldquo;My work is not just about the animal; it is about the shared
            breath between us. I hope these pieces bring the quiet dignity of
            the wild into your home, just as they have filled my life with
            purpose.&rdquo;
          </p>
          <div className="flex flex-col">
            <span className="serif-brand text-2xl tracking-widest uppercase">
              Cher
            </span>
            <span className="font-sans text-[10px] uppercase tracking-luxury text-foreground/40 mt-2">
              Studio Principal
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
}
