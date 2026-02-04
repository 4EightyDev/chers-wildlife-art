"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Camera,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MISSION_CONTENT } from "@/data/site-data";

export default function MissionPage() {
  const { partnerships, pillars, primaryWitness } = MISSION_CONTENT;

  return (
    <main className="pt-20">
      {/* 1. HERO: THE MANIFESTO */}
      <Section className="pb-24">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow={MISSION_CONTENT.eyebrow}
            title={
              <>
                A Legacy <span className="italic">of Advocacy</span>
              </>
            }
            description={MISSION_CONTENT.statement}
          />
        </div>
      </Section>

      {/* 2. THE PRIMARY WITNESS: LENS TO BRUSH (16:9) */}
      <Section className="py-0 max-w-full">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] w-full hairline overflow-hidden shadow-sm bg-surface-muted"
          >
            <Image
              src={primaryWitness.image}
              alt="The transition from lens to brush"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 py-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Camera size={20} strokeWidth={1} className="text-accent" />
                <span className="w-8 h-px bg-border" />
                <Paintbrush size={20} strokeWidth={1} className="text-accent" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif mb-8 italic">
                {primaryWitness.subtitle}
              </h2>
            </div>
            <div>
              <p className="font-sans text-sm lg:text-base text-foreground/70 leading-luxury mb-8">
                {primaryWitness.description}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-accent border-l border-accent/30 pl-6 py-2">
                {primaryWitness.insight}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. GLOBAL PARTNERSHIPS: THE RESULT (4:3 Aspect Ratio) */}
      <Section className="bg-surface-muted max-w-full">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-32 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <h2 className="text-3xl lg:text-5xl mb-12 leading-tight">
              International <br />
              <span className="italic">Recognition</span>
            </h2>

            <div className="space-y-10 w-full">
              {partnerships.map((partner) => (
                <div
                  key={partner.org}
                  className="flex flex-col items-start border-b hairline border-border/40 pb-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck
                      size={16}
                      strokeWidth={1}
                      className="text-accent"
                    />
                    <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/40">
                      {partner.role}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-serif mb-4">
                    {partner.org}
                  </h3>
                  <p className="font-sans text-sm text-foreground/60 leading-luxury max-w-md">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Uncropped 4:3 Partnership Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/3] w-full hairline overflow-hidden shadow-sm bg-background order-1 lg:order-2"
          >
            <Image
              src={partnerships[0].image}
              alt="International Exhibition and Recognition"
              fill
              className="object-contain lg:object-cover" // Contain for safety, cover if you want edge-to-edge
            />
          </motion.div>
        </div>
      </Section>

      {/* 4. THE THREE PILLARS */}
      <Section className="py-32 lg:py-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 text-left">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="flex flex-col items-start">
              <span className="text-accent font-serif italic text-3xl mb-6">
                0{i + 1}
              </span>
              <h3 className="text-xl uppercase tracking-widest mb-6 font-sans">
                {pillar.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-luxury font-sans">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. THE CALL TO ACTION: THE INVERSION */}
      <Section className="bg-foreground text-background max-w-full text-center py-32 lg:py-48">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Globe className="text-accent mb-10" size={48} strokeWidth={1} />

          <h2 className="text-4xl lg:text-6xl italic mb-10 text-background leading-tight">
            Art as a Catalyst <br />
            for Change.
          </h2>

          <p className="font-sans text-sm lg:text-lg text-background/70 leading-luxury mb-12">
            The acquisition of a masterpiece is a direct investment in the
            protection of our natural heritage. Together, we can ensure that the
            majesty captured on canvas remains vibrant in the wild.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <Button
              label="Explore the Catalog"
              href="/archive"
              variant="primary"
              className="!text-background !border-background hover:!text-accent hover:!border-accent"
            />
            <Button
              label="Request Consultation"
              href="/concierge"
              variant="secondary"
              className="!text-background/60 hover:!text-background"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
