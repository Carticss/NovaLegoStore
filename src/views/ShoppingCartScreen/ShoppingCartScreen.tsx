import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';
import LogOutButton from '../../common/components/LogOutButton';
import BackArrow from '../../common/components/BackArrow';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import CartProductList from './components/StoreProducts/CartProducts';
import PayAllButton from '../../common/components/PayAllButton';


export default function ShoppingCartScreen() {

  const { items, addItem, removeItem } = useContext(ShoppingCartContext);
  const { dispatch, state } = useContext(ThemeContext)!;

  return (
    <View style={state.container}>
      { items.length > 0 ?
        <CartProductList products={items} /> :
        <Text style={[state.productName]}>Thanks For Buying in NovaLegoStore!</Text>
      }
      <BackArrow />
      <ToggleDarkMode isBottom />
      <LogOutButton />
      <PayAllButton />
    </View>
  )
}