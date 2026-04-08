/**
 * Introduction Story
 * Neighborly Software Design System
 *
 * This is the landing page for the Storybook component explorer.
 */

export default {
  title: 'Design System/Introduction',
  parameters: {
    docs: {
      description: {
        component: `
# Neighborly Software Design System

**Version 1.2.0 · April 2026**

The single source of truth for all design and development decisions at Neighborly Software.
Every token, component, and pattern is WCAG 2.1 AA compliant and VPAT-ready.

---

## Quick Start

### 1. Import the tokens
\`\`\`css
@import url('https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/tokens.css');
\`\`\`

### 2. Use the tokens in your CSS
\`\`\`css
.my-component {
  background: var(--nbl-surface);
  color: var(--nbl-text-primary);
  border-radius: var(--nbl-radius-lg);
  padding: var(--nbl-space-5);
  box-shadow: var(--nbl-shadow-sm);
}
\`\`\`

### 3. Dark mode is automatic
Dark mode activates automatically based on the user's OS preference.
To allow manual toggling, add \`data-theme="dark"\` to the \`<html>\` element.

---

## Accessibility

This Storybook runs **axe-core** on every story automatically.
The Accessibility tab in the addons panel shows any violations.

All components target **WCAG 2.1 Level AA** conformance.

---

## Resources

- [Full Design System Documentation](https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/)
- [GitHub Repository](https://github.com/sbneighborly/neighborlysoftwarebrandguidelines)
- [tokens.css (CDN)](https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/tokens.css)
        `,
      },
    },
  },
};

export const ColorPalette = {
  name: 'Color Palette',
  render: () => `
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Nunito', sans-serif; padding: 24px; }
      h3 { font-size: 13px; font-weight: 800; color: #7C878E; text-transform: uppercase; letter-spacing: .06em; margin: 20px 0 12px; }
      .swatch-row { display: flex; flex-wrap: wrap; gap: 10px; }
      .swatch { border-radius: 10px; overflow: hidden; border: 1px solid rgba(0,0,0,0.08); width: 100px; }
      .swatch-color { height: 56px; }
      .swatch-info { padding: 6px 8px; background: #fff; }
      .swatch-name { font-size: 11px; font-weight: 700; color: #181B1F; }
      .swatch-hex { font-size: 10px; color: #7C878E; font-family: monospace; }
    </style>
    <h3>Brand Blues</h3>
    <div class="swatch-row">
      <div class="swatch"><div class="swatch-color" style="background:#EEF6FF;"></div><div class="swatch-info"><div class="swatch-name">Blue 50</div><div class="swatch-hex">#EEF6FF</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#DBEAFE;"></div><div class="swatch-info"><div class="swatch-name">Blue 100</div><div class="swatch-hex">#DBEAFE</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#4EABFF;"></div><div class="swatch-info"><div class="swatch-name">Blue 400</div><div class="swatch-hex">#4EABFF</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#1389FD;"></div><div class="swatch-info"><div class="swatch-name">Primary</div><div class="swatch-hex">#1389FD</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#0F74DF;"></div><div class="swatch-info"><div class="swatch-name">Primary Hover</div><div class="swatch-hex">#0F74DF</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#00419D;"></div><div class="swatch-info"><div class="swatch-name">Deep Navy</div><div class="swatch-hex">#00419D</div></div></div>
    </div>
    <h3>Status Colors</h3>
    <div class="swatch-row">
      <div class="swatch"><div class="swatch-color" style="background:#10B981;"></div><div class="swatch-info"><div class="swatch-name">Success</div><div class="swatch-hex">#10B981</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#F59E0B;"></div><div class="swatch-info"><div class="swatch-name">Warning</div><div class="swatch-hex">#F59E0B</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#EF4444;"></div><div class="swatch-info"><div class="swatch-name">Error</div><div class="swatch-hex">#EF4444</div></div></div>
    </div>
    <h3>Neutrals</h3>
    <div class="swatch-row">
      <div class="swatch"><div class="swatch-color" style="background:#F5F8FE;border:1px solid #E4EAF2;"></div><div class="swatch-info"><div class="swatch-name">Gray 50</div><div class="swatch-hex">#F5F8FE</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#E4EAF2;"></div><div class="swatch-info"><div class="swatch-name">Gray 200</div><div class="swatch-hex">#E4EAF2</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#7C878E;"></div><div class="swatch-info"><div class="swatch-name">Gray 500</div><div class="swatch-hex">#7C878E</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#3D4A56;"></div><div class="swatch-info"><div class="swatch-name">Gray 700</div><div class="swatch-hex">#3D4A56</div></div></div>
      <div class="swatch"><div class="swatch-color" style="background:#181B1F;"></div><div class="swatch-info"><div class="swatch-name">Gray 900</div><div class="swatch-hex">#181B1F</div></div></div>
    </div>
  `,
};
