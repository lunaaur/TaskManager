import { LoginForm } from '../../atoms/login-form';
import { IUserApiBody } from 'src/types/store';
import { useState } from 'react';
import { useAuth } from '../../hooks';

export const Login = () => {
  const [isSignUpScreen, setIsSignUpScreen] = useState<boolean>(true);
  const { handleAuth, isLoading } = useAuth();

  const handleUserAuthentication = async (name: string, password: string) => {
    const userData: IUserApiBody = {
      name: name,
      password: password,
    };
    await handleAuth(userData, isSignUpScreen);
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
