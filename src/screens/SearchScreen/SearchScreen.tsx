import React from 'react';
import {Box, Icon, Input, Screen, Text} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_WIDTH} from '../../utils';

export function SearchScreen() {
  const {goBack} = useNavigation();

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth={SCREEN_WIDTH - 20 - 32 - 16}
          gap="s16">
          <Icon onPress={goBack} icon="arrowLeft" color="black" />
          <Input
            placeholder="Procure por pratos"
            autoFocus
            RightComponent={<Icon icon="search" color="primary" size="s20" />}
          />
        </Box>
      }>
      <Text>Olá</Text>
    </Screen>
  );
}
