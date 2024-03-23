import React from 'react';
import {Box, BoxProps, Icon, PressableBox, Text} from '..';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils';
import {ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function Card() {
  const {navigate} = useNavigation();

  function navigateToProduct() {
    navigate('ProductScreen');
  }
  return (
    <Box {...$cardBox}>
      <PressableBox onPress={navigateToProduct}>
        <ImageBackground
          borderTopLeftRadius={12}
          borderTopRightRadius={12}
          source={require('../../assets/images/foods/hamburger.webp')}
          style={styles.imageBackground}>
          <Box {...$badgeBox}>
            <Icon icon="star" color="orange600" size="s16" />
            <Text variant="textSmall" fontWeight="600" color="gray500">
              4.9
            </Text>
          </Box>
        </ImageBackground>
      </PressableBox>
      <Box pl="s8">
        <Text fontWeight="bold">Hambúrguer Especial</Text>
        <Box flexDirection="row" g="s8">
          <Text variant="textSmall">10m -</Text>
          <Text variant="textSmall">1.5km -</Text>
          <Text variant="textSmall" color="gray500" fontWeight="600">
            Frete Grátis
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

const $cardBox: BoxProps = {
  width: SCREEN_WIDTH / 2,
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
    height: SCREEN_HEIGHT / 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
