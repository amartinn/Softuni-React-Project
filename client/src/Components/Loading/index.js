import styles from './loading.module.css'

const Loading = () => {
	return (
		<div className={styles['loading-wrapper']}>
			<div className={styles['loading-ring']}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
export default Loading
