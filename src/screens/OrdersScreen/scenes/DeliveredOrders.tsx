import React from 'react';
import {Box, Separator} from '../../../components';
import {OrderCard} from '../components/OrderCard';
import {FlatList} from 'react-native-gesture-handler';

export function DeliveredOrders() {
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
        data={Array.from(Array(6).keys())}
        renderItem={() => <OrderCard status="completed" />}
      />
    </Box>
  );
}
