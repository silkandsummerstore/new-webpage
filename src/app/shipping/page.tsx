import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <StaticPage label="Delivery" title="Shipping">
      <p>India: 3–7 business days · Free above ₹15,000</p>
      <p>International: 10–21 business days · Calculated at checkout</p>
      <p className="italic">
        Made-to-order pieces ship once complete — we&apos;ll send tracking the moment
        your piece leaves our atelier.
      </p>
    </StaticPage>
  );
}
