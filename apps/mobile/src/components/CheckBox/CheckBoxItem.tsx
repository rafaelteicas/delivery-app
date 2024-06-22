import React from 'react';

import {formatPrice} from '@utils';

import {Box} from '../Box/Box';
import {Separator} from '../Separator/Separator';
import {Text} from '../Text/Text';

import {CheckBox, CheckBoxProps} from './CheckBox';

interface CheckBoxItemProps extends CheckBoxProps {
  title: string;
  price?: number;
}

export function CheckBoxItem({
  title,
  price,
  ...checkBoxProps
}: CheckBoxItemProps) {
  return (
    <Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p="s16">
        <Box>
          <Text>{title}</Text>
          {price ? (
            <Text variant="textSmall">{formatPrice(price)}</Text>
          ) : (
            <Text variant="textSmall" fontWeight="bold" color="green500">
              GRÁTIS
            </Text>
          )}
        </Box>
        <CheckBox {...checkBoxProps} />
      </Box>
      <Separator />
    </Box>
  );
}
