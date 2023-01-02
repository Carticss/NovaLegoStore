import { View, Text, TextInput, Image, Switch } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginForm from './LoginForm/LoginForm';
import { Icons } from '../../common/media';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';

export default function Login() {

  const { dispatch, state } = useContext(ThemeContext)!;

  return (
    <View style={state.container}>

      <ToggleDarkMode />

      <View style={state.logoContainer}>
        <Image style={state.legoIcon} source={Icons.login.legoIcon} />
        <Text style={state.title}>Account</Text>
      </View>

      <LoginForm />

    </View>
  )
}