"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function SearchDrawer() {
  const { searchOpen, setSearchOpen } = useShop();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.includes(q)
    );
  }, [query]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 z-[60] backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          />
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-[70] bg-ivory px-6 md:px-10 py-8 md:py-12"
            role="dialog"
            aria-label="Search"
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4 flex-1 border-b border-charcoal/20 pb-4">
                  <SearchIcon size={20} strokeWidth={1.2} className="text-charcoal/40" />
                  <input
                    autoFocus
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pieces, fabrics, moods..."
                    className="flex-1 bg-transparent text-2xl md:text-3xl font-serif outline-none placeholder:text-charcoal/30"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="ml-6 p-2"
                  aria-label="Close search"
                >
                  <X size={22} strokeWidth={1.2} />
                </button>
              </div>

              {results.length > 0 && (
                <ul className="space-y-4 max-h-[50vh] overflow-y-auto">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-6 group py-2"
                      >
                        <div className="relative w-16 h-20 overflow-hidden bg-sand shrink-0">
                          <Image
                            src={p.images.front}
                            alt={p.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="font-serif text-lg group-hover:text-maroon transition-colors">
                            {p.name}
                          </p>
                          <p className="luxury-label mt-1">{formatPrice(p.price)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {query && results.length === 0 && (
                <p className="font-serif text-charcoal/50 italic">
                  No pieces found — perhaps a custom creation?
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
