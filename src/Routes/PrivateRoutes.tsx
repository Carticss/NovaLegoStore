import { createStackNavigator } from '@react-navigation/stack';
import { Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import LoggedScreen from '../views/LoggedScreen/LoggedScreen';

const Stack = createStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
              name="Login"
              component={LoggedScreen}
              options={{ headerShown: false }}
            />

    </Stack.Navigator>
  );
}