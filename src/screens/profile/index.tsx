import { UserInfo } from 'src/features/user-info/components/user-info';
import { Container, Wrapper } from './styled';

export const Profile = () => {
  return (
    <Wrapper>
      <Container>
        <UserInfo />
      </Container>
    </Wrapper>
  );
};
