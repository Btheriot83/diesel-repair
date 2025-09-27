import { S as SITE_ORIGIN } from '../chunks/company_OHu7kWSL.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => {
  process.env.VERCEL === "1";
  const env = process.env.VERCEL_ENV || (process.env.NODE_ENV === "production" ? "production" : "development");
  const isProd = env === "production";
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
`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }
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
`,
    { headers: { "Content-Type": "text/plain" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
