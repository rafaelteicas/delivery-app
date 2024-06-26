module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@data': './src/data',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@domain': './src/domain',
          '@assets': './src/assets',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
