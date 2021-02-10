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

    /*setChatContacts(Object.keys(snapshot.val()).map( obj=> ({ ...snapshot.val()[obj], chattable: 'false', phoneuser : '' })))
    let ChatContacts2 = ChatContacts; 
         fb.database().ref('/users/').once("value").then((snapshot2) => {
            let users = snapshot2.val()
            Object.keys(ChatContacts2).map((l, i)=>{
                Object.keys(ChatContacts2[l].phones).map((p, w)=>{
                    Object.keys(users).map((k,j) => {
                    if (ChatContacts2[l].phones[p].phoneval == users[k].phone){
                        ChatContacts2[l].chattable = true;
                        ChatContacts2[l].phoneuser = users[k].phone;
                    }
                })
            })
             })
             setChatContacts(ChatContacts2);
         })*/
    
    const [search, setSearch] = useState({ value: '', error: '' })
    const [contacts, setContacts] = useState({}) ;
    const [searchedContacts, setSearchedContacts] = useState({}) ; 
    const [bool, setBool] = useState(true) ; 
    //const [bool2, setBool2] = useState(false)
    const [text, setText] = useState("Contacts")
    //const [messages, setMessages] = useState([]) ; 

    
    const userid= route.params.user;
    const user = route.params.user;

    


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
          
    
    fb.database().ref('contacts').child(userid).once("value").then((snapshot) => {
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
            user : user,
            Contact : contact,
            ContactId : contactid,
            
        }); 
    }

    const onPressText = () => {
        if (text == "Contacts"){
            setText("Chat")
        }else if (text == "Chat"){
            setText("Contacts")
        }
    }

    /*useEffect(()=> {
            fb.database().ref('messages').once("value").then((snapshot) => {
                let arr = Object.keys(snapshot.val()) ; 
                arr.filter(x => {
                    x.includes(userid);
                })
                let arr2 = []
                arr.map((x) => {
                    
                    fb.database().ref('messages').child(x).once("value").then((snapshot) => {
                        const Message = snapshot.val().chats; 
                        arr2.push(Message)
                        
                    })
                })
                setMessages(arr2);
                console.log(messages)
               
            });

        console.log("Value of text changed ! ")

    }, [text]); */

    return (
        <Background>
            <Navbar Add = {() => navigation.navigate('CreateContactScreen2', {user : user})} onPressText = {() => onPressText()}
            Logout = {() => logout()} text = {text}></Navbar>
           <Searchbar onChangeText={(src) => updateSearch(src)}
            value={search.value}>
            </Searchbar>
           {contacts ? <Contacts contacts = {bool ? contacts :  searchedContacts } gotoContact = {(contact, contactid) => gotoContact(contact, contactid)} text = {text}></Contacts> : <></>}
           
           
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