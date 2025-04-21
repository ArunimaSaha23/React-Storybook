import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toast from '../../components/Feedback/Toast';
import { ToastProps } from '../../components/Feedback/Toast.types';
import styled from 'styled-components';

// Icons for illustration
const SuccessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 6L8 14L4 10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="10" cy="10" r="8" />
    <path d="M12 8L8 12M8 8L12 12" strokeLinecap="round" />
  </svg>
);

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" strokeLinecap="round" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="10" cy="10" r="8" />
    <path d="M10 14V10M10 6H10.01" strokeLinecap="round" />
  </svg>
);

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2563EB;
  }
`;

const DocsSection = styled.div`
  margin-bottom: 2rem;
`;

const DocsTitle = styled.h3`
  margin-bottom: 1rem;
`;

const DoDontGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
`;

const DoDontSection = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const DoSection = styled(DoDontSection)`
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
`;

const DontSection = styled(DoDontSection)`
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
`;

const AnatomyContainer = styled.div`
  position: relative;
  padding: 2rem;
  background-color: #1e293b;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const AnatomyToast = styled.div`
  background-color: #3B82F6;
  color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

const AnatomyLabel = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
`;

const meta: Meta<ToastProps> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toast Component

The Toast component displays brief, temporary notifications to users. Toasts are non-disruptive and typically appear and disappear with animations. They can be used to confirm actions, display status updates, or provide important information.

## Features

- Multiple variants (info, success, warning, error)
- Configurable positions
- Auto-dismiss functionality
- Custom icons
- Accessible (proper ARIA attributes)
- Themeable with styled-components
- Responsive design
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style of the toast',
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Where the toast should appear on the screen',
    },
    title: {
      control: 'text',
      description: 'The title text displayed in the toast',
    },
    message: {
      control: 'text',
      description: 'The body text displayed in the toast',
    },
    icon: {
      control: false,
      description: 'Optional icon element to display in the toast',
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether the toast should automatically close',
    },
    autoCloseTime: {
      control: 'number',
      description: 'Time in milliseconds before the toast auto-closes',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls the visibility of the toast',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function when the toast is closed',
    },
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

// Basic examples
export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an information message',
    isOpen: true,
    icon: <InfoIcon />,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your action was completed successfully',
    isOpen: true,
    icon: <SuccessIcon />,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please be careful with this action',
    isOpen: true,
    icon: <WarningIcon />,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again',
    isOpen: true,
    icon: <ErrorIcon />,
  },
};

// Positions example
export const Positions: Story = {
  render: () => {
    const [position, setPosition] = useState<ToastProps['position']>('top-right');
    const [isOpen, setIsOpen] = useState(false);
    
    const showToast = (pos: ToastProps['position']) => {
      setPosition(pos);
      setIsOpen(true);
    };
    
    return (
      <div>
        <h3>Select a position to show the toast</h3>
        <ButtonGrid>
          <Button onClick={() => showToast('top-left')}>Top Left</Button>
          <Button onClick={() => showToast('top-right')}>Top Right</Button>
          <Button onClick={() => showToast('top-center')}>Top Center</Button>
          <Button onClick={() => showToast('bottom-left')}>Bottom Left</Button>
          <Button onClick={() => showToast('bottom-right')}>Bottom Right</Button>
          <Button onClick={() => showToast('bottom-center')}>Bottom Center</Button>
        </ButtonGrid>
        
        <Toast
          variant="info"
          title="Toast Position"
          message={`This toast is positioned at: ${position}`}
          position={position}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          icon={<InfoIcon />}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts can be positioned in six different locations on the screen.',
      },
    },
  },
};

// Auto-close example
export const AutoClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [autoCloseTime, setAutoCloseTime] = useState(3000);
    
    return (
      <div>
        <h3>Auto-close Behavior</h3>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            Auto-close after:
            <select 
              value={autoCloseTime} 
              onChange={(e) => setAutoCloseTime(Number(e.target.value))}
              style={{ marginLeft: '0.5rem' }}
            >
              <option value={1000}>1 second</option>
              <option value={3000}>3 seconds</option>
              <option value={5000}>5 seconds</option>
              <option value={8000}>8 seconds</option>
            </select>
          </label>
        </div>
        
        <Button onClick={() => setIsOpen(true)}>
          Show Auto-close Toast
        </Button>
        
        <Toast
          variant="info"
          title="Auto-close Toast"
          message={`This toast will auto-close after ${autoCloseTime/1000} seconds`}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          autoClose={true}
          autoCloseTime={autoCloseTime}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts can be configured to automatically close after a specified time.',
      },
    },
  },
};

// Accessibility example
export const Accessibility: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div>
        <h3>Accessibility Features</h3>
        <p>This toast uses proper ARIA attributes for accessibility:</p>
        <ul>
          <li>Uses <code>role="alert"</code></li>
          <li>Uses <code>aria-live="assertive"</code></li>
          <li>Close button has <code>aria-label</code></li>
        </ul>
        
        <Button onClick={() => setIsOpen(true)}>
          Show Accessible Toast
        </Button>
        
        <Toast
          variant="info"
          title="Accessible Toast"
          message="This toast is fully accessible with proper ARIA attributes"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts are built with accessibility in mind, using proper ARIA roles and attributes.',
      },
    },
  },
};

// Best Practices - Updated to display actual content
export const BestPractices: Story = {
  render: () => {
    const [goodExample, setGoodExample] = useState(false);
    const [badExample, setBadExample] = useState(false);
    
    return (
      <DocsSection>
        <DocsTitle>Best Practices</DocsTitle>
        
        <DoDontGrid>
          <DoSection>
            <h4>✅ Do</h4>
            <ul>
              <li>Use toasts for non-critical, temporary information</li>
              <li>Keep toast messages brief and clear</li>
              <li>Include a way to dismiss the toast</li>
              <li>Position toasts in a non-intrusive location</li>
              <li>Use appropriate colors for different message types</li>
            </ul>
            <Button onClick={() => setGoodExample(true)} style={{ marginTop: '1rem' }}>
              Show Good Example
            </Button>
          </DoSection>
          
          <DontSection>
            <h4>❌ Don't</h4>
            <ul>
              <li>Use toasts for critical errors that require user action</li>
              <li>Stack too many toasts at once</li>
              <li>Use toasts for persistent information</li>
              <li>Make auto-close times too short for users to read</li>
              <li>Position toasts where they block important UI elements</li>
            </ul>
            <Button onClick={() => setBadExample(true)} style={{ marginTop: '1rem' }}>
              Show Bad Example
            </Button>
          </DontSection>
        </DoDontGrid>
        
        {/* Good example toast */}
        <Toast
          variant="success"
          title="Document Saved"
          message="Your changes have been saved successfully"
          icon={<SuccessIcon />}
          position="bottom-right"
          isOpen={goodExample}
          onClose={() => setGoodExample(false)}
          autoClose={true}
          autoCloseTime={5000}
        />
        
        {/* Bad example toast - Deliberately long text */}
        <Toast
          variant="error"
          title="Critical System Error 5023"
          message="The system encountered a fatal exception in module DATA_PROCESSOR_XJ5. This requires immediate attention. Please contact your system administrator immediately and provide error code 5023-B. Do not attempt to continue using the application until this issue is resolved as it may result in data corruption or loss."
          position="top-center"
          isOpen={badExample}
          onClose={() => setBadExample(false)}
          autoClose={true}
          autoCloseTime={3000}
        />
      </DocsSection>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Guidelines for the effective use of Toast components.',
      },
    },
  },
};

// Anatomy - Updated to display visual anatomy
export const Anatomy: Story = {
  render: () => {
    return (
      <DocsSection>
        <DocsTitle>Toast Anatomy</DocsTitle>
        
        <AnatomyContainer>
          <AnatomyToast>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '12px' }}>
              <InfoIcon />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 4px', fontWeight: 600 }}>Toast Title</h4>
              <p style={{ margin: 0, fontSize: '14px' }}>This is the toast message content</p>
            </div>
            <button style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '20px' }}>×</button>
            
            {/* Labels for anatomy */}
            <AnatomyLabel style={{ top: '-15px', left: '25px' }}>Icon</AnatomyLabel>
            <AnatomyLabel style={{ top: '10px', left: '100px' }}>Title</AnatomyLabel>
            <AnatomyLabel style={{ top: '35px', left: '150px' }}>Message</AnatomyLabel>
            <AnatomyLabel style={{ top: '10px', right: '-30px' }}>Close Button</AnatomyLabel>
            <AnatomyLabel style={{ bottom: '-15px', left: '150px' }}>Container</AnatomyLabel>
          </AnatomyToast>
        </AnatomyContainer>
        
        <p>A toast notification consists of the following parts:</p>
        <ol>
          <li><strong>Container</strong> - The outer wrapper with background color based on variant</li>
          <li><strong>Icon</strong> (optional) - Visual indicator of the notification type</li>
          <li><strong>Content</strong>
            <ul>
              <li><strong>Title</strong> - Brief, bold heading (optional)</li>
              <li><strong>Message</strong> - Descriptive text</li>
            </ul>
          </li>
          <li><strong>Close Button</strong> - Allows users to dismiss the notification</li>
        </ol>
        
        <p>The toast also has built-in animation for mount/unmount transitions.</p>
      </DocsSection>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'The structural components of the Toast component.',
      },
    },
  },
};

// Responsive - Updated to show responsive examples
export const Responsive: Story = {
  render: () => {
    const [isDesktopToastOpen, setIsDesktopToastOpen] = useState(false);
    const [isMobileToastOpen, setIsMobileToastOpen] = useState(false);
    
    return (
      <DocsSection>
        <DocsTitle>Responsive Behavior</DocsTitle>
        
        <p>The Toast component adapts to different screen sizes:</p>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div>
            <h4>Desktop View</h4>
            <div style={{ 
              width: '500px', 
              height: '300px', 
              border: '1px solid #ccc', 
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '0.5rem',
              background: '#f9fafb',
              padding: '1rem'
            }}>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button onClick={() => setIsDesktopToastOpen(true)}>
                  Show Desktop Toast
                </Button>
              </div>
              
              {isDesktopToastOpen && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '1rem', 
                  right: '1rem',
                  width: '300px',
                  background: '#3B82F6',
                  color: 'white',
                  borderRadius: '0.375rem',
                  padding: '1rem',
                  display: 'flex'
                }}>
                  <div style={{ marginRight: '0.75rem' }}><InfoIcon /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Desktop Toast</div>
                    <div style={{ fontSize: '0.875rem' }}>Standard width on larger screens</div>
                  </div>
                  <button 
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.25rem' }}
                    onClick={() => setIsDesktopToastOpen(false)}
                  >×</button>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h4>Mobile View</h4>
            <div style={{ 
              width: '320px', 
              height: '300px', 
              border: '1px solid #ccc', 
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '0.5rem',
              background: '#f9fafb',
              padding: '1rem'
            }}>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button onClick={() => setIsMobileToastOpen(true)}>
                  Show Mobile Toast
                </Button>
              </div>
              
              {isMobileToastOpen && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: '1rem', 
                  left: '1rem',
                  right: '1rem',
                  background: '#3B82F6',
                  color: 'white',
                  borderRadius: '0.375rem',
                  padding: '1rem',
                  display: 'flex'
                }}>
                  <div style={{ marginRight: '0.75rem' }}><InfoIcon /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Mobile Toast</div>
                    <div style={{ fontSize: '0.875rem' }}>Adapts to fill available width</div>
                  </div>
                  <button 
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.25rem' }}
                    onClick={() => setIsMobileToastOpen(false)}
                  >×</button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <ul>
          <li>On larger screens, toasts maintain their standard width</li>
          <li>On smaller screens (mobile devices), toasts adapt to take up more horizontal space</li>
          <li>Position adapts based on screen size</li>
          <li>Text wraps appropriately for smaller viewports</li>
        </ul>
      </DocsSection>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'How the Toast component adapts to different screen sizes.',
      },
    },
  },
};

// Keyboard Navigation - Updated to show interactive example
export const KeyboardNavigation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusMessage, setFocusMessage] = useState('');
    
    const handleFocus = () => {
      setFocusMessage('Close button is focused! Press Enter or Space to close.');
    };
    
    const handleBlur = () => {
      setFocusMessage('');
    };
    
    return (
      <DocsSection>
        <DocsTitle>Keyboard Navigation</DocsTitle>
        
        <p>The Toast component supports these keyboard interactions:</p>
        
        <ul>
          <li><strong>Tab</strong>: Focuses the close button</li>
          <li><strong>Enter/Space</strong>: When focus is on the close button, dismisses the toast</li>
          <li><strong>Escape</strong>: If implemented with a toast manager, can dismiss all toasts</li>
        </ul>
        
        <div style={{ marginTop: '1.5rem' }}>
          <p>Try keyboard navigation on this example:</p>
          <ol>
            <li>Click the button below to show a toast</li>
            <li>Press Tab to focus the close button</li>
            <li>Press Enter or Space to dismiss</li>
          </ol>
          
          <Button onClick={() => setIsOpen(true)}>
            Show Toast for Keyboard Navigation
          </Button>
          
          {focusMessage && (
            <div style={{ 
              marginTop: '1rem', 
              padding: '0.5rem', 
              backgroundColor: 'rgba(59, 130, 246, 0.1)', 
              borderRadius: '0.25rem',
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}>
              {focusMessage}
            </div>
          )}
        </div>
        
        {/* Custom toast with onFocus handler for the close button */}
        {isOpen && (
          <div style={{ 
            position: 'fixed', 
            bottom: '1rem', 
            right: '1rem',
            minWidth: '300px',
            maxWidth: '400px',
            background: '#3B82F6',
            color: 'white',
            borderRadius: '0.375rem',
            padding: '1rem',
            display: 'flex',
            zIndex: 1000
          }}>
            <div style={{ marginRight: '0.75rem' }}><InfoIcon /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Keyboard Navigation Demo</div>
              <div style={{ fontSize: '0.875rem' }}>Press Tab to focus the close button</div>
            </div>
            <button 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white', 
                fontSize: '1.25rem',
                cursor: 'pointer'
              }}
              onClick={() => setIsOpen(false)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              aria-label="Close notification"
            >×</button>
          </div>
        )}
      </DocsSection>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Keyboard accessibility features of the Toast component.',
      },
    },
  },
};