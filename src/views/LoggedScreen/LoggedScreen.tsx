import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';
import { ThemeContext } from '../../context/ThemeContext';
import StoreList from './components/StoreList/StoreList';


export default function LoggedScreen() {

    return (
        <>
            <StoreList />
        </>
    )
}