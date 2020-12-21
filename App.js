import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme'
import StartScreen from './src/screens/StartScreen' ; 



export default function App() {
  return (
    <StartScreen>
    </StartScreen>
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
