import { indentHorizontal } from '@variables';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: white;
  height: 100%;
`;

export const Container = styled.View`
  padding-horizontal: ${indentHorizontal}px;
`;
