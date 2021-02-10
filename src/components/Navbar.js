import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Header } from 'react-native-elements';
import LogoutButton from './LogoutButton'
import AddContactButton from './AddContactButton' 
import { TouchableOpacity } from 'react-native-gesture-handler';

const Navbar = ({Add, Logout, text, onPressText, ...props}) => (
    <Header 
    containerStyle = {StyleSheet.flatten(styles.navbar)}
  centerComponent={<TouchableOpacity onPress = {onPressText}><Text style= {{color: '#000', fontSize :15, fontWeight: "bold" }}>{text}</Text></TouchableOpacity>}
  rightComponent={<AddContactButton Add = {Add}/>}
  leftComponent={<LogoutButton Logout = {Logout}/>}
    />

)

const styles = StyleSheet.create({
    navbar : {
        width:370,
        marginBottom : 20, 
        marginTop : 10,
 
        backgroundColor : 'white',
        textAlign: 'center',
    },
   
})

export default Navbar 


