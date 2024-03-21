import React from 'react';
import {
  GoogleIcon,
  HomeIcon,
  LocationIcon,
  SearchIcon,
  StarIcon,
  HeartIcon,
  ListIcon,
  CartIcon,
  UserIcon,
} from '../../assets';
import {useAppTheme} from '../../hooks';
import {ThemeColors, ThemeSpacing} from '../../theme';
import {Box} from '..';

export type IconNames = keyof typeof iconRegistry;

interface IconProps {
  icon: IconNames;
  size?: ThemeSpacing;
  color?: ThemeColors;
}

export interface IconBaseProps {
  size?: number;
  color?: string;
}

export function Icon({icon, size, color}: IconProps) {
  const theme = useAppTheme();
  const SVGIcon = iconRegistry[icon];
  const baseColor: string = theme.colors[color!];
  const baseSize = theme.spacing[size!];
  return (
    <Box height={baseSize}>
      <SVGIcon color={baseColor} size={baseSize || 20} />
    </Box>
  );
}

const iconRegistry = {
  google: GoogleIcon,
  location: LocationIcon,
  search: SearchIcon,
  star: StarIcon,
  home: HomeIcon,
  list: ListIcon,
  heart: HeartIcon,
  cart: CartIcon,
  user: UserIcon,
};
