import React from 'react';
import {
  TouchableOpacityBox,
  Text,
  TouchableOpacityBoxProps,
  BoxProps,
} from '..';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  type?: 'primary' | 'ghost';
}

export function Button({title, type = 'primary', ...buttonProps}: ButtonProps) {
  const buttonStyle = getButtonPreset(type);
  return (
    <TouchableOpacityBox
      alignItems="center"
      padding="s12"
      borderRadius="s99"
      elevation={5}
      {...buttonStyle}
      {...buttonProps}>
      <Text color={type === 'primary' ? 'white' : 'gray200'} variant="medium">
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}

function getButtonPreset(type: string): BoxProps {
  switch (type) {
    case 'primary':
      return {
        backgroundColor: 'primary',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
      };
    case 'ghost':
      return {
        borderColor: 'gray100',
        borderWidth: 1,
      };
    default:
      return {
        backgroundColor: 'primary',
      };
  }
}
