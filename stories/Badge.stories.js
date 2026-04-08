/**
 * Badge Stories
 * Neighborly Software Design System
 */

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Badges communicate status, category, or count. They are always paired with a text label — never rely on color alone to convey meaning (WCAG 1.4.1).

**Semantic usage:**
- \`badge-green\` — Approved, Complete, Active
- \`badge-blue\` — In Progress, Under Review, Info
- \`badge-amber\` — Pending, Needs Attention, Warning
- \`badge-red\` — Denied, Overdue, Error
- \`badge-gray\` — Inactive, Archived, Neutral
- \`badge-purple\` — Special program, Priority
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['blue', 'green', 'amber', 'red', 'gray', 'purple', 'primary'],
    },
  },
};

const styles = `
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Nunito', sans-serif; padding: 24px; }
    .badge { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
    .badge-blue { background: #DBEAFE; color: #1E40AF; }
    .badge-green { background: #D1FAE5; color: #065F46; }
    .badge-amber { background: #FEF3C7; color: #92400E; }
    .badge-red { background: #FEE2E2; color: #991B1B; }
    .badge-gray { background: #F3F4F6; color: #374151; }
    .badge-purple { background: #EDE9FE; color: #5B21B6; }
    .badge-primary { background: #1389FD; color: #fff; }
  </style>
`;

export const Default = {
  args: { label: 'Under Review', variant: 'blue' },
  render: ({ label, variant }) => `${styles}<span class="badge badge-${variant}">${label}</span>`,
};

export const AllVariants = {
  render: () => `
    ${styles}
    <div style="display:flex;flex-wrap:wrap;gap:8px;">
      <span class="badge badge-green">✓ Approved</span>
      <span class="badge badge-blue">Under Review</span>
      <span class="badge badge-amber">⚠ Needs Attention</span>
      <span class="badge badge-red">Denied</span>
      <span class="badge badge-gray">Inactive</span>
      <span class="badge badge-purple">Priority</span>
      <span class="badge badge-primary">New</span>
    </div>
  `,
};
