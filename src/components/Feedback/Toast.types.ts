import { ReactNode } from 'react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastProps {
  /**
   * The variant determines the color scheme of the toast
   * @default 'info'
   */
  variant?: ToastVariant;
  
  /**
   * Where the toast should appear on the screen
   * @default 'bottom-right'
   */
  position?: ToastPosition;
  
  /**
   * The title text of the toast
   */
  title?: string;
  
  /**
   * The body message of the toast
   */
  message?: string;
  
  /**
   * Optional icon element to display
   */
  icon?: ReactNode;
  
  /**
   * Whether the toast should automatically close after a certain time
   * @default true
   */
  autoClose?: boolean;
  
  /**
   * Time in milliseconds after which the toast will auto-close
   * @default 5000
   */
  autoCloseTime?: number;
  
  /**
   * Callback function when the toast is closed
   */
  onClose?: () => void;
  
  /**
   * Controls the visibility of the toast
   * @default false
   */
  isOpen?: boolean;
}

// For toast manager (if needed)
export interface ToastContextProps {
  addToast: (props: Omit<ToastProps, 'isOpen'>) => string;
  removeToast: (id: string) => void;
  updateToast: (id: string, props: Partial<ToastProps>) => void;
  removeAll: () => void;
}