import React from 'react';

import {formatPrice} from '@utils';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

import {RadioButton, RadioButtonProps} from './RadioButton';

interface RadioItemProps extends RadioButtonProps {
  title: string;
  price?: number;
}

export function RadioItem({title, price, ...radioButtonProps}: RadioItemProps) {
  return (
    <Box
      p="s16"
      borderBottomColor="gray100"
      borderBottomWidth={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Box>
        <Text color="gray500">{title}</Text>
        {price ? (
          <Text variant="textSmall">{formatPrice(price)}</Text>
        ) : (
          <Text variant="textSmall">{formatPrice(0)}</Text>
        )}
      </Box>
      <RadioButton {...radioButtonProps} />
    </Box>
  );
}
