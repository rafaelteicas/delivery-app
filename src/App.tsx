import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './theme/theme';
import {SignInScreen} from './screens/SignInScreen/SignInScreen';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <SignInScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}
