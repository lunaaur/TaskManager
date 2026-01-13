import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleCreateUserToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.log(error, 'error handleCreateUserToken');
    throw error;
  }
};
