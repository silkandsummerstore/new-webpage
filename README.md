# Silk & Summer

A cinematic, editorial luxury fashion experience for a contemporary Indian label based in Rajasthan, India.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** — luxury design system
- **Framer Motion** — UI animations
- **GSAP** — cinematic scroll transitions
- **Shopify-ready** — headless commerce scaffold in `src/lib/shopify.ts`

## Logo

Bilingual lockup in the top-left navigation:

- **रेशम** (Silk) — top
- **Silk & Summer** — center with marigold motif
- **ग्रीष्म** (Summer) — bottom

## Getting Started

```bash
cd silk-and-summer
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Cinematic homepage |
| `/shop` | Editorial shop with filters |
| `/product/[slug]` | Immersive product pages |
| `/custom` | Bespoke consultation flow |
| `/lookbook` | Magazine-style editorials |
| `/archive` | Sold-out collectible collections |
| `/wishlist` | Saved pieces |
| `/checkout` | Secure checkout (connect Shopify/Razorpay) |

## Shopify Integration

1. Copy `.env.example` to `.env.local`
2. Add your Storefront API credentials
3. Replace `src/data/products.ts` fetch with `shopifyFetch(PRODUCTS_QUERY)`

## Brand Photography

Replace Unsplash placeholders with your Rajasthan editorial shoots — havelis, courtyards, artisan closeups.
