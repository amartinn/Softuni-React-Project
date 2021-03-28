import { Switch, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import BrowsedMovies from '../pages/BrowsedMovies'
import authHoc from '../hoc/authHoc'
import browsedHoc from '../hoc/browsedMoviesHoc'
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
				component={authHoc(browsedHoc(MovieDetails), true)}
			/>
			<Route
				auth
				exact
				path='/recent'
				component={authHoc(BrowsedMovies, true)}
			/>
		</Switch>
	)
}

export default RouteList
