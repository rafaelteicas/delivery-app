import React from 'react';
import {Box, Icon, Input, Screen, Text} from '../../components';
import {Image, ImageBackground} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils';
import {FlatList} from 'react-native-gesture-handler';

export function RestaurantScreen() {
  const categories = ['Mais vendidos', 'Bebidas', 'Prato'];

  return (
    <Screen noPaddingTop noPaddingHorizontal>
      <ImageBackground
        source={require('../../assets/images/foods/hamburger.webp')}
        alt="Hambúrguer"
        style={{
          position: 'relative',
          height: SCREEN_HEIGHT / 3,
          aspectRatio: '16/9',
        }}>
        <Box
          paddingHorizontal="s16"
          position="absolute"
          bottom={20}
          width={SCREEN_WIDTH}>
          <Box backgroundColor="white" padding="s20" borderRadius="s16">
            <Text variant="headingMedium">Restaurante</Text>
            <Text variant="textMedium" color="gray200">
              Comida japonesa
            </Text>
          </Box>
        </Box>
      </ImageBackground>
      <Box paddingHorizontal="s16" paddingTop="s12">
        <Input
          placeholder="Procure por pratos"
          RightComponent={<Icon icon="search" color="primary" size="s20" />}
        />
        <FlatList
          data={categories}
          horizontal
          renderItem={({item}) => (
            <Box
              borderColor="gray100"
              borderWidth={1}
              marginRight="s12"
              p="s8"
              borderRadius="s99">
              <Text variant="textSmall" fontWeight="bold" color="gray500">
                {item}
              </Text>
            </Box>
          )}
          style={{marginTop: 12}}
        />
        <Box
          mt="s24"
          p="s12"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottomColor="gray100"
          borderBottomWidth={1}>
          <Box flex={1}>
            <Text variant="textMedium">Hambúrguer</Text>
            <Box flexDirection="row" alignItems="center" gap="s4">
              <Icon icon="star" color="orange500" size="s12" />
              <Text variant="textSmall" color="gray500" fontWeight="bold">
                4.8
              </Text>
            </Box>
            <Text variant="textSmall" color="gray500">
              R$150.00
            </Text>
          </Box>
          <Image
            source={require('../../assets/images/foods/hamburger.webp')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 16,
            }}
          />
        </Box>
      </Box>
    </Screen>
  );
}
