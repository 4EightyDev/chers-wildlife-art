// src/components/ui/Button.tsx
import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "boxed";
  className?: string;
}

export function Button({
  label,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  // text-[10px] and tracking-[0.3em] for that high-fashion/gallery aesthetic
  const baseStyles =
    "inline-block text-[10px] uppercase tracking-[0.3em] transition-all duration-700 ease-in-out font-sans whitespace-nowrap";

  const variants = {
    // VARIANT 1: The "Signature" (Underline)
    primary:
      "border-b-[0.5px] border-foreground/40 pb-1 hover:border-accent hover:text-accent",

    // VARIANT 2: The "Gallery Frame" (Boxed)
    boxed:
      "border-[0.5px] border-foreground/20 px-10 py-4 hover:border-accent hover:bg-accent/5",

    // VARIANT 3: The "Minimalist" (No border)
    secondary: "text-foreground/40 hover:text-foreground",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}

// This handles the vertical rhythm and spacing between multiple buttons
export function ButtonGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-10 lg:gap-14 mt-4 ${className}`}
    >
      {children}
    </div>
  );
}
