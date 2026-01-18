import { Login } from 'src/features/login/components/login';
import { LoaderContainer, Wrapper } from './styled';
import { useGetUserQuery } from 'src/store/api/baseApi';
import { ActivityIndicator } from 'react-native';
import { clrGreen } from 'src/shared/variables';

export const Main = () => {
  const { data, isLoading } = useGetUserQuery();

  if (isLoading) {
    return (
    <Wrapper>
      <LoaderContainer>
      <ActivityIndicator size={'large'} color={clrGreen}/>
      </LoaderContainer>
    </Wrapper>
    )
  }

  return <Wrapper>{data && data.user.name ?  <></>: <Login />}</Wrapper>;
};
