import React from 'react';

import {PressableBox} from '..';
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
  ArrowLeftIcon,
} from '../../assets';
import {useAppTheme} from '../../hooks';
import {ThemeColors, ThemeSpacing} from '../../theme';

export type IconNames = keyof typeof iconRegistry;

interface IconProps {
  icon: IconNames;
  size?: ThemeSpacing;
  color?: ThemeColors;
  onPress?: () => void;
}

export interface IconBaseProps {
  size?: number;
  color?: string;
}

export function Icon({icon, size, color, onPress}: IconProps) {
  const theme = useAppTheme();
  const SVGIcon = iconRegistry[icon];
  const baseColor: string = theme.colors[color!];
  const baseSize = theme.spacing[size!];

  return (
    <PressableBox height={baseSize} onPress={onPress} disabled={!onPress}>
      <SVGIcon color={baseColor} size={baseSize || 20} />
    </PressableBox>
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
  arrowLeft: ArrowLeftIcon,
};
