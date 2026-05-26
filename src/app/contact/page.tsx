import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <StaticPage label="Reach Us" title="Contact">
      <p>
        <strong>Silk & Summer Atelier</strong>
        <br />
        Near Ana Sagar, Ajmer, Rajasthan 305001
      </p>
      <p>
        Email:{" "}
        <a href="mailto:hello@silkandsummer.com" className="underline hover:text-maroon">
          hello@silkandsummer.com
        </a>
      </p>
      <p>
        WhatsApp:{" "}
        <a href="https://wa.me/919876543210" className="underline hover:text-maroon">
          +91 98765 43210
        </a>
      </p>
      <p className="italic">Wed–Sun, 11am–7pm · By appointment preferred</p>
    </StaticPage>
  );
}
