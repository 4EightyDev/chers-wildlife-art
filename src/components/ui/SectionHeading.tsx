// components/ui/SectionHeading.tsx
import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode; // For the ButtonGroup
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  children,
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div
      className={`flex flex-col mb-12 lg:mb-16 ${alignmentClasses} ${className}`}
    >
      {eyebrow && (
        <span className="font-sans text-[10px] lg:text-[12px] uppercase tracking-luxury text-accent mb-6">
          {eyebrow}
        </span>
      )}

      <h2 className="text-5xl lg:text-7xl xl:text-8xl leading-[1.1] mb-8 text-balance max-w-4xl">
        {title}
      </h2>

      {description && (
        <p className="font-sans text-sm lg:text-base text-foreground/70 max-w-xl leading-relaxed mb-10">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
