import React, {useMemo, useState} from 'react';

import {mockedItems} from '@data';
import {SCREEN_WIDTH} from '@utils';
import {FlatList} from 'react-native-gesture-handler';

import {Box, Card, Icon, Input, Screen} from '@components';
import {AppStackProps} from '@routes';

export function SearchScreen({
  navigation,
  route,
}: AppStackProps<'SearchScreen'>) {
  const [searchInput, setSearchInput] = useState(route.params?.category || '');

  const items = mockedItems;

  const data = useMemo(() => {
    return items.filter(item => {
      return item.category.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [items, searchInput]);

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth={SCREEN_WIDTH - 20 - 32 - 16}
          mb="s16"
          gap="s16">
          <Icon onPress={navigation.goBack} icon="arrowLeft" color="black" />
          <Input
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Procure por pratos"
            autoFocus
            RightComponent={<Icon icon="search" color="primary" size="s20" />}
          />
        </Box>
      }>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={item => <Card {...item} />}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
          paddingBottom: 16,
        }}
      />
    </Screen>
  );
}
