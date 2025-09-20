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
