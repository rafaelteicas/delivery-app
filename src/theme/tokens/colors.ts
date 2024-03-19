const colors = {
  white: '#FFFFFF',
  black: '#000000',

  orange500: '#F58321',

  gray100: '#eaeaea',
  gray200: '#A3A3A3',
  gray500: '#262626',
};

export const themeColors = {
  mainBackground: colors.white,
  onBackground: colors.black,

  primary: colors.orange500,

  paragraph: colors.gray200,
  heading: colors.gray500,

  ...colors,
};
