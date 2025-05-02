/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

// Added vibrant anime-style colors for light and dark themes
const animePrimaryLight = '#FF6F61'; // Vibrant red-orange
const animeSecondaryLight = '#FFD700'; // Bright gold
const animeAccentLight = '#8A2BE2'; // Electric purple

const animePrimaryDark = '#FF4500'; // Orange-red
const animeSecondaryDark = '#FFA500'; // Bright orange
const animeAccentDark = '#9400D3'; // Dark violet

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    animePrimary: animePrimaryLight,
    animeSecondary: animeSecondaryLight,
    animeAccent: animeAccentLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    animePrimary: animePrimaryDark,
    animeSecondary: animeSecondaryDark,
    animeAccent: animeAccentDark,
  },
};
