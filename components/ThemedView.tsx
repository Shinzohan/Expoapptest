import { View, type ViewProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor || Colors.light.animePrimary, dark: darkColor || Colors.dark.animePrimary },
    'background'
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
