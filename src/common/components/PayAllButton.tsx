import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext, ThemeTypes } from '../../context/ThemeContext';
import auth from '@react-native-firebase/auth';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

export default function PayAllButton() {

  const { payAll, items } = useContext(ShoppingCartContext);
    const { dispatch, state } = useContext(ThemeContext)!;

    return (
        <TouchableOpacity
            disabled={items.length == 0}
            style={items.length > 0 ? state.payAllBottom : [state.payAllBottom, { backgroundColor: 'gray' }]}
            onPress={() => {payAll()}}
        >
            <Text style={state.switchPlchldr}>{"Pay All"}</Text>
        </TouchableOpacity>
    )
}