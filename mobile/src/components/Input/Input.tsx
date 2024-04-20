import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import {Box, BoxProps} from '../Box/Box';

interface InputProps extends TextInputProps {
  placeholder: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
  boxProps?: BoxProps;
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {placeholder, LeftComponent, RightComponent, boxProps, ...textInputProps},
    ref,
  ) => {
    return (
      <Box {...boxProps} {...$inputBox}>
        {LeftComponent && (
          <Box pr="s8" alignItems="center">
            <Box {...$leftComponentBox}>{LeftComponent}</Box>
          </Box>
        )}
        <TextInput
          ref={ref}
          placeholder={placeholder}
          style={styles.input}
          {...textInputProps}
        />

        {RightComponent && (
          <Box pl="s8" alignItems="center">
            <Box {...$rightComponent}>{RightComponent}</Box>
          </Box>
        )}
      </Box>
    );
  },
);

const $inputBox: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderColor: 'gray100',
  padding: 's12',
  borderWidth: 1,
  borderRadius: 's8',
  backgroundColor: 'white',
};

const $rightComponent: BoxProps = {
  borderLeftWidth: 2,
  pl: 's8',
  flex: 1,
  justifyContent: 'center',
  borderColor: 'gray100',
};

const $leftComponentBox: BoxProps = {
  borderRightWidth: 2,
  pr: 's8',
  flex: 1,
  justifyContent: 'center',
  borderColor: 'gray100',
};

const styles = StyleSheet.create({
  input: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
