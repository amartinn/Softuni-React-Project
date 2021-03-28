import { Component } from 'react'
import { Form } from '../../components/Generic'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/user'
import { bindActionCreators } from 'redux'
import styles from './login.module.css'
const mapDispatchToProps = dispatch => {
	const actions = UserActions
	const actionsMap = { actions: bindActionCreators(actions, dispatch) }
	return actionsMap
}

class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			password: '',
			errors: [],
		}
	}
	handleChangeUserName = e => {
		this.setState({ userName: e.target.value })
	}
	handleChangePassword = e => {
		this.setState({ password: e.target.value })
	}
	submitHandler = e => {
		e.preventDefault()
		let errors = []
		const { userName, password } = this.state
		if (userName === '') {
			errors.push('Username is required!')
		}
		if (password === '' || password.length <= 6) {
			errors.push('Password should be at least 7 symbols long.')
		}
		if (errors.length !== 0) {
			this.setState({ errors: errors })
			return
		}
		this.setState({ errors: [] })
		this.props.actions
			.login(userName, password)
			.then(_ => {
				this.props.history.push('/')
			})
			.catch(error => this.setState({ errors: [error] }))
	}
	render() {
		const { userName, password, errors } = this.state
		const fields = [
			{
				text: 'UserName:',
				type: 'text',
				autoFocus: true,
				value: userName,
				onChange: this.handleChangeUserName,
				placeholder: 'Username',
				required: true,
			},
			{
				text: 'Password:',
				type: 'password',
				value: password,
				placeholder: 'Password',
				onChange: this.handleChangePassword,
				required: true,
			},
		]
		return (
			<>
				<Form
					errors={errors}
					onSubmit={this.submitHandler}
					fields={fields}
					submitValue='Login'
				/>
				<span className={styles.utilities}>
					Don't have an account?
					<Link className={styles['utilities-link']} to={'/identity/login'}>
						Register
					</Link>
				</span>
			</>
		)
	}
}

export default connect(null, mapDispatchToProps)(LoginPage)
