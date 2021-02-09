import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const ChatButton = ({ Add }) => (
  <TouchableOpacity onPress={Add} style={styles.container}> 
    <Image style={styles.image} source={require('../assets/text.png')} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 13 + getStatusBarHeight(),
        left: 320,
      },
    image: {
        marginTop : 1,
      width: 20,
      height: 20,
    },
  })
//
export default ChatButton