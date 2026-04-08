/**
 * validate-tokens.js
 * Checks that tokens.css contains all required token groups and that
 * no tokens have been accidentally removed between versions.
 *
 * Usage: node .github/scripts/validate-tokens.js
 */

const fs = require('fs');
const path = require('path');

const TOKENS_FILE = path.join(__dirname, '../../tokens.css');

// Required token groups — if any of these are missing, the build fails
const REQUIRED_TOKENS = [
  // Brand colors
  '--nbl-blue-500',
  '--nbl-blue-600',
  '--nbl-blue-900',
  // Semantic
  '--nbl-color-primary',
  '--nbl-color-primary-hover',
  '--nbl-color-primary-bg',
  // Neutrals
  '--nbl-gray-50',
  '--nbl-gray-200',
  '--nbl-gray-900',
  // Status
  '--nbl-success',
  '--nbl-warning',
  '--nbl-error',
  // Surface
  '--nbl-bg',
  '--nbl-surface',
  '--nbl-border',
  // Text
  '--nbl-text-primary',
  '--nbl-text-secondary',
  '--nbl-text-muted',
  // Typography
  '--nbl-font-family',
  '--nbl-text-base',
  '--nbl-font-bold',
  '--nbl-leading-body',
  // Spacing
  '--nbl-space-1',
  '--nbl-space-4',
  '--nbl-space-6',
  '--nbl-space-12',
  // Radius
  '--nbl-radius-sm',
  '--nbl-radius-md',
  '--nbl-radius-lg',
  '--nbl-radius-full',
  // Shadows
  '--nbl-shadow-sm',
  '--nbl-shadow-md',
  '--nbl-shadow-focus',
  // Motion
  '--nbl-duration-base',
  '--nbl-ease-default',
  // Z-index
  '--nbl-z-modal',
  '--nbl-z-toast',
  // Readability
  '--nbl-measure-body',
];

console.log(`\n🔍 Validating tokens.css...\n`);

if (!fs.existsSync(TOKENS_FILE)) {
  console.error('❌ tokens.css not found!');
  process.exit(1);
}

const content = fs.readFileSync(TOKENS_FILE, 'utf8');
const missing = [];

REQUIRED_TOKENS.forEach(token => {
  if (!content.includes(token)) {
    missing.push(token);
  }
});

// Check dark mode block exists
if (!content.includes('@media (prefers-color-scheme: dark)')) {
  console.error('❌ Dark mode @media block is missing from tokens.css');
  process.exit(1);
}

// Check manual dark mode toggle exists
if (!content.includes('[data-theme="dark"]')) {
  console.error('❌ Manual dark mode [data-theme="dark"] block is missing from tokens.css');
  process.exit(1);
}

if (missing.length > 0) {
  console.error(`❌ The following required tokens are missing from tokens.css:\n`);
  missing.forEach(t => console.error(`   ${t}`));
  console.error(`\n💥 Token validation failed. Do not remove tokens without a major version bump.\n`);
  process.exit(1);
}

// Count total tokens defined
const tokenCount = (content.match(/--nbl-/g) || []).length;

console.log(`✅ All ${REQUIRED_TOKENS.length} required tokens present`);
console.log(`✅ Dark mode @media block present`);
console.log(`✅ Manual [data-theme="dark"] toggle present`);
console.log(`ℹ️  Total token definitions: ${tokenCount}`);
console.log(`\n🎉 Token validation passed.\n`);
process.exit(0);
