import React, {useState} from 'react';

import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import {Screen, Text} from '@components';

import {useAppTheme} from '../../hooks';
import {theme} from '../../theme';

import {ActiveOrders} from './scenes/ActiveOrders';
import {CancelledOrders} from './scenes/CancelledOrders';
import {DeliveredOrders} from './scenes/DeliveredOrders';

const renderScene = SceneMap({
  deliveredOrders: DeliveredOrders,
  activeOrders: ActiveOrders,
  canceledOrders: CancelledOrders,
});

export function OrdersScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'deliveredOrders',
      title: 'Completos',
    },
    {
      key: 'activeOrders',
      title: 'Ativos',
    },
    {
      key: 'canceledOrders',
      title: 'Cancelados',
    },
  ]);

  const {colors} = useAppTheme();

  return (
    <Screen noPaddingHorizontal title="Pedidos" canGoBack>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: 100}}
        renderTabBar={props => (
          <TabBar
            indicatorStyle={{backgroundColor: theme.colors.primary}}
            style={{backgroundColor: colors.white}}
            renderLabel={({route, focused}) => (
              <Text
                variant="headingSmall"
                fontWeight={focused ? 'bold' : '500'}
                color={focused ? 'orange500' : 'gray500'}>
                {route.title}
              </Text>
            )}
            {...props}
          />
        )}
      />
    </Screen>
  );
}
