import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="luxury-label mb-4">404</p>
      <h1 className="editorial-heading text-5xl md:text-7xl text-charcoal mb-6">
        Lost in the courtyard
      </h1>
      <p className="font-serif text-lg text-charcoal/60 italic mb-10 max-w-md">
        This page doesn&apos;t exist — but something beautiful might, elsewhere.
      </p>
      <Button href="/">Return Home</Button>
    </div>
  );
}
