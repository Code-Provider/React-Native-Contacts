import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert, Button, Image, Platform } from 'react-native'
import { Text, ProgressBar } from 'react-native-paper'
import Background3 from '../components/Background3'
import Logo from '../components/Logo'
import Header from '../components/Header'
import But from '../components/Button'
import TextInput from '../components/TextInput'
import TextInput2 from '../components/TextInput2'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator2 } from '../helpers/emailValidator2'
import { nameValidator } from '../helpers/nameValidator'
import { phoneValidator, phoneErrorIndex } from '../helpers/phoneValidator'
import {fb} from '../firebase/fire'
import * as ImagePicker from 'expo-image-picker';
import * as db from '../firebase/db'



const CreateContactScreen = ({ navigation}) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState([{phoneval : '', desc : ''}])
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [contactid, setContactid] = useState(100000*Math.random().round)
  const [phoneError, setPhoneError] = useState('')
  const [phoneErrorArr, setPhoneErrorArr] = useState([]) 
  //const userid = fb.auth().currentUser.uid; 
  const userid = 100
  
  /*useEffect(() => {
    setPhoneErrorArr(phoneErrorIndex(phone)); 
  }, [phone]);
  */


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

useEffect(() => {
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
}, []);
  
const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};


/*const uploadImage = async () => {
  const uri  = image;
  const response = await fetch(uri);
  const blob = await response.blob();
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  setUploading(true);
  setTransferred(0);
  const task = fb.storage()
    .ref("Avatars")
    .child(userid.toString())
    .child(contactid.toString())
    .put(blob)
    
    

  // set progress state
  task.on('state_changed', snapshot => {
    setTransferred(
      Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    );
  });
  try {
    await task;
  } catch (e) {
    console.error(e);
  }
  setUploading(false);
  Alert.alert(
    "Contact Created",
    "Contact Successfully Created",
    [    
      { text: "OK", onPress: () => {setImage(null) ;
       navigation.reset({
        index: 0,
        routes: [{ name: 'ContactScreen' }],
      }) }
    }
    ]
  );
  //setImage(null);
};
*/

  const onCreatePressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator2(email.value)
    const phoneError = phoneValidator(phone)
    if (emailError || nameError || phoneError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPhoneError(phoneError)
      setPhoneErrorArr(phoneErrorIndex(phone)); 
      return
    }
    const contact = {
      name : name.value,
      email : email.value,
      phones : phone,
      description : description,
      imageurl : image,
    }

    db.doCreateContact(userid, contactid, contact)
    navigation.reset({
        index: 0,
        routes: [{ name: 'ContactScreen' }],
      })
      /*setImage(null);
      navigation.reset({
        index: 0,
        routes: [{ name: 'ContactScreen' }],
      });
      Alert.alert(
        "Contact Created",
        "Contact Successfully Created",
        [    
          { text: "OK", onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'ContactScreen' }],
          }) }
        ],
      );*/
    
    return 
    
  }

  return (
   
    <Background3>
      
      <BackButton goBack={navigation.goBack} />


      <Header>Create Contact</Header>
      {image ? <Image source={{ uri: image }} style={{ width: 110, height: 110, marginBottom : 8 }} /> : <Logo style = {{marginBottom : 0, width: 110,
        height: 110}}></Logo> }
     
      <TouchableOpacity
          underlayColor='#fff'
          onPress = {() => pickImage()}>
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
        <View style={{ flexDirection:'row',  alignSelf: 'stretch' }} key = {'view'+index}>
        <TextInput2 label="Phone"
              returnKeyType="done"
              key = {'phone'+index}
              error={!!phoneErrorArr[index]}
              errorText={phoneErrorArr[index]}
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

    

      
    </Background3>
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
  progressBarContainer: {
    marginTop: 20
  },

})

/*
{uploading && image? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={300} />
          </View>
        ) : null}
        */

export default CreateContactScreen