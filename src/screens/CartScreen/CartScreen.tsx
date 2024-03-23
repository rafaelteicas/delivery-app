import React from 'react';
import {Box, Button, Screen, Text} from '../../components';
import {CartCard} from './components/CartCard';

export function CartScreen() {
  return (
    <Screen title="Carrinho" canGoBack noPaddingHorizontal>
      <Box flex={1} pt="s16" g="s16" paddingHorizontal="s16">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </Box>
      <Box
        backgroundColor="white"
        paddingHorizontal="s16"
        paddingVertical="s8"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text variant="textSmall">
          Valor total:{' '}
          <Text color="orange500" fontWeight="bold">
            R$19.99
          </Text>
        </Text>
        <Button title="Finalizar compra" />
      </Box>
    </Screen>
  );
}
