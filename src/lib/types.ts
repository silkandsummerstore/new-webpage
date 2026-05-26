export type ProductCategory =
  | "western"
  | "indian"
  | "indo-western"
  | "bags"
  | "one-off"
  | "capsule";

export type Vibe =
  | "vacation-maximalism"
  | "indie-festive"
  | "soft-indian-romance"
  | "everyday-heirlooms"
  | "minimal-drama"
  | "city-girl-ethnic"
  | "modern-muse";

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  currency: string;
  category: ProductCategory;
  vibes: Vibe[];
  description: string;
  fabric: string;
  fit: string;
  care: string;
  artisan: string;
  stylingNotes: string;
  productionTimeline: string;
  quantityLeft: number;
  totalMade: number;
  images: {
    front: string;
    back: string;
    detail: string;
    editorial: string[];
    texture: string;
  };
  styledWith: string[];
  seenOn: string[];
  madeInAjmer: boolean;
  shopifyId?: string;
  soldOut?: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface ArchivePiece {
  id: string;
  name: string;
  season: string;
  year: number;
  image: string;
  story: string;
}
