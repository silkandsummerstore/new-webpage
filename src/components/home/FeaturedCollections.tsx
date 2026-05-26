"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { collections } from "@/data/products";

export function FeaturedCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("[data-collection-card]", {
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    };
    init();
  }, []);

  return (
    <section className="py-24 md:py-32 overflow-hidden" id="collections">
      <div className="px-6 md:px-10 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-[1600px] mx-auto">
        <div>
          <p className="luxury-label mb-4">Curated Edits</p>
          <h2 className="editorial-heading text-5xl md:text-7xl text-charcoal">
            Featured Collections
          </h2>
        </div>
        <p className="font-serif text-lg text-charcoal/60 max-w-sm italic">
          Each edit reads like a magazine cover — discover your silhouette.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto editorial-scroll hide-scrollbar px-6 md:px-10 pb-4"
      >
        {collections.map((col, i) => (
          <Link
            key={col.id}
            href={col.href}
            data-collection-card
            data-cursor-hover
            className="group relative shrink-0 w-[75vw] md:w-[42vw] lg:w-[32vw] aspect-[3/4] overflow-hidden"
          >
            <Image
              src={col.image}
              alt={col.title}
              fill
              className="object-cover transition-transform duration-[1.4s] ease-luxury group-hover:scale-105"
              sizes="(max-width:768px) 75vw, 32vw"
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-hot/80 via-pink-rose/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="luxury-label text-ivory/60 mb-2 block">
                0{i + 1}
              </span>
              <h3 className="font-serif text-4xl md:text-5xl text-ivory font-light">
                {col.title}
              </h3>
              <p className="mt-2 font-serif text-ivory/70 italic text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {col.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
