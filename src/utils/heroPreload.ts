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
  let imagesrcset: string;
  let type: string;

  if (heroData.path.includes('/cities/')) {
    // Use our new cities hero images
    const baseName = heroData.path.replace('/images/cities/', '').replace('-hero-1600.avif', '');
    const baseDir = '/images/cities';

    imagesrcset = [
      `${baseDir}/${baseName}-hero-2000.avif 2000w`,
      `${baseDir}/${baseName}-hero-1600.avif 1600w`,
      `${baseDir}/${baseName}-hero-1200.avif 1200w`
    ].join(', ');
    type = 'image/avif';
  } else if (heroData.format === 'avif' || heroData.path.includes('/hero-optimized/')) {
    // Use legacy AVIF sources
    const basePath = heroData.path.replace(/\.[^.]+$/, ''); // Remove extension
    const baseDir = basePath.split('/').slice(0, -1).join('/'); // Get directory

    imagesrcset = [
      `${baseDir}/hero-2000w.avif 2000w`,
      `${baseDir}/hero-1600w.avif 1600w`,
      `${baseDir}/hero-1200w.avif 1200w`
    ].join(', ');
    type = 'image/avif';
  } else {
    // Single image fallback
    imagesrcset = heroData.path;
    type = `image/${heroData.format}`;
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