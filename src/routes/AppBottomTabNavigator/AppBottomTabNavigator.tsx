import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {HomeScreen} from '../../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator();

export function AppBottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
