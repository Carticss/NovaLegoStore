import { View, Text, Image } from 'react-native'
import RegisterForm from './RegisterForm/RegisterForm'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';
import { Icons } from '../../common/media';
import BackArrow from '../../common/components/BackArrow';

export default function RegisterScreen() {

  const { dispatch, state } = useContext(ThemeContext)!;

  return (
    <View style={state.container}>

      <ToggleDarkMode />
      <BackArrow />

      <View style={state.logoContainer}>
        <Image style={state.legoIcon} source={Icons.login.legoIcon} />
        <Text style={state.title}>Register</Text>
      </View>

      <RegisterForm />
      
    </View>
  )
}