import { S as SITE_ORIGIN } from '../chunks/company_B8TTLzr1.mjs';
export { renderers } from '../renderers.mjs';

const GET = () => new Response(
  `User-agent: *
Allow: /
Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
`,
  { headers: { "Content-Type": "text/plain" } }
);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
