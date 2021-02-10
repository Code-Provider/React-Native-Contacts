import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme' ; 
import StartScreen from './src/screens/StartScreen' ; 
import LoginScreen from './src/screens/LoginScreen' ; 
import RegisterScreen from './src/screens/RegisterScreen' ; 
import ContactScreen from './src/screens/ContactScreen' ; 
import OneContactScreen from './src/screens/OneContactScreen' ; 
import CreateContactScreen from './src/screens/CreateContactScreen' ;
import CreateContactScreen2 from './src/screens/CreateContactScreen2' ;
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen' ; 
import UpdateContactScreen from './src/screens/UpdateContactScreen' ; 
import ChatScreen from './src/screens/ChatScreen' ;
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ; 
import {fb} from './src/firebase/fire' 



console.disableYellowBox = true;

export default function App() {
  const user = fb.auth().currentUser ; 
  const primary = () => user ? "ContactScreen" : "StartScreen" ; 

  const Stack = createStackNavigator() ; 
  return (
    <Provider theme={theme}>
      {console.log(primary())}
      <NavigationContainer>
    <Stack.Navigator
          initialRouteName={primary()}
          screenOptions={{
            headerShown: false,
          }}
    >
    <Stack.Screen name="StartScreen" component={StartScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />  
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />  
    <Stack.Screen name="ContactScreen" component={ContactScreen} />  
    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />  
    <Stack.Screen name="CreateContactScreen" component={CreateContactScreen} />  
    <Stack.Screen name="CreateContactScreen2" component={CreateContactScreen2} />  
    <Stack.Screen name="OneContactScreen" component={OneContactScreen} />  
    <Stack.Screen name="UpdateContactScreen" component={UpdateContactScreen} />  
    <Stack.Screen name="ChatScreen" component={ChatScreen} />  
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },text: {
    color: theme.colors.primary, 
    fontSize : 33,
  }
});
