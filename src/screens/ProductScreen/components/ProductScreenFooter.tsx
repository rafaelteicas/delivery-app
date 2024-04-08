import React from 'react';

import {Box, Button, Text} from '../../../components';

export function ProductScreenFooter() {
  return (
    <Box
      paddingHorizontal="s16"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Box
        mr="s16"
        borderColor="gray100"
        p="s12"
        borderWidth={1}
        borderRadius="s16"
        flexDirection="row"
        backgroundColor="white"
        gap="s16">
        <Text>-</Text>
        <Text>1</Text>
        <Text>+</Text>
      </Box>
      <Button title="Adicionar" flex={1} />
    </Box>
  );
}
