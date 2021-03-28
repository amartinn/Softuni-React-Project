import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi'
import styles from './searchForm.module.css'
import { useState, useEffect } from 'react'
import * as API from '../../../utilities/movieAPI'
import { Prediction } from '../../movies'
const SearchForm = () => {
	const [query, setQuery] = useState('')
	const [movies, setMovies] = useState([])
	useEffect(() => {
		if (query === '') return
		const interval = setTimeout(() => {
			API.getMoviesBySearchQuery(query).then(movies => {
				setMovies(movies)
			})
		}, 500)
		return () => clearTimeout(interval)
	}, [query])
	return (
		<div className={styles['form-wrapper']}>
			<form className={styles['form']}>
				<SearchIcon className={styles['form-icon']} />
				<input
					onChange={e => setQuery(e.target.value)}
					autoFocus
					className={styles['form-input']}
					type='text'
					value={query}
					placeholder='Search for movies...'
				/>
			</form>

			{movies && (
				<section className={styles['search-prediction-wrapper']}>
					{movies.map(movie => (
						<Prediction
							key={movie.id}
							{...movie}
							clearSearchQuery={() => {
								setQuery('')
								setMovies([])
							}}
						/>
					))}
				</section>
			)}
		</div>
	)
}

export default SearchForm
