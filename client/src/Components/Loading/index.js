import styles from './loading.module.css'
import { usePromiseTracker } from 'react-promise-tracker'
const Loading = props => {
	const { promiseInProgress } = usePromiseTracker()
	return (
		promiseInProgress && (
			<div className={styles['loading-wrapper']}>
				<div className={styles['loading-ring']}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	)
}
export default Loading
