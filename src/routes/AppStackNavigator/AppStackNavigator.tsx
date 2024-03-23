import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppBottomTabNavigator} from '../AppBottomTabNavigator/AppBottomTabNavigator';
import {RestaurantScreen} from '../../screens/RestaurantScreen/RestaurantScreen';
import {ProductScreen} from '../../screens/ProductScreen/ProductScreen';

export type AppStackNavigatorType = {
  AppBottomTabNavigator: undefined;
  RestaurantScreen: undefined;
  ProductScreen: undefined;
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
    </Stack.Navigator>
  );
}
