import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background2'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Contacts from '../components/Contacts'



const ContactScreen = ({ navigation }) => {

    const [search, setSearch] = useState({ value: '', error: '' })


    return (
        <Background>
            <Navbar></Navbar>
           <Searchbar onChangeText={(search) => setSearch({ value: search, error: '' })}
            value={search.value}>
            </Searchbar>
           
           <Contacts></Contacts>
           
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

export default ContactScreen