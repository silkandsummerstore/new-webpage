"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const categories = [
  { value: "", label: "All" },
  { value: "western", label: "Western" },
  { value: "indian", label: "Indian" },
  { value: "indo-western", label: "Indo-Western" },
  { value: "bags", label: "Bags" },
  { value: "one-off", label: "One-Off" },
  { value: "capsule", label: "Capsules" },
];

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price ↑" },
  { value: "price-desc", label: "Price ↓" },
];

export function ShopFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const vibe = searchParams.get("vibe") || "";
  const sort = searchParams.get("sort") || "newest";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-y border-charcoal/10">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => updateParam("category", cat.value)}
            className={cn(
              "px-4 py-2 text-[10px] uppercase tracking-editorial transition-colors",
              category === cat.value
                ? "bg-charcoal text-ivory"
                : "text-charcoal/60 hover:text-charcoal"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {vibe && (
          <span className="luxury-label text-terracotta">
            Vibe: {vibe.replace(/-/g, " ")}
            <button
              type="button"
              onClick={() => updateParam("vibe", "")}
              className="ml-2 hover:text-maroon"
            >
              ×
            </button>
          </span>
        )}
        <select
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="bg-transparent luxury-label outline-none cursor-pointer"
          aria-label="Sort products"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
