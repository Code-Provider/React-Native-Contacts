import React, { useEffect, useState } from 'react'
import {StyleSheet, View, Text, Image } from 'react-native'
import Background from '../components/Background'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Phones from '../components/Phones'


const OneContactScreen = ({ navigation, route }) => {
    
    const {Contact} = route.params;

    console.log(Contact.phones)
    

    return (
        <Background>
            <BackButton goBack = {navigation.goBack}>
            </BackButton>
            {Contact.imageurl ? (<Image source={Contact.imageurl} style={{ width: 110, height: 110, marginBottom : 8 }} />) : (<Logo style = {{marginBottom : 0, width: 110,
            height: 110}}></Logo>) }
            <Header>{Contact.name}</Header>
            <Paragraph>
            {Contact.description}
            </Paragraph>
            <Phones phones = {Contact.phones}></Phones>
            <Button mode="contained">
            Update Contact Information
            </Button>
            <Button
            mode="outlined">
            
            Delete Contact
            </Button>
            
            
            

 
           
        </Background>
        
        
    )
}

    const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },

    container: {
        flex: 1,
      },
    navbar : {
        height:100,
    },
    })

export default OneContactScreen