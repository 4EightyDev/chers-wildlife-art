"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ConciergePage() {
  const [inquiryType, setInquiryType] = useState<
    "acquisition" | "commission" | "general"
  >("acquisition");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
          {/* LEFT: THE STUDIO CONNECTION */}
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="The Concierge"
              title={
                <>
                  Tailored <span className="italic">Acquisition</span>
                </>
              }
              description="Whether you are a seasoned collector or acquiring your first masterpiece, Cher provides a personal curatorial experience to ensure the perfect placement in your home or corporate space."
              className="mb-12"
            />

            <div className="space-y-10 border-t hairline border-border/40 pt-12">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-muted">
                  <Mail size={18} strokeWidth={1} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                    Direct Studio Email
                  </p>
                  <p className="text-sm font-sans">
                    studio@cherswildlifeart.com
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-muted">
                  <MapPin size={18} strokeWidth={1} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                    Studio Location
                  </p>
                  <p className="text-sm font-sans">Chandler, Arizona</p>
                </div>
              </div>

              <div className="bg-surface-muted p-8 hairline mt-12">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-4 text-accent">
                  Private Consultation
                </p>
                <p className="text-xs text-foreground/60 leading-relaxed mb-6">
                  Cher offers limited one-on-one video consultations to discuss
                  custom framing, lighting, and placement within your unique
                  interior environment.
                </p>
                <div className="w-12 h-px bg-accent/30" />
              </div>
            </div>
          </div>

          {/* RIGHT: THE INQUIRY FORM */}
          <div className="bg-background lg:p-12 lg:border-l hairline border-border/20">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Inquiry Type Toggle */}
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 block">
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { id: "acquisition", label: "Acquire Existing Work" },
                          { id: "commission", label: "Private Commission" },
                          { id: "general", label: "General Inquiry" },
                        ].map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setInquiryType(type.id as any)}
                            className={`px-6 py-3 text-[10px] uppercase tracking-widest transition-all hairline ${
                              inquiryType === type.id
                                ? "bg-foreground text-background"
                                : "bg-transparent text-foreground/40 border-border hover:border-foreground/40"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-foreground/40">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border-b hairline border-border/60 py-2 focus:outline-none focus:border-accent transition-colors font-sans text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-foreground/40">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-transparent border-b hairline border-border/60 py-2 focus:outline-none focus:border-accent transition-colors font-sans text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-foreground/40">
                        {inquiryType === "commission"
                          ? "Describe your vision (Subject, Scale, Space)"
                          : "Message"}
                      </label>
                      <textarea
                        rows={4}
                        required
                        className="w-full bg-transparent border-b hairline border-border/60 py-2 focus:outline-none focus:border-accent transition-colors font-sans text-sm resize-none"
                      />
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] bg-foreground text-background px-12 py-5 hover:bg-accent transition-all duration-500"
                      >
                        Send Inquiry
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-2 transition-transform"
                        />
                      </button>
                    </div>

                    <p className="text-[9px] uppercase tracking-widest text-foreground/30 leading-relaxed max-w-sm">
                      Your privacy is paramount. Studio communications are
                      strictly confidential and handled personally by Cher
                      Anderson and her direct associates.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[60vh] flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle2
                    size={48}
                    strokeWidth={1}
                    className="text-accent mb-8"
                  />
                  <h2 className="text-3xl lg:text-4xl font-serif italic mb-6">
                    Thank You
                  </h2>
                  <p className="font-sans text-sm text-foreground/60 leading-luxury max-w-sm">
                    Your request has been received by the studio. Cher
                    personally reviews all inquiries and will be in contact
                    within 48 hours to discuss the next steps of your
                    acquisition.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-[10px] uppercase tracking-widest border-b hairline border-foreground hover:text-accent hover:border-accent transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </main>
  );
}
