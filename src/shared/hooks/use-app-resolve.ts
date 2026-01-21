import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useGetUserQuery } from 'src/store/api/baseApi';

enum ItinitalRoutesEnum {
  LOGIN = 'login',
  TAB = 'tabs',
}

type AppResolveResult = {
  initialRouteName: ItinitalRoutesEnum;
  isLoading: boolean;
};

export const useAppResolve = (): AppResolveResult => {
  const [token, setToken] = useState<string | null>(null);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('userToken').then(storedToken => {
      setToken(storedToken);
      setIsCheckingToken(false);
    });
  }, []);

  const { data: user, isLoading: isUserLoading } = useGetUserQuery(undefined, {
    skip: !token,
  });

  const isAuthenticated = !!token && !!user;

  const initialRouteName = isAuthenticated
    ? ItinitalRoutesEnum.TAB
    : ItinitalRoutesEnum.LOGIN;

  return {
    initialRouteName,
    isLoading: isCheckingToken || (token && isUserLoading ? true : false),
  };
};
