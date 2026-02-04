"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button, ButtonGroup } from "@/components/ui/Button";

interface CollectionItem {
  _id: string;
  title: string;
  eyebrow: string;
  description: string;
  featuredImage: string;
  type: string;
  link: string;
  offset?: string;
  slug?: string;
}

interface CollectionsClientProps {
  majorSeries: CollectionItem[];
  archiveSeries: CollectionItem[];
}

export default function CollectionsClient({
  majorSeries,
  archiveSeries,
}: CollectionsClientProps) {
  return (
    <main className="pt-20">
      {/* 1. PAGE HEADER: THE CURATOR'S INTRO */}
      <Section className="pb-0">
        <SectionHeading
          eyebrow="The Portfolio"
          title={
            <>
              The <span className="italic">Series</span>
            </>
          }
          description="Cher’s work is organized into distinct bodies of study, each representing a multi-year commitment to a specific habitat, species, and conservation narrative."
        />
      </Section>

      {/* 2. MAJOR SERIES: THE EXHIBITION WINGS (Alternating Layout) */}
      {majorSeries.map((item, index) => (
        <Section
          key={item._id}
          className={`${index % 2 === 0 ? "bg-background" : "bg-surface-muted"} max-w-full`}
        >
          <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative aspect-[16/10] w-full hairline shadow-sm overflow-hidden ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              {item.featuredImage && (
                <Image
                  src={item.featuredImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              )}
            </motion.div>

            {/* Text Side */}
            <div
              className={`flex flex-col items-start ${
                index % 2 !== 0 ? "lg:order-1 lg:items-end lg:text-right" : ""
              }`}
            >
              <span className="font-sans text-[10px] uppercase tracking-luxury text-accent mb-6">
                {item.eyebrow}
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight">
                {item.title}
              </h2>
              <p
                className={`font-sans text-sm lg:text-base text-foreground/70 leading-luxury mb-10 max-w-lg ${
                  index % 2 !== 0 ? "lg:ml-auto" : ""
                }`}
              >
                {item.description}
              </p>

              <ButtonGroup className={index % 2 !== 0 ? "lg:justify-end" : ""}>
                <Button
                  label="Explore the Series"
                  href={item.link}
                  variant="boxed"
                />
              </ButtonGroup>
            </div>
          </div>
        </Section>
      ))}

      {/* 3. THE STUDIO ARCHIVE: INTIMATE STUDIES & SKETCHES */}
      <Section className="bg-background pt-32 pb-48">
        <div className="border-t hairline border-border/30 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32 items-start">
            {/* Archive Meta */}
            <div>
              <span className="font-sans text-[10px] uppercase tracking-luxury text-accent mb-6 block">
                Legacy & Process
              </span>
              <h2 className="text-3xl lg:text-4xl mb-6 font-serif">
                The Studio Archive
              </h2>
              <p className="font-sans text-sm text-foreground/50 leading-relaxed mb-8 max-w-sm">
                A curated selection of intimate works on paper, colored pencil
                studies, and foundational sketches. These pieces offer
                collectors a glimpse into the evolution of Cher&apos;s technical
                process.
              </p>
              <Button
                label="Inquire for Archive Pricing"
                href="/concierge"
                variant="secondary"
                className="px-0"
              />
            </div>

            {/* Archive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {archiveSeries.map((archive) => (
                <motion.div
                  key={archive._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    href={archive.link}
                    className="block relative aspect-[4/3] mb-6 overflow-hidden hairline bg-surface-muted"
                  >
                    {archive.featuredImage && (
                      <Image
                        src={archive.featuredImage}
                        alt={archive.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                      />
                    )}
                    <div className="absolute inset-0 bg-background/5 group-hover:bg-transparent transition-colors duration-700" />
                  </Link>
                  <h3 className="text-xl lg:text-2xl mb-2 font-serif">
                    {archive.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-4">
                    Studies & Works on Paper
                  </p>
                  <Button
                    label="View Archive"
                    href={archive.link}
                    variant="primary"
                    className="text-[9px]"
                  />
                </motion.div>
              ))}

              {/* Future Placeholder Card */}
              <div className="aspect-[4/3] border-[0.5px] border-dashed border-border/40 flex flex-col items-center justify-center p-8 text-center bg-surface-muted/10">
                <p className="text-[9px] uppercase tracking-[0.3em] text-foreground/20 leading-relaxed max-w-[180px]">
                  Additional process sketches added seasonally
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. FINAL CALL TO ACTION */}
      <Section className="text-center py-24 bg-surface-muted max-w-full">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="text-3xl lg:text-4xl mb-8 font-serif italic text-foreground/80">
            Seeking a specific subject?
          </h3>
          <p className="font-sans text-sm text-foreground/60 leading-luxury mb-12">
            Cher accepts a limited number of private commissions for
            high-net-worth collectors and corporate spaces. Discuss your vision
            for a bespoke masterpiece.
          </p>
          <Button
            label="Request Private Commission"
            href="/concierge"
            variant="boxed"
          />
        </div>
      </Section>
    </main>
  );
}
