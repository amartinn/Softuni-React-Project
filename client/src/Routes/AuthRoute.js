import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { loggedIn: state.loggedIn }
}
const AuthRoute = ({ auth = false, Component, loggedIn, ...other }) => {
	const isLoggedInAndAuth = loggedIn && auth
	return (
		<Route
			{...other}
			render={props => {
				return isLoggedInAndAuth ? (
					<Component {...props} />
				) : (
					<Redirect to={'/identity/login'} />
				)
			}}
		/>
	)
}

export default connect(mapStateToProps)(AuthRoute)
