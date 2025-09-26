#!/usr/bin/env node
/**
 * Image Budget & Accessibility Checker
 *
 * Validates hero images for performance and accessibility:
 * - File size ≤ 180KB for optimal LCP performance
 * - Width and height attributes for layout stability
 * - Non-empty alt text containing city name
 */

import { statSync, existsSync } from 'fs';
import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';
const MAX_FILE_SIZE = 180 * 1024; // 180KB in bytes
const EXPECTED_WIDTH = 1600;
const EXPECTED_HEIGHT = 900;

class ImageBudgetError extends Error {
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

function findHeroImage(city, dom) {
  // Look for hero images in common selectors
  const heroSelectors = [
    '.hero img',
    '.section-hero img',
    '[data-hero] img',
    'section:first-of-type img',
    'main > section:first-child img'
  ];

  let heroImg = null;

  for (const selector of heroSelectors) {
    const img = dom.window.document.querySelector(selector);
    if (img) {
      heroImg = img;
      break;
    }
  }

  // Fallback: look for images with city name in src
  if (!heroImg) {
    const allImages = dom.window.document.querySelectorAll('img');
    Array.from(allImages).forEach(img => {
      const src = img.getAttribute('src') || '';
      if (src.includes(city) && src.includes('hero')) {
        heroImg = img;
      }
    });
  }

  if (!heroImg) {
    throw new ImageBudgetError(city, 'Hero Image', 'No hero image found in expected locations');
  }

  return heroImg;
}

function validateImageFile(city, src) {
  // Expected file pattern: {city}-hero-1600.avif
  const expectedFilename = `${city}-hero-1600.avif`;

  if (!src.includes(expectedFilename)) {
    console.warn(`Warning: Hero image for ${city} doesn't match expected pattern "${expectedFilename}"`);
  }

  // Convert URL to local file path
  let localPath;
  if (src.startsWith('http')) {
    const url = new URL(src);
    localPath = `public${url.pathname}`;
  } else if (src.startsWith('/')) {
    localPath = `public${src}`;
  } else {
    localPath = `public/images/hero-optimized/${src}`;
  }

  if (!existsSync(localPath)) {
    throw new ImageBudgetError(city, 'File Existence', `Hero image file not found: ${localPath}`);
  }

  // Check file size
  const stats = statSync(localPath);
  const fileSizeKB = Math.round(stats.size / 1024);

  if (stats.size > MAX_FILE_SIZE) {
    throw new ImageBudgetError(city, 'File Size', `${fileSizeKB}KB exceeds 180KB limit`);
  }

  return {
    path: localPath,
    size: stats.size,
    sizeKB: fileSizeKB
  };
}

function validateImageAttributes(city, img) {
  const src = img.getAttribute('src');
  const alt = img.getAttribute('alt');
  const width = img.getAttribute('width');
  const height = img.getAttribute('height');

  const issues = [];

  // Alt text validation
  if (!alt || alt.trim() === '') {
    issues.push('Missing or empty alt text');
  } else {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    if (!alt.toLowerCase().includes(city.toLowerCase()) &&
        !alt.toLowerCase().includes(cityName.toLowerCase())) {
      issues.push(`Alt text should contain city name "${cityName}"`);
    }
  }

  // Dimensions validation
  if (!width || !height) {
    issues.push('Missing width or height attributes');
  } else {
    const widthNum = parseInt(width);
    const heightNum = parseInt(height);

    if (widthNum !== EXPECTED_WIDTH || heightNum !== EXPECTED_HEIGHT) {
      issues.push(`Dimensions ${widthNum}x${heightNum}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
    }
  }

  if (issues.length > 0) {
    throw new ImageBudgetError(city, 'Image Attributes', issues.join('; '));
  }

  return {
    src,
    alt,
    width: parseInt(width),
    height: parseInt(height)
  };
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    errors: [],
    image: {}
  };

  try {
    const html = await fetchPageHTML(city);
    const dom = new JSDOM(html);

    // Find hero image
    const heroImg = findHeroImage(city, dom);

    // Validate image attributes
    const attributes = validateImageAttributes(city, heroImg);
    results.image.attributes = attributes;

    // Validate image file
    const fileInfo = validateImageFile(city, attributes.src);
    results.image.file = fileInfo;

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof ImageBudgetError) {
      results.errors.push(`${error.check}: ${error.message.split(' - ')[1]}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${Math.round(bytes / (1024 * 1024))}MB`;
}

async function main() {
  console.log('🔍 Image Budget & Accessibility Checker');
  console.log('========================================');

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
  console.log('City        Status  File Size  Dimensions  Alt Text  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS') {
      const fileSize = formatFileSize(result.image.file.size).padEnd(9);
      const dimensions = `${result.image.attributes.width}x${result.image.attributes.height}`.padEnd(10);
      const altOk = result.image.attributes.alt ? '✅' : '❌';

      console.log(`${cityName} ${status}   ${fileSize} ${dimensions} ${altOk}       None`);
    } else {
      console.log(`${cityName} ${status}   ${result.errors.join(', ')}`);
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Budget summary
  if (results.some(r => r.status === 'PASS')) {
    const totalSize = results
      .filter(r => r.status === 'PASS')
      .reduce((sum, r) => sum + r.image.file.size, 0);

    console.log(`\n📈 Image Budget: ${formatFileSize(totalSize)} total for ${results.filter(r => r.status === 'PASS').length} hero images`);
    console.log(`   Average: ${formatFileSize(totalSize / results.filter(r => r.status === 'PASS').length)} per image`);
  }

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed image validation`);

  if (hasFailures) {
    console.log('\n⚠️  Image budget or accessibility issues detected. Fix before deployment.');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed image budget & accessibility validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Image Budget Check failed:', error.message);
  process.exit(1);
});