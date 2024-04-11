export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: any;
  rating: number;
  category: string;
  deliveryFee: number;
  timeToDeliverInSeconds?: number;
  description?: string;
  optionals?: ExtraItemsProps[];
  additional?: ExtraItemsProps[];
}

export interface ExtraItemsProps {
  title: string;
  isOptional: boolean;
  data: {
    id: number;
    item: string;
    value: number;
  }[];
}

export interface CartItemProps {
  item: ProductType;
  quantity: number;
}
