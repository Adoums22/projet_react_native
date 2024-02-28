import React from 'react';
import { Button } from 'react-native';

export function HelloButton({title, sayHello} : {title : string, sayHello: any}) {
    return <Button title={title} onPress={sayHello}/>;
}