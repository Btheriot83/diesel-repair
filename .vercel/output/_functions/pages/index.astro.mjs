import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent, h as renderScript, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_DXK4Mque.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_COTkCVMy.mjs';
import 'clsx';
/* empty css                                 */
import { a as SERVICE_AREA_CITIES, P as PHONE_E164, b as PHONE_DISPLAY } from '../chunks/company_B8TTLzr1.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const COMPANY_CONFIG = {
    companyName: "AZ Mobile Diesel Repair",
    phoneLink: "tel:+14803077434"
  };
  const navigationItems = [
    { label: "SERVICES", href: "#services" },
    { label: "LOCATIONS", href: "#service-area" },
    { label: "BLOG", href: "#recent-jobs" },
    { label: "ABOUT", href: "#why-choose-us" },
    { label: "CONTACT", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-white border-b border-gray-200"> <div class="container mx-auto px-4"> <div class="flex h-28 items-center justify-between"> <!-- Logo --> <div class="flex items-center mt-6 ml-4"> <button class="flex items-center" id="logo-button"> <img src="/lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.png"${addAttribute(`${COMPANY_CONFIG.companyName} Logo`, "alt")} class="h-36 w-auto"> </button> </div> <!-- Desktop Navigation --> <nav class="hidden lg:flex items-center space-x-10"> ${navigationItems.map((item) => renderTemplate`<button class="nav-button text-gray-700 font-bold text-sm uppercase tracking-wider hover:text-orange-600 transition-colors duration-200"${addAttribute(item.href, "data-href")}> ${item.label} </button>`)} </nav> <!-- Call Now Button --> <div class="hidden lg:block"> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium text-xs uppercase tracking-wide px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-1 inline-flex"> <!-- Phone icon as SVG --> <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
CALL NOW
</a> </div> <!-- Mobile Menu Button --> <div class="lg:hidden"> <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"> <span class="sr-only">Open main menu</span> <!-- Menu icon --> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu Overlay (Hidden by default) --> <div id="mobile-menu" class="lg:hidden hidden fixed inset-0 z-40"> <div class="fixed inset-0 bg-black bg-opacity-50"></div> <div class="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl p-6"> <div class="flex justify-between items-center mb-8"> <img src="/lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.png"${addAttribute(`${COMPANY_CONFIG.companyName} Logo`, "alt")} class="h-24 w-auto"> <button id="mobile-menu-close" class="text-gray-700 hover:text-orange-600"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex flex-col space-y-4"> ${navigationItems.map((item) => renderTemplate`<button class="mobile-nav-button text-left text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200 py-2 uppercase tracking-wider"${addAttribute(item.href, "data-href")}> ${item.label} </button>`)} </nav> <div class="mt-8"> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2.5 text-sm uppercase tracking-wide rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
CALL NOW
</a> </div> </div> </div> </header>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://azmobiledieselrepair.com");
const $$HeroLCP = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  HeroLCP: zero-CLS, LCP-friendly hero image
  - Explicit width/height to reserve space (CLS=0)
  - loading='eager' + fetchpriority='high' to prioritize for LCP
  - decoding='async' to avoid main-thread jank
  - Responsive 'sizes' to hint correct candidate
-->${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")} loading="eager" decoding="async" fetchpriority="high"${addAttribute(sizes, "sizes")}${addAttribute(className, "class")}>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/HeroLCP.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const COMPANY_CONFIG = {
    phoneLink: "tel:+14803077434"
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[88vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Mobile diesel mechanic assisting semi-truck in Phoenix desert at sunset" data-astro-cid-bbe6dxrz> <!-- Hero background image with LCP optimization --> <div class="absolute inset-0 w-full h-full" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "HeroLCP", $$HeroLCP, { "src": "/lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.webp", "alt": "Mobile diesel mechanic assisting semi-truck in Phoenix desert at sunset", "width": 1920, "height": 1080, "class": "w-full h-full object-cover object-center", "sizes": "100vw", "data-astro-cid-bbe6dxrz": true })} </div> <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" data-astro-cid-bbe6dxrz></div> <div class="relative z-10 text-center text-white px-4" data-astro-cid-bbe6dxrz> <h1 class="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight" data-astro-cid-bbe6dxrz>
MOBILE DIESEL MECHANIC
<br data-astro-cid-bbe6dxrz> <span class="text-primary" data-astro-cid-bbe6dxrz>IN PHOENIX, AZ</span> </h1> <p class="text-xl mb-10 max-w-4xl mx-auto font-medium md:text-2xl" data-astro-cid-bbe6dxrz>
24/7 On-Site Truck Repair Across the Phoenix Metro — I-10, I-17, Loop 101, 202 & 303.
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-astro-cid-bbe6dxrz> <a${addAttribute(COMPANY_CONFIG.phoneLink, "href")} class="hero-cta-primary flex items-center gap-2 text-lg px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" aria-label="Call AZ Mobile Diesel Repair now for service" data-astro-cid-bbe6dxrz> <!-- Phone icon --> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-bbe6dxrz></path> </svg>
CALL NOW (480) 307-7434
</a> <button id="dispatch-button" class="hero-cta-secondary border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-5 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent" aria-label="Request dispatch for diesel repair service" data-astro-cid-bbe6dxrz>
REQUEST DISPATCH
</button> </div> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg" data-astro-cid-bbe6dxrz> <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold" data-astro-cid-bbe6dxrz>
Licensed & Insured
</div> <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold" data-astro-cid-bbe6dxrz>
15+ Years Fleet Experience
</div> <div class="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-semibold" data-astro-cid-bbe6dxrz>
Valley-Wide Coverage
</div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Hero.astro", void 0);

const $$PhoenixFleets = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-white" data-astro-cid-w42q6f5j> <div class="container mx-auto px-4" data-astro-cid-w42q6f5j> <div class="max-w-6xl mx-auto" data-astro-cid-w42q6f5j> <h2 class="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900" data-astro-cid-w42q6f5j>
Why Phoenix Fleets Choose Our Mobile Diesel Repair
</h2> <div class="text-lg text-gray-700 leading-relaxed space-y-4" data-astro-cid-w42q6f5j> <p data-astro-cid-w42q6f5j>
Phoenix Anchors Arizona's Freight Network—Sky Harbor International Airport, Tolleson Distribution Centers,
          West Phoenix Logistics Hubs, Tempe (ASU Programs), Mesa Aerospace, and Chandler's High-Tech Corridor.
          Breakdowns on I-10, I-17, or the Loop System Can Derail Tight Schedules Fast.
</p> <p data-astro-cid-w42q6f5j>
AZ Mobile Diesel Repair Brings 15+ Years of Fleet Management Expertise to Keep Your Trucks Moving.
          We Diagnose and <a href="#service-area" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Repair On-Site</a>, <a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Engine Diagnostics and Emissions</a>,${" "} <a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Electrical & Batteries</a>,${" "}<a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>A/C & Cooling</a> in 120°F Heat,${" "} <a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Brakes & Air Systems</a> (Including Wheel Seals),${" "}<a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Hydraulics</a>,${" "} <a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Suspension & Steering</a>, and <a href="#services" class="text-primary hover:underline" data-astro-cid-w42q6f5j>Fuel System Repair</a>.
</p> <p data-astro-cid-w42q6f5j>
You Get Clear ETAs, Transparent Diagnostics Before Repairs, and DOT-Compliant Parts. Whether It's a Roadside
          Shoulder With DPS Coordination or a Yard Visit After Hours, Our Goal Is Simple: Minimize Downtime, Avoid
          Unnecessary Tows, and Get Drivers Safely Back on Route Across the Phoenix Metro.
</p> </div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/PhoenixFleets.astro", void 0);

const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const getIconSize = (serviceName) => {
    switch (serviceName) {
      case "MOBILE DIESEL REPAIR":
        return { width: "96px", height: "96px" };
      // Reference size
      case "EMERGENCY ROADSIDE ASSISTANCE":
        return { width: "88px", height: "88px" };
      // Slightly smaller
      case "ENGINE DIAGNOSTICS (COMPUTER & ECM)":
        return { width: "88px", height: "88px" };
      // Slightly smaller
      case "BRAKES & AIR SYSTEMS (INCL. WHEEL SEALS)":
        return { width: "108px", height: "108px" };
      // Larger to match visual size with Mobile Diesel Repair
      case "SUSPENSION & STEERING":
        return { width: "84px", height: "84px" };
      // Moderately smaller
      case "HYDRAULICS (HOSES & CYLINDERS)":
        return { width: "96px", height: "96px" };
      // Match reference size
      case "ELECTRICAL & BATTERIES (ALTERNATORS & STARTERS)":
        return { width: "88px", height: "88px" };
      // Slightly smaller
      case "A/C & COOLING SYSTEMS":
        return { width: "96px", height: "96px" };
      // Match reference size
      case "FUEL SYSTEM REPAIR":
        return { width: "108px", height: "108px" };
      // Larger to compensate for smaller visual content
      case "PREVENTIVE MAINTENANCE (PM SERVICES)":
        return { width: "84px", height: "84px" };
      // Moderately smaller
      default:
        return { width: "88px", height: "88px" };
    }
  };
  const services = [
    { icon: "/images/Mobile Diesel Repair.png", name: "MOBILE DIESEL REPAIR", description: "Full-service on-site diesel repair covering engines, electrical, brakes, and cooling\u2014saves tows and downtime." },
    { icon: "/images/Emergency Roadside Assistance.png", name: "EMERGENCY ROADSIDE ASSISTANCE", description: "24/7 jumpstarts, fuel delivery, tire issues, urgent breakdowns." },
    { icon: "/images/Engine Diagnostics.png", name: "ENGINE DIAGNOSTICS (COMPUTER & ECM)", description: "Mobile ECM scans, check-engine, emissions troubleshooting." },
    { icon: "/images/Brakes-removebg-preview.png", name: "BRAKES & AIR SYSTEMS (INCL. WHEEL SEALS)", description: "Pads, rotors, air leaks, chambers, valves, wheel seals." },
    { icon: "/images/Suspension and Steering.png", name: "SUSPENSION & STEERING", description: "Shocks, leaf springs, bushings, steering component repairs." },
    { icon: "/images/Hydraulic_and_Suspension-removebg-preview.png", name: "HYDRAULICS (HOSES & CYLINDERS)", description: "Hose replacement, fittings, pumps and cylinder repairs." },
    { icon: "/images/Electrical and Batteries.png", name: "ELECTRICAL & BATTERIES (ALTERNATORS & STARTERS)", description: "Jumpstarts, charging system faults, wiring repairs." },
    { icon: "/images/AC Cooling icon.png", name: "A/C & COOLING SYSTEMS", description: "Compressors, condensers, radiators, hoses, leak checks." },
    { icon: "/images/Fuel_Systems-removebg-preview.png", name: "FUEL SYSTEM REPAIR", description: "Filters, injection, pumps, flow issues and hard starts." },
    { icon: "/images/Preventitive Maintenance.png", name: "PREVENTIVE MAINTENANCE (PM SERVICES)", description: "Oil & filters, inspections, DOT pre-checks, fleet PM schedules." }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-20 bg-white" data-astro-cid-j7akw4s5> <div class="container mx-auto px-4" data-astro-cid-j7akw4s5> <div class="text-center mb-16" data-astro-cid-j7akw4s5> <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight" data-astro-cid-j7akw4s5>
Mobile Truck Repair Services
</h2> <p class="text-xl text-gray-600 font-medium" data-astro-cid-j7akw4s5>
Complete Diesel Repair Services at Your Location
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto" data-astro-cid-j7akw4s5> ${services.map((service, index) => {
    const iconSize = getIconSize(service.name);
    return renderTemplate`<article${addAttribute(index, "key")} class="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-xl hover:border-primary transition-all duration-300 group hover:-translate-y-1" data-astro-cid-j7akw4s5> <div class="w-28 h-28 flex items-center justify-center mx-auto mb-6 transition-all duration-300" data-astro-cid-j7akw4s5> <img${addAttribute(service.icon, "src")}${addAttribute(`${service.name} service icon`, "alt")} class="transition-transform duration-300 group-hover:scale-110"${addAttribute({
      width: iconSize.width,
      height: iconSize.height,
      objectFit: "contain",
      objectPosition: "center"
    }, "style")} data-astro-cid-j7akw4s5> </div> <h3 class="font-black text-gray-900 mb-3 text-lg tracking-tight" data-astro-cid-j7akw4s5> ${service.name} </h3> <p class="text-sm text-gray-600 font-medium" data-astro-cid-j7akw4s5> ${service.description} </p> </article>`;
  })} </div> <div class="text-center mt-16" data-astro-cid-j7akw4s5> <button id="view-all-services-btn" class="bg-accent text-accent-foreground px-12 py-4 rounded-xl font-black text-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 tracking-tight" aria-label="View all services and get a quote" data-astro-cid-j7akw4s5>
VIEW ALL SERVICES
</button> </div> </div> </section> ${renderScript($$result, "/Users/brandontheriot/projects/Diesel Repair/src/components/ServicesGrid.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ServicesGrid.astro", void 0);

const $$CorridorCoverage = createComponent(($$result, $$props, $$slots) => {
  const corridors = [
    {
      name: "I-10 East/West",
      description: "California \u2194 New Mexico"
    },
    {
      name: "I-17 North/South",
      description: "Phoenix \u2194 Flagstaff"
    },
    {
      name: "Loop 101",
      description: "Scottsdale, Tempe, Chandler, Glendale"
    },
    {
      name: "Loop 202",
      description: "East Valley connector"
    },
    {
      name: "Loop 303",
      description: "West Valley connector"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white" data-astro-cid-scytvmcu> <div class="container mx-auto px-4" data-astro-cid-scytvmcu> <div class="text-center mb-12" data-astro-cid-scytvmcu> <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6" data-astro-cid-scytvmcu>
Coverage Corridors We Serve
</h2> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8" data-astro-cid-scytvmcu> ${corridors.map((corridor, index) => renderTemplate`<div${addAttribute(index, "key")} class="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:border-primary" data-astro-cid-scytvmcu> <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" data-astro-cid-scytvmcu> <!-- Navigation icon --> <svg class="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-scytvmcu> <polygon points="3 11 22 2 13 21 11 13 3 11" data-astro-cid-scytvmcu></polygon> </svg> </div> <h3 class="font-black text-gray-900 mb-2 text-lg" data-astro-cid-scytvmcu> ${corridor.name} </h3> <p class="text-sm text-gray-600 font-medium" data-astro-cid-scytvmcu> ${corridor.description} </p> </div>`)} </div> <div class="text-center bg-accent/10 rounded-xl p-6 max-w-2xl mx-auto" data-astro-cid-scytvmcu> <div class="flex items-center justify-center gap-3 mb-2" data-astro-cid-scytvmcu> <!-- Clock icon --> <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-scytvmcu> <circle cx="12" cy="12" r="10" data-astro-cid-scytvmcu></circle> <polyline points="12,6 12,12 16,14" data-astro-cid-scytvmcu></polyline> </svg> <p class="text-lg font-semibold text-accent" data-astro-cid-scytvmcu>
Staged mobile techs provide typical 60–90 minute metro response.
</p> </div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/CorridorCoverage.astro", void 0);

const $$PhoenixProblems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gray-50" data-astro-cid-pg5m6hr4> <div class="container mx-auto px-4" data-astro-cid-pg5m6hr4> <div class="max-w-6xl mx-auto" data-astro-cid-pg5m6hr4> <h2 class="text-3xl md:text-4xl font-black text-center mb-8 text-gray-900" data-astro-cid-pg5m6hr4>
Common Phoenix Diesel Problems
</h2> <div class="grid md:grid-cols-2 gap-8" data-astro-cid-pg5m6hr4> <div data-astro-cid-pg5m6hr4> <h3 class="text-xl font-bold text-primary mb-4" data-astro-cid-pg5m6hr4>Extreme Heat Challenges (Up to 120°F)</h3> <ul class="space-y-3 text-gray-700" data-astro-cid-pg5m6hr4> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>A/C System Overload</strong> - Compressors work overtime, frequent refrigerant leaks</span> </li> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>Pavement-Induced Tire Failures</strong> - Hot asphalt causes blowouts and sidewall damage</span> </li> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>Battery Failure Rates Rise</strong> - Extreme heat shortens battery life significantly</span> </li> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>Cooling System Stress</strong> - Radiator and hose failures increase during summer</span> </li> </ul> </div> <div data-astro-cid-pg5m6hr4> <h3 class="text-xl font-bold text-primary mb-4" data-astro-cid-pg5m6hr4>Year-Round Desert Conditions</h3> <ul class="space-y-3 text-gray-700" data-astro-cid-pg5m6hr4> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>UV Degradation</strong> - Faster hose and seal deterioration from intense sun exposure</span> </li> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>Dust and Debris Buildup</strong> - Clogged air filters reduce efficiency and cause overheating</span> </li> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>Low Humidity Effects</strong> - Static electricity causes electrical faults and parasitic draws</span> </li> <li class="flex items-start" data-astro-cid-pg5m6hr4> <span class="text-primary font-bold mr-2" data-astro-cid-pg5m6hr4>•</span> <span data-astro-cid-pg5m6hr4><strong data-astro-cid-pg5m6hr4>Monsoon Debris Impact</strong> - Sudden storms bring debris that damages cooling systems</span> </li> </ul> </div> </div> <div class="mt-8 p-6 bg-primary/10 rounded-lg" data-astro-cid-pg5m6hr4> <p class="text-gray-700 text-center" data-astro-cid-pg5m6hr4> <strong class="text-primary" data-astro-cid-pg5m6hr4>Our Phoenix-based technicians understand these unique challenges.</strong> We carry
          specialized parts for desert conditions and provide targeted solutions for <a href="#services" class="text-primary hover:underline" data-astro-cid-pg5m6hr4>A/C & Cooling Systems</a>,
<a href="#services" class="text-primary hover:underline ml-1" data-astro-cid-pg5m6hr4>Electrical & Batteries</a>,
<a href="#services" class="text-primary hover:underline ml-1" data-astro-cid-pg5m6hr4>Engine Diagnostics</a>, and
<a href="#services" class="text-primary hover:underline ml-1" data-astro-cid-pg5m6hr4>Preventive Maintenance</a> to keep your fleet running in Arizona's demanding climate.
</p> </div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/PhoenixProblems.astro", void 0);

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "1",
      title: "Emergency Call & Assessment",
      description: "Call (480) 307-7434 for immediate dispatch or use our online request form. Our experienced dispatchers gather critical details: exact location (mile marker, cross streets), symptoms, truck specifications, and fault codes if available. We provide realistic ETAs based on Phoenix traffic patterns and coordinate with DPS for safe highway positioning when needed.",
      details: "Available 24/7 across Phoenix Metro including I-10, I-17, and all Loop highways.",
      icon: "phone"
    },
    {
      number: "2",
      title: "Mobile Tech Deployment",
      description: "Our certified diesel technicians are strategically positioned throughout the Valley for rapid response. We dispatch the nearest qualified mechanic with specialized diagnostic equipment and common repair parts. For complex issues, we pre-coordinate with local parts suppliers to minimize your downtime.",
      details: "Target response time: 60-90 minutes depending on location and traffic conditions. Pre-coordinated with local parts suppliers for complex repairs.",
      icon: "mappin"
    },
    {
      number: "3",
      title: "On-Site Diagnosis & Repair",
      description: "Our mobile unit arrives fully equipped with diagnostic computers, air compressors, welding equipment, and extensive parts inventory. Most repairs are completed on-site, getting you back on the road quickly. For major work requiring shop facilities, we coordinate towing to trusted Phoenix-area diesel shops and provide transparent repair estimates.",
      details: "Licensed, insured, and experienced with all major diesel engine brands and fleet specifications.",
      icon: "wrench"
    }
  ];
  const getIcon = (iconType) => {
    switch (iconType) {
      case "phone":
        return `<svg class="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>`;
      case "mappin":
        return `<svg class="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>`;
      case "wrench":
        return `<svg class="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>`;
      default:
        return "";
    }
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-br from-accent/5 to-primary/5" data-astro-cid-cmgpsf2k> <div class="container mx-auto px-4" data-astro-cid-cmgpsf2k> <div class="text-center mb-12" data-astro-cid-cmgpsf2k> <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6" data-astro-cid-cmgpsf2k>
How It Works
</h2> <p class="text-xl text-muted-foreground max-w-2xl mx-auto" data-astro-cid-cmgpsf2k>
Getting Your Truck Back on the Road Is Simple With Our Streamlined Process
</p> </div> <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12" style="grid-template-rows: repeat(1, 1fr)" data-astro-cid-cmgpsf2k> ${steps.map((step, index) => renderTemplate`<div${addAttribute(index, "key")} class="text-center group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full" data-astro-cid-cmgpsf2k> <div class="flex items-center justify-center gap-4 mb-6" data-astro-cid-cmgpsf2k> <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-black" data-astro-cid-cmgpsf2k> ${step.number} </div> <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300" data-astro-cid-cmgpsf2k> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIcon(step.icon))}` })} </div> </div> <h3 class="text-xl font-bold text-foreground mb-4" data-astro-cid-cmgpsf2k> ${step.title} </h3> <div class="flex-1 flex flex-col" data-astro-cid-cmgpsf2k> <p class="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow" data-astro-cid-cmgpsf2k> ${step.description} </p> <div class="bg-accent/10 rounded-lg p-3 mt-auto" data-astro-cid-cmgpsf2k> <p class="text-xs text-accent font-semibold" data-astro-cid-cmgpsf2k> ${step.details} </p> </div> </div> </div>`)} </div> <div class="text-center" data-astro-cid-cmgpsf2k> <p class="text-sm text-muted-foreground italic" data-astro-cid-cmgpsf2k>
Photos or Fault Codes Help Us Bring the Right Parts the First Time.
</p> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/HowItWorks.astro", void 0);

const $$UnifiedEmergencyHub = createComponent(($$result, $$props, $$slots) => {
  const emergencyRoadside = "/images/emergency-roadside-alt.png";
  const mobileMechanic = "/images/mobile-mechanic-alt.png";
  return renderTemplate`${maybeRenderHead()}<section id="emergency-hub" class="py-16 bg-gradient-to-br from-gray-100 to-gray-50" data-astro-cid-ah47v24j> <div class="container mx-auto px-4" data-astro-cid-ah47v24j> <!-- Urgent Header with Pulsing Alert --> <div class="text-center mb-12" data-astro-cid-ah47v24j> <div class="flex items-center justify-center mb-6" data-astro-cid-ah47v24j> <!-- Alert Triangle icon --> <svg class="w-12 h-12 mr-4 text-accent animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-ah47v24j></path> </svg> <h2 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tight" data-astro-cid-ah47v24j>
24/7 PHOENIX EMERGENCY DIESEL RESPONSE
</h2> <!-- Alert Triangle icon --> <svg class="w-12 h-12 ml-4 text-accent animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-ah47v24j></path> </svg> </div> <p class="text-xl text-gray-600 font-medium" data-astro-cid-ah47v24j>
24/7 Emergency Mobile Diesel Repair - We Come to You!
</p> </div> <!-- Three-Column Service Layout --> <div class="grid md:grid-cols-3 gap-8 mb-12" data-astro-cid-ah47v24j> <!-- Emergency Roadside --> <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col" data-astro-cid-ah47v24j> <div class="mb-6" data-astro-cid-ah47v24j> <img${addAttribute(emergencyRoadside, "src")} alt="Emergency roadside assistance" class="w-24 h-24 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" data-astro-cid-ah47v24j> <div class="flex items-center justify-center gap-2 text-accent" data-astro-cid-ah47v24j> <!-- Clock icon --> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <circle cx="12" cy="12" r="10" data-astro-cid-ah47v24j></circle> <polyline points="12,6 12,12 16,14" data-astro-cid-ah47v24j></polyline> </svg> <span class="font-semibold" data-astro-cid-ah47v24j>24/7 Available</span> </div> </div> <div class="flex-1 flex flex-col" data-astro-cid-ah47v24j> <h3 class="text-xl font-black text-gray-900 mb-4" data-astro-cid-ah47v24j>
Emergency Roadside Assistance
</h3> <p class="text-gray-600 mb-6 flex-1 min-h-[3rem]" data-astro-cid-ah47v24j>
Stranded on the Road? Fast Response for Breakdowns, Flat Tires, and Critical Repairs.
</p> <button id="learn-more-emergency" class="btn-outline w-full" data-astro-cid-ah47v24j>
LEARN MORE
</button> </div> </div> <!-- On-Site Service --> <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col" data-astro-cid-ah47v24j> <div class="mb-6" data-astro-cid-ah47v24j> <img${addAttribute(mobileMechanic, "src")} alt="Mobile mechanic service" class="w-24 h-24 object-contain mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" data-astro-cid-ah47v24j> <div class="flex items-center justify-center gap-2 text-primary" data-astro-cid-ah47v24j> <!-- MapPin icon --> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-ah47v24j></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-ah47v24j></path> </svg> <span class="font-semibold" data-astro-cid-ah47v24j>Mobile Service</span> </div> </div> <div class="flex-1 flex flex-col" data-astro-cid-ah47v24j> <h3 class="text-xl font-black text-gray-900 mb-4" data-astro-cid-ah47v24j>
On-Site Mechanic Services
</h3> <p class="text-gray-600 mb-6 flex-1 min-h-[3rem]" data-astro-cid-ah47v24j>
Professional Diesel Repair at Your Location. Scheduled Maintenance and Major Repairs.
</p> <button id="learn-more-onsite" class="btn-outline w-full" data-astro-cid-ah47v24j>
LEARN MORE
</button> </div> </div> <!-- Emergency Call Section --> <div class="bg-gradient-to-br from-accent to-accent/90 rounded-xl shadow-lg p-8 text-center text-white flex flex-col" data-astro-cid-ah47v24j> <div class="mb-6" data-astro-cid-ah47v24j> <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-ah47v24j> <!-- Phone icon --> <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-ah47v24j></path> </svg> </div> <div class="flex items-center justify-center gap-2" data-astro-cid-ah47v24j> <!-- Wrench icon --> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" data-astro-cid-ah47v24j></path> </svg> <span class="font-semibold" data-astro-cid-ah47v24j>Immediate Dispatch</span> </div> </div> <div class="flex-1 flex flex-col" data-astro-cid-ah47v24j> <h3 class="text-xl font-black mb-4" data-astro-cid-ah47v24j>
CALL FOR EMERGENCY
</h3> <p class="text-white/90 mb-6 flex-1 min-h-[3rem]" data-astro-cid-ah47v24j>
Speak directly with our dispatch team. Fast response times guaranteed.
</p> <a href="tel:+14803077434" class="btn-emergency w-full" data-astro-cid-ah47v24j> <!-- Phone icon --> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ah47v24j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-ah47v24j></path> </svg>
CALL (480) 307-7434
</a> </div> </div> </div> <!-- Bottom Info --> <div class="text-center" data-astro-cid-ah47v24j> <p class="text-sm text-gray-500 italic mb-2" data-astro-cid-ah47v24j>
Photos or Fault Codes Help Us Bring the Right Parts the First Time.
</p> <p class="text-sm text-gray-500 mb-2" data-astro-cid-ah47v24j>
Standard dispatch fee applies; waived with repair authorization.
</p> <p class="text-xs text-gray-400 italic" data-astro-cid-ah47v24j> <strong data-astro-cid-ah47v24j>DPS Coordination:</strong> Highway shoulder repairs on I-10, I-17, and Loop systems coordinate with Arizona Department of Public Safety for traffic control and safe positioning protocols.
</p> </div> </div> </section> ${renderScript($$result, "/Users/brandontheriot/projects/Diesel Repair/src/components/UnifiedEmergencyHub.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/UnifiedEmergencyHub.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "QUALITY OF WORK",
      description: "Professional Service by Experienced Diesel Mechanics",
      icon: "shield"
    },
    {
      title: "ATTENTION TO DETAIL",
      description: "Thorough Inspections",
      icon: "clock"
    },
    {
      title: "TRANSPARENCY & HONESTY",
      description: "Upfront Pricing, No Surprises, No Hidden Fees",
      icon: "star"
    },
    {
      title: "SPEED & EFFICIENCY",
      description: "We Work Hard to Get You Back on the Road Fast",
      icon: "users"
    },
    {
      title: "ALWAYS RESPONSIVE",
      description: "We Communicate With You Every Step of the Way",
      icon: "wrench"
    },
    {
      title: "SATISFACTION GUARANTEED",
      description: "We Stand Behind Our Work and Your Complete Satisfaction is Our Priority",
      icon: "checkcircle"
    }
  ];
  const getIcon = (iconType) => {
    switch (iconType) {
      case "shield":
        return `<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>`;
      case "clock":
        return `<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>`;
      case "star":
        return `<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>`;
      case "users":
        return `<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 21v-2a4 4 0 00-3-3.87"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3.13a4 4 0 010 7.75"></path>
              </svg>`;
      case "wrench":
        return `<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>`;
      case "checkcircle":
        return `<svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`;
      default:
        return "";
    }
  };
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 bg-gray-50" data-astro-cid-fcgrrunm> <div class="container mx-auto px-4" data-astro-cid-fcgrrunm> <div class="text-center mb-16" data-astro-cid-fcgrrunm> <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight" data-astro-cid-fcgrrunm>
QUALITY, SPEED & TRANSPARENCY
</h2> <p class="text-xl text-gray-600 max-w-4xl mx-auto font-medium mb-4" data-astro-cid-fcgrrunm>
Licensed and insured technicians, DOT-compliant parts, and clear communication from dispatch to invoice.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto" data-astro-cid-fcgrrunm> ${features.map((feature, index) => renderTemplate`<article${addAttribute(index, "key")} class="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-astro-cid-fcgrrunm> <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" data-astro-cid-fcgrrunm> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIcon(feature.icon))}` })} </div> <h3 class="font-black text-gray-900 mb-4 text-lg tracking-tight" data-astro-cid-fcgrrunm> ${feature.title} </h3> <p class="text-gray-600 font-medium" data-astro-cid-fcgrrunm> ${feature.description} </p> </article>`)} </div> <div class="text-center mt-16" data-astro-cid-fcgrrunm> <div class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium space-y-8" data-astro-cid-fcgrrunm> <div class="bg-white rounded-xl p-8 shadow-lg" data-astro-cid-fcgrrunm> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-fcgrrunm>Fleet Management Experience</h3> <p class="mb-4" data-astro-cid-fcgrrunm>
At AZ Mobile Diesel Repair, we understand the critical importance of fleet uptime and operational efficiency. Our leadership team brings direct trucking industry experience, with our lead mechanic having <strong data-astro-cid-fcgrrunm>over 15 years</strong> as a fleet manager specializing in diesel trucks and heavy equipment across Arizona's challenging desert conditions.
</p> </div> <div class="bg-white rounded-xl p-8 shadow-lg" data-astro-cid-fcgrrunm> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-fcgrrunm>Strategic Partnership Approach</h3> <p class="mb-4" data-astro-cid-fcgrrunm>
We're not just mechanics—we're strategic partners who understand delivery schedules, maintenance budgets, and the true cost of downtime.
</p> <div class="text-left max-w-2xl mx-auto" data-astro-cid-fcgrrunm> <p class="font-semibold text-gray-800 mb-3" data-astro-cid-fcgrrunm>Our fleet management approach includes:</p> <ul class="space-y-2 text-gray-700" data-astro-cid-fcgrrunm> <li class="flex items-start" data-astro-cid-fcgrrunm> <span class="text-primary font-bold mr-3" data-astro-cid-fcgrrunm>•</span> <span data-astro-cid-fcgrrunm><strong data-astro-cid-fcgrrunm>After-hours emergency scheduling</strong> for minimal disruption</span> </li> <li class="flex items-start" data-astro-cid-fcgrrunm> <span class="text-primary font-bold mr-3" data-astro-cid-fcgrrunm>•</span> <span data-astro-cid-fcgrrunm><strong data-astro-cid-fcgrrunm>Consolidated monthly billing systems</strong> for simplified accounting</span> </li> <li class="flex items-start" data-astro-cid-fcgrrunm> <span class="text-primary font-bold mr-3" data-astro-cid-fcgrrunm>•</span> <span data-astro-cid-fcgrrunm><strong data-astro-cid-fcgrrunm>Comprehensive service history reports</strong> for maintenance tracking</span> </li> <li class="flex items-start" data-astro-cid-fcgrrunm> <span class="text-primary font-bold mr-3" data-astro-cid-fcgrrunm>•</span> <span data-astro-cid-fcgrrunm>Component failure prediction and <strong data-astro-cid-fcgrrunm>DOT compliance documentation</strong></span> </li> </ul> </div> </div> <div class="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border-l-4 border-primary" data-astro-cid-fcgrrunm> <p class="text-lg font-semibold text-gray-800" data-astro-cid-fcgrrunm>
Whether you're managing local Phoenix delivery routes or long-haul operations across the Southwest, we provide the technical expertise and business understanding that keeps your fleet profitable and compliant.
</p> </div> </div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/WhyChooseUs.astro", void 0);

const $$FleetServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="fleet" class="py-20 bg-background" data-astro-cid-5qpsxqhh> <div class="container mx-auto px-4" data-astro-cid-5qpsxqhh> <div class="max-w-6xl mx-auto" data-astro-cid-5qpsxqhh> <!-- Fleet Manager Quote --> <div class="bg-card rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-border/50" data-astro-cid-5qpsxqhh> <div class="text-center mb-8" data-astro-cid-5qpsxqhh> <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-astro-cid-5qpsxqhh>
"From a Fleet Manager's Perspective"
</h2> </div> <blockquote class="text-lg md:text-xl text-muted-foreground leading-relaxed text-center italic mb-8" data-astro-cid-5qpsxqhh>
"We understand schedules, compliance, and downtime costs. Our techs prioritize safety, correct diagnosis, and clear communication so your trucks return to service quickly. Whether you run five trucks or five hundred, we'll help you avoid repeat breakdowns and keep utilization high."
</blockquote> <div class="text-center" data-astro-cid-5qpsxqhh> <button id="fleet-contact-button" class="btn-hero" aria-label="Contact us for fleet service" data-astro-cid-5qpsxqhh> <!-- Users icon --> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5qpsxqhh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" data-astro-cid-5qpsxqhh></path> <circle cx="9" cy="7" r="4" data-astro-cid-5qpsxqhh></circle> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 21v-2a4 4 0 00-3-3.87" data-astro-cid-5qpsxqhh></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3.13a4 4 0 010 7.75" data-astro-cid-5qpsxqhh></path> </svg>
Contact Us for Fleet Service
</button> </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/brandontheriot/projects/Diesel Repair/src/components/FleetServices.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/FleetServices.astro", void 0);

const $$ServiceArea = createComponent(($$result, $$props, $$slots) => {
  const locations = SERVICE_AREA_CITIES;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white" data-astro-cid-rtduh47i> <div class="container mx-auto px-4" data-astro-cid-rtduh47i> <div class="text-center mb-12" data-astro-cid-rtduh47i> <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-astro-cid-rtduh47i>
Service Area Map — Phoenix Metro
</h2> <p class="text-xl text-muted-foreground" data-astro-cid-rtduh47i>
24/7 Mobile Diesel Repair Along Phoenix Corridors
</p> <p class="text-lg text-muted-foreground mt-2" data-astro-cid-rtduh47i>
We Cover I-10, I-17, Loop 101/202/303, US-60, AZ-51
</p> </div> <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center" data-astro-cid-rtduh47i> <div data-astro-cid-rtduh47i> <h3 class="text-2xl font-bold text-foreground mb-6" data-astro-cid-rtduh47i>
Cities We Service:
</h3> <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8" data-astro-cid-rtduh47i> ${locations.map((location, index) => renderTemplate`<div${addAttribute(index, "key")} class="bg-card rounded-lg px-4 py-3 text-center font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 border border-border/50" data-astro-cid-rtduh47i> ${location} </div>`)} </div> <div class="text-center" data-astro-cid-rtduh47i> <p class="text-muted-foreground mb-6" data-astro-cid-rtduh47i>
Don't See Your Location on Phoenix Corridors? Give Us a Call - We May Still Be Able to Help!
</p> <a${addAttribute(`tel:${PHONE_E164}`, "href")} class="btn-hero" data-astro-cid-rtduh47i> <!-- Phone icon --> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-rtduh47i> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-rtduh47i></path> </svg>
Call for Current ETA
</a> </div> </div> <div class="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-border/20 bg-cover bg-center bg-no-repeat relative overflow-hidden" style="background-image: url(/images/phoenix-metro-background.jpeg)" data-astro-cid-rtduh47i> <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" data-astro-cid-rtduh47i></div> <div class="text-center relative z-10" data-astro-cid-rtduh47i> <!-- MapPin icon --> <svg class="w-24 h-24 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-rtduh47i> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-rtduh47i></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-rtduh47i></path> </svg> <h3 class="text-2xl font-bold text-white mb-4" data-astro-cid-rtduh47i>
Phoenix Metro Coverage
</h3> <p class="text-white/90 mb-4" data-astro-cid-rtduh47i>
I-10, I-17, Loop 101/202/303 Corridors
</p> <div class="bg-card rounded-lg p-4 shadow-sm" data-astro-cid-rtduh47i> <p class="text-sm font-semibold text-primary mb-2" data-astro-cid-rtduh47i>Typical Response Windows:</p> <p class="text-sm text-muted-foreground" data-astro-cid-rtduh47i>60–90 minutes</p> <p class="text-xs text-muted-foreground mt-1" data-astro-cid-rtduh47i>(traffic & parts availability may affect ETAs)</p> </div> </div> </div> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ServiceArea.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-background" data-astro-cid-svshx33u> <div class="container mx-auto px-4" data-astro-cid-svshx33u> <div class="text-center mb-16" data-astro-cid-svshx33u> <h2 class="text-4xl md:text-5xl font-bold text-foreground mb-6" data-astro-cid-svshx33u>
Request On-Site Services
</h2> <p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-4" data-astro-cid-svshx33u>
Tell Us About Your Truck and What's Going On—We'll Reply Within 15–30 Minutes During Business Hours.
</p> <p class="text-sm text-muted-foreground" data-astro-cid-svshx33u>
99% Same-Day Response • We Come To You
</p> </div> <div class="max-w-2xl mx-auto" data-astro-cid-svshx33u> <!-- Contact Form --> <form id="contact-form" class="space-y-6" data-astro-cid-svshx33u> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-svshx33u> <div data-astro-cid-svshx33u> <label for="name" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Name *</label> <input id="name" name="name" type="text" required placeholder="Your Name" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> </div> <div data-astro-cid-svshx33u> <label for="phone" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Phone *</label> <input id="phone" name="phone" type="tel" required placeholder="(480) 555-0123" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> </div> </div> <div data-astro-cid-svshx33u> <label for="email" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Email (optional)</label> <input id="email" name="email" type="email" placeholder="your.email@example.com" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> </div> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-svshx33u> <div data-astro-cid-svshx33u> <label for="service" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Service Needed</label> <select id="service" name="service" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> <option value="" data-astro-cid-svshx33u>Select a Service</option> <option value="Emergency Roadside Assistance" data-astro-cid-svshx33u>Emergency Roadside Assistance</option> <option value="Air Conditioning Systems" data-astro-cid-svshx33u>Air Conditioning Systems</option> <option value="DPF Regens & Aftertreatment" data-astro-cid-svshx33u>DPF Regens & Aftertreatment</option> <option value="Electrical & Diagnostics" data-astro-cid-svshx33u>Electrical & Diagnostics</option> <option value="Fuel Systems" data-astro-cid-svshx33u>Fuel Systems</option> <option value="Brakes & Air" data-astro-cid-svshx33u>Brakes & Air</option> <option value="Tires & Wheel Seals" data-astro-cid-svshx33u>Tires & Wheel Seals</option> <option value="Batteries, Alternators & Starters" data-astro-cid-svshx33u>Batteries, Alternators & Starters</option> <option value="Hydraulic Systems & PTO" data-astro-cid-svshx33u>Hydraulic Systems & PTO</option> <option value="DOT Inspections" data-astro-cid-svshx33u>DOT Inspections</option> <option value="PM Service" data-astro-cid-svshx33u>PM Service</option> <option value="Other" data-astro-cid-svshx33u>Other</option> </select> </div> <div data-astro-cid-svshx33u> <label for="vehicleType" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Vehicle/Equipment Type</label> <select id="vehicleType" name="vehicleType" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> <option value="" data-astro-cid-svshx33u>Select Vehicle Type</option> <option value="Class A Truck (Semi/Tractor)" data-astro-cid-svshx33u>Class A Truck (Semi/Tractor)</option> <option value="Class B Truck (Straight Truck/Box Truck)" data-astro-cid-svshx33u>Class B Truck (Straight Truck/Box Truck)</option> <option value="Pickup Truck (3/4 Ton or 1 Ton)" data-astro-cid-svshx33u>Pickup Truck (3/4 Ton or 1 Ton)</option> <option value="Van (Cargo/Service Van)" data-astro-cid-svshx33u>Van (Cargo/Service Van)</option> <option value="RV/Motorhome" data-astro-cid-svshx33u>RV/Motorhome</option> <option value="Bus/Coach" data-astro-cid-svshx33u>Bus/Coach</option> <option value="Construction Equipment" data-astro-cid-svshx33u>Construction Equipment</option> <option value="Agricultural Equipment" data-astro-cid-svshx33u>Agricultural Equipment</option> <option value="Other Heavy Equipment" data-astro-cid-svshx33u>Other Heavy Equipment</option> </select> </div> </div> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-svshx33u> <div data-astro-cid-svshx33u> <label for="timeline" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>When Do You Need Service?</label> <select id="timeline" name="timeline" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> <option value="" data-astro-cid-svshx33u>Select Timeline</option> <option value="ASAP / Emergency" data-astro-cid-svshx33u>ASAP / Emergency</option> <option value="Within 2 Hours" data-astro-cid-svshx33u>Within 2 Hours</option> <option value="Same day" data-astro-cid-svshx33u>Same day</option> <option value="Within 24 Hours" data-astro-cid-svshx33u>Within 24 Hours</option> <option value="Within 48 Hours" data-astro-cid-svshx33u>Within 48 Hours</option> <option value="Schedule for Later" data-astro-cid-svshx33u>Schedule for Later</option> </select> </div> <div data-astro-cid-svshx33u> <label for="location" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Location *</label> <input id="location" name="location" type="text" required placeholder="Zip Code or Cross-Streets" class="w-full h-10 px-3 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-astro-cid-svshx33u> <p class="text-xs text-muted-foreground mt-1" data-astro-cid-svshx33u>
Zip Code or Nearest Cross-Streets for Accurate Dispatch
</p> </div> </div> <div data-astro-cid-svshx33u> <label for="message" class="text-foreground font-semibold block mb-2" data-astro-cid-svshx33u>Describe the Problem</label> <textarea id="message" name="message" placeholder="Describe Symptoms, Fault Codes, What Happened When the Problem Started..." rows="5" class="w-full px-3 py-2 border border-border bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none" data-astro-cid-svshx33u></textarea> <p class="text-xs text-muted-foreground mt-1" data-astro-cid-svshx33u>
Include Fault/Error Codes, Warning Lights, Symptoms, and When the Problem Started. You Can Also Text Photos to (480) 307-7434 After Submitting This Form.
</p> </div> <div class="flex items-center space-x-2" data-astro-cid-svshx33u> <input type="checkbox" id="emergency" class="rounded border-border text-primary focus:ring-primary" data-astro-cid-svshx33u> <label for="emergency" class="text-sm font-medium text-foreground" data-astro-cid-svshx33u>
This Is an Emergency / Down at Roadside
</label> </div> <button type="submit" class="btn-hero w-full" id="submit-button" data-astro-cid-svshx33u>
Request On-Site Services
</button> </form> </div> </div> </section> `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/ContactForm.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Do you offer 24/7 roadside service in Phoenix?",
      answer: "Yes, we provide 24/7 mobile diesel repair services throughout the Phoenix metro area, including all major corridors like I-10, I-17, and Loop 101/202/303. Our team responds to emergency breakdowns on highways, at truck stops, distribution centers, and job sites. Whether you're broken down near Sky Harbor Airport on I-10 or stalled on the I-17 corridor through central Phoenix, we coordinate with DPS for safe roadside positioning and provide rapid emergency response. Our technicians are equipped to handle most common failures on-site, from fuel system issues to cooling problems that plague trucks in Arizona's extreme desert heat. Call (480) 307-7434 for immediate dispatch and we'll get you back on the road quickly and safely."
    },
    {
      question: "Can you service trucks directly on I-10 or I-17?",
      answer: "Absolutely. We specialize in roadside repairs on Phoenix's major freight corridors, including I-10 from Tolleson to Chandler and I-17 from the I-10 split north to Anthem. Our mobile service trucks are equipped with safety equipment, hazard lighting, and communication systems to work safely on highway shoulders. We coordinate with DPS when necessary for traffic control and use proper safety protocols for roadside positioning. The I-10 corridor is particularly critical for freight movement, so we maintain fast response times from our strategically positioned service vehicles. Whether it's a breakdown at the I-10/I-17 interchange or along the busy freight zones near Sky Harbor, our technicians can perform most repairs on-site including fuel system diagnostics, cooling system repairs, electrical troubleshooting, and brake adjustments to get your truck moving safely."
    },
    {
      question: "Can you perform DPF regens and emissions checks on-site?",
      answer: "Yes, we carry the diagnostic equipment necessary to perform DPF regeneration cycles, check emissions system codes, and troubleshoot aftertreatment issues right at your location. Arizona's stop-and-go traffic around Phoenix, particularly on Loop 101 and during rush hour on I-10, can prevent proper DPF cycling, leading to clogged filters and reduced power. Our mobile diagnostic tools can force manual regens, clear fault codes, and assess the health of your emissions system components including the DPF, DOC, and SCR catalyst. We also handle DEF system issues, from faulty sensors to contaminated fluid that's common in Arizona's extreme heat. For fleet vehicles operating in the Phoenix metro's challenging conditions\u2014extreme heat, heavy traffic, and frequent stops at distribution centers\u2014we provide comprehensive emissions diagnostics and repairs to keep your trucks compliant and running efficiently without requiring a trip to a shop."
    },
    {
      question: "What payment methods and PO options are available for fleets?",
      answer: "We accept all major credit cards, cash, checks, and offer comprehensive fleet billing solutions including purchase orders, consolidated monthly invoicing, and direct corporate billing arrangements. For Phoenix-area fleet operations\u2014whether you're running distribution routes on I-10, servicing construction sites across the Valley, or managing delivery schedules through major freight corridors\u2014we understand the importance of streamlined billing processes. We can set up accounts for priority dispatch, track service history across your entire fleet, and provide detailed maintenance records for compliance documentation. Our billing department works with fleet managers to establish credit terms, approve emergency repair authorizations, and provide cost tracking by vehicle or location. Whether you need immediate roadside assistance for a breakdown on the I-17 corridor or scheduled maintenance at your Phoenix facility, we'll work within your existing procurement and accounting processes to keep your operation running smoothly."
    },
    {
      question: "Do you service construction and agricultural diesel equipment?",
      answer: "Yes, we service all types of diesel equipment beyond over-the-road trucks, including construction machinery, agricultural equipment, generators, and industrial diesel engines. Phoenix's booming construction industry and surrounding agricultural operations in the Valley rely on heavy equipment that faces unique challenges from Arizona's extreme heat, dust, and demanding operating conditions. We service excavators, bulldozers, cranes, irrigation pumps, generators, and farm equipment at job sites, agricultural facilities, and equipment yards throughout the Phoenix metro area. Our technicians are experienced with the hydraulic systems, cooling challenges, and dust infiltration issues common to equipment operating in desert conditions. Whether it's a construction project along the growing I-10 corridor, agricultural equipment in the West Valley farming areas, or backup generators at Phoenix-area facilities, we provide on-site diagnostics and repairs to minimize downtime and keep your operations productive."
    },
    {
      question: "What areas of the Phoenix Metro do you cover?",
      answer: "We provide comprehensive coverage throughout the 21-city Phoenix metropolitan area, from Buckeye and Avondale in the west to Queen Creek and Gilbert in the east, and from Anthem and Scottsdale in the north to Ahwatukee and Chandler in the south. Our primary service corridors include I-10 (from the I-17 split west to Buckeye and east to Chandler), I-17 (from the I-10 interchange north to Anthem), Loop 101 (complete circumference), Loop 202 (Red Mountain and Santan freeways), and Loop 303 (west valley connector). We maintain strategic positioning to serve major freight zones including the Tolleson logistics hub, Sky Harbor cargo area, and distribution centers along the I-10 corridor. Whether you're broken down in downtown Phoenix, need service at a remote job site in the desert, or require fleet maintenance at your West Valley facility, our mobile service trucks can reach any location within our coverage area with competitive response times and full repair capabilities."
    },
    {
      question: "How fast can you arrive during peak traffic or heat advisories?",
      answer: "Our typical response time ranges from 60-90 minutes, but we adjust expectations and routing during Phoenix's challenging conditions like rush hour traffic (7-9 AM and 4-6 PM) or extreme heat advisories when temperatures exceed 115\xB0F. During peak traffic on I-10, I-17, or the Loop system, we use real-time traffic monitoring to optimize routes and provide accurate ETAs. When excessive heat warnings are issued\u2014common during Phoenix summers\u2014we prioritize safety and may recommend moving disabled vehicles to shaded areas when possible. Our mobile units are equipped with extra cooling equipment and our technicians take safety precautions during extreme heat conditions. For urgent breakdowns on major freight corridors during peak hours, we coordinate with DPS for traffic control when necessary. We maintain priority response protocols for fleet accounts and critical freight operations, ensuring that even during challenging Phoenix traffic and weather conditions, you receive professional service as quickly and safely as possible."
    },
    {
      question: "What information should I have ready when I call dispatch?",
      answer: "When you call (480) 307-7434, have your exact location ready including mile markers, nearest exit numbers, or cross streets if you're on surface roads. For highway breakdowns on I-10, I-17, or Loop systems, note whether you're on the shoulder or able to reach a safe location. Describe your symptoms clearly: won't start, overheating, loss of power, warning lights, unusual noises, or fluid leaks. Have your vehicle information available: year, make, model, and any fleet or company details. Let us know if you're carrying hazardous materials, have passengers, or face safety concerns from traffic or location. For fleet vehicles, provide your authorization contacts and billing information. If possible, note the ambient temperature (crucial during Phoenix summers when heat affects repair priorities) and whether you have shade or safe waiting areas. This information helps our dispatch team select the right technician, equipment, and parts for your specific situation and location within the Phoenix metro area."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-muted/20 to-card/50" data-astro-cid-al2ca2vr> <div class="container mx-auto px-4" data-astro-cid-al2ca2vr> <div class="max-w-4xl mx-auto" data-astro-cid-al2ca2vr> <div class="text-center mb-16" data-astro-cid-al2ca2vr> <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-astro-cid-al2ca2vr>
Frequently Asked Questions
</h2> <p class="text-xl text-muted-foreground" data-astro-cid-al2ca2vr>
Get Answers to Common Questions about Our Phoenix Mobile Diesel Repair Services
</p> </div> <div class="space-y-4" data-astro-cid-al2ca2vr> ${faqs.map((faq, index) => renderTemplate`<div${addAttribute(index, "key")} class="bg-card rounded-lg border border-border/50 px-6 accordion-item" data-astro-cid-al2ca2vr> <button class="w-full text-left font-semibold text-foreground hover:text-primary transition-colors py-6 flex items-center justify-between accordion-trigger"${addAttribute(index, "data-index")} data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${faq.question}</span> <!-- Chevron down icon --> <svg class="w-5 h-5 transition-transform duration-300 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-al2ca2vr> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-al2ca2vr></path> </svg> </button> <div class="accordion-content"${addAttribute(index, "data-index")} data-astro-cid-al2ca2vr> <div class="pb-6 text-muted-foreground leading-relaxed accordion-content-inner" data-astro-cid-al2ca2vr> ${faq.answer} </div> </div> </div>`)} </div> </div> </div> </section> ${renderScript($$result, "/Users/brandontheriot/projects/Diesel Repair/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/FAQ.astro", void 0);

const COMPANY_CONFIG = {
  phoneNumber: PHONE_DISPLAY};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white py-10"> <div class="container mx-auto px-4"> <!-- Company header with contact info --> <div class="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-700"> <div class="mb-6 md:mb-0 text-center md:text-left"> <!-- Horizontal logo --> <img src="/images/az-mobile-horizontal-master.png" alt="AZ Mobile Diesel Repair" class="h-12 md:h-16 w-auto mx-auto md:mx-0 mb-3"> <p class="text-gray-300 text-lg font-medium tracking-wide">24/7 Emergency Service</p> <p class="text-gray-400 text-sm mt-1">Available Day & Night</p> </div> <div class="flex flex-col items-center md:items-end space-y-2"> <div class="flex items-center space-x-3 text-diesel-orange font-bold text-2xl"> <!-- Phone icon --> <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:{COMPANY_CONFIG.phoneLink}" class="hover:text-diesel-hover transition-colors"> ${COMPANY_CONFIG.phoneNumber} </a> </div> <p class="text-gray-400 text-sm">Tap to Call Now</p> </div> </div> <!-- 4-column footer links --> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Services Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">SERVICES</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Emergency Roadside</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Engine Repair</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Brake Repairs</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors">Electrical & Battery</a></li> <li><a href="#services" class="hover:text-diesel-orange transition-colors flex items-center">
All Services
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a></li> </ul> </div> <!-- Service Areas Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">SERVICE AREAS</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">Phoenix, AZ</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">Mesa, AZ</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">Tempe, AZ</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors">I-10 Corridor</a></li> <li><a href="#service-area" class="hover:text-diesel-orange transition-colors flex items-center">
All Locations
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a></li> </ul> </div> <!-- Company Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">COMPANY</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#about" class="hover:text-diesel-orange transition-colors">About Us</a></li> <li><a href="#contact" class="hover:text-diesel-orange transition-colors">Contact Us</a></li> <li><a href="tel:{COMPANY_CONFIG.phoneLink}" class="hover:text-diesel-orange transition-colors">Emergency Service</a></li> <li><a href="#fleet" class="hover:text-diesel-orange transition-colors">Fleet Services</a></li> </ul> </div> <!-- Resources Column --> <div> <h4 class="text-lg font-semibold mb-4 text-diesel-orange">RESOURCES</h4> <ul class="space-y-2 text-gray-300"> <li><a href="#faq" class="hover:text-diesel-orange transition-colors">I-10/I-17 Breakdown Guide</a></li> <li><a href="#faq" class="hover:text-diesel-orange transition-colors">Common Problems</a></li> <li><a href="#terms" class="hover:text-diesel-orange transition-colors">Terms of Service</a></li> <li><a href="#privacy" class="hover:text-diesel-orange transition-colors">Privacy Policy</a></li> </ul> </div> </div> <!-- Bottom copyright --> <div class="border-t border-gray-700 mt-8 pt-6 text-center"> <p class="text-gray-400 text-sm">© 2025 AZ Mobile Diesel Repair. All rights reserved.</p> </div> </div> </footer>`;
}, "/Users/brandontheriot/projects/Diesel Repair/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AZ Mobile Diesel Repair - Mobile Diesel Mechanic in Phoenix, AZ", "pageType": "home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "PhoenixFleets", $$PhoenixFleets, {})} ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, {})} ${renderComponent($$result2, "CorridorCoverage", $$CorridorCoverage, {})} ${renderComponent($$result2, "PhoenixProblems", $$PhoenixProblems, {})} ${renderComponent($$result2, "HowItWorks", $$HowItWorks, {})} ${renderComponent($$result2, "UnifiedEmergencyHub", $$UnifiedEmergencyHub, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "FleetServices", $$FleetServices, {})} ${renderComponent($$result2, "ServiceArea", $$ServiceArea, {})} ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
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
