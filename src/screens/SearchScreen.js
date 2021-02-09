import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import LogoHeader from '../components/LogoHeader'
import Search from '../components/Search'
import { MainStyle } from '../styles/styles'
import { searchMovies } from '../services/movies'

export default function SearchScreen() {

    const [state, setState] = useState({
        searchQuery: '',
        moviesList: [],
        isLoading: false,
        page: 0
    })

    const handleSearchText = (text) => {
        setState({ ...state, searchQuery: text })
    }

    const _searchMovies = () => {
        loadMovies({...state, isLoading: false, page:  0, moviesList: []})
    }

    const loadMovies = (_state) => {
        if (_state.isLoading)
            return null

        setState({..._state, isLoading: true})

        searchMovies(_state.searchQuery, _state.page + 1)
            .then(data => {
                setState({..._state, page: data.page, moviesList: [..._state.moviesList, ...data.results]})
            })
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LogoHeader/>
            <Search handleSearch={ handleSearchText } handleClickButton={ _searchMovies } />
            {
                state.searchQuery.length == 0 || state.moviesList == 0 ? (
                    <View style={styles.noResultContainer}>
                        <Image style={styles.noResultImage} source={require('../../assets/images/bad.png')}/>
                        <Text style={styles.noResultText}>
                            Aucune recherche effectuée
                        </Text>
                    </View>
                ) : (
                    <View>
                        <Text>{state.moviesList.length}</Text>
                    </View>
                )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: MainStyle.screenBackgroundColor
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