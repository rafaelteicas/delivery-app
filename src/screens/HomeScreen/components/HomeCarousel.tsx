import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Box} from '../../../components';
import {Image} from 'react-native';

interface Props {
  width: number;
  height: number;
  data: any[];
}

export function HomeCarousel({width, height, data}: Props) {
  return (
    <Carousel
      data={data}
      height={height}
      renderItem={() => (
        <Box
          width={width * 0.8}
          shadowColor="gray200"
          shadowOffset={{width: 0, height: 1}}
          shadowOpacity={0.5}
          shadowRadius={3.5}>
          <Image
            source={require('../../../assets/images/foods/hamburger.webp')}
            resizeMode="center"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 16,
            }}
          />
        </Box>
      )}
      width={width * 0.85}
      style={{
        width: '100%',
      }}
    />
  );
}
