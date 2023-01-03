import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext, ThemeTypes } from '../../context/ThemeContext';

export default function ToggleDarkMode({
    isBottom = false,
}: {
    isBottom?: boolean;
}) {

    const { dispatch, state } = useContext(ThemeContext)!;

    return (
        <TouchableOpacity
            style={isBottom ? state.switchBottom : state.switch}
            onPress={() => {
                if (state.container.backgroundColor === "#212121") {
                    dispatch({ type: ThemeTypes.LIGHT, payload: null })
                } else {
                    dispatch({ type: ThemeTypes.DARK, payload: null })
                }
            }}
        >
            <View style={state.whiteDot} />
            <Text style={state.switchPlchldr}>{""}</Text>
        </TouchableOpacity>
    )
}