/**
 * Button Stories
 * Neighborly Software Design System
 *
 * Documents all button variants, sizes, and states.
 * axe-core runs automatically on every story via the a11y addon.
 */

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Buttons communicate actions. Neighborly uses pill-shaped buttons (border-radius: 30px)
to reinforce the brand's friendly, approachable tone.

**Usage rules:**
- Use \`btn-primary\` for the single most important action on a page.
- Use \`btn-secondary\` for supporting actions alongside a primary.
- Use \`btn-destructive\` only for irreversible actions (delete, remove).
- Add \`btn-loading\` + \`aria-busy="true"\` during async operations to prevent double-submission.
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Button label text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'success'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Button size',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
    loading: { control: 'boolean', description: 'Loading/processing state' },
  },
};

const styles = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; padding: 24px; }
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-family: inherit; font-weight: 700; cursor: pointer; border: none; transition: all 0.15s; text-decoration: none; white-space: nowrap; }
    .btn:focus-visible { outline: 3px solid #1389FD; outline-offset: 2px; }
    .btn:disabled { opacity: 0.45; cursor: not-allowed; }
    .btn-primary { background: #1389FD; color: #fff; border-radius: 30px; padding: 10px 22px; font-size: 14px; }
    .btn-primary:hover:not(:disabled) { background: #0F74DF; }
    .btn-secondary { background: #EEF6FF; color: #1389FD; border-radius: 30px; padding: 10px 22px; font-size: 14px; }
    .btn-secondary:hover:not(:disabled) { background: #D9EDFF; }
    .btn-outline { background: transparent; color: #1389FD; border: 2px solid #1389FD; border-radius: 30px; padding: 8px 20px; font-size: 14px; }
    .btn-outline:hover:not(:disabled) { background: #EEF6FF; }
    .btn-ghost { background: transparent; color: #3D4A56; border-radius: 30px; padding: 10px 22px; font-size: 14px; }
    .btn-ghost:hover:not(:disabled) { background: #F0F4F8; }
    .btn-destructive { background: #EF4444; color: #fff; border-radius: 30px; padding: 10px 22px; font-size: 14px; }
    .btn-destructive:hover:not(:disabled) { background: #DC2626; }
    .btn-success { background: #10B981; color: #fff; border-radius: 30px; padding: 10px 22px; font-size: 14px; }
    .btn-success:hover:not(:disabled) { background: #059669; }
    .btn-sm { padding: 6px 14px !important; font-size: 12px !important; border-radius: 20px !important; }
    .btn-lg { padding: 14px 32px !important; font-size: 16px !important; border-radius: 36px !important; }
    .btn-loading { position: relative; pointer-events: none; opacity: 0.8; }
    .btn-loading .btn-text { visibility: hidden; }
    .btn-loading::after { content: ''; position: absolute; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff; border-radius: 50%; animation: btn-spin 0.6s linear infinite; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    .btn-secondary.btn-loading::after, .btn-outline.btn-loading::after { border-color: rgba(19,137,253,0.3); border-top-color: #1389FD; }
    @keyframes btn-spin { to { transform: translate(-50%, -50%) rotate(360deg); } }
  </style>
`;

const createButton = ({ label = 'Button', variant = 'primary', size = 'default', disabled = false, loading = false }) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const loadingClass = loading ? 'btn-loading' : '';
  const ariaAttrs = loading ? 'aria-busy="true"' : '';
  const disabledAttr = disabled ? 'disabled' : '';
  return `
    ${styles}
    <button class="btn btn-${variant} ${sizeClass} ${loadingClass}" type="button" ${disabledAttr} ${ariaAttrs}>
      <span class="btn-text">${label}</span>
    </button>
  `;
};

export const Primary = { args: { label: 'Submit Application', variant: 'primary' }, render: createButton };
export const Secondary = { args: { label: 'Save Draft', variant: 'secondary' }, render: createButton };
export const Outline = { args: { label: 'Learn More', variant: 'outline' }, render: createButton };
export const Ghost = { args: { label: 'Cancel', variant: 'ghost' }, render: createButton };
export const Destructive = { args: { label: 'Delete Application', variant: 'destructive' }, render: createButton };
export const Success = { args: { label: 'Mark Complete', variant: 'success' }, render: createButton };
export const Small = { args: { label: 'View', variant: 'primary', size: 'sm' }, render: createButton };
export const Large = { args: { label: 'Get Started', variant: 'primary', size: 'lg' }, render: createButton };
export const Disabled = { args: { label: 'Submit Application', variant: 'primary', disabled: true }, render: createButton };
export const Loading = { args: { label: 'Submitting…', variant: 'primary', loading: true }, render: createButton };

export const AllVariants = {
  render: () => `
    ${styles}
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;">
      <button class="btn btn-primary" type="button">Primary</button>
      <button class="btn btn-secondary" type="button">Secondary</button>
      <button class="btn btn-outline" type="button">Outline</button>
      <button class="btn btn-ghost" type="button">Ghost</button>
      <button class="btn btn-destructive" type="button">Destructive</button>
      <button class="btn btn-success" type="button">Success</button>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:16px;">
      <button class="btn btn-primary btn-sm" type="button">Small</button>
      <button class="btn btn-primary" type="button">Default</button>
      <button class="btn btn-primary btn-lg" type="button">Large</button>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:16px;">
      <button class="btn btn-primary" disabled type="button">Disabled</button>
      <button class="btn btn-primary btn-loading" type="button" aria-busy="true"><span class="btn-text">Loading</span></button>
    </div>
  `,
  parameters: { docs: { description: { story: 'All button variants, sizes, and states at a glance.' } } },
};
