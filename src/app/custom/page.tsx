import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Custom Pieces",
  description: "Design your own heirloom. Bespoke consultations from our Rajasthan atelier.",
};

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "A 45-minute conversation — in person at our Rajasthan studio or over video. We listen to your story, occasion, and aesthetic.",
  },
  {
    num: "02",
    title: "Moodboard",
    desc: "Share references, Pinterest boards, heirloom fabrics. We sketch together and refine until it feels unmistakably yours.",
  },
  {
    num: "03",
    title: "Measurements",
    desc: "Precise fittings in-studio or guided self-measurement. We account for drape, movement, and how you actually live in clothes.",
  },
  {
    num: "04",
    title: "Creation",
    desc: "3–6 weeks of artisan work. Embroidery, dyeing, stitching — with updates sent like letters from the workshop.",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Final fitting. Your piece arrives wrapped in muslin, with care notes and the artisan's name inside.",
  },
];

export default function CustomPage() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="Bespoke"
        title="Design Your Piece"
        subtitle="Not made to measure — made to mean something."
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 mb-24">
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Custom atelier"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/30" />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center mb-24">
        <p className="font-serif text-xl md:text-2xl text-charcoal/80 leading-relaxed italic">
          Custom pieces begin at ₹8,500 for separates, ₹15,000 for full garments.
          Final pricing shared after consultation — never before we understand your vision.
        </p>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-charcoal/10 pt-8">
              <span className="luxury-label text-gold">{step.num}</span>
              <h3 className="font-serif text-3xl mt-4 mb-4">{step.title}</h3>
              <p className="font-serif text-charcoal/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design form section */}
      <section className="mt-32 mx-auto max-w-2xl px-6 md:px-10">
        <h2 className="editorial-heading text-4xl md:text-5xl text-center mb-12">
          Begin Your Story
        </h2>
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="luxury-label block mb-2">Name</label>
              <input
                id="name"
                type="text"
                className="w-full border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-maroon transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="luxury-label block mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-maroon transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="vision" className="luxury-label block mb-2">Your Vision</label>
            <textarea
              id="vision"
              rows={4}
              placeholder="Tell us about the piece you dream of..."
              className="w-full border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-maroon transition-colors resize-none"
            />
          </div>
          <div>
            <label htmlFor="moodboard" className="luxury-label block mb-2">
              Moodboard Link (optional)
            </label>
            <input
              id="moodboard"
              type="url"
              placeholder="Pinterest, Drive, or Instagram link"
              className="w-full border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-maroon transition-colors"
            />
          </div>
          <div className="text-center pt-4">
            <Button type="submit">Book Consultation</Button>
            <p className="luxury-label mt-6 text-charcoal/40">
              Or WhatsApp us directly for faster response
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-label mt-2 inline-block hover:text-maroon transition-colors"
            >
              Message on WhatsApp →
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
