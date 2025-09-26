#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { createHash } from 'crypto';

const CRITICAL_PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/locations/phoenix', name: 'phoenix-location' }
];

const SNAPSHOT_DIR = 'tools/snapshots';

// Ensure snapshot directory exists
if (!existsSync(SNAPSHOT_DIR)) {
  mkdirSync(SNAPSHOT_DIR, { recursive: true });
}

function getPageContent(url) {
  try {
    // Use curl to fetch page content, following redirects
    const content = execSync(`curl -s -L "${url}"`, { encoding: 'utf8', timeout: 10000 });
    return content;
  } catch (error) {
    console.error(`❌ Failed to fetch ${url}:`, error.message);
    return null;
  }
}

function extractDOMStructure(html) {
  // Extract key DOM elements and structure (simplified)
  const structure = {
    title: extractBetween(html, '<title>', '</title>'),
    h1: extractAll(html, /<h1[^>]*>(.*?)<\/h1>/gi),
    h2: extractAll(html, /<h2[^>]*>(.*?)<\/h2>/gi),
    navLinks: extractAll(html, /<nav[^>]*>.*?<\/nav>/gi),
    ctaButtons: extractAll(html, /class="[^"]*btn[^"]*"[^>]*>(.*?)<\/[a-z]+>/gi),
    phoneNumbers: extractAll(html, /\(\d{3}\)\s*\d{3}-\d{4}/g),
    sections: html.match(/<section[^>]*>/gi)?.length || 0,
    metaDescription: extractBetween(html, 'name="description" content="', '"')
  };

  return structure;
}

function extractBetween(text, start, end) {
  const startIndex = text.indexOf(start);
  if (startIndex === -1) return null;
  const startPos = startIndex + start.length;
  const endIndex = text.indexOf(end, startPos);
  if (endIndex === -1) return null;
  return text.substring(startPos, endIndex).trim();
}

function extractAll(text, regex) {
  const matches = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1] || match[0]);
  }
  return matches;
}

function createSnapshot(pageName, structure) {
  const hash = createHash('sha256').update(JSON.stringify(structure)).digest('hex').substring(0, 16);
  const snapshot = {
    timestamp: new Date().toISOString(),
    hash,
    structure
  };

  const snapshotFile = `${SNAPSHOT_DIR}/${pageName}.json`;
  writeFileSync(snapshotFile, JSON.stringify(snapshot, null, 2));

  return { snapshot, hash };
}

function loadSnapshot(pageName) {
  const snapshotFile = `${SNAPSHOT_DIR}/${pageName}.json`;
  if (!existsSync(snapshotFile)) {
    return null;
  }

  try {
    return JSON.parse(readFileSync(snapshotFile, 'utf8'));
  } catch (error) {
    console.error(`❌ Failed to load snapshot for ${pageName}:`, error.message);
    return null;
  }
}

function compareSnapshots(current, previous) {
  if (!previous) {
    return { isNew: true, changes: [] };
  }

  if (current.hash === previous.hash) {
    return { isIdentical: true, changes: [] };
  }

  const changes = [];

  // Compare each structure element
  Object.keys(current.structure).forEach(key => {
    const currentValue = JSON.stringify(current.structure[key]);
    const previousValue = JSON.stringify(previous.structure[key]);

    if (currentValue !== previousValue) {
      changes.push({
        element: key,
        previous: previous.structure[key],
        current: current.structure[key]
      });
    }
  });

  return { hasChanges: true, changes };
}

async function main() {
  const command = process.argv[2] || 'check';
  const baseUrl = process.env.BASE_URL || 'http://localhost:4321';

  console.log(`🔍 DOM Snapshot Tool - ${command} mode`);
  console.log(`📡 Base URL: ${baseUrl}\n`);

  if (command === 'init') {
    console.log('🎯 Initializing snapshots for critical pages...\n');

    for (const page of CRITICAL_PAGES) {
      const url = `${baseUrl}${page.path}`;
      console.log(`📸 Capturing ${page.name}: ${url}`);

      const html = getPageContent(url);
      if (!html) {
        console.log(`  ❌ Failed to capture ${page.name}`);
        continue;
      }

      const structure = extractDOMStructure(html);
      const { hash } = createSnapshot(page.name, structure);

      console.log(`  ✅ Snapshot saved (hash: ${hash})`);
    }

    console.log('\n🎉 Initial snapshots created!');
    return;
  }

  if (command === 'check') {
    console.log('🔍 Checking for changes in critical pages...\n');

    let hasAnyChanges = false;

    for (const page of CRITICAL_PAGES) {
      const url = `${baseUrl}${page.path}`;
      console.log(`🔍 Checking ${page.name}: ${url}`);

      const html = getPageContent(url);
      if (!html) {
        console.log(`  ❌ Failed to fetch ${page.name}`);
        continue;
      }

      const structure = extractDOMStructure(html);
      const currentSnapshot = createSnapshot(`${page.name}-temp`, structure);
      const previousSnapshot = loadSnapshot(page.name);

      const comparison = compareSnapshots(currentSnapshot.snapshot, previousSnapshot);

      if (comparison.isNew) {
        console.log(`  🆕 No previous snapshot found`);
      } else if (comparison.isIdentical) {
        console.log(`  ✅ No changes detected`);
      } else if (comparison.hasChanges) {
        console.log(`  ⚠️  Changes detected:`);
        comparison.changes.forEach(change => {
          console.log(`    • ${change.element}: modified`);
        });
        hasAnyChanges = true;
      }
    }

    if (hasAnyChanges && process.env.CI) {
      console.log('\n🚨 Critical page changes detected in CI environment!');
      process.exit(1);
    } else if (hasAnyChanges) {
      console.log('\n⚠️  Changes detected. Run with ACCEPT_CHANGES=1 to update snapshots.');
    } else {
      console.log('\n✅ All critical pages are unchanged.');
    }
  }

  if (command === 'update' || process.env.ACCEPT_CHANGES === '1') {
    console.log('📝 Updating snapshots with current state...\n');

    for (const page of CRITICAL_PAGES) {
      const url = `${baseUrl}${page.path}`;
      console.log(`📸 Updating ${page.name}: ${url}`);

      const html = getPageContent(url);
      if (!html) {
        console.log(`  ❌ Failed to capture ${page.name}`);
        continue;
      }

      const structure = extractDOMStructure(html);
      const { hash } = createSnapshot(page.name, structure);

      console.log(`  ✅ Snapshot updated (hash: ${hash})`);
    }

    console.log('\n🎉 Snapshots updated!');
  }
}

main().catch(error => {
  console.error('❌ DOM snapshot tool error:', error.message);
  process.exit(1);
});