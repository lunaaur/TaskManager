import { useLoginUserMutation, useRegisterUserMutation } from 'src/store/api/baseApi';
import { LoginForm } from '../../atoms/login-form';
import { IUserApiBody } from 'src/types/store';
import { handleCreateUserToken } from '../../helpers';
import { useDispatch } from 'react-redux';
import { saveUserData } from 'src/store/slices/user/user-slice';
import { Alert } from 'react-native';
import { useState } from 'react';

export const Login = () => {
  const [isSignUpScreen, setIsSignUpScreen] = useState<boolean>(true);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSignUp = async (userData: IUserApiBody) => {
    try {
      const { token, user } = await registerUser(userData).unwrap();
      if (token) {
        await handleCreateUserToken(token);
        dispatch(saveUserData({ name: user.name, id: user.id }));
      }
    } catch (error: any) {
      Alert.alert('Ошибка', error.message);
      console.log(error, 'error registerUser');
    }
  }
    const handleSignIn = async (userData: IUserApiBody) => {
    try {
      const { token, user } = await loginUser(userData).unwrap();
      if (token) {
        await handleCreateUserToken(token);
        dispatch(saveUserData({ name: user.name, id: user.id }));
      }
    } catch (error: any) {
      Alert.alert('Ошибка', error.message);
      console.log(error, 'error registerUser');
    }
  }

  const handleUserAuthentication = async (name: string, password: string) => {
    const userData: IUserApiBody = {
      name: name,
      password: password,
    };
    try {
        if (isSignUpScreen) {
            await handleSignUp(userData)
        } else {
            await handleSignIn(userData)
        }
    } catch (error) {
        console.log(error, 'Error handleUserAuthentication')
    }
  };

  const handleChangeForm = () => setIsSignUpScreen(!isSignUpScreen);
  return (
      <LoginForm
        isSignUpScreen={isSignUpScreen}
        formHeader={isSignUpScreen ? 'Регистрация' : 'Вход'}
        handleChangeForm={handleChangeForm}
        handleUserAuthentication={handleUserAuthentication}
        isLoading={isLoading}
      />
  );
};
