import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../../screens/HomeScreen/HomeScreen';
import {CustomBottomTab} from './components/CustomBottomTab';

export type AppTabBarProps = {
  HomeScreen: undefined;
  OrdersScreen: undefined;
  FavoritesScreen: undefined;
  CartScreen: undefined;
  ProfileScreen: undefined;
};

const BottomTab = createBottomTabNavigator<AppTabBarProps>();

export function AppBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="OrdersScreen" component={HomeScreen} />
      <BottomTab.Screen name="FavoritesScreen" component={HomeScreen} />
      <BottomTab.Screen name="CartScreen" component={HomeScreen} />
      <BottomTab.Screen name="ProfileScreen" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
