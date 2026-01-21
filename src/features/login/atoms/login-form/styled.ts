
import { clrBlue } from '@variables';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Container = styled.View`
  width: 80%;
  background-color: #f8f8f8;
  max-height: 90%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputBlock = styled.View`
  width: 80%;
`;

export const ButtonBlock = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const TextBlock = styled.View`
  padding-top: 20px;
`;

export const TextBlockContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1.3px;
`;

export const SignInTextContainer = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SignInText = styled.Text`
  color: ${clrBlue};
`;
export const BackIconBlock = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 25px;
`;
