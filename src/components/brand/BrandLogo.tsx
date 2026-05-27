"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    sm: { logo: "w-24", hindi: "text-xs" },
    md: { logo: "w-32", hindi: "text-sm" },
    lg: { logo: "w-40", hindi: "text-base" },
    xl: { logo: "w-52", hindi: "text-lg" },
  };
  const s = sizes[size];

  const hindiColor = variant === "light" ? "text-white" : "text-pink-hot";

  return (
    <Link href="/" className={cn("group inline-block", className)} aria-label="Silk and Summer — Home">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex flex-col items-start gap-1",
          layout === "horizontal" && "flex-row items-center gap-3"
        )}
      >
        {showHindi && (
          <span
            className={cn(
              s.hindi,
              "font-serif tracking-[0.3em] uppercase mb-0.5",
              hindiColor
            )}
          >
            रेशम
          </span>
        )}
        <div className="relative">
          <Image
            src="/new logo.jpeg"
            alt="Silk & Summer logo"
            width={160}
            height={80}
            className={cn(
              "h-auto object-contain",
              s.logo
            )}
            priority
          />
        </div>
        {showHindi && (
          <span
            className={cn(
              s.hindi,
              "font-serif tracking-[0.24em] mt-0.5",
              hindiColor
            )}
          >
            ग्रीष्म
          </span>
        )}
      </motion.div>
    </Link>
  );
}
