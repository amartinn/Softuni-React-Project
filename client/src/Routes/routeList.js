import { Switch, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import authHoc from '../hoc/authHoc'
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
				component={authHoc(MovieDetails, true)}
			/>
		</Switch>
	)
}

export default RouteList
