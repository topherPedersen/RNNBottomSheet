module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  /*
   * Reanimated plugin has to be listed last
   * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation
   */
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
