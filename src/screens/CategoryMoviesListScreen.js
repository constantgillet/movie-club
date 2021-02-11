import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MovieListItem from '../components/MovieListItem'
import { getGenreMovies } from '../services/movies'
import { MainStyle } from '../styles/styles'

export default function CategoryMoviesListScreen(props) {

    const {route, navigation} = props

    const [state, setState] = useState({
        moviesList: [],
        isLoading: false,
        page: 0,
        totalPages: 0,
    })

    useLayoutEffect(() => {

        navigation.setOptions({
            title: route && route.params && route.params.name ? route.params.name : 'Categorie'
        })

    })

    useEffect(() => {
        loadMovies(state)
    }, [])

    const loadMovies = (_state) => {
        if (_state.isLoading)
            return null

        setState({..._state, isLoading: true})

        getGenreMovies(route.params.id, _state.page + 1)
            .then(data => {
                setState({..._state, page: data.page, totalPages: data.total_pages, moviesList: [..._state.moviesList, ...data.results]})
            })
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <FlatList
                style={styles.moviesList}
                data={state.moviesList}
                renderItem={({item}) => <MovieListItem movie={item} onPress={() => props.navigation.navigate('DetailScreen', {id: item.id})} />}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (state.page < state.totalPages) {
                        loadMovies({...state})
                    }
                }}
            />
            { 
                state.isLoading ?
                    <View style={styles.loadingcontainer}>
                        <ActivityIndicator size='large' color={MainStyle.primaryColor} />
                    </View>
                    : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: MainStyle.screenBackgroundColor
    },
    moviesList: {
    },
    noResultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noResultImage: {
        width: 120,
        height: 120
    }
})