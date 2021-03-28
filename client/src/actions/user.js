import APP from '../sources'
import { USER_LOGOUT, USER_LOGIN } from './constants'
export const login = (userName, password) => {
	return dispatch => {
		return APP.user.login(userName, password).then(token => {
			localStorage.setItem('_authToken', token)
			dispatch({
				type: USER_LOGIN,
				payload: token,
			})
		})
	}
}
export const logout = () => {
	return dispatch => {
		localStorage.removeItem('_authToken')
		return dispatch({
			type: USER_LOGOUT,
			payload: false,
		})
	}
}
