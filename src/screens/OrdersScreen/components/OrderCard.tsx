import React from 'react';
import {Box, Button, Text} from '../../../components';
import {Image, StyleSheet} from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

type StatusType = 'completed' | 'active' | 'canceled';

interface OrderCardProps {
  status: StatusType;
}

export function OrderCard({status}: OrderCardProps) {
  const StatusComponent = getStatusComponent(status);

  const date = dayjs(new Date())
    .locale('pt-br')
    .format('dddd, DD/MM/YYYY')
    .toString();

  return (
    <Box
      mt="s16"
      flexDirection="row"
      justifyContent="space-between"
      paddingHorizontal="s16">
      <Box>
        <Box flexDirection="row" g="s8" alignItems="center">
          {StatusComponent}
        </Box>
        <Text variant="textMedium" fontWeight="bold" mt="s8">
          Hamburguer
        </Text>
        <Box flex={1}>
          <Text variant="textSmall" color="gray500">
            R$ 18.99
          </Text>
          <Text textTransform="capitalize" variant="textSmall" color="gray500">
            {date}
          </Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" g="s12">
          {status === 'active' && (
            <Button type="ghost" title="Contato" size="small" />
          )}
          {status === 'canceled' ||
            (status === 'completed' && (
              <Button title="Adicionar ao carrinho" size="small" />
            ))}
        </Box>
      </Box>
      <Image
        source={require('../../../assets/images/foods/hamburger.webp')}
        style={[styles.image]}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {width: 120, height: 120, borderRadius: 16},
});

function getStatusComponent(status: StatusType) {
  switch (status) {
    case 'completed':
      return (
        <>
          <Box
            width={10}
            height={10}
            backgroundColor="success"
            borderRadius="s99"
          />
          <Text variant="textSmall">Completo</Text>
        </>
      );
    case 'active':
      return (
        <>
          <Box
            width={10}
            height={10}
            backgroundColor="primary"
            borderRadius="s99"
          />
          <Text variant="textSmall">Em entrega</Text>
        </>
      );
    case 'canceled':
      return (
        <>
          <Box
            width={10}
            height={10}
            backgroundColor="error"
            borderRadius="s99"
          />
          <Text variant="textSmall">Cancelado</Text>
        </>
      );
  }
}
