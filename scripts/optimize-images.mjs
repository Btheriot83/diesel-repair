#!/usr/bin/env node
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Configuration
const SIZES = [640, 960, 1280, 1600, 2000]; // Responsive breakpoints
const QUALITY = 85;
const MIN_SIZE_FOR_AVIF = 60 * 1024; // 60KB threshold

class ImageOptimizer {
  constructor() {
    this.stats = {
      processed: 0,
      savings: 0,
      originalSize: 0,
      newSize: 0
    };
  }

  async findImages(dir) {
    const images = [];
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          images.push(...await this.findImages(fullPath));
        } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
          images.push(fullPath);
        }
      }
    } catch (err) {
      console.warn(`Warning: Could not read directory ${dir}:`, err.message);
    }

    return images;
  }

  async getFileSize(filePath) {
    try {
      const stats = await fs.stat(filePath);
      return stats.size;
    } catch {
      return 0;
    }
  }

  async optimizeImage(imagePath) {
    try {
      const originalSize = await this.getFileSize(imagePath);
      this.stats.originalSize += originalSize;

      const image = sharp(imagePath);
      const metadata = await image.metadata();
      const baseName = path.parse(imagePath).name;
      const dir = path.dirname(imagePath);

      console.log(`Processing: ${path.relative(projectRoot, imagePath)} (${metadata.width}×${metadata.height}, ${(originalSize / 1024).toFixed(1)}KB)`);

      let totalNewSize = 0;

      // Generate responsive WebP versions
      for (const width of SIZES) {
        if (width <= metadata.width) {
          const webpPath = path.join(dir, `${baseName}-${width}w.webp`);

          await image
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(webpPath);

          totalNewSize += await this.getFileSize(webpPath);
        }
      }

      // Generate AVIF if original is large enough
      if (originalSize > MIN_SIZE_FOR_AVIF) {
        for (const width of SIZES) {
          if (width <= metadata.width) {
            const avifPath = path.join(dir, `${baseName}-${width}w.avif`);

            try {
              await image
                .resize(width, null, { withoutEnlargement: true })
                .avif({ quality: QUALITY })
                .toFile(avifPath);

              totalNewSize += await this.getFileSize(avifPath);
            } catch (err) {
              console.warn(`AVIF generation failed for ${avifPath}:`, err.message);
            }
          }
        }
      }

      this.stats.newSize += totalNewSize;
      this.stats.processed++;

      const savings = originalSize - totalNewSize;
      if (savings > 0) {
        this.stats.savings += savings;
      }

      return {
        original: originalSize,
        optimized: totalNewSize,
        savings,
        formats: originalSize > MIN_SIZE_FOR_AVIF ? ['webp', 'avif'] : ['webp']
      };

    } catch (err) {
      console.error(`Error processing ${imagePath}:`, err.message);
      return null;
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  async run() {
    console.log('🖼️  AZ Mobile Diesel Repair - Image Optimization');
    console.log('================================================\n');

    const searchPaths = [
      path.join(projectRoot, 'public', 'images'),
      path.join(projectRoot, 'public', 'lovable-uploads'),
      path.join(projectRoot, 'src', 'assets')
    ];

    const allImages = [];
    for (const searchPath of searchPaths) {
      try {
        const images = await this.findImages(searchPath);
        allImages.push(...images);
      } catch (err) {
        console.warn(`Skipping ${searchPath}:`, err.message);
      }
    }

    if (allImages.length === 0) {
      console.log('No images found to optimize.');
      return;
    }

    console.log(`Found ${allImages.length} images to process...\n`);

    const results = [];
    for (const imagePath of allImages) {
      const result = await this.optimizeImage(imagePath);
      if (result) {
        results.push({ path: imagePath, ...result });
      }
    }

    // Print summary
    console.log('\n📊 Optimization Summary');
    console.log('======================');
    console.log(`Images processed: ${this.stats.processed}`);
    console.log(`Original size: ${this.formatBytes(this.stats.originalSize)}`);
    console.log(`Optimized size: ${this.formatBytes(this.stats.newSize)}`);

    if (this.stats.savings > 0) {
      const savingsPercent = ((this.stats.savings / this.stats.originalSize) * 100).toFixed(1);
      console.log(`Total savings: ${this.formatBytes(this.stats.savings)} (${savingsPercent}%)`);
    }

    // Detailed results
    console.log('\n📋 Detailed Results');
    console.log('==================');
    results.forEach(result => {
      const savingsPercent = result.original > 0 ?
        ((result.savings / result.original) * 100).toFixed(1) : '0';
      console.log(`${path.relative(projectRoot, result.path)}`);
      console.log(`  Formats: ${result.formats.join(', ')}`);
      console.log(`  Savings: ${this.formatBytes(result.savings)} (${savingsPercent}%)`);
    });

    return results;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new ImageOptimizer();
  optimizer.run().catch(console.error);
}

export default ImageOptimizer;