# Phoenix Location Snapshot Documentation

**Tag**: `phoenix-location-snapshot-v1.0`
**Date**: September 26, 2025
**Commit**: `977793f`
**Status**: ✅ SAB-compliant, phone standardized, production ready

## Snapshot Components

### Git References
- **Tag**: `phoenix-location-snapshot-v1.0`
- **Backup Branch**: `backup/phoenix-location-snapshot-v1.0`
- **Worktree**: `../az-phoenix-location-backup-phoenix-location-snapshot-v1.0`
- **Archive**: `../phoenix-location-snapshot-v1.0.zip`

### Key Fixes Applied

**SAB Compliance ✅**
- ✅ **NO PostalAddress/streetAddress** - Removed from location template (Google SAB violation)
- ✅ **serviceArea present** - GeoCircle with areaServed arrays maintained
- ✅ **NO fake AggregateRating** - Only real review data allowed

**Phone Constants ✅**
- ✅ **UI Links**: Use `COMPANY_CONFIG.phoneLink` (renders `tel:+14803077434`)
- ✅ **Visible Text**: Use `COMPANY_CONFIG.phoneNumber` (displays `(480) 307-7434`)
- ✅ **JSON-LD Schema**: Use `PHONE_E164` (no `tel:` prefix, schema compliant)
- ✅ **Zero stray references**: All `COMPANY_CONFIG.phoneE164` eliminated

**Image Optimization ✅**
- ✅ **SEO-friendly names**: `phoenix-mobile-diesel-mechanic-hero.webp`, etc.
- ✅ **LCP preload hints**: Hero images optimized for Core Web Vitals
- ✅ **Responsive formats**: AVIF/WebP with proper fallbacks

## Rollback Commands

If rollback is needed to this exact snapshot state:

```bash
# Emergency rollback to snapshot
git checkout main
git reset --hard phoenix-location-snapshot-v1.0
git push -f origin main

# Restore from backup branch
git checkout backup/phoenix-location-snapshot-v1.0
git checkout -b restore-phoenix-snapshot
git push -u origin restore-phoenix-snapshot

# Extract from archive
unzip ../phoenix-location-snapshot-v1.0.zip -d ../restored-phoenix-snapshot
```

## Critical SAB Reminders

⚠️ **For future location pages, NEVER include**:
- `PostalAddress` with `streetAddress` fields
- `addressLocality`, `postalCode`, `streetAddress` in schema
- Fake `AggregateRating` without real reviews

✅ **Always ensure present**:
- `serviceArea` with `GeoCircle` or geographic coverage
- `areaServed` arrays with city/region coverage
- Real business contact info without precise street address

## Verification Commands

```bash
# Verify no SAB violations
grep -r "PostalAddress\|streetAddress" src/pages/locations/

# Verify phone consistency
grep -r "COMPANY_CONFIG.phoneE164" src/ || echo "✅ No stray phoneE164"

# Verify schema compliance
grep -A 5 -B 5 '"telephone"' src/pages/locations/phoenix.astro
```

## Success Criteria Met ✅

- **Phone Consistency**: UI=phoneLink/phoneNumber, Schema=PHONE_E164
- **SAB Compliance**: No PostalAddress, serviceArea present, no fake ratings
- **Image Optimization**: SEO names, LCP preload, responsive formats
- **Immutable Backup**: Tag, branch, worktree, and zip archive created
- **Documentation**: Complete rollback and verification procedures

**Status**: Production deployment ready