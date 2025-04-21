import { Meta, StoryObj } from '@storybook/react';
import { Label } from '../../components';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta = {
  title: 'Typography/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Label Component

Labels are used to identify form controls and other UI elements. They provide context and instructions for users.

## Accessibility
- Always associate labels with their form controls using the \`htmlFor\` attribute
- Make labels descriptive and concise
- Ensure proper color contrast for readability (WCAG AA: 4.5:1)
- Don't rely on color alone to convey meaning

## Usage Guidelines
- Position labels consistently (typically above or to the left of form elements)
- Use sentence case for label text
- Keep labels concise but descriptive
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
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <Label htmlFor="example-input">Email Address</Label>
  ),
};

export const WithFormControl: Story = {
  render: () => (
    <div>
      <Label htmlFor="example-input">Email Address</Label>
      <input
        id="example-input"
        type="email"
        placeholder="example@email.com"
        style={{ 
          display: 'block', 
          marginTop: '0.5rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <Label htmlFor="required-input">
      Username <span style={{ color: 'red' }}>*</span>
    </Label>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Label 
      htmlFor="custom-input"
      fontWeight="bold"
      fontSize="base"
      letterSpacing="wider"
    >
      Custom Styled Label
    </Label>
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
    <Label htmlFor="dark-mode-input">Dark Mode Label</Label>
  ),
};

export const SecondaryColor: Story = {
  render: () => (
    <Label htmlFor="secondary-input" color="secondary">
      Secondary Color Label
    </Label>
  ),
};