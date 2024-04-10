import React from 'react';

import {Box, PressableBox} from '..';

export interface RadioButtonProps {
  isSelected: boolean;
  onPress: () => void;
}

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      onPress={onPress}
      width={20}
      height={20}
      borderColor={isSelected ? 'primary' : 'gray100'}
      borderWidth={isSelected ? 2 : 1}
      borderRadius="s99"
      alignItems="center"
      justifyContent="center">
      {isSelected && (
        <Box
          width={10}
          height={10}
          backgroundColor="orange500"
          borderRadius="s99"
        />
      )}
    </PressableBox>
  );
}
