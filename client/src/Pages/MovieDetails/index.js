import * as API from '../../utilities/movieAPI'
import { Typography } from '../../components/Generic'
import styles from './movieDetails.module.css'
import { Video, Modal, Genre } from '../../components/movies'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as MovieActions from '../../actions/movie'
import { bindActionCreators } from 'redux'
import { useParams } from 'react-router-dom'

import * as notificationHelper from '../../utilities/notifications'
import * as notificationMessages from '../../utilities/notifications/messages'

const mapStateToProps = state => {
	return {
		favorites: state.movies.favorites,
	}
}

const mapDispatchToProps = dispatch => {
	const actions = MovieActions
	const actionsMap = { actions: bindActionCreators(actions, dispatch) }
	return actionsMap
}

const MovieDetails = props => {
	const { id } = useParams()
	const [isFavorite, setIsFavorite] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [movie, setMovie] = useState({})

	const onClickHandler = () => {
		const { actions } = props
		if (!isFavorite) {
			actions
				.addToFavorite(id)
				.then(_ =>
					notificationHelper.success(notificationMessages.ADD_TO_FAVORITES)
				)
		} else {
			actions
				.removeFromFavorites(id)
				.then(_ =>
					notificationHelper.info(notificationMessages.REMOVE_FROM_FAVORITES)
				)
		}
		setIsFavorite(previous => !previous)
	}

	useEffect(() => {
		API.getMovieById(id).then(movie => {
			let genres = movie.genres.map(x => {
				return x.id
			})
			movie.genres = genres
			setMovie(movie)
		})
	}, [id])

	const { poster_path, title, release_date, runtime, genres, overview } = movie

	return (
		<section className={styles['movie-wrapper']}>
			<img
				width={300}
				height={400}
				src={API.getMovieImage(poster_path)}
				alt={title}
			/>
			<article className={styles['movie-details']}>
				<Typography className={styles['movie-details-title']} variant='h1'>
					{title} {release_date && `(${release_date.split('-')[0]})`}
				</Typography>
				{runtime && (
					<span className={styles['movie-details-runtime']}>{runtime}min.</span>
				)}
				{genres && (
					<article className={styles['movie-details-genre-wrapper']}>
						{genres.map(genreId => (
							<Genre key={genreId} id={genreId} />
						))}
					</article>
				)}
				<article className={styles['movie-details-overview-wrapper']}>
					<h2 className={styles['movie-details-overview-title']}>Overview:</h2>
					<p className={styles['movie-details-overview']}>
						{overview ?? 'No overview available.'}
					</p>
				</article>
				<Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
					<Video searchTerm={title} />
				</Modal>
				<button
					className={styles['movie-details-btn']}
					onClick={() => setIsModalOpen(true)}>
					Trailer
				</button>
				<button
					onClick={onClickHandler}
					className={styles['movie-details-btn']}>
					{isFavorite ? 'Remove from Favorites' : 'Add To Favorites'}
				</button>
				<textarea
					placeholder={'your private notes about this movie...'}
					rows={5}
					className={styles['movie-details-comment']}></textarea>
			</article>
		</section>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
