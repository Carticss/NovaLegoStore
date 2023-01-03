import { createStackNavigator } from '@react-navigation/stack';
import { Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import LoggedScreen from '../views/LoggedScreen/LoggedScreen';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';
import ShoppingCartScreen from '../views/ShoppingCartScreen/ShoppingCartScreen';
import Header from '../common/components/Header';
import ProductDetailView from '../views/ProductDetailView/ProductDetailView';


const Stack = createStackNavigator();

export function PrivateRoutes() {
  return (
    <ShoppingCartProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Logged"
          component={LoggedScreen}
          options={{
            header: ({ navigation }) => (
              <Header
                rightButtonText="Cart"
                onRightButtonPress={() => navigation.navigate('Cart')}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailView}
          options={{
            header: ({ navigation }) => (
              <Header
                rightButtonText="Cart"
                onRightButtonPress={() => navigation.navigate('Cart')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </ShoppingCartProvider>
  );
}