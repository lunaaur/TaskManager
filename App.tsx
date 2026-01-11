import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IStackScreen } from '@navigation/types/navigation-types';
import { commonRoutes } from '@navigation/index';
import { Provider } from 'react-redux';
import { store } from 'src/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <AppContent />
    </Provider>
  );
}

function AppContent() {

  const renderRoute = (route: IStackScreen) => {
    return <Stack.Screen key={route.name} {...route} />;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='main'
        screenOptions={{ headerShown: false }}>
        {commonRoutes.map(renderRoute)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
