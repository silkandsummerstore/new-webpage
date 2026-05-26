"use client";

import { cn } from "@/lib/utils";

interface FlowerMarkProps {
  className?: string;
  strokeClassName?: string;
  animate?: boolean;
}

/** Line-art hibiscus — matches brand flower (c 1) */
export function FlowerMark({
  className,
  strokeClassName = "stroke-pink-hot",
  animate = false,
}: FlowerMarkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={cn("w-full h-full", className)}
      aria-hidden
    >
      <g className={strokeClassName}>
        {/* Petals */}
        <path
          d="M60 18 C48 28 42 42 44 56 C46 70 52 78 60 82 C68 78 74 70 76 56 C78 42 72 28 60 18Z"
          strokeWidth="2.2"
          strokeLinecap="round"
          className={animate ? "flower-stroke" : undefined}
          style={animate ? { strokeDasharray: 220, strokeDashoffset: 220 } : undefined}
        />
        <path
          d="M60 82 C72 72 88 68 98 58 C108 48 108 34 100 24"
          strokeWidth="2"
          strokeLinecap="round"
          className={animate ? "flower-stroke" : undefined}
          style={animate ? { strokeDasharray: 120, strokeDashoffset: 120 } : undefined}
        />
        <path
          d="M100 24 C88 30 78 38 72 48"
          strokeWidth="1.8"
          strokeLinecap="round"
          className={animate ? "flower-stroke" : undefined}
          style={animate ? { strokeDasharray: 80, strokeDashoffset: 80 } : undefined}
        />
        <path
          d="M60 82 C48 72 32 68 22 58 C12 48 12 34 20 24"
          strokeWidth="2"
          strokeLinecap="round"
          className={animate ? "flower-stroke" : undefined}
          style={animate ? { strokeDasharray: 120, strokeDashoffset: 120 } : undefined}
        />
        <path
          d="M20 24 C32 30 42 38 48 48"
          strokeWidth="1.8"
          strokeLinecap="round"
          className={animate ? "flower-stroke" : undefined}
          style={animate ? { strokeDasharray: 80, strokeDashoffset: 80 } : undefined}
        />
        {/* Center stamens */}
        <circle cx="60" cy="52" r="2" fill="currentColor" className="fill-pink-hot" />
        <path d="M60 48 L60 38 M55 50 L50 44 M65 50 L70 44 M57 54 L52 60 M63 54 L68 60" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
