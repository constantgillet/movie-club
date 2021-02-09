import React from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import ButtonCategories from '../components/ButtonCategories'
import LogoHeader from '../components/LogoHeader'


export default function CategoriesScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LogoHeader/>
                
            <View style={styles.buttonCategories}>
                <ButtonCategories/>
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    headerLogo: {
    },
    buttonCategories: {
        flex: 1,
    }
})

