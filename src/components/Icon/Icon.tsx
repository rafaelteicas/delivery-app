import React from 'react';
import {GoogleIcon} from '../../assets';

interface IconProps {
  icon: keyof typeof iconRegistry;
}

export function Icon({icon}: IconProps) {
  const SVGIcon = iconRegistry[icon];
  return <SVGIcon />;
}

const iconRegistry = {
  google: GoogleIcon,
};
