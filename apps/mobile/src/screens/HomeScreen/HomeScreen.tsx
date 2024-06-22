import React from 'react';
import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Card, Icon, Input, Screen, Text} from '@components';
import {useAppSafeArea} from '@hooks';

import {mockedItems} from '../../data/mockedItemData';
import {SCREEN_WIDTH} from '../../utils';

import {HomeCarousel} from './components/HomeCarousel';
import {HomeCategoryList} from './components/HomeCategoryList';
import {HomeHeader} from './components/HomeHeader';

const CARD_HEIGHT = 180;

export function HomeScreen() {
  const {navigate} = useNavigation();
  function navigateToSearchScreen() {
    navigate('SearchScreen');
  }

  const {bottom} = useAppSafeArea();

  const data = mockedItems;

  return (
    <Screen scrollable noPaddingHorizontal paddingLeft="s16" gap="s12">
      <HomeHeader />
      <Input
        boxProps={{marginRight: 's16'}}
        placeholder="Procure por pratos"
        RightComponent={<Icon icon="search" color="primary" size="s20" />}
        onPressIn={navigateToSearchScreen}
      />
      <Box height={CARD_HEIGHT + 40}>
        <Text variant="headingMedium" mb="s12">
          Promoções
        </Text>
        <HomeCarousel
          data={['', '']}
          width={SCREEN_WIDTH}
          height={CARD_HEIGHT}
        />
      </Box>
      <Box>
        <Box
          flexDirection="row"
          alignItems="baseline"
          justifyContent="space-between"
          pr="s16">
          <Text variant="headingMedium" mb="s12">
            Categorias
          </Text>
          <Text variant="textSmall" color="primary" fontWeight="bold">
            Ver todas
          </Text>
        </Box>
        <HomeCategoryList />
      </Box>
      <Box>
        <Box
          flexDirection="row"
          alignItems="baseline"
          justifyContent="space-between"
          pr="s16">
          <Text variant="headingMedium" mb="s12">
            Mais vendidos
          </Text>
          <Text variant="textSmall" color="primary" fontWeight="bold">
            Ver todos
          </Text>
        </Box>
        <Box flexDirection="row" gap="s8">
          <FlatList
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={item => <Card {...item} />}
            contentContainerStyle={{
              gap: 16,
            }}
          />
        </Box>
      </Box>
      <Box>
        <Box
          flexDirection="row"
          alignItems="baseline"
          justifyContent="space-between"
          pr="s16">
          <Text variant="headingMedium">Promoções</Text>
          <Text variant="textSmall" color="primary" fontWeight="bold">
            Ver todos
          </Text>
        </Box>
        <Box flexDirection="row" alignItems="center" mb="s12">
          <Text variant="textSmall" fontWeight="bold">
            Por tempo LIMITADO!
          </Text>
          <Box ml="s4" backgroundColor="error" px="s4" borderRadius="s99">
            <Text color="white">11:00</Text>
          </Box>
        </Box>
        <Box flexDirection="row" gap="s8">
          <FlatList
            keyExtractor={item => item.id.toString()}
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={item => <Card {...item} />}
            contentContainerStyle={{
              gap: 16,
              paddingBottom: bottom,
            }}
          />
        </Box>
      </Box>
    </Screen>
  );
}
