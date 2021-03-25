import styles from './label.module.css'
const Label = ({ label, required, ...other }) => {
	return (
		<label {...other}>
			{required && <span className={styles.requiredDot}>*</span>}
			{label}
		</label>
	)
}

export default Label
