import {
	ADD_TO_BROWSED_MOVIES,
	ADD_MOVIE_TO_FAVORITE,
	REMOVE_MOVIE_FROM_FAVORITE,
	GET_FAVORITE_MOVIES,
} from './constants'
import APP from '../sources'
export const addToBrowsed = movieId => {
	return dispatch => {
		dispatch({
			type: ADD_TO_BROWSED_MOVIES,
			payload: movieId,
		})
	}
}

export const addToFavorite = movieId => {
	return dispatch => {
		return APP.movie.addToFavorite(movieId).then(_ => {
			dispatch({
				type: ADD_MOVIE_TO_FAVORITE,
				payload: movieId,
			})
		})
	}
}

export const removeFromFavorites = movieId => {
	return dispatch => {
		return APP.movie.removeFromFavorites(movieId).then(_ => {
			dispatch({
				type: REMOVE_MOVIE_FROM_FAVORITE,
				payload: movieId,
			})
		})
	}
}

export const getMovies = movieId => {
	return dispatch => {
		return APP.movie.getMoviesByUser().then(movies => {
			dispatch({
				type: GET_FAVORITE_MOVIES,
				payload: movies,
			})
		})
	}
}
