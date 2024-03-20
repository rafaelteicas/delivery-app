import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './AppStackNavigator/AppStackNavigator';

export function Router() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
