import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components/native';
import { Container, EmptyCircle, IconContainer, StatusBlock } from './styled';
import { SuccessIcon } from '@icons';

type NotCompletedStatusProps = {
  isStatusPressed: boolean;
  handlePress: () => Promise<void>;
};

export const NotCompletedStatus = ({
  isStatusPressed,
  handlePress,
}: NotCompletedStatusProps) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isStatusPressed) {
      scaleAnim.setValue(0);

      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 90,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 50,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }
  }, [isStatusPressed, scaleAnim]);

  return (
    <StatusTouchable
      onPress={handlePress}
      disabled={isStatusPressed}
      activeOpacity={0.7}
    >
      <Container>
        <EmptyCircle />
            {isStatusPressed && (
                <IconContainer>
                <SuccessIcon width={30} height={30}/>
                </IconContainer>
            )}
        <StatusBlock
          style={{
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
          }}
        />
      </Container>
    </StatusTouchable>
  );
};

const StatusTouchable = styled.TouchableOpacity``;
