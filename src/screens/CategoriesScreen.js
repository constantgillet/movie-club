import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native'
import ButtonCategories from '../components/ButtonCategories'
import LogoHeader from '../components/LogoHeader'
import { searchMovies } from '../services/movies'


export default function CategoriesScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LogoHeader/>
                
            <FlatList
                style={styles.categories}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={"testsaufuaufuazfu"}
                numColumns={2}
                renderItem={({item}) => {
                return (
                    <ButtonCategories/>
                );
                }}
            />
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
    },
    categories: {
        marginHorizontal: 40
        
    }
})

