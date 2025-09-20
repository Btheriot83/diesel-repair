# Tech Stack and Dependencies

## Core Framework
- **Astro**: v5.13.9 - Static site generator with island architecture
- **React**: v19.1.1 - For interactive components with client directives
- **TypeScript**: v5.9.2 - Strict type checking enabled
- **Node.js**: Version managed via `.nvmrc` file

## CSS and Styling
- **Tailwind CSS**: v3.4.17 - Utility-first CSS framework
- **Tailwind Animate**: v1.0.7 - Animation utilities
- **Custom CSS Variables**: Shadcn/ui theme system in `/src/styles/global.css`
- **Google Fonts**: Inter font family loaded globally

## Build and Development
- **Package Manager**: npm (package-lock.json present)
- **Module Type**: ES modules (`"type": "module"` in package.json)
- **TypeScript Config**: Extends `astro/tsconfigs/strict` with React JSX support

## Integrations
- **@astrojs/react**: v4.3.1 - React components in Astro
- **@astrojs/tailwind**: v6.0.2 - Tailwind CSS integration (`applyBaseStyles: false`)

## Project Structure
```
src/
├── components/          # Astro components (converted from React)
├── layouts/            # Base layout templates
├── pages/              # File-based routing
├── styles/             # Global CSS and theme variables
└── config/             # Business configuration constants

react-backup/           # Original React implementation preserved
├── src/components/     # 18 main components + 39 Shadcn/ui components
└── [React project structure preserved for reference]

public/                 # Static assets
├── images/             # Service icons and professional imagery
└── lovable-uploads/    # Hero backgrounds and logo assets
```

## Environment Configuration
- **Development Server**: Port 4321 (Astro) + host: true for network access
- **React Backup**: Available at port 8080 for visual reference
- **TypeScript**: Strict mode with path mapping (`@/*` → `./src/*`)

## Key Dependencies for Business Logic
- Business constants in `/src/config/constants.ts` - centralized configuration
- Asset management via `/public/` folder for optimal Astro serving
- Preserved Shadcn/ui system from React for consistent component styling