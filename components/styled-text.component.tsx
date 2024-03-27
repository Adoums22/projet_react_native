import React from 'react';
import {Text, TextProps} from './Themed';

export function ColoredText(props: any) {
    return <Text style={{color: "red"}}>{props.text}</Text>;
}