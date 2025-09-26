# SEO Audit - Critical Production Fixes Required

## Summary
SEO Technical Audit completed September 26, 2025. Overall score: 85/100. Need to fix these issues before production deployment to achieve 95-98/100 score.

## Critical Production Issues (Must Fix Before Launch)

### 1. Development Meta Tags (-4 points)
**Issue:** `noindex,nofollow` robots meta tags present in both homepage and location pages
**Impact:** Search engines completely blocked - site won't be indexed
**Location:** BaseLayout.astro or similar meta tag component
**Fix:** Remove or conditionally exclude `<meta name="robots" content="noindex,nofollow">` for production

### 2. Broken OpenGraph URLs (-3 points)  
**Issue:** `undefined/images/` URLs in OpenGraph meta tags
**Example:** `<meta property="og:image" content="undefined/images/phoenix-optimized/phoenix-1600w.avif">`
**Impact:** Broken social media sharing previews (Facebook, Twitter, LinkedIn)
**Fix:** Resolve image URL generation to use proper domain/path

### 3. Localhost Canonical URLs (-3 points)
**Issue:** Canonical tags pointing to `localhost:4321`
**Example:** `<link rel="canonical" href="http://localhost:4321/locations/phoenix">`
**Impact:** SEO canonicalization confusion, duplicate content risk
**Fix:** Update to production domain `https://azmobiledieselrepair.com`

## Performance/Coverage Issues (Lower Priority)

### 4. Limited Sitemap Coverage (-3 points)
**Issue:** Only 4 URLs in sitemap vs expected 40+ pages
**Current:** Homepage, emergency-roadside-assistance, phoenix, i-10
**Missing:** Other location pages, service pages, corridor pages
**Fix:** Expand sitemap generation to include all content collection pages

### 5. Missing Analytics (-2 points)
**Issue:** No GA4 implementation detected
**Impact:** Can't measure performance or user behavior
**Fix:** Implement Google Analytics 4 tracking

## What's Excellent (Keep These)
- ✅ SAB-compliant LocalBusiness schema
- ✅ Mobile-first responsive design (44px touch targets)
- ✅ Optimized font loading (preconnect + preload)
- ✅ Modern image formats (WebP/AVIF with fallbacks)
- ✅ Proper semantic HTML structure
- ✅ LLMS.txt for AI crawler guidance
- ✅ Critical CSS inlined for performance
- ✅ Phoenix Metro local SEO optimization

## Quick Wins for Production
1. Environment-based robots meta tag (remove for production)
2. Fix image URL generation in OpenGraph tags
3. Production canonical URLs
4. Expand sitemap to all pages
5. Add GA4 tracking code

## Post-Production Score Estimate
After fixes: **95-98/100** - would be an excellently optimized local SEO site.