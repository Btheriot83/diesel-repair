import { z, defineCollection } from "astro:content";

const listItem = z.object({
  "@type": z.literal("ListItem"),
  position: z.number(),
  name: z.string(),
  item: z.string().url().optional(),
});

const faq = z.object({
  question: z.string(),
  answer: z.string(),
});

const baseFields = {
  title: z.string(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  canonical: z.string().url().optional(),
  layout: z.string().optional(), // optional to avoid schema breakage
  faqs: z.array(faq).optional(),
  breadcrumbs: z.array(listItem).optional(),
  corridors: z.array(z.string()).optional(),
  nearbyCities: z.array(z.string()).optional(),
  relatedServices: z.array(z.string()).optional(),
  hero: z.string().optional(),
  images: z.array(z.string()).optional(),
  cta: z.object({ primary: z.string().optional() }).optional(),
  links: z.object({ internal: z.array(z.string()).optional() }).optional(),
  draft: z.boolean().default(false),
  updated: z.string().optional(), // ISO date for lastmod
  // New fields for city data
  city: z.string().optional(),
  slug: z.string().optional(),
  state: z.string().optional(),
  centroid: z.object({
    lat: z.number(),
    lng: z.number()
  }).optional(),
  exitClusters: z.array(z.string()).optional(),
  neighborhoods: z.array(z.string()).optional(),
  zips: z.array(z.string()).optional(),
  landmarks: z.array(z.string()).optional(),
  heatNotes: z.array(z.string()).optional(),
  etaMinutes: z.number().optional(),
};

const services = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    pageType: z.literal("service"),
    service: z
      .object({
        name: z.string(),
        description: z.string().optional(),
        areaServed: z.array(z.string()).optional(),
      })
      .optional(),
  }),
});

const cities = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    pageType: z.literal("city"),
  }),
});

const corridors = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    pageType: z.literal("corridor"),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    pageType: z.literal("blog").optional(),
  }),
});

export const collections = { services, cities, corridors, blog };
