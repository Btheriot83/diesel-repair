# Code Style and Conventions

## File Naming Conventions
- **Astro Components**: PascalCase with `.astro` extension (e.g., `Header.astro`, `ContactForm.astro`)
- **TypeScript Files**: camelCase for utilities, PascalCase for components (e.g., `constants.ts`, `Layout.astro`)
- **Directories**: camelCase (e.g., `components`, `layouts`, `styles`)

## Component Architecture Patterns

### Astro Components (Static)
```astro
---
// TypeScript frontmatter for props and logic
import { COMPANY_CONFIG } from '../config/constants';

export interface Props {
  title?: string;
  className?: string;
}

const { title = 'Default Title', className = '' } = Astro.props;
---

<!-- HTML template with Astro syntax -->
<section class={`base-classes ${className}`}>
  <h2>{title}</h2>
  <p>{COMPANY_CONFIG.phoneNumber}</p>
</section>
```

### Business Configuration Usage
- Always import from `../config/constants.ts` for business data
- Use `COMPANY_CONFIG` object for phone numbers, service areas, company info
- Maintain consistency: `COMPANY_CONFIG.phoneNumber` = "(480) 307-7434"

## CSS/Styling Conventions

### Tailwind Usage Patterns
```css
/* Component-level classes in global.css */
@layer components {
  .btn-diesel {
    @apply bg-diesel-orange hover:bg-diesel-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors;
  }
  
  .section-hero {
    @apply bg-cover bg-center bg-no-repeat min-h-screen flex items-center;
  }
}
```

### Color System
- **Primary Brand**: `diesel-orange` (#ed6623)
- **Dark Text**: `diesel-dark` (#1d1d1d) 
- **Hover State**: `diesel-hover` (#B8501C)
- **Background**: Use Shadcn/ui CSS variables (`bg-background`, `text-foreground`)

## TypeScript Conventions
- **Strict mode enabled**: All type annotations required
- **Interface definitions**: Use `export interface Props` for component props
- **Path mapping**: Use `@/*` for src/ imports (configured in tsconfig.json)
- **React types**: `@types/react` and `@types/react-dom` for React components

## Component Organization Patterns

### Directory Structure
```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layout templates
├── pages/          # File-based routing
├── styles/         # Global CSS and theme
└── config/         # Business configuration
```

### Import Order
1. Astro/React imports
2. Component imports (local)
3. Utility/config imports
4. Type-only imports

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import { COMPANY_CONFIG } from '../config/constants';
import type { ComponentProps } from 'astro';
---
```

## Accessibility Standards
- **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
- **Alt text**: All images require descriptive alt attributes
- **Focus states**: Visible focus indicators for interactive elements
- **ARIA labels**: Use when text content is insufficient for screen readers

## Business Content Standards
- **Phone Number**: Always use `COMPANY_CONFIG.phoneNumber` = "(480) 307-7434"
- **Company Name**: "AZ Mobile Diesel Repair" (consistent across all content)
- **Service Areas**: Use `COMPANY_CONFIG.serviceAreas` array for Phoenix Metro cities
- **Brand Voice**: Professional, reliable, emergency-focused for diesel fleet market