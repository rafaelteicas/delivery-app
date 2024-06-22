import {IconNames} from '../../../components';
import {AppTabBarProps} from '../AppBottomTabNavigator';

export const getTabBarItem: Record<
  keyof AppTabBarProps,
  {
    label: string;
    icon: IconNames;
  }
> = {
  HomeScreen: {
    icon: 'home',
    label: 'Home',
  },
  OrdersScreen: {
    icon: 'list',
    label: 'Pedidos',
  },
  FavoritesScreen: {
    icon: 'heart',
    label: 'Favoritos',
  },
  CartScreen: {
    icon: 'cart',
    label: 'Carrinho',
  },
  ProfileScreen: {
    icon: 'user',
    label: 'Perfil',
  },
};
