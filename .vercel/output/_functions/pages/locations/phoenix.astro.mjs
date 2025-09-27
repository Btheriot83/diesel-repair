import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../../chunks/astro/server_b5lYJ8aU.mjs';
import 'kleur/colors';
import { C as COMPANY_CONFIG, $ as $$BaseLayout } from '../../chunks/BaseLayout_BsCJLsiz.mjs';
import { b as getEntryBySlug } from '../../chunks/_astro_content_DmgznZAf.mjs';
import 'clsx';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const phoenix = {"city":"phoenix","path":"/images/phoenix-optimized/phoenix-1600w.avif","fileName":"phoenix-1600w.avif","format":"avif","width":1600,"height":1600,"bytes":158449,"aspect":1};
const tempe = {"city":"tempe","path":"/images/cities/tempe-hero-1600.avif","fileName":"tempe-hero-1600.avif","format":"avif","width":1600,"height":900,"bytes":140000,"aspect":1.78};
const mesa = {"city":"mesa","path":"/images/cities/mesa-hero-1600.avif","fileName":"mesa-hero-1600.avif","format":"avif","width":1600,"height":900,"bytes":140000,"aspect":1.78};
const chandler = {"city":"chandler","path":"/images/cities/chandler-hero-1600.avif","fileName":"chandler-hero-1600.avif","format":"avif","width":1600,"height":900,"bytes":140000,"aspect":1.78};
const glendale = {"city":"glendale","path":"/images/cities/glendale-hero-1600.avif","fileName":"glendale-hero-1600.avif","format":"avif","width":1600,"height":900,"bytes":140000,"aspect":1.78};
const scottsdale = {"city":"scottsdale","path":"/images/cities/scottsdale-hero-1600.avif","fileName":"scottsdale-hero-1600.avif","format":"avif","width":1600,"height":900,"bytes":140000,"aspect":1.78};
const heroManifest = {
  phoenix,
  tempe,
  mesa,
  chandler,
  glendale,
  scottsdale,
  "default-hero": {"city":"default-hero","path":"/images/cities/generic-hero-1600.avif","fileName":"generic-hero-1600.avif","format":"avif","width":1600,"height":900,"bytes":140000,"aspect":1.78},
};

const $$Astro$3 = createAstro("https://azmobiledieselrepair.com");
const $$HeroCity = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroCity;
  const { city, headline, subline, breadcrumbs } = Astro2.props;
  const citySlug = city.toLowerCase();
  const heroData = heroManifest[citySlug] || heroManifest["default-hero"];
  if (!heroData) {
    throw new Error(`No hero image found for city: ${city}`);
  }
  const isOptimizedHero = heroData.path.includes("/hero-optimized/") || heroData.path.includes("/phoenix-optimized/");
  let avifSources = "";
  let webpSources = "";
  if (isOptimizedHero) {
    const basePath = heroData.path.replace(/\.[^.]+$/, "");
    const baseDir = basePath.split("/").slice(0, -1).join("/");
    const fileName = heroData.fileName.replace(/\.[^.]+$/, "");
    const filePrefix = fileName.replace(/-\d+w$/, "");
    avifSources = [
      `${baseDir}/${filePrefix}-2000w.avif 2000w`,
      `${baseDir}/${filePrefix}-1600w.avif 1600w`,
      `${baseDir}/${filePrefix}-1200w.avif 1200w`
    ].join(", ");
    webpSources = [
      `${baseDir}/${filePrefix}-2000w.webp 2000w`,
      `${baseDir}/${filePrefix}-1600w.webp 1600w`,
      `${baseDir}/${filePrefix}-1200w.webp 1200w`
    ].join(", ");
  }
  const fallbackSrc = heroData.path;
  const altText = `Professional mobile diesel mechanic truck on ${city} highway with downtown skyline - 24/7 emergency roadside assistance available`;
  return renderTemplate`${maybeRenderHead()}<section class="section-hero bg-gray-900 text-white" data-astro-cid-ade3musp> <!-- Responsive Hero Image --> <picture data-astro-cid-ade3musp> <source${addAttribute(avifSources, "srcset")} type="image/avif" sizes="(max-width: 768px) 100vw, 1200px" data-astro-cid-ade3musp> <source${addAttribute(webpSources, "srcset")} type="image/webp" sizes="(max-width: 768px) 100vw, 1200px" data-astro-cid-ade3musp> <img${addAttribute(fallbackSrc, "src")}${addAttribute(altText, "alt")}${addAttribute(heroData.width, "width")}${addAttribute(heroData.height, "height")} decoding="async" fetchpriority="high" class="absolute inset-0 w-full h-full object-cover" sizes="(max-width: 768px) 100vw, 1200px" data-astro-cid-ade3musp> </picture> <!-- Gradient Overlay for Text Contrast --> <div class="hero-overlay" data-astro-cid-ade3musp></div> <!-- Hero Content --> <div class="relative z-10 container mx-auto container-padding section-padding" data-astro-cid-ade3musp> <div class="max-w-4xl mx-auto text-center" data-astro-cid-ade3musp> <!-- Single H1 --> <h1 class="heading-xl text-white drop-shadow-lg mb-6" data-astro-cid-ade3musp> ${headline} </h1> <!-- Subline --> <p class="text-lead text-white/90 drop-shadow max-w-3xl mx-auto mb-8" data-astro-cid-ade3musp> ${subline} </p> <!-- Dual CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-astro-cid-ade3musp> <!-- Primary CTA - Phone --> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="btn-hero text-lg"${addAttribute(`Call ${COMPANY_CONFIG.phoneNumber} for immediate diesel repair service`, "aria-label")} data-astro-cid-ade3musp> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ade3musp> <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" data-astro-cid-ade3musp></path> </svg>
Call ${COMPANY_CONFIG.phoneNumber} </a> <!-- Secondary CTA - Request Service --> <a href="#request-service" class="btn-outline text-lg" aria-label="Scroll to request service form" data-astro-cid-ade3musp> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ade3musp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-ade3musp></path> </svg>
Request Service
</a> </div> </div> </div> </section> <!-- Breadcrumb Row --> ${breadcrumbs && breadcrumbs.length > 0 && renderTemplate`<nav class="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb" data-astro-cid-ade3musp> <div class="container mx-auto px-4" data-astro-cid-ade3musp> <ol class="flex flex-wrap items-center gap-2 text-sm" data-astro-cid-ade3musp> ${breadcrumbs.map((crumb, index) => renderTemplate`<li class="flex items-center" data-astro-cid-ade3musp> ${index > 0 && renderTemplate`<svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-ade3musp> <path d="M9 5l7 7-7 7" data-astro-cid-ade3musp></path> </svg>`} ${crumb.item ? renderTemplate`<a${addAttribute(crumb.item, "href")} class="text-diesel-orange hover:text-diesel-hover font-medium transition-colors"${addAttribute(index === breadcrumbs.length - 1 ? "page" : void 0, "aria-current")} data-astro-cid-ade3musp> ${crumb.name} </a>` : renderTemplate`<span class="text-gray-900 font-medium" aria-current="page" data-astro-cid-ade3musp> ${crumb.name} </span>`} </li>`)} </ol> </div> </nav>`} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/HeroCity.astro", void 0);

const $$Astro$2 = createAstro("https://azmobiledieselrepair.com");
const $$CorridorsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CorridorsGrid;
  const { corridors = [], city = "Phoenix", landmarks = [], etaMinutes = 30 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${corridors.map((corridor) => renderTemplate`<div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200"> <h3 class="text-xl font-bold text-[#ed6623] mb-4">${corridor}</h3> <div class="space-y-3"> <div class="flex items-center justify-between"> <span class="text-gray-600">Coverage:</span> <span class="font-semibold">${city} Metro</span> </div> <div class="flex items-center justify-between"> <span class="text-gray-600">ETA:</span> <span class="font-semibold text-[#ed6623]">${etaMinutes}-${etaMinutes + 20} min</span> </div> ${landmarks.length > 0 && renderTemplate`<div class="pt-2 border-t border-gray-100"> <span class="text-sm text-gray-500">Major landmarks:</span> <p class="text-sm text-gray-700 mt-1">${landmarks.slice(0, 2).join(", ")}</p> </div>`} </div> </div>`)} </div>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/locations/CorridorsGrid.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://azmobiledieselrepair.com");
const $$FAQAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQAccordion;
  const { faqs = [] } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="max-w-4xl mx-auto space-y-4"> ', " </div> <script>\n  function toggleFAQ(index) {\n    const content = document.getElementById(`faq-content-${index}`);\n    const icon = document.getElementById(`faq-icon-${index}`);\n\n    if (content.classList.contains('hidden')) {\n      content.classList.remove('hidden');\n      icon.style.transform = 'rotate(180deg)';\n    } else {\n      content.classList.add('hidden');\n      icon.style.transform = 'rotate(0deg)';\n    }\n  }\n<\/script>"], ["", '<div class="max-w-4xl mx-auto space-y-4"> ', " </div> <script>\n  function toggleFAQ(index) {\n    const content = document.getElementById(\\`faq-content-\\${index}\\`);\n    const icon = document.getElementById(\\`faq-icon-\\${index}\\`);\n\n    if (content.classList.contains('hidden')) {\n      content.classList.remove('hidden');\n      icon.style.transform = 'rotate(180deg)';\n    } else {\n      content.classList.add('hidden');\n      icon.style.transform = 'rotate(0deg)';\n    }\n  }\n<\/script>"])), maybeRenderHead(), faqs.map((faq, index) => renderTemplate`<div class="bg-white rounded-lg border border-gray-200 shadow-sm"> <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"${addAttribute(`toggleFAQ(${index})`, "onclick")}> <span class="font-semibold text-gray-900">${faq.question}</span> <svg class="w-5 h-5 text-[#ed6623] transform transition-transform duration-200"${addAttribute(`faq-icon-${index}`, "id")} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="px-6 pb-4 text-gray-700 hidden"${addAttribute(`faq-content-${index}`, "id")}> <p>${faq.answer}</p> </div> </div>`));
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ui/FAQAccordion.astro", void 0);

const cities = [
	{
		slug: "phoenix",
		city: "Phoenix",
		state: "AZ",
		centroid: {
			lat: 33.4484,
			lng: -112.074
		},
		corridors: [
			"I-10",
			"I-17",
			"Loop 101"
		],
		exitClusters: [
			"I-10 Exits 133–138",
			"I-17 Exits 199–203"
		],
		neighborhoods: [
			"Downtown",
			"Encanto",
			"Maryvale",
			"Deer Valley",
			"Ahwatukee",
			"Arcadia"
		],
		zips: [
			"85003",
			"85004",
			"85007",
			"85009",
			"85021",
			"85044"
		],
		landmarks: [
			"The Stack Interchange",
			"Sky Harbor cargo",
			"UP Railyard"
		],
		heatNotes: [
			"Summer overheat on I-17 grades",
			"Dust storms reduce visibility on I-10"
		],
		nearbyCities: [
			"Tempe",
			"Glendale",
			"Scottsdale"
		],
		etaMinutes: 25
	},
	{
		slug: "tempe",
		city: "Tempe",
		state: "AZ",
		centroid: {
			lat: 33.4255,
			lng: -111.94
		},
		corridors: [
			"Loop 202",
			"Loop 101"
		],
		exitClusters: [
			"202/101 Interchange",
			"202 Exits 6–9"
		],
		neighborhoods: [
			"Downtown Tempe",
			"Rio Salado",
			"North Tempe",
			"South Tempe",
			"McClintock",
			"Rural"
		],
		zips: [
			"85281",
			"85282",
			"85283",
			"85284",
			"85280",
			"85285"
		],
		landmarks: [
			"Tempe Town Lake bridges",
			"Industrial park south of 202",
			"Rail spur"
		],
		heatNotes: [
			"Afternoon backups near 101/202",
			"Summer vapor lock risk in surface lots"
		],
		nearbyCities: [
			"Phoenix",
			"Mesa",
			"Scottsdale"
		],
		etaMinutes: 25
	},
	{
		slug: "mesa",
		city: "Mesa",
		state: "AZ",
		centroid: {
			lat: 33.4152,
			lng: -111.8315
		},
		corridors: [
			"US-60",
			"Loop 202"
		],
		exitClusters: [
			"US-60 Exits 178–186",
			"202 Red Mountain"
		],
		neighborhoods: [
			"Downtown Mesa",
			"Dobson Ranch",
			"Lehi",
			"Eastmark",
			"Alta Mesa",
			"Superstition Springs"
		],
		zips: [
			"85201",
			"85202",
			"85203",
			"85204",
			"85205",
			"85209"
		],
		landmarks: [
			"Superstition Springs Center docks",
			"Falcon Field",
			"Industrial east Mesa"
		],
		heatNotes: [
			"Radiator failures on US-60 grades",
			"Event surges weekends"
		],
		nearbyCities: [
			"Tempe",
			"Chandler",
			"Gilbert"
		],
		etaMinutes: 30
	},
	{
		slug: "chandler",
		city: "Chandler",
		state: "AZ",
		centroid: {
			lat: 33.3062,
			lng: -111.8413
		},
		corridors: [
			"Loop 202 Santan",
			"I-10"
		],
		exitClusters: [
			"Santan Exits 40–55",
			"I-10 Exits 160–162"
		],
		neighborhoods: [
			"Ocotillo",
			"Sun Lakes",
			"Downtown",
			"West Chandler",
			"Cooper Commons",
			"Galveston"
		],
		zips: [
			"85224",
			"85225",
			"85226",
			"85248",
			"85249",
			"85286"
		],
		landmarks: [
			"Tech campus docks",
			"Santan industrial parks",
			"Rail spur south"
		],
		heatNotes: [
			"Rush hour clogs at I-10 access",
			"Summer compressor failures"
		],
		nearbyCities: [
			"Tempe",
			"Mesa",
			"Gilbert"
		],
		etaMinutes: 30
	},
	{
		slug: "glendale",
		city: "Glendale",
		state: "AZ",
		centroid: {
			lat: 33.5387,
			lng: -112.186
		},
		corridors: [
			"Loop 101 Agua Fria",
			"I-17"
		],
		exitClusters: [
			"101 Exits 7–12",
			"I-17 Exits 210–214"
		],
		neighborhoods: [
			"Arrowhead",
			"Catlin Court",
			"Westgate",
			"Manistee Ranch",
			"Deer Valley",
			"Sahuaro"
		],
		zips: [
			"85301",
			"85302",
			"85303",
			"85304",
			"85305",
			"85308"
		],
		landmarks: [
			"Stadium district docks",
			"Westgate logistics",
			"BNSF spur"
		],
		heatNotes: [
			"Evening event surges near stadium",
			"Alternator heat-soak issues"
		],
		nearbyCities: [
			"Phoenix",
			"Peoria",
			"Avondale"
		],
		etaMinutes: 28
	},
	{
		slug: "scottsdale",
		city: "Scottsdale",
		state: "AZ",
		centroid: {
			lat: 33.4942,
			lng: -111.9261
		},
		corridors: [
			"Loop 101",
			"Loop 202"
		],
		exitClusters: [
			"101 Exits 34–44",
			"101 Exits 45–48"
		],
		neighborhoods: [
			"Old Town",
			"North Scottsdale",
			"McCormick Ranch",
			"DC Ranch",
			"Gainey Ranch",
			"Scottsdale Airpark"
		],
		zips: [
			"85250",
			"85251",
			"85254",
			"85255",
			"85257",
			"85258"
		],
		landmarks: [
			"Airpark cargo",
			"Industrial north Scottsdale",
			"Distribution bays"
		],
		heatNotes: [
			"High idle heat in summer",
			"Tourist event spikes on weekends"
		],
		nearbyCities: [
			"Phoenix",
			"Tempe",
			"Paradise Valley"
		],
		etaMinutes: 27
	}
];

const $$Astro = createAstro("https://azmobiledieselrepair.com");
const $$Phoenix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Phoenix;
  const slug = "phoenix";
  const entry = await getEntryBySlug("locations", slug);
  if (!entry) throw Astro2.redirect("/404");
  const { Content } = await entry.render();
  const fm = entry.data || {};
  const model = (cities || []).find((c) => c.slug === slug) || {};
  const city = fm.city || model.city || "Phoenix";
  const state = fm.state || model.state || "AZ";
  const corridors = (fm.corridors?.length ? fm.corridors : model.corridors) || ["I-10", "I-17", "Loop 101"];
  const landmarks = (fm.landmarks?.length ? fm.landmarks : model.landmarks) || [];
  const faqs = (fm.faqs?.length ? fm.faqs : model.faqs) || [];
  const eta = Number.isFinite(fm.etaMinutes) ? fm.etaMinutes : model.etaMinutes || 30;
  const title = fm.metaTitle || `Mobile Diesel Mechanic \u2014 ${city}, ${state} | 24/7 Roadside & On-Site Repair`;
  const desc = fm.metaDescription || `On-site diesel repair in ${city}, ${state}. Coverage near ${corridors.slice(0, 2).join(", ")}. Avg ETA ${eta}\u2013${eta + 20} minutes.`;
  const heroBase = "/images/cities/phoenix-hero";
  const canonical = "/locations/phoenix";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": desc, "canonicalURL": canonical, "ogImage": `${heroBase}-1600.avif` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroCity", $$HeroCity, { "city": city, "headline": `Mobile Diesel Mechanic \u2014 ${city}, ${state}`, "subline": `24/7 Emergency Dispatch \u2022 On-Site Repairs \u2022 Licensed & Insured${corridors.length > 0 ? ` \u2022 Serving ${corridors.join(", ")}` : ""}` })} ${maybeRenderHead()}<section class="space-y-16 pt-8"> <section> <h2 class="text-3xl font-bold text-center mb-12">${city} Corridor Coverage</h2> ${renderComponent($$result2, "CorridorsGrid", $$CorridorsGrid, { "corridors": corridors, "city": city, "landmarks": landmarks, "etaMinutes": eta })} </section> <section class="prose prose-lg mx-auto text-center"> ${renderComponent($$result2, "Content", Content, {})} </section> <section> <h2 class="text-3xl font-bold text-center mb-12">Frequently Asked Questions — ${city}</h2> ${renderComponent($$result2, "FAQAccordion", $$FAQAccordion, { "faqs": faqs })} </section> </section> ` })}`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/pages/locations/phoenix.astro", void 0);

const $$file = "/Users/brandontheriot/projects/Diesel Repair/src/pages/locations/phoenix.astro";
const $$url = "/locations/phoenix";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Phoenix,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
