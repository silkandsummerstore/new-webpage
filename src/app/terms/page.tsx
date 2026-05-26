import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <StaticPage label="Legal" title="Terms & Conditions">
      <p>
        By purchasing from Silk & Summer, you agree to our shipping, returns, and
        care policies. All designs remain intellectual property of Silk & Summer.
      </p>
    </StaticPage>
  );
}
