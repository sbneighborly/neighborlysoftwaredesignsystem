/**
 * axe-audit.js
 * Runs axe-core against the local design system server and reports
 * any WCAG 2.1 AA violations. Exits with code 1 if critical or serious
 * violations are found, failing the CI build.
 *
 * Usage: node .github/scripts/axe-audit.js
 */

const { chromium } = require('playwright');
const { AxePuppeteer } = require('@axe-core/playwright');

const TARGET_URL = 'http://localhost:3000';

// Violation impact levels that will fail the build
const FAILING_IMPACTS = ['critical', 'serious'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log(`\n🔍 Running axe-core audit on ${TARGET_URL}...\n`);

  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });

  const results = await new AxePuppeteer(page)
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'])
    .analyze();

  await browser.close();

  // ── Report Passes ──────────────────────────────────────────────────────
  console.log(`✅ Passes:    ${results.passes.length}`);
  console.log(`⚠️  Incomplete: ${results.incomplete.length} (manual review needed)`);
  console.log(`ℹ️  Inapplicable: ${results.inapplicable.length}`);

  // ── Report Violations ─────────────────────────────────────────────────
  const violations = results.violations;
  const failingViolations = violations.filter(v => FAILING_IMPACTS.includes(v.impact));
  const warningViolations = violations.filter(v => !FAILING_IMPACTS.includes(v.impact));

  if (warningViolations.length > 0) {
    console.log(`\n⚠️  Warnings (${warningViolations.length}) — will not fail build:\n`);
    warningViolations.forEach(v => {
      console.log(`  [${v.impact.toUpperCase()}] ${v.id}: ${v.description}`);
      console.log(`  Help: ${v.helpUrl}`);
      console.log(`  Nodes: ${v.nodes.length}\n`);
    });
  }

  if (failingViolations.length > 0) {
    console.log(`\n❌ FAILURES (${failingViolations.length}) — build will fail:\n`);
    failingViolations.forEach(v => {
      console.log(`  [${v.impact.toUpperCase()}] ${v.id}: ${v.description}`);
      console.log(`  Help: ${v.helpUrl}`);
      v.nodes.forEach(node => {
        console.log(`  → ${node.html}`);
        console.log(`    Fix: ${node.failureSummary}`);
      });
      console.log('');
    });

    console.log(`\n💥 axe-core found ${failingViolations.length} critical/serious WCAG 2.1 AA violation(s). Fix before merging.\n`);
    process.exit(1);
  }

  console.log(`\n🎉 axe-core audit passed — no critical or serious violations found.\n`);
  process.exit(0);
})();
