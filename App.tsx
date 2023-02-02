import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { RolesScreens } from './src/Presentation/views/roles/Roles';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabsNavigator';
import { ClentTabsNavigator } from './src/Presentation/navigator/ClienTabsNavigator';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RolesScreens: undefined;
  AdminTabsNavigator: undefined;
  ClentTabsNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
// INICIO
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name='RegisterScreen'
          component={RegisterScreen}
          options={{ headerShown: true, title: 'Resgister' }}
        />

        <Stack.Screen
          name='RolesScreens'
          component={RolesScreens}
          options={{
            headerShown: true,
            title: 'Selecciona un rol',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name='AdminTabsNavigator'
          component={AdminTabsNavigator}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name='ClentTabsNavigator'
          component={ClentTabsNavigator}
          // options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
