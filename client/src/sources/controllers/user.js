import { REGISTER_USER, LOGIN_USER } from '../links'
import HTTP from '../HTTP'
class User {
	login(userName, password) {
		const _body = { userName, password }
		return new Promise((resolve, reject) => {
			HTTP.post(LOGIN_USER, _body).then(json => {
				const { error, token } = json
				if (!error) {
					resolve(token)
				} else {
					reject(error)
				}
			})
		})
	}
	register(userName, email, password) {
		const _body = {
			username: userName,
			email,
			password,
		}
		return new Promise((resolve, reject) => {
			HTTP.post(REGISTER_USER, _body).then(json => {
				const { error, message } = json
				if (!error) {
					resolve(message)
				} else {
					reject(error)
				}
			})
		})
	}
}

export default User
