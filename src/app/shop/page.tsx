import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ShopContent } from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description: "Discover handcrafted western, Indian, and indo-western pieces from Rajasthan, India.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="The Edit"
        title="Shop"
        subtitle="Curated pieces — small batches, slow made, meant to be kept."
      />
      <Suspense fallback={<div className="px-6 md:px-10 luxury-label">Loading...</div>}>
        <ShopContent />
      </Suspense>
    </div>
  );
}
