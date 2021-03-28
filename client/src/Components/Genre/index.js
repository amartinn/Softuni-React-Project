import genreText from '../../utilities/genreHelper'
import styles from './genre.module.css'
const Genre = ({ id, ...other }) => {
	const text = genreText(id)
	return (
		<span {...other} className={styles.genre}>
			{text}
		</span>
	)
}
export default Genre
