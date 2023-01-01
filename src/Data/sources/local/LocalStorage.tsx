import AsyncStorage from '@react-native-async-storage/async-storage';

export const LocalStorage = () => {
  const save = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('LocalStorage LINE 8 =>', error);
    }
  };
  const getItem = async (key: string) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch (error) {
      console.log('LocalStorage LINE 16 =>', error);
    }
  };
  const remove = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('LocalStorage LINE 23 =>', error);
    }
  };
  return {
    save,
    getItem,
    remove,
  };
};