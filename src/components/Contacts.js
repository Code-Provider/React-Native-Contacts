import React from 'react'
import { StyleSheet, View } from 'react-native'
import {ListItem, Avatar } from 'react-native-elements';


const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },

];

const Contacts = () => (
    <View>
    {
        list.map((l, i) => (
        <ListItem key={i} bottomDivider containerStyle={StyleSheet.flatten(styles.listitem)} >
            <Avatar source={{uri: l.avatar_url}} />
            <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
        ))
       }
    </View>
)

const styles = StyleSheet.create({
    listitem : {
        borderColor : 'black',
        width : 350,
    },
    })

export default Contacts ;  
