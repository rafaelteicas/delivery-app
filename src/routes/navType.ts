import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppBottomNavigatorType} from './AppBottomTabNavigator/AppBottomTabNavigator';
import {AppStackNavigatorType} from './AppStackNavigator/AppStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AppStackNavigatorType,
        AppBottomNavigatorType {}
  }
}

export type AppStackProps<Route extends keyof AppStackNavigatorType> =
  NativeStackScreenProps<AppStackNavigatorType, Route>;

export type AppBottomProps<Route extends keyof AppBottomNavigatorType> =
  NativeStackScreenProps<AppBottomNavigatorType, Route>;
