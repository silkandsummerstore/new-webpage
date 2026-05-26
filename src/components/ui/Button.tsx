"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-[11px] uppercase tracking-editorial font-sans transition-all duration-500 ease-luxury";
  const variants = {
    primary: "bg-charcoal text-ivory hover:bg-maroon",
    outline:
      "border border-charcoal/30 text-charcoal hover:border-maroon hover:text-maroon bg-transparent",
    ghost: "text-charcoal/70 hover:text-maroon underline-offset-4 hover:underline px-0",
  };

  const classes = cn(base, variants[variant], className);

  const inner = (
    <motion.span
      className="relative z-10"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
