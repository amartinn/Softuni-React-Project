import { ADD_TO_BROWSED_MOVIES } from '../actions/constants'

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
		default: {
			return { ...state }
		}
	}
}

export default movie
