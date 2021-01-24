import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const LogoutButton = ({ logout }) => (
  <TouchableOpacity onPress={logout}>
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