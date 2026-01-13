import { Login } from 'src/features/login/components/login';
import { Wrapper } from './styled';
import { useAppSelector } from 'src/store';

export const Main = () => {
  const user = useAppSelector(store => store.user);

  return <Wrapper>{user.name !== null ? <></> : <Login />}</Wrapper>;
};
