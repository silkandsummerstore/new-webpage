"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
  } = useShop();

  const total = cart.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/40 z-[60] backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md z-[70] bg-ivory flex flex-col shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
              <h2 className="font-serif text-2xl">Your Selection</h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={22} strokeWidth={1.2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <p className="font-serif text-charcoal/50 italic mt-8">
                  Your cart is empty — discover something meant for you.
                </p>
              ) : (
                <ul className="space-y-8">
                  {cart.map((item) => (
                    <li key={item.product.id} className="flex gap-4">
                      <div className="relative w-24 h-32 bg-sand shrink-0 overflow-hidden">
                        <Image
                          src={item.product.images.front}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setCartOpen(false)}
                          className="font-serif text-lg hover:text-maroon transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="luxury-label mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            className="p-1 border border-charcoal/20"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            className="p-1 border border-charcoal/20"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="luxury-label mt-3 hover:text-maroon transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-charcoal/10 space-y-4">
                <div className="flex justify-between font-serif text-lg">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <Button href="/checkout" className="w-full justify-center">
                  Secure Checkout
                </Button>
                <p className="luxury-label text-center text-charcoal/40">
                  Made to order pieces may take 10–18 days
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
