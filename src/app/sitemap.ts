import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://silkandsummer.com";
  const productUrls = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/shop`, lastModified: new Date() },
    { url: `${base}/custom`, lastModified: new Date() },
    { url: `${base}/lookbook`, lastModified: new Date() },
    { url: `${base}/archive`, lastModified: new Date() },
    ...productUrls,
  ];
}
