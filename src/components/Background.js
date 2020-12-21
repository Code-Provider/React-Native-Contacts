import React from 'react'
import {ImageBackground,StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { theme } from '../core/theme'
import { StatusBar } from 'expo-status-bar';

const Background = ({ children }) => (
    <View style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar style="light"></StatusBar>
      {children}
    </KeyboardAvoidingView>
    </View>
    
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Background 