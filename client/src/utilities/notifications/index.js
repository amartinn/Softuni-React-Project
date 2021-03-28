import { toast } from 'react-toastify'

const options = {
	position: 'bottom-center',
	autoClose: 2000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}
export const success = message => {
	toast.success(message, options)
}

export const error = message => {
	toast.error(message, options)
}
export const info = message => {
	toast.info(message, options)
}
export const warning = message => {
	toast.warning(message, options)
}
export const dark = message => {
	toast.dark(message, options)
}
