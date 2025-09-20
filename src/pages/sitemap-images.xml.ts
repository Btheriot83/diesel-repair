import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
const SITE = "https://azmobiledieselrepair.com";

type ImgEntry = { loc: string; images: string[] };
const abs = (p: string) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`);

const collect = (items: any[], base: string): ImgEntry[] =>
  items.filter(p => !p.data?.draft).map(p => {
    const loc = `${SITE}${base}/${p.slug}`;
    const fm = p.data ?? {};
    const imgs: string[] = [
      ...(Array.isArray(fm.images) ? fm.images : []),
      ...(typeof fm.hero === "string" ? [fm.hero] : []),
    ].filter(Boolean).map(abs);
    return { loc, images: Array.from(new Set(imgs)) };
  }).filter(e => e.images.length > 0);

export const GET: APIRoute = async () => {
  const [cities, services, corridors, blog] = await Promise.all([
    getCollection("cities"),
    getCollection("services"),
    getCollection("corridors"),
    getCollection("blog").catch(() => [] as any[]),
  ]);

  const entries: ImgEntry[] = [
    ...collect(services, "/services"),
    ...collect(cities, "/locations"),
    ...collect(corridors, "/corridors"),
    ...collect(blog, "/blog"),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map(e => `<url>
  <loc>${e.loc}</loc>
  ${e.images.map(img => `<image:image><image:loc>${img}</image:loc></image:image>`).join("\n  ")}
</url>`).join("\n")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
