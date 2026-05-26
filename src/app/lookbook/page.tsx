import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Editorial campaigns and seasonal edits from Silk & Summer.",
};

const editorials = [
  {
    title: "Haveli Light",
    season: "SS25",
    excerpt: "Golden hour in old Rajasthan courtyards — mirror work catching last sun.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550b16033?w=1200&q=80",
    slug: "haveli-light",
  },
  {
    title: "Desert Bloom",
    season: "Festive 24",
    excerpt: "Maximalism softened — marigold, indigo, and bare shoulders.",
    image: "https://images.unsplash.com/photo-1469334031218-e42a5846b783?w=1200&q=80",
    slug: "desert-bloom",
  },
  {
    title: "The Undone",
    season: "Journal",
    excerpt: "On beauty that isn't trying — an essay on wearing heirloom ease.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=80",
    slug: "the-undone",
  },
];

export default function LookbookPage() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="Editorial"
        title="Lookbook"
        subtitle="Campaigns, seasonal edits, and journal entries — fashion as story."
      />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 space-y-24 md:space-y-32">
        {editorials.map((edit, i) => (
          <article
            key={edit.slug}
            className={`grid md:grid-cols-12 gap-8 items-center ${
              i % 2 === 1 ? "" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-sand ${
                i % 2 === 0
                  ? "md:col-span-7 aspect-[4/5] md:aspect-auto md:min-h-[80vh]"
                  : "md:col-span-7 md:col-start-6 aspect-[4/5] md:aspect-auto md:min-h-[80vh] md:row-start-1"
              }`}
            >
              <Image
                src={edit.image}
                alt={edit.title}
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
            <div
              className={`md:col-span-4 flex flex-col justify-center ${
                i % 2 === 0 ? "md:col-start-9" : "md:col-start-1 md:row-start-1"
              }`}
            >
              <span className="luxury-label text-terracotta mb-4">{edit.season}</span>
              <h2 className="editorial-heading text-5xl md:text-6xl text-charcoal mb-6">
                {edit.title}
              </h2>
              <p className="font-serif text-lg text-charcoal/70 italic leading-relaxed mb-8">
                {edit.excerpt}
              </p>
              <Link
                href={`/lookbook/${edit.slug}`}
                className="luxury-label hover:text-maroon transition-colors w-fit"
              >
                Read Story →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
