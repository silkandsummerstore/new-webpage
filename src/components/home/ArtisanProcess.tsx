"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Embroidery",
    desc: "Mirror work and silk thread — each motif placed by hand in our Ajmer workshop.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    title: "Dyeing",
    desc: "Natural indigo, madder, and sun-faded terracotta — colours that age with you.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=900&q=80",
  },
  {
    title: "Stitching",
    desc: "Invisible finishes, French seams, the kind of detail you feel before you see.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
];

export function ArtisanProcess() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      steps.forEach((_, i) => {
        gsap.from(`[data-artisan="${i}"]`, {
          scrollTrigger: {
            trigger: `[data-artisan="${i}"]`,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    };
    init();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-40 bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <p className="luxury-label text-ivory/50 mb-4">The Making</p>
        <h2 className="editorial-heading text-5xl md:text-7xl mb-20 max-w-2xl">
          Where hands meet heritage
        </h2>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, i) => (
            <div
              key={step.title}
              data-artisan={i}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={`relative aspect-[4/5] overflow-hidden ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <span className="luxury-label text-gold mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl font-light mb-6">
                  {step.title}
                </h3>
                <p className="font-serif text-lg text-ivory/70 leading-relaxed italic">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
