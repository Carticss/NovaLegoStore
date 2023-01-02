import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function LoggedScreen() {
    return (
        <View>
            <Text>Private Routes</Text>
            <TouchableOpacity
                onPress={() => {
                    auth()
                        .signOut()
                        .then(() => console.log('User signed out!'));
                }}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}