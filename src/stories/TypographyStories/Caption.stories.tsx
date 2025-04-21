import { Meta, StoryObj } from '@storybook/react';
import { Caption } from '../../components';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta = {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Caption Component

Captions are used for supplementary text that provides additional context or information. They are typically smaller and less emphasized than regular text.

## Accessibility
- Ensure proper color contrast despite smaller text size (WCAG AA: 4.5:1)
- Don't use captions for essential information
- Consider increasing font size on mobile devices for readability

## Usage Guidelines
- Use captions for image descriptions, metadata, timestamps, etc.
- Keep captions concise and informative
- Use tertiary text color to indicate less importance
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
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  render: () => (
    <Caption>Last updated: April 12, 2025</Caption>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div>
      <div 
        style={{
          width: '300px',
          height: '200px',
          backgroundColor: '#e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0.5rem'
        }}
      >
        [Placeholder Image]
      </div>
      <Caption>Figure 1: Example diagram showing component architecture</Caption>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Caption 
      fontWeight="medium"
      letterSpacing="wide"
    >
      Custom styled caption with medium weight and wide letter spacing
    </Caption>
  ),
};

export const InCard: Story = {
  render: () => (
    <div style={{ 
      padding: '1rem', 
      border: '1px solid #e5e7eb', 
      borderRadius: '0.5rem',
      maxWidth: '300px'
    }}>
      <h3 style={{ 
        margin: '0 0 0.5rem 0',
        fontSize: '1.25rem',
        fontWeight: 600
      }}>
        Product Name
      </h3>
      <p style={{ 
        margin: '0 0 1rem 0',
      }}>
        Brief product description with key features.
      </p>
      <Caption>In stock • Ships in 2-3 business days</Caption>
    </div>
  ),
};

export const DarkMode: Story = {
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
    <Caption>This caption shows how captions appear in dark mode</Caption>
  ),
};

export const SecondaryColor: Story = {
  render: () => (
    <Caption color="secondary">
      This caption uses the secondary text color for slightly higher emphasis
    </Caption>
  ),
};