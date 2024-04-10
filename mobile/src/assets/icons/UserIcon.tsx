import React from 'react';
import {Circle, Ellipse, Svg} from 'react-native-svg';
import {IconBaseProps} from '../../components';

export function UserIcon({color, size}: IconBaseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="6" r="4" fill={color} />
      <Ellipse cx="12" cy="17" rx="7" ry="4" fill={color} />
    </Svg>
  );
}
