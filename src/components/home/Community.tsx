"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const communityPosts = [
  {
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    handle: "@aanyasharma",
    caption: "Gulmohar set, Ana Sagar sunset",
    rotate: -3,
  },
  {
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    handle: "@indiecloset",
    caption: "Chameli dress, haveli mornings",
    rotate: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1502716118384-89f396e5c0e8?w=600&q=80",
    handle: "@desigirl",
    caption: "Thar one-off, Jodhpur walls",
    rotate: -2,
  },
  {
    image: "https://images.unsplash.com/photo-1469334031218-e42a5846b783?w=600&q=80",
    handle: "@modernmuse.in",
    caption: "Mehr clutch, festive eve",
    rotate: 4,
  },
];

export function Community() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="luxury-label mb-4">The Circle</p>
          <h2 className="editorial-heading text-5xl md:text-7xl text-charcoal">
            Worn & Loved
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-label hover:text-maroon transition-colors"
        >
          @silkandsummer on Instagram →
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-6">
        {communityPosts.map((post, i) => (
          <motion.div
            key={post.handle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            style={{ rotate: post.rotate }}
            className="relative w-56 md:w-64 bg-ivory p-3 pb-12 shadow-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-charcoal/80">
              {post.caption}
            </p>
            <p className="absolute bottom-1 left-4 luxury-label text-[9px]">
              {post.handle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
