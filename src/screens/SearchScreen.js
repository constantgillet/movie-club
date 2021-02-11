import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, ActivityIndicator } from 'react-native'
import LogoHeader from '../components/LogoHeader'
import Search from '../components/Search'
import { MainStyle } from '../styles/styles'
import { searchMovies } from '../services/movies'
import MovieListItem from '../components/MovieListItem'

export default function SearchScreen(props) {

    const [state, setState] = useState({
        searchQuery: '',
        moviesList: [],
        isLoading: false,
        page: 0,
        totalPages: 0,
        noResult: true,
        noResultMessage: 'Aucune recherche effectuée'
    })

    const handleSearchText = (text) => {
        setState({ ...state, searchQuery: text })
    }

    const _searchMovies = () => {

        if (state.searchQuery != '') {
           loadMovies({...state, isLoading: false, page: 0, totalPages: 0, moviesList: []}) 
        } else {
            setState({...state, isLoading: false, page: 0, totalPages: 0, moviesList: [], noResult: true, noResultMessage: 'Aucune recherche effectuée'})
        }   
    }

    const loadMovies = (_state) => {
        if (_state.isLoading)
            return null

        setState({..._state, isLoading: true})

        searchMovies(_state.searchQuery, _state.page + 1)
            .then(data => {
                setState({..._state, page: data.page, totalPages: data.total_pages, moviesList: [..._state.moviesList, ...data.results], noResult: false, noResultMessage: 'Il n\'y a aucun resultat'})
            })
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LogoHeader/>
            <Search handleSearch={ handleSearchText } handleClickButton={ _searchMovies } />
            {
                state.moviesList == 0 || state.noResult ? (

                    !state.isLoading && (
                        <View style={styles.noResultContainer}>
                        <Image style={styles.noResultImage} source={require('../../assets/images/bad.png')}/>
                        <Text style={styles.noResultText}>
                            {state.noResultMessage}
                        </Text>
                    </View>
                    )

                ) : (

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
 
                )
            }
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
    },
    noResultText: {
        width: 140,
        textAlign: 'center',
        color: MainStyle.secondaryColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 22
    }
})