import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  background-color: #ffffff;
  width: 100%;
  height: 40%;
  elevation: 5;
  shadow-color: rgba(0, 0, 0, ${Platform.OS === 'android' ? 0.5 : 0.08});
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 40px;
  border-radius: 15px;
`;

export const UserBlock = styled.View`
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const UserInfoBlock = styled.View`
flex: 1;
max-width: 70%;
height: 70%;
display: flex;
justify-content: space-between;
align-items: center;

`