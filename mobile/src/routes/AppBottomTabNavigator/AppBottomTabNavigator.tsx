import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {CartScreen} from '../../screens/CartScreen/CartScreen';
import FavoritesScreen from '../../screens/FavoritesScreen/FavoritesScreen';
import {HomeScreen} from '../../screens/HomeScreen/HomeScreen';
import {OrdersScreen} from '../../screens/OrdersScreen/OrdersScreen';

import {CustomBottomTab} from './components/CustomBottomTab';

export type AppBottomNavigatorType = {
  HomeScreen: undefined;
  OrdersScreen: undefined;
  FavoritesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

const BottomTab = createBottomTabNavigator<AppBottomNavigatorType>();

export function AppBottomTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <CustomBottomTab {...props} />;
  }

  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={renderTabBar}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="OrdersScreen" component={OrdersScreen} />
      <BottomTab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <BottomTab.Screen name="CartScreen" component={CartScreen} />
      <BottomTab.Screen name="ProfileScreen" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
