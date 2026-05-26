import type { Metadata } from "next";
import { Fraunces, Pinyon_Script, DM_Sans } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { ClientNav } from "@/components/layout/ClientNav";
import { Footer } from "@/components/layout/Footer";
import { SearchDrawer } from "@/components/shop/SearchDrawer";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { LoadingScreen } from "@/components/animations/LoadingScreen";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Silk & Summer | Contemporary Indian Fashion",
    template: "%s | Silk & Summer",
  },
  description:
    "Contemporary Indian maximalism. Handcrafted artisanal luxury — silk, summer, and everything in between.",
  openGraph: {
    title: "Silk & Summer",
    description: "Crafted for the beautifully undone.",
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
    <html lang="en" className={`${fraunces.variable} ${pinyon.variable} ${dmSans.variable}`}>
      <body className="grain">
        <ShopProvider>
          <LoadingScreen />
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
