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
import {fb} from '../firebase/fire'
import { useIsFocused } from "@react-navigation/native"




const OneContactScreen = ({ navigation, route }) => {
    const {Contact, ContactId} = route.params;
    const [contact, setContact] = useState(Contact) ;
    const userid = 100 ;

    const isFocused = useIsFocused();

    useEffect(() => {
        fb.database().ref('/contacts/' + userid +'/' + ContactId).once("value").then((snapshot) => {
            setContact(snapshot.val())
        });
    }, []);

    useEffect(() => {
        if(isFocused){
        fb.database().ref('/contacts/' + userid +'/' + ContactId).once("value").then((snapshot) => {
            setContact(snapshot.val())
        });
    }
        
    }, [isFocused]);




    const OnDeletePress = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'ContactScreen' }],
          })
        fb.database().ref('/contacts/' + 100 + '/'+ContactId).remove() ; 
          
      }

    const onUpdatePress = () => {
        navigation.navigate('UpdateContactScreen', {Contact : contact, ContactId : ContactId})
    }
    



    return (
        <Background>
            <BackButton goBack = {navigation.goBack}>
            </BackButton>
            {Contact.imageurl && Contact.imageurl != '' ?  (<Image source={{uri : contact.imageurl}} style={{ width: 110, height: 110, marginBottom : 8 }} />) : (<Logo style = {{marginBottom : 0, width: 110,
            height: 110}}></Logo>) }
            <Header>{contact.name}</Header>
            <Paragraph>
            {contact.description}
            </Paragraph>
            <Phones phones = {contact.phones}></Phones>
            <Button mode="contained"
            onPress = {onUpdatePress}>
            Update Contact Information
            </Button>
            <Button onPress = {OnDeletePress}
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