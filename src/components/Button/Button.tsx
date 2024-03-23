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
  size?: 'normal' | 'small';
}

export function Button({
  title,
  type = 'primary',
  LeftItem,
  size = 'normal',
  ...buttonProps
}: ButtonProps) {
  const buttonStyle = getButtonPreset(type);
  return (
    <TouchableOpacityBox
      padding={size === 'normal' ? 's12' : 's8'}
      justifyContent={LeftItem ? undefined : 'center'}
      {...$defaultButtonStyle}
      {...buttonStyle}
      {...buttonProps}>
      {LeftItem && LeftItem}
      <Text
        color={type === 'primary' ? 'white' : 'black'}
        variant={size === 'normal' ? 'textMedium' : 'textSmall'}>
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

const $defaultButtonStyle: BoxProps = {
  alignItems: 'center',
  borderRadius: 's8',
  flexDirection: 'row',
  gap: 's16',
  paddingHorizontal: 's16',
};
