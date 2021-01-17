import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import But from '../components/Button'
import TextInput from '../components/TextInput'
import TextInput2 from '../components/TextInput2'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator2 } from '../helpers/emailValidator2'
import { nameValidator } from '../helpers/nameValidator'
import * as auth from '../firebase/auth'
import * as db from '../firebase/db'



const CreateContactScreen = ({ navigation}) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState([{phoneval : 'lmao', desc : 'lmao'}])
  const [description, setDescription] = useState('')

  /*const [arrphone, setArr] = useState([<View style={{ flexDirection:'row',  alignSelf: 'stretch' }}>
  <TextInput2 label="Phone"
        returnKeyType="done"
        key = {'phone'+0}
        value={phone.value[phonenb].phoneval}
        onChangeText={(text) => {
          let arr = phone ;
          arr.value[0].phoneval = text ;
          setPhone(arr) ;  
        }} />
  <TextInput2 label="Phone desc"
        key = {'desc'+phonenb}
        returnKeyType="done"
        value={phone.value[0].desc}
        onChangeText={(text) => console.log(text)} />
</View>])*/
  
  const handleChoosePhoto = () => {

  }

  const onCreatePressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator2(email.value)
    if (emailError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      return
    }

    Alert.alert(
        "Contact Created",
        "Contact Successfully Created",
        [    
          { text: "OK", onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'ContactScreen' }],
          }) }
        ],
      );
    
  }

  return (
   
    <Background>
      
      <BackButton goBack={navigation.goBack} />


      <Header>Create Contact</Header>
      <Logo style = {{marginBottom : 0, width: 110,
        height: 110}}></Logo>
      <TouchableOpacity
          underlayColor='#fff'>
          <Text>Choose Photo</Text>
        </TouchableOpacity>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      {
      
      phone.map((value, index) => { return (
        <View style={{ flexDirection:'row',  alignSelf: 'stretch' }}>
        <TextInput2 label="Phone"
              returnKeyType="done"
              key = {'phone'+index}
              onChangeText={(text) => {
                let arr = [...phone] ;
                let item = phone[index] ;
                item.phoneval = text ; 
                arr[index] = item ; 
                setPhone(arr) ;  
              }}/>
        <TextInput2 label="Phone desc"
              key = {'desc'+index}
              returnKeyType="done"
              onChangeText={(text) => {
                let arr = [...phone] ;
                let item = phone[index] ;
                item.desc = text ; 
                arr[index] = item ; 
                setPhone(arr) ;  
                } } />
      </View>
      )})
      
      }
      
        <TouchableOpacity
          underlayColor='#fff'
          onPress = {() => {
            let arr = [...phone] ;
            arr.push({
              phoneval : '',
              desc : '',
            });
            setPhone(arr) ; 
          }

          }>
            
        <Text>Add phone number</Text>
        </TouchableOpacity>
        
        {
        (phone.length > 1) ? 
          (<TouchableOpacity
            underlayColor='#fff'
            onPress = {() => {
              if (phone.length == 1)
                  return 
              else {
                let arr = [...phone] ;
                arr.pop() ; 
                setPhone(arr) ; 
            }
          }
  
            }>
              
            <Text>Remove phone number</Text>
          </TouchableOpacity>)
        : null }
        

        
      <TextInput
        label="Contact Description"
        returnKeyType="done"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <But
        mode="contained"
        onPress={onCreatePressed}
        style={{ marginTop: 24 }}
      >
        Create Contact
      </But>
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
  choosephoto : {
    backgroundColor : 'white',
    color : 'black',
  },

})

export default CreateContactScreen