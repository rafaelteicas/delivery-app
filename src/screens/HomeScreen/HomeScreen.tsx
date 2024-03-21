import React from 'react';
import {Box, Card, Icon, Input, Screen, Text} from '../../components';
import {HomeCarousel} from './components/HomeCarousel';
import {SCREEN_WIDTH} from '../../utils';
import {AppHeader} from '../../components/AppHeader/AppHeader';
import {HomeCategoryList} from './components/HomeCategoryList';

const CARD_HEIGHT = 180;

export function HomeScreen() {
  return (
    <Screen
      enablePaddingHorizontal={false}
      paddingLeft="s16"
      gap="s12"
      HeaderComponent={<AppHeader />}>
      <Input
        boxProps={{marginRight: 's16'}}
        placeholder="Procure por pratos"
        RightComponent={<Icon icon="search" color="primary" size="s20" />}
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
          <Card />
          <Card />
        </Box>
      </Box>
    </Screen>
  );
}
