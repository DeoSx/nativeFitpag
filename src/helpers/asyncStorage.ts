import AsyncStorage from '@react-native-community/async-storage';

export const setData = async (key: string, value: string): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonResult = await AsyncStorage.getItem(key);
    // @ts-ignore
    const result = JSON.parse(jsonResult);
    return result;
  } catch (e) {
    console.error(e);
  }
};
