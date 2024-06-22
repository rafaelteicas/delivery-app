import React from 'react';

import {Box, PressableBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';

export interface CheckBoxProps {
  isChecked: boolean;
  onPress: () => void;
}

export function CheckBox({isChecked, onPress}: CheckBoxProps) {
  return (
    <PressableBox
      width={20}
      height={20}
      borderWidth={1}
      borderRadius="s6"
      borderColor="gray200"
      alignItems="center"
      justifyContent="center"
      onPress={onPress}>
      {isChecked && (
        <Box backgroundColor="green500" borderRadius="s6">
          <Icon icon="arrowLeft" color="white" />
        </Box>
      )}
    </PressableBox>
  );
}
