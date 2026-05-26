"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlowerMark } from "./FlowerMark";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "color";
  size?: "sm" | "md" | "lg" | "xl";
  showHindi?: boolean;
  layout?: "horizontal" | "stacked";
}

export function BrandLogo({
  className,
  variant = "color",
  size = "md",
  showHindi = true,
  layout = "stacked",
}: BrandLogoProps) {
  const sizes = {
    sm: { lockup: "text-[1.25rem]", flower: "w-4 h-4 -top-3", hindi: "text-[8px]", and: "text-[0.5rem] -top-1" },
    md: { lockup: "text-[1.65rem]", flower: "w-5 h-5 -top-3.5", hindi: "text-[9px]", and: "text-[0.6rem] -top-1" },
    lg: { lockup: "text-[2.1rem]", flower: "w-7 h-7 -top-5", hindi: "text-[10px]", and: "text-[0.7rem] -top-1.5" },
    xl: { lockup: "text-[3.25rem]", flower: "w-11 h-11 -top-7", hindi: "text-xs", and: "text-[0.95rem] -top-2" },
  };
  const s = sizes[size];

  const silkColor =
    variant === "light" ? "text-white" : "text-pink-hot";
  const summerColor =
    variant === "light" ? "text-white/90" : "text-pink-rose";
  const andColor = variant === "light" ? "text-white/75" : "text-pink-blush";
  const hindiColor = variant === "light" ? "text-white/55" : "text-charcoal/45";

  const Wordmark = (
    <div className="relative inline-block pt-2">
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2 font-script lowercase whitespace-nowrap",
          s.and,
          andColor
        )}
      >
        and
      </span>
      <div className="flex items-end gap-0 leading-none">
        <span className={cn(s.lockup, "font-display lowercase", silkColor)}>silk</span>
        <span className={cn("relative mx-px", s.lockup)}>
          <span className={cn("font-display lowercase", silkColor)}>i</span>
          <span className={cn("absolute left-1/2 -translate-x-1/2", s.flower)}>
            <FlowerMark strokeClassName="stroke-pink-hot" />
          </span>
        </span>
        <span className={cn(s.lockup, "font-display lowercase", summerColor)}>summer</span>
      </div>
    </div>
  );

  return (
    <Link href="/" className={cn("group inline-block", className)} aria-label="Silk and Summer — Home">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(layout === "stacked" ? "flex flex-col items-start" : "flex items-center gap-3")}
      >
        {showHindi && layout === "stacked" && (
          <span className={cn(s.hindi, "font-serif tracking-[0.28em] uppercase mb-0.5", hindiColor)}>
            रेशम
          </span>
        )}
        {Wordmark}
        {showHindi && layout === "stacked" && (
          <span className={cn(s.hindi, "font-serif tracking-[0.22em] mt-1 text-pink-rose")}>
            ग्रीष्म
          </span>
        )}
      </motion.div>
    </Link>
  );
}
