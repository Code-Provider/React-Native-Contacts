import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {View } from 'react-native'
import Navbar2 from '../components/Navbar2'
import {fb} from '../firebase/fire'

const ChatScreen = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);
  const {user, otheruser, Contact, otheruserid} = route.params;


  const chatID = () => {
    const chatIDpre = [];
    chatIDpre.push(user);
    chatIDpre.push(otheruserid);
    chatIDpre.sort();
    return chatIDpre.join('_');
  };

const sendChatMessage = (chatID, message) => {
    return fb.database()
      .ref('/messages')
      .child(chatID)
      .child("chats")
      .push(message);
  };

  fb.database().ref('/messages').child(chatID()).child("chats").orderByChild("createdAt").once('value').then((snapshot) => {
    let arr = []
    snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        childData.user.avatar = Contact.imageurl ; 
        arr.push(childData); 

    });
    arr.reverse();
    setMessages(arr) ;

  });
  
  console.log(chatID());

  /*useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: Contact.imageurl ? Contact.imageurl : require('../assets/logo.png'),
        },
      },
    ])
  }, [])*/
  const onSend = useCallback((messages = []) => {
      const Message = {
        _id: Math.round(Math.random() * 1000000),
        text: messages[0].text,
        createdAt: new Date().getTime(),
        user : {
            _id: user,
            avatar: require('../assets/logo.png'),
        }
    }
    sendChatMessage(chatID(), Message) ; 
    //console.log(messages) ;
    //setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={{flex: 1}}>
        <View style={{ flex: 1 }}>
            <Navbar2 goBack = {navigation.goBack} text = {Contact.name + ' (+'+ otheruser.phone + ")"}></Navbar2>
            <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: user,
      }}
    />
       </View>

    
    </View>
  )
}




/*const OneContactScreen = ({ navigation, route }) => {
    const {Contact, ContactId, user} = route.params;
    



    return (
        
            
        
        
    )
}*/



export default ChatScreen