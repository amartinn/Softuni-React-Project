import { Link } from 'react-router-dom'
import { BiCameraMovie as VideoIcon } from 'react-icons/bi'
import { Typography } from '../../Generic'
import styles from './asideSection.module.css'
const AsideSection = ({ title, links, link }) => {
	return (
		<section className={styles.section}>
			{link ? (
				<Link className={styles['section-title']} to={link}>
					{title}
				</Link>
			) : (
				<Typography variant={'h2'} className={styles['section-title']}>
					{title}
				</Typography>
			)}
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
