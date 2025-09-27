#!/usr/bin/env node

/* Simple Phoenix smoke test:
   - Starts astro dev if it isn't already responding
   - GET /locations/phoenix
   - Assert:
     • One H1 mentions Phoenix
     • Visible phone text shows (480) 307-7434
     • tel: uses +14803077434
     • Canonical href points to /locations/phoenix
     • A hero <img> with width/height attributes exists
*/
import { spawn } from 'child_process';
import http from 'http';

const HOST = '127.0.0.1';
const PORT = 4321;
const PATH = '/locations/phoenix';

function get(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    });
    req.on('error', reject);
  });
}

async function ensureDev() {
  // Try once
  try {
    const r = await get(`http://${HOST}:${PORT}/`);
    if (r.status === 200) return null;
  } catch {}
  // Start dev
  const p = spawn('npm', ['run', 'dev', '--silent'], { stdio: 'ignore', detached: true });
  // Wait up to ~6s
  const start = Date.now();
  while (Date.now() - start < 6000) {
    try {
      const r = await get(`http://${HOST}:${PORT}/`);
      if (r.status === 200) return p;
    } catch {}
    await new Promise(r => setTimeout(r, 300));
  }
  throw new Error('Dev server did not start on :4321');
}

function fail(msg) { console.error('❌', msg); process.exit(1); }
function pass(msg) { console.log('✅', msg); }

(async () => {
  console.log('🔍 Phoenix Page Verification Starting...');

  const dev = await ensureDev();
  console.log('📡 Dev server ready on :4321');

  const { status, data } = await get(`http://${HOST}:${PORT}${PATH}`);
  if (status !== 200) fail(`GET ${PATH} -> ${status}`);
  console.log('🌐 Phoenix page fetched successfully');

  // Checks
  if (!/<h1[^>]*>[^<]*Phoenix/i.test(data)) fail('H1 missing Phoenix');
  pass('H1 shows Phoenix');

  if (!/\(480\)\s*307-7434/.test(data)) fail('Display phone missing');
  pass('Display phone present');

  if (!/href=["']tel:\+14803077434["']/.test(data)) fail('E.164 tel link missing');
  pass('E.164 tel link present');

  if (!/<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']*\/locations\/phoenix["']/.test(data)) fail('Canonical missing or wrong');
  pass('Canonical OK');

  if (!/<img[^>]+width=["']\d+["'][^>]+height=["']\d+["'][^>]*>/.test(data)) fail('Hero image width/height not found');
  pass('Hero image has width/height');

  console.log('🎉 verify:phoenix passed');
  // leave dev running; CI will kill process after step
  process.exit(0);
})().catch(e => fail(e.message));