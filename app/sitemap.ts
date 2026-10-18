import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tsumetap.vercel.app/", changeFrequency: "weekly", priority: 1 },
    { url: "https://tsumetap.vercel.app/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];
}
