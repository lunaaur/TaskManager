import { TextInput, Zord } from '@elements';
import { Container, InputBlock, Wrapper } from './styled';
import { useState } from 'react';
import { NotVisibleIcon, VisibleIcon } from 'src/shared/ui/icons';

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  return (
    <Wrapper>
      <Container>
        <InputBlock>
          <Zord marginZord={[40, 0, 0, 0]}>
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
      </Container>
    </Wrapper>
  );
};
