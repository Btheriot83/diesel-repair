import heroManifest from "@/data/heroManifest.json";

export interface HeroPreloadData {
  href: string;
  as: 'image';
  type: string;
  imagesrcset: string;
  imagesizes: string;
}

/**
 * Generate preload data for hero image based on city
 */
export function getHeroPreload(city: string): HeroPreloadData | null {
  const citySlug = city.toLowerCase();
  const heroData = heroManifest[citySlug] || heroManifest['default-hero'];

  if (!heroData) {
    return null;
  }

  // Generate responsive srcset for preload
  const basePath = heroData.path.replace(/\.[^.]+$/, ''); // Remove extension
  const baseDir = basePath.split('/').slice(0, -1).join('/'); // Get directory

  // Prefer AVIF for preload if supported, fallback to WebP
  let imagesrcset: string;
  let type: string;

  if (heroData.format === 'avif' || heroData.path.includes('/hero-optimized/')) {
    // Use AVIF sources
    imagesrcset = [
      `${baseDir}/hero-2000w.avif 2000w`,
      `${baseDir}/hero-1600w.avif 1600w`,
      `${baseDir}/hero-1200w.avif 1200w`
    ].join(', ');
    type = 'image/avif';
  } else {
    // Use WebP sources or original
    if (heroData.path.includes('/hero-optimized/')) {
      imagesrcset = [
        `${baseDir}/hero-2000w.webp 2000w`,
        `${baseDir}/hero-1600w.webp 1600w`,
        `${baseDir}/hero-1200w.webp 1200w`
      ].join(', ');
      type = 'image/webp';
    } else {
      // Single image fallback
      imagesrcset = heroData.path;
      type = `image/${heroData.format}`;
    }
  }

  return {
    href: heroData.path, // Primary image URL for browsers that don't support imagesrcset
    as: 'image',
    type,
    imagesrcset,
    imagesizes: '(max-width: 768px) 100vw, 1200px'
  };
}

/**
 * Get hero data for a specific city
 */
export function getHeroData(city: string) {
  const citySlug = city.toLowerCase();
  return heroManifest[citySlug] || heroManifest['default-hero'];
}

/**
 * Generate preload link tag HTML
 */
export function generateHeroPreloadTag(city: string): string {
  const preloadData = getHeroPreload(city);

  if (!preloadData) {
    return '';
  }

  const attributes = [
    `rel="preload"`,
    `as="${preloadData.as}"`,
    `href="${preloadData.href}"`,
    `type="${preloadData.type}"`,
    `imagesrcset="${preloadData.imagesrcset}"`,
    `imagesizes="${preloadData.imagesizes}"`
  ];

  return `<link ${attributes.join(' ')}>`;
}