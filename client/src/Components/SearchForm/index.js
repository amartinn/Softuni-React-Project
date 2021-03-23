import { BiSearchAlt2 as SearchIcon } from 'react-icons/bi'
import styles from './searchForm.module.css'

const SearchForm = () => {
	return (
		<form className={styles['form']}>
			<SearchIcon className={styles['form-icon']} />
			<input
				autoFocus
				className={styles['form-input']}
				type='text'
				placeholder='Search for movies...'
			/>
		</form>
	)
}

export default SearchForm
