import {CartItemProps, ProductType} from '@domain';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

interface CartState {
  items: CartItemProps[];
  addItem: (item: CartItemProps) => void;
  removeItem: (productId: ProductType['id']) => void;
  incrementCartItem: (productId: ProductType['id']) => void;
  decrementCartItem: (productId: ProductType['id']) => void;
}

export const useCartStorage = create<CartState>()(
  persist(
    set => ({
      items: [],
      addItem: item => {
        set(state => {
          const productInCart = state.items.find(
            data => data.item.id === item.item.id,
          );
          if (!productInCart) {
            const product: CartItemProps = {
              item: item.item,
              quantity: item.quantity,
            };
            return {
              items: [...state.items, product],
            };
          }
          return {
            items: state.items.map(data => {
              if (data.item.id === productInCart.item.id) {
                return {
                  ...productInCart,
                  quantity: productInCart.quantity + item.quantity,
                };
              }
              return data;
            }),
          };
        });
      },
      removeItem: productId => {
        set(state => ({
          items: state.items.filter(item => item.item.id !== productId),
        }));
      },
      incrementCartItem: productId => {
        set(state => {
          const item = state.items.find(data => data.item.id === productId);
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
          const item = state.items.find(data => data.item.id === productId);
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
