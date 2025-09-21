// src/utils/linkBuilder.ts
// Internal link helper with robust slugify + canonical maps
// - Ensures emergency URL uses /services/emergency-roadside-assistance
// - Normalizes corridors/cities/services to the correct path + slug
// - Avoids common misspellings (e.g., 'Tolleson' vs 'Tolleson')
// - Dedupe + stable sorting for predictable UI

export type LinkPriority = 'critical' | 'high' | 'medium' | 'low';
export interface LinkItem {
  href: string;
  text: string;
  priority: LinkPriority;
}
export interface LinkBundle {
  emergencyLink: LinkItem;
  corridorLinks: LinkItem[];
  cityLinks: LinkItem[];
  serviceLinks: LinkItem[];
}

// Canonical slug maps (extend as needed)
const SERVICE_SLUGS: Record<string, string> = {
  'emergency-roadside': 'emergency-roadside-assistance',
  'emergency roadside': 'emergency-roadside-assistance',
  'emergency roadside assistance': 'emergency-roadside-assistance',
  'emergency service': 'emergency-roadside-assistance',
  'engine diagnostics': 'engine-diagnostics',
  'hydraulics': 'hydraulics-hoses-cylinders',
  'hydraulics (hoses & cylinders)': 'hydraulics-hoses-cylinders',
  'brakes & air systems': 'brakes-air-systems',
  'a/c & cooling': 'ac-cooling',
  'ac & cooling': 'ac-cooling',
  'a c & cooling': 'ac-cooling',
};

const CITY_SLUG_CORRECTIONS: Record<string, string> = {
  // Common typo corrections / variants
  'tollesson': 'tolleson',
  'tolleson az': 'tolleson',
  'phoenix az': 'phoenix',
  'mesa az': 'mesa',
  'tempe az': 'tempe',
  'chandler az': 'chandler',
  'avondale az': 'avondale',
};

const CORRIDOR_SLUGS: Record<string, string> = {
  'i-10': 'i-10',
  'i10': 'i-10',
  'i-17': 'i-17',
  'i17': 'i-17',
  'loop 101': 'loop-101',
  'loop101': 'loop-101',
  'loop 202': 'loop-202',
  'loop202': 'loop-202',
  'loop 303': 'loop-303',
  'loop303': 'loop-303',
};

// Basic slugify with diacritics removal and symbol normalization
export function slugify(input: string): string {
  const lowered = input
    .normalize('NFD')
    .replace(/\p{Diacritic}+/gu, '')
    .toLowerCase()
    .trim();

  // special phrases
  let s = lowered
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' ')
    .replace(/[^a-z0-9]+/g, '-') // non-alnum -> dash
    .replace(/-{2,}/g, '-')      // collapse dashes
    .replace(/^-|-$/g, '');      // trim dashes

  // city corrections (e.g., 'tollesson' -> 'tolleson')
  if (CITY_SLUG_CORRECTIONS[s]) return CITY_SLUG_CORRECTIONS[s];
  return s;
}

function toServiceSlug(name: string): string {
  const key = slugify(name);
  return SERVICE_SLUGS[key] || key;
}

function toCitySlug(name: string): string {
  const key = slugify(name);
  return CITY_SLUG_CORRECTIONS[key] || key;
}

function toCorridorSlug(name: string): string {
  const key = slugify(name).replace(/-/g, ' ');
  // map 'loop-101' -> check 'loop 101' key; 'i-10' -> 'i-10' key works via replacements
  const mapped =
    CORRIDOR_SLUGS[key] ||
    CORRIDOR_SLUGS[key.replace(/ /g, '')] || // loop101
    CORRIDOR_SLUGS[key.replace(/^i\s?/, 'i')] || // i10/i 10
    slugify(name);
  return mapped;
}

function uniqueByHref(items: LinkItem[]): LinkItem[] {
  const seen = new Set<string>();
  return items.filter((it) => {
    if (seen.has(it.href)) return false;
    seen.add(it.href);
    return true;
  });
}

export interface BuildLinkInput {
  corridors?: string[];
  nearbyCities?: string[];
  relatedServices?: string[];
  emergencyLabel?: string; // defaults to '24/7 Emergency Service'
}

export function buildInternalLinks(data: BuildLinkInput): LinkBundle {
  const {
    corridors = [],
    nearbyCities = [],
    relatedServices = [],
    emergencyLabel = '24/7 Emergency Service',
  } = data || {};

  const emergencyHref = `/services/${toServiceSlug('emergency-roadside-assistance')}`;

  const corridorLinks: LinkItem[] = uniqueByHref(
    corridors
      .map((c) => {
        const slug = toCorridorSlug(c);
        return {
          href: `/corridors/${slug}`,
          text: `${c} Mobile Diesel Service`,
          priority: 'high' as LinkPriority,
        };
      })
      .sort((a, b) => a.href.localeCompare(b.href))
  );

  const cityLinks: LinkItem[] = uniqueByHref(
    nearbyCities
      .map((city) => {
        const slug = toCitySlug(city);
        return {
          href: `/locations/${slug}`,
          text: `${city} Mobile Mechanic`,
          priority: 'medium' as LinkPriority,
        };
      })
      .sort((a, b) => a.href.localeCompare(b.href))
  );

  const serviceLinks: LinkItem[] = uniqueByHref(
    relatedServices
      .map((svc) => {
        const slug = toServiceSlug(svc);
        return {
          href: `/services/${slug}`,
          text: properCase(svc),
          priority: 'medium' as LinkPriority,
        };
      })
      .sort((a, b) => a.href.localeCompare(b.href))
  );

  return {
    emergencyLink: {
      href: emergencyHref,
      text: emergencyLabel,
      priority: 'critical',
    },
    corridorLinks,
    cityLinks,
    serviceLinks,
  };
}

function properCase(s: string): string {
  return s
    .toLowerCase()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
    .replace(/\bA\/?C\b/gi, 'A/C'); // keep A/C formatting
}
