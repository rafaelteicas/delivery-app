import {AppTabBarProps} from './AppBottomTabNavigator/AppBottomTabNavigator';
import {AppStackNavigatorType} from './AppStackNavigator/AppStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackNavigatorType, AppTabBarProps {}
  }
}
