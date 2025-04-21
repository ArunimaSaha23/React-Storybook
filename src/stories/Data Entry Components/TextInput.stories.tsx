import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../components/DataEntry/TextInput';
import { ThemeProvider } from '../../themes/ThemeProvider';
import styled from 'styled-components';

// Mock icons for demonstration
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## TextInput Component

Text inputs allow users to enter and edit text. They are typically used in forms and dialogs.

### Anatomy
- **Label**: Text that describes the input field
- **Input field**: The container for text entry
- **Helper text**: Additional information or error messages
- **Icons**: Optional visual elements to indicate purpose or provide actions
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when input is empty',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes up full width',
    },
    startIcon: {
      control: { disable: true },
      description: 'Icon to display at the start of the input',
    },
    endIcon: {
      control: { disable: true },
      description: 'Icon to display at the end of the input',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '24px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

// Basic input story
export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default text input with label and placeholder.',
      },
    },
  },
};

// Controlled input with state
const ControlledTemplate = () => {
  const [value, setValue] = useState('');
  
  return (
    <TextInput 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      label="Controlled Input"
      placeholder="Type something..."
      helperText={`Character count: ${value.length}`}
    />
  );
};

export const Controlled: Story = {
  render: () => <ControlledTemplate />,
  parameters: {
    docs: {
      description: {
        story: 'A controlled input that manages its own state and displays character count.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextInput label="Default" placeholder="Default state" />
      <TextInput label="Disabled" placeholder="Disabled state" disabled />
      <TextInput label="With helper text" placeholder="With helper text" helperText="This is helper text" />
      <TextInput label="With error" placeholder="Error state" error="This field is required" />
      <TextInput 
        label="With value" 
        value="This is a pre-filled value" 
        onChange={() => {}}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text input in various states including default, disabled, with helper text, and with error.',
      },
    },
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextInput label="Small size" placeholder="Small input" size="small" />
      <TextInput label="Medium size (default)" placeholder="Medium input" size="medium" />
      <TextInput label="Large size" placeholder="Large input" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text input in three different sizes: small, medium (default), and large.',
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextInput 
        label="With start icon" 
        placeholder="Search..." 
        startIcon={<SearchIcon />}
      />
      <TextInput 
        label="With end icon" 
        placeholder="Type to search..." 
        endIcon={<SearchIcon />}
      />
      <TextInput 
        label="With both icons" 
        placeholder="Search..." 
        startIcon={<SearchIcon />}
        endIcon={<CloseIcon />}
        value="Search term"
        onChange={() => {}}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text input with icons placed at the start, end, or both positions.',
      },
    },
  },
};

// Themes
export const Themes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div>
        <h4>Light Theme</h4>
        <ThemeProvider initialMode="light">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextInput label="Default" placeholder="Default input" />
            <TextInput label="With error" placeholder="Error input" error="Error message" />
          </div>
        </ThemeProvider>
      </div>
      <div style={{ background: '#111827', padding: '20px' }}>
        <h4 style={{ color: 'white' }}>Dark Theme</h4>
        <ThemeProvider initialMode="dark">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextInput label="Default" placeholder="Default input" />
            <TextInput label="With error" placeholder="Error input" error="Error message" />
          </div>
        </ThemeProvider>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text input adapts to both light and dark themes.',
      },
    },
  },
};

// Form usage
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  
  &.primary {
    background-color: #1f2937;
    color: white;
  }
  
  &.secondary {
    background-color: #e5e7eb;
    color: #1f2937;
  }
`;

const FormExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };
  
  return (
    <FormContainer>
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <TextInput
            label="First Name"
            placeholder="Enter first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            fullWidth
          />
          <TextInput
            label="Last Name"
            placeholder="Enter last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            fullWidth
          />
        </FormRow>
        
        <TextInput
          label="Email"
          placeholder="Enter email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          fullWidth
        />
        
        <TextInput
          label="Password"
          placeholder="Enter password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          helperText={!errors.password ? "Password must be at least 6 characters" : ""}
          fullWidth
        />
        
        <FormButtons>
          <Button type="button" className="secondary">Cancel</Button>
          <Button type="submit" className="primary">Register</Button>
        </FormButtons>
      </form>
    </FormContainer>
  );
};

export const FormUsage: Story = {
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example of using text inputs in a registration form with validation.',
      },
    },
  },
};

// Accessibility
export const Accessibility: Story = {
  render: () => (
    <div>
      <h3>Keyboard Navigation</h3>
      <ul>
        <li>Tab: Focus the input field</li>
        <li>Enter/Space: Submit when inside a form</li>
      </ul>
      <div style={{ marginTop: '20px' }}>
        <TextInput 
          label="Try focusing this input with Tab key"
          id="accessible-input"
          placeholder="Focus me with keyboard"
          helperText="Press Tab to focus, and type to enter text"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Features
- **Keyboard Navigation**: Users can navigate to inputs using the Tab key
- **Label Association**: Labels are properly associated with inputs using the 'for' attribute
- **Error States**: Error states are communicated visually and through ARIA attributes
- **Focus Management**: Visual focus indicators help keyboard users identify the active element
- **Screen Reader Support**: Compatible with screen readers through proper HTML semantics and ARIA attributes
`,
      },
    },
  },
};

// Best practices
export const BestPractices: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px' }}>
      <div>
        <h4>Do</h4>
        <div style={{ border: '1px solid green', padding: '16px', borderRadius: '8px' }}>
          <TextInput 
            label="Email address" 
            placeholder="name@example.com" 
            helperText="We'll never share your email with anyone else."
          />
          <div style={{ marginTop: '24px' }}>
            <TextInput 
              label="Password" 
              type="password"
              placeholder="Enter your password" 
              helperText="Must be at least 8 characters"
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Don't</h4>
        <div style={{ border: '1px solid red', padding: '16px', borderRadius: '8px' }}>
          <TextInput 
            placeholder="Email..." 
          />
          <div style={{ marginTop: '24px' }}>
            <TextInput 
              label="A very long label that doesn't clearly explain what the user should enter in this field and might confuse them"
              placeholder="???"
            />
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
- Use clear, concise labels that describe the requested information
- Use placeholder text as additional guidance, not as a replacement for labels
- Provide helpful error messages that explain how to resolve the issue
- Use appropriate input types (email, password, number, etc.) for better mobile experience
- Include helper text for complex inputs

#### Don't:
- Omit labels and rely only on placeholder text
- Use vague or overly long labels
- Create inputs without sufficient context
- Use placeholder text that disappears when the user starts typing without other guidance
- Use error messages that don't help users correct their input
`,
      },
    },
  },
};