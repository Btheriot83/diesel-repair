# Project Structure Details

## Root Directory Layout
```
/Users/brandontheriot/projects/Diesel Repair/
├── .astro/                    # Astro build cache and generated files
├── .serena/                   # Serena MCP project configuration and memories
├── public/                    # Static assets served directly
├── react-backup/              # Complete React project preserved for reference
├── src/                       # Astro source code
├── astro.config.mjs          # Astro configuration with React + Tailwind
├── package.json              # Dependencies and scripts
├── tailwind.config.mjs       # Tailwind CSS configuration with diesel colors
├── tsconfig.json             # TypeScript configuration
├── CLAUDE.md                 # Project instructions and business context
├── REACT_TO_ASTRO_MIGRATION.md # Migration documentation
└── README.md                 # Basic Astro setup documentation
```

## Source Directory (`src/`)
```
src/
├── components/               # Astro components (13 main components)
│   ├── Header.astro         # Navigation with logo and mobile menu
│   ├── Hero.astro           # Hero section with Phoenix background
│   ├── Footer.astro         # Company footer with contact info
│   ├── ContactForm.astro    # Lead capture form
│   ├── FAQ.astro            # Accordion FAQ section
│   ├── ServicesGrid.astro   # 10 diesel services with icons
│   ├── PhoenixFleets.astro  # Company description and fleet expertise
│   ├── CorridorCoverage.astro # I-10/I-17/Loop highway coverage
│   ├── PhoenixProblems.astro # Common Phoenix diesel issues
│   ├── HowItWorks.astro     # 3-step service process
│   ├── UnifiedEmergencyHub.astro # Emergency CTA section
│   ├── WhyChooseUs.astro    # Value propositions
│   ├── FleetServices.astro  # Fleet management services
│   └── ServiceArea.astro    # Coverage map and cities
├── layouts/
│   └── Layout.astro         # Base HTML layout template
├── pages/
│   └── index.astro          # Homepage (main entry point)
├── styles/
│   ├── global.css           # Global styles + Shadcn/ui theme variables
│   └── App.css              # Additional component styles
└── config/
    └── constants.ts         # Business configuration (COMPANY_CONFIG)
```

## React Backup Structure (`react-backup/`)
```
react-backup/               # Original React implementation preserved
├── src/
│   ├── components/         # 18 main React components
│   │   ├── ui/            # 39 Shadcn/ui components (buttons, forms, etc.)
│   │   ├── Header.tsx     # React version (reference for Astro conversion)
│   │   ├── Hero.tsx       # React version with state management
│   │   └── [15 other main components]
│   ├── config/
│   │   └── constants.ts   # Same business config as Astro version
│   ├── hooks/             # React-specific hooks (2 files)
│   ├── lib/               # Utility libraries
│   ├── utils/             # Navigation and scroll helpers
│   └── assets/            # Local image assets (5 PNG files)
├── public/                # Static assets (identical to main public/)
└── [standard React/Vite project files]
```

## Public Assets (`public/`)
```
public/
├── images/                     # Professional diesel service icons (21 files)
│   ├── Engine Diagnostics.png
│   ├── Emergency Roadside Assistance.png
│   ├── Brakes-removebg-preview.png
│   ├── AC Cooling icon.png
│   └── [17 other service icons]
├── lovable-uploads/            # Hero backgrounds and logos (8 files)
│   ├── eff70c3b-1b53-4693-b587-bb51f7bfda85.png  # Hero background (281KB)
│   ├── 89296262-e00f-4a4b-a2cf-bfbc1db441ce.png  # Company logo (346KB)
│   └── [6 other brand assets]
├── favicon.ico
├── robots.txt
└── placeholder.svg
```

## Configuration Files

### Business Configuration (`src/config/constants.ts`)
- **COMPANY_CONFIG**: Centralized business data
- **Phone**: (480) 307-7434
- **Service Areas**: 21 Phoenix Metro cities
- **Major Corridors**: I-10, I-17, Loop 101/202/303

### Astro Configuration (`astro.config.mjs`)
- **React Integration**: @astrojs/react for hybrid components
- **Tailwind**: @astrojs/tailwind with `applyBaseStyles: false`
- **Server**: Port 4321 with network host access

### Tailwind Configuration (`tailwind.config.mjs`)
- **Custom Colors**: diesel-orange (#ed6623), diesel-dark, diesel-hover
- **Content Paths**: Astro file extensions included
- **Plugins**: tailwindcss-animate for UI animations

## Component Relationship Map

### Homepage Flow (`src/pages/index.astro`)
1. **Layout.astro** → **Header.astro** (logo, navigation)
2. **Hero.astro** (Phoenix background, emergency CTAs)
3. **PhoenixFleets.astro** (company credibility)
4. **ServicesGrid.astro** (10 diesel services)
5. **CorridorCoverage.astro** (highway coverage)
6. **PhoenixProblems.astro** (local expertise)
7. **HowItWorks.astro** (3-step process)
8. **UnifiedEmergencyHub.astro** (emergency emphasis)
9. **WhyChooseUs.astro** (value propositions)
10. **FleetServices.astro** (B2B focus)
11. **ServiceArea.astro** (coverage map)
12. **ContactForm.astro** (lead capture)
13. **FAQ.astro** (common questions)
14. **Footer.astro** (contact info, links)

## Development Server Architecture
- **Primary Development**: localhost:4321 (Astro)
- **Visual Reference**: localhost:8080 (React backup)
- **Build Output**: ./dist/ directory
- **Asset Serving**: /images/ and /lovable-uploads/ public paths