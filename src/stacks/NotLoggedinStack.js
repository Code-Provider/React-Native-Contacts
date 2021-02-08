import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from '../core/theme' ; 
import ContactScreen from '../screens/ContactScreen' ; 
import OneContactScreen from '../screens/OneContactScreen' ; 
import CreateContactScreen from '../screens/CreateContactScreen' ;
import UpdateContactScreen from '../screens/UpdateContactScreen' ; 
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ; 

export default function LoggedinStack() {
   
   const Stack = createStackNavigator() ; 
    return (
      <Provider theme={theme}>
        <NavigationContainer>
      <Stack.Navigator
            initialRouteName={"StartScreen"}
            screenOptions={{
              headerShown: false,
            }}
      >
      <Stack.Screen name="ContactScreen" component={ContactScreen} />  
    <Stack.Screen name="CreateContactScreen" component={CreateContactScreen} />  
    <Stack.Screen name="OneContactScreen" component={OneContactScreen} />  
    <Stack.Screen name="UpdateContactScreen" component={UpdateContactScreen} />  
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