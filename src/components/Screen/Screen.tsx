import React from 'react';
import {Box, BoxProps, Icon, Text} from '..';
import {useAppSafeArea} from '../../hooks';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  noPaddingHorizontal?: boolean;
  noPaddingTop?: boolean;
  canGoBack?: boolean;
  title?: string;
  HeaderComponent?: React.ReactNode;
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
  const {goBack} = useNavigation();

  const hasHeaderWithCanGoBack = canGoBack && !!title;

  return (
    <Box
      paddingHorizontal={noPaddingHorizontal ? undefined : 's16'}
      style={{
        paddingTop: noPaddingTop
          ? undefined
          : hasHeaderWithCanGoBack
          ? undefined
          : top,
      }}
      backgroundColor="gray50"
      flex={1}
      {...boxProps}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal="s16"
        style={{paddingTop: hasHeaderWithCanGoBack ? top : undefined}}
        backgroundColor="white">
        {canGoBack && <Icon icon="arrowLeft" color="black" onPress={goBack} />}
        {title && <Text variant="headingMedium">{title}</Text>}
        {title && <Box width={20} height={20} />}
      </Box>
      {children}
    </Box>
  );
}
