import { Login } from 'src/features/login/components/login';
import { Wrapper } from './styled';

export const Main = () => {
  return (
    <Wrapper>
        {/**  для логина отображать лого и форму*/}
      <Login />
    </Wrapper>
  );
};
