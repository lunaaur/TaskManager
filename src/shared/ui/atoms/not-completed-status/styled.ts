import { clrGray25, clrGray500, clrGreen } from '@variables';
import { Animated } from 'react-native';

import styled from 'styled-components/native';

export const StatusTouchable = styled.TouchableOpacity``;

export const Container = styled.View`
  width: 30px;
  height: 30px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const EmptyCircle = styled.View`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${clrGray25};
  border-width: 1px;
  border-color: ${clrGray500};
`;

export const IconContainer = styled.View`
  position: absolute;
  z-index: 10px;
`;

export const StatusBlock = styled(Animated.View)`
  width: 30px;
  height: 30px;
  background-color: ${clrGreen};
  border-radius: 15px;
  border-width: 1px;
  position: absolute;
  border-color: ${clrGreen};
`;
