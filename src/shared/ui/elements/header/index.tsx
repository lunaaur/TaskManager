import { Text } from '@atoms';
import styled from 'styled-components/native';
import { TextElementsProps } from '../../atoms/text';

export const Header = ({ ...props }: TextElementsProps) => {
  return (
    <HeaderContainer>
      <Text {...props} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  width: 100%;
  padding-horizontal: 20px;
`;
