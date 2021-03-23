import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm'
import styles from './header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<SearchForm />
			<nav className={styles['header-nav']}>
				<ul className={styles['header-nav-list']}>
					<li className={styles['header-nav-list-item']}>
						<Link className={styles['header-nav-link']} to='/identity/register'>
							Register
						</Link>
					</li>
					<li className={styles['header-nav-list-item']}>
						<Link className={styles['header-nav-link']} to='/identity/login'>
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
