"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { useShop } from "@/context/ShopContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Custom", href: "/custom" },
  { label: "Archive", href: "/archive" },
  { label: "Story", href: "/#story" },
];

export function Navigation({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setSearchOpen, setCartOpen, cartCount, wishlistCount } = useShop();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isLight = transparent && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury",
          scrolled || menuOpen
            ? "bg-white/85 backdrop-blur-xl py-3 shadow-sm shadow-pink-blush/30"
            : "bg-transparent py-5 md:py-7"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          <BrandLogo
            variant={isLight ? "light" : "color"}
            size="md"
            showHindi
            layout="stacked"
          />

          <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "luxury-label hover:opacity-100 transition-colors duration-300",
                  isLight
                    ? "text-white/85 hover:text-white"
                    : "text-charcoal/60 hover:text-pink-hot"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={cn("p-1 transition-colors", isLight ? "text-white" : "text-charcoal")}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.2} />
            </button>
            <Link
              href="/wishlist"
              className={cn(
                "relative p-1 transition-colors hidden sm:block",
                isLight ? "text-white" : "text-charcoal"
              )}
              aria-label={`Wishlist, ${wishlistCount} items`}
            >
              <Heart size={18} strokeWidth={1.2} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-hot text-white text-[9px] flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className={cn("relative p-1 transition-colors", isLight ? "text-white" : "text-charcoal")}
              aria-label={`Cart, ${cartCount} items`}
            >
              <ShoppingBag size={18} strokeWidth={1.2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-hot text-white text-[9px] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn("p-1 lg:hidden", isLight ? "text-white" : "text-charcoal")}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-blush lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col justify-center items-center h-full gap-8"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl lowercase text-pink-hot hover:text-pink-deep transition-colors tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
