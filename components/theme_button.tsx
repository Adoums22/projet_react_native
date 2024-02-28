import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ThemeButtons() {
    const [theme, setTheme] = useState<string>('');

    // Fonction pour récupérer le nom du thème depuis AsyncStorage
    const getThemeName = async (): Promise<string> => {
        try {
            const value = await AsyncStorage.getItem('themeName');
            if (value !== null) {
                console.log('Theme retrieved from AsyncStorage:', value);
                return value; // Retourne le nom du thème
            } else {
                console.error('No theme found in AsyncStorage');
                throw new Error('No theme found'); // Lève une erreur si aucun thème n'est trouvé
            }
        } catch (e) {
            console.error('Error reading theme from AsyncStorage:', e);
            throw e; // Lève une nouvelle erreur en cas d'échec de la récupération du thème
        }
    };

    // Fonction pour enregistrer le nom du thème dans AsyncStorage
    const storeThemeName = async (value: string) => {
        try {
            console.log(await AsyncStorage.setItem('themeName', value));
        } catch (e) {
            console.error('Error saving theme to AsyncStorage:', e);
        }
    };

    // Effet pour récupérer le nom du thème lors du montage du composant
    useEffect(() => {
        getThemeName()
            .then(themeName => {
                console.log('Theme obtained:', themeName);
                setTheme(themeName);
            })
            .catch(error => console.error('Failed to get theme:', error));
    }, []);

    // Fonctions pour changer le thème
    const handleLightPress = () => {
        console.log('Light theme selected');
        setTheme('light');
        storeThemeName('light'); // Enregistrer le nouveau thème dans AsyncStorage
    };

    const handleDarkPress = () => {
        console.log('Dark theme selected');
        setTheme('dark');
        storeThemeName('dark'); // Enregistrer le nouveau thème dans AsyncStorage
    };

    const handleBluePress = () => {
        console.log('Blue theme selected');
        setTheme('blue');
        storeThemeName('blue'); // Enregistrer le nouveau thème dans AsyncStorage
    };

    return (
        <>
            <Button title='light' onPress={handleLightPress} />
            <Button title='dark' onPress={handleDarkPress} />
            <Button title='blue' onPress={handleBluePress} />
        </>
    );
}
