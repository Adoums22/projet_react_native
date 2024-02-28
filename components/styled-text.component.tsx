import {Text, TextProps} from './Themed';

export function ColoredText(props: TextProps) {
    return <Text {...props} style={[props.style, { color: 'red'}]}/>;
}