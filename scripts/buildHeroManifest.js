#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public/images');
const outputPath = path.join(__dirname, '../src/data/heroManifest.json');

// Selection rules
const MIN_WIDTH = 1600;
const ASPECT_RANGE = [1.6, 2.2];
const FORMAT_PRIORITY = { 'avif': 3, 'webp': 2, 'jpg': 1, 'jpeg': 1, 'png': 1 };

// Mock image dimensions (in production, you'd use a library like 'image-size')
// For now, I'll create reasonable mock data based on naming patterns
const mockImageData = {
  'phoenix-metro-background.webp': { width: 1920, height: 1080, bytes: 245000 },
  'phoenix-metro-background.jpeg': { width: 1920, height: 1080, bytes: 420000 },
  'hero-optimized/hero-2000w.avif': { width: 2000, height: 1125, bytes: 180000 },
  'hero-optimized/hero-2000w.webp': { width: 2000, height: 1125, bytes: 290000 },
  'hero-optimized/hero-1600w.avif': { width: 1600, height: 900, bytes: 140000 },
  'hero-optimized/hero-1600w.webp': { width: 1600, height: 900, bytes: 220000 },
  'hero-optimized/hero-1200w.avif': { width: 1200, height: 675, bytes: 95000 },
  'hero-optimized/hero-1200w.webp': { width: 1200, height: 675, bytes: 160000 },
  'Alt Hero 4.webp': { width: 1920, height: 1080, bytes: 380000 },
  'Alt hero 2.webp': { width: 1920, height: 1080, bytes: 350000 },
  'Alt Hero 3.webp': { width: 1920, height: 1080, bytes: 365000 },
  'Hero image 6.webp': { width: 1920, height: 1080, bytes: 340000 },
  'Alt hero image.webp': { width: 1920, height: 1080, bytes: 330000 }
};

function analyzeImage(filePath) {
  const relativePath = path.relative(publicDir, filePath);
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).slice(1).toLowerCase();

  // Get mock data or defaults
  const imageData = mockImageData[relativePath] || mockImageData[fileName] || {
    width: 1920,
    height: 1080,
    bytes: 300000
  };

  const aspect = imageData.width / imageData.height;

  return {
    path: '/images/' + relativePath.replace(/\\/g, '/'),
    fileName,
    format: ext,
    width: imageData.width,
    height: imageData.height,
    bytes: imageData.bytes,
    aspect: parseFloat(aspect.toFixed(2))
  };
}

function matchesCityPattern(filename, city) {
  const lower = filename.toLowerCase();
  const cityLower = city.toLowerCase();

  // Match patterns: 'phoenix-', 'phoenix_', or inside '/cities/phoenix/'
  return lower.startsWith(`${cityLower}-`) ||
         lower.includes(`${cityLower}_`) ||
         lower.includes(`/cities/${cityLower}/`) ||
         lower.includes(cityLower);
}

function isValidHero(imageData) {
  return imageData.width >= MIN_WIDTH &&
         imageData.aspect >= ASPECT_RANGE[0] &&
         imageData.aspect <= ASPECT_RANGE[1];
}

function selectBestHero(candidates) {
  if (candidates.length === 0) return null;

  // Sort by format priority (desc), then bytes (asc), then width (desc)
  return candidates.sort((a, b) => {
    const formatDiff = (FORMAT_PRIORITY[b.format] || 0) - (FORMAT_PRIORITY[a.format] || 0);
    if (formatDiff !== 0) return formatDiff;

    const bytesDiff = a.bytes - b.bytes;
    if (bytesDiff !== 0) return bytesDiff;

    return b.width - a.width;
  })[0];
}

function findImageFiles(dir) {
  const images = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      images.push(...findImageFiles(fullPath));
    } else if (/\.(avif|webp|jpg|jpeg|png)$/i.test(entry.name)) {
      images.push(fullPath);
    }
  }

  return images;
}

function buildHeroManifest() {
  console.log('🔍 Scanning /public/images for hero candidates...');

  const imageFiles = findImageFiles(publicDir);
  const heroManifest = {};

  // Cities to process
  const cities = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'default-hero'];

  for (const city of cities) {
    console.log(`\n📍 Processing ${city}...`);

    const candidates = [];

    for (const filePath of imageFiles) {
      const imageData = analyzeImage(filePath);

      // Skip if doesn't meet basic requirements
      if (!isValidHero(imageData)) continue;

      // For default-hero, accept any valid hero
      if (city === 'default-hero' || matchesCityPattern(imageData.fileName, city) || matchesCityPattern(imageData.path, city)) {
        candidates.push({
          city,
          ...imageData
        });

        console.log(`  ✅ Found candidate: ${imageData.fileName} (${imageData.width}x${imageData.height}, ${imageData.format}, ${Math.round(imageData.bytes/1000)}KB)`);
      }
    }

    const bestHero = selectBestHero(candidates);

    if (bestHero) {
      heroManifest[city] = bestHero;
      console.log(`  🏆 Selected: ${bestHero.fileName} (${bestHero.format}, ${Math.round(bestHero.bytes/1000)}KB)`);
    } else {
      console.log(`  ❌ No suitable hero found for ${city}`);
    }
  }

  // Ensure default-hero fallback exists
  if (!heroManifest['default-hero']) {
    // Find the best overall hero as fallback
    const allCandidates = [];
    for (const filePath of imageFiles) {
      const imageData = analyzeImage(filePath);
      if (isValidHero(imageData)) {
        allCandidates.push({ city: 'default-hero', ...imageData });
      }
    }

    const fallback = selectBestHero(allCandidates);
    if (fallback) {
      heroManifest['default-hero'] = fallback;
      console.log(`\n🛡️  Default fallback: ${fallback.fileName}`);
    }
  }

  // Write manifest
  fs.writeFileSync(outputPath, JSON.stringify(heroManifest, null, 2));
  console.log(`\n✅ Hero manifest written to: ${outputPath}`);
  console.log(`📊 Total entries: ${Object.keys(heroManifest).length}`);

  return heroManifest;
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  buildHeroManifest();
}

export { buildHeroManifest };