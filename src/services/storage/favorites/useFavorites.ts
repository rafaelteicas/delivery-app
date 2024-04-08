import {ItemProps} from '@data';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '..';

interface FavoriteState {
  favorites: ItemProps[];
  addFavorite: (product: ItemProps) => void;
  removeFavorite: (productId: ItemProps['id']) => void;
}

const useFavoriteStore = create<FavoriteState>()(
  persist(
    set => ({
      favorites: [],
      addFavorite: (product: ItemProps) => {
        set(state => {
          const productInFavorites = state.favorites.find(
            item => item.id === product.id,
          );
          if (!productInFavorites) {
            return {
              favorites: [...state.favorites, product],
            };
          }
          return state;
        });
      },
      removeFavorite: (productId: number) => {
        set(state => ({
          favorites: state.favorites.filter(item => item.id !== productId),
        }));
      },
    }),
    {
      name: '@Favorites',
      storage: storage,
    },
  ),
);

export function useFavorites() {
  const favorites = useFavoriteStore(state => state.favorites);
  return favorites;
}

export function useFavoritesService() {
  const addFavorite = useFavoriteStore(state => state.addFavorite);
  const removeFavorite = useFavoriteStore(state => state.removeFavorite);

  return {
    addFavorite,
    removeFavorite,
  };
}
