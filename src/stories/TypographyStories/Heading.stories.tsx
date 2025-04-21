import { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6 } from '../../components';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta = {
  title: 'Typography/Heading',
  component: H1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Heading Component

Headings are used to create hierarchical structure for your content. They help users scan and understand the page structure.

## Accessibility
- Use heading levels to reflect the document structure, not for styling purposes
- Do not skip heading levels (e.g., from h1 to h3)
- Only use one h1 per page or distinct section
- Ensure proper color contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text)

## Responsive Behavior
Headings scale down on smaller screens to maintain readability and proper proportions.
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '2rem' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof H1>;

export const AllHeadings: Story = {
  render: () => (
    <div>
      <H1>Heading 1 (h1)</H1>
      <H2>Heading 2 (h2)</H2>
      <H3>Heading 3 (h3)</H3>
      <H4>Heading 4 (h4)</H4>
      <H5>Heading 5 (h5)</H5>
      <H6>Heading 6 (h6)</H6>
    </div>
  ),
};

export const H1Example: Story = {
  render: () => <H1>This is a Heading 1</H1>,
};

export const H2Example: Story = {
  render: () => <H2>This is a Heading 2</H2>,
};

export const H3Example: Story = {
  render: () => <H3>This is a Heading 3</H3>,
};

export const CustomHeading: Story = {
  render: () => (
    <H1 
      fontWeight="light" 
      letterSpacing="wider"
      color="secondary"
    >
      Custom Styled Heading
    </H1>
  ),
};

export const ResponsiveHeading: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'This demonstrates how headings adapt to smaller screen sizes.',
      },
    },
  },
  render: () => (
    <div>
      <H1>Responsive Heading 1</H1>
      <H2>Responsive Heading 2</H2>
    </div>
  ),
};

export const DarkModeHeading: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider initialMode="dark">
        <div style={{ padding: '2rem', background: '#111827' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: () => (
    <div>
      <H1>Dark Mode Heading 1</H1>
      <H2>Dark Mode Heading 2</H2>
    </div>
  ),
};