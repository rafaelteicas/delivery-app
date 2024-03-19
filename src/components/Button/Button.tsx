import React from 'react';
import {TouchableOpacityBox, Text, TouchableOpacityBoxProps} from '..';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
}

export function Button({title, ...buttonProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      backgroundColor="primary"
      padding="s12"
      borderRadius="s99"
      {...buttonProps}>
      <Text color="white" variant="medium">
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
