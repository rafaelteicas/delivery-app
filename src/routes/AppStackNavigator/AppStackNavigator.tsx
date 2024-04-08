import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProductScreen} from '../../screens/ProductScreen/ProductScreen';
import {RestaurantScreen} from '../../screens/RestaurantScreen/RestaurantScreen';
import {SearchScreen} from '../../screens/SearchScreen/SearchScreen';
import {AppBottomTabNavigator} from '../AppBottomTabNavigator/AppBottomTabNavigator';

export type AppStackNavigatorType = {
  AppBottomTabNavigator: undefined;
  RestaurantScreen: undefined;
  ProductScreen: {
    productId: string;
  };
  SearchScreen:
    | {
        category?: string;
      }
    | undefined;
};

const Stack = createNativeStackNavigator<AppStackNavigatorType>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AppBottomTabNavigator">
      <Stack.Screen
        name="AppBottomTabNavigator"
        component={AppBottomTabNavigator}
      />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          animation: 'none',
        }}
      />
    </Stack.Navigator>
  );
}
