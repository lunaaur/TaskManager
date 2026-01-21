import { clrGreen2 } from '@variables';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

type TabBarTextProps = {
  isFocusedButton: boolean;
};

type TabBarContainerProps = {
  indentBottom: number;
};

export const TabBarContainer = styled.View<TabBarContainerProps>`
  background-color: #ffffff;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0 ${(props: TabBarContainerProps) => props.indentBottom + 5}px
    0;
  shadow-color: rgba(0, 0, 0, ${Platform.OS === 'android' ? 0.5 : 0.08});
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 40px;
  elevation: 5;
`;

export const TabBarButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const TabBarText = styled.Text<TabBarTextProps>`
  color: ${(props: TabBarTextProps) =>
    props.isFocusedButton ? clrGreen2 : 'black'};
  font-size: 15px;
  font-weight: 600px;
`;
