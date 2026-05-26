"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/shop/ProductCard";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/Button";

export default function WishlistPage() {
  const { wishlist } = useShop();

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="Saved"
        title="Wishlist"
        subtitle="Pieces you're dreaming about."
      />
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal/50 italic mb-8">
              Your wishlist is empty.
            </p>
            <Button href="/shop">Discover Pieces</Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
