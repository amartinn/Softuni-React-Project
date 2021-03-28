import { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function authHoc(
	WrappedComponent,
	auth = false,
	redirectTo = '/identity/login'
) {
	const mapStateToProps = state => {
		return { loggedIn: state.loggedIn }
	}
	class Authentication extends Component {
		render() {
			const componentToString =
				WrappedComponent?.WrappedComponent?.toString() ||
				WrappedComponent.toString()

			// checks if use tries to go back to login/register page when loggedIN
			if (
				(componentToString.includes('LoginPage') ||
					componentToString.includes('RegisterPage')) &&
				this.props.loggedIn
			) {
				return (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
			let renderFlag = true
			// checks if wrappedComponent needs auth to be rendered
			if (auth) {
				if (!this.props.loggedIn) {
					renderFlag = false
				}
			}
			return renderFlag ? (
				<WrappedComponent {...this.props} />
			) : (
				<Redirect
					to={{
						pathname: redirectTo,
					}}
				/>
			)
		}
	}
	return connect(mapStateToProps)(Authentication)
}
