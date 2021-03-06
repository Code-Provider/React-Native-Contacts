import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { View, Text } from "react-native";

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Contacts</Header>
    <Paragraph>
      The easiest way to keep track of your contacts.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined" onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
)

export default StartScreen ;