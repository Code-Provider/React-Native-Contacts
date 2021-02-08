import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Background from '../components/Background2'
import { theme } from '../core/theme'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Contacts from '../components/Contacts'
import {fb} from '../firebase/fire'
import {doSignOut} from '../firebase/auth'




const ContactScreen = ({ navigation, route }) => {
    
    const [search, setSearch] = useState({ value: '', error: '' })
    const [contacts, setContacts] = useState({}) ;
    const [searchedContacts, setSearchedContacts] = useState({}) ; 
    const [bool, setBool] = useState(true) ; 

    const userid = 100 ; 
    const user= route.params.user;


    /*if (!user) { 
        navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
        })
    }*/

    
    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );
          
    
    fb.database().ref('/contacts/' + userid).once("value").then((snapshot) => {
        setContacts(snapshot.val())
    });

    

    const updateSearch = (src) => {
        setBool(false) ; 
        console.log(src) ; 
        setSearch({ value: src, error: '' })
        console.log(search)
        const filtered = Object.filter(contacts, contact => contact.name.toLowerCase().includes(src.toLowerCase()));
        /*const filtered = Object.keys(contacts).filter(contact => {
          
            contacts[contact].name.toLowerCase().includes(search.value.toLowerCase())}) ; 
        //const filtered = Object.filter(contacts, contact.name.toLowerCase().includes(search.toLowerCase()))
        */
        setSearchedContacts(filtered) ;
        console.log(filtered);
    }
    
    

    const logout = () => {
        fb.auth().signOut(); 
        navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
        })
    }

    const gotoContact = (contact, contactid) => {
        navigation.navigate('OneContactScreen', {
            Contact : contact,
            ContactId : contactid,
        }); 
    }

    return (
        <Background>
            <Navbar Add = {() => navigation.navigate('CreateContactScreen')} Logout = {() => logout()}></Navbar>
           <Searchbar onChangeText={(src) => updateSearch(src)}
            value={search.value}>
            </Searchbar>
           
           <Contacts contacts = {bool ? contacts :  searchedContacts } gotoContact = {(contact, contactid) => gotoContact(contact, contactid)}></Contacts>
           
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
    listitem : {
        borderColor : 'black',
        width : 350,
    },
    })

export default ContactScreen