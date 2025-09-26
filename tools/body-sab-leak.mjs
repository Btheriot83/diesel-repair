#!/usr/bin/env node
/**
 * Body SAB Leak Validator
 *
 * Prevents Service Area Business violations by detecting street addresses
 * and specific ZIP codes in visible page content that could trigger
 * Google penalties for location-specific content that's too detailed.
 */

import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';

// SAB violation patterns
const STREET_PATTERNS = [
  // Street address patterns
  /(\d{1,5})\s+([A-Za-z0-9\.]+)\s+(St|Street|Ave|Avenue|Blvd|Boulevard|Rd|Road|Dr|Drive|Ln|Lane|Ct|Court)\b/gi,
  // Suite/Unit patterns
  /(Suite|Ste\.|Unit|#)\s?\w+/gi,
  // Specific ZIP codes (Arizona 85xxx range)
  /\b85\d{3}\b/g
];

class SABLeakError extends Error {
  constructor(city, pattern, matches) {
    super(`${city}: SAB leak detected`);
    this.city = city;
    this.pattern = pattern;
    this.matches = matches;
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

function extractVisibleText(html) {
  const dom = new JSDOM(html);
  const main = dom.window.document.querySelector('main');

  if (!main) {
    throw new Error('No <main> element found');
  }

  // Remove script and style elements
  const scripts = main.querySelectorAll('script, style');
  scripts.forEach(el => el.remove());

  // Get text content and normalize whitespace
  const text = main.textContent || '';
  return text.replace(/\s+/g, ' ').trim();
}

function checkSABLeaks(city, text) {
  const violations = [];

  STREET_PATTERNS.forEach((pattern, index) => {
    const matches = text.match(pattern);
    if (matches && matches.length > 0) {
      // Filter out some common false positives
      const filteredMatches = matches.filter(match => {
        const lower = match.toLowerCase();

        // Skip common business names or non-address contexts
        if (lower.includes('route') ||
            lower.includes('highway') ||
            lower.includes('interstate') ||
            lower.includes('mile') ||
            lower.includes('exit')) {
          return false;
        }

        // For ZIP codes, make sure they're not in a list context
        if (pattern.source.includes('85\\d{3}')) {
          // Skip if part of a comma-separated list or service area description
          const context = text.substring(Math.max(0, text.indexOf(match) - 50), text.indexOf(match) + match.length + 50);
          if (context.includes('areas:') ||
              context.includes('including:') ||
              context.includes('serving:') ||
              context.match(/,\s*85\d{3}/)) {
            return false;
          }
        }

        return true;
      });

      if (filteredMatches.length > 0) {
        violations.push({
          patternIndex: index,
          patternName: getPatternName(pattern),
          matches: filteredMatches,
          context: filteredMatches.map(match => {
            const startIndex = text.indexOf(match);
            const contextStart = Math.max(0, startIndex - 30);
            const contextEnd = Math.min(text.length, startIndex + match.length + 30);
            return text.substring(contextStart, contextEnd).replace(match, `**${match}**`);
          })
        });
      }
    }
  });

  return violations;
}

function getPatternName(pattern) {
  if (pattern.source.includes('St|Street|Ave')) {
    return 'Street Address';
  }
  if (pattern.source.includes('Suite|Ste')) {
    return 'Suite/Unit';
  }
  if (pattern.source.includes('85\\d{3}')) {
    return 'Specific ZIP';
  }
  return 'Unknown Pattern';
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    violations: [],
    errors: []
  };

  try {
    const html = await fetchPageHTML(city);
    const visibleText = extractVisibleText(html);
    const violations = checkSABLeaks(city, visibleText);

    if (violations.length > 0) {
      results.status = 'FAIL';
      results.violations = violations;

      const violationSummary = violations.map(v =>
        `${v.patternName}: ${v.matches.join(', ')}`
      ).join('; ');

      throw new SABLeakError(city, 'Multiple patterns', violationSummary);
    }

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof SABLeakError) {
      results.errors.push(`SAB Leak: ${error.message.split(': SAB leak detected')[1] || 'Detected violations'}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Body SAB Leak Validator');
  console.log('===========================');
  console.log('Checking for street addresses, suite numbers, and specific ZIP codes...');

  const results = [];
  let hasViolations = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasViolations = true;
    }
  }

  // Print results table
  console.log('\n📊 Results Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Violations');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS') {
      console.log(`${cityName} ${status}   None detected`);
    } else {
      console.log(`${cityName} ${status}   ${result.errors.join(', ')}`);

      // Show detailed violations if any
      if (result.violations.length > 0) {
        result.violations.forEach(violation => {
          console.log(`            ${violation.patternName}: ${violation.matches.join(', ')}`);
          violation.context.forEach((ctx, i) => {
            console.log(`              Context: ...${ctx}...`);
          });
        });
      }
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed SAB leak validation`);

  if (hasViolations) {
    console.log('\n⚠️  SAB leak violations detected! Remove specific addresses and ZIP codes.');
    console.log('💡 SAB Compliance Tips:');
    console.log('   • Use general area descriptions instead of specific addresses');
    console.log('   • Reference corridors/highways instead of street addresses');
    console.log('   • Use city names instead of specific ZIP codes');
    console.log('   • Avoid suite/unit numbers in service area descriptions');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed SAB leak validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 SAB Leak Check failed:', error.message);
  process.exit(1);
});