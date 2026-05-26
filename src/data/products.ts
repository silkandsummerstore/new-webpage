import type { Product, Collection, ArchivePiece } from "@/lib/types";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const collections: Collection[] = [
  {
    id: "western",
    slug: "western",
    title: "Western",
    subtitle: "Undone silhouettes, sun-washed ease",
    image: img("photo-1595777457583-95e059d581b8"),
    href: "/shop?category=western",
  },
  {
    id: "indian",
    slug: "indian",
    title: "Indian",
    subtitle: "Heritage draped in modern light",
    image: img("photo-1610030469983-98e550b16033"),
    href: "/shop?category=indian",
  },
  {
    id: "indo-western",
    slug: "indo-western",
    title: "Indo-Western",
    subtitle: "Where courtyards meet city streets",
    image: img("photo-1539109136881-3be0616acf4b"),
    href: "/shop?category=indo-western",
  },
  {
    id: "bags",
    slug: "bags",
    title: "Bags",
    subtitle: "Carried heirlooms, hand-stitched",
    image: img("photo-1548036328-c9fa89d128fa"),
    href: "/shop?category=bags",
  },
  {
    id: "one-off",
    slug: "one-off",
    title: "One-Off Pieces",
    subtitle: "Singular. Unrepeatable. Yours.",
    image: img("photo-1496747611176-843222e1e273"),
    href: "/shop?category=one-off",
  },
  {
    id: "capsule",
    slug: "capsule",
    title: "Artisanal Capsules",
    subtitle: "Small batches from our Ajmer atelier",
    image: img("photo-1558618666-fcd25c85cd64"),
    href: "/shop?category=capsule",
  },
];

export const vibes = [
  { slug: "vacation-maximalism", title: "Vacation Maximalism", image: img("photo-1509631179647-0177331693ae") },
  { slug: "indie-festive", title: "Indie Festive", image: img("photo-1469334031218-e42a5846b783") },
  { slug: "soft-indian-romance", title: "Soft Indian Romance", image: img("photo-1610030469983-98e550b16033") },
  { slug: "everyday-heirlooms", title: "Everyday Heirlooms", image: img("photo-1515372039744-b8f02a3ae446") },
  { slug: "minimal-drama", title: "Minimal Drama", image: img("photo-1483985988355-763728e55e9e") },
  { slug: "city-girl-ethnic", title: "City Girl Ethnic", image: img("photo-1539109136881-3be0616acf4b") },
  { slug: "modern-muse", title: "Modern Muse", image: img("photo-1502716118384-89f396e5c0e8") },
] as const;

export const products: Product[] = [
  {
    id: "1",
    slug: "gulmohar-set",
    name: "Gulmohar Set",
    price: 12800,
    currency: "INR",
    category: "indo-western",
    vibes: ["soft-indian-romance", "everyday-heirlooms"],
    description:
      "A sun-faded co-ord born in our Ajmer atelier — block-printed cotton with hand-finished edges. Wears like memory.",
    fabric: "Hand-blocked mul cotton, natural dyes",
    fit: "Relaxed, true to size. Model wears S.",
    care: "Gentle cold wash. Dry in shade. Iron on reverse.",
    artisan: "Stitched by Sunita ji & embroidered by the Meena collective, Ajmer.",
    stylingNotes: "Pair with oxidised silver and bare shoulders at golden hour.",
    productionTimeline: "14–18 days from order",
    quantityLeft: 3,
    totalMade: 8,
    images: {
      front: img("photo-1610030469983-98e550b16033"),
      back: img("photo-1595777457583-95e059d581b8"),
      detail: img("photo-1558618666-fcd25c85cd64", 800),
      editorial: [img("photo-1469334031218-e42a5846b783"), img("photo-1515372039744-b8f02a3ae446")],
      texture: img("photo-1558618666-fcd25c85cd64", 800),
    },
    styledWith: ["Mehr Mirror Clutch", "Kajal Kolhapuri"],
    seenOn: ["@aanyasharma", "@indiecloset"],
    madeInAjmer: true,
    shopifyId: "gid://shopify/Product/1",
  },
  {
    id: "2",
    slug: "chameli-dress",
    name: "Chameli Dress",
    price: 9600,
    currency: "INR",
    category: "western",
    vibes: ["vacation-maximalism", "modern-muse"],
    description: "Bias-cut linen dress with terracotta hand embroidery along the hem — a modern heirloom.",
    fabric: "European linen, silk thread embroidery",
    fit: "Fitted bodice, flowing skirt. Size up for ease.",
    care: "Dry clean recommended for embroidery longevity.",
    artisan: "Cut & sewn in Ajmer; embroidery by Rekha Devi.",
    stylingNotes: "Belt with antique gold hardware for evening.",
    productionTimeline: "10–12 days",
    quantityLeft: 5,
    totalMade: 12,
    images: {
      front: img("photo-1595777457583-95e059d581b8"),
      back: img("photo-1496747611176-843222e1e273"),
      detail: img("photo-1483985988355-763728e55e9e", 800),
      editorial: [img("photo-1509631179647-0177331693ae")],
      texture: img("photo-1558618666-fcd25c85cd64", 800),
    },
    styledWith: ["Sand Kolhapuri", "Temple Hoops"],
    seenOn: ["@desigirl"],
    madeInAjmer: true,
    shopifyId: "gid://shopify/Product/2",
  },
  {
    id: "3",
    slug: "mehr-mirror-clutch",
    name: "Mehr Mirror Clutch",
    price: 4200,
    currency: "INR",
    category: "bags",
    vibes: ["indie-festive", "city-girl-ethnic"],
    description: "Shisha-work clutch that catches courtyard light — each mirror placed by hand.",
    fabric: "Silk base, glass shisha, cotton lining",
    fit: "One size. Detachable chain strap.",
    care: "Spot clean only. Store flat.",
    artisan: "Shisha work by Farida Begum, 3 generations of craft.",
    stylingNotes: "Evening festive or minimal white kurta contrast.",
    productionTimeline: "7–10 days",
    quantityLeft: 2,
    totalMade: 6,
    images: {
      front: img("photo-1548036328-c9fa89d128fa"),
      back: img("photo-1590871190290-cb726a652443"),
      detail: img("photo-1553062407-98eeb64c6a62", 800),
      editorial: [img("photo-1469334031218-e42a5846b783")],
      texture: img("photo-1553062407-98eeb64c6a62", 800),
    },
    styledWith: ["Gulmohar Set", "Chameli Dress"],
    seenOn: [],
    madeInAjmer: true,
    shopifyId: "gid://shopify/Product/3",
  },
  {
    id: "4",
    slug: "thar-one-off",
    name: "Thar One-Off",
    price: 18500,
    currency: "INR",
    category: "one-off",
    vibes: ["vacation-maximalism", "minimal-drama"],
    description: "A singular piece — indigo overdyed, patchworked from vintage Rajasthani textiles. Will not be remade.",
    fabric: "Vintage cotton mashru, natural indigo",
    fit: "Oversized. One size.",
    care: "Dry clean only.",
    artisan: "Concept & construction: Silk & Summer atelier.",
    stylingNotes: "Let it be the outfit. Nothing else needed.",
    productionTimeline: "Already made — ships in 3 days",
    quantityLeft: 1,
    totalMade: 1,
    images: {
      front: img("photo-1496747611176-843222e1e273"),
      back: img("photo-1539109136881-3be0616acf4b"),
      detail: img("photo-1558618666-fcd25c85cd64", 800),
      editorial: [img("photo-1502716118384-89f396e5c0e8")],
      texture: img("photo-1558618666-fcd25c85cd64", 800),
    },
    styledWith: [],
    seenOn: [],
    madeInAjmer: true,
    shopifyId: "gid://shopify/Product/4",
  },
];

export const archivePieces: ArchivePiece[] = [
  {
    id: "a1",
    name: "Sirohi Summer",
    season: "SS24",
    year: 2024,
    image: img("photo-1509631179647-0177331693ae"),
    story: "Twelve pieces. All gone. Worn across Jaipur rooftops and Goa verandas.",
  },
  {
    id: "a2",
    name: "Monsoon Muse",
    season: "AW23",
    year: 2023,
    image: img("photo-1469334031218-e42a5846b783"),
    story: "Indigo rain coats and hand-painted umbrellas. A love letter to grey skies.",
  },
  {
    id: "a3",
    name: "Haveli Nights",
    season: "Festive 23",
    year: 2023,
    image: img("photo-1610030469983-98e550b16033"),
    story: "Mirror work and candlelight. Sold out in nine days.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: string) {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}

export function getProductsByVibe(vibe?: string) {
  if (!vibe) return products;
  return products.filter((p) => p.vibes.includes(vibe as Product["vibes"][number]));
}
