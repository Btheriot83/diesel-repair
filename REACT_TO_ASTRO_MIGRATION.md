# React to Astro Migration Documentation

## Phase 1: Preparation & Analysis ✅ COMPLETED

### Current React Project Analysis
**Source Location**: `react-backup/`
**Running Server**: `http://localhost:8081` (Vite + React)
**Target**: Astro conversion running on `http://localhost:4321`
**Status**: ✅ Fully functional with all assets loaded correctly

### React Project Structure Analysis ✅ DOCUMENTED
```
react-backup/
├── src/
│   ├── components/          # 18 main React components + Shadcn/ui system
│   │   ├── ui/             # 39 Shadcn/ui components (buttons, forms, etc.)
│   │   ├── Header.tsx      # Navigation with mobile menu
│   │   ├── Hero.tsx        # Hero section with background image
│   │   ├── Footer.tsx      # Company footer with links
│   │   ├── ContactForm.tsx # Lead capture form (interactive)
│   │   ├── FAQ.tsx         # Accordion FAQ (interactive)
│   │   └── [15 other components]
│   ├── config/             # Business configuration constants
│   │   └── constants.ts    # COMPANY_CONFIG with phone, business info
│   ├── hooks/              # Custom React hooks (2 files)
│   │   ├── use-mobile.tsx  # Mobile detection hook
│   │   └── use-toast.ts    # Toast notification hook
│   ├── lib/                # Utility libraries
│   │   └── utils.ts        # Tailwind class merging utilities
│   ├── pages/              # Page components
│   │   └── NotFound.tsx    # 404 error page
│   ├── utils/              # Utility functions
│   │   └── navigation.ts   # Scroll and navigation helpers
│   ├── assets/             # Local image assets (5 PNG files)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Vite entry point
│   └── index.css           # Global styles and CSS variables
├── public/                 # Static assets (created during migration)
│   ├── images/             # Service icons and images (21 files)
│   └── lovable-uploads/    # Hero background and logo (8 files)
├── package.json           # Dependencies (84 total packages)
├── tailwind.config.ts     # Tailwind configuration with diesel-orange
├── vite.config.ts         # Vite build configuration
└── tsconfig.json          # TypeScript configuration
```

### Dependencies Analysis ✅ COMPLETED
**Critical Dependencies to Preserve in Astro:**
- **React Ecosystem**: `react@18.3.1`, `react-dom@18.3.1` (for hybrid components)
- **Tailwind CSS**: `tailwindcss@3.4.17` (exact version match)
- **Tailwind Plugins**: `tailwindcss-animate@1.0.7`, `@tailwindcss/typography@0.5.16`
- **TypeScript**: `typescript@5.8.3` with strict configuration
- **Build Tools**: `vite@5.4.19`, `@vitejs/plugin-react-swc@3.11.0`

**Shadcn/ui System Dependencies (39 components):**
- **Radix UI**: 22 headless UI components for accessibility
- **Class Management**: `clsx@2.1.1`, `tailwind-merge@2.6.0`, `class-variance-authority@0.7.1`
- **Icons**: `lucide-react@0.462.0` (used throughout components)
- **Forms**: `react-hook-form@7.61.1`, `@hookform/resolvers@3.10.0`, `zod@3.25.76`

**Interactive Features (Keep React):**
- **State Management**: `@tanstack/react-query@5.83.0`
- **Routing**: `react-router-dom@6.30.1` (migrate to Astro routing)
- **Notifications**: `sonner@1.7.4` (toast notifications)
- **Charts**: `recharts@2.15.4` (if using data visualization)

### Component Classification ✅ COMPLETED
#### Static Components (Convert to .astro): 13 components
- **Header.tsx** → Header.astro (navigation, logo, mobile menu structure)
- **Footer.tsx** → Footer.astro (company info, links, contact details)
- **Hero.tsx** → Hero.astro (background image, text, basic CTAs)
- **ServicesGrid.tsx** → ServicesGrid.astro (service icons and descriptions)
- **CorridorCoverage.tsx** → CorridorCoverage.astro (highway coverage info)
- **PhoenixFleets.tsx** → PhoenixFleets.astro (company description)
- **PhoenixProblems.tsx** → PhoenixProblems.astro (common problems list)
- **HowItWorks.tsx** → HowItWorks.astro (process steps)
- **ServiceArea.tsx** → ServiceArea.astro (coverage map and cities)
- **WhyChooseUs.tsx** → WhyChooseUs.astro (value propositions)
- **FleetServices.tsx** → FleetServices.astro (fleet management info)
- **PricingNotes.tsx** → PricingNotes.astro (pricing information)
- **RecentJobs.tsx** → RecentJobs.astro (testimonials/case studies)

#### Interactive Components (Keep as React with client directives): 5 components
- **ContactForm.tsx** → ContactForm.tsx (form state, validation, submission)
- **FAQ.tsx** → FAQ.tsx (accordion expand/collapse functionality)
- **UnifiedEmergencyHub.tsx** → UnifiedEmergencyHub.tsx (emergency CTAs with interactions)
- **MobileNavigation.tsx** → MobileNavigation.tsx (mobile menu toggle state)
- **UrgencyBanner.tsx** → UrgencyBanner.tsx (if has dismiss functionality)

### Style System Analysis ✅ COMPLETED
**Global Styles Location**: `react-backup/src/index.css`
- **CSS Variables**: Complete Shadcn/ui theme system with light/dark mode support
- **Custom Properties**: Diesel-orange (#ed6623) brand colors integrated
- **Font Loading**: Inter font family from Google Fonts with specific weights
- **Base Styles**: Tailwind @layer base, components, utilities structure

**Tailwind Configuration**: `tailwind.config.ts`
- **Custom Colors**: Diesel-orange primary color (#ed6623)
- **Content Paths**: Configured for src/**/*.{js,ts,jsx,tsx} patterns
- **Plugins**: tailwindcss-animate for animations, @tailwindcss/typography for content
- **Dark Mode**: Class-based dark mode support (though primarily light theme)

**Component Styling Patterns**:
- **Utility-First**: Extensive Tailwind utility classes throughout
- **Custom Components**: Shadcn/ui styled components with variants
- **Responsive Design**: Mobile-first approach with breakpoint prefixes
- **Animations**: Hover effects, transitions, transform animations
- **Brand Consistency**: Diesel-orange color used consistently for CTAs and accents

### Asset Management Analysis ✅ COMPLETED
**Images Successfully Migrated**:
- **Hero Background**: `lovable-uploads/eff70c3b-1b53-4693-b587-bb51f7bfda85.png` (281KB)
- **Company Logo**: `lovable-uploads/89296262-e00f-4a4b-a2cf-bfbc1db441ce.png` (346KB)
- **Service Icons**: 21 professional diesel service icons in `/images/` (PNG format)
- **Additional Assets**: 8 total lovable-uploads files for various UI elements

**Asset Integration Pattern**:
- **Public Folder**: All assets accessible via `/images/` and `/lovable-uploads/` paths
- **Import Strategy**: Direct public path references (not ES6 imports)
- **Optimization**: Assets already optimized for web delivery
- **Consistency**: All images follow established naming conventions

### Critical Success Factors Identified
1. **Exact CSS Preservation**: Copy all styles verbatim
2. **Class Name Consistency**: Never modify existing class names
3. **Import Order**: Maintain exact CSS import sequence
4. **Asset Paths**: Update image imports for Astro public folder structure
5. **Interactive Preservation**: Use hybrid approach for complex components

## Phase 2: Fresh Astro Setup ✅ COMPLETED

### Astro Project Configuration
- **Fresh Astro Installation**: v5.13.9 with React integration
- **Server**: Running at `http://localhost:4321/`
- **Integrations**:
  - @astrojs/react for hybrid React components
  - @astrojs/tailwind with `applyBaseStyles: false`
- **Tailwind**: v3.4.17 (exact match with React project)

### Configuration Files Created
1. **astro.config.mjs**: React + Tailwind integrations
2. **tsconfig.json**: TypeScript configuration with strict mode
3. **tailwind.config.mjs**: Copied exactly from React project with diesel-orange colors
4. **src/layouts/Layout.astro**: Base layout component
5. **src/pages/index.astro**: Test page confirming setup

### Style System Migration ✅ COMPLETED
- **Global Styles**: Copied from `react-backup/src/index.css` to `src/styles/global.css`
- **CSS Variables**: All Shadcn/ui theme variables preserved
- **Diesel Colors**: Custom diesel-orange colors (#ed6623) working correctly
- **Font System**: Inter font family loading preserved

### Verified Working
- ✅ Astro dev server running successfully
- ✅ Tailwind CSS processing correctly
- ✅ Diesel-orange brand colors displaying properly
- ✅ React integration ready for hybrid components
- ✅ TypeScript compilation working

## Phase 3: Component Conversion Strategy

### Ready for Systematic Conversion
- **React Backup**: Complete project preserved in `react-backup/`
- **Component Target**: 20+ main components identified for conversion
- **Conversion Approach**: Static components to .astro, interactive to React islands
- **Visual Reference**: Side-by-side comparison ready (React :8080 vs Astro :4321)

### Next Critical Steps
- [ ] Convert Header.tsx → Header.astro (static navigation)
- [ ] Convert Footer.tsx → Footer.astro (static content)
- [ ] Convert Hero.tsx → Hero.astro (static presentation)
- [ ] Test visual parity for each component
- [ ] Add interactive components using client directives