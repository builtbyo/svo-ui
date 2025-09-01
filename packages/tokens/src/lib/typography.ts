/**
 * Typography tokens for SVO-UI
 * Includes font families, sizes, weights, and line heights
 */

// Font families
export const fontFamilies = {
  sans: [
    'ui-sans-serif',
    'system-ui',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    '"Roboto Mono"',
    '"Liberation Mono"',
    'Consolas',
    'monospace'
  ],
} as const;

// Font sizes with rem values
export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
  '8xl': '6rem',    // 96px
  '9xl': '8rem',    // 128px
} as const;

// Font weights
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

// Line heights
export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
} as const;

// Letter spacing
export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// Typography scale combining size, line height, and letter spacing
export const typographyScale = {
  // Display styles
  'display-2xl': {
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacings.tighter,
    fontWeight: fontWeights.bold,
  },
  'display-xl': {
    fontSize: fontSizes['7xl'],
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacings.tighter,
    fontWeight: fontWeights.bold,
  },
  'display-lg': {
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacings.tighter,
    fontWeight: fontWeights.bold,
  },
  'display-md': {
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacings.tight,
    fontWeight: fontWeights.bold,
  },
  'display-sm': {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.tight,
    fontWeight: fontWeights.bold,
  },
  'display-xs': {
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.bold,
  },

  // Heading styles
  'heading-xl': {
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.bold,
  },
  'heading-lg': {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.bold,
  },
  'heading-md': {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.bold,
  },
  'heading-sm': {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.bold,
  },
  'heading-xs': {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.bold,
  },

  // Body text styles
  'body-xl': {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.normal,
  },
  'body-lg': {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.normal,
  },
  'body-md': {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.normal,
  },
  'body-sm': {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.normal,
  },
  'body-xs': {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.wide,
    fontWeight: fontWeights.normal,
  },

  // Label styles
  'label-xl': {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.medium,
  },
  'label-lg': {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.medium,
  },
  'label-md': {
    fontSize: fontSizes.base,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.medium,
  },
  'label-sm': {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.normal,
    fontWeight: fontWeights.medium,
  },
  'label-xs': {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacings.wide,
    fontWeight: fontWeights.medium,
  },
} as const;

export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacings;
export type TypographyScale = keyof typeof typographyScale;