import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Care Guide" };

export default function CarePage() {
  return (
    <StaticPage label="Preserve" title="Care Guide">
      <p>Hand-blocked cotton: gentle cold wash, dry in shade.</p>
      <p>Embroidered pieces: dry clean recommended.</p>
      <p>Natural dyes: may soften with time — this is part of their beauty.</p>
      <p>Store in muslin bags. Avoid plastic.</p>
      <p className="italic">Treat your heirloom gently — it was made to last generations.</p>
    </StaticPage>
  );
}
