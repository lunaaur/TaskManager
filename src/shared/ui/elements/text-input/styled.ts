import styled from 'styled-components/native';
import { InputSize } from '.';

export const placeholderColor = '#7B7B7B';
export const placeholderColorActive = '#dbdbdb';

type FieldBlockProps = {
  size: InputSize;
  color?: string;
};

export const FieldBlock = styled.View<FieldBlockProps>`
  height: ${(props: FieldBlockProps) => {
    switch (props.size) {
      case 'small':
        return '40px';
      case 'medium':
        return '50px';
      case 'large':
        return '80px';
      default:
        return '50px';
    }
  }};
  background-color: ${(props: FieldBlockProps) =>
    props.color ? props.color : '#dbdbdb'};
  justify-content: center;
  padding-horizontal: 10px;
  border-radius: 15px;
`;

export const IconContainer = styled.TouchableOpacity`
position: absolute;
right: 10px;
bottom: 13px;
z-index: 10;
`