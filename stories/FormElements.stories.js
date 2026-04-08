/**
 * Form Element Stories
 * Neighborly Software Design System
 */

export default {
  title: 'Components/Form Elements',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Form elements are the core of Neighborly's application experience. Every input must have a visible, persistent label — never use placeholder text as a substitute for a label (WCAG 1.3.1, 2.4.6).

**Key rules:**
- Always connect \`<label>\` to \`<input>\` via matching \`for\`/\`id\` attributes.
- Required fields use \`aria-required="true"\` and a visual asterisk (\`*\`).
- Error states use \`role="alert"\` on the error message so screen readers announce it immediately.
- Use \`autocomplete\` attributes on all personal data fields (WCAG 1.3.5).
      `,
      },
    },
  },
};

const styles = `
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; padding: 24px; max-width: 480px; }
    .form-group { margin-bottom: 16px; }
    .form-label { display: block; font-size: 13px; font-weight: 700; color: #3D4A56; margin-bottom: 6px; }
    .form-label .required { color: #EF4444; margin-left: 2px; }
    .form-input { width: 100%; padding: 10px 14px; border: 1.5px solid #D1D9E0; border-radius: 12px; font-family: inherit; font-size: 14px; color: #181B1F; background: #fff; transition: border-color 0.15s, box-shadow 0.15s; outline: none; }
    .form-input:focus { border-color: #1389FD; box-shadow: 0 0 0 3px rgba(19,137,253,0.15); }
    .form-input::placeholder { color: #9AA4AD; }
    .form-input.error { border-color: #EF4444; }
    .form-input.success { border-color: #10B981; }
    .form-hint { font-size: 12px; color: #7C878E; margin-top: 4px; }
    .form-error { font-size: 12px; color: #EF4444; margin-top: 4px; display: flex; align-items: center; gap: 4px; }
    select.form-input { cursor: pointer; }
    textarea.form-input { resize: vertical; min-height: 100px; }
  </style>
`;

export const TextInput = {
  render: () => `
    ${styles}
    <div class="form-group">
      <label class="form-label" for="first-name">First Name <span class="required" aria-hidden="true">*</span></label>
      <input class="form-input" type="text" id="first-name" name="first-name" placeholder="e.g. Jane" autocomplete="given-name" aria-required="true" />
      <p class="form-hint">Enter your legal first name as it appears on your ID.</p>
    </div>
  `,
};

export const WithError = {
  render: () => `
    ${styles}
    <div class="form-group">
      <label class="form-label" for="email-error">Email Address <span class="required" aria-hidden="true">*</span></label>
      <input class="form-input error" type="email" id="email-error" name="email" value="not-an-email" autocomplete="email" aria-required="true" aria-describedby="email-error-msg" aria-invalid="true" />
      <p class="form-error" id="email-error-msg" role="alert">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Please enter a valid email address.
      </p>
    </div>
  `,
};

export const WithSuccess = {
  render: () => `
    ${styles}
    <div class="form-group">
      <label class="form-label" for="zip-success">ZIP Code <span class="required" aria-hidden="true">*</span></label>
      <input class="form-input success" type="text" id="zip-success" name="zip" value="90210" autocomplete="postal-code" aria-required="true" />
      <p class="form-hint" style="color:#065F46;">✓ ZIP code verified — Los Angeles County</p>
    </div>
  `,
};

export const SelectDropdown = {
  render: () => `
    ${styles}
    <div class="form-group">
      <label class="form-label" for="household-size">Household Size <span class="required" aria-hidden="true">*</span></label>
      <select class="form-input" id="household-size" name="household-size" aria-required="true">
        <option value="" disabled selected>Select number of people</option>
        <option value="1">1 person</option>
        <option value="2">2 people</option>
        <option value="3">3 people</option>
        <option value="4">4 people</option>
        <option value="5">5+ people</option>
      </select>
    </div>
  `,
};

export const Textarea = {
  render: () => `
    ${styles}
    <div class="form-group">
      <label class="form-label" for="situation">Describe Your Situation</label>
      <textarea class="form-input" id="situation" name="situation" placeholder="Tell us briefly about your current housing situation…" rows="4"></textarea>
      <p class="form-hint">Optional — this helps caseworkers prioritize your application.</p>
    </div>
  `,
};

export const FullForm = {
  render: () => `
    ${styles}
    <form novalidate>
      <div class="form-group">
        <label class="form-label" for="full-name">Full Name <span class="required" aria-hidden="true">*</span></label>
        <input class="form-input" type="text" id="full-name" name="full-name" placeholder="e.g. Jane Smith" autocomplete="name" aria-required="true" />
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email Address <span class="required" aria-hidden="true">*</span></label>
        <input class="form-input" type="email" id="email" name="email" placeholder="you@example.com" autocomplete="email" aria-required="true" />
      </div>
      <div class="form-group">
        <label class="form-label" for="zip">ZIP Code <span class="required" aria-hidden="true">*</span></label>
        <input class="form-input" type="text" id="zip" name="zip" placeholder="e.g. 90210" autocomplete="postal-code" aria-required="true" maxlength="5" />
      </div>
      <div class="form-group">
        <label class="form-label" for="household">Household Size <span class="required" aria-hidden="true">*</span></label>
        <select class="form-input" id="household" name="household" aria-required="true">
          <option value="" disabled selected>Select number of people</option>
          <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
        </select>
      </div>
    </form>
  `,
  parameters: { docs: { description: { story: 'A complete form with all field types, labels, and autocomplete attributes.' } } },
};
