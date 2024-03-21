import React from 'react';
import {Box, BoxProps} from '..';
import {useAppSafeArea} from '../../hooks';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  enablePaddingHorizontal?: boolean;
}

export function Screen({
  children,
  HeaderComponent,
  enablePaddingHorizontal = true,
  ...boxProps
}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box
      paddingHorizontal={enablePaddingHorizontal ? 's16' : undefined}
      backgroundColor="gray50"
      flex={1}
      style={{paddingTop: top}}
      {...boxProps}>
      {HeaderComponent && <Box>{HeaderComponent}</Box>}
      {children}
    </Box>
  );
}
