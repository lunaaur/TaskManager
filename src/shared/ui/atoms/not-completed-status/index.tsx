import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import {
  Container,
  EmptyCircle,
  IconContainer,
  StatusBlock,
  StatusTouchable,
} from './styled';
import { SuccessIcon } from '@icons';

type NotCompletedStatusProps = {
  isCompleted: boolean;
  isStatusPressed: boolean;
  handlePress: () => Promise<void>;
};

export const NotCompletedStatus = ({
  isCompleted,
  isStatusPressed,
  handlePress,
}: NotCompletedStatusProps) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isStatusPressed) {
      scaleAnim.setValue(0);

      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    } else {
      if (isCompleted) {
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 50,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }).start();
      }
    }
  }, [isStatusPressed, scaleAnim, isCompleted]);

  return (
    <StatusTouchable
      onPress={handlePress}
      disabled={isStatusPressed}
      activeOpacity={0.7}
    >
      <Container>
        <EmptyCircle />
        {isCompleted && (
          <IconContainer>
            <SuccessIcon width={30} height={30} />
          </IconContainer>
        )}
        <StatusBlock
          style={{
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: isCompleted ? [20, 40] : [0, 1],
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
