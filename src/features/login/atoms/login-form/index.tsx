import { Button, TextInput, Zord } from '@elements';
import {
  BackIconBlock,
  ButtonBlock,
  Container,
  FormText,
  InputBlock,
  SignInText,
  SignInTextContainer,
  TextBlock,
  TextBlockContainer,
  Wrapper,
} from './styled';
import { useState } from 'react';

import { KeyboardAvoidingView } from 'react-native';
import { useFormik } from 'formik';
import { validationUserRegisterSchema } from '../../constants';
import { devicePlatform, SizeEnum } from '@variables';
import { BackIcon, NotVisibleIcon, VisibleIcon } from '@icons';

type LoginFormProps = {
  handleUserAuthentication: (name: string, password: string) => void;
  isSignUpScreen: boolean;
  formHeader: string;
  handleChangeForm: () => void;
  isLoading: boolean;
};

export const LoginForm = ({
  handleUserAuthentication,
  isSignUpScreen,
  formHeader,
  handleChangeForm,
  isLoading,
}: LoginFormProps) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  const onSubmit = async () => {
    handleUserAuthentication(formik.values.name, formik.values.password);
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
          {!isSignUpScreen && (
            <BackIconBlock onPress={handleChangeForm}>
              <BackIcon />
            </BackIconBlock>
          )}
          <TextBlock>
            <TextBlockContainer>
              <FormText>{formHeader}</FormText>
            </TextBlockContainer>
          </TextBlock>
          <InputBlock>
            <Zord marginZord={[30, 0, 0, 0]}>
              <TextInput
                text={formik.values.name}
                placeholder="Имя пользователя*"
                errorText={formik.errors.name ? formik.errors.name : null}
                onChangeText={formik.handleChange('name')}
              />
            </Zord>
            <Zord marginZord={[20, 0, 0, 0]}>
              <TextInput
                text={formik.values.password}
                placeholder="Пароль*"
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
          {isSignUpScreen && (
            <SignInTextContainer onPress={handleChangeForm}>
              <SignInText>Вход</SignInText>
            </SignInTextContainer>
          )}
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
