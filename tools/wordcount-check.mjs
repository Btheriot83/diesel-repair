#!/usr/bin/env node
/**
 * Wordcount Floor Validator
 *
 * Ensures each city page has sufficient content to avoid
 * thin/doorway page penalties. Checks visible text in <main>
 * and enforces minimum word count thresholds.
 */

import { JSDOM } from 'jsdom';

const CITIES = ['phoenix', 'tempe', 'mesa', 'chandler', 'glendale', 'scottsdale'];
const DEV_BASE = 'http://localhost:4321';
const MIN_WORD_COUNT = 220; // Threshold for skeleton pages

class WordcountError extends Error {
  constructor(city, wordCount, minRequired) {
    super(`${city}: ${wordCount} words < ${minRequired} minimum`);
    this.city = city;
    this.wordCount = wordCount;
    this.minRequired = minRequired;
  }
}

async function fetchPageHTML(slug) {
  try {
    const response = await fetch(`${DEV_BASE}/locations/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`Failed to fetch /locations/${slug}: ${error.message}`);
  }
}

function extractVisibleText(html) {
  const dom = new JSDOM(html);
  const main = dom.window.document.querySelector('main');

  if (!main) {
    throw new Error('No <main> element found');
  }

  // Remove script, style, and other non-content elements
  const elementsToRemove = main.querySelectorAll('script, style, noscript, .sr-only, [aria-hidden="true"]');
  elementsToRemove.forEach(el => el.remove());

  // Get text content and clean it up
  let text = main.textContent || '';

  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

function countWords(text) {
  if (!text || text.trim() === '') {
    return 0;
  }

  // Split on word boundaries and filter out empty strings
  const words = text.match(/\b\w+\b/g);
  return words ? words.length : 0;
}

function analyzeContent(text) {
  const wordCount = countWords(text);
  const charCount = text.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

  // Estimate reading time (average 200 WPM)
  const readingTimeMinutes = Math.ceil(wordCount / 200);

  // Calculate content density metrics
  const avgWordsPerSentence = sentences > 0 ? Math.round(wordCount / sentences) : 0;
  const avgCharsPerWord = wordCount > 0 ? Math.round(charCount / wordCount) : 0;

  return {
    wordCount,
    charCount,
    sentences,
    readingTimeMinutes,
    avgWordsPerSentence,
    avgCharsPerWord
  };
}

async function validateCity(city) {
  const results = {
    city,
    status: 'PASS',
    content: null,
    errors: []
  };

  try {
    console.log(`🔍 Checking ${city}...`);

    const html = await fetchPageHTML(city);
    const visibleText = extractVisibleText(html);
    const contentAnalysis = analyzeContent(visibleText);

    results.content = contentAnalysis;

    console.log(`   📝 ${contentAnalysis.wordCount} words, ${contentAnalysis.sentences} sentences`);

    if (contentAnalysis.wordCount < MIN_WORD_COUNT) {
      throw new WordcountError(city, contentAnalysis.wordCount, MIN_WORD_COUNT);
    }

    console.log(`   ✅ Meets minimum word count requirement`);

  } catch (error) {
    results.status = 'FAIL';
    if (error instanceof WordcountError) {
      results.errors.push(`Word Count: ${error.wordCount} < ${error.minRequired} minimum`);
    } else {
      results.errors.push(`System: ${error.message}`);
    }
  }

  return results;
}

async function main() {
  console.log('🔍 Wordcount Floor Validator');
  console.log('=============================');
  console.log(`Minimum requirement: ${MIN_WORD_COUNT} words per page\n`);

  const results = [];
  let hasShortfall = false;

  for (const city of CITIES) {
    const result = await validateCity(city);
    results.push(result);
    if (result.status === 'FAIL') {
      hasShortfall = true;
    }
  }

  // Print results table
  console.log('\n📊 Content Analysis Results:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('City        Status  Words   Chars   Sentences  Avg W/S  Read Time  Issues');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  results.forEach(result => {
    const cityName = result.city.padEnd(11);
    const status = result.status === 'PASS' ? '✅ PASS' : '❌ FAIL';

    if (result.status === 'PASS' && result.content) {
      const words = result.content.wordCount.toString().padEnd(6);
      const chars = result.content.charCount.toString().padEnd(6);
      const sentences = result.content.sentences.toString().padEnd(9);
      const avgWords = result.content.avgWordsPerSentence.toString().padEnd(7);
      const readTime = `${result.content.readingTimeMinutes}min`.padEnd(9);

      console.log(`${cityName} ${status}   ${words} ${chars} ${sentences} ${avgWords} ${readTime} None`);
    } else {
      const words = result.content ? result.content.wordCount.toString().padEnd(6) : 'N/A'.padEnd(6);
      console.log(`${cityName} ${status}   ${words} N/A    N/A       N/A     N/A       ${result.errors.join(', ')}`);
    }
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Summary statistics
  const passResults = results.filter(r => r.status === 'PASS' && r.content);
  if (passResults.length > 0) {
    const totalWords = passResults.reduce((sum, r) => sum + r.content.wordCount, 0);
    const avgWords = Math.round(totalWords / passResults.length);
    const minWords = Math.min(...passResults.map(r => r.content.wordCount));
    const maxWords = Math.max(...passResults.map(r => r.content.wordCount));

    console.log(`\n📈 Content Statistics:`);
    console.log(`   Total words: ${totalWords}`);
    console.log(`   Average words per page: ${avgWords}`);
    console.log(`   Range: ${minWords} - ${maxWords} words`);
  }

  const passCount = results.filter(r => r.status === 'PASS').length;
  console.log(`\n📊 Summary: ${passCount}/${CITIES.length} cities passed wordcount validation`);

  if (hasShortfall) {
    console.log('\n⚠️  Content shortfall detected! Add more substantial content.');
    console.log('💡 Content improvement tips:');
    console.log('   • Add detailed service descriptions');
    console.log('   • Include local area expertise');
    console.log('   • Expand FAQ sections');
    console.log('   • Add corridor-specific information');
    console.log('   • Include customer testimonials or case studies');
    console.log(`   • Target: ${MIN_WORD_COUNT}+ words per page for SEO strength`);
    process.exit(1);
  } else {
    console.log('\n✅ All cities passed wordcount validation!');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('💥 Wordcount Check failed:', error.message);
  process.exit(1);
});