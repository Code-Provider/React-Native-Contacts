import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const AddContactButton = ({ Add }) => (
  <TouchableOpacity onPress={Add}>
    <Image style={styles.image} source={require('../assets/plus.png')} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
    image: {
        marginTop : 1,
      width: 20,
      height: 20,
    },
  })

export default AddContactButton