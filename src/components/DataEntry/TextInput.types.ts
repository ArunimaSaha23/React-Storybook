import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the input
   */
  label?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Helper text to display below input
   */
  helperText?: string;
  
  /**
   * Size of the input
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether the input is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Icon to display at the start of input
   */
  startIcon?: ReactNode;
  
  /**
   * Icon to display at the end of input
   */
  endIcon?: ReactNode;
  
  /**
   * Full width of container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Custom class name for the container
   */
  className?: string;
  
  /**
   * Called when input value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}