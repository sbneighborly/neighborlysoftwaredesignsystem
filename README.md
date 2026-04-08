# Neighborly Software Design System

![Version](https://img.shields.io/badge/version-1.2.0-blue)
![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-success)
![Status](https://img.shields.io/badge/status-production-success)

The single source of truth for all design and development decisions at Neighborly Software. Every token, component, and pattern documented here is WCAG 2.1 AA compliant and VPAT-ready.

**[View the Live Design System](https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/)**

---

## Table of Contents
1. [Installation & Usage](#installation--usage)
2. [Design Tokens](#design-tokens)
3. [Governance & Contribution](#governance--contribution)
4. [Versioning](#versioning)
5. [Accessibility (A11y)](#accessibility-a11y)

---

## Installation & Usage

The design system provides a consumable CSS file containing all design tokens (colors, typography, spacing, shadows) as CSS Custom Properties.

### Option 1: CDN (Recommended for prototypes)
Include the tokens directly in your HTML `<head>`:

```html
<link rel="stylesheet" href="https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/tokens.css">
```

### Option 2: CSS Import
Import the tokens into your main stylesheet:

```css
@import url('https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/tokens.css');

/* Use the tokens */
.my-card {
  background-color: var(--nbl-surface);
  border-radius: var(--nbl-radius-lg);
  box-shadow: var(--nbl-shadow-sm);
  padding: var(--nbl-space-5);
}
```

---

## Design Tokens

Tokens are the foundational variables of the design system. They automatically handle dark mode switching when the user's OS is set to dark mode.

### Naming Convention
All tokens use the `--nbl-` prefix to prevent collisions with other libraries.

* **Colors:** `--nbl-color-primary`, `--nbl-success`, `--nbl-text-muted`
* **Spacing:** `--nbl-space-1` (4px) through `--nbl-space-18` (72px)
* **Typography:** `--nbl-text-base` (13px), `--nbl-font-bold` (700)
* **Radii:** `--nbl-radius-md` (8px)

[View the full token list in the documentation](https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/#tokens).

---

## Governance & Contribution

A design system without governance is a design system that drifts. We encourage contributions from all teams, but they must follow the established workflow to protect consistency and accessibility.

### Contribution Workflow

1. **Propose:** Open a GitHub Issue using the Component Request or Bug Report template.
2. **Design Review:** The Design Lead reviews the request for brand fit, accessibility, and duplication.
3. **Build:** The component is built in HTML/CSS with WCAG 2.1 AA compliance verified.
4. **PR Review:** The Pull Request must be reviewed by 1 Designer and 1 Engineer before merging.
5. **Ship:** Merged to `main`, version bumped, and changelog updated.

*Note: Do not submit Pull Requests with new components without an approved Issue first.*

---

## Versioning

This repository follows Semantic Versioning (SemVer).

| Version Type | When to use | Example |
|---|---|---|
| **Patch** (x.x.1) | Bug fixes, copy corrections, minor style tweaks that don't change API | v1.2.1 |
| **Minor** (x.1.0) | New components, new sections, non-breaking additions | v1.3.0 |
| **Major** (2.0.0) | Breaking changes to tokens, component renames, or structural overhaul | v2.0.0 |

---

## Accessibility (A11y)

Neighborly Software targets **WCAG 2.1 Level AA** conformance across all digital products. 

When consuming this design system, you are responsible for maintaining accessibility in your implementation:
* **Forms:** Always connect `<label>` to `<input>` via `for`/`id`. Never use placeholders as labels.
* **Icons:** Use `aria-hidden="true"` for decorative icons. Functional icon-only buttons must have an `aria-label`.
* **Motion:** All animations must respect the `prefers-reduced-motion` media query (handled automatically by the token CSS).
* **Focus:** Never remove the focus outline (`outline: none`) without providing a highly visible custom focus state (`var(--nbl-shadow-focus)`).

[Read the full Accessibility Specifications](https://sbneighborly.github.io/neighborlysoftwarebrandguidelines/#a11y).
