import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { getMovie } from '../services/movies'
import { MainStyle } from '../styles/styles'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function DetailScreen(props) {
    const {route, navigation} = props
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        if (route && route.params && route.params.id) {
            getMovie(route.params.id)
                .then(setMovie)
        } 
    }, [])

    const toReadableTime = (minutes) => {

        const m = minutes % 60

        const h = ( minutes - m ) / 60

        return h.toString() + 'h' + ( m < 10 ? '0' : '') + m.toString()
    }

    if (!movie) {
        return null;
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                    style={styles.imageBg}
                />
                <View style={styles.movie}>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.headerInfo}>
                            {movie.title !== '' && <Text style={styles.title}>{movie.title}</Text>}
                            {movie.genres.length > 0 && <Text style={styles.genre}>{movie.genres[0].name}</Text>}
                            {movie.vote_average !== '' && <Text style={styles.runTime}>{ toReadableTime(movie.runtime) }</Text>}
                        </View>
                        <TouchableOpacity style={styles.imagePlay} ><Entypo name="controller-play" size={28} color={MainStyle.secondaryColor} style={styles.imagePlayIcon} /></TouchableOpacity>
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview !== '' && <Text style={styles.overview}>{movie.overview}</Text>}
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: MainStyle.screenBackgroundColor,
        flex: 1,
    },
    imageBg: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 350,
        resizeMode: 'cover',
        width: '100%',
    },
    movie: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 24,
        paddingLeft: 18,
        paddingRight: 18,
        top: -68,
        zIndex: 1,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26,
    },
    headerInfo: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        borderColor: '#ffffff',
        borderRadius: 15,
        borderWidth: 4,
        padding: 12
    },
    image: {
        borderColor: '#ffffff',
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignSelf: 'flex-end',
        height: 36,
        width: 36,
        marginLeft: 15,
        backgroundColor: MainStyle.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: MainStyle.secondaryColor,
        borderWidth: 3
    },
    imagePlayIcon: {
        top: 0,
        left: 2
    },
    title: {
        fontWeight: 'bold',
        color: MainStyle.secondaryColor
    },
    genre: {
        fontSize: 14,
        fontWeight: '100',
        marginBottom: 6,
        color: MainStyle.secondaryColor
    },
    runTime: {
        color: MainStyle.secondaryColor
    },
    overviewTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: MainStyle.secondaryColor
    },
    overview: {
        lineHeight: 24,
        color: MainStyle.secondaryColor
    }
})