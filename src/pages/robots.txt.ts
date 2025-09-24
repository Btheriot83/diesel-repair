import type { APIRoute } from "astro";
import { SITE_ORIGIN } from "@/config/company";

export const GET: APIRoute = () => {
  // Determine environment - same logic as middleware.ts
  const isVercel = process.env.VERCEL === '1';
  const env = process.env.VERCEL_ENV || (process.env.NODE_ENV === 'production' ? 'production' : 'development');
  const isProd = env === 'production';

  // For production: Allow all bots with sitemap
  if (isProd) {
    return new Response(
`User-agent: *
Allow: /

# AI Training Bots - Explicit Permission for SEO Content Learning
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ChatGPT-User
Allow: /

# Sitemap
Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
Sitemap: ${SITE_ORIGIN}/sitemap.xml
Sitemap: ${SITE_ORIGIN}/sitemap-images.xml

# Additional Resources
Host: ${SITE_ORIGIN}
`, { headers: { "Content-Type": "text/plain" } });
  }

  // For preview/development: Block all bots
  return new Response(
`# Preview/Development Environment - No Indexing
User-agent: *
Disallow: /

# Block all AI training bots in non-production
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: ChatGPT-User
Disallow: /

# No sitemap for preview environments
`, { headers: { "Content-Type": "text/plain" } });
};
