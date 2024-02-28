import React, { useState, useEffect } from 'react';
import { Button, View, ActivityIndicator, Text } from 'react-native';

export function LoaderComponenet() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const countEvery3 = Math.floor(count / 3);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Mettre fin au chargement
    }, 2000); // Simuler une attente de 2 secondes
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? ( // Afficher le loader si loading est vrai
        <ActivityIndicator size="large" color="#FF0000" />
      ) : ( // Sinon, afficher le bouton d'incrémentation
        <>
          <Button
            title={`Increment ${count}`}
            onPress={() => {
              setCount(count + 1);
            }}
          />
          <Text>Count every 3: {countEvery3}</Text>
        </>
      )}
    </View>
  );
}
