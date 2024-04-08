import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppTabBarProps} from './AppBottomTabNavigator/AppBottomTabNavigator';
import {AppStackNavigatorType} from './AppStackNavigator/AppStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackNavigatorType, AppTabBarProps {}
  }
}

export type AppStackProps<Route extends keyof AppStackNavigatorType> =
  NativeStackScreenProps<AppStackNavigatorType, Route>;
