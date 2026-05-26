"use client";

const items = [
  "Modern Heirlooms",
  "Handcrafted in India",
  "Small Batch",
  "रेशम · Silk",
  "One of Few",
  "ग्रीष्म · Summer",
  "Affordable Luxury",
];

export function MarqueeBand() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-pink-blush/60 bg-white py-4">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {row.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="mx-8 font-display text-2xl md:text-3xl lowercase text-pink-hot/90"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
