import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/DataEntry/Checkbox';
import { ThemeProvider } from '../../themes/ThemeProvider';
import styled from 'styled-components';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Checkbox Component

Checkboxes allow users to select one or more items from a set, or to toggle a single option on or off.

### Anatomy
- **Box**: The visual checkbox element that displays the checked/unchecked state
- **Label**: Text that describes the option (optional)
- **Icon**: Visual indicator of the checked or indeterminate state
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the checkbox is in an error state',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
    label: {
      control: 'text',
      description: 'The label text to display next to the checkbox',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Basic checkbox story
export const Default: Story = {
  args: {
    label: 'Default checkbox',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default checkbox with a label.',
      },
    },
  },
};

// Controlled checkbox with state
const ControlledTemplate = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)}
      label="Controlled checkbox"
    />
  );
};

export const Controlled: Story = {
  render: () => <ControlledTemplate />,
  parameters: {
    docs: {
      description: {
        story: 'A controlled checkbox that manages its own state.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Default" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled and checked" disabled checked />
      <Checkbox label="Error state" error />
      <Checkbox label="Indeterminate" indeterminate />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The checkbox component supports various states including checked, disabled, error, and indeterminate.',
      },
    },
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Small size" size="small" />
      <Checkbox label="Medium size (default)" size="medium" />
      <Checkbox label="Large size" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The checkbox component supports three different sizes: small, medium (default), and large.',
      },
    },
  },
};

// Theme variants
export const Themes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h4>Light Theme</h4>
        <ThemeProvider initialMode="light">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" checked />
            <Checkbox label="Error" error />
          </div>
        </ThemeProvider>
      </div>
      <div style={{ background: '#111827', padding: '20px' }}>
        <h4 style={{ color: 'white' }}>Dark Theme</h4>
        <ThemeProvider initialMode="dark">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" checked />
            <Checkbox label="Error" error />
          </div>
        </ThemeProvider>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The checkbox component adapts to both light and dark themes.',
      },
    },
  },
};

// Form example
const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormExample = () => {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    updates: false,
    marketing: false,
    all: false,
  });
  
  const handleAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setPreferences({
      all: newValue,
      newsletter: newValue,
      updates: newValue,
      marketing: newValue,
    });
  };
  
  const handleIndividualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    const newPreferences = {
      ...preferences,
      [name]: checked,
    };
    
    // Update the "all" checkbox based on individual checkboxes
    const allChecked = newPreferences.newsletter && 
                        newPreferences.updates && 
                        newPreferences.marketing;
                        
    setPreferences({
      ...newPreferences,
      all: allChecked,
    });
  };
  
  const isIndeterminate = 
    (preferences.newsletter || preferences.updates || preferences.marketing) && 
    !preferences.all;
  
  return (
    <FormSection>
      <h3>Email Preferences</h3>
      <FormGroup>
        <Checkbox 
          label="Select all" 
          checked={preferences.all}
          indeterminate={isIndeterminate}
          onChange={handleAllChange}
          name="all"
        />
        <div style={{ marginLeft: 20 }}>
          <Checkbox 
            label="Newsletter" 
            checked={preferences.newsletter}
            onChange={handleIndividualChange}
            name="newsletter"
          />
          <Checkbox 
            label="Product updates" 
            checked={preferences.updates}
            onChange={handleIndividualChange}
            name="updates"
          />
          <Checkbox 
            label="Marketing emails" 
            checked={preferences.marketing}
            onChange={handleIndividualChange}
            name="marketing"
          />
        </div>
      </FormGroup>
    </FormSection>
  );
};

export const FormUsage: Story = {
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example of using checkboxes in a form with an indeterminate "select all" parent checkbox.',
      },
    },
  },
};

// Accessibility example
export const Accessibility: Story = {
  args: {
    label: "hiii"
  },

  render: () => (
    <div>
      <h3>Keyboard Navigation</h3>
      <ul>
        <li>Tab: Focus the checkbox</li>
        <li>Space: Toggle the checkbox state</li>
      </ul>
      <div style={{ marginTop: '20px' }}>
        <Checkbox 
          label="Try focusing this checkbox with Tab key and pressing Space to toggle" 
          id="accessible-checkbox"
        />
      </div>
    </div>
  ),

  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Features
- **Keyboard Navigation**: Users can navigate to checkboxes using the Tab key and toggle them using the Space bar
- **ARIA Support**: Uses aria-invalid for error states and appropriate role attributes
- **Focus Management**: Visual focus indicators help keyboard users identify which element is currently focused
- **Screen Reader Support**: Compatible with screen readers through proper HTML semantics and ARIA attributes
`,
      },
    },
  }
};

// Best practices
export const BestPractices: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h4>Do</h4>
        <div style={{ border: '1px solid green', padding: '16px', borderRadius: '8px' }}>
          <Checkbox label="Use clear, concise labels" />
          <div style={{ marginTop: '16px' }}>
            <Checkbox label="Format lists of checkboxes consistently" />
            <Checkbox label="Group related options visually" />
          </div>
        </div>
      </div>
      <div>
        <h4>Don't</h4>
        <div style={{ border: '1px solid red', padding: '16px', borderRadius: '8px' }}>
          <Checkbox label="Don't use extremely long labels that wrap multiple times and make the checkbox difficult to visually associate with its text, creating confusion for users who are trying to understand what option they're selecting" />
          <div style={{ marginTop: '16px' }}>
            <Checkbox />
            <p style={{ marginLeft: '16px', marginTop: '4px' }}>Don't separate labels from checkboxes</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Best Practices

#### Do:
- Use clear, concise labels that explain the option
- Group related checkboxes together
- Use the indeterminate state for parent checkboxes when appropriate
- Maintain consistent vertical alignment for lists of checkboxes
- Consider using checkboxes for optional selections and radio buttons for required selections

#### Don't:
- Use checkboxes for actions or commands (use buttons instead)
- Create checkboxes without labels or with unclear descriptions
- Place labels far from their associated checkboxes
- Use extremely long labels that wrap multiple times
- Hide the checkbox itself and only show a label
`,
      },
    },
  },
};