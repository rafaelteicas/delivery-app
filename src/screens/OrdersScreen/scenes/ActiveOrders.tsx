import React from 'react';
import {FlatList} from 'react-native';

import {Box, Separator} from '../../../components';
import {OrderCard} from '../components/OrderCard';

export function ActiveOrders() {
  function renderSeparator() {
    return (
      <Box paddingVertical="s12">
        <Separator />
      </Box>
    );
  }
  return (
    <Box backgroundColor="gray50" flex={1}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        data={Array.from(Array(3).keys())}
        renderItem={() => <OrderCard status="active" />}
      />
    </Box>
  );
}
