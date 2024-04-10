import React from 'react';
import {ImageBackground, ListRenderItemInfo, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useFavoritesService} from '@services';

import {Box, BoxProps, Icon, PressableBox, Text, TouchableOpacityBox} from '..';
import {ItemProps} from '../../data/mockedItemData';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils';

export function Card({item}: ListRenderItemInfo<ItemProps>) {
  const {addFavorite} = useFavoritesService();

  const {navigate} = useNavigation();
  function navigateToProduct() {
    navigate('ProductScreen', {
      productId: item.id.toString(),
    });
  }
  return (
    <Box {...$cardBox}>
      <PressableBox onPress={navigateToProduct}>
        <ImageBackground
          borderTopLeftRadius={12}
          borderTopRightRadius={12}
          source={item.image}
          style={styles.imageBackground}>
          <TouchableOpacityBox
            style={styles.favoriteBox}
            onPress={() => addFavorite(item)}>
            <Icon icon="heart" color="error" />
          </TouchableOpacityBox>

          <Box {...$badgeBox}>
            <Icon icon="star" color="orange600" size="s16" />
            <Text variant="textSmall" fontWeight="600" color="gray500">
              {item.rating}
            </Text>
          </Box>
        </ImageBackground>
      </PressableBox>
      <Box pl="s8">
        <Text fontWeight="bold">{item.name}</Text>
        <Box flexDirection="row" g="s8">
          <Text variant="textSmall">{item.timeToDeliverInSeconds} -</Text>
          <Text variant="textSmall" color="gray500" fontWeight="600">
            {item.deliveryFee === 0 ? 'Frete Grátis' : item.deliveryFee}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const $cardBox: BoxProps = {
  width: SCREEN_WIDTH * 0.4,
  borderColor: 'gray100',
  borderWidth: 1,
  borderRadius: 's12',
  gap: 's8',
  pb: 's8',
};

const $badgeBox: BoxProps = {
  backgroundColor: 'white',
  bottom: 12,
  right: 12,
  p: 's4',
  borderRadius: 's99',
  flexDirection: 'row',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  imageBackground: {
    height: SCREEN_HEIGHT / 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  favoriteBox: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
});
