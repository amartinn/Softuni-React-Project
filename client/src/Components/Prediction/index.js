import * as API from '../../utilities/movieAPI'
import styles from './prediction.module.css'
import { useHistory } from 'react-router-dom'
const Prediction = ({
	title,
	poster_path,
	release_date,
	id,
	clearSearchQuery,
}) => {
	const history = useHistory()
	const clickHandler = e => {
		clearSearchQuery()
		history.push(`/movies/${id}`)
	}
	return (
		<article onClick={clickHandler} className={styles['prediction-wrapper']}>
			<img
				className={styles['prediction-image']}
				src={API.getMovieImage(poster_path)}
				alt={title}
				width={50}
				height={50}></img>
			<article className={styles['prediction-details-wrapper']}>
				<h5 className={styles['prediction-details-title']}>{title}</h5>
				<p className={styles['prediction-details-date']}>{release_date}</p>
			</article>
		</article>
	)
}
export default Prediction
