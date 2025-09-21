Phone Sweep Tool (search/replace)
================================

What this does
- Scans your repo (default: src/** and public/**) for hard-coded phone numbers.
- Replaces:
  * tel:+XXXXXXXXXXX  → tel:<targetE164>
  * (XXX) XXX-XXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX  → <targetDisplay>
- Skips node_modules, dist, .astro, .vercel, build, .git by default.

Files
- scripts/phone_sweep.mjs
- scripts/phone_sweep_config.json

Usage
1) Copy the /scripts folder into your repo root (same level as package.json).
2) Dry-run (no writes):
   node scripts/phone_sweep.mjs
3) Apply changes:
   node scripts/phone_sweep.mjs --write

Optional overrides:
- node scripts/phone_sweep.mjs --e164 +16025551234 --display "(602) 555-1234" --write

Pro tips
- Commit first; then run with --write so you can review a clean diff.
- This does not convert code to import from src/config/company.ts; it simply normalizes hard-coded values.
- For MDX/HTML, it safely updates visible text and tel: links.
