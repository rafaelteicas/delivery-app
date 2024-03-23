import React from 'react';
import {
  AllProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  shadow,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = AllProps<Theme>;

export type TouchableOpacityBoxProps = RestyleTypes & TouchableOpacityProps;
export type PressableBoxProps = RestyleTypes & PressableProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, border, layout, shadow],
  TouchableOpacity,
);

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, border, layout, shadow],
  Pressable,
);
