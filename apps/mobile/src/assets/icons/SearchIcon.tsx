import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconBaseProps} from '../../components';

export function SearchIcon({size, color}: IconBaseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 17L21 21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={color}
        stroke-width="2"
      />
    </Svg>
  );
}
