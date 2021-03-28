import { Switch, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import BrowsedMovies from '../pages/BrowsedMovies'
import { authHoc } from '../hoc/authHoc'
import browsedHoc from '../hoc/browsedMoviesHoc'

import GenericMovieListing from '../pages/GenericMovieListing'
import * as API from '../utilities/movieAPI'
const RouteList = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/identity/register' component={authHoc(Register)} />
			<Route exact path='/identity/login' component={authHoc(Login)} />
			<Route
				auth
				exact
				path='/movies/:id'
				component={authHoc(browsedHoc(MovieDetails))({})(true)}
			/>
			<Route
				auth
				exact
				path='/recent'
				component={authHoc(BrowsedMovies)({})(true)}
			/>
			<Route
				auth
				exact
				path='/upcoming/:page?'
				component={authHoc(GenericMovieListing)({
					fetchFn: API.getUpcoming,
					pageTitle: 'Upcoming Movies',
				})(true)}
			/>
			<Route
				auth
				exact
				path='/topRated/:page?'
				component={authHoc(GenericMovieListing)({
					fetchFn: API.getTopRated,
					pageTitle: 'Top Rated Movies',
				})(true)}
			/>
			<Route
				auth
				exact
				path='/Popular/:page?'
				component={authHoc(GenericMovieListing)({
					fetchFn: API.getPopular,
					pageTitle: 'Popular Movies',
				})(true)}
			/>
			<Route
				auth
				exact
				path='/playing/:page?'
				component={authHoc(GenericMovieListing)({
					fetchFn: API.getNowPlaying,
					pageTitle: 'Now Playing Movies',
				})(true)}
			/>
		</Switch>
	)
}

export default RouteList
