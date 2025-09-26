#!/usr/bin/env node

import { execSync } from 'child_process';

const PROTECTED = [
  'src/pages/index.astro',
  'src/pages/locations/phoenix.astro',
  'src/content/locations/phoenix.mdx'
];

async function main() {
  try {
    // Get staged changes
    const stagedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean);

    const protectedChanges = stagedFiles.filter(file =>
      PROTECTED.some(protectedFile => file === protectedFile)
    );

    if (protectedChanges.length > 0 && process.env.ALLOW_PROTECTED !== '1') {
      console.log('\n🚨 CRITICAL FILE PROTECTION VIOLATION 🚨\n');
      console.log('The following protected files have been modified:\n');

      protectedChanges.forEach(file => {
        console.log(`  ❌ ${file}`);
      });

      console.log('\n🛡️  These files are protected to prevent accidental changes to critical\n   business pages (homepage and Phoenix location).\n');
      console.log('To override this protection:');
      console.log('  ALLOW_PROTECTED=1 git commit -m "your message"\n');
      console.log('⚠️  Only use override for intentional, approved changes!\n');

      process.exit(1);
    }

    if (protectedChanges.length > 0) {
      console.log('⚠️  Protected file changes detected but override enabled (ALLOW_PROTECTED=1)');
      protectedChanges.forEach(file => {
        console.log(`  ⚡ ${file}`);
      });
      console.log('');
    }

    console.log('✅ Protected file validation passed');

  } catch (error) {
    console.error('❌ Protection validator error:', error.message);
    process.exit(1);
  }
}

main();