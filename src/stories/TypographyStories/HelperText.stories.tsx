import { Meta, StoryObj } from '@storybook/react';
import { HelperText, Label } from '../../components';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta = {
  title: 'Typography/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Helper Text Component

Helper text provides additional guidance, requirements, or context for form fields and other UI elements. It helps users understand expected input and avoid errors.

## Accessibility
- Ensure proper color contrast (WCAG AA: 4.5:1)
- For error messages, don't rely solely on color to indicate errors
- Associate helper text with form controls using appropriate ARIA attributes when needed

## Usage Guidelines
- Keep helper text concise and instructional
- Position helper text consistently (typically below the input field)
- Use error state for validation messages
- Use regular helper text for guidelines or additional information
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
type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  render: () => (
    <HelperText>Must be at least 8 characters</HelperText>
  ),
};

export const WithFormField: Story = {
  render: () => (
    <div>
      <Label htmlFor="password-input">Password</Label>
      <input
        id="password-input"
        type="password"
        style={{ 
          display: 'block', 
          width: '100%',
          marginTop: '0.5rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <div style={{ marginTop: '0.25rem' }}>
        <HelperText>Must be at least 8 characters with one number and one special character</HelperText>
      </div>
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div>
      <Label htmlFor="email-input">Email Address</Label>
      <input
        id="email-input"
        type="email"
        style={{ 
          display: 'block', 
          width: '100%',
          marginTop: '0.5rem',
          padding: '0.5rem',
          border: '1px solid #e11d48',
          borderRadius: '4px'
        }}
        value="invalid-email"
      />
      <div style={{ marginTop: '0.25rem' }}>
        <HelperText error={true}>Please enter a valid email address</HelperText>
      </div>
    </div>
  ),
};

export const SuccessState: Story = {
  render: () => (
    <div>
      <Label htmlFor="username-input">Username</Label>
      <input
        id="username-input"
        type="text"
        style={{ 
          display: 'block', 
          width: '100%',
          marginTop: '0.5rem',
          padding: '0.5rem',
          border: '1px solid #22c55e',
          borderRadius: '4px'
        }}
        value="available_username"
      />
      <div style={{ marginTop: '0.25rem' }}>
        <HelperText color="success">Username is available</HelperText>
        <HelperText color="error">Please enter a valid email</HelperText>
        <HelperText color="warning">Too many attempts</HelperText>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <HelperText 
      fontWeight="medium"
      letterSpacing="wide"
    >
      Custom styled helper text with medium weight and wide letter spacing
    </HelperText>
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
    <HelperText>This helper text shows how it appears in dark mode</HelperText>
  ),
};

export const WithCharacterCount: Story = {
  render: () => (
    <div>
      <Label htmlFor="bio-input">Bio</Label>
      <textarea
        id="bio-input"
        style={{ 
          display: 'block', 
          width: '100%',
          marginTop: '0.5rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
        rows={3}
      />
      <div style={{ 
        marginTop: '0.25rem', 
        display: 'flex', 
        justifyContent: 'space-between' 
      }}>
        <HelperText>Briefly describe yourself</HelperText>
        <HelperText>0/150</HelperText>
      </div>
    </div>
  ),
};