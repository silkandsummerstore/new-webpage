import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Four generations of handwork from Rajasthan, India — a mother–daughter atelier weaving heritage into modern silhouettes.",
};

const timeline = [
  {
    era: "Great-Grandmother",
    title: "Needle, Thread, and First Patterns",
    body: "She learned desi­gning and handwork by hand — sketching blouses on newspaper, cutting by eye, embroidering by evening lamp. Every sari border, every cushion cover in the house was her quiet canvas.",
  },
  {
    era: "Grandmother",
    title: "Keeping Craft Alive at Home",
    body: "Our grandmother inherited those stitches and turned them into a rhythm of life — trousseau blouses, school uniforms, festival outfits sewn on the same old machine. She kept the language of hand-embroidery alive in a fast-changing India.",
  },
  {
    era: "Mother",
    title: "Heritage Designer of the Family",
    body: "Our mother became the family designer — studying cuts, drape, and traditional Rajasthani techniques. She is the one who understands how a neckline flatters, how a border should fall, how heirloom pieces should feel on the body.",
  },
  {
    era: "Daughter",
    title: "Modern Eye, Same Hands",
    body: "The daughter grew up watching fittings in the living room, colour cards on the dining table, and threads everywhere. She brings in cleaner lines, comfort-first silhouettes, and a modern editorial mood — while keeping every piece rooted in Indian craft.",
  },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="Heritage"
        title="A Mother–Daughter Story"
        subtitle="Four generations of women, one shared thread — desi­gning and handwork passed down like heirlooms."
      />

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pb-32">
        <div className="relative border-l border-charcoal/10 pl-8 md:pl-12">
          <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-pink-hot -translate-x-1/2" />
          {timeline.map((item, index) => (
            <div key={item.era} className="mb-14 md:mb-20">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                <p className="luxury-label text-pink-hot mb-2 md:mb-0">{item.era}</p>
                <h2 className="editorial-heading text-3xl md:text-5xl text-charcoal">
                  {item.title}
                </h2>
              </div>
              <p className="mt-4 max-w-2xl font-serif text-lg text-charcoal/80 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-20 max-w-3xl">
          <p className="luxury-label mb-3">Today</p>
          <p className="font-serif text-lg md:text-xl text-charcoal/80 leading-relaxed">
            Silk &amp; Summer is a mother–daughter run business from Rajasthan, India — the mother
            bringing decades of heritage desi­gning and handwork, the daughter adding a modern,
            wearable edge. Every piece you see is part family story, part future heirloom.
          </p>
        </div>
      </section>
    </div>
  );
}

