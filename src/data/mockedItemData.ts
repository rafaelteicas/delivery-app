export interface ItemProps {
  name: string;
  price: number;
  image: any;
  rating: number;
  deliveryFee: number;
  timeToDeliverInSeconds?: number;
  description?: string;
}

export const mockedItems: ItemProps[] = [
  {
    name: 'Hambúrguer',
    price: 9.89,
    image: require('../assets/images/foods/hamburger.webp'),
    rating: 5,
    deliveryFee: 10,
    description: 'Any description',
    timeToDeliverInSeconds: 60 * 20,
  },
];
