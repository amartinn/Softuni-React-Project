import { Component } from 'react'
import APP from '../../sources'
import { Form } from '../../components/Generic'
import { Link } from 'react-router-dom'
import styles from './register.module.css'
import * as notificationHelper from '../../utilities/notifications'
import * as notificationMessages from '../../utilities/notifications/messages'
class RegisterPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			email: '',
			password: '',
			errors: [],
		}
	}
	handleChangeUserName = e => {
		this.setState({ userName: e.target.value })
	}
	handleChangeEmail = e => {
		this.setState({ email: e.target.value })
	}
	handleChangePassword = e => {
		this.setState({ password: e.target.value })
	}
	submitHandler = e => {
		e.preventDefault()
		let errors = []
		const { userName, email, password } = this.state
		if (userName === '') {
			errors.push('Username is required!')
		}
		if (email === '' || email.indexOf('@') === -1) {
			errors.push('A valid email is required!')
		}
		if (password === '' || password.length <= 6) {
			errors.push('Password should be at least 7 symbols long.')
		}
		if (errors.length !== 0) {
			this.setState({ errors: errors })
			return
		}
		this.setState({ errors: [] })
		APP.user
			.register(userName, email, password)
			.then(_ => {
				notificationHelper.success(notificationMessages.REGISTER_MESSAGE)
				this.props.history.push('/identity/login')
			})
			.catch(error => {
				this.setState({ errors: [error] })
			})
	}
	render() {
		const { userName, email, password } = this.state
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
				text: 'Email:',
				type: 'email',
				value: email,
				onChange: this.handleChangeEmail,
				placeholder: 'Email',
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
					onSubmit={this.submitHandler}
					errors={this.state.errors}
					fields={fields}
					submitValue='Register'
				/>
				<span className={styles.utilities}>
					Already an have account ?
					<Link className={styles['utilities-link']} to={'/identity/login'}>
						Login
					</Link>
				</span>
			</>
		)
	}
}

export default RegisterPage
