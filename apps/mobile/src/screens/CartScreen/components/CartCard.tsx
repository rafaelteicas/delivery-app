import React from 'react';
import {Image, ListRenderItemInfo} from 'react-native';

import {CartItemProps} from '@domain';
import {useCartService} from '@services';
import {formatPrice} from '@utils';

import {Box, Button, Separator, Text} from '@components';

export function CartCard({item}: ListRenderItemInfo<CartItemProps>) {
  const {removeItem, incrementCartItem, decrementCartItem} = useCartService();

  const hasExtraItems = !!item.item.optionals || !!item.item.additional;

  return (
    <Box
      elevation={5}
      shadowColor="gray200"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.4}
      shadowRadius={3.0}
      backgroundColor="white"
      py="s12"
      gap="s12"
      borderRadius="s12">
      <Box px="s12" justifyContent="space-between" flexDirection="row">
        <Box justifyContent="space-between">
          <Text variant="headingSmall">{item.item.name}</Text>
          <Text fontWeight="500">{formatPrice(item.item.price)}</Text>
          <Box flexDirection="row">
            <Box
              mr="s16"
              borderColor="gray100"
              p="s8"
              borderWidth={1}
              borderRadius="s8"
              flexDirection="row"
              gap="s16">
              <Text onPress={() => decrementCartItem(item.item.id)}>-</Text>
              <Text>{item.quantity}</Text>
              <Text onPress={() => incrementCartItem(item.item.id)}>+</Text>
            </Box>
            <Button
              size="small"
              type="ghost"
              title="Remover"
              onPress={() => removeItem(item.item.id)}
            />
          </Box>
        </Box>
        <Image
          source={item.item.image}
          style={{
            width: 100,
            height: 100,
            borderRadius: 12,
          }}
        />
      </Box>
      {hasExtraItems && (
        <>
          <Separator />
          <Box px="s12">
            <Text>a</Text>
          </Box>
        </>
      )}
    </Box>
  );
}
