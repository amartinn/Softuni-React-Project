import { Switch } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import MovieDetails from '../Pages/MovieDetails'
import Route from './AuthRoute'
const RouteList = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/identity/register' component={Register} />
			<Route exact path='/identity/login' component={Login} />
			<Route auth exact path='/movies/:id' component={MovieDetails} />
		</Switch>
	)
}

export default RouteList
