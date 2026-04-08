import '../tokens.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    // Accessibility addon — runs axe-core on every story automatically
    a11y: {
      config: {
        rules: [
          // Enforce WCAG 2.1 AA
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
          { id: 'button-name', enabled: true },
          { id: 'image-alt', enabled: true },
          { id: 'link-name', enabled: true },
          { id: 'aria-required-attr', enabled: true },
          { id: 'aria-valid-attr-value', enabled: true },
        ],
      },
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'],
        },
      },
    },
    // Docs addon
    docs: {
      toc: true,
    },
    // Viewport presets
    viewport: {
      viewports: {
        mobile: { name: 'Mobile (375px)', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet (768px)', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop (1280px)', styles: { width: '1280px', height: '800px' } },
      },
    },
    // Background options for testing components on different surfaces
    backgrounds: {
      default: 'Neighborly Light',
      values: [
        { name: 'Neighborly Light', value: '#F5F8FE' },
        { name: 'White Surface', value: '#FFFFFF' },
        { name: 'Neighborly Dark', value: '#0F172A' },
      ],
    },
  },
};

export default preview;
