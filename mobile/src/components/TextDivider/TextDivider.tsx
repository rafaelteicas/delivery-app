import React from 'react';
import {Box, Text} from '..';

interface Props {
  label: string;
}

export function TextDivider({label}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" gap="s20">
      <Box height={1} flex={1} backgroundColor="gray200" />
      <Text variant="textSmall" color="gray200">
        {label}
      </Text>
      <Box height={1} flex={1} backgroundColor="gray200" />
    </Box>
  );
}
