# Task Completion Workflow

## Quality Gates and Validation

### Before Marking Tasks Complete
1. **Visual Verification**: Check localhost:4321 to ensure changes appear correctly
2. **TypeScript Check**: Run `npx tsc --noEmit` to verify no type errors
3. **Business Config Consistency**: Verify phone number (480) 307-7434 appears correctly
4. **Asset Validation**: Confirm images load from `/public/images/` and `/public/lovable-uploads/`

### Development Testing Checklist
```bash
# Start development server and verify functionality
npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Test production build
npm run build
npm run preview

# Verify React components work (if using client directives)
# Check browser console for JavaScript errors
```

## Git Workflow Standards

### Branch Management
```bash
# Always check status before starting work
git status
git branch

# Create feature branch for all work
git checkout -b feature/component-name
# or
git checkout -b fix/issue-description

# Never work directly on main/master
```

### Commit Standards
```bash
# Stage specific files
git add src/components/NewComponent.astro
git add src/config/constants.ts

# Descriptive commit messages
git commit -m "Add Hero component with Phoenix Metro background

- Implements responsive hero section
- Uses COMPANY_CONFIG for phone number
- Includes emergency CTA optimization
- Mobile-first design with Tailwind utilities"

# Include context about business impact when relevant
```

## Business Validation Requirements

### Phone Number Consistency
- **Critical**: Every component must use `COMPANY_CONFIG.phoneNumber`
- **Test**: Search codebase for "(480)" to ensure no hardcoded numbers
- **Format**: Always "(480) 307-7434" - consistent parentheses and spacing

### Brand Color Verification
- **Primary**: `bg-diesel-orange` (#ed6623) for CTAs and branding
- **Hover**: `hover:bg-diesel-hover` (#B8501C) for interactive elements
- **Test**: Verify colors match React backup reference at localhost:8080

### Content Standards
- **Company Name**: "AZ Mobile Diesel Repair" (never variations)
- **Service Areas**: Use `COMPANY_CONFIG.serviceAreas` array
- **Business Hours**: 24/7 emergency, regular 6 AM - 10 PM

## Performance and SEO Checks

### Asset Optimization
```bash
# Verify image loading
curl -I http://localhost:4321/images/[image-name]
# Should return 200 OK

# Check asset sizes (public folder)
ls -lah public/images/
ls -lah public/lovable-uploads/
```

### Meta Data Validation
- **Title tags**: Include "Mobile Diesel Repair" and "Phoenix"
- **Meta descriptions**: Focus on diesel fleet and emergency services
- **Favicon**: Verify `/favicon.ico` loads correctly

## React Backup Comparison

### Visual Parity Testing
```bash
# Side-by-side comparison workflow
# Terminal 1: React backup
cd react-backup && npm run dev  # localhost:8080

# Terminal 2: Astro development  
npm run dev                     # localhost:4321

# Compare visually:
# - Color consistency (diesel-orange #ed6623)
# - Typography (Inter font family)
# - Layout spacing and responsive behavior
# - Component functionality parity
```

## Final Deployment Preparation

### Pre-Deployment Checklist
1. **Build Success**: `npm run build` completes without errors
2. **Preview Testing**: `npm run preview` serves correctly
3. **Asset Verification**: All images load in production build
4. **Business Info**: Phone, address, service areas accurate
5. **SEO Elements**: Title tags, meta descriptions, structured data

### Documentation Updates
- Update REACT_TO_ASTRO_MIGRATION.md if major changes made
- Note any new components or significant modifications
- Maintain business configuration documentation in CLAUDE.md