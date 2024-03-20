import React from 'react';
import {Box, BoxProps} from '..';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
}

export function Screen({children, ...boxProps}: ScreenProps) {
  return (
    <Box paddingHorizontal="s16" {...boxProps}>
      {children}
    </Box>
  );
}
