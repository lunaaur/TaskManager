import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IStackScreen } from '@navigation/types/navigation-types';
import { commonRoutes } from '@navigation/index';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppContent />
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
