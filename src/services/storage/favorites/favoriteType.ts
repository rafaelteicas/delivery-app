import {ImageSourcePropType} from 'react-native';

export interface FavoriteType {
  id: number;
  name: string;
  price: string;
  imageUri: ImageSourcePropType;
  freeShipping?: boolean;
}
