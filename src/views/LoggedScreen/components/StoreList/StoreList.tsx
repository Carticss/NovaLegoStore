import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import ToggleDarkMode from '../../../../common/components/ToggleDarkMode'
import { ThemeContext } from '../../../../context/ThemeContext';
import { ShoppingCartContext } from '../../../../context/ShoppingCartContext';
import LogOutButton from '../../../../common/components/LogOutButton';
import StoreProductList from '../StoreProducts/StoreProducts';
import { useStoreList } from './useStoreList';

export default function StoreList() {

    const { dispatch, state } = useContext(ThemeContext)!;

    const { products, details } = useStoreList();

    return (
        <View style={state.container}>
            {
                products == undefined ?
                    <ActivityIndicator size="large" color="#0000ff" />
                    :
                    <StoreProductList products={products} />
            }
            <ToggleDarkMode isBottom />
            <LogOutButton />
        </View>
    )
}