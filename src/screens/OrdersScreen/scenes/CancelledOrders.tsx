import React from 'react';
import {Box, Separator} from '../../../components';
import {FlatList} from 'react-native';
import {OrderCard} from '../components/OrderCard';

export function CancelledOrders() {
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
        data={Array.from(Array(2).keys())}
        renderItem={() => <OrderCard status="canceled" />}
      />
    </Box>
  );
}
