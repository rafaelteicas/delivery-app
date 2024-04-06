import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {Box, Button, Screen, Text} from '@components';

export default function FavoritesScreen() {
  return (
    <Screen title="Favoritos" canGoBack noPaddingHorizontal>
      <Box
        mt="s16"
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal="s16">
        <Box gap="s8">
          <Text variant="textMedium" fontWeight="bold" mt="s8">
            Hamburguer
          </Text>
          <Text variant="textSmall" color="gray500">
            R$ 18.99
          </Text>
          <Text variant="textSmall" fontWeight="bold" color="success">
            Frete Grátis
          </Text>
          <Box justifyContent="space-between" g="s12" mt="s12">
            <Button title="Adicionar ao carrinho" size="small" />
            <Button type="ghost" title="Remover dos favoritos" size="small" />
          </Box>
        </Box>
        <Image
          source={require('../../assets/images/foods/hamburger.webp')}
          style={[styles.image]}
        />
      </Box>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {width: 180, height: 180, borderRadius: 16},
});
