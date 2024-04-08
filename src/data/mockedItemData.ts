import {ImageSourcePropType} from 'react-native';

export interface ItemProps {
  id: number;
  name: string;
  price: number;
  image: any;
  rating: number;
  category: string;
  deliveryFee: number;
  timeToDeliverInSeconds?: number;
  description?: string;
}

export interface CategoryProps {
  name: string;
  background: ImageSourcePropType;
}

export const mockedItems: ItemProps[] = [
  {
    id: 1,
    name: 'Hambúrguer',
    price: 9.89,
    image: require('../assets/images/foods/hamburger.webp'),
    rating: 5,
    deliveryFee: 10,
    description: 'Any description',
    timeToDeliverInSeconds: 60 * 20,
    category: 'Hamburguer',
  },
  {
    id: 2,
    name: 'Estrogonofe',
    price: 15.89,
    image: require('../assets/images/foods/estrogonofe.webp'),
    rating: 4,
    deliveryFee: 8,
    description: 'Any description',
    timeToDeliverInSeconds: 60 * 20,
    category: '',
  },
  {
    id: 3,
    name: 'Pizza de Presunto',
    price: 30.99,
    image: require('../assets/images/foods/pizza.jpeg'),
    rating: 3,
    deliveryFee: 0,
    description: 'Any description',
    timeToDeliverInSeconds: 60 * 20,
    category: 'Pizza',
  },
];

export const mockedCategories: CategoryProps[] = [
  {
    name: 'Hamburguer',
    background: require('../assets/images/foods/hamburger.webp'),
  },
  {
    name: 'Pizzas',
    background: require('../assets/images/foods/pizza.jpeg'),
  },
];
