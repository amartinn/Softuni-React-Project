import { ADD_TO_BROWSED_MOVIES } from './constants'

export const addToBrowsed = movieId => {
	return dispatch => {
		dispatch({
			type: ADD_TO_BROWSED_MOVIES,
			payload: movieId,
		})
	}
}
