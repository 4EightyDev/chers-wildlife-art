"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { Button, ButtonGroup } from "../ui/Button";
import { HOME_CONTENT, getArtworkById } from "@/data/site-data";

export default function Hero() {
  const { hero } = HOME_CONTENT;
  const featuredArt = getArtworkById(hero.featuredArtworkId);

  return (
    <Section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2"
      >
        <SectionHeading
          eyebrow={hero.eyebrow}
          title={
            <>
              {hero.titleFirstPart} <br />{" "}
              <span className="italic">{hero.titleItalicPart}</span>{" "}
              {hero.titleLastPart}
            </>
          }
          description={hero.description}
        >
          <ButtonGroup>
            <Button
              label="Explore Collection"
              href="/collections"
              variant="primary"
            />
            <Button
              label="The Artist Story"
              href="/about"
              variant="secondary"
            />
          </ButtonGroup>
        </SectionHeading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="w-full lg:w-[45%] aspect-[3/4]"
      >
        <div className="w-full h-full animate-float relative overflow-visible">
          <div className="relative w-full h-full overflow-hidden hairline shadow-2xl bg-surface-muted">
            <Image
              src={featuredArt?.image || ""}
              alt={featuredArt?.title || "Masterpiece"}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Witness Refactor */}
          <div className="absolute -bottom-14 left-0 w-full">
            <p className="font-serif italic text-lg text-foreground/80">
              {featuredArt?.title}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <span className="font-sans text-[9px] uppercase tracking-widest text-accent font-medium">
                Primary Witness Moment
              </span>
              <span className="w-4 h-px bg-border" />
              <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/40">
                Field Photography & Painting by Cher
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
