import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { archivePieces } from "@/data/products";

export const metadata: Metadata = {
  title: "Archive",
  description: "Sold-out collections — a collectible history of Silk & Summer.",
};

export default function ArchivePage() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="Collectible History"
        title="Archive"
        subtitle="Gone, but not forgotten. Each edit a moment in time."
      />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {archivePieces.map((piece) => (
            <article key={piece.id} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <Image
                  src={piece.image}
                  alt={piece.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  sizes="33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="luxury-label text-ivory border border-ivory/50 px-4 py-2">
                    Sold Out
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-2xl text-charcoal">{piece.name}</h3>
                  <span className="luxury-label">{piece.season}</span>
                </div>
                <p className="mt-3 font-serif text-charcoal/60 italic leading-relaxed">
                  {piece.story}
                </p>
                <p className="luxury-label mt-4 text-charcoal/40">{piece.year}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
