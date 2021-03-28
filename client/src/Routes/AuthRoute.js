import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { loggedIn: state.loggedIn }
}
const AuthRoute = ({ auth = false, loggedIn, ...other }) => {
	let renderFlag = true
	if (auth) {
		if (!loggedIn) {
			renderFlag = false
		}
	}
	return renderFlag ? (
		<Route {...other} />
	) : (
		<Redirect
			to={{
				pathname: '/identity/login',
			}}
		/>
	)
}

export default connect(mapStateToProps)(AuthRoute)
