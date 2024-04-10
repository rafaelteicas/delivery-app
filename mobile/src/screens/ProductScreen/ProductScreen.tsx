import React from 'react';
import {ImageBackground} from 'react-native';

import {mockedItems} from '@data';
import {useNavigation} from '@react-navigation/native';
import {useCartService} from '@services';
import {SCREEN_HEIGHT} from '@utils';

import {Box, Icon, PressableBox, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppStackProps} from '@routes';

import {ProductScreenFooter} from './components/ProductScreenFooter';
import {ProductScreenHeader} from './components/ProductScreenHeader';
import {ProductScreenOptions} from './components/ProductScreenOptions';

export function ProductScreen({route}: AppStackProps<'ProductScreen'>) {
  const {bottom, top} = useAppSafeArea();
  const {goBack} = useNavigation();

  const data = mockedItems.filter(
    item => item.id.toString() === route.params.productId.toString(),
  )[0];

  const {addItem} = useCartService();
  function handleAddToCart() {
    addItem(data, 1);
  }

  return (
    <>
      <Screen scrollable noPaddingHorizontal noPaddingTop canGoBack>
        <ImageBackground
          source={data.image}
          alt={data.name}
          style={{
            position: 'relative',
            height: SCREEN_HEIGHT / 3,
            aspectRatio: '16/9',
            zIndex: -1,
          }}>
          <PressableBox
            onPress={goBack}
            position="absolute"
            borderRadius="s99"
            backgroundColor="mainBackground"
            top={top}
            left={20}>
            <Icon icon="arrowLeft" color="onBackground" />
          </PressableBox>
        </ImageBackground>
        <Box flex={1}>
          <ProductScreenHeader />
          <ProductScreenOptions />
        </Box>
      </Screen>
      <Box style={{paddingBottom: bottom}} paddingVertical="s16">
        <ProductScreenFooter addToCart={handleAddToCart} />
      </Box>
    </>
  );
}
