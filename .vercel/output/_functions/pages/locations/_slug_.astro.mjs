import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_b5lYJ8aU.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BsCJLsiz.mjs';
import { g as getEntry, a as getCollection } from '../../chunks/_astro_content_DmgznZAf.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://azmobiledieselrepair.com");
async function getStaticPaths() {
  const entries = await getCollection("locations");
  return entries.map((e) => ({ params: { slug: e.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (Astro2.params.slug === "phoenix") {
    throw Astro2.redirect("/locations/phoenix");
  }
  const entry = await getEntry("locations", slug);
  if (!entry) throw new Error(`Location not found: ${slug}`);
  const rendered = await entry.render();
  const { Content } = rendered;
  const frontmatter = entry.data;
  const safe = (v, d = "") => v === void 0 || v === null ? d : v;
  const toSlug = (s) => typeof s === "string" ? s.trim().toLowerCase().replace(/\s+/g, "-") : "";
  const safeArray = (arr) => Array.isArray(arr) ? arr : [];
  const PHONE_DISPLAY = "(480) 307-7434";
  const PHONE_E164 = "+14803077434";
  const BUSINESS_URL = "https://azmobiledieselrepair.com";
  const cityName = safe(frontmatter.city, "Phoenix");
  safe(frontmatter.state, "Arizona");
  const pageTitle = safe(frontmatter.metaTitle, `Mobile Diesel Mechanic ${cityName} | 24/7 On\u2011Site Truck Repair`);
  const pageDescription = safe(frontmatter.metaDescription, `Mobile diesel repair in ${cityName} with 24/7 emergency dispatch.`);
  const heroImage = safe(frontmatter.heroImage, "/images/hero-default.jpg");
  const corridors = safeArray(frontmatter.corridors);
  const nearbyCities = safeArray(frontmatter.nearbyCities);
  frontmatter.lastReviewed || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const canonicalURL = `${BUSINESS_URL}/locations/${toSlug(safe(frontmatter.slug, slug))}`;
  const heroImageBase = heroImage.replace(/\.(jpg|jpeg|png)$/, "");
  const heroImageAVIF = `${heroImageBase}.avif`;
  const heroImageWebP = `${heroImageBase}.webp`;
  const cityLinks = nearbyCities.slice(0, 6).map((city) => ({
    href: `/locations/${toSlug(city)}`,
    text: `${city} Mobile Mechanic`,
    priority: "medium"
  }));
  const serviceLinks = [
    { href: "/services/emergency-roadside-assistance", text: "Emergency Roadside Assistance", priority: "critical" },
    { href: "/services/engine-diagnostics", text: "Engine Diagnostics", priority: "high" },
    { href: "/services/brakes-air-systems", text: "Brakes & Air Systems", priority: "high" },
    { href: "/services/ac-cooling", text: "A/C & Cooling", priority: "medium" },
    { href: "/services/hydraulics-hoses-cylinders", text: "Hydraulics & Hoses", priority: "medium" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "pageType": "city", "description": pageDescription, "canonicalURL": canonicalURL, "ogImage": `${BUSINESS_URL}${heroImage}`, "data-astro-cid-g54tvpik": true }, { "default": async ($$result2) => renderTemplate`      ${maybeRenderHead()}<main class="min-h-screen" data-astro-cid-g54tvpik> <!-- Hero Section --> <section class="section-hero relative h-[600px] flex items-center justify-center" data-astro-cid-g54tvpik> <!-- Background with multiple format support --> <picture class="absolute inset-0 w-full h-full" data-astro-cid-g54tvpik> <source${addAttribute(heroImageAVIF, "srcset")} type="image/avif" data-astro-cid-g54tvpik> <source${addAttribute(heroImageWebP, "srcset")} type="image/webp" data-astro-cid-g54tvpik> <img${addAttribute(heroImage, "src")}${addAttribute(`Mobile diesel repair truck in ${cityName}, Arizona`, "alt")} class="w-full h-full object-cover" loading="eager" data-astro-cid-g54tvpik> </picture> <!-- Hero overlay for text readability --> <div class="hero-overlay absolute inset-0 bg-black bg-opacity-40" data-astro-cid-g54tvpik></div> <!-- Hero content --> <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto" data-astro-cid-g54tvpik> <h1 class="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg" data-astro-cid-g54tvpik>
Mobile Diesel Mechanic — ${cityName}, AZ
</h1> <p class="text-xl md:text-2xl mb-8 text-shadow" data-astro-cid-g54tvpik>
24/7 Emergency Dispatch • On-Site Repairs • Licensed & Insured
</p> <!-- Dual CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-g54tvpik> <a${addAttribute(`tel:${PHONE_E164}`, "href")} class="btn-hero px-8 py-4 bg-[#ed6623] text-white font-bold text-lg rounded-full hover:bg-[#B8501C] transition-colors" data-astro-cid-g54tvpik>
Call ${PHONE_DISPLAY} </a> <a href="#services" class="btn-outline px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#ed6623] transition-colors" data-astro-cid-g54tvpik>
View Services
</a> </div> ${corridors.length > 0 && renderTemplate`<p class="mt-6 text-lg opacity-90" data-astro-cid-g54tvpik>
Serving ${corridors.join(", ")} • ${cityName} & Surrounding Areas
</p>`} </div> </section> <div class="container mx-auto px-4 py-12" data-astro-cid-g54tvpik> <!-- Main Content Area --> <div class="grid lg:grid-cols-3 gap-12" data-astro-cid-g54tvpik> <!-- Main Content Column --> <div class="lg:col-span-2" data-astro-cid-g54tvpik> <!-- MDX Content --> <section class="prose lg:prose-xl max-w-none mb-12" data-astro-cid-g54tvpik> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-g54tvpik": true })} </section> <!-- Services Grid --> <section id="services" class="mb-12" data-astro-cid-g54tvpik> <h2 class="text-3xl font-bold mb-8 text-[#1d1d1b]" data-astro-cid-g54tvpik>
Essential Services in ${cityName} </h2> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-g54tvpik> ${serviceLinks.map((service) => renderTemplate`<div class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow" data-astro-cid-g54tvpik> <h3 class="text-xl font-semibold mb-3 text-[#ed6623]" data-astro-cid-g54tvpik> <a${addAttribute(service.href, "href")} class="hover:underline" data-astro-cid-g54tvpik> ${service.text} </a> </h3> <p class="text-gray-600 mb-4" data-astro-cid-g54tvpik>
Professional mobile service throughout ${cityName} area.
</p> <a${addAttribute(service.href, "href")} class="inline-flex items-center text-[#ed6623] font-medium hover:underline" data-astro-cid-g54tvpik>
Learn More →
</a> </div>`)} </div> </section> <!-- Local Expertise --> <section class="mb-12" data-astro-cid-g54tvpik> <h2 class="text-3xl font-bold mb-6 text-[#1d1d1b]" data-astro-cid-g54tvpik>
Local ${cityName} Expertise
</h2> <div class="bg-gray-50 rounded-lg p-8" data-astro-cid-g54tvpik> <p class="text-lg mb-4" data-astro-cid-g54tvpik>
Our certified diesel mechanics understand the unique challenges of operating heavy-duty vehicles in ${cityName}'s desert climate and traffic conditions.
</p> <ul class="space-y-2 text-gray-700" data-astro-cid-g54tvpik> <li data-astro-cid-g54tvpik>• Extreme heat impact on cooling systems and A/C performance</li> <li data-astro-cid-g54tvpik>• Dust filtration and air intake maintenance requirements</li> <li data-astro-cid-g54tvpik>• Local truck stops, weigh stations, and service corridors</li> <li data-astro-cid-g54tvpik>• Compliance with Arizona DOT regulations and inspections</li> </ul> </div> </section> </div> <!-- Sidebar --> <div class="lg:col-span-1" data-astro-cid-g54tvpik> <!-- Emergency Contact Card --> <div class="bg-[#ed6623] text-white rounded-lg p-6 mb-8" data-astro-cid-g54tvpik> <h3 class="text-xl font-bold mb-4" data-astro-cid-g54tvpik>24/7 Emergency Service</h3> <p class="mb-4" data-astro-cid-g54tvpik>Stuck in ${cityName}? We're here to help.</p> <a${addAttribute(`tel:${PHONE_E164}`, "href")} class="block w-full text-center bg-white text-[#ed6623] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors" data-astro-cid-g54tvpik>
Call ${PHONE_DISPLAY} </a> <p class="text-sm mt-3 opacity-90" data-astro-cid-g54tvpik>
Average Response: 60-90 minutes
</p> </div> <!-- Service Areas --> ${nearbyCities.length > 0 && renderTemplate`<div class="border border-gray-200 rounded-lg p-6 mb-8" data-astro-cid-g54tvpik> <h3 class="text-xl font-semibold mb-4 text-[#1d1d1b]" data-astro-cid-g54tvpik>
Nearby Service Areas
</h3> <div class="grid grid-cols-2 gap-2" data-astro-cid-g54tvpik> ${cityLinks.map((city) => renderTemplate`<a${addAttribute(city.href, "href")} class="text-[#ed6623] hover:underline text-sm" data-astro-cid-g54tvpik> ${city.text.replace(" Mobile Mechanic", "")} </a>`)} </div> </div>`} <!-- Trust Signals --> <div class="border border-gray-200 rounded-lg p-6" data-astro-cid-g54tvpik> <h3 class="text-xl font-semibold mb-4 text-[#1d1d1b]" data-astro-cid-g54tvpik>
Why Choose Us
</h3> <ul class="space-y-3 text-sm" data-astro-cid-g54tvpik> <li class="flex items-start" data-astro-cid-g54tvpik> <span class="text-[#ed6623] mr-2" data-astro-cid-g54tvpik>✓</span> <span data-astro-cid-g54tvpik>Licensed & Insured in Arizona</span> </li> <li class="flex items-start" data-astro-cid-g54tvpik> <span class="text-[#ed6623] mr-2" data-astro-cid-g54tvpik>✓</span> <span data-astro-cid-g54tvpik>15+ Years Fleet Management Experience</span> </li> <li class="flex items-start" data-astro-cid-g54tvpik> <span class="text-[#ed6623] mr-2" data-astro-cid-g54tvpik>✓</span> <span data-astro-cid-g54tvpik>Mobile Diagnostic Equipment</span> </li> <li class="flex items-start" data-astro-cid-g54tvpik> <span class="text-[#ed6623] mr-2" data-astro-cid-g54tvpik>✓</span> <span data-astro-cid-g54tvpik>Fast Response Throughout ${cityName}</span> </li> </ul> </div> </div> </div> </div> <!-- Final CTA Section --> <section class="bg-[#1d1d1b] text-white py-16" data-astro-cid-g54tvpik> <div class="container mx-auto px-4 text-center" data-astro-cid-g54tvpik> <h2 class="text-3xl font-bold mb-6" data-astro-cid-g54tvpik>
Ready to Get Back on the Road?
</h2> <p class="text-xl mb-8 opacity-90" data-astro-cid-g54tvpik>
Professional mobile diesel repair throughout ${cityName} and surrounding areas.
</p> <a${addAttribute(`tel:${PHONE_E164}`, "href")} class="inline-block bg-[#ed6623] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#B8501C] transition-colors" data-astro-cid-g54tvpik>
Call ${PHONE_DISPLAY} Now
</a> </div> </section> </main> `, "head": async ($$result2) => renderTemplate`<link rel="preload" as="image"${addAttribute(heroImageAVIF, "href")} type="image/avif"><link rel="preload" as="image"${addAttribute(heroImageWebP, "href")} type="image/webp"><link rel="preload" as="image"${addAttribute(heroImage, "href")} type="image/jpeg">` })} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/pages/locations/[slug].astro", void 0);

const $$file = "/Users/brandontheriot/projects/Diesel Repair/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
