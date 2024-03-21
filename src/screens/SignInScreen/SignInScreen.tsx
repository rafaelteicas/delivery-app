import React from 'react';
import {
  Box,
  Screen,
  Input,
  TextDivider,
  Button,
  Icon,
  Text,
} from '../../components';

export function SignInScreen() {
  return (
    <Screen flex={1} justifyContent="space-between">
      <Box>
        <Text variant="headingMedium">Entre com sua conta</Text>
        <Text variant="headingMedium">
          Faça login abaixo com suas credenciais
        </Text>
      </Box>
      <Box gap="s16">
        <Input placeholder="Digite seu número" />
        <Button title="Entrar" />
        <TextDivider label="Ou faça login com" />
        <Button
          title="Entrar com o google"
          type="ghost"
          LeftItem={<Icon icon="google" />}
        />
      </Box>
    </Screen>
  );
}
