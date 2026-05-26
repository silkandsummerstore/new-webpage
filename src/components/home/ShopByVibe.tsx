"use client";

import Link from "next/link";
import Image from "next/image";
import { vibes } from "@/data/products";

export function ShopByVibe() {
  return (
    <section className="py-24 md:py-32" id="vibes">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-16">
        <p className="luxury-label mb-4">Mood Board</p>
        <h2 className="editorial-heading text-5xl md:text-7xl text-charcoal">
          Shop by Vibe
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {vibes.map((vibe, i) => (
          <Link
            key={vibe.slug}
            href={`/shop?vibe=${vibe.slug}`}
            data-cursor-hover
            className={`group relative overflow-hidden img-zoom ${
              i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:min-h-[70vh]" : "aspect-[4/5]"
            }`}
          >
            <Image
              src={vibe.image}
              alt={vibe.title}
              fill
              className="object-cover"
              sizes={i === 0 ? "66vw" : "33vw"}
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-700" />
            <div className="absolute inset-0 flex items-end p-8 md:p-10">
              <h3
                className={`font-serif text-ivory font-light ${
                  i === 0 ? "text-5xl md:text-7xl" : "text-3xl md:text-4xl"
                }`}
              >
                {vibe.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
