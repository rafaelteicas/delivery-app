import React from 'react';
import {StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useCart} from '@services';
import {FlatList} from 'react-native-gesture-handler';

import {Box, Button, Screen, Text, TouchableOpacityBox} from '@components';

import {CartCard} from './components/CartCard';

export function CartScreen() {
  const items = useCart();

  const totalPrice = items.reduce((prev, curr) => {
    return prev + curr.product.price * curr.quantity;
  }, 0);

  return (
    <Screen title="Carrinho" canGoBack noPaddingHorizontal>
      <Box flex={1} pt="s16" g="s16" paddingHorizontal="s16">
        <FlatList
          data={items}
          renderItem={item => <CartCard {...item} />}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={EmptyComponentCart}
        />
      </Box>
      {totalPrice > 0 && (
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
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </Text>
          <Button title="Finalizar compra" />
        </Box>
      )}
    </Screen>
  );
}

function EmptyComponentCart() {
  const {navigate} = useNavigation();
  function handleNavigateToHome() {
    navigate('HomeScreen');
  }

  return (
    <Box justifyContent="center" alignItems="center" flex={1}>
      <Text>Não há items no seu carrinho</Text>
      <TouchableOpacityBox mt="s4" onPress={handleNavigateToHome}>
        <Text variant="headingSmall" color="primary">
          Adicione
        </Text>
      </TouchableOpacityBox>
    </Box>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    gap: 20,
  },
});
