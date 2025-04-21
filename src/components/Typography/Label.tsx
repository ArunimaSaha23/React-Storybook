import React from 'react';
import { Text, TextProps } from './Text';
import { textDefaults } from './tokens';
import { FontSize,FontWeight,LineHeight,LetterSpacing } from './tokens';

export interface LabelProps extends Omit<TextProps, 'as'> {
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color = 'primary',
  className = '',
  htmlFor,
  ...rest
}) => {
  const defaults = textDefaults.label;
  
  return (
    <Text
      as="label"
      fontSize={fontSize || defaults.fontSize as FontSize}
      fontWeight={fontWeight || defaults.fontWeight as FontWeight}
      lineHeight={lineHeight || defaults.lineHeight as LineHeight}
      letterSpacing={letterSpacing || defaults.letterSpacing as LetterSpacing}
      color={color}
      className={`typography-label ${className}`}
      {...rest}
    >
      <label htmlFor={htmlFor}>{children}</label>
    </Text>
  );
};