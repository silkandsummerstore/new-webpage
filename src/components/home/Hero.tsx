"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const heroImages = [
  "https://images.unsplash.com/photo-1610030469983-98e550b16033?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e42a5846b783?w=1920&q=80&auto=format&fit=crop",
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      gsap.from("[data-hero-title]", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from("[data-hero-cta]", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.9,
      });
    };
    initGSAP();
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Cinematic slideshow */}
      <div ref={imgRef} className="absolute inset-0">
        {heroImages.map((src, i) => (
          <div
            key={src}
            data-slide
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              className="object-cover scale-105"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Layered typography */}
      <div className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32 px-6 md:px-10 max-w-[1600px] mx-auto">
        <p className="luxury-label text-ivory/70 mb-6" data-hero-title>
          Ajmer · Rajasthan
        </p>
        <h1 className="max-w-4xl">
          <span
            data-hero-title
            className="block font-serif text-[clamp(2.5rem,8vw,6.5rem)] font-light text-ivory leading-[0.95] tracking-tight"
          >
            Modern heirlooms
          </span>
          <span
            data-hero-title
            className="block font-serif text-[clamp(2.5rem,8vw,6.5rem)] font-light text-ivory/90 leading-[0.95] tracking-tight italic mt-1"
          >
            from Rajasthan.
          </span>
        </h1>
        <p
          data-hero-title
          className="mt-6 max-w-md font-serif text-lg md:text-xl text-ivory/70 italic"
        >
          Crafted for the beautifully undone. Indian artistry, reimagined.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 md:gap-6" data-hero-cta>
          <Button href="/shop" variant="primary" className="bg-ivory text-charcoal hover:bg-sand">
            Shop Collection
          </Button>
          <Button href="/custom" variant="outline" className="border-ivory/40 text-ivory hover:border-ivory hover:text-ivory">
            Explore Custom Pieces
          </Button>
          <Button href="/contact" variant="ghost" className="text-ivory/80 hover:text-ivory">
            Visit Boutique
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="luxury-label text-ivory/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/60 to-transparent" />
      </motion.div>
    </section>
  );
}
