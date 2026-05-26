"use client";

import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { useShop } from "@/context/ShopContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const { cart } = useShop();
  const total = cart.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <div className="min-h-screen pb-24">
      <PageHeader
        label="Secure"
        title="Checkout"
        subtitle="Your selection, carefully prepared."
      />
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        {cart.length === 0 ? (
          <p className="font-serif text-xl text-charcoal/50 italic text-center py-20">
            Nothing to checkout yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-16">
            <form className="space-y-6">
              <h2 className="luxury-label mb-6">Shipping Details</h2>
              {["Full Name", "Email", "Phone", "Address", "City", "PIN Code"].map(
                (field) => (
                  <div key={field}>
                    <label className="luxury-label block mb-2">{field}</label>
                    <input
                      type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                      required
                      className="w-full border-b border-charcoal/20 bg-transparent py-3 outline-none focus:border-maroon"
                    />
                  </div>
                )
              )}
              <Button type="submit" className="w-full justify-center mt-8">
                Complete Order — {formatPrice(total)}
              </Button>
              <p className="luxury-label text-center text-charcoal/40">
                Shopify / Razorpay integration ready — connect your payment provider
              </p>
            </form>

            <div>
              <h2 className="luxury-label mb-6">Order Summary</h2>
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li key={item.product.id} className="flex gap-4">
                    <div className="relative w-20 h-24 bg-sand shrink-0">
                      <Image
                        src={item.product.images.front}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-serif">{item.product.name}</p>
                      <p className="luxury-label mt-1">
                        Qty {item.quantity} · {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-charcoal/10 flex justify-between font-serif text-xl">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
