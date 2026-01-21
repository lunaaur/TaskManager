import { ActivityIndicator } from 'react-native';
import { LoaderContainer, Wrapper } from './styled';
import { clrGreen } from '@variables';

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderContainer>
        <ActivityIndicator size={'large'} color={clrGreen} />
      </LoaderContainer>
    </Wrapper>
  );
};
