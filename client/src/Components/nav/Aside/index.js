import { AsideSection } from '../'
import styles from './aside.module.css'
import links from '../../../utilities/asideLinks'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { loggedIn: state.loggedIn }
}

const Aside = props => {
	const { loggedIn } = props
	return (
		<aside className={styles.aside}>
			{links.map(link => {
				const render = link.auth ? link.auth && loggedIn : true
				return render ? (
					<AsideSection
						className={styles['aside-article']}
						key={link.title}
						{...link}
					/>
				) : null
			})}
		</aside>
	)
}

export default connect(mapStateToProps)(Aside)
