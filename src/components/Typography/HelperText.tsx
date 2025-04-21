import React from 'react';
import { Text, TextProps } from './Text';
import { textDefaults } from './tokens';
import { FontSize,FontWeight,LineHeight,LetterSpacing } from './tokens';

export interface HelperTextProps extends Omit<TextProps, 'as'> {
  error?: boolean;
}

export const HelperText: React.FC<HelperTextProps> = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color,
  className = '',
  error = false,
  ...rest
}) => {
  const defaults = textDefaults.helperText;
  
  // If error is true, override color to be error color
  const textColor = error ? 'error' : (color || 'tertiary');
  
  return (
    <Text
      as="span"
      fontSize={fontSize || defaults.fontSize as FontSize}
      fontWeight={fontWeight || defaults.fontWeight as FontWeight}
      lineHeight={lineHeight || defaults.lineHeight as LineHeight}
      letterSpacing={letterSpacing || defaults.letterSpacing as LetterSpacing}
      color={textColor as any}
      className={`typography-helper-text ${error ? 'typography-error' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};
