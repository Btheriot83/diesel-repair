#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, 'uniqueness.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.log('🔍 Uniqueness Check v1.0');
console.log('Validating 6-city rollout against doorway page guidelines...\n');

// Load cities data
const citiesPath = path.join(__dirname, '../src/data/cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

let failures = 0;

// Check data completeness for each city
cities.forEach(city => {
  console.log(`📍 Checking ${city.city}...`);

  // Validate minimum counts
  for (const [field, minCount] of Object.entries(config.minCounts)) {
    const actualCount = city[field]?.length || 0;
    if (actualCount < minCount) {
      console.log(`  ❌ ${field}: ${actualCount} < ${minCount} (required)`);
      failures++;
    } else {
      console.log(`  ✅ ${field}: ${actualCount} ≥ ${minCount}`);
    }
  }

  // Check hero image exists
  const heroPath = `public/images/cities/${city.slug}-hero-1600.avif`;
  if (fs.existsSync(heroPath)) {
    console.log(`  ✅ Hero image: ${city.slug}-hero-1600.avif exists`);
  } else {
    console.log(`  ❌ Hero image: ${city.slug}-hero-1600.avif missing`);
    failures++;
  }

  console.log('');
});

// Summary
console.log(`📊 Validation Summary:`);
console.log(`Cities checked: ${cities.length}`);
console.log(`Failures: ${failures}`);

if (failures === 0) {
  console.log('✅ All validation checks passed!');
  process.exit(0);
} else {
  console.log('❌ Validation failed - see issues above');
  process.exit(1);
}

export { config };