import type { Metadata } from "next";
import { StaticPage } from "@/components/layout/StaticPage";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <StaticPage label="Help" title="Contact">
      <p>
        <strong>Silk &amp; Summer Atelier</strong>
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
      <p className="italic">
        Mother–daughter atelier based in Rajasthan, India. Studio visits are by prior appointment only;
        details are shared once your consultation is confirmed.
      </p>
    </StaticPage>
  );
}
