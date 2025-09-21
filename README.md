# AZ Mobile Diesel Repair - Technical Implementation

## Project Overview
Mobile diesel repair service website built with Astro, optimized for Core Web Vitals and SEO performance across Phoenix Metro area.

## Core Web Vitals Implementation

### Performance Optimizations
- **LCP Optimization**: 3-layer approach with AspectImage, HeroLCP, and SeoHints preload
- **CLS Prevention**: Explicit image dimensions and CSS aspect-ratio preservation
- **INP Monitoring**: Updated to 2025 Core Web Vitals standards (FID deprecated March 2024)

### Components
- `src/components/AspectImage.astro` - CLS prevention with space reservation
- `src/components/HeroLCP.astro` - LCP-optimized hero images with `fetchpriority="high"`
- `src/components/SeoHints.astro` - Early resource discovery via `<link rel="preload">`

## Preview Protection & Security

### Basic Auth Middleware
Non-production environments are protected with HTTP Basic Auth and search engine blocking.

**Location**: `src/middleware.ts`

**Features**:
- HTTP Basic Auth for preview/development deployments
- `X-Robots-Tag: noindex, nofollow, noarchive` headers
- `<meta name="robots">` tag injection for HTML responses
- Production bypass when `VERCEL_ENV === 'production'`

### Environment Variables Setup

**Required for Vercel Preview & Development:**
```bash
PREVIEW_AUTH_USER=your_secure_username
PREVIEW_AUTH_PASS=your_strong_password
```

**Optional for Local Development:**
```bash
PREVIEW_AUTH_DISABLE=1
```

### Setup Instructions
1. Go to Vercel → Project → Settings → Environment Variables
2. Add `PREVIEW_AUTH_USER` and `PREVIEW_AUTH_PASS` for:
   - ☑️ Preview environments
   - ☑️ Development environments
   - ❌ Production (not needed - middleware bypassed)

## Lighthouse CI Monitoring

### Workflow Setup
**Location**: `.github/workflows/lighthouse.yml`

**Monitors**:
- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)
- INP (Interaction to Next Paint)

**Target Pages**:
- Homepage (`/`)
- Phoenix location page (`/locations/phoenix`)
- Emergency service page (`/services/emergency-roadside-assistance`)

### Vercel Integration
**Required Environment Variable:**
```bash
VERCEL_PREVIEW_BASE=https://your-preview-url.vercel.app
```

Set in Vercel → Project → Settings → Environment Variables → Development

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run Lighthouse locally
lighthouse http://localhost:4321 --only-categories=performance

# Test middleware protection
curl -I http://localhost:4321/  # Should return 401
curl -I http://localhost:4321/ -u "username:password"  # With auth
```

## Performance Metrics Baseline

### Before Optimizations
- **LCP**: 3.4s
- **CLS**: 0.217
- **Performance Score**: Variable

### After Optimizations
- **LCP**: Expected 500-1000ms improvement
- **CLS**: 0 (perfect score)
- **Performance Score**: Enhanced

## Architecture

### Tech Stack
- **Framework**: Astro 5.13.9
- **Deployment**: Vercel with SSR
- **Content**: MDX collections for cities, services, corridors
- **Styling**: Tailwind CSS with custom components

### Content Structure
- 21 Phoenix Metro cities
- 10 core diesel services
- I-10/I-17/Loop corridor coverage
- Structured schema markup (LocalBusiness + Service)

## Security Features

- Basic Auth protection for non-production
- Search engine blocking via robots headers
- Environment-based access control
- No secrets in repository

## Monitoring & Analytics

- Lighthouse CI for Core Web Vitals tracking
- Performance monitoring on preview deployments
- Automated regression detection
- Visual regression prevention with CLS optimization

---

**Business Contact**: (480) 307-7434
**Service Area**: Phoenix Metro (25+ cities)
**Last Updated**: September 21, 2025
