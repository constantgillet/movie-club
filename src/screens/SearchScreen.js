import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import LogoHeader from '../components/LogoHeader'
import Search from '../components/Search'
import { MainStyle } from '../styles/styles'

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LogoHeader/>
            <Search/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: MainStyle.screenBackgroundColor
    }
})