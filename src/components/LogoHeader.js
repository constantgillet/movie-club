import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { MainStyle } from '../styles/styles'

export default class LogoHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../assets/images/logo.jpg')}  />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.35
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 350,
        borderColor: MainStyle.primaryColor,
        borderWidth: 8
    }
})