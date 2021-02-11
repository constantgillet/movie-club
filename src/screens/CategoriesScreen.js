import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native'
import ButtonCategories from '../components/ButtonCategories'
import LogoHeader from '../components/LogoHeader'
import { getGenresList, searchMovies } from '../services/movies'


export default function CategoriesScreen(props) {

    const [genresList, setGenresList] = useState([])

    useEffect(() => {
        getGenresList().then(data => {
            setGenresList(data.genres)
        })
    }, [])
    
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LogoHeader/>            
            {
                genresList.length > 0 ? (
                    <FlatList
                        style={styles.categories}
                        data={genresList}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        numColumns={2}
                        renderItem={({item}) => <ButtonCategories text={item.name} onPress={() => props.navigation.navigate('MoviesListScreen', {id: item.id, name: item.name})} />}
                        keyExtractor={item => item.id.toString()}
                    />
                ) : null
            }
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

