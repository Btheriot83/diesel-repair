import { a as getCollection } from '../chunks/_astro_content_DmgznZAf.mjs';
import { S as SITE_ORIGIN } from '../chunks/company_OHu7kWSL.mjs';
export { renderers } from '../renderers.mjs';

const SITE = SITE_ORIGIN;
function priority(of) {
  return { homepage: 1, services: 0.9, cities: 0.8, corridors: 0.85, blog: 0.6 }[of] ?? 0.5;
}
function freq(of) {
  return { homepage: "weekly", services: "monthly", cities: "monthly", corridors: "weekly", blog: "weekly" }[of] ?? "monthly";
}
const GET = async () => {
  const [cities, services, corridors, blog] = await Promise.all([
    getCollection("cities"),
    getCollection("services"),
    getCollection("corridors"),
    getCollection("blog").catch(() => [])
  ]);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const entries = [
    { loc: `${SITE}/`, changefreq: freq("homepage"), priority: priority("homepage"), lastmod: now },
    ...services.filter((p) => !p.data?.draft).map((p) => ({
      loc: `${SITE}/services/${p.slug}`,
      changefreq: freq("services"),
      priority: priority("services"),
      lastmod: p.data?.updated ?? now
    })),
    ...cities.filter((p) => !p.data?.draft).map((p) => ({
      loc: `${SITE}/locations/${p.slug}`,
      changefreq: freq("cities"),
      priority: priority("cities"),
      lastmod: p.data?.updated ?? now
    })),
    ...corridors.filter((p) => !p.data?.draft).map((p) => ({
      loc: `${SITE}/corridors/${p.slug}`,
      changefreq: freq("corridors"),
      priority: priority("corridors"),
      lastmod: p.data?.updated ?? now
    })),
    ...blog.filter((p) => !p.data?.draft).map((p) => ({
      loc: `${SITE}/blog/${p.slug}`,
      changefreq: freq("blog"),
      priority: priority("blog"),
      lastmod: p.data?.updated ?? now
    }))
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `<url>
  <loc>${e.loc}</loc>
  <lastmod>${e.lastmod}</lastmod>
  <changefreq>${e.changefreq}</changefreq>
  <priority>${e.priority.toFixed(2)}</priority>
</url>`).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
