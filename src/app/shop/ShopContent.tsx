"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopFilters } from "@/components/shop/ShopFilters";

export function ShopContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const vibe = searchParams.get("vibe");
  const sort = searchParams.get("sort") || "newest";

  const filtered = useMemo(() => {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    if (vibe) list = list.filter((p) => p.vibes.includes(vibe as (typeof p.vibes)[number]));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [category, vibe, sort]);

  return (
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <ShopFilters />
      {filtered.length === 0 ? (
        <p className="py-20 font-serif text-xl text-charcoal/50 italic text-center">
          No pieces in this edit yet — explore custom creations.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16 mt-12">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
