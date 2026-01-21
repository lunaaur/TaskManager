import { LoginForm } from '../../atoms/login-form';
import { IUserApiBody } from 'src/types/store';
import { useState } from 'react';
import { useAuth } from '../../hooks';
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const [isSignUpScreen, setIsSignUpScreen] = useState<boolean>(true);
  const { handleAuth, isLoading } = useAuth();
  const {reset} = useNavigation();

  const handleUserAuthentication = async (name: string, password: string) => {
    const userData: IUserApiBody = {
      name: name,
      password: password,
    };
    const { success } = await handleAuth(userData, isSignUpScreen);
    if (success) {
      reset({ index: 0, routes: [{ name: 'tabs' as never }]})
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
