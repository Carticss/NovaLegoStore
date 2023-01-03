import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext, ThemeTypes } from '../../context/ThemeContext';
import auth from '@react-native-firebase/auth';

export default function LogOutButton() {

    const { dispatch, state } = useContext(ThemeContext)!;

    return (
        <TouchableOpacity
            style={state.logOutBottom}
            onPress={() => {
                auth()
                    .signOut()
                    .then(() => console.log('User signed out!'));
            }}
        >
            <Text style={state.switchPlchldr}>{"Log Out"}</Text>
        </TouchableOpacity>
    )
}