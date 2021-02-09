import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { MainStyle } from '../styles/styles'
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Search({ handleSearch, handleClickButton, ...props }) {

    const onChangeText = (text) => {
        handleSearch(text)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <FontAwesome5 
                    name="search" 
                    size={20} 
                    color={MainStyle.primaryColor} 
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Titre du film'
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={ () => { handleClickButton() } } > 
                    <Text style={styles.buttonText}>Recherche</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: MainStyle.primaryColor,
        borderRadius: 25,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    textInput: {
        height: 50,
        paddingLeft: 10,
        color: MainStyle.primaryColor,
        fontWeight: 'bold'
    },
    buttonContainer: { alignItems: 'flex-end' },
    button: {
        backgroundColor: MainStyle.secondaryColor,
        color: 'black',
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white'
    }
})