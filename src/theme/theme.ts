import {createTheme} from '@shopify/restyle';
import {themeColors, radii, spaces} from './tokens';

export const theme = createTheme({
  colors: themeColors,
  spacing: spaces,
  borderRadii: radii,
  textVariants: {
    small: {
      fontSize: spaces.s12,
    },
    medium: {
      fontWeight: 'medium',
      fontSize: spaces.s16,
    },
    defaults: {
      fontWeight: 'normal',
      fontSize: spaces.s16,
    },
  },
});

export type Theme = typeof theme;
