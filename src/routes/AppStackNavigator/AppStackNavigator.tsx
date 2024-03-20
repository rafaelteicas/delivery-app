import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppBottomTabNavigator} from '../AppBottomTabNavigator/AppBottomTabNavigator';

const Stack = createNativeStackNavigator();

export function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AppBottomTabNavigator"
        component={AppBottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
