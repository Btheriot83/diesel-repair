const SERVICE_SLUGS = {
  "emergency-roadside": "emergency-roadside-assistance",
  "emergency roadside": "emergency-roadside-assistance",
  "emergency roadside assistance": "emergency-roadside-assistance",
  "emergency service": "emergency-roadside-assistance",
  "engine diagnostics": "engine-diagnostics",
  "hydraulics": "hydraulics-hoses-cylinders",
  "hydraulics (hoses & cylinders)": "hydraulics-hoses-cylinders",
  "brakes & air systems": "brakes-air-systems",
  "a/c & cooling": "ac-cooling",
  "ac & cooling": "ac-cooling",
  "a c & cooling": "ac-cooling"
};
const CITY_SLUG_CORRECTIONS = {
  // Common typo corrections / variants
  "tollesson": "tolleson",
  "tolleson az": "tolleson",
  "phoenix az": "phoenix",
  "mesa az": "mesa",
  "tempe az": "tempe",
  "chandler az": "chandler",
  "avondale az": "avondale"
};
const CORRIDOR_SLUGS = {
  "i-10": "i-10",
  "i10": "i-10",
  "i-17": "i-17",
  "i17": "i-17",
  "loop 101": "loop-101",
  "loop101": "loop-101",
  "loop 202": "loop-202",
  "loop202": "loop-202",
  "loop 303": "loop-303",
  "loop303": "loop-303"
};
function slugify(input) {
  const lowered = input.normalize("NFD").replace(/\p{Diacritic}+/gu, "").toLowerCase().trim();
  let s = lowered.replace(/&/g, " and ").replace(/\+/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
  if (CITY_SLUG_CORRECTIONS[s]) return CITY_SLUG_CORRECTIONS[s];
  return s;
}
function toServiceSlug(name) {
  const key = slugify(name);
  return SERVICE_SLUGS[key] || key;
}
function toCitySlug(name) {
  const key = slugify(name);
  return CITY_SLUG_CORRECTIONS[key] || key;
}
function toCorridorSlug(name) {
  const key = slugify(name).replace(/-/g, " ");
  const mapped = CORRIDOR_SLUGS[key] || CORRIDOR_SLUGS[key.replace(/ /g, "")] || // loop101
  CORRIDOR_SLUGS[key.replace(/^i\s?/, "i")] || // i10/i 10
  slugify(name);
  return mapped;
}
function uniqueByHref(items) {
  const seen = /* @__PURE__ */ new Set();
  return items.filter((it) => {
    if (seen.has(it.href)) return false;
    seen.add(it.href);
    return true;
  });
}
function buildInternalLinks(data) {
  const {
    corridors = [],
    nearbyCities = [],
    relatedServices = [],
    emergencyLabel = "24/7 Emergency Service"
  } = data || {};
  const emergencyHref = `/services/${toServiceSlug("emergency-roadside-assistance")}`;
  const corridorLinks = uniqueByHref(
    corridors.map((c) => {
      const slug = toCorridorSlug(c);
      return {
        href: `/corridors/${slug}`,
        text: `${c} Mobile Diesel Service`,
        priority: "high"
      };
    }).sort((a, b) => a.href.localeCompare(b.href))
  );
  const cityLinks = uniqueByHref(
    nearbyCities.map((city) => {
      const slug = toCitySlug(city);
      return {
        href: `/locations/${slug}`,
        text: `${city} Mobile Mechanic`,
        priority: "medium"
      };
    }).sort((a, b) => a.href.localeCompare(b.href))
  );
  const serviceLinks = uniqueByHref(
    relatedServices.map((svc) => {
      const slug = toServiceSlug(svc);
      return {
        href: `/services/${slug}`,
        text: properCase(svc),
        priority: "medium"
      };
    }).sort((a, b) => a.href.localeCompare(b.href))
  );
  return {
    emergencyLink: {
      href: emergencyHref,
      text: emergencyLabel,
      priority: "critical"
    },
    corridorLinks,
    cityLinks,
    serviceLinks
  };
}
function properCase(s) {
  return s.toLowerCase().split(" ").map((w) => w ? w[0].toUpperCase() + w.slice(1) : w).join(" ").replace(/\bA\/?C\b/gi, "A/C");
}

export { buildInternalLinks as b };
