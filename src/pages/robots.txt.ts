import type { APIRoute } from "astro";
import { SITE_ORIGIN } from "@/config/company";

export const GET: APIRoute = () =>
  new Response(
`User-agent: *
Allow: /
Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
`, { headers: { "Content-Type": "text/plain" } });
