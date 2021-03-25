import styles from './form.module.css'
import { Input, Label, Typography } from '../../'
import FormErrors from '../FormErrors'
const Form = ({ onSubmit, errors, fields, submitValue }) => {
	return (
		<>
			<div className={styles['errors-wrapper']}>
				{errors && <FormErrors errors={errors} />}
			</div>
			<form onSubmit={onSubmit} className={styles['form']}>
				<Typography variant='h1' className={styles['form-title']}>
					{submitValue}
				</Typography>
				{fields.map(({ text, ...other }) => {
					return (
						<div key={text} className={styles['form-group']}>
							<Label className={styles['form-label']} label={''} />
							<Input className={styles['form-input']} {...other} />
						</div>
					)
				})}
				<div className={styles['form-group']}>
					<Input
						className={styles['form-submit']}
						type='submit'
						value={submitValue}
					/>
				</div>
			</form>
		</>
	)
}
export default Form
