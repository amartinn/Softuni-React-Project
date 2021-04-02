import {
	ADD_TO_BROWSED_MOVIES,
	REMOVE_MOVIE_FROM_FAVORITE,
	ADD_MOVIE_TO_FAVORITE,
	GET_FAVORITE_MOVIES,
} from '../actions/constants'

const limitBrowsedMovies = 5
const movie = (state = {}, action) => {
	switch (action.type) {
		case ADD_TO_BROWSED_MOVIES: {
			const { browsed } = state
			if (browsed.some(x => x === action.payload)) return state
			if (browsed.length === limitBrowsedMovies) browsed.shift()
			browsed.push(action.payload)
			localStorage.setItem('browsed', JSON.stringify(browsed))
			return { ...state }
		}
		case ADD_MOVIE_TO_FAVORITE: {
			const { favorites } = state
			favorites.push({ id: +action.payload })
			return { ...state }
		}
		case REMOVE_MOVIE_FROM_FAVORITE: {
			state.favorites = state.favorites.filter(x => +x.id !== +action.payload)
			return { ...state }
		}
		case GET_FAVORITE_MOVIES: {
			state.favorites = [...action.payload]
			return { ...state }
		}
		default: {
			return { ...state }
		}
	}
}

export default movie
