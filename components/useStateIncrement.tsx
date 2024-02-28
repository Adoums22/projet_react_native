import React, { useRef, useState } from "react";
import { View, Text } from "./Themed";
import { Button } from "react-native";

export function Changement_Valeur(){
    const value = useRef(0);
    let [counter, setValue] = useState (0);

  return (
    <View>
      <Button
        title='Click to add number'
        onPress={() => {
          value.current = value.current + 1;
          console.log('value:', value.current);
        }}
      />
        <Button title='Click to delete number' onPress={() => {
                value.current = value.current - 1;
        }}/>
        <Button title='reset' onPress={() => {
                value.current = 0;
        }}/>
        <Button title='Update' onPress={() => {
                setValue(value.current);
        }}/>
        <Text>{counter}</Text>
        </View>
    )
    
}