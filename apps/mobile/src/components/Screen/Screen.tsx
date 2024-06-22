import React from 'react';

import {useAppSafeArea, useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {ScreenHeader} from './components/ScreenHeader';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  noPaddingHorizontal?: boolean;
  noPaddingTop?: boolean;
  canGoBack?: boolean;
  title?: string;
  HeaderComponent?: React.ReactNode;
  scrollable?: boolean;
}

export function Screen({
  children,
  noPaddingHorizontal = false,
  noPaddingTop = false,
  canGoBack = false,
  title,
  HeaderComponent,
  scrollable,
  ...boxProps
}: ScreenProps) {
  const {top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const hasTitleAndCanGoBack = canGoBack && !!title;

  return (
    <Container backgroundColor={colors.mainBackground}>
      <Box
        paddingHorizontal={noPaddingHorizontal ? undefined : 's16'}
        style={{
          paddingTop: noPaddingTop || hasTitleAndCanGoBack ? undefined : top,
        }}
        flex={1}
        {...boxProps}>
        {HeaderComponent && HeaderComponent}
        {hasTitleAndCanGoBack && <ScreenHeader title={title} />}
        {children}
      </Box>
    </Container>
  );
}
