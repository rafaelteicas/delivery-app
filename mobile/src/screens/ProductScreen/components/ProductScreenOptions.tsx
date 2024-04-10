import React, {useState} from 'react';

import {ExtraItemsProps} from '@domain';

import {Box, CheckBoxItem, RadioItem, Text} from '@components';

export interface OptionsProps {
  id: number;
  title: string;
  value: number;
  price?: number;
}

interface ProductScreenOptions {
  optionals?: ExtraItemsProps;
  additional?: ExtraItemsProps;
}

export function ProductScreenOptions({
  optionals,
  additional,
}: ProductScreenOptions) {
  const [selectedAdicionalItem, setSelectedAdicionalItem] = useState<string[]>(
    [],
  );
  const [selectedOptionalItem, setSelectedOptionalItem] = useState<
    number | null
  >(null);

  function handleSelectOptionalItem(id: number) {
    const itemAlreadySelected = selectedOptionalItem === id;

    if (itemAlreadySelected) {
      setSelectedOptionalItem(null);
    } else if (!itemAlreadySelected) {
      setSelectedOptionalItem(id);
    }
  }

  function handleSelectAdditionalItem(item: string) {
    const itemAlreadySelected = selectedAdicionalItem.includes(item);

    if (itemAlreadySelected) {
      setSelectedAdicionalItem(prev => prev.filter(data => data !== item));
      return;
    } else if (!itemAlreadySelected) {
      setSelectedAdicionalItem(prev => [...prev, item]);
    }
  }

  return (
    <>
      {optionals && (
        <Box>
          <Box
            p="s16"
            flexDirection="row"
            backgroundColor="gray100"
            alignItems="center"
            justifyContent="space-between">
            <Text variant="headingSmall" color="gray500">
              {optionals.title}
            </Text>
            {!optionals.isOptional && (
              <Text variant="textSmall" color="gray200" fontWeight="600">
                OBRIGATÓRIO
              </Text>
            )}
          </Box>
          {optionals.data.map(item => (
            <RadioItem
              key={item.item}
              title={item.item}
              price={item.value}
              isSelected={selectedOptionalItem === item.id}
              onPress={() => handleSelectOptionalItem(item.id)}
            />
          ))}
        </Box>
      )}

      {additional && (
        <Box>
          <Box
            p="s16"
            flexDirection="row"
            backgroundColor="gray100"
            alignItems="center"
            justifyContent="space-between">
            <Text variant="headingSmall" color="gray500">
              {additional.title}
            </Text>
          </Box>
          {additional.data.map(item => (
            <CheckBoxItem
              key={item.id}
              title={item.item}
              isChecked={selectedAdicionalItem.includes(item.item)}
              price={item.value}
              onPress={() => handleSelectAdditionalItem(item.item)}
            />
          ))}
        </Box>
      )}
    </>
  );
}
