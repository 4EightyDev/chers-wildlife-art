"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { Button, ButtonGroup } from "../ui/Button";
import { ARTIST_CONTENT } from "@/data/site-data";

export default function ArtistMission() {
  return (
    <Section className="bg-surface-muted max-w-full">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* LEFT: The Artist Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full"
        >
          <div className="relative w-full h-full overflow-hidden hairline shadow-sm">
            <Image
              src={ARTIST_CONTENT.bioPortrait}
              alt="Cher - Wildlife Artist"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 border border-foreground/5 pointer-events-none" />
        </motion.div>

        {/* RIGHT: The Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <span className="font-sans text-[10px] lg:text-[12px] uppercase tracking-luxury text-accent mb-8">
            The Artist & Philosophy
          </span>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-10 text-balance italic font-serif text-foreground/90">
            &ldquo;To capture the eyes is to glimpse the soul of the
            wild.&rdquo;
          </h2>

          <div className="flex flex-col gap-6 mb-12">
            <p className="font-sans text-sm lg:text-base text-foreground/70 leading-luxury max-w-xl">
              From her studio in the Pacific Northwest, Cher translates a
              lifelong reverence for nature into masterworks of hyper-realism.
              Her process is one of profound patience—rendered
              feather-by-feather and hair-by-hair—until the spirit of the
              subject transcends the canvas.
            </p>
            <p className="font-sans text-sm lg:text-base text-foreground/70 leading-luxury max-w-xl">
              As a Signature Member of{" "}
              <span className="italic">Artists for Conservation</span>, Cher’s
              work serves a dual purpose: to honor the raw beauty of the animal
              kingdom and to ensure its survival. Every acquisition contributes
              directly to global initiatives dedicated to preserving
              Earth&apos;s most vulnerable inhabitants.
            </p>
          </div>

          <ButtonGroup>
            <Button
              label="Explore the Full Story"
              href="/about"
              variant="primary"
            />
            <Button
              label="Conservation Legacy"
              href="/mission"
              variant="secondary"
            />
          </ButtonGroup>
        </motion.div>
      </div>
    </Section>
  );
}
