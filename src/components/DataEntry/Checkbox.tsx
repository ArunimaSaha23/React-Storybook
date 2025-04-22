import React, { forwardRef, useRef, useEffect, KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';
import { CheckboxProps } from './Checkbox.types';
import { useTheme } from '../../themes/ThemeProvider';

// Define theme type to match your theme structure
type Theme = {
  colors: {
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      error: string;
      success: string;
      warning: string;
    };
    background: {
      primary: string;
      secondary: string;
    };
  };
};

const CheckboxContainer = styled.div<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  /* Add tabindex styling for keyboard focus */
  &:focus-within {
    outline: none;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  
  /* Ensure the hidden checkbox can receive focus for screen readers */
  &:focus {
    outline: none;
  }
`;

const StyledCheckbox = styled.div<{
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  size?: 'small' | 'medium' | 'large';
  isFocused?: boolean;
  theme: Theme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => {
    switch (props.size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '16px';
      case 'large': return '24px';
      default: return '20px';
    }
  }};
  border-radius: 4px;
  border: 2px solid;
  transition: all 150ms ease;

  ${({ theme, checked, disabled, error, isFocused }) => {
    // Now TypeScript knows the structure of theme
    const colors = theme.colors;

    // Define border color based on state
    let borderColor = colors.text.tertiary;
    if (checked) borderColor = colors.text.primary;
    if (error) borderColor = colors.text.error;
    if (disabled) borderColor = colors.text.disabled;
    if (isFocused) borderColor = colors.text.primary;

    // Define background color based on state
    let backgroundColor = 'transparent';
    if (checked) backgroundColor = colors.text.primary;
    
    return css`
      border-color: ${borderColor};
      background-color: ${backgroundColor};
      box-shadow: ${isFocused ? `0 0 0 3px ${colors.text.tertiary}33` : 'none'};
    `;
  }}

  &:hover {
    ${({ theme, disabled }) => !disabled && css`
      border-color: ${theme.colors.text.secondary};
    `}
  }
`;

const CheckIcon = styled.svg<{ 
  size?: 'small' | 'medium' | 'large';
  theme: Theme;
}>`
  fill: none;
  stroke: ${({ theme }) => theme.colors.background.primary};
  stroke-width: 3px;
  width: ${props => {
    switch (props.size) {
      case 'small': return '10px';
      case 'large': return '16px';
      default: return '12px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '10px';
      case 'large': return '16px';
      default: return '12px';
    }
  }};
`;

const Label = styled.span<{ 
  size?: 'small' | 'medium' | 'large';
  theme: Theme;
}>`
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  id,
  label,
  checked = false,
  disabled = false,
  error = false,
  size = 'medium',
  indeterminate = false,
  onChange,
  name,
  className,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const internalRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle indeterminate state
  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Merge refs
  const checkboxRef = React.useMemo(() => {
    if (ref) {
      return typeof ref === 'function'
        ? (node: HTMLInputElement) => {
            internalRef.current = node;
            ref(node);
          }
        : Object.assign(internalRef, { current: ref.current });
    }
    return internalRef;
  }, [ref]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  // Handle space key press when container is focused
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    // Toggle on Space key press
    if (event.key === ' ' || event.code === 'Space') {
      event.preventDefault(); // Prevent page scrolling
      if (internalRef.current) {
        const newChecked = !checked;
        
        // Create and dispatch a synthetic change event
        const syntheticEvent = new Event('change', { bubbles: true });
        
        // Update the checked property of the hidden input
        internalRef.current.checked = newChecked;
        
        // Dispatch the event
        internalRef.current.dispatchEvent(syntheticEvent);
        
        // Call onChange handler with a synthetic React event
        if (onChange) {
          onChange({
            target: { ...internalRef.current, checked: newChecked },
            currentTarget: internalRef.current,
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    }
  };

  // Generate a unique ID if none provided
  const uniqueId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <CheckboxContainer 
      className={className} 
      disabled={disabled}
      ref={containerRef}
      onClick={() => {
        if (!disabled && internalRef.current) {
          internalRef.current.focus();
          internalRef.current.click();
        }
      }}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0} // Make container focusable via keyboard
      role="checkbox" // Ensure proper role for accessibility
      aria-checked={indeterminate ? 'mixed' : checked}
      aria-disabled={disabled ? 'true' : 'false'}
      data-testid="checkbox-container"
    >
      <HiddenCheckbox
        id={uniqueId}
        ref={checkboxRef}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      
      <StyledCheckbox 
        checked={checked}
        disabled={disabled}
        error={error}
        size={size}
        isFocused={isFocused}
        theme={theme as Theme}
        data-testid="checkbox-visual"
      >
        {checked && !indeterminate && (
          <CheckIcon 
            viewBox="0 0 24 24" 
            size={size}
            theme={theme as Theme}
            data-testid="checkbox-icon-check"
          >
            <polyline points="20 6 9 17 4 12" />
          </CheckIcon>
        )}
        
        {indeterminate && (
          <CheckIcon 
            viewBox="0 0 24 24" 
            size={size}
            theme={theme as Theme}
            data-testid="checkbox-icon-indeterminate"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </CheckIcon>
        )}
      </StyledCheckbox>
      
      {label && (
      <Label 
        size={size}
        theme={theme as Theme}
        data-testid="checkbox-label"
        as="label" 
        htmlFor={uniqueId} // Now htmlFor works because we're using "as" to render as label
      >
        {label}
      </Label>
    )}
    </CheckboxContainer>
  );
});

Checkbox.displayName = 'Checkbox';