import React from 'react';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import {TextDivider} from '../../components/TextDivider/TextDivider';
import {Box, Screen} from '../../components';

export function SignInScreen() {
  return (
    <Screen flex={1}>
      <Box flex={1} justifyContent="space-evenly">
        <Box>
          <Input placeholder="Digite seu número" />
        </Box>
        <Box gap="s12">
          <TextDivider label="Ou faça login com" />
          <Button title="Entrar" type="ghost" />
        </Box>
      </Box>
      <Button title="Entrar" />
    </Screen>
  );
}
