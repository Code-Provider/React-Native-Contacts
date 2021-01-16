import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Header } from 'react-native-elements';
import LogoutButton from './LogoutButton'
import AddContactButton from './AddContactButton' 

const Navbar = (props) => (
    <Header 
    containerStyle = {StyleSheet.flatten(styles.navbar)}
  centerComponent={{ text: 'Contacts', style: { color: '#000', fontSize :15, fontWeight: "bold" } }}
  rightComponent={<AddContactButton/>}
  leftComponent={<LogoutButton />}
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


