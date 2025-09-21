import { a as getCollection } from '../chunks/_astro_content_BDqkREBY.mjs';
import { S as SITE_ORIGIN } from '../chunks/company_B8TTLzr1.mjs';
export { renderers } from '../renderers.mjs';

const SITE = SITE_ORIGIN;
const abs = (p) => p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`;
const collect = (items, base) => items.filter((p) => !p.data?.draft).map((p) => {
  const loc = `${SITE}${base}/${p.slug}`;
  const fm = p.data ?? {};
  const imgs = [
    ...Array.isArray(fm.images) ? fm.images : [],
    ...typeof fm.hero === "string" ? [fm.hero] : []
  ].filter(Boolean).map(abs);
  return { loc, images: Array.from(new Set(imgs)) };
}).filter((e) => e.images.length > 0);
const GET = async () => {
  const [cities, services, corridors, blog] = await Promise.all([
    getCollection("cities"),
    getCollection("services"),
    getCollection("corridors"),
    getCollection("blog").catch(() => [])
  ]);
  const entries = [
    ...collect(services, "/services"),
    ...collect(cities, "/locations"),
    ...collect(corridors, "/corridors"),
    ...collect(blog, "/blog")
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => `<url>
  <loc>${e.loc}</loc>
  ${e.images.map((img) => `<image:image><image:loc>${img}</image:loc></image:image>`).join("\n  ")}
</url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
