import React from 'react';
import {
  FontSize, FontWeight, LineHeight, LetterSpacing,
  fontSizes, fontWeights, lineHeights, letterSpacings
} from './tokens';
import { useTheme } from '../../themes/ThemeProvider';
export interface TextBaseProps {
  children: React.ReactNode;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  color?: 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'error' | 'success' | 'warning';
  className?: string;
}

// 👇 This makes `as` generic & spreads native props
export type TextProps<T extends React.ElementType = 'span'> = TextBaseProps & {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Text = <T extends React.ElementType = 'span'>({
  as,
  children,
  fontSize = 'base',
  fontWeight = 'normal',
  lineHeight = 'normal',
  letterSpacing = 'normal',
  color = 'primary',
  className = '',
  ...rest
}: TextProps<T>) => {
  const Component = as || 'span';
  const { theme } = useTheme();

  const style = {
    fontSize: fontSizes[fontSize],
    fontWeight: fontWeights[fontWeight],
    lineHeight: lineHeights[lineHeight],
    letterSpacing: letterSpacings[letterSpacing],
    color: theme.colors.text[color],
  };

  return (
    <Component
      className={`typography-text ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
};
