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
import ChatButton from '../components/ChatButton'




const OneContactScreen = ({ navigation, route }) => {
    const {Contact, ContactId, user} = route.params;
    const [contact, setContact] = useState(Contact) ;
    const [userhasphone, setUserhasphone] = useState(false)
    const [otheruser, setOtheruser] = useState(null) ; 
    const [otheruserid, setOtheruserid] = useState(0) ; 
    const userid = 100 ;

    const isFocused = useIsFocused();

    useEffect(() => {
        fb.database().ref('/contacts/' + userid +'/' + ContactId).once("value").then((snapshot) => {
            setContact(snapshot.val())
            fb.database().ref('/users/').once("value").then((snapshot2) => {
                let users = snapshot2.val()
                contact.phones.map((l,i) => {
                    Object.keys(users).map((k,j) => {
                        if (contact.phones[i].phoneval == users[k].phone){
                           setUserhasphone(true)
                           setOtheruser = users[k] 
                           otheruserid = k 
                        }
                    })
                    
                })

            })
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
            {userhasphone ? <ChatButton></ChatButton> : <></> }
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