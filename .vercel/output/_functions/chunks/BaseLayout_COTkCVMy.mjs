import { c as createAstro, a as createComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute, s as spreadAttributes, i as defineScriptVars, r as renderComponent, j as renderHead, k as renderSlot } from './astro/server_DXK4Mque.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { a as SERVICE_AREA_CITIES, P as PHONE_E164, S as SITE_ORIGIN, B as BUSINESS_NAME } from './company_B8TTLzr1.mjs';

const svcList = [
	{
		name: "Emergency Roadside Assistance"
	},
	{
		name: "Engine Diagnostics (Computer & ECM)"
	},
	{
		name: "Brakes & Air Systems (Incl. Wheel Seals)"
	},
	{
		name: "Suspension & Steering"
	},
	{
		name: "Hydraulics (Hoses & Cylinders)"
	},
	{
		name: "Electrical & Batteries (Alternators & Starters)"
	},
	{
		name: "A/C & Cooling Systems"
	},
	{
		name: "Fuel System Repair"
	},
	{
		name: "Wheel Seals"
	},
	{
		name: "Reefer Unit Repair"
	}
];

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://azmobiledieselrepair.com");
const $$UnifiedSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnifiedSchema;
  const { pageType, service, faqs, breadcrumbs, reviews } = Astro2.props;
  const orgId = "#organization";
  const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  const autoRepairSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": orgId,
    "name": BUSINESS_NAME,
    "url": SITE_ORIGIN,
    "telephone": PHONE_E164,
    "areaServed": SERVICE_AREA_CITIES.map((c) => ({ "@type": "City", "name": c })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Diesel Services",
      "itemListElement": (svcList || []).map((s) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": s.name }
      }))
    },
    ...Array.isArray(reviews) && reviews.length > 0 ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": avg(reviews.map((r) => Number(r?.rating || 0))).toFixed(1),
        "reviewCount": reviews.length
      }
    } : {}
  };
  const blocks = [autoRepairSchema];
  if (pageType === "service" && service?.name) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "provider": { "@id": orgId },
      ...service?.description ? { "description": service.description } : {},
      ...Array.isArray(service?.areaServed) && service.areaServed.length ? { "areaServed": service.areaServed } : {}
    });
  }
  if (Array.isArray(faqs) && faqs.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    });
  }
  if (Array.isArray(breadcrumbs) && breadcrumbs.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    });
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(blocks)));
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/SEO/UnifiedSchema.astro", void 0);

const $$Astro$3 = createAstro("https://azmobiledieselrepair.com");
const $$LCPPreload = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LCPPreload;
  const { heroPath, heroType = "image/webp", fontPath, fontType = "font/woff2" } = Astro2.props;
  return renderTemplate`${heroPath && renderTemplate`<link rel="preload" as="image"${addAttribute(heroPath, "href")}${addAttribute(heroType, "type")}>`}${fontPath && renderTemplate`<link rel="preload"${addAttribute(fontPath, "href")} as="font"${addAttribute(fontType, "type")} crossorigin>`}`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/LCPPreload.astro", void 0);

const $$Astro$2 = createAstro("https://azmobiledieselrepair.com");
const $$SeoHints = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SeoHints;
  const {
    heroSrc,
    heroType = "image/webp",
    heroSizes = "(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px",
    crossorigin
  } = Astro2.props;
  return renderTemplate`<!-- Preload the LCP hero so the browser discovers it before parsing the body --><link rel="preload" as="image"${addAttribute(heroSrc, "href")}${addAttribute(heroType, "type")}${addAttribute(heroSizes, "imagesizes")}${spreadAttributes(crossorigin ? { crossorigin } : {})}>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/SeoHints.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://azmobiledieselrepair.com");
const $$DeferNonCritical = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DeferNonCritical;
  const { scripts = [] } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  import { onIdle, whenVisible, loadScript } from '/js/defer-init.js';\n  scripts.forEach((cfg) => {\n    const mode = cfg.on || 'idle';\n    if (mode === 'visible' && cfg.selector) {\n      whenVisible(cfg.selector, () => loadScript(cfg.src, cfg.attrs || {}));\n    } else {\n      onIdle(() => loadScript(cfg.src, cfg.attrs || {}));\n    }\n  });\n})();<\/script>"])), defineScriptVars({ scripts }));
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/DeferNonCritical.astro", void 0);

const $$Astro = createAstro("https://azmobiledieselrepair.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, pageType, service, faqs, breadcrumbs, reviews, heroImage, heroType } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Professional mobile diesel repair services for Phoenix Metro area. 24/7 emergency roadside assistance, fleet services, and commercial vehicle repairs."><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- LCP Preload for hero images -->${renderComponent($$result, "LCPPreload", $$LCPPreload, { "heroPath": heroImage, "heroType": heroType })}<!-- Preload homepage hero for faster LCP discovery -->${pageType === "home" && renderTemplate`${renderComponent($$result, "SeoHints", $$SeoHints, { "heroSrc": "/lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.webp" })}`}${renderComponent($$result, "UnifiedSchema", $$UnifiedSchema, { "pageType": pageType, "service": service, "faqs": faqs, "breadcrumbs": breadcrumbs, "reviews": reviews })}${renderHead()}</head> <body class="min-h-screen bg-background text-foreground font-sans"> ${renderSlot($$result, $$slots["default"])} <!-- Defer non-critical JavaScript for better performance --> ${renderComponent($$result, "DeferNonCritical", $$DeferNonCritical, { "scripts": [
    { src: "/js/navigation.js", on: "idle" },
    { src: "/js/forms.js", on: "visible", selector: "#contact" }
  ] })} </body></html>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
