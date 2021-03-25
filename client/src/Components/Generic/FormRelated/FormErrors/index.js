import styles from './errors.module.css'
const FormErrors = ({ errors }) => {
	return errors.map(error => {
		return (
			<span className={styles.error} key={error}>
				{error}
			</span>
		)
	})
}

export default FormErrors
