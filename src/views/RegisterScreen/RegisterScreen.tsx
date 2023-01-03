import { View, Text, Image, TouchableOpacity } from 'react-native'
import RegisterForm from './components/RegisterForm/RegisterForm'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import ToggleDarkMode from '../../common/components/ToggleDarkMode';
import { Icons } from '../../common/media';
import BackArrow from '../../common/components/BackArrow';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function RegisterScreen() {

  const navigate = useNavigation<StackNavigationProp<any>>();
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

      <View style={state.footer}>
        <Text style={state.footerText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigate.goBack()}
        >
          <Text style={state.footerLink}>Log In</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}