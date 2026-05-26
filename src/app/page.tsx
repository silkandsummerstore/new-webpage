import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BrandStory } from "@/components/home/BrandStory";
import { OneOfFew } from "@/components/home/OneOfFew";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ArtisanProcess } from "@/components/home/ArtisanProcess";
import { Community } from "@/components/home/Community";
import { MarqueeBand } from "@/components/home/MarqueeBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <FeaturedCollections />
      <FeaturedProducts />
      <BrandStory />
      <OneOfFew />
      <ArtisanProcess />
      <Community />
    </>
  );
}
