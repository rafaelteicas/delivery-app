import {createTheme} from '@shopify/restyle';
import {themeColors, radii, spaces} from './tokens';

export const theme = createTheme({
  colors: themeColors,
  spacing: spaces,
  borderRadii: radii,
  textVariants: {
    headingMedium: {
      fontWeight: '700',
      fontSize: spaces.s20,
      color: 'heading',
    },
    headingSmall: {
      fontWeight: '700',
      fontSize: 14,
      color: 'heading',
    },
    textMedium: {
      fontWeight: '600',
      fontSize: spaces.s16,
      color: 'heading',
    },
    textSmall: {
      fontSize: spaces.s12,
      color: 'paragraph',
      fontWeight: '400',
    },
    defaults: {
      fontWeight: '500',
      fontSize: 14,
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
