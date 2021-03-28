import fetch from 'isomorphic-fetch'
import { trackPromise } from 'react-promise-tracker'
class HTTP {
	post(url, body) {
		const jsonBody = JSON.stringify(body)
		return trackPromise(
			fetch(url, {
				method: 'POST',
				body: jsonBody,
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(res => res.json())
		)
	}
	get(url) {
		return trackPromise(
			fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(res => res.json())
		)
	}
	delete(url, body) {
		const jsonBody = JSON.stringify(body)
		return trackPromise(
			fetch(url, {
				method: 'DELETE',
				body: jsonBody,
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(res => res.json())
		)
	}
	put(url, body) {
		const jsonBody = JSON.stringify(body)
		return trackPromise(
			fetch(url, {
				method: 'PUT',
				body: jsonBody,
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(res => res.json())
		)
	}
}

export default new HTTP()
