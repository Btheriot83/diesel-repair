#!/usr/bin/env node
/**
 * Internal Links Validator
 *
 * Validates internal linking structure for SEO and UX:
 * - First mention of each service slug is linked to /services/{slug}
 * - Nearby Service Areas links resolve to existing /locations/{slug}
 * - All required internal links are present and functional
 */

import { readFileSync, existsSync } from 'fs';
import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';

// Core service slugs that should be auto-linked
const SERVICE_SLUGS = [
  'mobile-diesel-repair',
  'emergency-roadside-assistance',
  'engine-diagnostics',
  'brakes-air-systems',
  'suspension-steering',
  'hydraulics',
  'electrical-batteries',
  'ac-cooling-systems',
  'fuel-system-repair',
  'aftertreatment-dpf-def'
];

class LinksCheckError extends Error {
  constructor(city, check, details) {
    super(`${city}: ${check} - ${details}`);
    this.city = city;
    this.check = check;
  }
}

async function fetchPageHTML(slug) {
  try {
    const response = await fetch(`${DEV_BASE}/locations/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`Failed to fetch /locations/${slug}: ${error.message}`);
  }
}

function checkServiceAutolinks(city, dom) {
  const main = dom.window.document.querySelector('main');
  if (!main) {
    throw new LinksCheckError(city, 'Service Links', 'No <main> element found');
  }

  const mainText = main.textContent.toLowerCase();
  const links = main.querySelectorAll('a[href^="/services/"]');
  const linkedServices = new Set();

  // Extract linked service slugs
  links.forEach(link => {
    const href = link.getAttribute('href');
    const match = href.match(/^\/services\/([^\/]+)$/);
    if (match) {
      linkedServices.add(match[1]);
    }
  });

  const missingLinks = [];
  const brokenLinks = [];

  // Check each service slug for proper linking
  SERVICE_SLUGS.forEach(serviceSlug => {
    const serviceText = serviceSlug.replace(/-/g, ' ');
    const hasServiceMention = mainText.includes(serviceText) ||
                            mainText.includes(serviceSlug) ||
                            mainText.includes(serviceText.replace(/\s/g, ''));

    if (hasServiceMention && !linkedServices.has(serviceSlug)) {
      missingLinks.push(serviceSlug);
    }
  });

  // Verify linked services have corresponding content files
  linkedServices.forEach(serviceSlug => {
    const servicePath = `src/content/services/${serviceSlug}.mdx`;
    if (!existsSync(servicePath)) {
      brokenLinks.push(serviceSlug);
    }
  });

  return {
    linkedServices: Array.from(linkedServices),
    missingLinks,
    brokenLinks,
    totalServiceLinks: linkedServices.size
  };
}

function checkNearbyAreasLinks(city, dom) {
  const nearbyLinks = dom.window.document.querySelectorAll('a[href^="/locations/"]');
  const linkedCities = new Set();
  const brokenLinks = [];

  nearbyLinks.forEach(link => {
    const href = link.getAttribute('href');
    const match = href.match(/^\/locations\/([^\/]+)$/);
    if (match) {
      const linkedCity = match[1];
      linkedCities.add(linkedCity);

      // Check if the linked city has a corresponding content file
      const cityPath = `src/content/locations/${linkedCity}.mdx`;
      if (!existsSync(cityPath)) {
        brokenLinks.push(linkedCity);
      }
    }
  });

  // Check for "Nearby Service Areas" section
  const nearbySection = dom.window.document.querySelector('[data-nearby], .nearby-areas, h2, h3');
  let hasNearbySection = false;

  if (nearbySection) {
    const nearbyHeaders = dom.window.document.querySelectorAll('h2, h3, h4');
    Array.from(nearbyHeaders).forEach(header => {
      if (header.textContent.toLowerCase().includes('nearby') ||
          header.textContent.toLowerCase().includes('service areas') ||
          header.textContent.toLowerCase().includes('surrounding')) {
        hasNearbySection = true;
      }
    });
  }

  return {
    linkedCities: Array.from(linkedCities),
    brokenLinks,
    hasNearbySection,
    totalCityLinks: linkedCities.size
  };
}

function validateRequiredLinks(city, serviceLinks, nearbyLinks) {
  const issues = [];

  // Minimum service links requirement
  if (serviceLinks.totalServiceLinks < 3) {
    issues.push(`Only ${serviceLinks.totalServiceLinks} service links found, expected at least 3`);
  }

  // Missing service autolinks
  if (serviceLinks.missingLinks.length > 0) {
    issues.push(`Missing autolinks for: ${serviceLinks.missingLinks.join(', ')}`);
  }

  // Broken service links
  if (serviceLinks.brokenLinks.length > 0) {
    issues.push(`Broken service links: ${serviceLinks.brokenLinks.join(', ')}`);
  }

  // Nearby areas validation
  if (!nearbyLinks.hasNearbySection) {
    issues.push('Missing "Nearby Service Areas" section');
  }

  if (nearbyLinks.totalCityLinks < 2) {
    issues.push(`Only ${nearbyLinks.totalCityLinks} nearby city links, expected at least 2`);
  }

  // Broken nearby links
  if (nearbyLinks.brokenLinks.length > 0) {
    issues.push(`Broken nearby city links: ${nearbyLinks.brokenLinks.join(', ')}`);
  }

  return issues;
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    errors: [],
    links: {}
  };

  try {
    const html = await fetchPageHTML(city);
    const dom = new JSDOM(html);

    // Check service autolinks
    const serviceLinks = checkServiceAutolinks(city, dom);
    results.links.services = serviceLinks;

    // Check nearby areas links
    const nearbyLinks = checkNearbyAreasLinks(city, dom);
    results.links.nearby = nearbyLinks;

    // Validate requirements
    const issues = validateRequiredLinks(city, serviceLinks, nearbyLinks);

    if (issues.length > 0) {
      throw new LinksCheckError(city, 'Link Validation', issues.join('; '));
    }

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof LinksCheckError) {
      results.errors.push(`${error.check}: ${error.message.split(' - ')[1]}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Internal Links Validator');
  console.log('============================');

  const results = [];
  let hasFailures = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasFailures = true;
    }
  }

  // Print results table
  console.log('\n📊 Results Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Service Links  Nearby Links  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS') {
      const serviceCount = `${result.links.services.totalServiceLinks} found`.padEnd(13);
      const nearbyCount = `${result.links.nearby.totalCityLinks} found`.padEnd(12);

      console.log(`${cityName} ${status}   ${serviceCount} ${nearbyCount} None`);
    } else {
      console.log(`${cityName} ${status}   ${result.errors.join(', ')}`);
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed internal links validation`);

  if (hasFailures) {
    console.log('\n⚠️  Internal linking issues detected. Fix before deployment.');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed internal links validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Links Check failed:', error.message);
  process.exit(1);
});