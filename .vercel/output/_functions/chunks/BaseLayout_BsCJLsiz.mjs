import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, u as unescapeHTML, r as renderComponent, i as renderSlot, j as renderHead } from './astro/server_b5lYJ8aU.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { P as PHONE_E164, a as PHONE_DISPLAY, B as BUSINESS_NAME, b as SERVICE_AREA_CITIES, c as SERVICE_RADIUS_METERS, C as COMPANY_LNG, d as COMPANY_LAT, S as SITE_ORIGIN } from './company_OHu7kWSL.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const COMPANY_CONFIG = {
    companyName: "AZ Mobile Diesel Repair",
    phoneLink: `tel:${PHONE_E164}`
  };
  const navigationItems = [
    { label: "SERVICES", href: "#services" },
    { label: "LOCATIONS", href: "#service-area" },
    { label: "BLOG", href: "#recent-jobs" },
    { label: "ABOUT", href: "#why-choose-us" },
    { label: "CONTACT", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-white border-b border-gray-200"> <div class="container mx-auto px-4"> <div class="flex h-28 items-center justify-between"> <!-- Logo --> <div class="flex items-center relative z-10"> <button class="flex items-center" id="logo-button"> <img src="/lovable-uploads/Truck logo Header Logo.webp"${addAttribute(`${COMPANY_CONFIG.companyName} Logo`, "alt")} width="320" height="320" loading="eager" class="h-44 w-auto object-contain relative z-20" style="margin-top: 10px; margin-bottom: -50px;"> </button> </div> <!-- Desktop Navigation --> <nav class="hidden lg:flex items-center space-x-10"> ${navigationItems.map((item) => renderTemplate`<button class="nav-button text-gray-700 font-bold text-sm uppercase tracking-wider hover:text-orange-600 transition-colors duration-200"${addAttribute(item.href, "data-href")}> ${item.label} </button>`)} </nav> <!-- Call Now Button --> <div class="hidden lg:block mr-2"> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-sm uppercase tracking-wide px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-1 inline-flex min-h-[44px]"> <!-- Phone icon as SVG --> <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
CALL NOW
</a> </div> <!-- Mobile Menu Button --> <div class="lg:hidden"> <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"> <span class="sr-only">Open main menu</span> <!-- Menu icon --> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu Overlay (Hidden by default) --> <div id="mobile-menu" class="lg:hidden hidden fixed inset-0 z-40"> <div class="fixed inset-0 bg-black bg-opacity-50"></div> <div class="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-6"> <div class="flex justify-between items-center mb-8"> <img src="/lovable-uploads/Truck logo Header Logo.webp"${addAttribute(`${COMPANY_CONFIG.companyName} Logo`, "alt")} width="120" height="120" loading="lazy" class="h-12 w-auto object-contain"> <button id="mobile-menu-close" class="text-gray-700 hover:text-orange-600"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex flex-col space-y-4"> ${navigationItems.map((item) => renderTemplate`<button class="mobile-nav-button text-left text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 py-2 uppercase tracking-wider"${addAttribute(item.href, "data-href")}> ${item.label} </button>`)} </nav> <div class="mt-8"> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2.5 text-sm uppercase tracking-wide rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
CALL NOW
</a> </div> </div> </div> </header>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Header.astro", void 0);

const COMPANY_CONFIG = {
  phoneNumber: PHONE_DISPLAY,
  phoneLink: `tel:${PHONE_E164}`};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white py-10"> <div class="container mx-auto px-4"> <!-- Company header with contact info --> <div class="mb-8 pb-8 border-b border-gray-700"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-start"> <!-- Company info section - spans 3 columns --> <div class="md:col-span-3 text-center md:text-left"> <!-- Horizontal logo --> <img src="/images/az-mobile-diesel-logo.bg-removed.padded.webp" alt="AZ Mobile Diesel Repair" width="200" height="120" loading="lazy" class="max-h-28 md:max-h-32 w-auto object-contain mx-auto md:mx-0 mb-3"> <p class="text-gray-300 text-lg font-medium tracking-wide">24/7 Emergency Service</p> <p class="text-gray-400 text-sm mt-1">Available Day & Night</p> </div> <!-- Contact section --> <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:mt-8"> <!-- Phone number --> <div class="text-diesel-orange font-bold text-2xl"> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="hover:text-diesel-hover transition-colors"> ${COMPANY_CONFIG.phoneNumber} </a> </div> <!-- Location with icon --> <div class="flex items-center space-x-2 text-gray-300"> <!-- Location icon --> <svg class="w-5 h-5 text-diesel-orange" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path> </svg> <span class="font-medium">Serving Phoenix, AZ</span> </div> <!-- Service description --> <p class="text-gray-300 text-sm">
Mobile Diesel Repair throughout Phoenix Metro
</p> <!-- Tap to call text --> <p class="text-gray-400 text-sm">Tap to Call Now</p> </div> </div> </div> <!-- 4-column footer links --> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Services Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">SERVICES</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Emergency Roadside</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Engine Repair</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Brake Repairs</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Electrical & Battery</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors flex items-center">
All Services
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a></li> </ul> </div> <!-- Service Areas Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">SERVICE AREAS</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">Phoenix, AZ</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">Mesa, AZ</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">Tempe, AZ</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">I-10 Corridor</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors flex items-center">
All Locations
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a></li> </ul> </div> <!-- Company Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">COMPANY</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#about" class="hover:text-diesel-orange transition-colors">About Us</a></li> <li><a href="#contact" class="hover:text-diesel-orange transition-colors">Contact Us</a></li> <li><a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="hover:text-diesel-orange transition-colors">Emergency Service</a></li> <li><a href="#fleet" class="hover:text-diesel-orange transition-colors">Fleet Services</a></li> </ul> </div> <!-- Resources Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">RESOURCES</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#faq" class="hover:text-diesel-orange transition-colors">I-10/I-17 Breakdown Guide</a></li> <li><a href="#faq" class="hover:text-diesel-orange transition-colors">Common Problems</a></li> <li><a href="#terms" class="hover:text-diesel-orange transition-colors">Terms of Service</a></li> <li><a href="#privacy" class="hover:text-diesel-orange transition-colors">Privacy Policy</a></li> </ul> </div> </div> <!-- Bottom copyright --> <div class="border-t border-gray-700 mt-8 pt-6 text-center"> <p class="text-gray-400 text-sm">© 2025 AZ Mobile Diesel Repair. All rights reserved.</p> </div> </div> </footer>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Footer.astro", void 0);

const $$MobileStickyCTA = createComponent(($$result, $$props, $$slots) => {
  const PHONE_LINK = `tel:${PHONE_E164}`;
  return renderTemplate`<!-- Mobile Sticky CTA Bar - Hidden on desktop, visible on mobile/tablet -->${maybeRenderHead()}<div class="mobile-sticky-cta lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-diesel-orange to-diesel-hover shadow-lg border-t-2 border-diesel-orange/60" data-astro-cid-3ysq45hi> <div class="px-4 py-3 flex items-center justify-between" data-astro-cid-3ysq45hi> <!-- Left: Service info --> <div class="flex-1" data-astro-cid-3ysq45hi> <div class="text-white font-bold text-sm leading-tight" data-astro-cid-3ysq45hi>
24/7 Diesel Repair
</div> <div class="text-white/80 text-xs" data-astro-cid-3ysq45hi>
Emergency Service Available
</div> </div> <!-- Right: Call button --> <a${addAttribute(PHONE_LINK, "href")} class="flex items-center gap-2 bg-white text-diesel-orange font-bold px-4 py-3 rounded-full shadow-lg hover:bg-gray-50 hover:text-diesel-hover transition-colors duration-200 active:scale-95 min-h-[44px]"${addAttribute(`Call ${BUSINESS_NAME} now for emergency diesel service`, "aria-label")} data-astro-cid-3ysq45hi> <!-- Phone icon --> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ysq45hi> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-3ysq45hi></path> </svg> <span class="text-sm" data-astro-cid-3ysq45hi>CALL NOW</span> </a> </div> <!-- Optional: Text/SMS secondary action --> <div class="px-4 pb-2" data-astro-cid-3ysq45hi> <a${addAttribute(`sms:${PHONE_E164}`, "href")} class="text-center block text-white/80 text-xs underline hover:text-white"${addAttribute(`Send text message to ${BUSINESS_NAME}`, "aria-label")} data-astro-cid-3ysq45hi>
Or text us at ${PHONE_DISPLAY} </a> </div> </div> <!-- Spacer to prevent content from being hidden behind sticky bar --> <div class="lg:hidden h-20 mobile-sticky-spacer" data-astro-cid-3ysq45hi></div> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/MobileStickyCTA.astro", void 0);

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
const $$Astro$1 = createAstro("https://azmobiledieselrepair.com");
const $$UnifiedSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UnifiedSchema;
  const { pageType, service, faqs, breadcrumbs, reviews, title } = Astro2.props;
  const orgId = "#organization";
  const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  const blocks = [];
  if (pageType === "home") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": orgId,
      "name": BUSINESS_NAME,
      "url": SITE_ORIGIN,
      "telephone": PHONE_E164,
      "email": "dispatch@azmobiledieselrepair.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "addressCountry": "US"
      },
      "serviceArea": {
        "@type": "Place",
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": COMPANY_LAT,
            "longitude": COMPANY_LNG
          },
          "geoRadius": SERVICE_RADIUS_METERS
        }
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": PHONE_E164,
        "contactType": "customer service",
        "areaServed": "US-AZ"
      },
      "areaServed": SERVICE_AREA_CITIES.map((c) => ({ "@type": "City", "name": c + ", AZ" })),
      "description": "Professional mobile diesel repair services for commercial vehicles in Phoenix Metro area. 24/7 emergency roadside assistance, fleet services, and on-site repairs.",
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Diesel Services",
        "itemListElement": (svcList || []).map((s) => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": s.name }
        }))
      },
      "sameAs": [],
      "image": SITE_ORIGIN + "/images/az-mobile-diesel-logo.webp",
      "logo": SITE_ORIGIN + "/images/az-mobile-diesel-logo.webp",
      ...Array.isArray(reviews) && reviews.length > 0 ? {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": avg(reviews.map((r) => Number(r?.rating || 0))).toFixed(1),
          "reviewCount": reviews.length
        }
      } : {}
    });
    blocks.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": SITE_ORIGIN + "/#website",
      "url": SITE_ORIGIN,
      "name": BUSINESS_NAME,
      "publisher": { "@id": orgId }
    });
    blocks.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Mobile Diesel Repair Services",
      "itemListElement": (svcList || []).map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Service",
          "name": s.name,
          "provider": { "@id": orgId }
        }
      }))
    });
  } else {
    const autoRepairSchema = {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": orgId,
      "name": BUSINESS_NAME,
      "url": SITE_ORIGIN,
      "telephone": PHONE_E164,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "addressCountry": "US"
      },
      "areaServed": SERVICE_AREA_CITIES.map((c) => ({ "@type": "City", "name": c + ", AZ" })),
      "description": "Professional mobile diesel repair and 24/7 emergency roadside assistance for commercial vehicles across Phoenix Metro area.",
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Diesel Services",
        "itemListElement": (svcList || []).map((s) => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": s.name }
        }))
      },
      "image": SITE_ORIGIN + "/images/az-mobile-diesel-logo.webp",
      "logo": SITE_ORIGIN + "/images/az-mobile-diesel-logo.webp",
      ...Array.isArray(reviews) && reviews.length > 0 ? {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": avg(reviews.map((r) => Number(r?.rating || 0))).toFixed(1),
          "reviewCount": reviews.length
        }
      } : {}
    };
    blocks.push(autoRepairSchema);
  }
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
  if (pageType === "city") {
    const cityName = title?.includes("\u2014") ? title.split("\u2014")[1]?.trim()?.replace(", AZ", "") || "Phoenix" : "Phoenix";
    const phoneNumber = PHONE_E164;
    const serviceArea = cityName === "Phoenix" ? [
      "I-10 Downtown\u2013West Valley",
      "I-17 Stack\u2013Deer Valley",
      "Loop 202 Santan/Red Mtn"
    ] : [`${cityName} area`];
    blocks.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BUSINESS_NAME,
      "url": SITE_ORIGIN,
      "telephone": phoneNumber,
      "areaServed": cityName + ", AZ",
      "serviceArea": serviceArea,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Diesel Services",
        "itemListElement": (svcList || []).map((s) => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": s.name }
        }))
      }
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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://azmobiledieselrepair.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, pageType, description, service, faqs, breadcrumbs, reviews, heroImage, heroType, ogImage, ogImageAlt } = Astro2.props;
  const metaDescription = description || "Professional mobile diesel repair services for Phoenix Metro area. 24/7 emergency roadside assistance, fleet services, and commercial vehicle repairs.";
  const metaKeywords = pageType === "service" && service?.name ? `${service.name}, mobile diesel repair, Phoenix diesel mechanic, emergency roadside assistance, commercial truck repair` : pageType === "city" ? `mobile diesel repair, Phoenix diesel mechanic, emergency roadside assistance, ${title.includes("—") ? title.split("—")[1]?.trim() : "Phoenix"} truck repair, commercial diesel service` : "mobile diesel repair, Phoenix diesel mechanic, emergency roadside assistance, commercial truck repair, fleet services, diesel engine repair";
  const robotsContent = "index,follow" ;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="robots"', '><meta name="description"', '><meta name="keywords"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Business Information Meta Tags --><meta name="author"', '><meta name="business"', '><meta name="geo.region" content="US-AZ"><meta name="geo.placename" content="Phoenix, Arizona"><meta name="geo.position" content="33.4484;-112.0740"><meta name="ICBM" content="33.4484, -112.0740"><!-- OpenGraph meta tags for social sharing --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name"', '><meta property="og:type"', '><meta property="og:locale" content="en_US"><meta property="og:image"', '><meta property="og:image:width"', '><meta property="og:image:height"', '><meta property="og:image:alt"', '><!-- Twitter Card meta tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><!-- Canonical URL --><link rel="canonical"', `><!-- Font Optimization --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"><!-- Hero Image Preload for LCP Optimization (Homepage only) -->`, "", '<noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"></noscript><!-- Critical CSS Inline for immediate above-the-fold rendering --><!-- LCP Preload for hero images -->', "", `<!-- LCP Preload for hero images --><!-- <LCPPreload heroPath={heroImage} heroType={heroType} /> --><!-- Preload homepage hero for faster LCP discovery --><!-- {pageType === 'home' && (
      <SeoHints heroSrc="/lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.webp" />
    )} -->`, "", '</head> <body class="min-h-screen bg-background text-foreground font-sans pb-20 md:pb-0" data-astro-cid-37fxchfa> ', " <main data-astro-cid-37fxchfa> ", " </main> ", " <!-- Mobile Sticky CTA for persistent call access --> ", ` <!-- Optimized JavaScript Loading --> <script>
      // Minimal performance monitoring for Core Web Vitals
      function initCWV() {
        if (typeof window === 'undefined' || !window.performance) return;

        // Track First Contentful Paint
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Could log to analytics if needed
          });
        });
        observer.observe({ entryTypes: ['paint'] });

        // Track Largest Contentful Paint
        if ('LargestContentfulPaint' in window) {
          new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              // Could log to analytics if needed
            });
          }).observe({ entryTypes: ['largest-contentful-paint'] });
        }
      }

      // Initialize on idle to avoid blocking main thread
      if ('requestIdleCallback' in window) {
        requestIdleCallback(initCWV, { timeout: 2000 });
      } else {
        setTimeout(initCWV, 100);
      }
    </script> <!-- Deferred Non-Critical Scripts --> <script type="module">
      // Lazy load form enhancement when contact form is visible
      const contactForm = document.querySelector('#contact');
      if (contactForm && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              import('/js/forms.js').then(module => {
                if (module.initForms) module.initForms();
              });
              observer.disconnect();
            }
          });
        }, { rootMargin: '200px' });
        observer.observe(contactForm);
      }
    </script> </body> </html>`])), addAttribute(robotsContent, "content"), addAttribute(metaDescription, "content"), addAttribute(metaKeywords, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(BUSINESS_NAME, "content"), addAttribute(BUSINESS_NAME, "content"), addAttribute(title, "content"), addAttribute(metaDescription, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(BUSINESS_NAME, "content"), addAttribute(pageType === "city" ? "business.business" : "website", "content"), addAttribute(ogImage || `${SITE_ORIGIN}/images/az-mobile-diesel-repair-logo.png`, "content"), addAttribute(ogImage ? "1920" : "1200", "content"), addAttribute(ogImage ? "1080" : "630", "content"), addAttribute(ogImageAlt || "AZ Mobile Diesel Repair - Professional mobile diesel mechanics serving Phoenix Metro", "content"), addAttribute(title, "content"), addAttribute(metaDescription, "content"), addAttribute(ogImage || `${SITE_ORIGIN}/images/az-mobile-diesel-repair-logo.png`, "content"), addAttribute(ogImageAlt || "AZ Mobile Diesel Repair - Professional mobile diesel mechanics serving Phoenix Metro", "content"), addAttribute(Astro2.url.href, "href"), pageType === "home" || Astro2.url.pathname === "/" ? renderTemplate`<link rel="preload" as="image" imagesrcset="/images/hero-optimized/hero-1200w.avif 1200w, /images/hero-optimized/hero-1600w.avif 1600w, /images/hero-optimized/hero-2000w.avif 2000w" imagesizes="100vw" type="image/avif" fetchpriority="high">` : null, maybeRenderHead(), pageType === "home" && renderTemplate`<link rel="preload" as="image" href="/images/phoenix-mobile-diesel-mechanic-hero.webp" type="image/webp" fetchpriority="high">`, pageType === "city" && renderTemplate`<link rel="preload" as="image" href="/images/phoenix-metro-background.webp" type="image/webp" fetchpriority="high">`, renderComponent($$result, "UnifiedSchema", $$UnifiedSchema, { "pageType": pageType, "service": service, "faqs": faqs, "breadcrumbs": breadcrumbs, "reviews": reviews, "title": title, "data-astro-cid-37fxchfa": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "MobileStickyCTA", $$MobileStickyCTA, { "data-astro-cid-37fxchfa": true }));
}, "/Users/brandontheriot/projects/Diesel Repair/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, COMPANY_CONFIG as C };
