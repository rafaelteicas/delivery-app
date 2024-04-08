import React from 'react';
import {Image, ListRenderItemInfo, StyleSheet} from 'react-native';

import {ItemProps} from '@data';
import {useFavorites, useFavoritesService} from '@services';
import {FlatList} from 'react-native-gesture-handler';

import {Box, Button, Screen, Text} from '@components';

export default function FavoritesScreen() {
  const favorites = useFavorites();
  const {removeFavorite} = useFavoritesService();

  function renderItem({item}: ListRenderItemInfo<ItemProps>) {
    return (
      <Box
        mt="s16"
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal="s16">
        <Box gap="s8">
          <Text variant="textMedium" fontWeight="bold" mt="s8">
            {item.name}
          </Text>
          <Text variant="textSmall" color="gray500">
            {item.price}
          </Text>
          {item.deliveryFee === 0 && (
            <Text variant="textSmall" fontWeight="bold" color="success">
              Frete Grátis
            </Text>
          )}
          <Box justifyContent="space-between" g="s12" mt="s12">
            <Button title="Adicionar ao carrinho" size="small" />
            <Button
              type="ghost"
              title="Remover dos favoritos"
              size="small"
              onPress={() => removeFavorite(item.id)}
            />
          </Box>
        </Box>
        <Image source={item.image} style={[styles.image]} />
      </Box>
    );
  }

  return (
    <Screen title="Favoritos" canGoBack noPaddingHorizontal>
      <FlatList
        data={favorites}
        keyExtractor={data => data.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {width: 180, height: 180, borderRadius: 16},
});
