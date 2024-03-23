import React from 'react';
import {Box, Button, Text} from '../../../components';
import {Image} from 'react-native';

export function CartCard() {
  return (
    <Box
      elevation={5}
      shadowColor="gray200"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.4}
      shadowRadius={3.0}
      backgroundColor="white"
      p="s12"
      justifyContent="space-between"
      flexDirection="row"
      borderRadius="s12">
      <Box justifyContent="space-between">
        <Text variant="headingSmall">Hambúrguer</Text>
        <Text fontWeight="500">R$ 17.99</Text>
        <Box flexDirection="row">
          <Box
            mr="s16"
            borderColor="gray100"
            p="s8"
            borderWidth={1}
            borderRadius="s8"
            flexDirection="row"
            gap="s16">
            <Text>-</Text>
            <Text>1</Text>
            <Text>+</Text>
          </Box>
          <Button size="small" type="ghost" title="Remover" />
        </Box>
      </Box>
      <Image
        source={require('../../../assets/images/foods/hamburger.webp')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 12,
        }}
      />
    </Box>
  );
}
