import React from 'react';
import { Text, TextProps } from './Text';
import { textDefaults } from './tokens';
import { FontSize,FontWeight,LineHeight,LetterSpacing } from './tokens';

export const Paragraph: React.FC<Omit<TextProps, 'as'>> = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color = 'primary',
  className = '',
  ...rest
}) => {
  const defaults = textDefaults.paragraph;
  
  return (
    <Text
      as="p"
      fontSize={fontSize || defaults.fontSize as FontSize}
      fontWeight={fontWeight || defaults.fontWeight as FontWeight}
      lineHeight={lineHeight || defaults.lineHeight as LineHeight}
      letterSpacing={letterSpacing || defaults.letterSpacing as LetterSpacing}
      color={color}
      className={`typography-paragraph ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};