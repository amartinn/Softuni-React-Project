import styles from './footer.module.css'
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h3 className={styles['footer-title']}>Made with ❤️ by Martin Angelov</h3>
			<h5 className={styles['footer-inner-title']}>
				Powered by
				<a
					className={styles['footer-link']}
					href='https://www.themoviedb.org/'
					rel='noreferrer'
					target='_blank'>
					TheMovieDB
				</a>
			</h5>
		</footer>
	)
}

export default Footer
