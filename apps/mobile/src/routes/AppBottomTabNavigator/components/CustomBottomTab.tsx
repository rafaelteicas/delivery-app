import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {TouchableOpacityBox, Text, Box, Icon} from '../../../components';
import {useAppSafeArea} from '../../../hooks';
import {AppBottomNavigatorType} from '../AppBottomTabNavigator';

import {getTabBarItem} from './getTabBarItem';

export function CustomBottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box
      shadowColor="gray100"
      shadowOffset={{
        width: 0,
        height: 1,
      }}
      shadowOpacity={0.5}
      shadowRadius={3.0}
      padding="s16"
      elevation={5}
      backgroundColor="white"
      flexDirection="row"
      position="relative"
      style={{paddingBottom: bottom}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const {label, icon} =
          getTabBarItem[route.name as keyof AppBottomNavigatorType];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            justifyContent="space-between"
            flex={1}
            gap="s4">
            <Box justifyContent="center" alignItems="center">
              {isFocused && (
                <Box
                  width="100%"
                  height={5}
                  backgroundColor="orange500"
                  position="absolute"
                  borderBottomLeftRadius="s99"
                  borderBottomRightRadius="s99"
                  top={-16}
                />
              )}
              <Icon
                icon={icon}
                size="s20"
                color={isFocused ? 'orange500' : 'gray200'}
              />
              <Text
                variant="textSmall"
                color={isFocused ? 'orange500' : 'gray200'}>
                {label}
              </Text>
            </Box>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
