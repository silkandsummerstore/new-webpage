"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const storyImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Hand stitching detail",
    label: "Stitching",
  },
  {
    src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    alt: "Fabric closeup",
    label: "Fabric",
  },
  {
    src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    alt: "Workshop",
    label: "Atelier",
  },
  {
    src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    alt: "Design sketch",
    label: "Sketch",
  },
];

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("[data-story-text]", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to("[data-story-parallax]", {
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 1,
        },
        y: -40,
        ease: "none",
      });
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} id="story" className="py-24 md:py-40 bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="luxury-label mb-4" data-story-text>
              Our Story
            </p>
            <h2
              data-story-text
              className="editorial-heading text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8"
            >
              Born in Ajmer,
              <br />
              <span className="italic text-maroon">worn everywhere.</span>
            </h2>
            <div className="space-y-6 font-serif text-lg text-charcoal/80 leading-relaxed" data-story-text>
              <p>
                Silk & Summer began in a sun-washed atelier near Ana Sagar — where
                Rajasthani artisans meet contemporary silhouettes. We don&apos;t chase
                seasons. We chase feeling.
              </p>
              <p>
                Every piece is small-batch or one-off. Hand-blocked, hand-stitched,
                hand-finished. We work with local craftspeople who have carried
                techniques through generations — and give them room to experiment.
              </p>
              <p>
                This is wearable art. Affordable luxury. Modern heirlooms you&apos;ll
                pass down, or simply never take off.
              </p>
            </div>
            <div className="mt-10" data-story-text>
              <Button href="/lookbook">Read the Journal</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {storyImages.map((img, i) => (
              <div
                key={img.label}
                data-story-parallax
                className={`relative overflow-hidden bg-warm img-zoom ${
                  i % 2 === 1 ? "mt-12" : ""
                } ${i === 2 ? "col-span-2 aspect-[2/1]" : "aspect-[3/4]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
                <span className="absolute bottom-4 left-4 luxury-label text-ivory/80">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
