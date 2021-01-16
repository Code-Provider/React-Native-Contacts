import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SearchBar} from 'react-native-elements'

const Searchbar = (props) => (
    <SearchBar 
    placeholder="Search for a contact"
    containerStyle={StyleSheet.flatten(styles.searchbar)}
    inputContainerStyle={StyleSheet.flatten(styles.textbar)}
    inputStyle={StyleSheet.flatten(styles.text)} 
    {...props}
    >

    </SearchBar>

)


const styles = StyleSheet.create({
    searchbar : {
        backgroundColor : 'white',
        borderWidth: 1,
        width : 350,
    },
    textbar : {
        backgroundColor : 'white', 
    },
    text : {
        color : 'black'
    }
})

export default Searchbar ; 