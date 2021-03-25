import { Switch, Route } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'

const RouteList = () => {
	return (
		<Switch>
			<Route exact path='/identity/register' component={Register}></Route>
			<Route exact path='/identity/login' component={Login}></Route>
		</Switch>
	)
}

export default RouteList
