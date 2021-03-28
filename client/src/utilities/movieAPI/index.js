import { IMAGE_URL, DEFAULT_IMAGE_URL } from './constants'
import HTTP from '../../sources/HTTP'
const apiKey = '169aa130a50c8a11049cdad165dc6726'

export const getTrending = (time_window = 'day') => {
	return HTTP.get(
		`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${apiKey}`
	).then(({ results }) => {
		return results
	})
}

export const getMovieById = id => {
	return HTTP.get(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
	)
}

export const getMovieImage = url => {
	if (url === null || url === undefined) {
		return DEFAULT_IMAGE_URL
	} else {
		return IMAGE_URL + url
	}
}

export const getMoviesBySearchQuery = (query, page = 1) => {
	return HTTP.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_runtime=true`
	).then(({ results }) => {
		return results
	})
}
