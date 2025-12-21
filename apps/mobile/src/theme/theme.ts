import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { lightColors, darkColors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, elevation } from './spacing';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: lightColors.primary,
    primaryContainer: lightColors.primaryVariant,
    secondary: lightColors.secondary,
    secondaryContainer: lightColors.secondaryVariant,
    background: lightColors.background,
    surface: lightColors.surface,
    surfaceVariant: lightColors.surfaceVariant,
    error: lightColors.error,
    errorContainer: lightColors.error,
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: lightColors.text,
    onSurface: lightColors.text,
    onError: '#FFFFFF',
    outline: lightColors.border,
    outlineVariant: lightColors.divider,
    inverseSurface: darkColors.surface,
    inverseOnSurface: darkColors.text,
    inversePrimary: darkColors.primary,
    backdrop: lightColors.backdrop,
    elevation: {
      level0: 'transparent',
      level1: lightColors.surface,
      level2: lightColors.surface,
      level3: lightColors.surface,
      level4: lightColors.surface,
      level5: lightColors.surface,
    },
  },
  custom: {
    colors: lightColors,
    typography,
    spacing,
    borderRadius,
    elevation,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: darkColors.primary,
    primaryContainer: darkColors.primaryVariant,
    secondary: darkColors.secondary,
    secondaryContainer: darkColors.secondaryVariant,
    background: darkColors.background,
    surface: darkColors.surface,
    surfaceVariant: darkColors.surfaceVariant,
    error: darkColors.error,
    errorContainer: darkColors.error,
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: darkColors.text,
    onSurface: darkColors.text,
    onError: '#000000',
    outline: darkColors.border,
    outlineVariant: darkColors.divider,
    inverseSurface: lightColors.surface,
    inverseOnSurface: lightColors.text,
    inversePrimary: lightColors.primary,
    backdrop: darkColors.backdrop,
    elevation: {
      level0: 'transparent',
      level1: darkColors.surface,
      level2: darkColors.surfaceVariant,
      level3: '#2F2F2F',
      level4: '#353535',
      level5: '#3B3B3B',
    },
  },
  custom: {
    colors: darkColors,
    typography,
    spacing,
    borderRadius,
    elevation,
  },
};

export type AppTheme = typeof lightTheme;
