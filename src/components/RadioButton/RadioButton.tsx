import React, {useState} from 'react';
import {Box, PressableBox} from '..';

interface RadioButtonProps {
  index: number;
}

export function RadioButton({index}: RadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  function handleSelectedValue() {
    setSelectedValue(index);
  }

  return (
    <PressableBox
      onPress={handleSelectedValue}
      width={20}
      height={20}
      borderColor="gray100"
      borderWidth={1}
      borderRadius="s99"
      alignItems="center"
      justifyContent="center">
      {selectedValue === index && (
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
