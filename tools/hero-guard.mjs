#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🛡️ Hero Guard v1.0');
console.log('Validating hero image uniqueness and naming...\n');

const heroDir = 'public/images/cities';
const heroFiles = fs.readdirSync(heroDir).filter(f => f.includes('-hero-1600.avif'));

console.log(`Found ${heroFiles.length} hero images:`);

let failures = 0;
const hashes = new Map();

heroFiles.forEach(file => {
  const slug = file.replace('-hero-1600.avif', '');
  const filePath = path.join(heroDir, file);

  console.log(`🖼️  ${slug}: ${file}`);

  // Check file naming convention
  if (!file.match(/^[a-z-]+-hero-1600\.avif$/)) {
    console.log(`  ❌ Invalid naming pattern: ${file}`);
    failures++;
  } else {
    console.log(`  ✅ Valid naming pattern`);
  }

  // Check for duplicate content (SHA1)
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha1').update(content).digest('hex');

    if (hashes.has(hash)) {
      console.log(`  ❌ Duplicate content! Same as ${hashes.get(hash)}`);
      failures++;
    } else {
      console.log(`  ✅ Unique content (${hash.substring(0, 8)}...)`);
      hashes.set(hash, slug);
    }
  }

  console.log('');
});

// Check phoenix not reused
const phoenixUsage = heroFiles.filter(f => f.includes('phoenix'));
if (phoenixUsage.length > 1) {
  console.log(`❌ Phoenix images reused: ${phoenixUsage.join(', ')}`);
  failures++;
} else {
  console.log(`✅ Phoenix image uniqueness maintained`);
}

// Summary
console.log(`\n📊 Hero Guard Summary:`);
console.log(`Images checked: ${heroFiles.length}`);
console.log(`Unique hashes: ${hashes.size}`);
console.log(`Failures: ${failures}`);

if (failures === 0) {
  console.log('✅ All hero validation checks passed!');
  process.exit(0);
} else {
  console.log('❌ Hero validation failed - see issues above');
  process.exit(1);
}

export default true;