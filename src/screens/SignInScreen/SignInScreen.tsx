import React from 'react';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';

export function SignInScreen() {
  return (
    <>
      <Input placeholder="Digite seu número" />
      <Button title="Entrar" />
    </>
  );
}
