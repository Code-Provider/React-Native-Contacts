import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Header } from 'react-native-elements';
import BackButton2 from '../components/BackButton2'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const Navbar2 = ({goBack, text,  ...props}) => (
    <Header 
    containerStyle = {StyleSheet.flatten(styles.navbar)}
  centerComponent={{ text: text, style: { color: '#000', fontSize :16, fontWeight: "bold", marginBottom : 5 } }}
  leftComponent={<BackButton2 goBack = {goBack}/>}
    />

)

const styles = StyleSheet.create({
    navbar : {
        width:'100%',
        marginBottom : 20, 
        marginTop : getStatusBarHeight(),
 
        backgroundColor : '#f2f2f2',
        textAlign: 'center',
    },
   
})

export default Navbar2


