#!/usr/bin/env node
/**
 * Quick hero image optimization script
 * Generates responsive versions of Alt Hero 3 for optimal LCP
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const inputPath = 'public/images/Alt Hero 3.png';
const outputDir = 'public/images/hero-optimized';

// Responsive breakpoints for hero image
const sizes = [
  { width: 1200, suffix: '1200w' },
  { width: 1600, suffix: '1600w' },
  { width: 2000, suffix: '2000w' }
];

async function optimizeHero() {
  try {
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    console.log('🖼️  Optimizing Alt Hero 3 for responsive hero...\n');

    // Get original image info
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, ${(await fs.stat(inputPath)).size / 1024 | 0}KB`);

    // Generate responsive versions
    for (const size of sizes) {
      const baseName = `hero-${size.suffix}`;

      // Generate AVIF (best compression)
      const avifPath = path.join(outputDir, `${baseName}.avif`);
      await image
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'cover'
        })
        .avif({ quality: 80 })
        .toFile(avifPath);

      const avifSize = (await fs.stat(avifPath)).size;
      console.log(`✅ ${baseName}.avif - ${avifSize / 1024 | 0}KB`);

      // Generate WebP (good compression, wide support)
      const webpPath = path.join(outputDir, `${baseName}.webp`);
      await image
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'cover'
        })
        .webp({ quality: 85 })
        .toFile(webpPath);

      const webpSize = (await fs.stat(webpPath)).size;
      console.log(`✅ ${baseName}.webp - ${webpSize / 1024 | 0}KB`);
    }

    console.log('\n🎉 Hero optimization complete!');
    console.log(`📂 Optimized images saved to: ${outputDir}`);

  } catch (error) {
    console.error('❌ Error optimizing hero:', error.message);

    // If sharp is not installed, show helpful message
    if (error.message.includes('sharp')) {
      console.log('\n💡 Install sharp: npm install --save-dev sharp');
    }
  }
}

optimizeHero();