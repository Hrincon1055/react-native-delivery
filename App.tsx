import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { RolesScreens } from './src/Presentation/views/roles/Roles';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabsNavigator';
import { ClentTabsNavigator } from './src/Presentation/navigator/ClienTabsNavigator';
import { ProfileUpdateScreen } from './src/Presentation/views/profile/update/ProfileUpdate';
import { User } from './src/Domain/entities/User';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserProvider } from './src/Presentation/context/UserContext';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RolesScreens: undefined;
  AdminTabsNavigator: undefined;
  ClentTabsNavigator: undefined;
  ProfileUpdateScreen: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
// INICIO
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
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
            />
            <Stack.Screen
              name='ClentTabsNavigator'
              component={ClentTabsNavigator}
            />
            <Stack.Screen
              name='ProfileUpdateScreen'
              component={ProfileUpdateScreen}
              options={{
                headerShown: true,
                title: 'Actualizar Usuario',
                headerBackVisible: true,
              }}
            />
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};
// const UserState =({children}: any)=>{
//   return (
//     <UserProvider>
//       {children}
//     </UserProvider>
//   )
// }
export default App;
