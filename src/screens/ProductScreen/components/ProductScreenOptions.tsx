import React from 'react';

import {Box, RadioButton, Text} from '../../../components';

export interface OptionsProps {
  title: string;
  value: number;
}

interface ProductScreenOptions {
  data: OptionsProps[];
}

export function ProductScreenOptions({data}: ProductScreenOptions) {
  return (
    <>
      <Box p="s16" backgroundColor="gray100">
        <Text variant="headingSmall" color="gray500">
          Opções
        </Text>
      </Box>
      {data.map((item, i) => (
        <Box
          key={item.title}
          p="s16"
          borderBottomColor="gray100"
          borderBottomWidth={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text color="gray500">{item.title}</Text>
          <RadioButton index={i} />
        </Box>
      ))}
    </>
  );
}
