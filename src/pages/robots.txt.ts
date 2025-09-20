import type { APIRoute } from "astro";
export const GET: APIRoute = () =>
  new Response(
`User-agent: *
Allow: /
Sitemap: https://azmobiledieselrepair.com/sitemap-index.xml
`, { headers: { "Content-Type": "text/plain" } });
