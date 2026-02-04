"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { Button, ButtonGroup } from "../ui/Button";

export default function ConciergeTeaser() {
  return (
    <Section className="bg-background border-t hairline border-border/50">
      <div className="flex flex-col items-center text-center py-12 lg:py-24">
        {/* CENTERED HEADING SYSTEM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <SectionHeading
            eyebrow="Private Acquisition"
            title={
              <>
                A Personal <span className="italic">Connection</span>
              </>
            }
            description="Whether you are curating a private residence or seeking a bespoke commission, our studio provides a tailored experience for every collector. We invite you to discuss your vision for a singular masterpiece or a curated series."
            align="center"
            className="mb-0" // We'll handle the button margin here
          >
            <ButtonGroup className="justify-center mt-12">
              <Button
                label="Request Consultation"
                href="/concierge"
                variant="boxed" // Using the boxed variant for a stronger closing "Action"
              />
              <Button
                label="View Available Works"
                href="/collections"
                variant="secondary"
              />
            </ButtonGroup>
          </SectionHeading>
        </motion.div>

        {/* SUBTLE BRAND MARK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2 }}
          className="mt-24 lg:mt-32 opacity-20"
        >
          <div className="w-px h-24 bg-foreground mx-auto mb-8" />{" "}
          {/* A vertical hairline "Divider" */}
          <span className="serif-brand text-sm tracking-[0.5em] uppercase">
            Cher
          </span>
        </motion.div>
      </div>
    </Section>
  );
}
