import {
	ADD_TO_FAVORITES,
	REMOVE_FROM_FAVORITES,
	GET_FAVORITE_MOVIES,
} from '../links'
import HTTP from '../HTTP'

class Movie {
	addToFavorite(movieId) {
		const _body = { movieId }
		return new Promise((resolve, reject) => {
			HTTP.post(ADD_TO_FAVORITES, _body).then(json => {
				const { error } = json
				if (!error) {
					resolve(json)
				} else {
					reject(error)
				}
			})
		})
	}
	removeFromFavorites(movieId) {
		const _body = { movieId }
		return new Promise((resolve, reject) => {
			HTTP.delete(REMOVE_FROM_FAVORITES, _body).then(json => {
				const { error } = json
				if (!error) {
					resolve(json)
				} else {
					reject(error)
				}
			})
		})
	}
	getMoviesByUser() {
		return new Promise((resolve, reject) => {
			HTTP.get(GET_FAVORITE_MOVIES).then(json => {
				const { error } = json
				if (!error) {
					resolve(json)
				} else {
					reject(error)
				}
			})
		})
	}
}

export default Movie
