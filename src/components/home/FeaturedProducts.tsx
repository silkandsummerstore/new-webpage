"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useShop } from "@/context/ShopContext";

export function FeaturedProducts() {
  const { toggleWishlist, isInWishlist } = useShop();
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="luxury-label mb-4">New Arrivals</p>
            <h2 className="editorial-heading text-5xl md:text-6xl text-charcoal">
              Pieces worth keeping
            </h2>
          </div>
          <Link href="/shop" className="luxury-label hover:text-maroon transition-colors hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
          {featured.map((product) => (
            <article key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-sand img-zoom">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.images.front}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 50vw, 25vw"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 p-2 bg-ivory/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    size={16}
                    className={isInWishlist(product.id) ? "fill-maroon text-maroon" : ""}
                    strokeWidth={1.2}
                  />
                </button>
                {product.quantityLeft <= 3 && (
                  <span className="absolute bottom-4 left-4 luxury-label bg-ivory/90 px-2 py-1">
                    Only {product.quantityLeft} left
                  </span>
                )}
              </div>
              <div className="mt-4">
                <Link href={`/product/${product.slug}`}>
                  <h3 className="font-serif text-lg group-hover:text-maroon transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="luxury-label mt-1">{formatPrice(product.price)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
