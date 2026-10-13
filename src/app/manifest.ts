import type { MetadataRoute } from "next";
import { description, site, siteTitle } from "@/lib/site";

// Necessario para a exportacao estatica (GitHub Pages).
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: site.shortName,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#f1f2ed",
    theme_color: "#f1f2ed",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
