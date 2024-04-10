import React from 'react';
import {Image, ListRenderItemInfo} from 'react-native';

import {CartProductProps, useCartService} from '@services';

import {Box, Button, Text} from '@components';

export function CartCard({item}: ListRenderItemInfo<CartProductProps>) {
  const {removeItem, incrementCartItem, decrementCartItem} = useCartService();

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
      p="s12"
      justifyContent="space-between"
      flexDirection="row"
      borderRadius="s12">
      <Box justifyContent="space-between">
        <Text variant="headingSmall">{item.product.name}</Text>
        <Text fontWeight="500">
          {item.product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
        <Box flexDirection="row">
          <Box
            mr="s16"
            borderColor="gray100"
            p="s8"
            borderWidth={1}
            borderRadius="s8"
            flexDirection="row"
            gap="s16">
            <Text onPress={() => decrementCartItem(item.product.id)}>-</Text>
            <Text>{item.quantity}</Text>
            <Text onPress={() => incrementCartItem(item.product.id)}>+</Text>
          </Box>
          <Button
            size="small"
            type="ghost"
            title="Remover"
            onPress={() => removeItem(item.product.id)}
          />
        </Box>
      </Box>
      <Image
        source={item.product.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: 12,
        }}
      />
    </Box>
  );
}
