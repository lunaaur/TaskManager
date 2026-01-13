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
import { useFormik } from 'formik';
import { validationUserRegisterSchema } from '../../constants';

export const LoginForm = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const userData: IUserApiBody = {
      name: formik.values.name,
      password: formik.values.password,
    };
    try {
      const { token, user } = await registerUser(userData).unwrap();
      if (token) {
        await handleCreateUserToken(token);
        dispatch(saveUserData({ name: user.name }));
      }
    } catch (error: any) {
      Alert.alert('Ошибка', error.message);
      console.log(error, 'error registerUser');
    }
  };

  const formik = useFormik({
    initialValues: { name: '', password: '' },
    validationSchema: validationUserRegisterSchema,
    onSubmit: onSubmit,
  });

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
                text={formik.values.name}
                placeholder="Имя пользователя"
                errorText={formik.errors.name ? formik.errors.name : null}
                onChangeText={formik.handleChange('name')}
              />
            </Zord>
            <Zord marginZord={[20, 0, 0, 0]}>
              <TextInput
                text={formik.values.password}
                placeholder="Пароль"
                secureTextEntry={isHiddenPassword}
                onIconPress={() => setIsHiddenPassword(!isHiddenPassword)}
                onChangeText={formik.handleChange('password')}
                errorText={
                  formik.errors.password ? formik.errors.password : null
                }
                icon={isHiddenPassword ? <NotVisibleIcon /> : <VisibleIcon />}
              />
            </Zord>
          </InputBlock>
          <ButtonBlock>
            <Button
              buttonText={isLoading ? 'Загрузка...' : 'Подтвердить'}
              size={SizeEnum.MEDIUM}
              disabled={isLoading || !formik.isValid ? true : false}
              buttonColor={isLoading || !formik.isValid ? 'gray' : undefined}
              onPress={formik.handleSubmit}
            />
          </ButtonBlock>
        </Container>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};
