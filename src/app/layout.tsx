import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { ClientNav } from "@/components/layout/ClientNav";
import { Footer } from "@/components/layout/Footer";
import { SearchDrawer } from "@/components/shop/SearchDrawer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Silk & Summer | Modern Heirlooms from Ajmer",
    template: "%s | Silk & Summer",
  },
  description:
    "Contemporary Indian maximalism from Ajmer, Rajasthan. Handcrafted artisanal luxury — western, Indian & indo-western wear, bags, and one-off pieces.",
  keywords: [
    "Indian fashion",
    "Ajmer boutique",
    "handcrafted clothing",
    "indo-western",
    "affordable luxury",
    "custom made clothing",
  ],
  openGraph: {
    title: "Silk & Summer",
    description: "Modern heirlooms from Rajasthan. Crafted for the beautifully undone.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="grain">
        <ShopProvider>
          <SmoothScroll>
            <CustomCursor />
            <ClientNav />
            <main>{children}</main>
            <Footer />
            <SearchDrawer />
            <CartDrawer />
          </SmoothScroll>
        </ShopProvider>
      </body>
    </html>
  );
}
