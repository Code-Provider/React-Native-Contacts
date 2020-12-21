import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

const StartScreen = ({}) => (
  <Background>
    <Logo />
    <Header>Contacts</Header>
    <Paragraph>
      The easiest way to keep track of your contacts.
    </Paragraph>
    <Button mode="contained">
      Login
    </Button>
    <Button
      mode="outlined"
    >
      Sign Up
    </Button>
  </Background>
)

export default StartScreen ;