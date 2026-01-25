module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens/*': './src/screens/*',
          '@navigation/*': './src/navigation/*',
          "@navigation": './src/navigation',
          "@atoms": './src/shared/ui/atoms/index',
          "@icons": './src/shared/ui/icons/index',
          "@variables": "./src/shared/variables/index",
          "@elements": "./src/shared/ui/elements/index",
        }
      },
    ]
  ],
};