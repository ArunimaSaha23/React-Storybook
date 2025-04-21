import React from 'react';
import { Text, TextProps } from './Text';
import { headingDefaults } from './tokens';
import { FontSize,FontWeight,LineHeight,LetterSpacing } from './tokens';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Omit<TextProps, 'as'> {
  level: HeadingLevel;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  color = 'primary',
  className = '',
  ...rest
}) => {
  const defaults = headingDefaults[level];
  
  return (
    <Text
      as={level}
      fontSize={fontSize || defaults.fontSize as FontSize}
      fontWeight={fontWeight || defaults.fontWeight as FontWeight}
      lineHeight={lineHeight || defaults.lineHeight as LineHeight}
      letterSpacing={letterSpacing || defaults.letterSpacing as LetterSpacing}
      color={color}
      className={`typography-heading typography-${level} ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};

// Create convenience components for each heading level
export const H1: React.FC<Omit<HeadingProps, 'level'>> = (props) => <Heading level="h1" {...props} />;
export const H2: React.FC<Omit<HeadingProps, 'level'>> = (props) => <Heading level="h2" {...props} />;
export const H3: React.FC<Omit<HeadingProps, 'level'>> = (props) => <Heading level="h3" {...props} />;
export const H4: React.FC<Omit<HeadingProps, 'level'>> = (props) => <Heading level="h4" {...props} />;
export const H5: React.FC<Omit<HeadingProps, 'level'>> = (props) => <Heading level="h5" {...props} />;
export const H6: React.FC<Omit<HeadingProps, 'level'>> = (props) => <Heading level="h6" {...props} />;