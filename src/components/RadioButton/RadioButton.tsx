import React from 'react';

import {Box, PressableBox} from '..';

interface RadioButtonProps {
  selectedValue: boolean;
  onPress: () => void;
}

export function RadioButton({selectedValue, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      onPress={onPress}
      width={20}
      height={20}
      borderColor="gray100"
      borderWidth={1}
      borderRadius="s99"
      alignItems="center"
      justifyContent="center">
      {selectedValue && (
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
