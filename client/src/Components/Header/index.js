import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm'
import styles from './header.module.css'
import { connect } from 'react-redux'
import * as userActions from '../../actions/user'
import { bindActionCreators } from 'redux'
const mapStateToProps = state => {
	return { loggedIn: state.loggedIn }
}
const mapDispatchToProps = dispatch => {
	const actions = userActions
	const actionsMap = { actions: bindActionCreators(actions, dispatch) }
	return actionsMap
}

const Header = props => {
	const { loggedIn } = props
	return (
		<header className={styles.header}>
			<SearchForm />
			<nav className={styles['header-nav']}>
				<ul className={styles['header-nav-list']}>
					{loggedIn ? (
						<li className={styles['header-nav-list-item']}>
							<button
								onClick={() => props.actions.logout()}
								className={styles['header-nav-link']}>
								Logout
							</button>
						</li>
					) : (
						<>
							<li className={styles['header-nav-list-item']}>
								<Link
									className={styles['header-nav-link']}
									to='/identity/register'>
									Register
								</Link>
							</li>
							<li className={styles['header-nav-list-item']}>
								<Link
									className={styles['header-nav-link']}
									to='/identity/login'>
									Login
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
