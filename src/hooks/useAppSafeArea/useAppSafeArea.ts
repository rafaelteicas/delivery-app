import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useAppSafeArea() {
  const {top, bottom, left, right} = useSafeAreaInsets();

  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
  };
}
