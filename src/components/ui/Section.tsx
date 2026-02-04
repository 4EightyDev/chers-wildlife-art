// components/ui/Section.tsx
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 px-6 lg:px-12 max-w-[1800px] mx-auto w-full ${className}`}
    >
      {children}
    </section>
  );
}
