// src/lib/seo/head.ts
// Central utility for generating SEO meta tags with safe fallbacks

import { BUSINESS_NAME, SITE_ORIGIN } from '@/config/company';

export interface SEOData {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'business' | 'service';
  url?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  locale?: string;
}

export function generateSEOTags(data: SEOData) {
  // Default fallbacks from company config
  const description = data.description ||
    "Professional mobile diesel repair services for Phoenix Metro area. 24/7 emergency roadside assistance, fleet services, and commercial vehicle repairs.";

  const image = data.image || `${SITE_ORIGIN}/images/az-mobile-diesel-repair-logo.png`;
  const url = data.url || SITE_ORIGIN;
  const type = data.type || 'website';
  const locale = data.locale || 'en_US';

  // Generate meta keywords intelligently
  const baseKeywords = 'mobile diesel repair, Phoenix diesel mechanic, emergency roadside assistance, commercial truck repair, fleet services';
  const keywords = data.keywords || baseKeywords;

  return {
    // Basic SEO
    title: data.title,
    description,
    keywords,

    // Open Graph
    og: {
      title: data.title,
      description,
      url,
      site_name: BUSINESS_NAME,
      type,
      locale,
      image,
      image_width: 1200,
      image_height: 630,
      image_alt: `${BUSINESS_NAME} - Professional mobile diesel mechanics serving Phoenix Metro`
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description,
      image,
      image_alt: `${BUSINESS_NAME} - Professional mobile diesel mechanics serving Phoenix Metro`
    },

    // Additional meta
    canonical: url,
    author: data.author || BUSINESS_NAME,

    // Article-specific (if applicable)
    ...(type === 'article' && {
      article: {
        published_time: data.publishedTime,
        modified_time: data.modifiedTime,
        author: data.author || BUSINESS_NAME
      }
    })
  };
}

export function generateBusinessKeywords(pageType?: string, serviceOrCity?: string) {
  const base = 'mobile diesel repair, Phoenix diesel mechanic, emergency roadside assistance, commercial truck repair';

  if (pageType === 'service' && serviceOrCity) {
    return `${serviceOrCity}, ${base}, ${serviceOrCity} Phoenix, mobile ${serviceOrCity}`;
  }

  if (pageType === 'city' && serviceOrCity) {
    return `${base}, ${serviceOrCity} diesel repair, ${serviceOrCity} mobile mechanic, ${serviceOrCity} truck service`;
  }

  return `${base}, fleet services, diesel engine repair, 24/7 roadside assistance`;
}