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
        },
      },
    ],
  ],
};
