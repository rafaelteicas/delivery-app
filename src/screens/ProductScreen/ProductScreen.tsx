import React from 'react';
import {Box, Button, Screen, Text} from '../../components';
import {Image} from 'react-native';
import {SCREEN_HEIGHT} from '../../utils';
import {useAppSafeArea} from '../../hooks';

export function ProductScreen() {
  const {bottom} = useAppSafeArea();
  return (
    <Screen noPaddingHorizontal noPaddingTop canGoBack>
      <Image
        source={require('../../assets/images/foods/hamburger.webp')}
        alt="Hambúrguer"
        style={{
          position: 'relative',
          height: SCREEN_HEIGHT / 3,
          aspectRatio: '16/9',
          zIndex: -1,
        }}
      />
      <Box flex={1}>
        <Box mt="s16" paddingHorizontal="s16">
          <Text>Olá</Text>
        </Box>
      </Box>
      <Box
        style={{paddingBottom: bottom}}
        paddingHorizontal="s16"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box
          mr="s16"
          borderColor="gray100"
          p="s12"
          borderWidth={1}
          borderRadius="s16"
          flexDirection="row"
          gap="s16">
          <Text>-</Text>
          <Text>1</Text>
          <Text>+</Text>
        </Box>
        <Button title="Adicionar" flex={1} />
      </Box>
    </Screen>
  );
}
