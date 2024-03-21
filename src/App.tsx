import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Router} from './routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export function App() {
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
