import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { TextInputProps } from './TextInput.types';
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

interface ContainerProps {
  fullWidth?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  position: relative;
`;

interface LabelProps {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  theme: Theme;
}

const Label = styled.label<LabelProps>`
  margin-bottom: 6px;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px'; 
    }
  }};
  color: ${props => props.disabled 
    ? props.theme.colors.text.disabled 
    : props.theme.colors.text.primary};
`;

interface InputWrapperProps {
  hasError?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  size?: 'small' | 'medium' | 'large';
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  theme: Theme;
}

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  border: 1px solid;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.background.primary};
  transition: all 150ms ease;
  
  /* Set height based on size */
  height: ${props => {
    switch (props.size) {
      case 'small': return '32px';
      case 'large': return '48px';
      default: return '40px';
    }
  }};
  
  /* Handle border color based on state */
  ${props => {
    const colors = props.theme.colors;
    let borderColor = colors.text.tertiary;
    
    if (props.isFocused) borderColor = colors.text.primary;
    if (props.hasError) borderColor = colors.text.error;
    if (props.disabled) borderColor = colors.text.disabled;
    
    return css`
      border-color: ${borderColor};
      ${props.isFocused && !props.hasError && !props.disabled && `
        box-shadow: 0 0 0 3px ${colors.text.tertiary}33;
      `}
      ${props.hasError && !props.disabled && `
        box-shadow: 0 0 0 3px ${colors.text.error}33;
      `}
    `;
  }}
  
  /* Handle hover state when not disabled */
  &:hover {
    ${props => !props.disabled && !props.isFocused && css`
      border-color: ${props.hasError 
        ? props.theme.colors.text.error 
        : props.theme.colors.text.secondary};
    `}
  }
  
  /* Disabled state */
  ${props => props.disabled && css`
    cursor: not-allowed;
    background-color: ${props.theme.colors.background.secondary};
    opacity: 0.7;
  `}
`;

const IconContainer = styled.div<{ position: 'start' | 'end', size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.position === 'start' ? '0 0 0 10px' : '0 10px 0 0'};
  
  /* Adjust size based on input size */
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '14px';
      case 'large': return '20px';
      default: return '16px';
    }
  }};
`;

const StyledInput = styled.input<{
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  theme: Theme;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  width: 100%;
  
  /* Padding adjustments based on icons */
  padding-left: ${props => props.hasStartIcon ? '5px' : '10px'};
  padding-right: ${props => props.hasEndIcon ? '5px' : '10px'};
  
  /* Font size based on input size */
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '12px';
      case 'large': return '16px';
      default: return '14px';
    }
  }};
  
  color: ${props => props.disabled 
    ? props.theme.colors.text.disabled 
    : props.theme.colors.text.primary};
  
  &::placeholder {
    color: ${props => props.theme.colors.text.tertiary};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

const HelperText = styled.span<{ hasError?: boolean, size?: 'small' | 'medium' | 'large', theme: Theme }>`
  margin-top: 4px;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '10px';
      case 'large': return '14px';
      default: return '12px';
    }
  }};
  
  color: ${props => props.hasError 
    ? props.theme.colors.text.error 
    : props.theme.colors.text.secondary};
`;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  id,
  label,
  error,
  helperText,
  size = 'medium',
  disabled = false,
  placeholder,
  startIcon,
  endIcon,
  fullWidth = false,
  className,
  onChange,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (props.onFocus) props.onFocus(e);
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) props.onBlur(e);
  };
  
  return (
    <Container className={className} fullWidth={fullWidth} data-testid="textinput-container">
      {label && (
        <Label 
          htmlFor={inputId}
          disabled={disabled}
          size={size}
          theme={theme as Theme}
          data-testid="textinput-label"
        >
          {label}
        </Label>
      )}
      
      <InputWrapper
        hasError={hasError}
        disabled={disabled}
        isFocused={isFocused}
        size={size}
        hasStartIcon={!!startIcon}
        hasEndIcon={!!endIcon}
        theme={theme as Theme}
        data-testid="textinput-wrapper"
      >
        {startIcon && (
          <IconContainer position="start" size={size} data-testid="textinput-starticon">
            {startIcon}
          </IconContainer>
        )}
        
        <StyledInput
          id={inputId}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          hasStartIcon={!!startIcon}
          hasEndIcon={!!endIcon}
          size={size}
          theme={theme as Theme}
          data-testid="textinput-input"
          {...props}
        />
        
        {endIcon && (
          <IconContainer position="end" size={size} data-testid="textinput-endicon">
            {endIcon}
          </IconContainer>
        )}
      </InputWrapper>
      
      {(helperText || error) && (
        <HelperText 
          hasError={hasError} 
          size={size}
          theme={theme as Theme}
          data-testid="textinput-helpertext"
        >
          {error || helperText}
        </HelperText>
      )}
    </Container>
  );
});

TextInput.displayName = 'TextInput';