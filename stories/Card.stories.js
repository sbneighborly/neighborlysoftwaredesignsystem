/**
 * Card Stories
 * Neighborly Software Design System
 */

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Cards group related content and actions. Neighborly uses three elevation levels to communicate hierarchy.

| Variant | Shadow | Use case |
|---|---|---|
| Default | \`shadow-sm\` | Standard content grouping |
| Elevated | \`shadow-md\` | Featured content, modals |
| Interactive | \`shadow-sm\` → hover \`shadow-lg\` | Clickable program cards |
      `,
      },
    },
  },
};

const styles = `
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; padding: 24px; max-width: 400px; }
    .ds-card { background: #fff; border: 1px solid #E4EAF2; border-radius: 16px; padding: 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
    .ds-card-elevated { box-shadow: 0 4px 16px rgba(0,0,0,0.10); }
    .ds-card-interactive { cursor: pointer; transition: box-shadow 0.15s, transform 0.15s; }
    .ds-card-interactive:hover { box-shadow: 0 6px 20px rgba(19,137,253,0.12); transform: translateY(-1px); }
    .ds-card h5 { font-size: 15px; font-weight: 700; color: #181B1F; margin-bottom: 6px; }
    .ds-card p { font-size: 13px; color: #5A6472; line-height: 1.5; }
    .badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
    .badge-green { background: #D1FAE5; color: #065F46; }
    .badge-blue { background: #DBEAFE; color: #1E40AF; }
    .btn { display: inline-flex; align-items: center; font-family: inherit; font-weight: 700; cursor: pointer; border: none; transition: all 0.15s; border-radius: 30px; padding: 8px 18px; font-size: 13px; }
    .btn-primary { background: #1389FD; color: #fff; }
    .btn-primary:hover { background: #0F74DF; }
    .btn-outline { background: transparent; color: #1389FD; border: 2px solid #1389FD; padding: 6px 16px; }
    .btn-outline:hover { background: #EEF6FF; }
  </style>
`;

export const Default = {
  render: () => `
    ${styles}
    <div class="ds-card">
      <h5>CDBG-DR Housing Assistance</h5>
      <p>Community Development Block Grant — Disaster Recovery funding for households affected by the 2023 flooding event.</p>
    </div>
  `,
};

export const Elevated = {
  render: () => `
    ${styles}
    <div class="ds-card ds-card-elevated">
      <h5>Priority Application</h5>
      <p>This household has been flagged for expedited review based on their current housing situation.</p>
    </div>
  `,
};

export const Interactive = {
  render: () => `
    ${styles}
    <div class="ds-card ds-card-interactive" tabindex="0" role="button" aria-label="View CDBG-DR Housing Assistance program details">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;">
        <h5 style="margin:0;">CDBG-DR Housing Assistance</h5>
        <span class="badge badge-green">✓ Eligible</span>
      </div>
      <p>Up to $35,000 in emergency housing repair assistance for qualifying households.</p>
      <div style="margin-top:14px;">
        <button class="btn btn-primary" type="button">Start Application</button>
      </div>
    </div>
  `,
};

export const WithFooter = {
  render: () => `
    ${styles}
    <div class="ds-card" style="padding:0;overflow:hidden;">
      <div style="padding:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <h5 style="margin:0;">Jane Smith</h5>
          <span class="badge badge-blue">Under Review</span>
        </div>
        <p>CDBG-DR Application · Submitted March 15, 2026</p>
        <p style="margin-top:6px;">Caseworker: Maria Gonzalez</p>
      </div>
      <div style="border-top:1px solid #E4EAF2;padding:12px 20px;display:flex;gap:8px;">
        <button class="btn btn-primary" type="button">Review</button>
        <button class="btn btn-outline" type="button">Message</button>
      </div>
    </div>
  `,
};
