"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const collections = [
  {
    title: "The Avian Masterworks",
    description:
      "Intricate social studies of form and color, featuring the award-winning 'The Great Debate.'",
    image: "/images/collection-images/the-avian-masterworks.avif",
    href: "/collections/avian",
    aspect: "aspect-[4/3]", // Larger, wider piece
    offset: "lg:translate-y-0",
    label: "Series 01",
  },
  {
    title: "The Apex Series",
    description:
      "Intense, photo-realistic encounters with the mountain lions and lynx of the high country.",
    image: "/images/collection-images/the-apex-series.avif",
    href: "/collections/apex",
    aspect: "aspect-[3/4]", // Portrait
    offset: "lg:translate-y-24", // Staggered down
    label: "Series 02",
  },
  {
    title: "The Coastal Archive",
    description:
      "Exploring the resilient spirits and unique textures of Earth's marine and coastal inhabitants.",
    image: "/images/collection-images/the-coastal-archive.avif",
    href: "/collections/coastal",
    aspect: "aspect-[3/4]", // Portrait
    offset: "lg:-translate-y-12", // Staggered up
    label: "Series 03",
  },
];

export default function CollectionsPreview() {
  return (
    <Section id="collections" className="pb-40">
      <SectionHeading
        eyebrow="The Portfolio"
        title={
          <>
            Curated <span className="italic">Collections</span>
          </>
        }
        description="Every brushstroke is driven by a commitment to wildlife preservation. Explore the current bodies of work available for private acquisition."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
        {collections.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative flex flex-col ${item.offset}`}
          >
            {/* The Image Frame */}
            <Link
              href={item.href}
              className="relative w-full overflow-hidden hairline shadow-sm bg-accent/5 block mb-8"
            >
              <div className={`${item.aspect} w-full relative`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </Link>

            {/* Collection Info */}
            <div className="flex flex-col items-start px-2">
              <span className="font-sans text-[10px] uppercase tracking-widest text-accent mb-3">
                Series 0{index + 1}
              </span>
              <h3 className="text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-sans text-xs lg:text-sm text-foreground/60 leading-relaxed mb-6 max-w-xs">
                {item.description}
              </p>
              <Button
                label="View Collection"
                href={item.href}
                variant="primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
