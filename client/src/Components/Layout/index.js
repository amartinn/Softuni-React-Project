import Aside from '../Aside'
import Footer from '../Footer'
import Header from '../Header'

import styles from './layout.module.css'

const Layout = props => {
	return (
		<>
			<div className={styles.wrapper}>
				<Aside />
				<div className={styles['inner-wrapper']}>
					<Header />
					{props.children}
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Layout
