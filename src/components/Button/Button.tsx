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
  LeftItem?: React.ReactNode;
}

export function Button({
  title,
  type = 'primary',
  LeftItem,
  ...buttonProps
}: ButtonProps) {
  const buttonStyle = getButtonPreset(type);
  return (
    <TouchableOpacityBox
      alignItems="center"
      padding="s12"
      borderRadius="s8"
      flexDirection="row"
      gap="s16"
      paddingHorizontal="s16"
      justifyContent={LeftItem ? undefined : 'center'}
      {...buttonStyle}
      {...buttonProps}>
      {LeftItem && LeftItem}
      <Text color={type === 'primary' ? 'white' : 'black'} variant="medium">
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
        shadowColor: 'gray200',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3.8,
        elevation: 5,
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
