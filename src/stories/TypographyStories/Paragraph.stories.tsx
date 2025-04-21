import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../../components';
import { ThemeProvider } from '../../themes/ThemeProvider';

const meta: Meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Paragraph Component

Paragraphs are used for blocks of text content in your application. They provide consistent styling for readable text.

## Accessibility
- Maintain proper color contrast for readability (WCAG AA: 4.5:1)
- Keep line length between 50-75 characters for optimal readability
- Use appropriate line height to improve readability

## Responsive Behavior
Paragraphs maintain consistent and readable text size across devices.
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '2rem', maxWidth: '640px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  render: () => (
    <Paragraph>
      This is a standard paragraph with default styling. Paragraphs are the fundamental building blocks of text content in your application. They should be easy to read with proper spacing and sizing.
    </Paragraph>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel urna fringilla luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at diam eget nisi aliquam ultrices. Phasellus vestibulum enim eu tellus venenatis, ac auctor velit tincidunt. Fusce eget nunc non libero lobortis finibus. Nulla facilisi. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </Paragraph>
  ),
};

export const SecondaryColor: Story = {
  render: () => (
    <Paragraph color="secondary">
      This paragraph uses the secondary text color, which is typically used for less emphasized content.
    </Paragraph>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Paragraph 
      fontSize="lg" 
      fontWeight="medium"
      lineHeight="loose"
    >
      This paragraph has custom styling with larger font size, medium font weight, and looser line height for increased readability.
    </Paragraph>
  ),
};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider initialMode="dark">
        <div style={{ padding: '2rem', maxWidth: '640px', background: '#111827' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  render: () => (
    <Paragraph>
      This paragraph demonstrates how text appears in dark mode. Dark mode uses higher contrast colors to maintain readability while reducing eye strain in low-light environments.
    </Paragraph>
  ),
};

export const WithMultipleParagraphs: Story = {
  render: () => (
    <>
      <Paragraph>
        This is the first paragraph. Multiple paragraphs can be used to structure content into digestible sections.
      </Paragraph>
      <Paragraph>
        This is the second paragraph. Proper spacing between paragraphs improves readability and content structure.
      </Paragraph>
      <Paragraph>
        This is the third paragraph. Notice how the whitespace between paragraphs helps to visually separate the content.
      </Paragraph>
    </>
  ),
};