import React from 'react';
import {ImageBackground} from 'react-native';

import {mockedItems} from '@data';
import {useCartService} from '@services';
import {SCREEN_HEIGHT} from '@utils';
import {ScrollView} from 'react-native-gesture-handler';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppStackProps} from '@routes';

import {ProductScreenFooter} from './components/ProductScreenFooter';
import {ProductScreenHeader} from './components/ProductScreenHeader';
import {ProductScreenOptions} from './components/ProductScreenOptions';

export function ProductScreen({route}: AppStackProps<'ProductScreen'>) {
  const {bottom} = useAppSafeArea();

  const data = mockedItems.filter(
    item => item.id.toString() === route.params.productId.toString(),
  )[0];

  const {addItem} = useCartService();
  function handleAddToCart() {
    addItem({item: data, quantity: 1});
  }

  const hasExtraItem = !!data.additional || !!data.optionals;

  return (
    <>
      <Screen title={data.name} noPaddingHorizontal noPaddingTop canGoBack>
        <ScrollView>
          <ImageBackground
            source={data.image}
            alt={data.name}
            style={{
              position: 'relative',
              height: SCREEN_HEIGHT / 3,
              aspectRatio: '16/9',
              zIndex: -1,
            }}
          />
          <Box flex={1}>
            <ProductScreenHeader />
            {hasExtraItem && (
              <ProductScreenOptions
                additional={data.additional}
                optionals={data.optionals}
              />
            )}
          </Box>
        </ScrollView>
      </Screen>
      <Box style={{paddingBottom: bottom}} paddingVertical="s16">
        <ProductScreenFooter addToCart={handleAddToCart} />
      </Box>
    </>
  );
}
