#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputImage = path.join(__dirname, '../public/images/phoenix-metro-background.webp');
const outputDir = path.join(__dirname, '../public/images/phoenix-optimized');

const SIZES = [1200, 1600, 2000];
const QUALITY = 85;

async function convertPhoenixHero() {
  try {
    console.log('🔄 Converting Phoenix hero image...');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Check if input exists
    if (!fs.existsSync(inputImage)) {
      throw new Error(`Input image not found: ${inputImage}`);
    }

    const image = sharp(inputImage);
    const metadata = await image.metadata();

    console.log(`📐 Original: ${metadata.width}x${metadata.height}`);

    for (const width of SIZES) {
      console.log(`\n📦 Generating ${width}w versions...`);

      // Generate WebP
      const webpPath = path.join(outputDir, `phoenix-${width}w.webp`);
      await image
        .resize(width, null, { withoutEnlargement: false }) // Allow upscaling
        .webp({ quality: QUALITY })
        .toFile(webpPath);

      console.log(`✅ Created: phoenix-${width}w.webp`);

      // Generate AVIF
      const avifPath = path.join(outputDir, `phoenix-${width}w.avif`);
      try {
        await image
          .resize(width, null, { withoutEnlargement: false }) // Allow upscaling
          .avif({ quality: QUALITY })
          .toFile(avifPath);

        console.log(`✅ Created: phoenix-${width}w.avif`);
      } catch (err) {
        console.warn(`⚠️ AVIF generation failed for ${width}w:`, err.message);
      }
    }

    console.log('\n🎉 Phoenix hero conversion complete!');

  } catch (error) {
    console.error('❌ Conversion failed:', error.message);
    process.exit(1);
  }
}

convertPhoenixHero();