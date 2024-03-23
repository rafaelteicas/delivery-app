import React from 'react';
import {Box, BoxProps} from '..';
import {useAppSafeArea} from '../../hooks';
import {Header} from '../Header/Header';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  noPaddingHorizontal?: boolean;
  noPaddingTop?: boolean;
  canGoBack?: boolean;
  title?: string;
}

export function Screen({
  children,
  noPaddingHorizontal = false,
  noPaddingTop = false,
  canGoBack = false,
  title,
  ...boxProps
}: ScreenProps) {
  const {top} = useAppSafeArea();

  const hasTitleAndCanGoBack = canGoBack && !!title;

  return (
    <Box
      paddingHorizontal={noPaddingHorizontal ? undefined : 's16'}
      style={{
        paddingTop: noPaddingTop || hasTitleAndCanGoBack ? undefined : top,
      }}
      backgroundColor="gray50"
      flex={1}
      {...boxProps}>
      {hasTitleAndCanGoBack && <Header title={title} />}
      {children}
    </Box>
  );
}
