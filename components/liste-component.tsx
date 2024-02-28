import React from "react";
import { Text, View } from "./Themed";

const data = [
    {id: 'ba', name: 'Banana'},
    {id: 'or', name: 'Orange'},
    {id: 'ap', name: 'Apple'}
];

export function ListItem(){
    return(
        <View>
            {data.map((item) => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    )
}