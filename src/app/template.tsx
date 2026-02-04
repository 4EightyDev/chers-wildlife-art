"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoAnimated } from "@/components/ui/AnimatedLogo";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The animation has a max delay of 2.5s and duration of 1s = 3.5s total.
    // Adding a small buffer to ensure completion before fade out.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LogoAnimated className="h-32 md:h-40 opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>
      <div>{children}</div>
    </>
  );
}
