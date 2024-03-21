import React from 'react';
import {Box, Icon, Text} from '..';

export function AppHeader() {
  return (
    <Box
      flexDirection="row"
      paddingRight="s16"
      justifyContent="space-between"
      alignItems="center">
      <Box gap="s4">
        <Text variant="textSmall">Localização</Text>
        <Box flexDirection="row" alignItems="center" gap="s4">
          <Icon icon="location" size="s16" />
          <Text variant="headingSmall">Localização</Text>
        </Box>
      </Box>
      <Box
        width={50}
        height={50}
        backgroundColor="gray500"
        borderRadius="s99"
      />
    </Box>
  );
}
