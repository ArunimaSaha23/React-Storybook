// src/tokens/typography.ts

export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type LineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
export type LetterSpacing = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

// Font sizes in rem units
export const fontSizes: Record<FontSize, string> = {
  'xs': '0.75rem',    // 12px
  'sm': '0.875rem',   // 14px
  'base': '1rem',     // 16px
  'lg': '1.125rem',   // 18px
  'xl': '1.25rem',    // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
};

// Font weights
export const fontWeights: Record<FontWeight, number> = {
  'light': 300,
  'normal': 400,
  'medium': 500,
  'semibold': 600,
  'bold': 700,
};

// Line heights
export const lineHeights: Record<LineHeight, string | number> = {
  'none': 1,
  'tight': 1.25,
  'snug': 1.375,
  'normal': 1.5,
  'relaxed': 1.625,
  'loose': 2,
};

// Letter spacing
export const letterSpacings: Record<LetterSpacing, string> = {
  'tighter': '-0.05em',
  'tight': '-0.025em',
  'normal': '0em',
  'wide': '0.025em',
  'wider': '0.05em',
  'widest': '0.1em',
};

// Heading configurations (default values)
export const headingDefaults = {
  h1: {
    fontSize: '6xl',
    fontWeight: 'bold',
    lineHeight: 'tight',
    letterSpacing: 'tight',
  },
  h2: {
    fontSize: '5xl',
    fontWeight: 'bold',
    lineHeight: 'tight',
    letterSpacing: 'tight',
  },
  h3: {
    fontSize: '4xl',
    fontWeight: 'semibold',
    lineHeight: 'tight',
    letterSpacing: 'tight',
  },
  h4: {
    fontSize: '3xl',
    fontWeight: 'semibold',
    lineHeight: 'snug',
    letterSpacing: 'normal',
  },
  h5: {
    fontSize: '2xl',
    fontWeight: 'medium',
    lineHeight: 'snug',
    letterSpacing: 'normal',
  },
  h6: {
    fontSize: 'xl',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
};

// Paragraph, Label, Caption, and Helper Text defaults
export const textDefaults = {
  paragraph: {
    fontSize: 'base',
    fontWeight: 'normal',
    lineHeight: 'relaxed',
    letterSpacing: 'normal',
  },
  label: {
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: 'normal',
    letterSpacing: 'wide',
  },
  caption: {
    fontSize: 'xs',
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
  helperText: {
    fontSize: 'xs',
    fontWeight: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
  },
};