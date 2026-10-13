import type { APIRoute } from "astro";
import { description, site, siteTitle } from "@/lib/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const manifest = {
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

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" },
  });
};
