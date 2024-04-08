import React from 'react';
import {FlatList, ImageBackground, Pressable, StyleSheet} from 'react-native';

import {mockedCategories} from '@data';
import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Text} from '../../../components';

const CATEGORY_LIST_WIDTH = 120;
const CATEGORY_LIST_HEIGHT = 40;

export function HomeCategoryList() {
  const {navigate} = useNavigation();

  function handleNavigateToSearchScreen(category: string) {
    navigate('SearchScreen', {
      category,
    });
  }

  const categories = mockedCategories;

  return (
    <FlatList
      keyExtractor={item => item.name}
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => (
        <Pressable
          key={item.name}
          onPress={() => handleNavigateToSearchScreen(item.name)}>
          <ImageBackground
            blurRadius={3}
            borderRadius={16}
            source={item.background}
            style={styles.imageBackground}>
            <Box {...$boxOverlay} />
            <Text color="white" variant="headingSmall">
              {item.name}
            </Text>
          </ImageBackground>
        </Pressable>
      )}
      horizontal
    />
  );
}

const $boxOverlay: BoxProps = {
  backgroundColor: 'onBackground',
  width: CATEGORY_LIST_WIDTH,
  height: CATEGORY_LIST_HEIGHT,
  borderRadius: 's16',
  position: 'absolute',
  opacity: 0.6,
};

const styles = StyleSheet.create({
  imageBackground: {
    width: CATEGORY_LIST_WIDTH,
    height: CATEGORY_LIST_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
});
