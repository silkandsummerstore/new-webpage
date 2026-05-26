"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

/**
 * Bilingual logo: रेशम (silk) + Silk & Summer + ग्रीष्म (summer)
 * Rajasthani marigold motif — Gen Z editorial, not corporate
 */
export function Logo({ className, variant = "dark", size = "md" }: LogoProps) {
  const textColor = variant === "light" ? "text-ivory" : "text-charcoal";
  const accentColor = variant === "light" ? "text-gold" : "text-terracotta";

  const sizes = {
    sm: { hindi: "text-[9px]", main: "text-[11px]", sub: "text-[7px]" },
    md: { hindi: "text-[10px]", main: "text-sm", sub: "text-[8px]" },
    lg: { hindi: "text-xs", main: "text-base", sub: "text-[9px]" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className={cn("group inline-block", className)} aria-label="Silk and Summer — Home">
      <motion.div
        className="flex flex-col items-start leading-none"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Hindi — silk */}
        <span
          className={cn(
            s.hindi,
            "font-serif tracking-[0.25em] uppercase opacity-80",
            textColor
          )}
        >
          रेशम
        </span>

        {/* Main lockup with marigold dot motif */}
        <div className="flex items-center gap-1.5 my-0.5">
          <svg
            viewBox="0 0 12 12"
            className={cn("w-2 h-2 shrink-0", accentColor)}
            fill="currentColor"
            aria-hidden
          >
            <circle cx="6" cy="6" r="2" opacity="0.9" />
            <circle cx="6" cy="2" r="1" opacity="0.5" />
            <circle cx="10" cy="6" r="1" opacity="0.5" />
            <circle cx="6" cy="10" r="1" opacity="0.5" />
            <circle cx="2" cy="6" r="1" opacity="0.5" />
          </svg>
          <span
            className={cn(
              s.main,
              "font-sans font-medium tracking-[0.18em] uppercase",
              textColor
            )}
          >
            Silk <span className={cn("font-light", accentColor)}>&</span> Summer
          </span>
        </div>

        {/* Bottom Hindi — summer + Ajmer */}
        <div className="flex items-baseline gap-2">
          <span
            className={cn(s.hindi, "font-serif tracking-[0.2em]", accentColor)}
          >
            ग्रीष्म
          </span>
          <span className={cn(s.sub, "luxury-label", textColor, "opacity-50")}>
            · Ajmer
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
