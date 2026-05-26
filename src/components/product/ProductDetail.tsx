"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/Button";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const images = [
    product.images.front,
    product.images.back,
    product.images.detail,
    ...product.images.editorial,
    product.images.texture,
  ];

  const details = [
    { label: "Fabric", value: product.fabric },
    { label: "Fit", value: product.fit },
    { label: "Care", value: product.care },
    { label: "Artisan", value: product.artisan },
    { label: "Styling", value: product.stylingNotes },
    { label: "Timeline", value: product.productionTimeline },
  ];

  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10 pt-28 md:pt-36 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-sand img-zoom group">
            <Image
              src={images[activeImage]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative shrink-0 w-20 h-24 overflow-hidden border-2 transition-colors ${
                  activeImage === i ? "border-maroon" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:pt-12">
          <p className="luxury-label mb-4 capitalize">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="editorial-heading text-5xl md:text-6xl text-charcoal">
            {product.name}
          </h1>
          <p className="mt-4 font-serif text-2xl">{formatPrice(product.price)}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="luxury-label border border-charcoal/20 px-3 py-1.5">
              Only {product.quantityLeft} of {product.totalMade} left
            </span>
            {product.madeInAjmer && (
              <span className="luxury-label border border-terracotta/40 text-terracotta px-3 py-1.5">
                Made in Ajmer
              </span>
            )}
          </div>

          <p className="mt-8 font-serif text-lg text-charcoal/80 leading-relaxed italic">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-charcoal/20">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3"
                aria-label="Decrease"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-3"
                aria-label="Increase"
              >
                <Plus size={14} />
              </button>
            </div>
            <Button
              onClick={() => addToCart(product, quantity)}
              className="flex-1 justify-center"
            >
              Add to Bag
            </Button>
            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className="p-3 border border-charcoal/20"
              aria-label="Wishlist"
            >
              <Heart
                size={18}
                className={isInWishlist(product.id) ? "fill-maroon text-maroon" : ""}
                strokeWidth={1.2}
              />
            </button>
          </div>

          <p className="mt-4 luxury-label text-charcoal/50">
            Only few pieces made · {product.productionTimeline}
          </p>

          {/* Details accordion-style */}
          <div className="mt-16 space-y-8 border-t border-charcoal/10 pt-12">
            {details.map((d) => (
              <div key={d.label}>
                <h3 className="luxury-label mb-2">{d.label}</h3>
                <p className="font-serif text-charcoal/80">{d.value}</p>
              </div>
            ))}
          </div>

          {product.styledWith.length > 0 && (
            <div className="mt-12">
              <h3 className="luxury-label mb-4">Styled With</h3>
              <div className="flex flex-wrap gap-2">
                {product.styledWith.map((item) => (
                  <span
                    key={item}
                    className="font-serif text-sm px-4 py-2 bg-sand/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.seenOn.length > 0 && (
            <div className="mt-8">
              <h3 className="luxury-label mb-4">Seen On</h3>
              <div className="flex gap-4">
                {product.seenOn.map((handle) => (
                  <a
                    key={handle}
                    href={`https://instagram.com/${handle.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-label hover:text-maroon transition-colors"
                  >
                    {handle}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Button href="/custom" variant="outline">
              Request Custom Version
            </Button>
          </div>
        </div>
      </div>

      {/* Texture section */}
      <section className="mt-24 md:mt-32">
        <p className="luxury-label mb-6 text-center">Texture & Detail</p>
        <div className="relative aspect-[21/9] overflow-hidden bg-sand">
          <Image
            src={product.images.texture}
            alt="Fabric texture"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
    </div>
  );
}
