import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <NavigationContainer independent={true}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Modal2" onPress={() => navigation.navigate('modal2')} />
      </View>
    </NavigationContainer>
  );
}
