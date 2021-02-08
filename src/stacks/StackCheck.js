import React, { useState, useEffect, createContext } from 'react'
import LoggedinStack from './LoggedinStack'
import NotLoggedinStack from './NotLoggedinStack'
import {fb} from '../firebase/fire' 

const AuthContext = React.createContext()

export default function StackCheck() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
  
    // Handle user state changes
    function onAuthStateChanged(result) {
      setUser(result)
      if (initializing) setInitializing(false)
    }
  
    useEffect(() => {
      const authSubscriber = fb.auth().onAuthStateChanged(onAuthStateChanged)
  
      // unsubscribe on unmount
      return authSubscriber
    }, [])
  
    if (initializing) {
      return null
    }
  
    return user ? (
      <AuthContext.Provider value={user}>
        <LoggedinStack />
      </AuthContext.Provider>
    ) : (
      <NotLoggedinStack />
    )
  }