"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo/Logo";

const shopLinks = [
  { label: "Western", href: "/shop?category=western" },
  { label: "Indian", href: "/shop?category=indian" },
  { label: "Indo-Western", href: "/shop?category=indo-western" },
  { label: "Bags", href: "/shop?category=bags" },
  { label: "One-Off Pieces", href: "/shop?category=one-off" },
];

const helpLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Care Guide", href: "/care" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-charcoal text-ivory/80 mt-30">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <Logo variant="light" size="lg" />
            <p className="mt-6 font-serif text-lg text-ivory/60 leading-relaxed max-w-sm">
              Modern heirlooms from Ajmer. Handcrafted for the beautifully undone.
            </p>
            <form onSubmit={handleNewsletter} className="mt-8">
              <label htmlFor="newsletter" className="luxury-label text-ivory/50 block mb-3">
                Join the circle
              </label>
              {subscribed ? (
                <p className="font-serif text-ivory italic">Welcome. You&apos;re on the list.</p>
              ) : (
                <div className="flex border-b border-ivory/20 pb-2">
                  <input
                    id="newsletter"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-transparent text-ivory placeholder:text-ivory/30 outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="luxury-label text-gold hover:text-ivory transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h3 className="luxury-label text-ivory/50 mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-2">
            <h3 className="luxury-label text-ivory/50 mb-6">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique */}
          <div className="lg:col-span-4">
            <h3 className="luxury-label text-ivory/50 mb-6">Visit Us</h3>
            <address className="not-italic font-serif text-xl text-ivory leading-relaxed">
              Silk & Summer Atelier
              <br />
              Near Ana Sagar, Ajmer
              <br />
              Rajasthan 305001, India
            </address>
            <p className="mt-4 text-sm text-ivory/50">
              By appointment · Wed–Sun, 11am–7pm
            </p>
            <div className="flex gap-6 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-label hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-label hover:text-gold transition-colors"
              >
                Pinterest
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-label hover:text-gold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Silk & Summer. Crafted in Ajmer.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-ivory/40 hover:text-ivory/70 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
