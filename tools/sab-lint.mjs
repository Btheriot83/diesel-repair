#!/usr/bin/env node
/**
 * SAB JSON-LD Lint Validator
 *
 * Validates Service Area Business (SAB) compliance for location pages:
 * - LocalBusiness schema with address (locality, region, country only)
 * - Telephone matches E.164 format
 * - ServiceArea/areaServed present with GeoCircle radius 50-80km
 * - FAQPage present if FAQs exist
 * - BreadcrumbList present
 * - NO AggregateRating unless reviewCount > 0
 */

import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { PHONE_E164, COMPANY_LAT, COMPANY_LNG, SERVICE_RADIUS_METERS } from '../src/config/company.ts';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';

class SABLintError extends Error {
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

function extractJSONLD(html) {
  const dom = new JSDOM(html);
  const scripts = dom.window.document.querySelectorAll('script[type="application/ld+json"]');

  const jsonLdBlocks = [];
  scripts.forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      jsonLdBlocks.push(data);
    } catch (error) {
      throw new Error(`Invalid JSON-LD: ${error.message}`);
    }
  });

  return jsonLdBlocks;
}

function validateLocalBusiness(city, jsonLdBlocks) {
  const localBusinessBlocks = jsonLdBlocks.filter(block =>
    block['@type'] === 'LocalBusiness' ||
    (Array.isArray(block['@type']) && block['@type'].includes('LocalBusiness'))
  );

  if (localBusinessBlocks.length === 0) {
    throw new SABLintError(city, 'LocalBusiness', 'No LocalBusiness schema found');
  }

  if (localBusinessBlocks.length > 1) {
    throw new SABLintError(city, 'LocalBusiness', `Found ${localBusinessBlocks.length} LocalBusiness blocks, expected 1`);
  }

  const business = localBusinessBlocks[0];

  // Address validation - SAB compliance requires locality, region, country only
  if (!business.address) {
    throw new SABLintError(city, 'Address', 'Missing address object');
  }

  const address = business.address;
  if (!address.addressLocality || !address.addressRegion || !address.addressCountry) {
    throw new SABLintError(city, 'Address', 'Missing required address fields (locality, region, country)');
  }

  // SAB violation: streetAddress and postalCode should NOT be present
  if (address.streetAddress) {
    throw new SABLintError(city, 'Address', 'streetAddress present - SAB violation (use locality only)');
  }

  if (address.postalCode) {
    throw new SABLintError(city, 'Address', 'postalCode present - SAB violation (use locality only)');
  }

  // Telephone validation
  if (!business.telephone) {
    throw new SABLintError(city, 'Telephone', 'Missing telephone field');
  }

  if (business.telephone !== PHONE_E164) {
    throw new SABLintError(city, 'Telephone', `Expected ${PHONE_E164}, got ${business.telephone}`);
  }

  // ServiceArea validation
  if (!business.serviceArea && !business.areaServed) {
    throw new SABLintError(city, 'ServiceArea', 'Missing serviceArea or areaServed');
  }

  // If serviceArea exists, validate GeoCircle
  if (business.serviceArea) {
    const serviceArea = Array.isArray(business.serviceArea) ? business.serviceArea[0] : business.serviceArea;

    if (serviceArea['@type'] !== 'GeoCircle') {
      throw new SABLintError(city, 'ServiceArea', 'serviceArea must be GeoCircle type');
    }

    if (!serviceArea.geoMidpoint || !serviceArea.geoRadius) {
      throw new SABLintError(city, 'ServiceArea', 'GeoCircle missing geoMidpoint or geoRadius');
    }

    const radius = parseInt(serviceArea.geoRadius);
    if (radius < 50000 || radius > 80000) { // 50-80km in meters
      throw new SABLintError(city, 'ServiceArea', `GeoCircle radius ${radius}m outside 50-80km range`);
    }
  }

  // AggregateRating validation - should NOT exist unless reviewCount > 0
  if (business.aggregateRating) {
    const rating = business.aggregateRating;
    if (!rating.reviewCount || rating.reviewCount <= 0) {
      throw new SABLintError(city, 'AggregateRating', 'AggregateRating present without valid reviewCount > 0');
    }
  }

  return true;
}

function validateFAQPage(city, jsonLdBlocks, hasContent) {
  const faqBlocks = jsonLdBlocks.filter(block => block['@type'] === 'FAQPage');

  if (hasContent && faqBlocks.length === 0) {
    throw new SABLintError(city, 'FAQPage', 'FAQs exist in content but missing FAQPage schema');
  }

  if (!hasContent && faqBlocks.length > 0) {
    throw new SABLintError(city, 'FAQPage', 'FAQPage schema present but no FAQ content found');
  }

  return true;
}

function validateBreadcrumbs(city, jsonLdBlocks) {
  const breadcrumbBlocks = jsonLdBlocks.filter(block => block['@type'] === 'BreadcrumbList');

  if (breadcrumbBlocks.length === 0) {
    throw new SABLintError(city, 'BreadcrumbList', 'Missing BreadcrumbList schema');
  }

  return true;
}

function checkFAQContent(html) {
  const dom = new JSDOM(html);
  const faqElements = dom.window.document.querySelectorAll('[data-faq], .faq, [role="group"]');
  return faqElements.length > 0;
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    errors: []
  };

  try {
    const html = await fetchPageHTML(city);
    const jsonLdBlocks = extractJSONLD(html);
    const hasFAQContent = checkFAQContent(html);

    // Run all validations
    validateLocalBusiness(city, jsonLdBlocks);
    validateFAQPage(city, jsonLdBlocks, hasFAQContent);
    validateBreadcrumbs(city, jsonLdBlocks);

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof SABLintError) {
      results.errors.push(`${error.check}: ${error.message.split(' - ')[1]}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 SAB JSON-LD Lint Validator');
  console.log('================================');

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
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';
    const cityName = result.city.padEnd(11);

    if (result.status === 'PASS') {
      console.log(`${cityName} ${status}`);
    } else {
      console.log(`${cityName} ${status}  ${result.errors.join(', ')}`);
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed SAB validation`);

  if (hasFailures) {
    console.log('\n⚠️  SAB compliance issues detected. Review and fix before template deployment.');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed SAB JSON-LD validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 SAB Lint failed:', error.message);
  process.exit(1);
});