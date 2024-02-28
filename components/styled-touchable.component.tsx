import { TouchableOpacity } from 'react-native';
import {Text, TextProps} from './Themed';

export function BackgroundTouchable(props: TextProps) {
    return <TouchableOpacity {...props} style={[props.style, { backgroundColor: 'green'}]}/>;
}