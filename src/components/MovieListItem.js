import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MainStyle } from '../styles/styles'

export default function MovieListItem({movie, onPress}) {

    const releaseYear = new Date(movie.release_date).getFullYear();

    console.log(movie);
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <Image source={{uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`}} style={styles.image} />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{movie.title}</Text>
                    <Text style={styles.releaseDate}>{releaseYear}</Text>
                    <Text style={styles.author}>Nom du réalisateur</Text>
                </View>
                <View style={styles.scoreContainer}>
                    <Text style={styles.score}>{movie.vote_average}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 6,
        borderColor: MainStyle.primaryColor,
        borderRightWidth: 2,
        marginBottom: 10,
        backgroundColor: 'white',
        marginHorizontal: 10
    },
    image: {
        width: 90,
        height: 126,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 15,
        flexWrap: 'wrap',
        color: MainStyle.secondaryColor
    },
    contentContainer: {
        flex: 1,
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        flex: 0.8
    },
    releaseDate: {
        color: MainStyle.secondaryColor
    },
    author: {
        color: MainStyle.secondaryColor
    },
    scoreContainer: {
        flex: 0.2,
        justifyContent: 'flex-end'
    },
    score: {
        textAlign: 'right',
        color: MainStyle.primaryColor,
        fontSize: 14,
        fontWeight: 'bold'
    }
})