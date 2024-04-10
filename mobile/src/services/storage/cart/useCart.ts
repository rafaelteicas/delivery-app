import {ItemProps} from '@data';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

export interface CartProductProps {
  product: ItemProps;
  quantity: number;
}

interface CartState {
  items: CartProductProps[];
  addItem: (item: ItemProps, quantity: number) => void;
  removeItem: (productId: ItemProps['id']) => void;
  incrementCartItem: (productId: ItemProps['id']) => void;
  decrementCartItem: (productId: ItemProps['id']) => void;
}

export const useCartStorage = create<CartState>()(
  persist(
    set => ({
      items: [],
      addItem: (item, quantity) => {
        set(state => {
          const productInCart = state.items.find(
            data => data.product.id === item.id,
          );
          if (!productInCart) {
            const product = {
              product: item,
              quantity,
            };
            return {
              items: [...state.items, product],
            };
          }
          return {
            items: state.items.map(data => {
              if (data.product.id === productInCart.product.id) {
                return {
                  ...productInCart,
                  quantity: productInCart.quantity + quantity,
                };
              }
              return data;
            }),
          };
        });
      },
      removeItem: productId => {
        set(state => ({
          items: state.items.filter(item => item.product.id !== productId),
        }));
      },
      incrementCartItem: productId => {
        set(state => {
          const item = state.items.find(data => data.product.id === productId);
          if (item) {
            item.quantity += 1;
            return {
              items: [...state.items],
            };
          }
          return state;
        });
      },
      decrementCartItem: productId => {
        set(state => {
          const item = state.items.find(data => data.product.id === productId);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
            return {
              items: [...state.items],
            };
          }
          return state;
        });
      },
    }),
    {
      name: '@Cart',
      storage: storage,
    },
  ),
);

export function useCart() {
  return useCartStorage(state => state.items);
}

export function useCartService() {
  const addItem = useCartStorage(state => state.addItem);
  const removeItem = useCartStorage(state => state.removeItem);
  const incrementCartItem = useCartStorage(state => state.incrementCartItem);
  const decrementCartItem = useCartStorage(state => state.decrementCartItem);

  return {
    addItem,
    removeItem,
    incrementCartItem,
    decrementCartItem,
  };
}
