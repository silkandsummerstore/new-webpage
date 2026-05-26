"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo/Logo";
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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
            ? "bg-ivory/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          {/* Logo — top left */}
          <Logo variant={isLight ? "light" : "dark"} size="md" />

          {/* Desktop nav center */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "luxury-label hover:opacity-100 transition-opacity duration-300",
                  isLight ? "text-ivory/80 hover:text-ivory" : "text-charcoal/70 hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={cn("p-1 transition-colors", isLight ? "text-ivory" : "text-charcoal")}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.2} />
            </button>
            <Link
              href="/wishlist"
              className={cn("relative p-1 transition-colors hidden sm:block", isLight ? "text-ivory" : "text-charcoal")}
              aria-label={`Wishlist, ${wishlistCount} items`}
            >
              <Heart size={18} strokeWidth={1.2} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta text-ivory text-[9px] flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className={cn("relative p-1 transition-colors", isLight ? "text-ivory" : "text-charcoal")}
              aria-label={`Cart, ${cartCount} items`}
            >
              <ShoppingBag size={18} strokeWidth={1.2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-terracotta text-ivory text-[9px] flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn("p-1 lg:hidden", isLight ? "text-ivory" : "text-charcoal")}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col justify-center items-center h-full gap-8"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-4xl text-charcoal hover:text-maroon transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="luxury-label text-charcoal/60 mt-4"
              >
                Wishlist ({wishlistCount})
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
