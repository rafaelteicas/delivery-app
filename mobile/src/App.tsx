import React, {useEffect, useState} from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {
  LocationObjectCoords,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './routes';
import {theme} from './theme/theme';

export function App() {
  const [location, setLocation] = useState<LocationObjectCoords | null>(null);


  async function requestPermissions() {
    const {status} = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const position = await getCurrentPositionAsync();
      setLocation(position.coords);
    }
  }

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
