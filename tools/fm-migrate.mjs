#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🔧 Frontmatter Migration Tool v1.0');
console.log('Normalizing MDX frontmatter for locations collection...\n');

const locationsDir = path.join(__dirname, '../src/content/locations');
const strictMode = process.argv.includes('--strict');

if (strictMode) {
  console.log('🔒 Running in strict mode - unknown keys will be moved to extras\n');
}

// Define expected field order for consistent output
const fieldOrder = [
  'pageType', 'title', 'city', 'state', 'slug',
  'corridors', 'exitClusters', 'neighborhoods', 'zips', 'landmarks', 'heatNotes', 'nearbyCities',
  'etaMinutes', 'faqs',
  'metaTitle', 'metaDescription', 'canonical', 'ogImage',
  'centroid', 'extras'
];

// Known fields that should be preserved
const knownFields = new Set([
  'pageType', 'title', 'city', 'state', 'slug',
  'corridors', 'exitClusters', 'neighborhoods', 'zips', 'landmarks', 'heatNotes', 'nearbyCities',
  'etaMinutes', 'faqs', 'metaTitle', 'metaDescription', 'canonical', 'ogImage', 'centroid', 'extras'
]);

function fixMergedLines(frontmatterText) {
  // Fix patterns like 'pageType: "city"metaTitle:' -> 'pageType: "city"\nmetaTitle:'
  let fixed = frontmatterText.replace(/(")\s*([a-zA-Z_][a-zA-Z0-9_]*:)/g, '$1\n$2');

  // Fix FAQ indentation issues where answer: is not properly indented
  fixed = fixed.replace(/^(\s*)-\s*(question|answer):\s*(.*)$/gm, (match, indent, key, value) => {
    if (key === 'question') {
      return `${indent}- ${key}: ${value}`;
    } else {
      return `${indent}  ${key}: ${value}`;
    }
  });

  // Fix standalone answer: lines that should be indented under FAQ items
  fixed = fixed.replace(/^answer:\s*(.*)$/gm, '    answer: $1');

  return fixed;
}

function coerceToArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return [value];
  return [];
}

function migrateFrontmatter(data, filename) {
  const changes = [];
  const result = {};

  // Ensure pageType is set
  if (!data.pageType) {
    result.pageType = 'city';
    changes.push('Added pageType: "city"');
  } else {
    result.pageType = data.pageType;
  }

  // Set slug from filename if missing
  if (!data.slug) {
    result.slug = path.basename(filename, '.mdx');
    changes.push(`Added slug: "${result.slug}"`);
  } else {
    result.slug = data.slug;
  }

  // Ensure state defaults to AZ
  result.state = data.state || 'AZ';
  if (!data.state) {
    changes.push('Added state: "AZ"');
  }

  // Copy title and city as required
  result.title = data.title;
  result.city = data.city;

  // Coerce arrays for required fields
  const arrayFields = ['corridors', 'exitClusters', 'neighborhoods', 'zips', 'landmarks', 'heatNotes', 'nearbyCities'];
  arrayFields.forEach(field => {
    if (data[field]) {
      const originalLength = Array.isArray(data[field]) ? data[field].length : 1;
      result[field] = coerceToArray(data[field]);
      if (!Array.isArray(data[field])) {
        changes.push(`Coerced ${field} to array (${originalLength} item)`);
      }
    }
  });

  // Handle etaMinutes
  if (data.etaMinutes) {
    result.etaMinutes = typeof data.etaMinutes === 'number' ? data.etaMinutes : parseInt(data.etaMinutes);
  }

  // Fix FAQ format: convert q/a to question/answer
  if (data.faqs) {
    result.faqs = data.faqs.map(faq => {
      if (faq.q && faq.a) {
        changes.push('Converted FAQ q/a to question/answer');
        return { question: faq.q, answer: faq.a };
      } else if (faq.question && faq.answer) {
        return faq;
      } else {
        changes.push('Warning: Invalid FAQ format found');
        return faq;
      }
    });
  }

  // Copy optional fields
  ['metaTitle', 'metaDescription', 'canonical', 'ogImage', 'centroid'].forEach(field => {
    if (data[field]) {
      result[field] = data[field];
    }
  });

  // Handle unknown fields based on mode
  const unknownFields = Object.keys(data).filter(key => !knownFields.has(key));
  if (unknownFields.length > 0) {
    if (strictMode) {
      result.extras = result.extras || {};
      unknownFields.forEach(field => {
        result.extras[field] = data[field];
        changes.push(`Moved ${field} to extras`);
      });
    } else {
      unknownFields.forEach(field => {
        result[field] = data[field];
        changes.push(`Preserved unknown field: ${field}`);
      });
    }
  }

  return { result, changes };
}

function sortByFieldOrder(obj) {
  const sorted = {};

  // Add fields in defined order
  fieldOrder.forEach(field => {
    if (obj.hasOwnProperty(field)) {
      sorted[field] = obj[field];
    }
  });

  // Add any remaining fields not in order
  Object.keys(obj).forEach(field => {
    if (!sorted.hasOwnProperty(field)) {
      sorted[field] = obj[field];
    }
  });

  return sorted;
}

async function migrateFile(filepath) {
  const filename = path.basename(filepath);
  console.log(`📄 Processing ${filename}...`);

  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (!frontmatterMatch) {
      console.log(`  ⚠️  No frontmatter found in ${filename}`);
      return;
    }

    const [, frontmatterText, bodyContent] = frontmatterMatch;

    // Fix merged lines first
    const fixedFrontmatter = fixMergedLines(frontmatterText);

    // Parse YAML
    let data;
    try {
      data = yaml.load(fixedFrontmatter);
    } catch (yamlError) {
      console.log(`  ❌ YAML parsing error in ${filename}: ${yamlError.message}`);
      return;
    }

    // Migrate frontmatter
    const { result, changes } = migrateFrontmatter(data, filename);

    // Sort fields
    const sortedResult = sortByFieldOrder(result);

    // Generate new frontmatter
    const newFrontmatter = yaml.dump(sortedResult, {
      indent: 2,
      lineWidth: 120,
      noRefs: true
    });

    // Write back to file
    const newContent = `---\n${newFrontmatter}---\n${bodyContent}`;
    fs.writeFileSync(filepath, newContent, 'utf8');

    // Report changes
    if (changes.length > 0) {
      console.log(`  ✅ ${changes.length} changes made:`);
      changes.forEach(change => console.log(`     • ${change}`));
    } else {
      console.log(`  ✅ No changes needed`);
    }

  } catch (error) {
    console.log(`  ❌ Error processing ${filename}: ${error.message}`);
  }

  console.log('');
}

async function main() {
  if (!fs.existsSync(locationsDir)) {
    console.error(`❌ Locations directory not found: ${locationsDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(locationsDir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => path.join(locationsDir, f));

  console.log(`Found ${files.length} MDX files to process:\n`);

  for (const file of files) {
    await migrateFile(file);
  }

  console.log('🎉 Migration completed!');
}

main().catch(console.error);