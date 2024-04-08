import React from 'react';

import {Box, Text} from '../../../components';

export function ProductScreenHeader() {
  return (
    <Box paddingHorizontal="s16" paddingVertical="s16" g="s12">
      <Text variant="headingMedium">Hambúrguer</Text>
      <Text variant="textSmall">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
        quaerat laboriosam a, dolore numquam, maiores quam ab impedit molestias
        blanditiis placeat facere illo vero voluptatem ullam recusandae aut.
        Aliquid, eligendi!
      </Text>
    </Box>
  );
}
