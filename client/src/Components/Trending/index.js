import { Component } from 'react'
import MovieThumbnail from '../MovieThumbnail'
import styles from './trending.module.css'
import { getTrending } from '../../utilities/movieAPI'
import Switch from 'react-switch'
import { Typography } from '../Generic'
class TrendingSection extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: [],
			checked: true,
		}
	}
	componentDidMount() {
		getTrending('day').then(({ results }) => {
			this.setState({ movies: results })
		})
	}
	handleChange = checked => {
		const time_window = checked ? 'day' : 'week'
		getTrending(time_window).then(({ results }) => {
			this.setState({ checked, movies: results })
		})
	}
	render() {
		const { movies } = this.state
		return (
			<>
				<div className={styles['trending-wrapper']}>
					<Typography className={styles['trending-title']} variant={'h2'}>
						Trending
					</Typography>
					<Switch
						className={styles.switch}
						width={100}
						onColor='#10112D'
						offColor='#10112D'
						handleDiameter={30}
						uncheckedIcon={
							<span className={styles['switch-unchecked-icon']}>Week</span>
						}
						checkedIcon={
							<span className={styles['switch-checked-icon']}>Day</span>
						}
						onChange={this.handleChange}
						checked={this.state.checked}
					/>
				</div>
				<section className={styles['trending-section']}>
					{movies &&
						movies.map(movie => {
							return <MovieThumbnail key={movie.id} {...movie} />
						})}
				</section>
			</>
		)
	}
}
export default TrendingSection
