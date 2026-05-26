import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <StaticPage label="Legal" title="Privacy Policy">
      <p>
        We collect only what&apos;s needed — name, email, shipping address, and order
        details. We never sell your data. Newsletter emails can be unsubscribed anytime.
      </p>
    </StaticPage>
  );
}
