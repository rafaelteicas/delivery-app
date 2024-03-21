import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {IconBaseProps} from '../../components';

export function ListIcon({color, size}: IconBaseProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 1024 1024">
      <Path
        fill={color}
        d="M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
      />
    </Svg>
  );
}
