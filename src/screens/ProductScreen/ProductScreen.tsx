import React from 'react';
import {ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, PressableBox, Screen} from '@components';

import {useAppSafeArea} from '../../hooks';
import {SCREEN_HEIGHT} from '../../utils';

import {ProductScreenFooter} from './components/ProductScreenFooter';
import {ProductScreenHeader} from './components/ProductScreenHeader';
import {
  OptionsProps,
  ProductScreenOptions,
} from './components/ProductScreenOptions';

const productOptions: OptionsProps[] = [
  {title: 'Bacon', value: 10},
  {title: 'Chedar', value: 10},
  {title: 'Alface', value: 10},
  {title: 'Picles', value: 10},
  {title: 'Tomate', value: 10},
  {title: 'Salada', value: 10},
  {title: 'Batata frita', value: 10},
];

export function ProductScreen() {
  const {bottom, top} = useAppSafeArea();
  const {goBack} = useNavigation();

  return (
    <>
      <Screen scrollable noPaddingHorizontal noPaddingTop canGoBack>
        <ImageBackground
          source={require('../../assets/images/foods/hamburger.webp')}
          alt="Hambúrguer"
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
          <ProductScreenOptions data={productOptions} />
        </Box>
      </Screen>
      <Box style={{paddingBottom: bottom}} paddingVertical="s16">
        <ProductScreenFooter />
      </Box>
    </>
  );
}
