import { Button, TextInput, Zord } from '@elements';
import {
  ButtonBlock,
  Container,
  FormText,
  InputBlock,
  TextBlock,
  Wrapper,
} from './styled';
import { useState } from 'react';
import { NotVisibleIcon, VisibleIcon } from 'src/shared/ui/icons';
import { Alert, KeyboardAvoidingView } from 'react-native';
import { devicePlatform, SizeEnum } from 'src/shared/variables';
import { IUserApiBody } from 'src/types/store';
import { useRegisterUserMutation } from 'src/store/api/baseApi';
import { handleCreateUserToken } from '../../helpers';
import { useDispatch } from 'react-redux';
import { saveUserData } from 'src/store/slices/user/user-slice';

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleButtonPress = async () => {
    const userData: IUserApiBody = {
      name: loginValue,
      password: passwordValue,
    };
    try {
      const { token, user } = await registerUser(userData).unwrap();
      if (token) {
       await handleCreateUserToken(token); 
       dispatch(saveUserData({name: user.name}))
      }
    } catch (error: any) {
      Alert.alert('Ошибка', error.message);
      console.log(error, 'error registerUser');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={devicePlatform === 'ios' ? 'padding' : 'height'}
    >
      <Wrapper>
        <Container>
          <TextBlock>
            <FormText>Авторизация</FormText>
          </TextBlock>
          <InputBlock>
            <Zord marginZord={[30, 0, 0, 0]}>
              <TextInput
                text={loginValue}
                placeholder="login"
                onChangeText={value => setLoginValue(value)}
              />
            </Zord>
            <Zord marginZord={[20, 0, 0, 0]}>
              <TextInput
                text={passwordValue}
                placeholder="password"
                secureTextEntry={isHiddenPassword}
                onIconPress={() => setIsHiddenPassword(!isHiddenPassword)}
                onChangeText={value => setPasswordValue(value)}
                icon={isHiddenPassword ? <NotVisibleIcon /> : <VisibleIcon />}
              />
            </Zord>
          </InputBlock>
          <ButtonBlock>
            <Button
              buttonText={isLoading ? 'Загрузка...' : 'Подтвердить'}
              size={SizeEnum.MEDIUM}
              disabled={isLoading ? true : false}
              buttonColor={isLoading ? 'gray' : undefined}
              onPress={handleButtonPress}
            />
          </ButtonBlock>
        </Container>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};
