import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import UserFormScreen from './screens/UserFormScreen'
import UserListScreen from './screens/UserListScreen';

// cria o "stack navigation", que organiza a navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserForm'>
        <Stack.Screen
        name="UserList"component={UserFormScreen}
        options={{ title: 'Lista de Usuário '}}
        />

        <Stack.Screen
          name="UserForm"
          component={UserFormScreen}
          options={{ title: 'Formulário de Usuário'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


