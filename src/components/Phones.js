import React from 'react'
import { StyleSheet, View } from 'react-native'
import {ListItem, Avatar } from 'react-native-elements';


const Phones = ({phones, callPhone}) =>{ 

    
    return (
    <View>
    {
        Object.keys(phones).map((l, i) => (
        <ListItem key={i} bottomDivider containerStyle={StyleSheet.flatten(styles.listitem)}>
            <Avatar source={{uri: ''}} />
            <ListItem.Content>
            <ListItem.Title>{phones[l].phoneval}</ListItem.Title>
            <ListItem.Subtitle>{phones[l].desc}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
        ))
       }
    </View>
)}

const styles = StyleSheet.create({
    listitem : {
        borderColor : 'black',
        width : 350,
    },
    })

export default Phones ;  


