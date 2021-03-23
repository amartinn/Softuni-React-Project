import { Link } from 'react-router-dom'
import { BiCameraMovie as VideoIcon } from 'react-icons/bi'
import styles from './asideSection.module.css'
const AsideSection = ({ title, links }) => {
	return (
		<section className={styles.section}>
			<h2 className={styles['section-title']}>{title}</h2>
			{links.map(link => {
				return (
					<Link
						key={link.To + link.text}
						className={styles['section-link']}
						to={link.to}>
						<VideoIcon className={styles['section-icon']} />
						{link.text}
					</Link>
				)
			})}
		</section>
	)
}
export default AsideSection
