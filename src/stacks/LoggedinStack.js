import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from '../core/theme' ; 
import StartScreen from '../screens/StartScreen' ; 
import LoginScreen from '../screens/LoginScreen' ; 
import RegisterScreen from '../screens/RegisterScreen' ; 
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen' ; 
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
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />  
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />  
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />   
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