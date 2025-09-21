// scripts/phone_sweep.mjs
// Find & replace hard-coded phone numbers with your configured values.
// Usage examples:
//   node scripts/phone_sweep.mjs            # dry-run using config
//   node scripts/phone_sweep.mjs --write    # apply replacements
//   node scripts/phone_sweep.mjs --e164 +16025551234 --display "(602) 555-1234" --write
//
// Notes:
// - Replaces tel:+1XXXXXXXXXX → tel:<targetE164>
// - Replaces visible formats like (480) 307-7434, 480-307-7434, 480.307.7434, 480 307 7434 → <targetDisplay>
// - Skips node_modules, dist, .git, .astro, .vercel and any dirs in config.excludeDirs
// - Only processes files with extensions from config.fileExtensions
// - Always prints a summary; in dry-run it shows planned edits without writing.

import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// Load config
const cfgPath = path.resolve(__dirname, 'phone_sweep_config.json');
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf-8'));

const argv = new Map(process.argv.slice(2).map((a, i, arr) => {
  if (a.startsWith('--')) {
    const key = a.replace(/^--/, '');
    const val = (arr[i+1] && !arr[i+1].startsWith('--')) ? arr[i+1] : true;
    return [key, val];
  }
  return [a, true];
}));

const WRITE = argv.has('write') || cfg.dryRun === false && argv.size === 0;
const TARGET_E164 = (argv.get('e164') || cfg.targetE164 || '').trim();
const TARGET_DISPLAY = (argv.get('display') || cfg.targetDisplay || '').trim();

if (!/^\+[1-9]\d{6,14}$/.test(TARGET_E164)) {
  console.error(`✖ Invalid E.164 in config/args: "${TARGET_E164}". Example: +14803077434`);
  process.exit(1);
}
if (!TARGET_DISPLAY) {
  console.error(`✖ Missing targetDisplay in config/args.`);
  process.exit(1);
}

const INCLUDE_GLOBS = cfg.includeGlobs || ['src/**', 'public/**'];
const EXCLUDE_DIRS = new Set([...(cfg.excludeDirs||[])]);
const EXT_SET = new Set((cfg.fileExtensions||[]).map(e => e.toLowerCase()));

// Simple micromatch-ish check: we walk from repo root and filter ourselves.
const REPO_ROOT = path.resolve(__dirname, '..');
function shouldSkipDir(dirName) { return EXCLUDE_DIRS.has(dirName); }

// Build regexes
// tel:+1XXXXXXXXXX (US style) or any tel:+<digits>
const reTel = /tel:\+\d{7,15}/g;

// display patterns: (480) 307-7434 | 480-307-7434 | 480.307.7434 | 480 307 7434
const reDisplay = new RegExp([
  // (XXX) XXX-XXXX
  "\\(\\d{3}\\)\\s*\\d{3}[-\\s.]\\d{4}",
  // XXX-XXX-XXXX
  "\\b\\d{3}[-\\s.]\\d{3}[-\\s.]\\d{4}\\b"
].join("|"), "g");

// Helper to list files
function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      if (shouldSkipDir(e.name)) continue;
      yield* walk(path.join(dir, e.name));
    } else {
      const ext = path.extname(e.name).toLowerCase();
      if (EXT_SET.size && !EXT_SET.has(ext)) continue;
      yield path.join(dir, e.name);
    }
  }
}

// Restrict root walk to includeGlobs by prefix (src/, public/ etc.)
// (simple filter; globs like src/** work as "startsWith('src/')")
const roots = Array.from(new Set(INCLUDE_GLOBS.map(g => g.split('/')[0])))
  .map(prefix => path.join(REPO_ROOT, prefix))
  .filter(p => fs.existsSync(p));

let totalFiles = 0;
let changedFiles = 0;
let totalTel = 0;
let totalDisp = 0;
const changes = [];

for (const base of roots) {
  for (const file of walk(base)) {
    totalFiles++;
    const text = fs.readFileSync(file, 'utf-8');
    let out = text;
    let telHits = 0;
    let dispHits = 0;

    out = out.replace(reTel, (m) => { telHits++; return `tel:${TARGET_E164}`; });
    out = out.replace(reDisplay, (m) => { dispHits++; return TARGET_DISPLAY; });

    if (telHits || dispHits) {
      if (WRITE) fs.writeFileSync(file, out, 'utf-8');
      changedFiles++;
      totalTel += telHits;
      totalDisp += dispHits;
      changes.push({ file, telHits, dispHits });
    }
  }
}

console.log(`\nPhone sweep complete (${WRITE ? 'WRITE' : 'DRY-RUN'})`);
console.log(` Scanned files: ${totalFiles}`);
console.log(` Files with changes: ${changedFiles}`);
console.log(` Replaced tel:+* → tel:${TARGET_E164}: ${totalTel}`);
console.log(` Replaced visible phones → ${TARGET_DISPLAY}: ${totalDisp}`);
if (!WRITE) console.log("\nRe-run with --write to apply changes.");
if (changes.length) {
  console.log("\nChanged files:");
  changes.slice(0, 200).forEach(c => {
    console.log(` - ${path.relative(REPO_ROOT, c.file)} (tel:${c.telHits}, txt:${c.dispHits})`);
  });
  if (changes.length > 200) console.log(` ... and ${changes.length - 200} more`);
}
