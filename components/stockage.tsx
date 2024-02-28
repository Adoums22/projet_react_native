import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeThemeName(value: string) {
  try {
    await AsyncStorage.setItem('themeName', value)
  } catch (e) {
    // saving error
  }
}

async function getThemeName(): Promise<string> {
  try {
    const value = await AsyncStorage.getItem('themeName')
    if(value !== null) {
      return value;
    } else { throw new Error(); }
  } catch(e) {
    // error reading value
    throw new Error();
  }
}
