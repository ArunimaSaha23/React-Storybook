import React, { useEffect, useState } from 'react';
import * as styled from 'styled-components';
import { ToastProps, ToastPosition, ToastVariant } from './Toast.types';

// Animations
const slideIn = styled.keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = styled.keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// Position styles
const getPositionStyles = (position: ToastPosition) => {
  switch (position) {
    case 'top-left':
      return styled.css`
        top: 1rem;
        left: 1rem;
      `;
    case 'top-right':
      return styled.css`
        top: 1rem;
        right: 1rem;
      `;
    case 'top-center':
      return styled.css`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'bottom-left':
      return styled.css`
        bottom: 1rem;
        left: 1rem;
      `;
    case 'bottom-center':
      return styled.css`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'bottom-right':
    default:
      return styled.css`
        bottom: 1rem;
        right: 1rem;
      `;
  }
};

// Variant styles
const getVariantStyles = (variant: ToastVariant) => {
  switch (variant) {
    case 'success':
      return styled.css`
        background-color: #10B981;
        color: white;
      `;
    case 'error':
      return styled.css`
        background-color: #EF4444;
        color: white;
      `;
    case 'warning':
      return styled.css`
        background-color: #F59E0B;
        color: white;
      `;
    case 'info':
    default:
      return styled.css`
        background-color: #3B82F6;
        color: white;
      `;
  }
};

// Styled components
const ToastContainer = styled.default.div<{
  $position: ToastPosition;
  $variant: ToastVariant;
  $isVisible: boolean;
}>`
  position: fixed;
  min-width: 300px;
  max-width: 400px;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  z-index: 1000;
  
  ${props => getPositionStyles(props.$position)}
  ${props => getVariantStyles(props.$variant)}
  
  animation: ${props => props.$isVisible ? slideIn : slideOut} 0.3s ease-in-out forwards;
`;

const ToastIcon = styled.default.div`
  flex-shrink: 0;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToastContent = styled.default.div`
  flex: 1;
`;

const ToastTitle = styled.default.h4`
  margin: 0 0 0.25rem;
  font-weight: 600;
  font-size: 1rem;
`;

const ToastMessage = styled.default.p`
  margin: 0;
  font-size: 0.875rem;
`;

const CloseButton = styled.default.button`
  background: transparent;
  border: none;
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }
`;

const Toast: React.FC<ToastProps> = ({
  variant = 'info',
  position = 'bottom-right',
  title,
  message,
  icon,
  autoClose = true,
  autoCloseTime = 5000,
  onClose,
  isOpen = false,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle opening and auto-closing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      
      if (autoClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseTime);
        
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, autoClose, autoCloseTime]);

  const handleClose = () => {
    setIsVisible(false);
    setIsAnimating(true);
    
    // Allow animation to complete before unmounting
    setTimeout(() => {
      setIsAnimating(false);
      if (onClose) onClose();
    }, 300); // Match animation duration
  };

  // Don't render if not visible and not animating
  if (!isVisible && !isAnimating) {
    return null;
  }

  return (
    <ToastContainer
      $position={position}
      $variant={variant}
      $isVisible={isVisible}
      role="alert"
      aria-live="assertive"
    >
      {icon && <ToastIcon>{icon}</ToastIcon>}
      
      <ToastContent>
        {title && <ToastTitle>{title}</ToastTitle>}
        {message && <ToastMessage>{message}</ToastMessage>}
      </ToastContent>
      
      <CloseButton 
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </CloseButton>
    </ToastContainer>
  );
};

export default Toast;