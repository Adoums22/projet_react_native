import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/components/useColorScheme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Themes from '@/constants/themes';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // Récupérer et afficher la valeur du thème dans la console
  getThemeName().then(theme => console.log(theme)).catch(error => console.error(error));

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? Themes.dark : Themes.light}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </>
  )

async function storeThemeName(value: string) {
  try {
    console.log(await AsyncStorage.setItem('themeName', value))
  } catch (e) {
    // saving error
  }
}

// Fonction pour récupérer le nom du thème
async function getThemeName(): Promise<string> {
  try {
    const value = await AsyncStorage.getItem('themeName');
    if(value !== null) {
      return value; // Retourne le nom du thème
    } else {
      throw new Error('No theme found'); // Lève une erreur si aucun thème n'est trouvé
    }
  } catch(e) {
    console.error('Error reading theme:', e);
    throw e; // Lève une nouvelle erreur en cas d'échec de la récupération du thème
  }
}
}

