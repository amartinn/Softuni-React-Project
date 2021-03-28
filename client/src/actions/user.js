import APP from '../sources'
import { USER_LOGOUT, USER_LOGIN } from './constants'
import * as cookieHelper from '../utilities/cookieHelper'

const cookieName = 'auth'

export const login = (userName, password) => {
	return dispatch => {
		return APP.user.login(userName, password).then(token => {
			cookieHelper.setCookie(cookieName, token)
			dispatch({
				type: USER_LOGIN,
				payload: token,
			})
		})
	}
}
export const logout = () => {
	return dispatch => {
		cookieHelper.eraseCookie(cookieName)
		return dispatch({
			type: USER_LOGOUT,
			payload: false,
		})
	}
}
