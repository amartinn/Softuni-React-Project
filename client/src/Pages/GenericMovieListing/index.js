import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { MovieThumbnail } from '../../components/movies'
import ReactPaginate from 'react-paginate'
import styles from './genericMovieListing.module.css'
const GenericMovieListing = ({ fetchFn, pageTitle }) => {
	const [movies, setMovies] = useState([])
	const [totalPages, setTotalPages] = useState(0)
	const { page } = useParams()
	const history = useHistory()
	useEffect(() => {
		fetchFn(page).then(({ movies, totalPages }) => {
			setMovies(movies)
			setTotalPages(totalPages)
		})
	}, [page, fetchFn])

	const handlePageChange = ({ selected }) => {
		const { pathname } = history.location
		history.push(`/${pathname.split('/')[1]}/${selected + 1}`)
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}
	return (
		<>
			<section className={styles['movies-wrapper']}>
				<h1 className={styles['movies-title']}>{pageTitle}</h1>
			</section>
			<section className={styles['movies-wrapper']}>
				{movies &&
					movies.map(movie => <MovieThumbnail key={movie.id} {...movie} />)}
			</section>

			<ReactPaginate
				className={styles['pagination']}
				previousLabel={'←'}
				nextLabel={'→'}
				pageCount={totalPages}
				marginPagesDisplayed={3}
				pageRangeDisplayed={3}
				onPageChange={handlePageChange}
				containerClassName={styles.pagination}
			/>
		</>
	)
}

export default GenericMovieListing
