import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_ORIGIN } from "@/config/company";

const SITE = SITE_ORIGIN;

type Entry = { loc: string; changefreq: string; priority: number; lastmod?: string };

function priority(of: string) {
  return ({ homepage: 1.0, services: 0.9, cities: 0.8, corridors: 0.85, blog: 0.6 } as Record<string, number>)[of] ?? 0.5;
}
function freq(of: string) {
  return ({ homepage: "weekly", services: "monthly", cities: "monthly", corridors: "weekly", blog: "weekly" } as Record<string, string>)[of] ?? "monthly";
}

export const GET: APIRoute = async () => {
  const [cities, services, corridors, blog] = await Promise.all([
    getCollection("cities"),
    getCollection("services"),
    getCollection("corridors"),
    getCollection("blog").catch(() => [] as any[]),
  ]);

  const now = new Date().toISOString();
  const entries: Entry[] = [
    { loc: `${SITE}/`, changefreq: freq("homepage"), priority: priority("homepage"), lastmod: now },
    ...services.filter(p => !p.data?.draft).map(p => ({
      loc: `${SITE}/services/${p.slug}`,
      changefreq: freq("services"),
      priority: priority("services"),
      lastmod: p.data?.updated ?? now,
    })),
    ...cities.filter(p => !p.data?.draft).map(p => ({
      loc: `${SITE}/locations/${p.slug}`,
      changefreq: freq("cities"),
      priority: priority("cities"),
      lastmod: p.data?.updated ?? now,
    })),
    ...corridors.filter(p => !p.data?.draft).map(p => ({
      loc: `${SITE}/corridors/${p.slug}`,
      changefreq: freq("corridors"),
      priority: priority("corridors"),
      lastmod: p.data?.updated ?? now,
    })),
    ...blog.filter(p => !p.data?.draft).map(p => ({
      loc: `${SITE}/blog/${p.slug}`,
      changefreq: freq("blog"),
      priority: priority("blog"),
      lastmod: p.data?.updated ?? now,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `<url>
  <loc>${e.loc}</loc>
  <lastmod>${e.lastmod}</lastmod>
  <changefreq>${e.changefreq}</changefreq>
  <priority>${e.priority.toFixed(2)}</priority>
</url>`).join("\n")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
