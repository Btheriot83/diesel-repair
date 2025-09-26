#!/usr/bin/env node
/**
 * Phone Usage Validator
 *
 * Validates consistent phone number usage across pages:
 * - All tel: links use E.164 format (+14803077434)
 * - JSON-LD telephone field uses E.164 format
 * - Visible text displays formatted version (480) 307-7434
 * - No mixing of formats within same page
 */

import { JSDOM } from 'jsdom';
import { PHONE_E164, PHONE_DISPLAY } from '../src/config/company.ts';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';

class PhoneUsageError extends Error {
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

function validateTelLinks(city, dom) {
  const telLinks = dom.window.document.querySelectorAll('a[href^="tel:"]');
  const issues = [];

  if (telLinks.length === 0) {
    issues.push('No tel: links found');
  }

  telLinks.forEach((link, index) => {
    const href = link.getAttribute('href');
    const telNumber = href.replace('tel:', '');

    if (telNumber !== PHONE_E164) {
      issues.push(`Tel link ${index + 1}: uses "${telNumber}", expected "${PHONE_E164}"`);
    }
  });

  return {
    linkCount: telLinks.length,
    issues
  };
}

function validateJSONLDPhone(city, jsonLdBlocks) {
  const issues = [];
  let phoneFields = [];

  jsonLdBlocks.forEach((block, blockIndex) => {
    if (block.telephone) {
      phoneFields.push({
        blockIndex,
        value: block.telephone,
        type: block['@type']
      });

      if (block.telephone !== PHONE_E164) {
        issues.push(`JSON-LD block ${blockIndex + 1} (${block['@type']}): telephone "${block.telephone}", expected "${PHONE_E164}"`);
      }
    }

    // Check nested objects
    if (block.provider && block.provider.telephone) {
      phoneFields.push({
        blockIndex,
        field: 'provider.telephone',
        value: block.provider.telephone,
        type: block['@type']
      });

      if (block.provider.telephone !== PHONE_E164) {
        issues.push(`JSON-LD block ${blockIndex + 1} provider.telephone: "${block.provider.telephone}", expected "${PHONE_E164}"`);
      }
    }
  });

  return {
    phoneFields,
    issues
  };
}

function validateDisplayText(city, dom) {
  const issues = [];
  const phoneNumbers = [];

  // Look for phone numbers in text content
  const textContent = dom.window.document.body.textContent;

  // Common phone number patterns
  const phonePatterns = [
    /\(\d{3}\)\s*\d{3}-\d{4}/g,  // (480) 307-7434
    /\d{3}-\d{3}-\d{4}/g,        // 480-307-7434
    /\d{3}\.\d{3}\.\d{4}/g,      // 480.307.7434
    /\+1\d{10}/g,                // +14803077434
    /1?\d{10}/g                  // 14803077434 or 4803077434
  ];

  phonePatterns.forEach(pattern => {
    const matches = textContent.match(pattern);
    if (matches) {
      phoneNumbers.push(...matches);
    }
  });

  // Remove duplicates
  const uniqueNumbers = [...new Set(phoneNumbers)];

  // Check each found number
  uniqueNumbers.forEach(number => {
    const cleanNumber = number.replace(/[\s\-\.\(\)]/g, '');

    // Skip if it's the E.164 format (which should only be in tel: links)
    if (number === PHONE_E164) {
      issues.push(`E.164 format "${PHONE_E164}" found in display text, should use "${PHONE_DISPLAY}"`);
      return;
    }

    // Check if it matches the expected display format
    if (number !== PHONE_DISPLAY) {
      // If it's the right digits but wrong format
      if (cleanNumber === PHONE_E164.replace('+1', '') || cleanNumber === PHONE_E164.replace('+', '')) {
        issues.push(`Phone display format "${number}" should be "${PHONE_DISPLAY}"`);
      } else {
        issues.push(`Unexpected phone number "${number}" found in text`);
      }
    }
  });

  return {
    foundNumbers: uniqueNumbers,
    issues
  };
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    errors: [],
    phone: {}
  };

  try {
    const html = await fetchPageHTML(city);
    const dom = new JSDOM(html);
    const jsonLdBlocks = extractJSONLD(html);

    // Validate tel: links
    const telValidation = validateTelLinks(city, dom);
    results.phone.telLinks = telValidation;

    // Validate JSON-LD phone fields
    const jsonLdValidation = validateJSONLDPhone(city, jsonLdBlocks);
    results.phone.jsonLd = jsonLdValidation;

    // Validate display text
    const displayValidation = validateDisplayText(city, dom);
    results.phone.display = displayValidation;

    // Collect all issues
    const allIssues = [
      ...telValidation.issues,
      ...jsonLdValidation.issues,
      ...displayValidation.issues
    ];

    if (allIssues.length > 0) {
      throw new PhoneUsageError(city, 'Phone Usage', allIssues.join('; '));
    }

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof PhoneUsageError) {
      results.errors.push(`${error.check}: ${error.message.split(' - ')[1]}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Phone Usage Validator');
  console.log('=========================');
  console.log(`Expected E.164: ${PHONE_E164} (for tel: links and JSON-LD)`);
  console.log(`Expected Display: ${PHONE_DISPLAY} (for visible text)`);

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
  console.log('City        Status  Tel Links  JSON-LD  Display  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS') {
      const telCount = `${result.phone.telLinks.linkCount} found`.padEnd(9);
      const jsonLdCount = `${result.phone.jsonLd.phoneFields.length} found`.padEnd(7);
      const displayCount = `${result.phone.display.foundNumbers.length} found`.padEnd(7);

      console.log(`${cityName} ${status}   ${telCount} ${jsonLdCount} ${displayCount} None`);
    } else {
      console.log(`${cityName} ${status}   ${result.errors.join(', ')}`);
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed phone usage validation`);

  if (hasFailures) {
    console.log('\n⚠️  Phone usage inconsistencies detected. Fix before deployment.');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed phone usage validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Phone Usage Check failed:', error.message);
  process.exit(1);
});