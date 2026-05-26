"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/brand/BrandLogo";

const heroImages = [
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e42a5846b783?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502716118384-89f396e5c0e8?w=1920&q=80&auto=format&fit=crop",
];

export function Hero() {
  const slideRef = useRef(0);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      slideRef.current = (slideRef.current + 1) % heroImages.length;
      const imgs = imgRef.current?.querySelectorAll("[data-slide]");
      imgs?.forEach((el, i) => {
        (el as HTMLElement).style.opacity = i === slideRef.current ? "1" : "0";
      });
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      gsap.from("[data-hero-reveal]", {
        y: 100,
        opacity: 0,
        duration: 1.3,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });
    };
    const t = setTimeout(() => initGSAP(), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-blush">
      <div ref={imgRef} className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={src}
            data-slide
            className="absolute inset-0 transition-opacity duration-[2200ms] ease-in-out"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="object-cover scale-[1.03]"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-pink-blush/20 to-charcoal/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between py-28 md:py-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div data-hero-reveal className="hidden md:block opacity-0">
          <BrandLogo size="lg" variant="light" />
        </div>

        <div className="mt-auto">
          <p className="luxury-label text-white/80 mb-4" data-hero-reveal>
            Contemporary Indian · Maximalist Minimal
          </p>
          <h1 className="max-w-5xl overflow-hidden" data-hero-reveal>
            <span className="block font-display text-[clamp(3rem,11vw,8rem)] lowercase text-white leading-[0.88] tracking-tight">
              crafted for
            </span>
            <span className="block font-display text-[clamp(3rem,11vw,8rem)] lowercase text-pink-blush leading-[0.88] tracking-tight italic">
              the beautifully undone
            </span>
          </h1>
          <p
            className="mt-6 max-w-md font-serif text-lg text-white/75 italic"
            data-hero-reveal
          >
            Indian artistry, reimagined. Wearable heirlooms for now.
          </p>

          <div className="mt-10 flex flex-wrap gap-4" data-hero-reveal>
            <Button href="/shop" variant="primary">
              Shop Collection
            </Button>
            <Button href="/custom" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-pink-hot">
              Custom Pieces
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="luxury-label text-white/60">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
}
