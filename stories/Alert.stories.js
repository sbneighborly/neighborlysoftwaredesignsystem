/**
 * Alert Stories
 * Neighborly Software Design System
 */

export default {
  title: 'Components/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Alerts communicate important messages to users. They always use both color and an icon to convey meaning — never color alone (WCAG 1.4.1).

**ARIA usage:**
- Use \`role="alert"\` for urgent messages that should be announced immediately by screen readers.
- Use \`role="status"\` for non-urgent informational messages.
- Dismissible alerts should move focus to the next logical element when dismissed.
      `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    title: { control: 'text' },
    message: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
};

const styles = `
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; padding: 24px; max-width: 560px; }
    .alert { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; border-radius: 12px; border: 1px solid transparent; margin-bottom: 12px; }
    .alert-info { background: #EEF6FF; border-color: #BFDBFE; color: #1E40AF; }
    .alert-success { background: #ECFDF5; border-color: #A7F3D0; color: #065F46; }
    .alert-warning { background: #FFFBEB; border-color: #FDE68A; color: #92400E; }
    .alert-error { background: #FEF2F2; border-color: #FECACA; color: #991B1B; }
    .alert-icon { width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px; }
    .alert-body { flex: 1; }
    .alert-title { font-size: 13px; font-weight: 800; margin-bottom: 2px; }
    .alert-msg { font-size: 13px; line-height: 1.5; }
    .alert-dismiss { background: none; border: none; cursor: pointer; opacity: 0.6; font-size: 16px; padding: 0; line-height: 1; flex-shrink: 0; font-family: inherit; }
    .alert-dismiss:hover { opacity: 1; }
  </style>
`;

const icons = {
  info: `<svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  success: `<svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="20 6 9 17 4 12"/></svg>`,
  warning: `<svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  error: `<svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
};

export const Info = {
  args: { variant: 'info', title: 'Application Period Open', message: 'The CDBG-DR application window closes on May 31, 2026. Submit early to allow time for document review.' },
  render: ({ variant, title, message }) => `
    ${styles}
    <div class="alert alert-${variant}" role="status">
      ${icons[variant]}
      <div class="alert-body">
        <p class="alert-title">${title}</p>
        <p class="alert-msg">${message}</p>
      </div>
    </div>
  `,
};

export const Success = {
  args: { variant: 'success', title: 'Application Submitted', message: "You're all set! A caseworker will be in touch within 5–7 business days." },
  render: ({ variant, title, message }) => `
    ${styles}
    <div class="alert alert-${variant}" role="status">
      ${icons[variant]}
      <div class="alert-body">
        <p class="alert-title">${title}</p>
        <p class="alert-msg">${message}</p>
      </div>
    </div>
  `,
};

export const Warning = {
  args: { variant: 'warning', title: 'Documents Needed', message: 'Your income verification is missing. Please upload a pay stub or bank statement to continue.' },
  render: ({ variant, title, message }) => `
    ${styles}
    <div class="alert alert-${variant}" role="alert">
      ${icons[variant]}
      <div class="alert-body">
        <p class="alert-title">${title}</p>
        <p class="alert-msg">${message}</p>
      </div>
    </div>
  `,
};

export const Error = {
  args: { variant: 'error', title: "We couldn't save your progress", message: 'Please check your connection and try again. Your answers have been preserved.' },
  render: ({ variant, title, message }) => `
    ${styles}
    <div class="alert alert-${variant}" role="alert">
      ${icons[variant]}
      <div class="alert-body">
        <p class="alert-title">${title}</p>
        <p class="alert-msg">${message}</p>
      </div>
    </div>
  `,
};

export const AllVariants = {
  render: () => `
    ${styles}
    <div class="alert alert-info" role="status">${icons.info}<div class="alert-body"><p class="alert-title">Information</p><p class="alert-msg">The application window closes May 31, 2026.</p></div></div>
    <div class="alert alert-success" role="status">${icons.success}<div class="alert-body"><p class="alert-title">Success</p><p class="alert-msg">Your application has been submitted successfully.</p></div></div>
    <div class="alert alert-warning" role="alert">${icons.warning}<div class="alert-body"><p class="alert-title">Action Required</p><p class="alert-msg">Income verification documents are missing.</p></div></div>
    <div class="alert alert-error" role="alert">${icons.error}<div class="alert-body"><p class="alert-title">Error</p><p class="alert-msg">We couldn't save your progress. Please try again.</p></div></div>
  `,
};
