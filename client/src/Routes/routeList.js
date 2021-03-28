import { Switch, Route } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import MovieDetails from '../Pages/MovieDetails'
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
