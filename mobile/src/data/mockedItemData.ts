import {ImageSourcePropType} from 'react-native';

import {CartItemProps} from '@domain';

export interface CategoryProps {
  name: string;
  background: ImageSourcePropType;
}

export const mockedItems: CartItemProps['item'][] = [
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
    optionals: [
      {
        title: 'Opções',
        isOptional: true,
        data: [
          {
            id: 1,
            item: 'Bacon',
            value: 1,
          },
          {
            id: 2,
            item: 'Carne',
            value: 1,
          },
        ],
      },
    ],
    additional: [
      {
        title: 'Adicionais',
        isOptional: true,
        data: [
          {
            id: 1,
            item: 'Queijo',
            value: 1,
          },
          {
            id: 2,
            item: 'Mussarela',
            value: 1,
          },
        ],
      },
      {
        title: 'Borda',
        isOptional: false,
        data: [
          {
            id: 1,
            item: 'Queijo',
            value: 10,
          },
        ],
      },
    ],
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
    name: 'Pizza',
    background: require('../assets/images/foods/pizza.jpeg'),
  },
];
