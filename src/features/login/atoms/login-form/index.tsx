import { Button, TextInput, Zord } from '@elements';
import { ButtonBlock, Container, FormText, InputBlock, TextBlock, Wrapper } from './styled';
import { useState } from 'react';
import { NotVisibleIcon, VisibleIcon } from 'src/shared/ui/icons';
import { KeyboardAvoidingView } from 'react-native';
import { devicePlatform, SizeEnum } from 'src/shared/variables';

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  const handleButtonPress = () => {};

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
                buttonText="Подтвердить"
                size={SizeEnum.MEDIUM}
                onPress={handleButtonPress}
              />
            </ButtonBlock>
        </Container>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};
