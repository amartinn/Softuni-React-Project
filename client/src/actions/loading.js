import { SET_LOADING } from './constants'

export const setLoading = (state = false) => {
	return dispatch => {
		return dispatch({
			type: SET_LOADING,
			payload: state,
		})
	}
}
