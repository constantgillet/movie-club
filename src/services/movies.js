import {getApiUrl} from "./apiServices.js";

export function searchMovies(searchText, page) {
    return fetch(
        getApiUrl(
            `/search/movie`,
            {
                query: searchText,
                language: 'fr-FR',
                page: page
            }
        )
    ).then(result => result.json());
}



export function getMovie(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json())
}


export function getGenresList() {
    return fetch(
        getApiUrl(
            '/genre/movie/list', 
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json())
}

export function getGenreMovies(genreId, page) {
    return fetch(
        getApiUrl(
            '/discover/movie', 
            {
                language: 'fr-FR',
                with_genres: genreId,
                page: page
            }
        )
    ).then(result => result.json())
}
