#!/usr/bin/env node
/**
 * Title/H1 Uniqueness & Presence Checker
 *
 * Ensures each city page has unique titles and proper H1 structure
 * to avoid duplicate content issues and maintain SEO quality.
 */

import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';

class TitleH1Error extends Error {
  constructor(issues) {
    super(`Title/H1 validation failed: ${issues.length} issues found`);
    this.issues = issues;
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

function extractTitleAndH1(html) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Extract title
  const titleElement = doc.querySelector('title');
  const title = titleElement ? titleElement.textContent.trim() : null;

  // Extract all H1 elements
  const h1Elements = doc.querySelectorAll('h1');
  const h1s = Array.from(h1Elements).map(h1 => ({
    text: h1.textContent.trim(),
    html: h1.innerHTML.trim()
  }));

  return { title, h1s };
}

function validateTitleFormat(city, title) {
  const issues = [];

  if (!title) {
    issues.push('Missing <title> element');
    return issues;
  }

  const expectedCityPhrase = `${city.charAt(0).toUpperCase() + city.slice(1)}, AZ`;

  if (!title.includes(expectedCityPhrase)) {
    issues.push(`Title missing "${expectedCityPhrase}"`);
  }

  // Check for reasonable length
  if (title.length < 20) {
    issues.push(`Title too short: ${title.length} characters`);
  }

  if (title.length > 60) {
    issues.push(`Title too long: ${title.length} characters (may be truncated in SERPs)`);
  }

  return issues;
}

function validateH1Structure(city, h1s) {
  const issues = [];

  if (h1s.length === 0) {
    issues.push('Missing <h1> element');
    return issues;
  }

  if (h1s.length > 1) {
    issues.push(`Multiple H1s found: ${h1s.length} (should be exactly 1)`);
  }

  const h1Text = h1s[0].text;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  if (!h1Text.toLowerCase().includes(city.toLowerCase())) {
    issues.push(`H1 missing city name "${cityName}"`);
  }

  // Check for reasonable length
  if (h1Text.length < 10) {
    issues.push(`H1 too short: "${h1Text}"`);
  }

  return issues;
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    title: null,
    h1s: [],
    issues: [],
    errors: []
  };

  try {
    console.log(`🔍 Checking ${city}...`);

    const html = await fetchPageHTML(city);
    const { title, h1s } = extractTitleAndH1(html);

    results.title = title;
    results.h1s = h1s;

    // Validate title
    const titleIssues = validateTitleFormat(city, title);
    results.issues.push(...titleIssues.map(issue => `Title: ${issue}`));

    // Validate H1 structure
    const h1Issues = validateH1Structure(city, h1s);
    results.issues.push(...h1Issues.map(issue => `H1: ${issue}`));

    if (results.issues.length > 0) {
      throw new TitleH1Error(results.issues);
    }

    console.log(`   ✅ Title and H1 structure valid`);

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof TitleH1Error) {
      results.errors.push(`Structure: ${error.issues.length} issues found`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

function checkUniqueness(results) {
  const titleDuplicates = [];
  const h1Duplicates = [];

  // Check title uniqueness
  const titleMap = new Map();
  results.forEach(result => {
    if (result.title) {
      if (titleMap.has(result.title)) {
        titleDuplicates.push({
          title: result.title,
          cities: [titleMap.get(result.title), result.city]
        });
      } else {
        titleMap.set(result.title, result.city);
      }
    }
  });

  // Check H1 uniqueness
  const h1Map = new Map();
  results.forEach(result => {
    if (result.h1s.length > 0) {
      const h1Text = result.h1s[0].text;
      if (h1Map.has(h1Text)) {
        h1Duplicates.push({
          h1: h1Text,
          cities: [h1Map.get(h1Text), result.city]
        });
      } else {
        h1Map.set(h1Text, result.city);
      }
    }
  });

  return { titleDuplicates, h1Duplicates };
}

async function main() {
  console.log('🔍 Title/H1 Uniqueness & Presence Checker');
  console.log('==========================================');

  const results = [];
  let hasIssues = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasIssues = true;
    }
  }

  // Check for duplicates across cities
  const { titleDuplicates, h1Duplicates } = checkUniqueness(results);

  if (titleDuplicates.length > 0 || h1Duplicates.length > 0) {
    hasIssues = true;
  }

  // Print results table
  console.log('\n📊 Results Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Title ✓  H1 ✓  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';
    const titleOk = result.title ? '✅' : '❌';
    const h1Ok = result.h1s.length === 1 ? '✅' : '❌';

    if (result.status === 'PASS') {
      console.log(`${cityName} ${status}   ${titleOk}       ${h1Ok}    None`);
    } else {
      console.log(`${cityName} ${status}   ${titleOk}       ${h1Ok}    ${result.errors.join(', ')}`);

      // Show detailed issues
      if (result.issues.length > 0) {
        result.issues.forEach(issue => {
          console.log(`            • ${issue}`);
        });
      }
    }
  });

  // Show duplicate detection results
  if (titleDuplicates.length > 0) {
    console.log('\n❌ Title Duplicates Detected:');
    titleDuplicates.forEach(dup => {
      console.log(`   "${dup.title}" used by: ${dup.cities.join(', ')}`);
    });
  }

  if (h1Duplicates.length > 0) {
    console.log('\n❌ H1 Duplicates Detected:');
    h1Duplicates.forEach(dup => {
      console.log(`   "${dup.h1}" used by: ${dup.cities.join(', ')}`);
    });
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed title/H1 validation`);

  if (titleDuplicates.length > 0 || h1Duplicates.length > 0) {
    console.log(`❌ Duplicates: ${titleDuplicates.length} title, ${h1Duplicates.length} H1`);
  }

  if (hasIssues) {
    console.log('\n⚠️  Title/H1 issues detected! Fix structure and uniqueness problems.');
    console.log('💡 Requirements:');
    console.log('   • Each page needs exactly one <h1> with city name');
    console.log('   • Titles must include "{City}, AZ" and be unique');
    console.log('   • No duplicate titles or H1s across pages');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed title/H1 validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Title/H1 Check failed:', error.message);
  process.exit(1);
});