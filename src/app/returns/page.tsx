import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <StaticPage label="Policy" title="Returns">
      <p>
        Ready-to-wear may be returned within 7 days if unworn, with tags attached.
        Custom and made-to-order pieces are final sale — we work closely with you
        beforehand to ensure the perfect fit.
      </p>
      <p>Email hello@silkandsummer.com to initiate a return.</p>
    </StaticPage>
  );
}
