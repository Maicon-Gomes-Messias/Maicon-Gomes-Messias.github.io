import type { MetadataRoute } from "next";
import { contentUpdated, siteUrl } from "@/lib/site";

// Necessario para a exportacao estatica (GitHub Pages).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: contentUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
