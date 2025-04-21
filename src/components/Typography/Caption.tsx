import React from 'react';
import { Text, TextProps } from './Text';
import { textDefaults } from './tokens';
import { FontSize,FontWeight,LineHeight,LetterSpacing } from './tokens';

export const Caption: React.FC<Omit<TextProps, 'as'>> = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color = 'tertiary',
  className = '',
  ...rest
}) => {
  const defaults = textDefaults.caption;
  
  return (
    <Text
      as="span"
      fontSize={fontSize || defaults.fontSize as FontSize}
      fontWeight={fontWeight || defaults.fontWeight as FontWeight}
      lineHeight={lineHeight || defaults.lineHeight as LineHeight}
      letterSpacing={letterSpacing || defaults.letterSpacing as LetterSpacing}
      color={color}
      className={`typography-caption ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};