#!/usr/bin/env node
/**
 * Broken Internal Links Crawler
 *
 * Crawls each city page and verifies all internal links resolve correctly.
 * Checks both dev server routes and built file existence to catch 404s
 * before deployment.
 */

import { existsSync, readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { join } from 'path';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';

class BrokenLinksError extends Error {
  constructor(city, brokenLinks) {
    super(`${city}: ${brokenLinks.length} broken links found`);
    this.city = city;
    this.brokenLinks = brokenLinks;
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

function extractInternalLinks(html) {
  const dom = new JSDOM(html);
  const links = dom.window.document.querySelectorAll('a[href]');
  const internalLinks = [];

  links.forEach(link => {
    const href = link.getAttribute('href');

    // Only check internal links (starting with /)
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      // Remove hash fragments and query parameters for route checking
      const cleanHref = href.split('#')[0].split('?')[0];

      internalLinks.push({
        original: href,
        clean: cleanHref,
        text: link.textContent.trim() || '[no text]'
      });
    }
  });

  // Remove duplicates based on clean href
  const uniqueLinks = [];
  const seen = new Set();

  internalLinks.forEach(link => {
    if (!seen.has(link.clean)) {
      seen.add(link.clean);
      uniqueLinks.push(link);
    }
  });

  return uniqueLinks;
}

async function checkDevServerRoute(route) {
  try {
    const response = await fetch(`${DEV_BASE}${route}`, { method: 'HEAD' });
    return {
      exists: response.ok || response.status === 308, // 308 = permanent redirect (acceptable)
      status: response.status,
      method: 'dev-server'
    };
  } catch (error) {
    return {
      exists: false,
      status: 'ERROR',
      error: error.message,
      method: 'dev-server'
    };
  }
}

function checkDistFile(route) {
  // Common patterns for Astro build output
  const possiblePaths = [
    `dist${route}`,
    `dist${route}.html`,
    `dist${route}/index.html`
  ];

  // Handle special routes
  if (route === '/') {
    possiblePaths.push('dist/index.html');
  }

  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return {
        exists: true,
        path,
        method: 'dist-file'
      };
    }
  }

  return {
    exists: false,
    method: 'dist-file',
    checkedPaths: possiblePaths
  };
}

async function isDevServerRunning() {
  try {
    const response = await fetch(`${DEV_BASE}/`, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function validateLinks(city, links) {
  const brokenLinks = [];
  const devServerAvailable = await isDevServerRunning();

  console.log(`   Checking ${links.length} unique internal links...`);

  for (const link of links) {
    let linkStatus = { exists: false };

    if (devServerAvailable) {
      linkStatus = await checkDevServerRoute(link.clean);
    }

    // If dev server check failed or unavailable, try dist files
    if (!linkStatus.exists) {
      const distStatus = checkDistFile(link.clean);
      if (distStatus.exists) {
        linkStatus = distStatus;
      }
    }

    if (!linkStatus.exists) {
      brokenLinks.push({
        href: link.clean,
        originalHref: link.original,
        text: link.text,
        status: linkStatus.status || 'NOT_FOUND',
        method: linkStatus.method
      });
    }
  }

  return brokenLinks;
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    links: [],
    brokenLinks: [],
    errors: []
  };

  try {
    console.log(`🔍 Checking ${city}...`);

    const html = await fetchPageHTML(city);
    const internalLinks = extractInternalLinks(html);
    results.links = internalLinks;

    if (internalLinks.length === 0) {
      console.log(`   ⚠️  No internal links found`);
      return results;
    }

    const brokenLinks = await validateLinks(city, internalLinks);
    results.brokenLinks = brokenLinks;

    if (brokenLinks.length > 0) {
      throw new BrokenLinksError(city, brokenLinks);
    }

    console.log(`   ✅ All ${internalLinks.length} links valid`);

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof BrokenLinksError) {
      results.errors.push(`Broken Links: ${error.brokenLinks.length} links broken`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Broken Internal Links Crawler');
  console.log('=================================');

  const devServerAvailable = await isDevServerRunning();
  const distExists = existsSync('dist');

  console.log(`🌐 Dev server: ${devServerAvailable ? '✅ Available' : '❌ Not running'}`);
  console.log(`📁 Dist build: ${distExists ? '✅ Available' : '❌ Not built'}`);

  if (!devServerAvailable && !distExists) {
    console.log('\n⚠️  Neither dev server nor dist build available. Cannot validate links.');
    process.exit(1);
  }

  const results = [];
  let hasBrokenLinks = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasBrokenLinks = true;
    }
  }

  // Print results table
  console.log('\n📊 Results Summary:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Total Links  Broken  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';
    const totalLinks = result.links.length.toString().padEnd(11);
    const brokenCount = result.brokenLinks.length.toString().padEnd(6);

    if (result.status === 'PASS') {
      console.log(`${cityName} ${status}   ${totalLinks} ${brokenCount} None`);
    } else {
      console.log(`${cityName} ${status}   ${totalLinks} ${brokenCount} ${result.errors.join(', ')}`);

      // Show detailed broken links
      if (result.brokenLinks.length > 0) {
        result.brokenLinks.forEach(link => {
          console.log(`            💔 ${link.href} (${link.status}) - "${link.text}"`);
        });
      }
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const passCount = results.filter(r => r.status === 'PASS').length;
  const totalBroken = results.reduce((sum, r) => sum + r.brokenLinks.length, 0);

  console.log(`\n📈 Summary: ${passCount}/${CITIES.length} cities passed link validation`);
  console.log(`💔 Total broken links: ${totalBroken}`);

  if (hasBrokenLinks) {
    console.log('\n⚠️  Broken internal links detected! Fix routes before deployment.');
    console.log('💡 Common fixes:');
    console.log('   • Create missing pages or redirects');
    console.log('   • Fix typos in href attributes');
    console.log('   • Update navigation after route changes');
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed internal links validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Broken Links Check failed:', error.message);
  process.exit(1);
});