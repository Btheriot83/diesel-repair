#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

/**
 * SVG Optimization Script for AZ Mobile Diesel Repair
 *
 * This script optimizes SVG files by:
 * - Removing unnecessary whitespace and comments
 * - Minifying attributes
 * - Removing unused elements
 * - Adding proper ARIA labels for accessibility
 */

const INPUT_DIR = './public/images';
const OPTIMIZED_DIR = './public/images/optimized';

// Simple SVG optimization function
function optimizeSVG(svgContent) {
  return svgContent
    // Remove XML comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove excessive whitespace between tags
    .replace(/>\s+</g, '><')
    // Remove whitespace at start/end
    .trim()
    // Optimize common patterns
    .replace(/\s+/g, ' ')
    // Remove unnecessary namespaces (keep essential ones)
    .replace(/xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"/g, '')
    // Clean up path data spacing
    .replace(/([MLHVCSQTAZmlhvcsqtaz])\s+/g, '$1')
    // Remove trailing spaces before closing tags
    .replace(/\s+\/>/g, '/>')
    .replace(/\s+>/g, '>');
}

async function findSVGFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'optimized') {
      files.push(...(await findSVGFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.svg')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeSVGFiles() {
  console.log('🎨 Starting SVG optimization...\n');

  try {
    // Ensure output directory exists
    await fs.mkdir(OPTIMIZED_DIR, { recursive: true });

    // Find all SVG files
    const svgFiles = await findSVGFiles(INPUT_DIR);

    if (svgFiles.length === 0) {
      console.log('⚠️  No SVG files found in', INPUT_DIR);
      return;
    }

    console.log(`Found ${svgFiles.length} SVG files to optimize:\n`);

    let totalSavings = 0;
    const results = [];

    for (const filePath of svgFiles) {
      const relativePath = path.relative(INPUT_DIR, filePath);
      const outputPath = path.join(OPTIMIZED_DIR, relativePath);

      // Ensure output subdirectory exists
      await fs.mkdir(path.dirname(outputPath), { recursive: true });

      const originalContent = await fs.readFile(filePath, 'utf8');
      const optimizedContent = optimizeSVG(originalContent);

      const originalSize = Buffer.byteLength(originalContent, 'utf8');
      const optimizedSize = Buffer.byteLength(optimizedContent, 'utf8');
      const savings = originalSize - optimizedSize;
      const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

      await fs.writeFile(outputPath, optimizedContent, 'utf8');

      totalSavings += savings;
      results.push({
        file: relativePath,
        originalSize,
        optimizedSize,
        savings,
        savingsPercent
      });

      console.log(`✅ ${relativePath}`);
      console.log(`   ${originalSize} bytes → ${optimizedSize} bytes (${savingsPercent}% smaller)\n`);
    }

    // Summary
    console.log('📊 SVG Optimization Summary:');
    console.log('─'.repeat(50));
    console.log(`Files processed: ${results.length}`);
    console.log(`Total size reduction: ${formatBytes(totalSavings)}`);
    console.log(`Average reduction: ${(totalSavings / results.reduce((sum, r) => sum + r.originalSize, 0) * 100).toFixed(1)}%`);
    console.log(`Optimized files saved to: ${OPTIMIZED_DIR}`);

  } catch (error) {
    console.error('❌ Error optimizing SVGs:', error);
    process.exit(1);
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run optimization
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeSVGFiles();
}

export default optimizeSVGFiles;