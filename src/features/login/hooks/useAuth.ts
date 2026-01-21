import { useDispatch } from 'react-redux';
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from 'src/store/api/baseApi';
import { IUserApiBody } from 'src/types/store';
import { handleCreateUserToken } from '../helpers';
import { saveUserData } from 'src/store/slices/user/user-slice';
import { Alert } from 'react-native';
import { useCallback, useRef } from 'react';

type HandleAuthResult = { success: boolean; error?: Error };

export type AuthResult = {
  handleAuth: (
    userData: IUserApiBody,
    isSignUp: boolean,
  ) => Promise<HandleAuthResult>;
  isLoading: boolean;
};

export const useAuth = (): AuthResult => {
  const dispatch = useDispatch();

  const isProcessingRef = useRef<boolean>(false);
  const [registerUser, { isLoading: isRegistering }] =
    useRegisterUserMutation();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const handleAuth = useCallback(
    async (
      userData: IUserApiBody,
      isSignUp: boolean,
    ): Promise<HandleAuthResult> => {
      if (isProcessingRef.current) {
        return { success: false, error: new Error('Операция уже выполняется') };
      }

      try {
        isProcessingRef.current = true;
        const action = isSignUp ? registerUser : loginUser;
        const { token, user } = await action(userData).unwrap();

        if (token) {
          await handleCreateUserToken(token);
          dispatch(saveUserData({ name: user.name, id: user.id }));
          return { success: true };
        }
        return { success: false };
      } catch (error: any) {
        Alert.alert('Ошибка', error.message);
        return { success: false, error };
      } finally {
        isProcessingRef.current = false;
      }
    },
    [dispatch, registerUser, loginUser],
  );

  return {
    handleAuth,
    isLoading: isRegistering || isLoggingIn,
  };
};
