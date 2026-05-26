import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "FAQs" };

const faqs = [
  {
    q: "How long does made-to-order take?",
    a: "Most pieces ship within 10–18 days. Custom commissions take 3–6 weeks.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship worldwide via trusted couriers. Duties may apply.",
  },
  {
    q: "Can I visit the boutique?",
    a: "You can visit our Rajasthan studio by prior appointment. Details are shared after your consultation is confirmed.",
  },
  {
    q: "What if my size doesn't fit?",
    a: "We offer one complimentary alteration within 14 days of delivery in India.",
  },
];

export default function FAQsPage() {
  return (
    <StaticPage label="Help" title="FAQs">
      {faqs.map((faq) => (
        <div key={faq.q} className="border-b border-charcoal/10 pb-6">
          <h3 className="font-serif text-xl text-charcoal mb-2">{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      ))}
    </StaticPage>
  );
}
