"use client";

import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface LogoAnimatedProps extends SVGMotionProps<SVGSVGElement> {
  invert?: boolean;
}

export function LogoAnimated({
  invert = false,
  className = "",
  noAnimation = false,
  ...props
}: LogoAnimatedProps & { noAnimation?: boolean }) {
  const transitionSettings = noAnimation
    ? { duration: 0 }
    : {
        strokeOpacity: { delay: 0.2, duration: 0.15 },
        pathLength: { delay: 0.2, duration: 0.3 },
      };

  const transitionSettingsH = noAnimation
    ? { duration: 0 }
    : {
        strokeOpacity: { delay: 0.45, duration: 0.15 },
        pathLength: { delay: 0.45, duration: 0.35 },
        pathOffset: { delay: 0.45, duration: 0.35 },
      };

  const transitionSettingsEr = noAnimation
    ? { duration: 0 }
    : {
        strokeOpacity: { delay: 0.75, duration: 0.15 },
        pathLength: { delay: 0.75, duration: 0.75 },
        pathOffset: { delay: 0.75, duration: 0.75 },
      };
  return (
    <motion.svg
      {...props}
      className={`h-20 shrink-0 stroke-black md:h-30 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 0 160 210"
    >
      <motion.path
        id="C"
        fill="transparent"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0, strokeOpacity: 0 }}
        animate={{
          strokeOpacity: 1,
          pathLength: 1,
        }}
        transition={transitionSettings}
        d="M27.43,74.44c12.45-19.93,3.9-101.67-18.28-35.42-23.48,83.66,21.86,158.7,33.95,104.24"
      />
      <motion.path
        id="h"
        className="translate-x-2"
        fill="transparent"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ strokeOpacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{
          strokeOpacity: 1,
          pathLength: 1,
          pathOffset: 0,
        }}
        transition={transitionSettingsH}
        d="M54.99,200.84c-6.76-42.58-4.17-207.75,2.96-197.89,7.13,9.86.71,44.2-.83,57.86-1.54,13.66-7.49,37.54-16.63,46.69-8.4,8.4-12.17-13.88-12.88-15.31s2.48,27.18,2.48,27.18"
      />
      <motion.path
        id="er"
        className="translate-x-2"
        fill="transparent"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ strokeOpacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{
          strokeOpacity: 1,
          pathLength: 1,
          pathOffset: 0,
        }}
        transition={transitionSettingsEr}
        d="M143.93,39.02c-5.76,9.96-12.02,20.47-18.51,30.24-5.68,8.37-13.13,17.76-20.86,24.06-14.07,10.96-.54-37.07-12.83-29.65-12.09,8.82-4.25,35.08-5.79,45.61-.91,5.45-2.26,13.29-6.65,13.43-2.52-.15-5.3-4.23-6.08-9.19-1.22-7.69,2.58-18.33,3.42-25.84.22-2.1-5.94,10.87-7.95,12.46-4.74,3.96-4.78-3.59-4.59-7.32.53-10.6,2.59-22.26,6.53-29.86"
      />
    </motion.svg>
  );
}
