#!/usr/bin/env node
/**
 * Meta/OG Sanity Checker
 *
 * Validates essential meta tags for SEO and social sharing:
 * - Title starts with 'Mobile Diesel Mechanic — {City}, AZ'
 * - Meta description 110-170 chars with corridor tokens
 * - Canonical URL correctness
 * - OG image exists and city-specific
 */

import { readFileSync, existsSync } from 'fs';
import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';
const CORRIDOR_TOKENS = ['I-10', 'I-17', 'Loop', '101', '202', '303', 'highway', 'freeway', 'interstate'];

class MetaCheckError extends Error {
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

function validateTitle(city, dom) {
  const titleElement = dom.window.document.querySelector('title');

  if (!titleElement) {
    throw new MetaCheckError(city, 'Title', 'Missing <title> element');
  }

  const title = titleElement.textContent.trim();
  const expectedPrefix = `Mobile Diesel Mechanic — ${city.charAt(0).toUpperCase() + city.slice(1)}, AZ`;

  if (!title.startsWith(expectedPrefix)) {
    throw new MetaCheckError(city, 'Title', `Expected to start with "${expectedPrefix}", got "${title}"`);
  }

  return title;
}

function validateMetaDescription(city, dom) {
  const metaDesc = dom.window.document.querySelector('meta[name="description"]');

  if (!metaDesc) {
    throw new MetaCheckError(city, 'Meta Description', 'Missing meta description');
  }

  const content = metaDesc.getAttribute('content');

  if (!content) {
    throw new MetaCheckError(city, 'Meta Description', 'Empty meta description content');
  }

  // Length validation
  if (content.length < 110 || content.length > 170) {
    throw new MetaCheckError(city, 'Meta Description', `Length ${content.length} chars, expected 110-170`);
  }

  // Corridor tokens validation
  const foundTokens = CORRIDOR_TOKENS.filter(token =>
    content.toLowerCase().includes(token.toLowerCase())
  );

  if (foundTokens.length < 2) {
    throw new MetaCheckError(city, 'Meta Description', `Found ${foundTokens.length} corridor tokens, expected at least 2`);
  }

  return { content, length: content.length, corridorTokens: foundTokens };
}

function validateCanonical(city, dom) {
  const canonical = dom.window.document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    throw new MetaCheckError(city, 'Canonical', 'Missing canonical link');
  }

  const href = canonical.getAttribute('href');
  const expectedPath = `/locations/${city}`;

  if (!href.endsWith(expectedPath)) {
    throw new MetaCheckError(city, 'Canonical', `Expected to end with "${expectedPath}", got "${href}"`);
  }

  return href;
}

function validateOGImage(city, dom) {
  const ogImage = dom.window.document.querySelector('meta[property="og:image"]');

  if (!ogImage) {
    throw new MetaCheckError(city, 'OG Image', 'Missing og:image meta tag');
  }

  const content = ogImage.getAttribute('content');

  if (!content) {
    throw new MetaCheckError(city, 'OG Image', 'Empty og:image content');
  }

  // Check if filename contains city slug (not generic)
  if (!content.includes(city) && !content.includes(`${city}-`)) {
    throw new MetaCheckError(city, 'OG Image', `Image filename should contain "${city}", got "${content}"`);
  }

  // Check for generic filenames
  const genericTerms = ['phoenix', 'generic', 'default', 'placeholder'];
  const lowerContent = content.toLowerCase();

  if (city !== 'phoenix') {
    genericTerms.forEach(term => {
      if (lowerContent.includes(term) && term !== city) {
        throw new MetaCheckError(city, 'OG Image', `Using generic image with "${term}" for ${city}`);
      }
    });
  }

  // Extract local path and check file existence
  let localPath;
  if (content.startsWith('http')) {
    // Extract path from full URL
    const url = new URL(content);
    localPath = `public${url.pathname}`;
  } else if (content.startsWith('/')) {
    localPath = `public${content}`;
  } else {
    localPath = `public/images/cities/${content}`;
  }

  if (!existsSync(localPath)) {
    throw new MetaCheckError(city, 'OG Image', `Image file does not exist: ${localPath}`);
  }

  return { url: content, localPath };
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    errors: [],
    meta: {}
  };

  try {
    const html = await fetchPageHTML(city);
    const dom = new JSDOM(html);

    // Run all validations
    results.meta.title = validateTitle(city, dom);
    results.meta.description = validateMetaDescription(city, dom);
    results.meta.canonical = validateCanonical(city, dom);
    results.meta.ogImage = validateOGImage(city, dom);

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof MetaCheckError) {
      results.errors.push(`${error.check}: ${error.message.split(' - ')[1]}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Meta/OG Sanity Checker');
  console.log('==========================');

  const results = [];
  let hasFailures = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasFailures = true;
    }
  }

  // Print compact results table
  console.log('\n📊 Results Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Title ✓  Desc Len  Corridors  Canonical ✓  OG Image ✓');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS') {
      const titleOk = '✅';
      const descLen = `${result.meta.description.length}ch`;
      const corridors = `${result.meta.description.corridorTokens.length} found`;
      const canonicalOk = '✅';
      const ogImageOk = '✅';

      console.log(`${cityName} ${status}   ${titleOk}      ${descLen.padEnd(8)} ${corridors.padEnd(10)} ${canonicalOk}           ${ogImageOk}`);
    } else {
      console.log(`${cityName} ${status}   ${result.errors.join(', ')}`);
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed meta validation`);

  if (hasFailures) {
    console.log('\n⚠️  Meta tag issues detected. Fix before deployment.');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed meta/OG validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Meta Check failed:', error.message);
  process.exit(1);
});