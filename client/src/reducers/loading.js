import { SET_LOADING } from '../actions/constants'
const loading = (state = {}, action) => {
	switch (action.type) {
		case SET_LOADING: {
			return action.payload
		}
		default: {
			return state
		}
	}
}

export default loading
