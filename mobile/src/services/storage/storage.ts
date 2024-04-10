import {MMKV} from 'react-native-mmkv';

export interface Storage {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, item: T) => Promise<unknown>;
  removeItem: (key: string) => Promise<void>;
}

const MMKVInstance = new MMKV();

export const storage: Storage = {
  getItem: key => {
    const item = MMKVInstance.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) =>
    await MMKVInstance.set(key, JSON.stringify(value)),
  removeItem: async key => await MMKVInstance.delete(key),
};
