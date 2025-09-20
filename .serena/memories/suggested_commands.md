# Essential Development Commands

## Core Development Workflow
```bash
# Start Astro development server (primary)
npm run dev
# Runs on http://localhost:4321

# Build production site
npm run build
# Outputs to ./dist/ directory

# Preview production build
npm run preview
# Test production build locally

# Install dependencies
npm install
# Uses package-lock.json for consistent installs
```

## React Backup Reference
```bash
# Navigate to React backup for visual reference
cd react-backup/
npm run dev
# Runs on http://localhost:8080 for side-by-side comparison
```

## Astro CLI Commands
```bash
# General Astro help
npm run astro -- --help

# Add integrations
npm run astro add react
npm run astro add tailwind

# Type checking
npm run astro check

# Generate types
npm run astro sync
```

## Development Patterns
```bash
# Check TypeScript compilation
npx tsc --noEmit

# View project structure
tree -I 'node_modules|dist|.astro'

# Monitor file changes during development
npm run dev -- --host 0.0.0.0
# Enables network access for testing on devices
```

## Project Management
```bash
# Check git status (feature branch workflow)
git status
git branch

# Create feature branch for new work
git checkout -b feature/your-feature-name

# Commit with descriptive messages
git add .
git commit -m "Add [specific feature]: [brief description]"
```

## Asset Management
```bash
# Verify asset availability
ls public/images/          # Service icons
ls public/lovable-uploads/ # Hero backgrounds and logos

# Check component structure
ls src/components/         # Astro components
ls react-backup/src/components/ # Original React reference
```

## Business Configuration
```bash
# Edit centralized business config
code src/config/constants.ts
# Contains phone number, service areas, business info

# Verify Tailwind custom colors
grep -n "diesel" tailwind.config.mjs
# Check brand color definitions
```