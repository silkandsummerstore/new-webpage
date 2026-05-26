"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function OneOfFew() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("[data-oneof]", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        scale: 0.95,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });
    };
    init();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e273?w=1920&q=80"
          alt="One of few editorial"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-pink-hot/75 mix-blend-multiply" />
      </div>

      <div data-oneof className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 text-center text-ivory">
        <p className="luxury-label text-ivory/60 mb-6">Exclusivity</p>
        <h2 className="editorial-heading text-6xl md:text-8xl lg:text-9xl font-light mb-6">
          One of Few
        </h2>
        <p className="mx-auto max-w-xl font-serif text-xl md:text-2xl italic text-ivory/80 leading-relaxed">
          Limited quantities. Handmade variations. Slow, intentional production —
          because mass was never the dream.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          {["8 pieces max per style", "Never reproduced exactly", "Made to order available"].map(
            (item) => (
              <li key={item} className="luxury-label text-ivory/70">
                {item}
              </li>
            )
          )}
        </ul>
        <div className="mt-14">
          <Button href="/shop?category=one-off" variant="primary" className="bg-white text-pink-hot hover:bg-blush">
            Discover One-Offs
          </Button>
        </div>
      </div>
    </section>
  );
}
