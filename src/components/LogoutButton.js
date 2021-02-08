import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const LogoutButton = ({ Logout }) => (
  <TouchableOpacity onPress={Logout}>
    <Image style={styles.image} source={require('../assets/logout.png')} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
    image: {
      width: 24,
      height: 24,
    },
  })

export default LogoutButton