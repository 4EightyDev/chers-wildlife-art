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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] w-full hairline shadow-sm"
        >
          <Image
            src={ARTIST_CONTENT.bioPortrait}
            alt="Cher Anderson"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col items-start">
          <span className="font-sans text-[10px] lg:text-[12px] uppercase tracking-luxury text-accent mb-8">
            The Primary Witness
          </span>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-10 italic font-serif text-foreground/90">
            &ldquo;{ARTIST_CONTENT.quote}&rdquo;
          </h2>

          <div className="flex flex-col gap-6 mb-12">
            <p className="font-sans text-sm lg:text-base text-foreground/70 leading-luxury max-w-xl">
              Cher’s process begins in the heart of the wild. As a{" "}
              <span className="text-foreground italic">Primary Witness</span>,
              she personally photographs every subject in its native
              habitat—documenting the singular moments of soul and light that
              she then translates, hair-by-hair, onto the board.
            </p>
            <p className="font-sans text-sm lg:text-base text-foreground/70 leading-luxury max-w-xl">
              Every acquisition supports global conservation initiatives,
              ensuring that the majesty captured on canvas continues to thrive
              in the wild.
            </p>
          </div>

          <ButtonGroup>
            <Button
              label="The Full Narrative"
              href="/about"
              variant="primary"
            />
            <Button
              label="Conservation Mission"
              href="/mission"
              variant="secondary"
            />
          </ButtonGroup>
        </div>
      </div>
    </Section>
  );
}
