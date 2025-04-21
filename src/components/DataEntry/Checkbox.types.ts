import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The label text to display next to the checkbox
   */
  label?: string;
  
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the checkbox is in an error state
   * @default false
   */
  error?: boolean;
  
  /**
   * The size of the checkbox
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether the checkbox is in an indeterminate state
   * @default false
   */
  indeterminate?: boolean;
  
  /**
   * Handler called when the checkbox's checked state changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Additional className to apply to the checkbox container
   */
  className?: string;
}