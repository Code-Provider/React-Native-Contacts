import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme' ; 
import StartScreen from './src/screens/StartScreen' ; 
import LoginScreen from './src/screens/LoginScreen' ; 
import RegisterScreen from './src/screens/RegisterScreen' ; 
import ContactScreen from './src/screens/ContactScreen' ; 
import CreateContactScreen from './src/screens/CreateContactScreen' ;
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen' ; 
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ; 
import {fb} from './src/firebase/fire' 





export default function App() {
  const user = fb.auth().currentUser ; 
  const primary = () => user ? "CreateContactScreen" : "CreateContactScreen" ; 

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
