import React from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native'
import ButtonCategories from '../components/ButtonCategories'
import LogoHeader from '../components/LogoHeader'


export default function CategoriesScreen() {
    return (
        <view>
            <View style={styles.headerLogo}>
                <LogoHeader/>
            
            </View>
                
            <View style={styles.buttonCategories}>
                <ButtonCategories/>
            </View>
        </view>

    )
}


const styles = StyleSheet.create({
    headerLogo: {
        flex: 1,
        marginTop: 40
    },
    buttonCategories: {
        flex: 2,
        marginTop: 40
    }
})

