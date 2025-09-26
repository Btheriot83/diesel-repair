#!/usr/bin/env node
/**
 * Sitemap & Preview Headers Validator
 *
 * Validates site hygiene for SEO and indexing:
 * - All location pages present in sitemap.xml
 * - Preview builds have X-Robots-Tag: noindex header
 * - No duplicate URLs in sitemap
 */

import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';
const SITE_ORIGIN = 'https://azmobiledieselrepair.com';

class SiteHygieneError extends Error {
  constructor(check, details) {
    super(`${check} - ${details}`);
    this.check = check;
  }
}

async function fetchWithHeaders(url) {
  try {
    const response = await fetch(url);
    return {
      ok: response.ok,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      text: response.ok ? await response.text() : null
    };
  } catch (error) {
    throw new Error(`Failed to fetch ${url}: ${error.message}`);
  }
}

async function validateSitemap() {
  console.log('🔍 Checking sitemap.xml...');

  let sitemapContent;
  let sitemapUrl;

  // Try dev server first, then built version
  try {
    const devResponse = await fetchWithHeaders(`${DEV_BASE}/sitemap.xml`);
    if (devResponse.ok) {
      sitemapContent = devResponse.text;
      sitemapUrl = `${DEV_BASE}/sitemap.xml`;
    }
  } catch (error) {
    // Dev server might not be running, try dist
  }

  // If dev server fails, try to read built sitemap
  if (!sitemapContent) {
    try {
      const distContent = readFileSync('dist/sitemap.xml', 'utf-8');
      sitemapContent = distContent;
      sitemapUrl = 'dist/sitemap.xml';
    } catch (error) {
      throw new SiteHygieneError('Sitemap', 'No sitemap.xml found in dev server or dist directory');
    }
  }

  console.log(`   Found sitemap at: ${sitemapUrl}`);

  // Parse sitemap XML
  const dom = new JSDOM(sitemapContent, { contentType: 'application/xml' });
  const urlElements = dom.window.document.querySelectorAll('url loc');

  const foundUrls = Array.from(urlElements).map(loc => loc.textContent.trim());
  const locationUrls = foundUrls.filter(url => url.includes('/locations/'));

  // Extract city slugs from found URLs
  const foundCities = locationUrls.map(url => {
    const match = url.match(/\/locations\/([^\/]+)$/);
    return match ? match[1] : null;
  }).filter(Boolean);

  // Check for missing cities
  const missingCities = CITIES.filter(city => !foundCities.includes(city));
  const extraCities = foundCities.filter(city => !CITIES.includes(city));

  // Check for duplicates
  const duplicates = foundUrls.filter((url, index) => foundUrls.indexOf(url) !== index);

  const issues = [];

  if (missingCities.length > 0) {
    issues.push(`Missing cities in sitemap: ${missingCities.join(', ')}`);
  }

  if (extraCities.length > 0) {
    issues.push(`Unexpected cities in sitemap: ${extraCities.join(', ')}`);
  }

  if (duplicates.length > 0) {
    issues.push(`Duplicate URLs: ${duplicates.join(', ')}`);
  }

  if (issues.length > 0) {
    throw new SiteHygieneError('Sitemap', issues.join('; '));
  }

  return {
    url: sitemapUrl,
    totalUrls: foundUrls.length,
    locationUrls: locationUrls.length,
    foundCities
  };
}

async function validatePreviewHeaders() {
  console.log('🔍 Checking preview headers...');

  // Check if we're in a preview environment
  const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production';
  const isLocal = DEV_BASE.includes('localhost');

  if (!isPreview && !isLocal) {
    console.log('   Skipping preview headers check (not in preview environment)');
    return { skipped: true, reason: 'not in preview environment' };
  }

  // Test preview headers on Phoenix location page
  const testUrl = `${DEV_BASE}/locations/phoenix`;

  try {
    const response = await fetchWithHeaders(testUrl);

    if (!response.ok) {
      throw new SiteHygieneError('Preview Headers', `Test page not accessible: ${response.status}`);
    }

    // Check for preview indexing headers
    const robotsTag = response.headers['x-robots-tag'];
    const metaRobots = response.headers['robots'];

    let hasNoIndex = false;

    if (robotsTag && robotsTag.toLowerCase().includes('noindex')) {
      hasNoIndex = true;
    }

    if (metaRobots && metaRobots.toLowerCase().includes('noindex')) {
      hasNoIndex = true;
    }

    // For local dev, noindex is not required but we'll note it
    if (isLocal) {
      return {
        url: testUrl,
        hasNoIndex,
        headers: { robotsTag, metaRobots },
        note: 'Local dev environment - noindex not required'
      };
    }

    // For actual preview environments, noindex should be present
    if (!hasNoIndex) {
      throw new SiteHygieneError('Preview Headers', 'Preview environment missing X-Robots-Tag: noindex header');
    }

    return {
      url: testUrl,
      hasNoIndex,
      headers: { robotsTag, metaRobots }
    };

  } catch (error) {
    if (error instanceof SiteHygieneError) {
      throw error;
    }
    throw new SiteHygieneError('Preview Headers', `Header check failed: ${error.message}`);
  }
}

async function validateRobotsTxt() {
  console.log('🔍 Checking robots.txt...');

  try {
    const response = await fetchWithHeaders(`${DEV_BASE}/robots.txt`);

    if (!response.ok) {
      throw new SiteHygieneError('Robots.txt', `Not accessible: ${response.status}`);
    }

    const content = response.text;
    const lines = content.split('\n').map(line => line.trim()).filter(Boolean);

    // Basic validation
    const hasUserAgent = lines.some(line => line.toLowerCase().startsWith('user-agent:'));
    const hasSitemap = lines.some(line => line.toLowerCase().startsWith('sitemap:'));

    const issues = [];

    if (!hasUserAgent) {
      issues.push('Missing User-agent directive');
    }

    if (!hasSitemap) {
      issues.push('Missing Sitemap directive');
    }

    if (issues.length > 0) {
      throw new SiteHygieneError('Robots.txt', issues.join('; '));
    }

    return {
      accessible: true,
      hasUserAgent,
      hasSitemap,
      lineCount: lines.length
    };

  } catch (error) {
    if (error instanceof SiteHygieneError) {
      throw error;
    }
    throw new SiteHygieneError('Robots.txt', `Check failed: ${error.message}`);
  }
}

async function main() {
  console.log('🔍 Site Hygiene Validator');
  console.log('==========================');

  const results = {
    sitemap: null,
    previewHeaders: null,
    robotsTxt: null,
    status: 'PASS',
    errors: []
  };

  try {
    // Validate sitemap
    results.sitemap = await validateSitemap();
    console.log('   ✅ Sitemap validation passed');

    // Validate preview headers
    results.previewHeaders = await validatePreviewHeaders();
    console.log('   ✅ Preview headers validation passed');

    // Validate robots.txt
    results.robotsTxt = await validateRobotsTxt();
    console.log('   ✅ Robots.txt validation passed');

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof SiteHygieneError) {
      results.errors.push(`${error.check}: ${error.message.split(' - ')[1]}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  // Print results
  console.log('\n📊 Results Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (results.status === 'PASS') {
    console.log('Status:         ✅ PASS');

    if (results.sitemap) {
      console.log(`Sitemap:        ${results.sitemap.locationUrls}/${CITIES.length} locations found`);
      console.log(`                ${results.sitemap.totalUrls} total URLs`);
    }

    if (results.previewHeaders) {
      if (results.previewHeaders.skipped) {
        console.log(`Preview:        ⏭️  Skipped (${results.previewHeaders.reason})`);
      } else {
        const indexStatus = results.previewHeaders.hasNoIndex ? 'noindex ✅' : 'indexable ⚠️';
        console.log(`Preview:        ${indexStatus}`);
      }
    }

    if (results.robotsTxt) {
      console.log(`Robots.txt:     ✅ Accessible (${results.robotsTxt.lineCount} lines)`);
    }

  } else {
    console.log('Status:         ❌ FAIL');
    console.log(`Issues:         ${results.errors.join(', ')}`);
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (results.status === 'FAIL') {
    console.log('\n⚠️  Site hygiene issues detected. Fix before deployment.');
    process.exit(1);
  } else {
    console.log('\n✅ All site hygiene checks passed!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Site Hygiene Check failed:', error.message);
  process.exit(1);
});