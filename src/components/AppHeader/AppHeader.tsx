import React from 'react';
import {Box, BoxProps, Icon, Text} from '..';

export function AppHeader() {
  return (
    <Box {...$boxStyles}>
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

const $boxStyles: BoxProps = {
  flexDirection: 'row',
  paddingRight: 's16',
  justifyContent: 'space-between',
  alignItems: 'center',
};
