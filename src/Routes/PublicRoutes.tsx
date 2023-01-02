import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Login from '../views/LoginScreen/Login';

const Stack = createStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
              name="Login"
              component={() => 
                <Login />
              }
              options={{ headerShown: false }}
            />
    </Stack.Navigator>
  );
}