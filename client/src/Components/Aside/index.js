import AsideSection from '../AsideSection'
import styles from './aside.module.css'
import links from '../../utilities/asideLinks'
const Aside = () => {
	return (
		<aside className={styles.aside}>
			{links.map(link => (
				<AsideSection
					className={styles['aside-article']}
					key={link.title}
					{...link}
				/>
			))}
		</aside>
	)
}

export default Aside
