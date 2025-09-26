#!/usr/bin/env node
/**
 * Build Budgets Checker
 *
 * Validates asset sizes for optimal Core Web Vitals performance.
 * Checks HTML, JS, and CSS bundle sizes for each location page
 * to ensure fast loading times and good user experience.
 */

import { existsSync, statSync, readFileSync } from 'fs';
import { join } from 'path';
import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];

// Performance budgets (in KB)
const BUDGETS = {
  html: 150,    // HTML size limit
  js: 80,       // Total JS bundle limit
  css: 120      // Total CSS bundle limit
};

class BudgetError extends Error {
  constructor(city, violations) {
    super(`${city}: Budget violations detected`);
    this.city = city;
    this.violations = violations;
  }
}

async function ensureBuild(skipBuild = false) {
  if (skipBuild) {
    console.log('⏭️  Skipping build (--skip-build flag)');
    return;
  }

  if (!existsSync('dist')) {
    console.log('🏗️  Building project (dist not found)...');
    const { execSync } = await import('child_process');

    try {
      execSync('npm run build:fast', {
        stdio: 'inherit',
        cwd: process.cwd()
      });
      console.log('✅ Build completed');
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  } else {
    console.log('📁 Using existing dist build');
  }
}

function getFileSize(filePath) {
  if (!existsSync(filePath)) {
    return 0;
  }
  return statSync(filePath).size;
}

function findLocationHTML(city) {
  const possiblePaths = [
    `dist/locations/${city}.html`,
    `dist/locations/${city}/index.html`
  ];

  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path;
    }
  }

  throw new Error(`HTML file not found for ${city}`);
}

function extractAssetReferences(htmlPath) {
  const html = readFileSync(htmlPath, 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const assets = {
    js: [],
    css: []
  };

  // Extract JavaScript references
  const scriptTags = doc.querySelectorAll('script[src]');
  scriptTags.forEach(script => {
    const src = script.getAttribute('src');
    if (src && !src.startsWith('http') && !src.startsWith('//')) {
      // Convert relative path to dist path
      const distPath = src.startsWith('/') ? `dist${src}` : `dist/${src}`;
      assets.js.push(distPath);
    }
  });

  // Extract CSS references
  const linkTags = doc.querySelectorAll('link[rel="stylesheet"]');
  linkTags.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('//')) {
      // Convert relative path to dist path
      const distPath = href.startsWith('/') ? `dist${href}` : `dist/${href}`;
      assets.css.push(distPath);
    }
  });

  return assets;
}

function calculateAssetSizes(assets) {
  const sizes = {
    js: 0,
    css: 0,
    jsFiles: [],
    cssFiles: []
  };

  // Calculate JS total
  assets.js.forEach(jsPath => {
    const size = getFileSize(jsPath);
    sizes.js += size;
    sizes.jsFiles.push({
      path: jsPath,
      size,
      sizeKB: Math.round(size / 1024)
    });
  });

  // Calculate CSS total
  assets.css.forEach(cssPath => {
    const size = getFileSize(cssPath);
    sizes.css += size;
    sizes.cssFiles.push({
      path: cssPath,
      size,
      sizeKB: Math.round(size / 1024)
    });
  });

  return sizes;
}

function checkBudgetViolations(city, htmlSize, assetSizes) {
  const violations = [];

  const htmlKB = Math.round(htmlSize / 1024);
  const jsKB = Math.round(assetSizes.js / 1024);
  const cssKB = Math.round(assetSizes.css / 1024);

  if (htmlKB > BUDGETS.html) {
    violations.push(`HTML: ${htmlKB}KB > ${BUDGETS.html}KB limit`);
  }

  if (jsKB > BUDGETS.js) {
    violations.push(`JS: ${jsKB}KB > ${BUDGETS.js}KB limit`);
  }

  if (cssKB > BUDGETS.css) {
    violations.push(`CSS: ${cssKB}KB > ${BUDGETS.css}KB limit`);
  }

  return violations;
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    sizes: null,
    violations: [],
    errors: []
  };

  try {
    console.log(`🔍 Checking ${city}...`);

    // Find HTML file
    const htmlPath = findLocationHTML(city);
    const htmlSize = getFileSize(htmlPath);

    console.log(`   📄 HTML: ${htmlPath}`);

    // Extract asset references
    const assets = extractAssetReferences(htmlPath);
    const assetSizes = calculateAssetSizes(assets);

    const htmlKB = Math.round(htmlSize / 1024);
    const jsKB = Math.round(assetSizes.js / 1024);
    const cssKB = Math.round(assetSizes.css / 1024);

    console.log(`   📊 Sizes: ${htmlKB}KB HTML, ${jsKB}KB JS (${assets.js.length} files), ${cssKB}KB CSS (${assets.css.length} files)`);

    results.sizes = {
      html: htmlSize,
      htmlKB,
      js: assetSizes.js,
      jsKB,
      css: assetSizes.css,
      cssKB,
      assets: assetSizes
    };

    // Check budget violations
    const violations = checkBudgetViolations(city, htmlSize, assetSizes);

    if (violations.length > 0) {
      results.violations = violations;
      throw new BudgetError(city, violations);
    }

    console.log(`   ✅ All budgets within limits`);

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof BudgetError) {
      results.errors.push(`Budget: ${error.violations.join(', ')}`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Build Budgets Checker');
  console.log('=========================');
  console.log(`Budget limits: HTML ≤${BUDGETS.html}KB, JS ≤${BUDGETS.js}KB, CSS ≤${BUDGETS.css}KB\n`);

  // Check for skip-build flag
  const skipBuild = process.argv.includes('--skip-build');

  try {
    await ensureBuild(skipBuild);
  } catch (error) {
    console.error('💥 Build preparation failed:', error.message);
    process.exit(1);
  }

  if (!existsSync('dist')) {
    console.error('💥 No dist directory found. Run build first or remove --skip-build flag.');
    process.exit(1);
  }

  const results = [];
  let hasBudgetViolations = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasBudgetViolations = true;
    }
  }

  // Print results table
  console.log('\n📊 Budget Results:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  HTML KB  JS KB   CSS KB  Total KB  Violations');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS' && result.sizes) {
      const htmlKB = result.sizes.htmlKB.toString().padEnd(7);
      const jsKB = result.sizes.jsKB.toString().padEnd(6);
      const cssKB = result.sizes.cssKB.toString().padEnd(6);
      const totalKB = (result.sizes.htmlKB + result.sizes.jsKB + result.sizes.cssKB).toString().padEnd(8);

      console.log(`${cityName} ${status}   ${htmlKB} ${jsKB} ${cssKB} ${totalKB} None`);
    } else {
      console.log(`${cityName} ${status}   N/A     N/A     N/A     N/A       ${result.errors.join(', ')}`);

      // Show detailed violations
      if (result.violations.length > 0) {
        result.violations.forEach(violation => {
          console.log(`            💥 ${violation}`);
        });
      }
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Summary statistics
  const passResults = results.filter(r => r.status === 'PASS' && r.sizes);
  if (passResults.length > 0) {
    const totalSize = passResults.reduce((sum, r) => sum + r.sizes.htmlKB + r.sizes.jsKB + r.sizes.cssKB, 0);
    const avgSize = Math.round(totalSize / passResults.length);

    console.log(`\n📈 Performance Summary:`);
    console.log(`   Average page size: ${avgSize}KB`);
    console.log(`   Budget utilization: HTML ${Math.round(passResults.reduce((sum, r) => sum + r.sizes.htmlKB, 0) / (passResults.length * BUDGETS.html) * 100)}%, JS ${Math.round(passResults.reduce((sum, r) => sum + r.sizes.jsKB, 0) / (passResults.length * BUDGETS.js) * 100)}%, CSS ${Math.round(passResults.reduce((sum, r) => sum + r.sizes.cssKB, 0) / (passResults.length * BUDGETS.css) * 100)}%`);
  }

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📊 Summary: ${passCount}/${CITIES.length} cities passed budget validation`);

  if (hasBudgetViolations) {
    console.log('\n⚠️  Budget violations detected! Optimize assets for better performance.');
    console.log('💡 Optimization tips:');
    console.log('   • Enable code splitting for JavaScript');
    console.log('   • Use CSS purging to remove unused styles');
    console.log('   • Implement dynamic imports for non-critical code');
    console.log('   • Optimize images and use modern formats (WebP/AVIF)');
    console.log('   • Enable gzip/brotli compression');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed budget validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Build Budget Check failed:', error.message);
  process.exit(1);
});