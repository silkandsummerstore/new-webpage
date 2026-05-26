"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useShop } from "@/context/ShopContext";

export function ProductCard({ product }: { product: Product }) {
  const { toggleWishlist, isInWishlist } = useShop();

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-sand img-zoom">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images.front}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width:768px) 50vw, 33vw"
          />
        </Link>
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="absolute top-4 right-4 p-2 bg-ivory/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
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
      <div className="mt-4 flex justify-between items-start gap-2">
        <div>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-lg group-hover:text-maroon transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="luxury-label mt-1 capitalize">{product.category.replace("-", " ")}</p>
        </div>
        <p className="font-serif text-sm shrink-0">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
