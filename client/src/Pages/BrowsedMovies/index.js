import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MovieThumbnail } from '../../components/movies'
import { Typography } from '../../components/Generic'
import * as API from '../../utilities/movieAPI'
import styles from './browsedMovies.module.css'
const mapStateToProps = state => {
	return { movieIds: state.movies.browsed }
}
const BrowsedMovies = props => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		props.movieIds.forEach(id => {
			API.getMovieById(id).then(movie => {
				setMovies(prev => [...prev, movie])
			})
		})
		return () => setMovies([])
	}, [props])
	return movies && movies.length > 0 ? (
		<>
			<Typography className={styles['browsed-movies-title']} variant={'h3'}>
				Recently Browsed Movies
			</Typography>
			<div className={styles['browsed-movies-wrapper']}>
				{movies.map(movie => (
					<MovieThumbnail key={movie.id} {...movie} />
				))}
			</div>
		</>
	) : (
		<Typography className={styles['browsed-movies-title']} variant={'h3'}>
			No Browsed Movies.
		</Typography>
	)
}

export default connect(mapStateToProps)(BrowsedMovies)
