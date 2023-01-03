import { View, Text, TextInput, Image, Switch } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginForm from './components/LoginForm/LoginForm';
import { Icons } from '../../common/media';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 

export default function Login() {

  const { dispatch, state } = useContext(ThemeContext)!;
  const navigate = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={state.container}>

      <ToggleDarkMode />

      <View style={state.logoContainer}>
        <Image style={state.legoIcon} source={Icons.login.legoIcon} />
        <Text style={state.title}>Sign In</Text>
      </View>

      <LoginForm />

      <View style={state.footer}>
        <Text style={state.footerText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigate.navigate("Register")}
        >
          <Text style={state.footerLink}>Sign up</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}