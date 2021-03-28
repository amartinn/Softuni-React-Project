import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as API from '../../utilities/movieAPI'
import { Typography } from '../../components/Generic'
import { Genre, Video, Modal } from '../../components/movieRelated'

import styles from './movieDetails.module.css'

const MovieDetails = props => {
	const { id } = useParams()
	const [movie, setMovie] = useState({})
	const [isModalOpen, setModalOpen] = useState(false)
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
				<Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
					<Video searchTerm={title} />
				</Modal>
				<button
					className={styles['movie-details-btn']}
					onClick={() => setModalOpen(true)}>
					Trailer
				</button>
				<button className={styles['movie-details-btn']}>
					Add To Favorites
				</button>
				<textarea
					placeholder={'your private notes about this movie...'}
					rows={5}
					className={styles['movie-details-comment']}></textarea>
			</article>
		</section>
	)
}

export default MovieDetails
