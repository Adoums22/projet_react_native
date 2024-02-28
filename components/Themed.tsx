import { Text as DefaultText, useColorScheme, View as DefaultView } from 'react-native';
import Themes from '../constants/themes';


export function useThemeColor(
props: { themeName?: keyof typeof Themes },
colorName: keyof typeof Themes.light.colors & keyof typeof       Themes.dark.colors& keyof typeof Themes.blue.colors
) {
const themeNameFromProps = props.themeName ?? null;
const theme = themeNameFromProps ?? useColorScheme() ?? 'light';
  return Themes[theme] ['colors'][colorName];
}

type ThemeProps = {
themeName?: keyof typeof Themes
};
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  if (props.themeName){
    const color = useThemeColor({ themeName: props.themeName }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  } else {
    const color = useThemeColor({ }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  }
}
export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  if (props.themeName) {
    const backgroundColor = useThemeColor(
                       { themeName: props.themeName }, 'background');
  return <DefaultView style={[{ backgroundColor }, style]}
              {...otherProps} />;
  } else {
    const backgroundColor = useThemeColor({ }, 'background');
    return <DefaultView style={[{ backgroundColor }, style]}     {...otherProps} />;
  }
}