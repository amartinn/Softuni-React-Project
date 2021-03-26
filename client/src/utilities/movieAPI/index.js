import HTTP from '../../sources/HTTP'
const apiKey = '169aa130a50c8a11049cdad165dc6726'

export const getTrending = (time_window = 'day') => {
	return HTTP.get(
		`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${apiKey}`
	).then(movies => {
		return movies
	})
}
