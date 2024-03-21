import React from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import {Box, BoxProps, Text} from '../../../components';

const CATEGORY_LIST_WIDTH = 120;
const CATEGORY_LIST_HEIGHT = 40;

export function HomeCategoryList() {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={['Pizza', 'Hambúrguer', 'Refrigerante']}
      renderItem={({item}) => (
        <ImageBackground
          blurRadius={3}
          borderRadius={16}
          source={require('../../../assets/images/foods/hamburger.webp')}
          style={styles.imageBackground}>
          <Box {...$boxOverlay} />
          <Text color="white" variant="headingSmall">
            {item}
          </Text>
        </ImageBackground>
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
