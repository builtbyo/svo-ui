/**
 * Design tokens for the SVO-UI color system
 * Includes semantic colors, theme colors, and accessibility-compliant color scales
 */

// Base color palette
export const colors = {
  // Grays
  gray: {
    50: 'hsl(0 0% 98%)',
    100: 'hsl(0 0% 96%)',
    200: 'hsl(0 0% 93%)',
    300: 'hsl(0 0% 87%)',
    400: 'hsl(0 0% 72%)',
    500: 'hsl(0 0% 53%)',
    600: 'hsl(0 0% 42%)',
    700: 'hsl(0 0% 31%)',
    800: 'hsl(0 0% 21%)',
    900: 'hsl(0 0% 13%)',
    950: 'hsl(0 0% 6%)',
  },

  // Brand colors
  primary: {
    50: 'hsl(210 100% 98%)',
    100: 'hsl(210 100% 95%)',
    200: 'hsl(210 100% 90%)',
    300: 'hsl(210 100% 82%)',
    400: 'hsl(210 100% 70%)',
    500: 'hsl(210 100% 60%)',
    600: 'hsl(210 100% 50%)',
    700: 'hsl(210 100% 45%)',
    800: 'hsl(210 100% 35%)',
    900: 'hsl(210 100% 25%)',
    950: 'hsl(210 100% 15%)',
  },

  // Semantic colors
  success: {
    50: 'hsl(120 60% 97%)',
    100: 'hsl(120 60% 93%)',
    200: 'hsl(120 60% 87%)',
    300: 'hsl(120 60% 77%)',
    400: 'hsl(120 60% 65%)',
    500: 'hsl(120 60% 50%)',
    600: 'hsl(120 60% 40%)',
    700: 'hsl(120 60% 30%)',
    800: 'hsl(120 60% 22%)',
    900: 'hsl(120 60% 15%)',
    950: 'hsl(120 60% 10%)',
  },

  warning: {
    50: 'hsl(45 100% 97%)',
    100: 'hsl(45 100% 93%)',
    200: 'hsl(45 100% 87%)',
    300: 'hsl(45 100% 77%)',
    400: 'hsl(45 100% 65%)',
    500: 'hsl(45 100% 50%)',
    600: 'hsl(45 100% 40%)',
    700: 'hsl(45 100% 30%)',
    800: 'hsl(45 100% 22%)',
    900: 'hsl(45 100% 15%)',
    950: 'hsl(45 100% 10%)',
  },

  error: {
    50: 'hsl(0 60% 97%)',
    100: 'hsl(0 60% 93%)',
    200: 'hsl(0 60% 87%)',
    300: 'hsl(0 60% 77%)',
    400: 'hsl(0 60% 65%)',
    500: 'hsl(0 60% 50%)',
    600: 'hsl(0 60% 40%)',
    700: 'hsl(0 60% 30%)',
    800: 'hsl(0 60% 22%)',
    900: 'hsl(0 60% 15%)',
    950: 'hsl(0 60% 10%)',
  },

  info: {
    50: 'hsl(200 100% 97%)',
    100: 'hsl(200 100% 93%)',
    200: 'hsl(200 100% 87%)',
    300: 'hsl(200 100% 77%)',
    400: 'hsl(200 100% 65%)',
    500: 'hsl(200 100% 50%)',
    600: 'hsl(200 100% 40%)',
    700: 'hsl(200 100% 30%)',
    800: 'hsl(200 100% 22%)',
    900: 'hsl(200 100% 15%)',
    950: 'hsl(200 100% 10%)',
  },
} as const;

// Semantic color mappings for light theme
export const semanticColors = {
  background: {
    primary: colors.gray[50],
    secondary: colors.gray[100],
    tertiary: colors.gray[200],
  },
  foreground: {
    primary: colors.gray[900],
    secondary: colors.gray[700],
    tertiary: colors.gray[500],
  },
  border: {
    primary: colors.gray[300],
    secondary: colors.gray[200],
  },
  accent: {
    primary: colors.primary[600],
    secondary: colors.primary[100],
    foreground: colors.primary[50],
  },
  muted: {
    primary: colors.gray[100],
    foreground: colors.gray[600],
  },
} as const;

// Dark theme color overrides
export const semanticColorsDark = {
  background: {
    primary: colors.gray[950],
    secondary: colors.gray[900],
    tertiary: colors.gray[800],
  },
  foreground: {
    primary: colors.gray[50],
    secondary: colors.gray[300],
    tertiary: colors.gray[500],
  },
  border: {
    primary: colors.gray[700],
    secondary: colors.gray[800],
  },
  accent: {
    primary: colors.primary[500],
    secondary: colors.primary[900],
    foreground: colors.primary[50],
  },
  muted: {
    primary: colors.gray[800],
    foreground: colors.gray[400],
  },
} as const;

export type ColorScale = typeof colors.gray;
export type SemanticColors = typeof semanticColors;