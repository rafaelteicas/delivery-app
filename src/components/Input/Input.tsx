import React from 'react';
import {Box, BoxProps} from '..';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  boxProps?: BoxProps;
}

export function Input({
  placeholder,
  LeftComponent,
  RightComponent,
  boxProps,
  ...textInputProps
}: InputProps) {
  return (
    <Box {...boxProps} {...$inputBoxStyles}>
      {LeftComponent && (
        <Box pr="s8" alignItems="center">
          <Box
            borderRightWidth={2}
            pr="s8"
            flex={1}
            justifyContent="center"
            borderColor="gray100">
            {LeftComponent}
          </Box>
        </Box>
      )}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...textInputProps}
      />

      {RightComponent && (
        <Box pl="s8" alignItems="center">
          <Box
            borderLeftWidth={2}
            pl="s8"
            flex={1}
            justifyContent="center"
            borderColor="gray100">
            {RightComponent}
          </Box>
        </Box>
      )}
    </Box>
  );
}

const $inputBoxStyles: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderColor: 'gray100',
  padding: 's12',
  borderWidth: 1,
  borderRadius: 's8',
  backgroundColor: 'white',
};

const styles = StyleSheet.create({
  input: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
