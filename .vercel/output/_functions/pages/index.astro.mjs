import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, h as renderScript } from '../chunks/astro/server_b5lYJ8aU.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsCJLsiz.mjs';
import 'clsx';
import { P as PHONE_E164 } from '../chunks/company_OHu7kWSL.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://azmobiledieselrepair.com");
const $$HeroLCP = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroLCP;
  const {
    src,
    alt,
    width,
    height,
    sizes = "(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px",
    class: className = "block w-full h-auto"
  } = Astro2.props;
  return renderTemplate`<!--
  HeroLCP: zero-CLS, LCP-friendly hero image with modern format support
  - Responsive <picture> with AVIF/WebP/fallback (using optimized responsive images)
  - Explicit width/height to reserve space (CLS=0)
  - loading='eager' + fetchpriority='high' to prioritize for LCP
  - decoding='async' to avoid main-thread jank
  - Responsive 'sizes' to hint correct candidate
-->${maybeRenderHead()}<picture> <source srcset="/images/hero-optimized/hero-1200w.avif 1200w, /images/hero-optimized/hero-1600w.avif 1600w, /images/hero-optimized/hero-2000w.avif 2000w" type="image/avif"${addAttribute(sizes, "sizes")}> <source srcset="/images/hero-optimized/hero-1200w.webp 1200w, /images/hero-optimized/hero-1600w.webp 1600w, /images/hero-optimized/hero-2000w.webp 2000w" type="image/webp"${addAttribute(sizes, "sizes")}> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")} loading="eager" decoding="async" fetchpriority="high"${addAttribute(sizes, "sizes")}${addAttribute(className, "class")} style="aspect-ratio: 16/9"> </picture>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/HeroLCP.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const COMPANY_CONFIG = {
    phoneLink: `tel:${PHONE_E164}`
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[88vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Mobile diesel mechanic assisting semi-truck in Phoenix desert at sunset" data-astro-cid-bbe6dxrz> <!-- Hero background image with LCP optimization --> <div class="absolute inset-0 w-full h-full" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "HeroLCP", $$HeroLCP, { "src": "/images/phoenix-mobile-diesel-mechanic-hero.png", "alt": "Mobile diesel mechanic assisting semi-truck in Phoenix desert at sunset", "width": 1920, "height": 1080, "class": "w-full h-full object-cover object-center", "sizes": "100vw", "data-astro-cid-bbe6dxrz": true })} </div> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" data-astro-cid-bbe6dxrz></div> <div class="relative z-10 text-center text-white px-4" data-astro-cid-bbe6dxrz> <h1 class="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight" data-astro-cid-bbe6dxrz>
MOBILE DIESEL MECHANIC
<br data-astro-cid-bbe6dxrz> <span class="text-primary" data-astro-cid-bbe6dxrz>IN PHOENIX, AZ</span> </h1> <!-- Trust Signals Above Fold --> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8" data-astro-cid-bbe6dxrz> <!-- Quality Promise --> <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2" data-astro-cid-bbe6dxrz> <span class="text-white font-bold text-lg" data-astro-cid-bbe6dxrz>We aim for 5-star results on every call</span> </div> <!-- Response Time --> <div class="bg-orange-500/90 backdrop-blur-sm rounded-full px-4 py-2 font-bold text-white" data-astro-cid-bbe6dxrz>
Average 25-min response near I-10/I-17
</div> </div> <p class="text-xl mb-10 max-w-4xl mx-auto font-medium md:text-2xl" data-astro-cid-bbe6dxrz>
24/7 On-Site Truck Repair Across the Phoenix Metro — I-10, I-17, Loop 101, 202 & 303.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-astro-cid-bbe6dxrz> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="hero-cta-primary flex items-center gap-2 text-lg px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[44px]" aria-label="Call AZ Mobile Diesel Repair now for service" data-astro-cid-bbe6dxrz> <!-- Phone icon --> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-bbe6dxrz></path> </svg>
CALL NOW (480) 307-7434
</a> <button id="dispatch-button" class="hero-cta-secondary border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-5 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent min-h-[44px]" aria-label="Request dispatch for diesel repair service" data-astro-cid-bbe6dxrz>
REQUEST DISPATCH
</button> </div> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg" data-astro-cid-bbe6dxrz> <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold" data-astro-cid-bbe6dxrz>
Licensed & Insured
</div> <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold" data-astro-cid-bbe6dxrz>
15+ Years Fleet Experience
</div> <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold" data-astro-cid-bbe6dxrz>
Valley-Wide Coverage
</div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://azmobiledieselrepair.com");
const $$ServiceIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceIcon;
  const {
    src,
    alt,
    loading = "lazy",
    class: className = "w-20 h-20 mx-auto object-contain"
  } = Astro2.props;
  const imageSrc = `/images/${src}`;
  const isHydraulics = src.includes("Hydraulic");
  const isFuelSystem = src.includes("Fuel_Systems");
  const isACCooling = src.includes("AC Cooling");
  const isBrakeRepairs = src.includes("Brakes");
  const needsLargeSize = isHydraulics || isFuelSystem || isBrakeRepairs;
  const needsMediumSize = isACCooling;
  let finalClassName = className;
  if (needsLargeSize) {
    finalClassName = className.replace("w-20 h-20", "w-24 h-24");
  } else if (needsMediumSize) {
    finalClassName = className.replace("w-20 h-20", "w-22 h-22");
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(imageSrc, "src")}${addAttribute(alt, "alt")}${addAttribute(loading, "loading")} decoding="async"${addAttribute(finalClassName, "class")}${addAttribute(needsLargeSize ? "96" : needsMediumSize ? "88" : "80", "width")}${addAttribute(needsLargeSize ? "96" : needsMediumSize ? "88" : "80", "height")} style="aspect-ratio: 1/1; object-fit: contain;">`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ServiceIcon.astro", void 0);

const $$TopServices = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      name: "Emergency Roadside",
      url: "/services/emergency-roadside-assistance",
      icon: "24-7-mobile-diesel-roadside-assistance-phoenix.webp"
    },
    {
      name: "Engine Diagnostics",
      url: "/services/engine-diagnostics",
      icon: "engine-diagnostics.webp"
    },
    {
      name: "Electrical & Battery",
      url: "/services/electrical-battery",
      icon: "diesel-electrical-battery-system-repair.webp"
    },
    {
      name: "Brake Repairs",
      url: "/services/brake-repairs",
      icon: "diesel-brake-system-repair-phoenix.webp"
    },
    {
      name: "Suspension & Steering",
      url: "/services/suspension-steering",
      icon: "suspension-steering.webp"
    },
    {
      name: "Hydraulics",
      url: "/services/hydraulics",
      icon: "hydraulic-suspension-repair-commercial-diesel.webp"
    },
    {
      name: "A/C & Cooling",
      url: "/services/ac-cooling",
      icon: "diesel-truck-ac-repair-phoenix-service.webp"
    },
    {
      name: "Fuel System Repair",
      url: "/services/fuel-system",
      icon: "diesel-fuel-system-repair-service.webp"
    },
    {
      name: "Wheel Seals",
      url: "/services/wheel-seals",
      icon: "wheel-seals.webp"
    },
    {
      name: "Mobile Diesel Repair",
      url: "/services/mobile-diesel-repair",
      icon: "mobile-diesel-repair.webp"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50" data-astro-cid-gdsb7ip7> <div class="container mx-auto px-4" data-astro-cid-gdsb7ip7> <div class="text-center mb-12" data-astro-cid-gdsb7ip7> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4" data-astro-cid-gdsb7ip7>
Top Services We Provide
</h2> <p class="text-lg text-gray-600 font-medium" data-astro-cid-gdsb7ip7>
Professional <a href="/services/mobile-diesel-repair" class="text-primary hover:underline" data-astro-cid-gdsb7ip7>Mobile Diesel Repair</a> and <a href="/services/emergency-roadside-assistance" class="text-primary hover:underline" data-astro-cid-gdsb7ip7>Emergency Roadside Assistance</a> across Phoenix metro
</p> </div> <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto" data-astro-cid-gdsb7ip7> ${services.map((service) => renderTemplate`<a${addAttribute(service.url, "href")} class="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-primary transition-all duration-300 group min-h-[120px] flex flex-col justify-center" data-astro-cid-gdsb7ip7> <div class="mb-3" data-astro-cid-gdsb7ip7> ${renderComponent($$result, "ServiceIcon", $$ServiceIcon, { "src": service.icon, "alt": `${service.name} icon`, "loading": "lazy", "class": "w-20 h-20 mx-auto object-contain", "data-astro-cid-gdsb7ip7": true })} </div> <h3 class="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors" data-astro-cid-gdsb7ip7> ${service.name} </h3> </a>`)} </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/homepage/TopServices.astro", void 0);

const $$ServiceAreaCoverage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
Phoenix Metro Coverage
</h2> <p class="text-xl text-gray-300 max-w-3xl mx-auto">
Fast response times across all major corridors and industrial areas
</p> </div> <div class="max-w-6xl mx-auto"> <!-- Primary Coverage Areas --> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"> <div class="text-3xl font-bold text-orange-400 mb-2">I-10</div> <div class="text-white font-medium mb-1">Corridor</div> <div class="text-gray-300 text-sm">Phoenix ↔ Tucson ↔ CA</div> <div class="text-orange-300 text-xs mt-2">30-60 min response</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"> <div class="text-3xl font-bold text-orange-400 mb-2">I-17</div> <div class="text-white font-medium mb-1">Corridor</div> <div class="text-gray-300 text-sm">Phoenix ↔ Flagstaff</div> <div class="text-orange-300 text-xs mt-2">30-60 min response</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"> <div class="text-3xl font-bold text-orange-400 mb-2">Loop 101</div> <div class="text-white font-medium mb-1">Full Circle</div> <div class="text-gray-300 text-sm">Metro Ring Road</div> <div class="text-orange-300 text-xs mt-2">45-90 min response</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"> <div class="text-3xl font-bold text-orange-400 mb-2">Loop 202</div> <div class="text-white font-medium mb-1">Inner Loop</div> <div class="text-gray-300 text-sm">Core Metro Area</div> <div class="text-orange-300 text-xs mt-2">30-60 min response</div> </div> </div> <!-- Key Service Areas --> <div class="grid md:grid-cols-3 gap-8 mb-12"> <div class="bg-white/5 rounded-lg p-6"> <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"> <svg class="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg>
Major Cities
</h3> <ul class="space-y-2 text-gray-300"> <li>• Phoenix (Downtown & Industrial)</li> <li>• Tempe & Mesa</li> <li>• Chandler & Gilbert</li> <li>• Glendale & Peoria</li> <li>• Scottsdale & Paradise Valley</li> <li>• Avondale & Goodyear</li> </ul> </div> <div class="bg-white/5 rounded-lg p-6"> <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"> <svg class="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20"> <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path> <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"></path> </svg>
Truck Stops
</h3> <ul class="space-y-2 text-gray-300"> <li>• TA Travel Center (I-10)</li> <li>• Pilot Flying J Locations</li> <li>• Love's Travel Stops</li> <li>• Circle K Fleet Centers</li> <li>• Independent Truck Plazas</li> <li>• Fuel & Service Centers</li> </ul> </div> <div class="bg-white/5 rounded-lg p-6"> <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2"> <svg class="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path> <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path> </svg>
Industrial Areas
</h3> <ul class="space-y-2 text-gray-300"> <li>• Sky Harbor Cargo Area</li> <li>• Deer Valley Distribution</li> <li>• West Phoenix Industrial</li> <li>• Tempe/Mesa Warehouses</li> <li>• Chandler Manufacturing</li> <li>• Tolleson Logistics Hub</li> </ul> </div> </div> <!-- Emergency Contact Bar --> <div class="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 text-center"> <div class="text-2xl font-bold text-white mb-2">
24/7 Emergency Roadside Service
</div> <div class="text-orange-100 mb-6">
Broken down anywhere in the Phoenix Metro? We'll get to you fast.
</div> <a${addAttribute(`tel:${PHONE_E164}`, "href")} class="inline-flex items-center gap-3 bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg min-h-[44px]"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
CALL (480) 307-7434
</a> </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ServiceAreaCoverage.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <!-- Main Heading --> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-8">
Why Choose AZ Mobile Diesel
</h2> <!-- Value Propositions Pills --> <div class="flex justify-center items-center gap-4 flex-wrap"> <span class="bg-white text-orange-500 font-medium px-6 py-3 rounded-full text-lg border border-orange-500">
Licensed & Insured
</span> <span class="bg-white text-orange-500 font-medium px-6 py-3 rounded-full text-lg border border-orange-500">
24/7 Dispatch
</span> <span class="bg-white text-orange-500 font-medium px-6 py-3 rounded-full text-lg border border-orange-500">
15+ Years Experience
</span> </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/WhyChooseUs.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto text-center"> <!-- Main Heading --> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
How It Works
</h2> <!-- Subtitle --> <p class="text-lg text-gray-600 mb-12">
Simple, fast, and reliable Diesel Repair Service
</p> <!-- 3 Steps Grid --> <div class="grid md:grid-cols-3 gap-12 mb-12"> <div class="text-center"> <!-- Phone Icon --> <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-black"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">1. Call</h3> <p class="text-gray-600">Contact our dispatch team with your location and diesel issue description.</p> </div> <div class="text-center"> <!-- Search/Diagnose Icon --> <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-black"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">2. Diagnose</h3> <p class="text-gray-600">Our mobile technician arrives and performs comprehensive <span class="text-orange-500 font-medium">Engine Diagnostics</span>.</p> </div> <div class="text-center"> <!-- Wrench/Repair Icon --> <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-black"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">3. Repair</h3> <p class="text-gray-600">Complete <span class="text-orange-500 font-medium">Mobile Diesel Repair</span> performed on-site to get you back on the road.</p> </div> </div> <!-- CTA Buttons --> <div class="flex justify-center items-center gap-4 flex-wrap"> <a href="tel:4803077434" class="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-colors">
Call (480) 307-7434
</a> <a href="#contact" class="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium px-8 py-4 rounded-full text-lg transition-colors">
Get Started
</a> </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/HowItWorks.astro", void 0);

const $$FleetServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-5xl mx-auto"> <div class="bg-gray-50 rounded-2xl p-8 md:p-12"> <div class="grid lg:grid-cols-2 gap-8 items-center"> <!-- Left Content --> <div> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">
Fleet Programs for Phoenix Operators
</h2> <p class="text-gray-600 mb-6">
Scheduled yard calls, PM windows aligned to your operations, fast parts sourcing near I-10/I-17, consolidated invoices.
</p> <div class="mb-6"> <h3 class="font-bold text-gray-900 mb-3">What you get:</h3> <p class="text-gray-600">
Yard calls, DOT fail recovery/re-inspection, simple approvals, net terms.
</p> </div> <div class="mb-8"> <h3 class="font-bold text-gray-900 mb-3">Who we help:</h3> <p class="text-gray-600">
Local delivery fleets, regional carriers, owner-ops with 3–10 trucks.
</p> </div> </div> <!-- Right Content - CTA Buttons --> <div class="flex flex-col justify-center items-center lg:items-end space-y-4"> <a href="#contact" class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-base transition-colors min-w-[200px] text-center">
Fleet Onboarding
</a> <a href="tel:4803077434" class="inline-block bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-3 rounded-full text-base transition-colors min-w-[200px] text-center">
Talk to Dispatch
</a> </div> </div> <!-- Footer Text --> <div class="text-center mt-8 pt-6 border-t border-gray-200"> <p class="text-gray-500 text-sm">
Serving Phoenix Metro fleet operators since 2020
</p> </div> </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/FleetServices.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <!-- Testimonial Card --> <div class="bg-white rounded-2xl p-8 shadow-lg"> <div class="flex items-start gap-6"> <!-- Avatar --> <div class="flex-shrink-0"> <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center"> <span class="text-white text-xl font-bold">MR</span> </div> </div> <!-- Testimonial Content --> <div class="flex-1"> <blockquote class="text-lg text-gray-700 mb-6 leading-relaxed">
"AZ Mobile Diesel saved our fleet when three trucks broke down on I-10 during peak season. Their techs arrived within 45 minutes and had us back on schedule the same day. Professional service, fair pricing, and they understand the urgency of keeping commercial vehicles moving."
</blockquote> <div class="flex items-center justify-between"> <div> <div class="font-bold text-gray-900">Mike Rodriguez</div> <div class="text-gray-600">Fleet Manager</div> <div class="text-gray-500 text-sm">Phoenix, AZ</div> </div> <!-- Verified Badge --> <div class="flex items-center gap-2 text-gray-500 text-sm"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Verified Fleet Customer
</div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Testimonial.astro", void 0);

const $$PopularFixes = createComponent(($$result, $$props, $$slots) => {
  const popularFixes = [
    {
      title: "Overheats in 115\xB0F",
      description: "Phoenix summer heat challenges"
    },
    {
      title: "DEF/DPF faults on route",
      description: "Engine diagnostic solutions"
    },
    {
      title: "A/C quits at idle",
      description: "Cooling system repairs"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <!-- Main Heading --> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
Popular Fixes This Month
</h2> <!-- Subtitle --> <p class="text-lg text-gray-600 mb-12">
Common issues we solve on Phoenix highways
</p> <!-- 3 Fix Cards --> <div class="grid md:grid-cols-3 gap-8 items-stretch"> ${popularFixes.map((fix) => renderTemplate`<div class="group relative h-full"> <!-- Main Card --> <div class="relative bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 hover:shadow-xl h-full flex flex-col"> <!-- Content --> <h3 class="font-black text-xl text-gray-900 mb-4 hover:text-orange-600 transition-colors leading-tight h-14 flex items-center justify-center"> ${fix.title} </h3> <p class="text-gray-600 transition-colors leading-relaxed flex-grow flex items-start justify-center"> ${fix.description} </p> <!-- Bottom Accent --> <div class="mt-6 h-1 w-16 bg-orange-500 mx-auto rounded-full transition-colors"></div> </div> </div>`)} </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/homepage/PopularFixes.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "What areas of Phoenix do you service?",
      answer: "We provide mobile diesel repair services throughout the entire Phoenix Metro area, including Scottsdale, Tempe, Mesa, Glendale, Peoria, Chandler, Gilbert, and surrounding communities. Our technicians are strategically positioned for fast response times across all major corridors including I-10, I-17, Loop 101, and SR-202."
    },
    {
      question: "How quickly can you respond to roadside emergencies?",
      answer: "Our typical response time is 30-90 min inside metro areas. We maintain mobile units positioned strategically throughout the valley to ensure rapid deployment to your location. For fleet customers, we offer priority response scheduling and dedicated service windows."
    },
    {
      question: "What types of diesel repairs can you perform on-site?",
      answer: "We handle comprehensive mobile diesel repairs including engine diagnostics, A/C system repairs, cooling system service, fuel system cleaning, electrical troubleshooting, brake repairs, and preventive maintenance. Our fully-equipped mobile units carry the tools and parts needed for most common diesel issues, eliminating the need for costly towing."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50" id="faq"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <!-- Main Heading --> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
Frequently Asked Questions
</h2> <p class="text-lg text-gray-600">
Common questions about our mobile diesel services
</p> </div> <!-- FAQ Cards --> <div class="grid gap-6"> ${faqs.map((faq) => renderTemplate`<div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"> <h3 class="text-lg font-bold text-gray-900 mb-3"> ${faq.question} </h3> <p class="text-gray-600 leading-relaxed"> ${faq.answer} </p> </div>`)} </div> </div> </div> </section>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/FAQ.astro", void 0);

const $$ContactFormSimple = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-background" data-astro-cid-niucf6ya> <div class="container mx-auto px-4" data-astro-cid-niucf6ya> <div class="text-center mb-16" data-astro-cid-niucf6ya> <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6" data-astro-cid-niucf6ya>
Get Emergency Help Fast
</h2> <p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-4" data-astro-cid-niucf6ya>
Tell us your name, number, and what's wrong. We'll call back within 15 minutes.
</p> <div class="flex items-center justify-center gap-2 text-sm text-muted-foreground" data-astro-cid-niucf6ya> <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold" data-astro-cid-niucf6ya>
✓ 99% same-day response
</div> <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold" data-astro-cid-niucf6ya>
✓ We come to you
</div> </div> </div> <div class="max-w-lg mx-auto" data-astro-cid-niucf6ya> <!-- Step 1: Essential Info Only (High Conversion) --> <form id="contact-form-simple" class="space-y-6 bg-white rounded-lg shadow-lg p-6 border" data-astro-cid-niucf6ya> <div class="text-center mb-6" data-astro-cid-niucf6ya> <div class="inline-flex items-center gap-2 bg-orange-50 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold" data-astro-cid-niucf6ya> <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse" data-astro-cid-niucf6ya></div>
Quick Contact - Less than 15 minutes
</div> </div> <!-- Emergency Toggle at Top --> <div class="flex items-center justify-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200" data-astro-cid-niucf6ya> <input type="checkbox" id="emergency-simple" class="w-4 h-4 rounded border-red-300 text-red-600 focus:ring-red-500" data-astro-cid-niucf6ya> <label for="emergency-simple" class="text-red-800 font-bold text-lg" data-astro-cid-niucf6ya>
🚨 EMERGENCY / Down at Roadside
</label> </div> <!-- Name --> <div data-astro-cid-niucf6ya> <label for="name-simple" class="text-foreground font-semibold block mb-2" data-astro-cid-niucf6ya>Your Name *</label> <input id="name-simple" name="name" type="text" required placeholder="John Smith" class="w-full h-12 px-4 border-2 border-border bg-background rounded-lg text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-orange-500" data-astro-cid-niucf6ya> </div> <!-- Phone --> <div data-astro-cid-niucf6ya> <label for="phone-simple" class="text-foreground font-semibold block mb-2" data-astro-cid-niucf6ya>Phone Number *</label> <input id="phone-simple" name="phone" type="tel" required placeholder="(480) 555-0123" class="w-full h-12 px-4 border-2 border-border bg-background rounded-lg text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-orange-500" data-astro-cid-niucf6ya> </div> <!-- Problem Description --> <div data-astro-cid-niucf6ya> <label for="problem-simple" class="text-foreground font-semibold block mb-2" data-astro-cid-niucf6ya>What's Wrong? *</label> <textarea id="problem-simple" name="problem" required placeholder="Engine won't start, check engine light, overheating, brake issues, etc." rows="3" class="w-full px-4 py-3 border-2 border-border bg-background rounded-lg text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none focus:border-orange-500" data-astro-cid-niucf6ya></textarea> <p class="text-sm text-muted-foreground mt-1" data-astro-cid-niucf6ya>
Brief description is fine - we'll get details when we call back
</p> </div> <!-- Location (Essential for dispatch) --> <div data-astro-cid-niucf6ya> <label for="location-simple" class="text-foreground font-semibold block mb-2" data-astro-cid-niucf6ya>Location *</label> <input id="location-simple" name="location" type="text" required placeholder="Zip code or cross-streets" class="w-full h-12 px-4 border-2 border-border bg-background rounded-lg text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-orange-500" data-astro-cid-niucf6ya> <p class="text-xs text-muted-foreground mt-1" data-astro-cid-niucf6ya>
For accurate dispatch and ETA
</p> </div> <!-- Primary Submit Button --> <button type="submit" class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg min-h-[44px]" id="submit-simple" data-astro-cid-niucf6ya>
Request Emergency Service
</button> <!-- Alternative: Show Step 2 --> <div class="text-center pt-4 border-t" data-astro-cid-niucf6ya> <button type="button" id="show-details-btn" class="text-muted-foreground underline hover:text-foreground transition-colors text-sm" data-astro-cid-niucf6ya>
Add more details about vehicle, service type, timeline →
</button> </div> </form> <!-- Step 2: Additional Details (Hidden by default) --> <div id="additional-details" class="hidden mt-6 bg-gray-50 rounded-lg p-6 border" data-astro-cid-niucf6ya> <h3 class="font-semibold text-foreground mb-4" data-astro-cid-niucf6ya>Optional Additional Details</h3> <div class="space-y-4" data-astro-cid-niucf6ya> <div data-astro-cid-niucf6ya> <label for="service-type" class="text-sm font-medium text-foreground block mb-1" data-astro-cid-niucf6ya>Service Type</label> <select id="service-type" name="serviceType" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm" data-astro-cid-niucf6ya> <option value="" data-astro-cid-niucf6ya>Select if known</option> <option value="Emergency Roadside" data-astro-cid-niucf6ya>Emergency Roadside</option> <option value="Engine Issues" data-astro-cid-niucf6ya>Engine Issues</option> <option value="Electrical" data-astro-cid-niucf6ya>Electrical</option> <option value="Brakes" data-astro-cid-niucf6ya>Brakes</option> <option value="A/C Issues" data-astro-cid-niucf6ya>A/C Issues</option> <option value="Other" data-astro-cid-niucf6ya>Other</option> </select> </div> <div data-astro-cid-niucf6ya> <label for="vehicle-info" class="text-sm font-medium text-foreground block mb-1" data-astro-cid-niucf6ya>Vehicle Type</label> <input id="vehicle-info" name="vehicleInfo" type="text" placeholder="Semi, box truck, delivery truck, etc." class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm" data-astro-cid-niucf6ya> </div> <div data-astro-cid-niucf6ya> <label for="timeline" class="text-sm font-medium text-foreground block mb-1" data-astro-cid-niucf6ya>When needed?</label> <select id="timeline" name="timeline" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm" data-astro-cid-niucf6ya> <option value="" data-astro-cid-niucf6ya>Select timeline</option> <option value="ASAP" data-astro-cid-niucf6ya>ASAP / Emergency</option> <option value="Within 2 hours" data-astro-cid-niucf6ya>Within 2 hours</option> <option value="Same day" data-astro-cid-niucf6ya>Same day</option> <option value="Schedule later" data-astro-cid-niucf6ya>Schedule for later</option> </select> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/brandontheriot/projects/Diesel Repair/src/components/ContactFormSimple.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ContactFormSimple.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AZ Mobile Diesel Repair - Mobile Diesel Mechanic in Phoenix, AZ", "pageType": "home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TopServices", $$TopServices, {})}  ${maybeRenderHead()}<section class="py-12 bg-gradient-to-r from-orange-500 to-red-600"> <div class="container mx-auto px-4 text-center"> <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
Need Emergency Diesel Repair Right Now?
</h3> <p class="text-orange-100 mb-6 text-lg">
24/7 roadside service across Phoenix Metro • Average 25-min response
</p> <a${addAttribute(`tel:${PHONE_E164}`, "href")} class="inline-flex items-center gap-3 bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg min-h-[44px]"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
CALL (480) 307-7434
</a> </div> </section> ${renderComponent($$result2, "ServiceAreaCoverage", $$ServiceAreaCoverage, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "FleetServices", $$FleetServices, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "PopularFixes", $$PopularFixes, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "ContactFormSimple", $$ContactFormSimple, {})} ` })}`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/pages/index.astro", void 0);

const $$file = "/Users/brandontheriot/projects/Diesel Repair/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
