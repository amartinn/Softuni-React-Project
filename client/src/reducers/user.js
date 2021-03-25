import { USER_LOGOUT, USER_LOGIN } from '../actions/constants'
const user = (state = false, action) => {
	switch (action.type) {
		case USER_LOGIN: {
			return true
		}
		case USER_LOGOUT: {
			return action.payload
		}
		default: {
			return state
		}
	}
}

export default user
