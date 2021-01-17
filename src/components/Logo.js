import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = (props) => (
  <Image source={require('../assets/logo.png')} style={styles.image} 
  {...props} />
)

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

export default Logo