import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  IconWrapper,
  TabBarButton,
  TabBarContainer,
  TabBarText,
} from './styled';

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <TabBarContainer indentBottom={bottom}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icons =
          options?.tabBarIcon &&
          options.tabBarIcon({ focused: isFocused, color: 'black', size: 10 });

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarButton
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : undefined}
            onPress={onPress}
          >
            <IconWrapper>{icons}</IconWrapper>
            <TabBarText isFocusedButton={isFocused}>{label}</TabBarText>
          </TabBarButton>
        );
      })}
    </TabBarContainer>
  );
};
