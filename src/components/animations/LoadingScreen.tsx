"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { FlowerMark } from "@/components/brand/FlowerMark";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"draw" | "logo" | "exit" | "done">("draw");
  const [visible, setVisible] = useState(true);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(false);
      setPhase("done");
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const run = async () => {
      const { gsap } = await import("gsap");

      await new Promise((r) => setTimeout(r, 200));

      const strokes = document.querySelectorAll(".loader-flower .flower-stroke");
      if (strokes.length) {
        gsap.to(strokes, {
          strokeDashoffset: 0,
          duration: 1.8,
          stagger: 0.12,
          ease: "power2.inOut",
        });
      }

      await new Promise((r) => setTimeout(r, 1600));
      setPhase("logo");

      await new Promise((r) => setTimeout(r, 1400));
      setPhase("exit");

      await new Promise((r) => setTimeout(r, 900));
      setVisible(false);
      setPhase("done");
      document.body.style.overflow = "";
    };

    run();

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done" && !visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-blush overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Lando-style expanding wipe */}
          <motion.div
            className="absolute inset-0 bg-white origin-bottom"
            initial={{ scaleY: 0 }}
            animate={phase === "exit" ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Phase 1: flower draw */}
            <motion.div
              className="loader-flower w-28 h-28 md:w-36 md:h-36 mb-8"
              animate={{
                opacity: phase === "draw" ? 1 : phase === "logo" ? 0 : 0,
                scale: phase === "logo" ? 0.85 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              <FlowerMark animate strokeClassName="stroke-pink-hot" />
            </motion.div>

            {/* Phase 2: full logo reveal */}
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{
                opacity: phase === "logo" || phase === "exit" ? 1 : 0,
                y: phase === "logo" || phase === "exit" ? 0 : 24,
                filter: phase === "logo" || phase === "exit" ? "blur(0px)" : "blur(8px)",
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={phase === "draw" ? "absolute pointer-events-none" : ""}
            >
              <BrandLogo size="xl" showHindi layout="stacked" />
            </motion.div>

            <motion.p
              className="luxury-label text-pink-rose/80 mt-10 tracking-[0.4em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "logo" ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
