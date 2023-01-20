import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { Icons } from '../media';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function BackArrow() {

    const { dispatch, state } = useContext(ThemeContext)!;
    const navigate = useNavigation<StackNavigationProp<any>>();

    return (
        <View
            style={state.arrowContainer}
        >
            <TouchableOpacity
                onPress={() => navigate.goBack()}
            >
                <Image 
                    style={state.arrowIcon} 
                    source={
                        state.container.backgroundColor === "#212121" ?
                        Icons.login.backArrowDark :
                        Icons.login.backArrowLight
                    } 
                />
            </TouchableOpacity>
        </View>
    )
}