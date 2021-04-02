import fetch from 'isomorphic-fetch'
import { trackPromise } from 'react-promise-tracker'
import * as cookieHelper from '../utilities/cookieHelper'

class HTTP {
	get headers() {
		const token = cookieHelper.getCookie('auth')
		const headers = {
			'Content-Type': 'application/json',
		}
		if (token) {
			headers['Authorization'] = `Bearer ${token}`
		}
		return headers
	}
	post(url, body) {
		const jsonBody = JSON.stringify(body)
		return trackPromise(
			fetch(url, {
				method: 'POST',
				body: jsonBody,
				headers: this.headers,
			}).then(res => res.json())
		)
	}
	get(url) {
		return trackPromise(
			fetch(url, {
				method: 'GET',
				headers: this.headers,
			}).then(res => res.json())
		)
	}
	delete(url, body) {
		const jsonBody = JSON.stringify(body)
		return trackPromise(
			fetch(url, {
				method: 'DELETE',
				body: jsonBody,
				headers: this.headers,
			})
		)
	}
	put(url, body) {
		const jsonBody = JSON.stringify(body)
		return trackPromise(
			fetch(url, {
				method: 'PUT',
				body: jsonBody,
				headers: this.headers,
			}).then(res => res.json())
		)
	}
}

export default new HTTP()
