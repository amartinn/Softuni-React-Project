import { Link } from 'react-router-dom'
import { IMAGE_URL } from '../../utilities/movieAPI/constants'
import styles from './movieThumbnail.module.css'
const MovieThumbnail = ({ id, poster_path, title }) => {
	return (
		<Link className={styles['thumbnail-link']} to={`/movies/${id}`}>
			<article className={styles['thumbnail-wrapper']}>
				<article className={styles['thumbnail-overlay']}></article>

				<img
					className={styles.thumbnail}
					src={`${IMAGE_URL}${poster_path}`}
					alt={title}
				/>
			</article>
		</Link>
	)
}

export default MovieThumbnail
