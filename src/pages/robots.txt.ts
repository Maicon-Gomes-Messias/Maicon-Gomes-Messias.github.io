import type { APIRoute } from "astro";
import { siteUrl } from "@/lib/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const txt = `User-Agent: *
Allow: /

Host: ${siteUrl}
Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(txt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
