import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IStackScreen } from '@navigation/types/navigation-types';
import { commonRoutes } from '@navigation/index';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from 'src/features/common/molecules/tab-bar';
import { useMemo } from 'react';
import { useAppResolve } from 'src/shared/hooks';
import { Loader } from 'src/features/common/molecules/loader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const { initialRouteName, isLoading } = useAppResolve();

  const renderRoute = (route: IStackScreen) => {
    return <Stack.Screen key={route.name} {...route} />;
  };

  if (isLoading) {
    return <Loader />
  }

  return (
    <NavigationContainer key={initialRouteName}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
      >
        {commonRoutes.map(renderRoute)}
        <Stack.Screen name="tabs" key="tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {

  const tabRoutes = useMemo(() => {
  return commonRoutes.filter(elem => elem?.router === 'tab')
  }, []);

  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      {tabRoutes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            headerShown: false,
             tabBarIcon: ({ focused }) => {
              return focused ? route.icons![0] : route.icons![1];
            },
          }}
          
        />
      ))}
    </Tab.Navigator>
  );
}

export default App;
