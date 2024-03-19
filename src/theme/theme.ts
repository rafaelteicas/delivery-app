import {createTheme} from '@shopify/restyle';
import {themeColors, radii, spaces} from './tokens';

export const theme = createTheme({
  colors: themeColors,
  spacing: spaces,
  borderRadii: radii,
  textVariants: {
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
