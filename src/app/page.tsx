import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { BrandStory } from "@/components/home/BrandStory";
import { OneOfFew } from "@/components/home/OneOfFew";
import { ShopByVibe } from "@/components/home/ShopByVibe";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ArtisanProcess } from "@/components/home/ArtisanProcess";
import { Community } from "@/components/home/Community";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <FeaturedProducts />
      <BrandStory />
      <OneOfFew />
      <ShopByVibe />
      <ArtisanProcess />
      <Community />
    </>
  );
}
