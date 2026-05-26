import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const stories: Record<string, { title: string; content: string[]; image: string }> = {
  "haveli-light": {
    title: "Haveli Light",
    image: "https://images.unsplash.com/photo-1610030469983-98e550b16033?w=1920&q=80",
    content: [
      "There is a hour in Ajmer when the haveli walls turn honey. We shot this edit there — between shadow and flame.",
      "Mirror work catches what the eye almost misses. These pieces were made for that light.",
    ],
  },
  "desert-bloom": {
    title: "Desert Bloom",
    image: "https://images.unsplash.com/photo-1469334031218-e42a5846b783?w=1920&q=80",
    content: [
      "Festive, but never loud. Marigold against indigo. The desert teaches restraint even in abundance.",
    ],
  },
  "the-undone": {
    title: "The Undone",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1920&q=80",
    content: [
      "We keep returning to this idea: beauty that isn't trying. Clothes that feel like you've always owned them.",
      "Heirloom doesn't mean old. It means yours.",
    ],
  },
};

export default async function LookbookStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories[slug];
  if (!story) notFound();

  return (
    <article>
      <div className="relative h-[70vh] min-h-[500px]">
        <Image src={story.image} alt={story.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="absolute bottom-12 left-6 md:left-10">
          <Link href="/lookbook" className="luxury-label text-ivory/70 hover:text-ivory mb-4 block">
            ← Lookbook
          </Link>
          <h1 className="editorial-heading text-6xl md:text-8xl text-ivory">{story.title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 md:px-10 py-20 space-y-8">
        {story.content.map((p, i) => (
          <p key={i} className="font-serif text-xl text-charcoal/80 leading-relaxed italic">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
