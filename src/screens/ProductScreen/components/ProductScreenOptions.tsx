import React, {useState} from 'react';

import {Box, RadioButton, Text} from '../../../components';

export interface OptionsProps {
  id: number;
  title: string;
  value: number;
}

interface ProductScreenOptions {
  data: OptionsProps[];
}

const data: OptionsProps[] = [
  {id: 1, title: 'Bacon', value: 10},
  {id: 2, title: 'Chedar', value: 10},
  {id: 3, title: 'Alface', value: 10},
  {id: 4, title: 'Picles', value: 10},
  {id: 5, title: 'Tomate', value: 10},
  {id: 6, title: 'Salada', value: 10},
  {id: 7, title: 'Batata frita', value: 10},
];

export function ProductScreenOptions() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  function handleSelectItem(id: number) {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  }

  return (
    <>
      <Box
        p="s16"
        flexDirection="row"
        backgroundColor="gray100"
        alignItems="center"
        justifyContent="space-between">
        <Text variant="headingSmall" color="gray500">
          Opções
        </Text>
        <Text variant="textSmall" color="gray200" fontWeight="600">
          OBRIGATÓRIO
        </Text>
      </Box>
      {data.map(item => (
        <Box
          key={item.title}
          p="s16"
          borderBottomColor="gray100"
          borderBottomWidth={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text color="gray500">{item.title}</Text>
          <RadioButton
            selectedValue={item.id === selectedItem}
            onPress={() => handleSelectItem(item.id)}
          />
        </Box>
      ))}
    </>
  );
}
