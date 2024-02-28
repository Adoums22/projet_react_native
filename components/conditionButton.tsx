import React from "react";
import { View, Text } from "./Themed";


export function ConditionButton({ loading, error, title}: { loading?: boolean, error?: boolean, title?: string}){
    let content

    if (error) {
        content = <Text style={{ fontSize: 24, color: 'red'}}>Error</Text>
    } else if (loading) {
        content = <Text style={{ fontSize: 24, color: 'gray'}}>Loading</Text>
    }else {
        content = (
            <View>
                <Text style={{fontSize: 60}}>{title}</Text>
            </View>
        )
    }

    return <View style={{padding: 24}}>{content}</View>;
}
