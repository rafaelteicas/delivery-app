import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, BoxProps, Icon, Text} from '@components';
import {useAppSafeArea} from '@hooks';

interface Props {
  title: string;
}

export function ScreenHeader({title}: Props) {
  const {top} = useAppSafeArea();
  const {goBack} = useNavigation();

  return (
    <Box {...$boxContainer} style={{paddingTop: top}}>
      <Box {...$canGoBack}>
        <Icon icon="arrowLeft" color="black" onPress={goBack} />
      </Box>
      <Text variant="headingMedium">{title}</Text>
      <Box width={20} height={20} />
    </Box>
  );
}

const $boxContainer: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  p: 's8',
};

const $canGoBack: BoxProps = {
  borderColor: 'gray100',
  borderRadius: 's99',
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
};
